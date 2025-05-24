import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Wrapper = styled.div`
  background-color: #d8cdb9;
  width: 100%;
  min-height: 100vh;
  padding: 60px 60px 42px 60px; /* 상단/하단 여백 포함 */
  box-sizing: border-box;
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterSection = styled.div`
  width: 1152px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
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
  height: 100%;
  &::placeholder {
    color: #000;
    font-weight: 400;
  }
`;

const PostContainer = styled.div`
  position: relative;
  background-color: white;
  width: 1152px;
  padding: 40px 56px 60px 56px;
  padding-top: 100px;
  border-radius: 30px;
  box-sizing: border-box;
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

const PostList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px; /* ✅ 회색 칸 간격 */
  margin-top: 56px; /* ✅ 글쓰기 버튼과 첫 칸 간격 */
`;

const Post = styled.div`
  background-color: #e0dfdd;
  border-radius: 15px;
  width: 1040px;
  height: 79px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

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
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const clearInput = () => setKeyword("");
  const handleWriteClick = () => {
    navigate("/board/upload");
  };

  const posts = [
    { title: "졸려운데 잠은 안 오고 같이 얘기할 사람[1]", date: "2025.04.18" },
    {
      title: "마니또라고 생각되는 사람이랑 같이 밥 먹다가....![1]",
      date: "2025.04.18",
    },
    {
      title: "새벽되니까 출출한데 야식 추천해 줄 사람 ㅋㅋㅋㅋ[3]",
      date: "2025.04.19",
    },
    {
      title: "아 나 마니또 누군지 알 것 같은데?[3]",
      date: "2025.04.21",
    },
  ];

  const sortedPosts = [...posts].reverse();

  return (
    <Wrapper>
      <FilterSection>
        <GroupButton>그룹명</GroupButton>
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

        <PostList>
          {sortedPosts.map((post, index) => (
            <Post key={index}>
              <div className="title">{post.title}</div>
              <div className="date">{post.date}</div>
            </Post>
          ))}
        </PostList>
      </PostContainer>
    </Wrapper>
  );
};

export default Board;
