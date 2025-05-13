import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import groupImage from "../../assets/group.png";

const ManageGroupContainer = styled.div`
    width: 1155px;
    height: 150px;
    border-radius: 20px;
    background: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 30px 15px 15px;
    gap: 25px;
`;

const GroupImage = styled.img`
    height: 120px;
`;

const GroupInfoContainer = styled.div`
    font-family: "Noto Sans KR", sans-serif;
    text-align: left;
    position: relative;
    left: -230px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const GroupName = styled.div`
    font-weight: bold;
    font-size: 30px;
`;

const GroupMemberCount = styled.div`
    font-weight: bold;
    font-size: 25px;
    color: #5C5752;
`;

const GroupDescription = styled.div`
    font-weight: 500;
    font-size: 25px;
`;

const MoreButtonWrapper = styled.div`
    width: 150px;
    height: 60px;
    background: #716c67;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const MoreButtonText = styled(Link)`
    font-family: "Damion", cursive;
    font-weight: 300;
    font-size: 25px;
    color: #ffffff;

    &:hover {
        color: rgba(48, 48, 48, 0.5);
    }
`;

function ManageGroup(props) {
    const { name, memberCount, description } = props;

    return (
        <ManageGroupContainer>
            <GroupImage src={groupImage} />
            <GroupInfoContainer>
                <GroupName>{name}</GroupName>
                <GroupMemberCount>{memberCount}/20</GroupMemberCount>
                <GroupDescription>{description}</GroupDescription>
            </GroupInfoContainer>
            <MoreButtonWrapper>
                <MoreButtonText to="/manage/detail">More</MoreButtonText>
            </MoreButtonWrapper>
        </ManageGroupContainer>
    );
}

export default ManageGroup;