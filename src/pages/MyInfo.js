import React, { useState } from "react";
import styled from "styled-components";
import InputRow from "../components/Mypage/InputRow";
import image from "../assets/fav.png";

const MyInfo = () => {
  const [form, setForm] = useState({
    name: "",
    id: "",
    email: "",
    password: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (field) => (e) => {
    setForm({ ...form, [field]: e.target.value });
  };

  const handleSave = () => {
    if (!form.name || !form.id || !form.email) {
      alert("이름, 아이디, 이메일을 입력해주세요.");
      return;
    }

    if (form.newPassword !== form.confirmPassword) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    alert("저장되었습니다.");
  };

  return (
    <Container>
      <MainBox>
        <ImageBox>
          <Image src={image} alt="토끼" />
        </ImageBox>

        <FormBox>
          <Title>00님의 MYPAGE</Title>
          <Card>
            <InputRow
              label="이름"
              value={form.name}
              onChange={handleChange("name")}
            />
            <InputRow
              label="아이디"
              value={form.id}
              onChange={handleChange("id")}
            />
            <InputRow
              label="이메일"
              value={form.email}
              onChange={handleChange("email")}
            />
            <InputRow
              label="비밀번호"
              value={form.password}
              onChange={handleChange("password")}
              type="password"
            />
            <InputRow
              label="새 비밀번호"
              value={form.newPassword}
              inputStyle={{ fontSize: "14px" }}
              onChange={handleChange("newPassword")}
              type="password"
              fontSize="14px"
              style={{ marginTop: "27px", borderBottom: "none" }}
            />
            <InputRow
              label="새 비밀번호 확인"
              value={form.confirmPassword}
              inputStyle={{ fontSize: "14px" }}
              onChange={handleChange("confirmPassword")}
              type="password"
              fontSize="14px"
              style={{ borderBottom: "none" }}
            />
          </Card>
          <SaveButton onClick={handleSave}>저장</SaveButton>
        </FormBox>
      </MainBox>
    </Container>
  );
};

export default MyInfo;

const Container = styled.div`
  width: 1280px;
  height: 720px;
  background: #d8cdb9;
  overflow: hidden;
  margin: 0 auto;
`;

const MainBox = styled.div`
  background-color: #e0dfdd;
  width: 1100px;
  height: 600px;
  margin: 50px auto;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  flex: row;
`;

const ImageBox = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 600px;
`;

const Image = styled.img`
  width: 350px;
  height: 500px;
  object-fit: contain;
`;

const FormBox = styled.div`
  flex-shrink: 0;
  margin-left: 30px;
`;

const Card = styled.div`
  background-color: rgba(89, 50, 21, 0.8);
  padding: 40px;
  border-radius: 20px;
  width: 500px;
`;

const SaveButton = styled.button`
  width: 170px;
  height: 60px;
  color: white;
  background-color: #e06a34;
  font-size: 24px;
  font-weight: 600;
  border-radius: 50px;
  border: none;
  margin: 17px auto 0 auto;
  align-items: center;
  justify-content: center;
  display: flex;
`;

const Title = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #563213;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 25px;
`;
