import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function GroupMake() {
  const navigate = useNavigate();

  const handleMakeClick = () => {
    alert("그룹이 생성 되었습니다.");
    navigate("/group");
  };
  return (
    <MainContainer>
      <BoxContainer>
        <Title>그룹 생성</Title>

        <InputContainer>
          <Label>그룹명</Label>
          <Input maxLength={10} placeholder="최대 10자까지 입력 가능합니다" />
        </InputContainer>

        <InputContainer>
          <Label>그룹 목적</Label>
          <InputPurpose placeholder="그룹 목적을 입력해주세요" />
        </InputContainer>
      </BoxContainer>
      <SaveButton onClick={handleMakeClick}>그룹 생성 저장</SaveButton>
    </MainContainer>
  );
}

export default GroupMake;

const MainContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  background: #d8cdb9;
  overflow: hidden;
  margin: 0 auto;
`;

const BoxContainer = styled.div`
  width: 600px;
  height: 430px;
  background-color: #ffffff;
  border-radius: 20px;
  margin: 105px auto 30px auto;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: #000;
  margin: 20px 0 15px 45px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin: 30px 0 0 45px;
`;

const Label = styled.label`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #000;
  margin-top: 10px;
  width: 140px;
`;

const Input = styled.input`
  width: 390px;
  height: 62px;
  background-color: #cac8c5;
  border: none;
  color: #000;
  border-radius: 15px;
  padding: 18px 33px;
  font-size: 18px;
  font-weight: 300;

  ::placeholder {
    color: #666;
  }
`;

const InputPurpose = styled.textarea`
  width: 390px;
  height: 175px;
  background-color: #cac8c5;
  border: none;
  color: #000;
  border-radius: 15px;
  padding: 18px 33px;
  font-size: 18px;
  font-weight: 300;
  resize: none;

  ::placeholder {
    color: #666;
  }
`;

const SaveButton = styled.button`
  width: 217px;
  height: 62px;
  background-color: #e06a34;
  border-radius: 50px;
  border: none;
  color: white;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 26px;
  font-weight: 700;
  margin-left: 531.5px;
`;
