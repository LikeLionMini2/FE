import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart, FaRegCommentDots } from "react-icons/fa";

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  min-height: 832px;
  background-color: #D8CDB9;
  padding-left: 82px;
  padding-top: 121px;
  font-family: "Noto Sans KR", sans-serif;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
`;

const Box = styled.div`
  width: 1124px;
  height: ${({ height }) => height}px;
  background-color: #ffffff;
  border-radius: 20px;
  box-sizing: border-box;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.6;
  margin-top: ${({ marginTop }) => marginTop || 0}px;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled(Box)`
  height: 80px;
  justify-content: center;
  padding-left: 69px;
`;

const ContentBox = styled(Box)`
  padding-top: 24px;
  padding-left: 69px;
  padding-right: 24px;
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
  background-color: #E06A34;
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

const CommentBox = styled(Box)`
  padding: 24px 24px 24px 69px;
`;

const ReactionWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 28px;
  margin-left: 2px;
`;

const HeartIcon = styled.div`
  font-size: 32px;
  cursor: pointer;
  display: flex;
  align-items: center;
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
  width: 1124px;
  height: 68px;
  border-radius: 20px;
  padding-left: 69px;
  padding-right: 24px;
  margin-top: 12px;
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

const BoardDetail = () => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/board/upload");
  };

  return (
    <Container>
      {/* 제목 박스 */}
      <TitleBox height={80}>
        게시글 제목: 아 나 마니또 누군지 알 것 같은데? [3]
      </TitleBox>

      {/* 본문 박스 */}
      <ContentBox height={218} marginTop={43}>
        <ContentLabel>게시글 내용</ContentLabel>
        <PostContent>
          일단 2팀에 있는 것 같은데 맞을까? 뭔가 확 느껴지는 부분이 있었어!! ㅎㅎㅎ
        </PostContent>
        <EditButton onClick={handleEditClick}>게시글 수정/삭제</EditButton>
      </ContentBox>

      {/* 댓글 박스 */}
      <CommentBox height={170} marginTop={31}>
        댓글 1: 악 ㅋㅋㅋㅋㅋㅋ 너 어떻게 안 거야? <br />
        • 작성자: 아, 마니또가 쪽지 남겼는데 그 쪽지에서 특유의 말투가 느껴졌어 ㅋㅋㅋㅋㅋㅋ <br />
        댓글 2: 일단 모르는 척 하자 ㅎㅎㅎㅎ
      </CommentBox>

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

