import styled from "styled-components";

const LayoutWrapper = styled.div`
  width: 805px;
  height: 659px;
  flex-shrink: 0;
  border-radius: 20px 0 0 20px;
  background: #E0DFDD;
`;

const RightPanelWrapper = styled.div`
  width: 365px;
  height: 579px;
  flex-shrink: 0;
  border-radius: 0 20px 0 0;
  background: #E0DFDD;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CommentInputWrapper = styled.div`
  display: flex;
  width: 365px;
  padding: 25px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  background: #3C3C3C;
`;

const TitleText = styled.h1`
  color: #563213;
  font-family: "Noto Sans";
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default function Mypage() {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <LayoutWrapper>
        <TitleText>NULL님의 MYPROFILE</TitleText>
      </LayoutWrapper>
      <RightPanelWrapper>
        <div style={{ flex: 1 }}></div>
        <CommentInputWrapper />
      </RightPanelWrapper>
    </div>
  );
}