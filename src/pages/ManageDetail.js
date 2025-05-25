import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import MemberMatchInfo from "../components/ManageDetail/MemberMatchInfo";
import Button from "../components/Button";
import groupImage from "../assets/group.png";

const ManageDetailContainer = styled.div`
  width: 1280px;
  height: 720px;
  padding: 50px 60px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 55px;

  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const GroupDetailContainer = styled.div`
  width: 920px;
  padding: 40px;
  overflow: hidden;
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 42px;
`;

const GroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
`;

const GroupImage = styled.img`
  height: 120px;
`;

const GroupInfoContainer = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const GroupName = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const GroupCcreatedAt = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: #5C5752;
`;

const GroupDescription = styled.div`
  font-weight: 500;
  font-size: 25px;
`;

const MemberMatchInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 40px;
`;

export default function ManageDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name, description, createdAt } = location.state;
  
  const [members, setMembers] = useState([]);
  const [isMatch, setIsMatch] = useState(false);
  const [isReveal, setIsReveal] = useState(false);

  const fetchMembers = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      console.log("마니또 공개 여부 확인");

      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/v1/${id}/matching/results`,
        config
      );
      setMembers(
        res.data.map((m) => ({
          id: m.giverId,
          nickname: m.giverNickname,
          matchId: m.receiverId,
          matchNickname: m.receiverNickname,
        }))
      );
      setIsMatch(true);
      setIsReveal(true);
    } catch {
      try {
        console.log("그룹 멤버 조회");

        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/${id}/members`,
          config
        );
        const { matched, members } = res.data;
        setMembers(
          members.map((m) => ({
            id: m.id,
            nickname: m.nickname,
            matchId: null,
            matchNickname: null,
          }))
        );
        setIsMatch(matched);
        setIsReveal(false);
      } catch (error) {
        console.error("멤버 조회 오류:", error);
        alert("멤버 정보를 불러오는 데 실패했습니다.");
        navigate("/manage");
      }
    }
  };
  
  useEffect(() => {
    fetchMembers();
  }, []);

  const handleMatch = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    try {
      console.log("마니또 매칭 시작");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/${id}/matching/start`,
        {},
        config
      );
      alert("마니또 매칭이 완료되었습니다.");
      await fetchMembers();
    } catch (err) {
      console.error("마니또 매칭 실패:", err);
      alert("마니또 매칭에 실패했습니다.");
    }
  };

  const handleReveal = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    try {
      console.log("마니또 공개 시작");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/${id}/matching/reveal`,
        {},
        config
      );
      alert("마니또 공개가 완료되었습니다.");
      await fetchMembers();
    } catch (err) {
      console.error("마니또 공개 실패:", err);
      alert("마니또 공개에 실패했습니다.");
    }
  };

  const handleGroupDelete = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    try {
      console.log("그룹 삭제 시작");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const confirmDelete = window.confirm("정말로 이 그룹을 삭제하시겠습니까?");
      if (!confirmDelete) return;
      
      const res = await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/v1/groups/${id}`,
        config
      );

      alert("그룹이 성공적으로 삭제되었습니다.");
      navigate("/manage");
    } catch (err) {
      console.error("그룹 삭제 실패:", err);
      alert("그룹 삭제에 실패했습니다.");
    }
  };

  return (
    <ManageDetailContainer>
      <GroupDetailContainer>
        <GroupContainer>
          <GroupImage src={groupImage} />
          <GroupInfoContainer>
            <GroupName>{name}</GroupName>
            <GroupCcreatedAt>{createdAt}</GroupCcreatedAt>
            <GroupDescription>{description}</GroupDescription>
          </GroupInfoContainer>
        </GroupContainer>
        <MemberMatchInfoContainer>
          {members.map((member) => (
            <MemberMatchInfo key={member.id}
              id={member.id} nickname={member.nickname}
              isMatch={isMatch} isReveal={isReveal}
              matchId={member.matchId} matchNickname={member.matchNickname} />
          ))}
        </MemberMatchInfoContainer>
      </GroupDetailContainer>
      <ButtonContainer>
        <Button buttonText="마니또 매칭" onClick={handleMatch} />
        <Button buttonText="마니또 공개" onClick={handleReveal} />
        <Button backgroundColor="#E06A34" buttonText="그룹 삭제" onClick={handleGroupDelete} />
      </ButtonContainer>
    </ManageDetailContainer>
  );
}