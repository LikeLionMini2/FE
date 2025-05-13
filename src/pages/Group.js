import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MyGroup from "../components/Group/MyGroup";
import AllGroup from "../components/Group/AllGroup";

const GroupContainer = styled.div`
  position: relative;
  width: 1280px;
  height: 720px;
  margin: 0 auto;
  overflow: hidden;
`;

const Title = styled.div`
  position: absolute;
  left: 60px;
  top: ${props => props.top || 'auto'};
  font-family: "Damion", cursive;
  font-weight: 500;
  font-size: 48px;
  line-height: 100px;
  text-align: left;
  color: #000000;
`;

const MyGroupContainer = styled.div`
  position: absolute;
  top: 120px;
  left: 80px;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
`;

const AllGroupContainer = styled.div`
  position: absolute;
  top: 400px;
  left: 80px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
`;

const GroupMakeButtonWrapper = styled.div`
  position: absolute;
  top: 150px;
  right: 60px;
  width: 180px;
  height: 60px;
  background: #716c67;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GroupMakeButtonText = styled(Link)`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  font-size: 25px;
  color: #ffffff;

  &:hover {
      color: rgba(48, 48, 48, 0.5);
  }
`;

function Group() {
  return (
    <GroupContainer>
      <Title top="10px">My Groups</Title>
      <MyGroupContainer>
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
      </MyGroupContainer>
      <GroupMakeButtonWrapper>
          <GroupMakeButtonText to="/group/make">그룹 생성</GroupMakeButtonText>
      </GroupMakeButtonWrapper>
      <Title top="300px">All Groups</Title>
      <AllGroupContainer>
        <AllGroup 
          name={"마니또"}
          memberCount={10}
        />
        <AllGroup 
          name={"마니또"}
          memberCount={10}
        />
        <AllGroup 
          name={"마니또"}
          memberCount={10}
        />
        <AllGroup 
          name={"마니또"}
          memberCount={10}
        />
        <AllGroup 
          name={"마니또"}
          memberCount={10}
        />
        <AllGroup 
          name={"마니또"}
          memberCount={10}
        />
      </AllGroupContainer>
    </GroupContainer>
  );
}

export default Group;
