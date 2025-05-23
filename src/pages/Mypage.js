import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import rabbit from "../assets/fav.png"
import introduce from "../assets/introduce.png";
import masked from "../assets/masked.png";
import { AiOutlineSend } from 'react-icons/ai';

const MypageContainer = styled.div`
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

const ProfileContainer = styled.div`
  width: 800px;
  height: 600px;
  border-radius: 20px 0 0 20px;
  background: #E0DFDD;
  padding: 16px 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProfileDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProfileDetailRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 16px 0;
`;

const GuestbookContainer = styled.div`
  width: 365px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const GuestbookDetailContainer = styled.div`
  width: 365px;
  height: 520px;
  border-radius: 0 20px 0 0;
  background: #E0DFDD;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 22px;
`;

const GuestbookInputContainer = styled.div`
  width: 365px;
  height: 80px;
  border-radius: 0 0 20px 0;
  background: #3C3C3C;
  padding: 25px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.span`
  font-weight: bold;
  font-size: 36px;
  color: #563213;
`;

const RabbitImage = styled.img`
  height: 500px;
`;

const IntroduceImage = styled.div`
  background-image: url(${introduce});
  background-position: left;
  background-repeat: no-repeat;
  width: 420px;
  height: 260px;
`;

const IntroduceText = styled.div`
  font-weight: bold;
  font-size: 20px;
  color: #563213;
  padding: 40px;
  width: 365px;
`;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
`;

const CommentProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border: solid 3px #563213;
  border-radius: 100px;
`;

const CommentText = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

const Input = styled.input`
  width: 280px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.19);
  border: none;
  color: white;
  padding: 10px;
  font-size: 24px;
  font-weight: 300;

  ::placeholder {
    color: white;
    opacity: 1;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.4);
  }
`;

const Icon = styled(AiOutlineSend)`
  width: 30px;
  height: 30px;
  color: white;
`;

export default function Mypage() {
  return (
    <MypageContainer>
      <ProfileContainer>
        <Title>NULL님의 MYPROFILE</Title>
        <ProfileDetailContainer>
          <RabbitImage src={rabbit} />
          <ProfileDetailRightContainer>
            <IntroduceImage>
              <IntroduceText>대충 아무 자기 소개 글</IntroduceText>
            </IntroduceImage>
            <Button backgroundColor="#E06A34" buttonText="프로필 수정" />
          </ProfileDetailRightContainer>
        </ProfileDetailContainer>
      </ProfileContainer>
      <GuestbookContainer>
        <GuestbookDetailContainer>
          <Title>방명록</Title>
          <CommentContainer>
            <CommentProfileImage src={masked} />
            <CommentText>댓글1</CommentText>
          </CommentContainer>
          <CommentContainer>
            <CommentProfileImage src={masked} />
            <CommentText>댓글2</CommentText>
          </CommentContainer>          
          <CommentContainer>
            <CommentProfileImage src={masked} />
            <CommentText>댓글3</CommentText>
          </CommentContainer>
        </GuestbookDetailContainer>
        <GuestbookInputContainer>
          <Input placeholder="방명록을 남겨주세요" />
          <Icon />
        </GuestbookInputContainer>
      </GuestbookContainer>
    </MypageContainer>
  );
}