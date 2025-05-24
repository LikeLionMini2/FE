import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyGroup from "../components/Group/MyGroup";
import AllGroup from "../components/Group/AllGroup";
import Button from "../components/Button";

const GroupContainer = styled.div`
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

const MyGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const MyGroupLeftContainer = styled.div`
  width: 920px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;

  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;  
`;

const MyGroupRightContainer = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AllGroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
`;

export default function Group() {
  const navigate = useNavigate();

  const myGroups = [];
  const allGroups = [];

  // 테스트용 그룹 생성
  for (let i = 1; i <= 10; i++) {
    myGroups.push({ id: i, name: `마니또${i}` });
    allGroups.push({ id: i, name: `마니또${i}`, description: `테스트${i}`, createdAt: "2025-05-23T19:20:43.861222" });
  }

  const handleGroupMake = () => {
    navigate("/group/make");
  };

  return (
    <GroupContainer>
      <Title className="damion">My Groups</Title>
      <MyGroupContainer>
        <MyGroupLeftContainer>
          {myGroups.map((group) => (
            <MyGroup key={group.id} id={group.id} name={group.name} />
          ))}
        </MyGroupLeftContainer>
        <MyGroupRightContainer>
          <Button buttonText="그룹 생성" onClick={handleGroupMake} />
        </MyGroupRightContainer>
      </MyGroupContainer>
      <Title className="damion">All Groups</Title>
      <AllGroupContainer>
        {allGroups.map((group) => (
          <AllGroup key={group.id} id={group.id} name={group.name} description={group.description} createdAt={group.createdAt} />
        ))}
      </AllGroupContainer>
    </GroupContainer>
  );
}