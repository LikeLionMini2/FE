import React, { useState } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
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

export default function ManageDetail({}) {
  const location = useLocation();
  const { id, name, description, createdAt } = location.state;

  const [isMatch, setIsMatch] = useState(false);
  const [isReveal, setIsReveal] = useState(false);

  const members = [];

  // 테스트용 멤버 생성
  for (let i = 1; i <= 5; i++) {
    members.push({ id: i, name: `마니또${i}`, matchName: `테스트${i}` });
  }

  const handleMatch = () => {
    setIsMatch(true);
    setIsReveal(false);
  };
  
  const handleReveal = () => {
    setIsReveal(true);
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
            <MemberMatchInfo key={member.id} id={member.id} name={member.name} isMatch={isMatch} isReveal={isReveal} matchName={member.matchName} />
          ))}
        </MemberMatchInfoContainer>
      </GroupDetailContainer>
      <ButtonContainer>
        <Button buttonText="마니또 매칭" onClick={handleMatch} />
        <Button buttonText="마니또 공개" onClick={handleReveal} />
        <Button backgroundColor="#E06A34" buttonText="그룹 삭제" />
      </ButtonContainer>
    </ManageDetailContainer>
  );
}