import React from "react";
import styled from "styled-components";
import { useState } from "react";

const PageWrapper = styled.div`
  padding: 48px;
  min-height: 100vh;
`;

const SearchTitle = styled.h2`
  margin-top: 24px;
  color: #fff;
  font-family: "Noto Sans";
  font-size: 40px;
  font-weight: 600;
`;

const SearchInputWrapper = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  color: #fff;
  font-size: 24px;
  width: 400px;
`;

const SearchUnderline = styled.div`
  width: 410px;
  height: 2px;
  background: #fff;
  margin-top: 8px;
`;

const ProductGrid = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3, 389px);
  gap: 8px;
`;

const ProductBox = styled.div`
  width: 389px;
  height: 389px;
  border-radius: 20px;
  background: #d9d9d9;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 24px;
`;

const ProductName = styled.div`
  font-size: 24px;
  margin-bottom: 8px;
`;

const ProductPrice = styled.div`
  font-size: 20px;
`;

export default function ManiMall() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    { name: "스타벅스 아메리카노", price: "1500캐롯" },
    { name: "파리바게뜨 소금빵", price: "1200캐롯" },
    { name: "BHC 뿌링클", price: "9500캐롯" },
    { name: "버거킹 와퍼세트", price: "7200캐롯" },
    { name: "이디야 토피넛 라떼", price: "4100캐롯" },
    { name: "던킨 먼치킨 10개입", price: "4300캐롯" },
    { name: "투썸 스트로베리 케이크", price: "7800캐롯" },
    { name: "설빙 인절미설빙", price: "8100캐롯" },
    { name: "BBQ 황금올리브 치킨", price: "9800캐롯" },
    { name: "맘스터치 싸이순살세트", price: "6700캐롯" },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageWrapper>
      <SearchTitle>무엇을 찾으시나요?</SearchTitle>
      <SearchInputWrapper>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="상품명을 입력해 주세요"
        />
        <SearchUnderline />
      </SearchInputWrapper>

      <ProductGrid>
        {filteredProducts.map((product, index) => (
          <ProductBox key={index}>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductBox>
        ))}
      </ProductGrid>
    </PageWrapper>
  );
}
