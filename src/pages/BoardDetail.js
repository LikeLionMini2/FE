
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
  background-color: #ffffff;
  border-radius: 20px;
  font-size: 24px;
  font-weight: bold;

  padding: ${({ paddingTop = 0, paddingBottom = 0, paddingLeft = 0, paddingRight = 0 }) =>
    `${paddingTop}px ${paddingRight}px ${paddingBottom}px ${paddingLeft}px`};
  margin-bottom: 31px;
  white-space: pre-line;
`;

const TitleBox = styled(Box)`
  height: 80px;
  display: flex;
  align-items: center;

`;

const ContentBox = styled(Box)`
  position: relative;
  min-height: 218px;
`;

const ContentLabel = styled.div`
  font-weight: bold;
`;

const PostContent = styled.div`
  margin-top: 22px;
  font-weight: 400;
`;

const EditInput = styled.textarea`
  width: 100%;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 20px;
  padding: 12px;
  margin-top: 22px;
  border: 1px solid #ccc;
  border-radius: 10px;
  resize: vertical;
`;

const EditButton = styled.button`
  background-color: #e06a34;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  border-radius: 24px;
  position: absolute;
  right: 24px;
  bottom: 24px;
  cursor: pointer;
  margin-left: 10px;
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

const BoardDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [post, setPost] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditedContent] = useState("");

  const { groupId, manipostId } = location.state || {};
  const token = localStorage.getItem("token");


  useEffect(() => {
    if (!groupId || !manipostId) {
      alert("잘못된 접근입니다.");
      navigate("/group");
      return;
    }


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

        setEditedTitle(res.data.title);
        setEditedContent(res.data.content);

      } catch (err) {
        console.error("게시글 상세 조회 실패", err);
        alert("게시글을 불러오지 못했습니다.");
      }
    };

    fetchDetail();

  }, [groupId, manipostId, navigate, token]);

  const handleEdit = () => {
    if (window.confirm("수정하시겠습니까?")) {
      setIsEditing(true);
    }
  };

  const handleUpdate = async () => {
    if (!window.confirm("수정 내용을 저장하시겠습니까?")) return;

    try {
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/maniposts/${manipostId}`,
        {
          title: editedTitle,
          content: editedContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("수정 완료!");
      navigate("/board", { state: { id: groupId } });
    } catch (err) {
      console.error("게시글 수정 실패", err);
      alert("수정 실패!");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("정말로 삭제하시겠습니까?")) return;

    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/v1/maniposts/${manipostId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("삭제 완료!");
      navigate("/board", { state: { id: groupId } });
    } catch (err) {
      console.error("게시글 삭제 실패", err);
      alert("삭제 실패!");
    }
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

      <TitleBox paddingLeft={69}>
        게시글 제목:{" "}
        {isEditing ? (
          <EditInput
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          `${post.title} [${post.commentCount || 0}]`
        )}
      </TitleBox>

      <ContentBox paddingTop={24} paddingLeft={69} paddingRight={24}>
        <ContentLabel>게시글 내용</ContentLabel>
        {isEditing ? (
          <EditInput
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <PostContent>{post.content}</PostContent>
        )}
        {post.isMyPost && (
          <>
            {isEditing ? (
              <EditButton onClick={handleUpdate}>수정 완료</EditButton>
            ) : (
              <>
                <EditButton onClick={handleEdit}>게시글 수정</EditButton>
                <EditButton onClick={handleDelete}>게시글 삭제</EditButton>
              </>
            )}
          </>
        )}
      </ContentBox>

      <Box height={170} paddingTop={24} paddingBottom={24} paddingLeft={69} paddingRight={24}>
        댓글 1: 댓글 예시입니다. <br />
        • 작성자: 익명 <br />
        댓글 2: 좋은 글이에요!
      </Box>


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
