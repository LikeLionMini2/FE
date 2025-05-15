import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fav from '../src/fav.png';

const Container = styled.div`
  background-color: #D8CDB9;
  min-height: 100vh;
  padding: 20px 40px;
  font-family: 'Noto Sans KR', sans-serif;
`;

const SearchBox = styled.div`
  margin: 40px auto 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 500px;
  height: 40px;
  padding: 0 16px;
  font-size: 24px;
  border: none;
  border-radius: 20px;
  outline: none;
`;

const PostGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 30px;
`;

const PostCard = styled.div`
  width: 200px;
  height: 180px;
  background-color: #F8F1E7;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

const EmptySection = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const EmptyImage = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 16px;
`;

const EmptyText = styled.p`
  font-size: 36px;
  font-weight: 500;
`;

export default function BoardPopular() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // 실제 데이터로 대체 가능
    setPosts([]);
  }, []);

  return (
    <Container>

      <SearchBox>
        <SearchInput placeholder="게시글 제목 또는 내용을 입력해주세요" />
      </SearchBox>

      <PostGrid>
        <PostCard>인기글 TOP1</PostCard>
        <PostCard>인기글 TOP2</PostCard>
        <PostCard>인기글 TOP3</PostCard>
      </PostGrid>

      {posts.length === 0 && (
        <EmptySection>
          <EmptyImage src={fav} alt="검색결과 없음 토끼" />
          <EmptyText>검색 결과가 없어요</EmptyText>
        </EmptySection>
      )}
    </Container>
  );
}