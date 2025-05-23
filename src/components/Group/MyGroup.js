import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import groupImage from "../../assets/masked.png";

const MyGroupContainer = styled.div`
    font-family: "Noto Sans KR", sans-serif;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const GroupImage = styled.img`
    height: 100px;
`;

const GroupName = styled(Link)`
    font-weight: bold;
    font-size: 30px;
    color: #000000;

    &:hover {
        color: rgba(48, 48, 48, 0.5);
    }
`;

export default function MyGroup({ key, name }) {

    return (
        <MyGroupContainer>
            <GroupImage src={groupImage} />
            <GroupName to="/board">{name}</GroupName>
        </MyGroupContainer>
    );
}