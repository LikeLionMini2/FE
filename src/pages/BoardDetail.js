import React, { useState } from "react";
import styled from "styled-components";
import { FaRegHeart, FaHeart, FaRegCommentDots } from "react-icons/fa";

const Container = styled.div`
  background-color: #D8CDB9;
  min-height: 100vh;
  padding-left: 82px;
  padding-top: 121px;
  font-family: "Noto Sans KR", sans-serif;
  position: relative;
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

  return (
    <Container>
      {/* Box 1: 제목 */}
      <TitleBox height={80}>
        게시글 제목: 아 나 마니또 누군지 알 것 같은데? [3]
      </TitleBox>

      {/* Box 2: 본문 */}
      <ContentBox height={218} marginTop={43}>
        <ContentLabel>게시글 내용</ContentLabel>
        <PostContent>
          일단 2팀에 있는 것 같은데 맞을까? 뭔가 확 느껴지는 부분이 있었어!! ㅎㅎㅎ
        </PostContent>
        <EditButton>게시글 수정/삭제</EditButton>
      </ContentBox>

      {/* Box 3: 댓글 */}
      <CommentBox height={170} marginTop={31}>
        댓글 1: 악 ㅋㅋㅋㅋㅋㅋ 너 어떻게 안 거야? <br />
        • 작성자: 아, 마니또가 쪽지 남겼는데 그 쪽지에서 특유의 말투가 느껴졌어 ㅋㅋㅋㅋㅋㅋ <br />
        댓글 2: 일단 모르는 척 하자 ㅎㅎㅎㅎ
      </CommentBox>

      {/* Reaction icons */}
      <ReactionWrapper>
        <HeartIcon onClick={() => setLiked(!liked)}>
          {liked ? <FaHeart color="black" /> : <FaRegHeart />}
        </HeartIcon>
        <CommentIcon>
          <FaRegCommentDots />
        </CommentIcon>
      </ReactionWrapper>

      {/* Box 4: 댓글 입력 */}
      <CommentInputBox>
        <CommentInput placeholder="댓글 달기" />
      </CommentInputBox>
    </Container>
  );
};

export default BoardDetail;
