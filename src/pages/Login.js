import React from "react";
import styled from "styled-components";
import InputField from "../components/Login/InputField";
import fav from "../assets/fav.png";
import { useNavigate } from "react-router-dom";

function Login({ idValue, onIdChange, pwValue, onPwChange }) {
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup"); // 회원가입 페이지로
  };

  return (
    <>
      <MainContainer>
        <BoxContainer>
          <Title>로그인</Title>
          <InputField
            label="ID"
            id="user-id"
            vaule={idValue}
            onChange={onIdChange}
            placeholder="아이디를 작성해주세요."
          />
          <InputField
            label="PW"
            id="user-password"
            type="password"
            vaule={pwValue}
            onChange={onPwChange}
            placeholder="비밀번호를 작성해주세요."
          />
          <FailTo>비밀번호가 틀렸습니다.</FailTo>
          <LoginButton>로그인</LoginButton>
          <TextContainer>
            <NormalText>회원이 아니신가요?</NormalText>
            <SignupText onClick={handleSignupClick}>회원가입</SignupText>
          </TextContainer>
        </BoxContainer>
        <Image />
      </MainContainer>
    </>
  );
}

export default Login;

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
  margin-bottom: 40px;
`;

const FailTo = styled.div`
  font-size: 14px;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 300;
  margin-left: 80px;
  margin-top: 14px;
  color: white;
`;

const LoginButton = styled.button`
  width: 226px;
  height: 60px;
  left: 232px;
  margin-top: 42px;
  margin-left: 191.5px;
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

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-family: "Noto Sans KR", sans-serif;
  margin-top: 10px;
`;

const NormalText = styled.span`
  font-size: 16px;
  color: white;
  font-weight: 400;
`;

const SignupText = styled.span`
  font-size: 16px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    text-decoration: none;
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
