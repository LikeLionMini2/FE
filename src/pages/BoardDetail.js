import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegHeart, FaHeart, FaRegCommentDots } from "react-icons/fa";
import axios from "axios";

const Container = styled.div`
  width: 1280px;
  height: 720px;
  background-color: #D8CDB9;
  padding: 30px 82px 60px 82px;
  font-family: "Noto Sans KR", sans-serif;
  margin: 0 auto;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Box = styled.div`
  width: 1116px;
  height: ${({ height }) => height}px;
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  padding: ${({ paddingTop = 0, paddingBottom = 0, paddingLeft = 0, paddingRight = 0 }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};
`;

const TitleBox = styled(Box)`
  justify-content: center;
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
  padding: 0 24px 0 69px;
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

const ContentWrapper = styled.div`
  padding-top: 43px;
`;

const CommentWrapper = styled.div`
  padding-top: 31px;
`;

const BoardDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [post, setPost] = useState(null);

  const { groupId, manipostId } = location.state || {};

  useEffect(() => {
    if (!groupId || !manipostId) {
      alert("잘못된 접근입니다.");
      navigate("/group");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    const fetchDetail = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/${groupId}/maniposts/${manipostId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPost(res.data);
      } catch (err) {
        console.error("게시글 상세 조회 실패", err);
        alert("게시글을 불러오지 못했습니다.");
      }
    };

    fetchDetail();
  }, [groupId, manipostId, navigate]);

  const handleEditClick = () => {
    navigate(`/board/${groupId}/upload`, { state: { isEdit: true, post } });
  };

  if (!post) {
    return (
      <Container>
        <h2>게시글을 불러오는 중입니다...</h2>
      </Container>
    );
  }

  return (
    <Container>
      <TitleBox height={80} paddingLeft={69}>
        게시글 제목: {post.title} [{post.commentCount || 0}]
      </TitleBox>

      <ContentWrapper>
        <ContentBox height={218} paddingTop={24} paddingLeft={69} paddingRight={24}>
          <ContentLabel>게시글 내용</ContentLabel>
          <PostContent>{post.content}</PostContent>
          <EditButton onClick={handleEditClick}>게시글 수정/삭제</EditButton>
        </ContentBox>
      </ContentWrapper>

      <CommentWrapper>
        <Box height={170} paddingTop={24} paddingBottom={24} paddingLeft={69} paddingRight={24}>
          {/* 댓글 예시 (향후 댓글 리스트 연동 가능) */}
          댓글 1: 예시 댓글입니다.<br />
          • 작성자: 유저1<br />
          댓글 2: 좋은 글이에요!
        </Box>
      </CommentWrapper>

      <ReactionWrapper>
        <HeartIcon onClick={() => setLiked(!liked)}>
          {liked ? <FaHeart color="black" /> : <FaRegHeart />}
        </HeartIcon>
        <CommentIcon>
          <FaRegCommentDots />
        </CommentIcon>
      </ReactionWrapper>

      <CommentInputBox>
        <CommentInput placeholder="댓글 달기" />
      </CommentInputBox>
    </Container>
  );
};

export default BoardDetail;
