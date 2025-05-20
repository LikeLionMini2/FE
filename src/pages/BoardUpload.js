import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #D8CDB9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  background-color: #FFFFFF;
  width: 1152px;
  height: 560px;
  border-radius: 15px;
  padding: 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 57px;
  margin-top: 42px;
  margin-bottom: 42px;
`;

const InputRow = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 24px;
  font-weight: 700;
  width: 130px; /* ← 넉넉하게 너비 확보 */
  margin-right: 25px;
  white-space: nowrap; /* ← 강제로 줄바꿈 방지 */
`;

const TitleLabel = styled(Label)`
  margin-top: 22px;
`;

const ContentLabel = styled(Label)`
  margin-top: 4px;
`;

const TitleInput = styled.input`
  width: 919px;
  height: 70px;
  border-radius: 20px;
  background-color: #E0DFDD;
  border: none;
  padding: 0 20px;
  font-size: 16px;
`;

const ContentTextarea = styled.textarea`
  width: 919px;
  height: 349px;
  border-radius: 20px;
  background-color: #E0DFDD;
  border: none;
  padding: 20px;
  font-size: 16px;
  resize: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 28px;
`;

const Button = styled.button`
  width: 192px;
  height: 60px;
  background-color: #E06A34;
  color: white;
  border: none;
  border-radius: 60px;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Noto Sans KR', sans-serif;
  cursor: pointer;
`;

function BoardUpload() {
  return (
    <Container>
      <WhiteBox>
        <FormSection>
          <InputRow>
            <TitleLabel>게시글 제목</TitleLabel>
            <TitleInput />
          </InputRow>
          <InputRow>
            <ContentLabel>게시글 내용</ContentLabel>
            <ContentTextarea />
          </InputRow>
        </FormSection>

        <ButtonWrapper>
          <Button>완료</Button>
        </ButtonWrapper>
      </WhiteBox>
    </Container>
  );
}

export default BoardUpload;