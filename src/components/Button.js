import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  width: 180px;
  height: 60px;
  background: ${(props) => props.backgroundColor || "#716c67"};
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled.span`
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;

  &:hover {
    color: rgba(48, 48, 48, 0.5);
  }
`;

function Button(props) {
    const { backgroundColor, buttonText, onClick } = props;

    return (
        <ButtonWrapper backgroundColor={backgroundColor} onClick={onClick}>
            <ButtonText>{buttonText}</ButtonText>
        </ButtonWrapper>
    );
}

export default Button;