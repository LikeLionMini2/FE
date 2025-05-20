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
  background-color: white;
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
  gap: 57px; /* 회색 박스 간 간격 */
  margin-top: 42px;     /* 흰 박스 위 ↔ 첫 회색 박스 */
  margin-bottom: 42px;  /* 두 번째 회색 박스 ↔ 흰 박스 아래 */
`;

const InputRow = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: 600;
  width: 100px;
  margin-right: 25px;
`;

const TitleLabel = styled(Label)`
  margin-top: 22px; /* 제목 입력칸(70px)의 중앙 정렬처럼 보이게 */
`;

const ContentLabel = styled(Label)`
  margin-top: 4px; /* 내용 입력칸(349px)의 상단과 정렬되게 */
`;

const TitleInput = styled.input`
  width: 919px;
  height: 70px;
  border-radius: 20px;
  background-color: #EDEDED;
  border: none;
  padding: 0 20px;
  font-size: 16px;
`;

const ContentTextarea = styled.textarea`
  width: 919px;
  height: 349px;
  border-radius: 20px;
  background-color: #EDEDED;
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
  background-color: #E27942;
  color: white;
  border: none;
  border-radius: 60px;
  font-size: 18px;
  font-weight: 500;
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
