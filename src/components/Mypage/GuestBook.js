import React from "react";
import styled from "styled-components";
import masked from "../../assets/masked.png";

const GuestBookContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 18px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border: solid 3px #563213;
  border-radius: 100px;
`;

const Content = styled.div`
  font-weight: 500;
  font-size: 24px;
`;

export default function GuestBook({ content }) {
    return (
        <GuestBookContainer>
            <Image src={masked} />
            <Content>{content}</Content>
        </GuestBookContainer>
    );
}