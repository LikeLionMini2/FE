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
  font-family: "Damion", cursive;
  font-weight: 500;
  font-size: 48px;
  line-height: 100px;
  text-align: left;
  color: #000000;
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

  const [myGroups, setMyGroups] = useState([]);
  const [allGroups, setAllGroups] = useState([]);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const baseURL = process.env.REACT_APP_API_URL;

        const [myGroupsRes, allGroupsRes] = await Promise.all([
          axios.get(`${baseURL}/group`),
          axios.get(`${baseURL}/groups`)
        ]);

        setMyGroups(myGroupsRes.data);
        setAllGroups(allGroupsRes.data);
      } catch (error) {
        console.error("그룹 데이터를 불러오는 데 실패했습니다.", error);
      }
    };

    fetchGroups();
  }, []);

  const handleGroupMake = () => {
    navigate("/group/make");
  };

  return (
    <GroupContainer>
      <Title>My Groups</Title>
      <MyGroupContainer>
        <MyGroupLeftContainer>
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
        <MyGroup name={"마니또"} />
          {/* {myGroups.map((group) => (
            <MyGroup key={group.groupId} name={group.groupName} />
          ))} */}
        </MyGroupLeftContainer>
        <MyGroupRightContainer>
          <Button buttonText="그룹 생성" onClick={handleGroupMake} />
        </MyGroupRightContainer>
      </MyGroupContainer>
      <Title>All Groups</Title>
      <AllGroupContainer>
        <AllGroup name={"마니또"} description={"테스트"} createdAt={"2025-05-23T19:20:43.861222"} />
        <AllGroup name={"마니또"} description={"테스트"} createdAt={"2025-05-23T19:20:43.861222"} />
        <AllGroup name={"마니또"} description={"테스트"} createdAt={"2025-05-23T19:20:43.861222"} />
        <AllGroup name={"마니또"} description={"테스트"} createdAt={"2025-05-23T19:20:43.861222"} />
        <AllGroup name={"마니또"} description={"테스트"} createdAt={"2025-05-23T19:20:43.861222"} />
        {/* {allGroups.map((group) => (
          <AllGroup key={group.groupId} name={group.groupName} description={group.description} createdAt={group.createdAt} />
        ))} */}
      </AllGroupContainer>
    </GroupContainer>
  );
}