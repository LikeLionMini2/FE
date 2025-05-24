import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "../components/Button";
import groupImage from "../assets/group.png";

const GroupDetailContainer = styled.div`
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const GroupCardContainer = styled.div`
  width: 370px;
  height: 540px;
  padding: 50px 65px;
  border-radius: 20px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
`;

const GroupImage = styled.img`
  height: 240px;
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

const GroupCreatedAt = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: #5C5752;
`;

const GroupDescription = styled.div`
  font-weight: 500;
  font-size: 25px;
  white-space: pre-line;
`;

export default function GroupDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, name, description, createdAt } = location.state;

  const handleGroupJoin = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    try {
      console.log("그룹 가입 시작");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/groups/${id}/join`,
        {},
        config
      );
      navigate("/board", { state: { id } });
    } catch (err) {
      console.error("그룹 가입 실패:", err);
      alert("그룹 가입에 실패했습니다. 다시 시도해주세요.");
      navigate("/group");
    }
  };

  return (
  <GroupDetailContainer>
    <GroupCardContainer>
      <GroupImage src={groupImage} />
      <GroupInfoContainer>
        <GroupName>{name}</GroupName>
        <GroupCreatedAt>{createdAt}</GroupCreatedAt>
        <GroupDescription>{description}</GroupDescription>
      </GroupInfoContainer>
    </GroupCardContainer>
    <Button buttonText="그룹 가입" onClick={handleGroupJoin} />
  </GroupDetailContainer>
  );
}