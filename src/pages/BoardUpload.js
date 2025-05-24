import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// ✅ 전체 배경 컨테이너
const OuterContainer = styled.div`
  background-color: #D8CDB9;
  height: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 28px; /* ✅ 버튼 위 간격을 여기서 확보 */
  font-family: 'Noto Sans KR', sans-serif;
`;

// ✅ 흰색 박스
const WhiteBox = styled.div`
  background-color: #FFFFFF;
  width: 1152px;
  height: 560px;
  border-radius: 15px;
  padding: 42px 60px 0 60px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

// ✅ 입력 섹션
const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 57px;
`;

const InputRow = styled.div`
  display: flex;
`;

const Label = styled.label`
  font-size: 24px;
  font-weight: 700;
  width: 130px;
  padding-right: 25px;
  white-space: nowrap;
`;

const TitleLabel = styled(Label)`
  padding-top: 22px; /* ✅ margin → padding */
`;

const ContentLabel = styled(Label)`
  padding-top: 4px; /* ✅ margin → padding */
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

// ✅ 버튼 영역 (WhiteBox 바깥)
const ButtonWrapper = styled.div`
  width: 1152px;
  display: flex;
  justify-content: flex-end;
  padding-top: 28px; /* ✅ margin → padding */
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
  cursor: pointer;
`;

function BoardUpload() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Board');
  };

  return (
    <OuterContainer>
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
      </WhiteBox>

      <ButtonWrapper>
        <Button onClick={handleClick}>완료</Button>
      </ButtonWrapper>
    </OuterContainer>
  );
}

export default BoardUpload;

