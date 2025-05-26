
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  background-color: #d8cdb9;
  font-family: "Noto Sans KR", sans-serif;
  padding: 50px 64px 40px;
  overflow-x: hidden; 
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
`;
// over flow- x 부분부터 -ms-overflow 부분까지 스크롤축이 보이지는 않지만 위아래로 스크롤이 되게끔 하는 코드

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 42px;
`;

const GroupButton = styled.button`
  width: 217px;
  height: 45px;
  background-color: white;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  padding: 0 20px;
  width: 720px;
  height: 45px;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 18px;
  margin-right: 10px;
  color: gray;
`;

const ClearButton = styled(IoMdClose)`
  font-size: 22px;
  color: gray;
  cursor: pointer;
`;

const SearchInput = styled.input`
  flex: 1;
  font-size: 16px;
  border: none;
  outline: none;
  background: none;
  text-align: center;

  &::placeholder {
    color: #000;
    font-weight: 400;
  }
`;

const PostContainer = styled.div`
  position: relative;
  background-color: white;
  width: 100%;
  height: 580px;
  padding: 100px 56px 40px 56px;
  border-radius: 30px;
  box-sizing: border-box;
  overflow-y: auto;
`;

const WriteButton = styled.button`
  position: absolute;
  top: 40px;
  right: 56px;
  width: 178px;
  height: 50px;
  background-color: #e06a34;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const Post = styled.div`
  background-color: #e0dfdd;
  border-radius: 15px;
  width: 100%;
  height: 79px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:first-of-type {
    margin-top: 56px;
  }

  & + & {
    margin-top: 28px;
  }

  .title {
    font-size: 15px;
    font-weight: 500;
    color: black;
    margin-bottom: 5px;
  }

  .date {
    font-size: 15px;
    font-weight: 400;
    color: black;
  }
`;

const Board = () => {
  const { groupId } = useParams();
  const [keyword, setKeyword] = useState("");
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();  // 
  const { id } = location.state;   // 예진님이 알려준 코드 2개!

  const clearInput = () => setKeyword("");

  const handleWriteClick = () => {
    navigate(`/board/${groupId}/upload`);
  };
  const handleDetail = () => {
    navigate("/board/detail");
  };

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await axios.get(`https://mini2team.lion.it.kr/api/v1/${groupId}/maniposts`);
        setPosts(res.data);
      } catch (err) {
        console.error("게시글 불러오기 실패:", err);
      }
    }
    fetchPosts();
  }, [groupId]);

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(keyword.toLowerCase()) ||
      post.content.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <Container>
      <FilterSection>
        <GroupButton>그룹 {groupId}</GroupButton>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            placeholder="게시글 제목 또는 내용을 입력해주세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {keyword && <ClearButton onClick={clearInput} />}
        </SearchContainer>
      </FilterSection>

      <PostContainer>
        <WriteButton onClick={handleWriteClick}>글쓰기</WriteButton>
        {filteredPosts.map((post) => (
          <Post key={post.id}>
            <div className="title">{post.title}[{post.commentCount}]</div>
            <div className="date">{post.createdAt?.split("T")[0]}</div>
          </Post>
        ))}
      </PostContainer>
    </Container>
  );
};

export default Board;

