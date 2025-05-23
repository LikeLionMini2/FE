import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
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
  height: 515px;
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
  font-family: "Noto Sans KR", sans-serif;
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

const GroupJoinButtonWrapper = styled.div`
  width: 180px;
  height: 60px;
  background: #716c67;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GroupJoinButtonText = styled(Link)`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;

  &:hover {
    color: rgba(48, 48, 48, 0.5);
  }
`;

function GroupDetail() {
  const location = useLocation();
  const { name, description, formattedDate } = location.state;

  return (
  <GroupDetailContainer>
    <GroupCardContainer>
      <GroupImage src={groupImage} />
      <GroupInfoContainer>
        <GroupName>{name}</GroupName>
        <GroupCreatedAt>{formattedDate}</GroupCreatedAt>
        <GroupDescription>
          {/* {"그룹에 대한 설명\n어쩌구 저쩌구\n다 보이도록"} */}
          {description}
        </GroupDescription>
      </GroupInfoContainer>
    </GroupCardContainer>
    <GroupJoinButtonWrapper>
      <GroupJoinButtonText to="/board">그룹 가입</GroupJoinButtonText>
    </GroupJoinButtonWrapper>
  </GroupDetailContainer>
  );
}

export default GroupDetail;
