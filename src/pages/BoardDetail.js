import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart, FaRegCommentDots } from "react-icons/fa";

const Container = styled.div`
  width: 1280px;
  height: 720px;
  background-color: #D8CDB9;
  padding: 30px 82px 60px 82px; /* 위, 좌우, 아래 패딩 */
  font-family: "Noto Sans KR", sans-serif;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;

  overflow-x: hidden;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Box = styled.div`
  width: 1116px;
  height: ${({ height }) => height}px;
  background-color: #ffffff;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  padding-top: ${({ paddingTop }) => paddingTop || 0}px;
  padding-left: ${({ paddingLeft }) => paddingLeft || 0}px;
  padding-right: ${({ paddingRight }) => paddingRight || 0}px;
  padding-bottom: ${({ paddingBottom }) => paddingBottom || 0}px;
`;

const TitleBox = styled(Box)`
  justify-content: center;
<<<<<<< HEAD
=======
  padding-left: 69px;
  /* margin-top: 50px; */
>>>>>>> 3ca1e7b7446eaee192a52522ed0f3b3f51379fa0
`;

const ContentBox = styled(Box)`
  position: relative;
`;

const ContentLabel = styled.div`
  font-weight: bold;
`;

const PostContent = styled.div`
  margin-top: 22px;
  white-space: pre-line;
`;

const EditButton = styled.button`
  background-color: #e06a34;
  color: white;
  font-size: 24px;
  font-weight: bold;
  border: none;
  padding: 12px 24px;
  border-radius: 24px;
  position: absolute;
  right: 24px;
  bottom: 24px;
  cursor: pointer;
`;

const ReactionWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 28px;
  padding-left: 2px;
`;

const HeartIcon = styled.div`
  font-size: 32px;
  cursor: pointer;
  margin-left: 20px;
`;

const CommentIcon = styled.div`
  font-size: 32px;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;

const CommentInputBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 1116px;
  height: 68px;
  border-radius: 20px;
  padding-left: 69px;
  padding-right: 24px;
  /* margin-top: 12px; */
`;

const CommentInput = styled.input`
  width: 100%;
  border: none;
  font-size: 24px;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;

  ::placeholder {
    color: #999999;
    font-weight: bold;
  }

  &:focus {
    outline: none;
  }
`;

// ✅ 박스 간 간격을 위한 Wrapper
const ContentWrapper = styled.div`
  padding-top: 43px; // Title ↔ Content 간격
`;

const CommentWrapper = styled.div`
  padding-top: 31px; // Content ↔ Comment 간격
`;

const BoardDetail = () => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/board/upload");
  };

  return (
    <Container>
      {/* 제목 박스 */}

      <TitleBox height={80} paddingLeft={69}>
        게시글 제목: 아 나 마니또 누군지 알 것 같은데? [3]
      </TitleBox>

      {/* 본문 박스 */}
      <ContentWrapper>
        <ContentBox height={218} paddingTop={24} paddingLeft={69} paddingRight={24}>
          <ContentLabel>게시글 내용</ContentLabel>
          <PostContent>
            일단 2팀에 있는 것 같은데 맞을까? 뭔가 확 느껴지는 부분이 있었어!! ㅎㅎㅎ
          </PostContent>
          <EditButton onClick={handleEditClick}>게시글 수정/삭제</EditButton>
        </ContentBox>
      </ContentWrapper>

      {/* 댓글 박스 */}
      <CommentWrapper>
        <Box
          height={170}
          paddingTop={24}
          paddingBottom={24}
          paddingLeft={69}
          paddingRight={24}
        >
          댓글 1: 악 ㅋㅋㅋㅋㅋㅋ 너 어떻게 안 거야? <br />
          • 작성자: 아, 마니또가 쪽지 남겼는데 그 쪽지에서 특유의 말투가 느껴졌어 ㅋㅋㅋㅋㅋㅋ <br />
          댓글 2: 일단 모르는 척 하자 ㅎㅎㅎㅎ
        </Box>
      </CommentWrapper>

      {/* 하트 / 댓글 아이콘 */}
      <ReactionWrapper>
        <HeartIcon onClick={() => setLiked(!liked)}>
          {liked ? <FaHeart color="black" /> : <FaRegHeart />}
        </HeartIcon>
        <CommentIcon>
          <FaRegCommentDots />
        </CommentIcon>
      </ReactionWrapper>

      {/* 댓글 입력창 */}
      <CommentInputBox>
        <CommentInput placeholder="댓글 달기" />
      </CommentInputBox>
    </Container>
  );
};

export default BoardDetail;
