import React from "react";
import styled from "styled-components";
import ManageGroup from "../components/Manage/ManageGroup";

const ManageContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  overflow: hidden;
`;

const Title = styled.div`
  position: absolute;
  left: 60px;
  top: 10px;
  font-family: "Damion", cursive;
  font-weight: 500;
  font-size: 48px;
  line-height: 100px;
  text-align: left;
  color: #000000;
`;

const ManageGroupContainer = styled.div`
  position: absolute;
  top: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
`;

function Manage() {
  return (
    <ManageContainer>
      <Title>Manage</Title>
      <ManageGroupContainer>
        <ManageGroup
          name={"마니또"}
          memberCount={10}
          description={"그룹에 대한 설명 어쩌구 저쩌구..."}
        />
        <ManageGroup
          name={"마니또"}
          memberCount={10}
          description={"그룹에 대한 설명 어쩌구 저쩌구..."}
        />
        <ManageGroup
          name={"마니또"}
          memberCount={10}
          description={"그룹에 대한 설명 어쩌구 저쩌구..."}
        />
      </ManageGroupContainer>
    </ManageContainer>
  );
}

export default Manage;
