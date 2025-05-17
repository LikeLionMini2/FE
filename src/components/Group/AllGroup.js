import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import groupImage from "../../assets/group.png";

const AllGroupContainer = styled(Link)`
  width: 360px;
  height: 200px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  gap: 30px;
`;

const GroupImage = styled.img`
  height: 140px;
`;

const GroupInfoContainer = styled.div`
  font-family: "Noto Sans KR", sans-serif;
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: #000000;

  &:hover {
    color: rgba(48, 48, 48, 0.5);
  }
`;

const GroupName = styled.div`
  font-weight: bold;
  font-size: 30px;
`;

const GroupMemberCount = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: #5c5752;
`;

function AllGroup(props) {
  const { name, memberCount } = props;

  return (
    <AllGroupContainer to="/group/detail">
      <GroupImage src={groupImage} />
      <GroupInfoContainer>
        <GroupName>{name}</GroupName>
        <GroupMemberCount>{memberCount}/20</GroupMemberCount>
      </GroupInfoContainer>
    </AllGroupContainer>
  );
}

export default AllGroup;
