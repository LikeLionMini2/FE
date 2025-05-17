import React from "react";
import styled from "styled-components";
import InputFieldMem from "../components/Member/Member";
import fav from "../assets/fav.png";
import { useNavigate } from "react-router-dom";

function Signin({
  nameValue,
  onNameChange,
  idValue,
  onIdChange,
  mailValue,
  onMailChange,
  pwValue,
  onPwChange,
  pwcheckValue,
  onPwCheckChange,
}) {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    alert("회원가입 성공");
    navigate("/login");
  };

  return (
    <>
      <MainContainer>
        <BoxContainer>
          <Title>회원가입</Title>
          <InputFieldMem
            label="이름"
            id="user-name"
            value={nameValue}
            onChange={onNameChange}
            placeholder="이름을 작성해주세요."
          />
          <InputFieldMem
            label="아이디"
            id="user-id"
            value={idValue}
            onChange={onIdChange}
            placeholder="아이디를 작성해주세요."
          />
          <InputFieldMem
            label="이메일"
            id="user-mail"
            type="email"
            value={mailValue}
            onChange={onMailChange}
            placeholder="이메일을 작성해주세요."
          />
          <InputFieldMem
            label="비밀번호"
            id="user-password"
            type="password"
            value={pwValue}
            onChange={onPwChange}
            placeholder="비밀번호를 작성해주세요."
          />
          <InputFieldMem
            id="user-password-check"
            type="password"
            value={pwcheckValue}
            onChange={onPwCheckChange}
            placeholder="비밀번호를 다시 작성해주세요."
          />
          <FailTo>비밀번호가 틀렸습니다.</FailTo>
          <SigninButton onClick={handleSignupClick}>회원가입</SigninButton>
        </BoxContainer>
        <Image />
      </MainContainer>
    </>
  );
}

export default Signin;

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
  height: 560px;
  background-color: rgba(89, 50, 21, 0.8);
  border-radius: 20px;
  margin-left: 40px;
  margin-top: 105px;
  position: absolute;
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 700;
  font-size: 48px;
  color: white;
  margin-top: 20px;
  margin-left: 48px;
  margin-bottom: 15px;
`;

const FailTo = styled.div`
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  margin-left: 170px;
  margin-top: 8px;
  color: white;
`;

const SigninButton = styled.button`
  width: 166px;
  height: 49px;
  margin-top: 19.43px;
  margin-left: 400px;
  background: #ffffff;
  border-radius: 50px;
  border: none;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 31px;
  color: #e06a34;
  &:active {
    background-color: #e06a34;
    color: #ffffff;
  }
  &:hover {
    background-color: #e06a34;
    color: #ffffff;
  }
`;

const Image = styled.div`
  position: absolute;
  width: 400px;
  height: 613px;
  top: 120px;
  left: 757px;
  background-image: url(${fav});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;
