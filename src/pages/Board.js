import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Wrapper = styled.div`
  background-color: #d8cdb9;
  min-height: 100vh;
  padding: 40px 60px;
  font-family: "Noto Sans KR", sans-serif;
`;

const FilterSection = styled.div`
  width: 1152px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 23px; // ✅ 검색창과 흰색 창 사이 간격 23px로 수정
`;

const GroupButton = styled.button`
  width: 217px;
  height: 45px;
  background-color: white;
  border: none;
  border-radius: 30px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Noto Sans KR", sans-serif;
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
  min-height: 580px;
  padding: 40px 56px;
  padding-top: 146px; // 글쓰기 버튼과 첫 박스 사이 간격 포함
  border-radius: 30px;
  margin: 20px auto 0;
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
  font-family: "Noto Sans KR", sans-serif;
  cursor: pointer;
`;

const Post = styled.div`
  background-color: #e0dfdd;
  border-radius: 15px;
  width: 1040px;
  height: 79px;
  margin-bottom: 28px;
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
    font-family: "Noto Sans KR", sans-serif;
  }
  .date {
    font-size: 15px;
    font-weight: 400;
    color: black;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const Board = () => {
  const [keyword, setKeyword] = useState("");

  const clearInput = () => setKeyword("");

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
        <WriteButton>글쓰기</WriteButton>

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
    </Wrapper>
  );
};

export default Board;
