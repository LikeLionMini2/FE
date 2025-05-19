import React, { useState } from "react";
import styled from "styled-components";
import MemberMatchInfo from "../components/ManageDetail/MemberMatchInfo";
import Button from "../components/ManageDetail/Button";
import groupImage from "../assets/group.png";

const ManageDetailContainer = styled.div`
  width: 1280px;
  height: 720px;
  margin-top: 60px;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 55px;

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const GroupDetailContainer = styled.div`
  width: 920px;
  overflow: hidden;
  padding: 40px;
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

const GroupMemberCount = styled.div`
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

function ManageDetail() {
  const [isMatch, setIsMatch] = useState(false);
  const [isPublic, setIsPublic] = useState(false);

  const handleMatch = () => {
    setIsMatch(true);
    setIsPublic(false);
  };
  
  const handlePublic = () => {
    setIsPublic(true);
  };

  return (
    <ManageDetailContainer>
      <GroupDetailContainer>
        <GroupContainer>
          <GroupImage src={groupImage} />
          <GroupInfoContainer>
            <GroupName>마니또</GroupName>
            <GroupMemberCount>10/20</GroupMemberCount>
            <GroupDescription>그룹에 대한 설명 어쩌구 저쩌구 다 보이도록</GroupDescription>
          </GroupInfoContainer>
        </GroupContainer>
        <MemberMatchInfoContainer>
          <MemberMatchInfo name="마니또" isMatch={isMatch} isPublic={isPublic} matchName="마니또" />
          <MemberMatchInfo name="마니또" isMatch={isMatch} isPublic={isPublic} matchName="마니또" />
          <MemberMatchInfo name="마니또" isMatch={isMatch} isPublic={isPublic} matchName="마니또" />
          <MemberMatchInfo name="마니또" isMatch={isMatch} isPublic={isPublic} matchName="마니또" />
          <MemberMatchInfo name="마니또" isMatch={isMatch} isPublic={isPublic} matchName="마니또" />
        </MemberMatchInfoContainer>
      </GroupDetailContainer>
      <ButtonContainer>
        <Button buttonText="마니또 매칭" onClick={handleMatch} />
        <Button buttonText="마니또 공개" onClick={handlePublic} />
        <Button backgroundColor="#E06A34" buttonText="그룹 삭제" />
      </ButtonContainer>
    </ManageDetailContainer>
  );
}

export default ManageDetail;
