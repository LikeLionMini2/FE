import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  background-color: #d8cdb9;
  font-family: "Noto Sans KR", sans-serif;

  padding-top: 50px;        /* 네브바 아래 여백 */
  padding-left: 64px;
  padding-right: 64px;
  padding-bottom: 40px;

  overflow-x: hidden;
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const FilterSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 42px;  /* 검색창 ↔ 흰 박스 간격 */
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
  width: 100%;
  height: 580px;
  padding: 100px 56px 40px 56px; /* 위: 글쓰기 버튼 공간 */
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
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const clearInput = () => setKeyword("");

  const handleWriteClick = () => {
    navigate("/board/upload");
  };

  return (
    <Container>
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

        <Post>
          <div className="title">아 나 마니또 누군지 알 것 같은데?[3]</div>
          <div className="date">2025.04.21</div>
        </Post>
        <Post>
          <div className="title">
            새벽되니까 출출한데 야식 추천해 줄 사람 ㅋㅋㅋㅋ[3]
          </div>
          <div className="date">2025.04.19</div>
        </Post>
        <Post>
          <div className="title">
            마니또라고 생각되는 사람이랑 같이 밥 먹다가....![1]
          </div>
          <div className="date">2025.04.18</div>
        </Post>
        <Post>
          <div className="title">졸려운데 잠은 안 오고 같이 얘기할 사람[1]</div>
          <div className="date">2025.04.18</div>
        </Post>
      </PostContainer>
    </Container>
  );
};

export default Board;
