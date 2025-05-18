import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #D8CDB9;
  min-height: 100vh;
  padding: 40px 60px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const FilterSection = styled.div`
  width: 1152px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 20px;
`;

const GroupButton = styled.button`
  width: 217px;
  height: 45px;
  background-color: white;
  border: none;
  border-radius: 25px;
  font-size: 24px;
  font-weight: 500;
  color: black;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center;
  line-height: 45px;
  cursor: pointer;
`;

const SearchBar = styled.div`
  width: 720px;
  height: 45px;
  background-color: white;
  border-radius: 25px;
  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
  flex: 1;
  padding: 12px 20px;
  border-radius: 25px;
  border: none;
  font-size: 16px;
  font-family: 'Noto Sans KR', sans-serif;
  text-align: center; /* ✅ 수평 중앙 정렬 */
  background: transparent;

  &::placeholder {
    color: #000;
    font-weight: 400;
    text-align: center; /* ✅ placeholder도 중앙 정렬 */
  }
}

  .icon {
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .search {
    color: #444;
  }

  .close {
    color: #f55;
  }
`;

const WriteButton = styled.button`
  background-color: #E06A34;
  color: white;
  border: none;
  border-radius: 25px;
  width: 178px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
  cursor: pointer;
`;

const PostContainer = styled.div`
  background-color: white;
  width: 1152px;
  padding: 40px 56px;
  border-radius: 30px;
  margin: 20px auto 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PostHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const Post = styled.div`
  background-color: #E0DFDD;
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
    font-family: 'Noto Sans KR', sans-serif;
  }

  .date {
    font-size: 15px;
    font-weight: 400;
    color: black;
    font-family: 'Noto Sans KR', sans-serif;
  }
`;

const Board = () => {
  return (
    <Wrapper>
      <FilterSection>
        <GroupButton>그룹명</GroupButton>
        <SearchBar>
          <div className="icon search">🔍</div>
          <input type="text" placeholder="게시글 제목 또는 내용을 입력해주세요" />
          <div className="icon close">❌</div>
        </SearchBar>
      </FilterSection>

      <PostContainer>
        <PostHeader>
          <WriteButton>글쓰기</WriteButton>
        </PostHeader>

        <Post>
          <div className="title">아 나 마니또 누군지 알 것 같은데?[3]</div>
          <div className="date">2025.04.21</div>
        </Post>
        <Post>
          <div className="title">새벽되니까 출출한데 야식 추천해 줄 사람 ㅋㅋㅋㅋ[3]</div>
          <div className="date">2025.04.19</div>
        </Post>
        <Post>
          <div className="title">마니또라고 생각되는 사람이랑 같이 밥 먹다가....![1]</div>
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
