import React, { useEffect, useState } from "react";
import styled from "styled-components";
import masked from "../assets/masked.png";
import fav from "../assets/fav.png";
import { FaSearch } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Container = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  background: #d8cdb9;
  overflow: hidden;
  margin: 0 auto;
`;

const SearchBox = styled.div`
  margin: 36px auto 30px;
  display: flex;
  justify-content: center;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  padding: 0 20px;
  width: 600px;
  height: 50px;
`;

const SearchIcon = styled(FaSearch)`
  font-size: 18px;
  margin-right: 10px;
  color: gray;
`;

const SearchInput = styled.input`
  flex: 1;
  font-size: 18px;
  border: none;
  outline: none;
  background: none;
  text-align: center;
  line-height: 50px;
  height: 50px;
`;

const ClearButton = styled(IoMdClose)`
  font-size: 22px;
  color: gray;
  cursor: pointer;
  margin-right: 8px;
`;

const PostGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 82px;
  margin-top: 44px;
  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;
`;

const PostCard = styled.div`
  width: 319px;
  height: 313px;
  background-color: #f8f1e7;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 40px;
  font-size: 20px;
  text-align: center;
`;

const EmptySection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 44px; // 카드와의 거리
  margin-bottom: 116px; // 하단 여백
  gap: 85px; // 토끼 ↔ 텍스트 가로 거리
  flex-direction: row; // 반드시 수평 정렬
`;

const EmptyImage = styled.img`
  width: 150px;
  height: auto;
  /* aspect-ratio: 0.55; */
  object-fit: contain;
`;

const EmptyText = styled.p`
  font-size: 36px;
  font-weight: 500;
  line-height: 1.4;
  width: 190px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export default function BoardPopular() {
  const [posts, setPosts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    // 실제 인기글 API 데이터로 대체 가능
    setPosts([]); // 검색 결과 없음 표시
  }, []);

  const clearInput = () => setKeyword("");

  return (
    <Container>
      <SearchBox>
        <SearchContainer>
          <SearchIcon />
          <SearchInput
            placeholder="게시글 제목 또는 내용을 입력해주세요"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {keyword && <ClearButton onClick={clearInput} />}
        </SearchContainer>
      </SearchBox>

      <PostGrid>
        <PostCard>인기글 TOP1</PostCard>
        <PostCard>인기글 TOP2</PostCard>
        <PostCard>인기글 TOP3</PostCard>
      </PostGrid>

      {posts.length === 0 && (
        <EmptySection>
          <EmptyImage src={fav} alt="검색결과 없음 토끼" />
          <EmptyText>
            검색 결과가
            <br /> 없어요
          </EmptyText>
        </EmptySection>
      )}
    </Container>
  );
}
