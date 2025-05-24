import React from "react";
import styled from "styled-components";
import ManageGroup from "../components/Manage/ManageGroup";

const ManageContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  padding: 10px 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;

  overflow: hidden;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

const Title = styled.div`
  font-size: 48px;
  line-height: 100px;
`;

const ManageGroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
`;

export default function Manage() {
  const manageGroups = [];

  // 테스트용 그룹 생성
  for (let i = 1; i <= 5; i++) {
    manageGroups.push({ id: i, name: `마니또${i}`, description: `테스트${i}`, createdAt: "2025-05-23T19:20:43.861222" });
  }

  return (
    <ManageContainer>
      <Title className="damion">Manage</Title>
      <ManageGroupContainer>
        {manageGroups.map((group) => (
          <ManageGroup key={group.id} id={group.id} name={group.name} description={group.description} createdAt={group.createdAt} />
        ))}
      </ManageGroupContainer>
    </ManageContainer>
  );
}