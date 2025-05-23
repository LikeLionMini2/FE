import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import masked from "../../assets/masked.png";
import hidden from "../../assets/hidden.png";

const MemberMatchInfoContainer = styled(Link)`
    width: 840px;
    height: 80px;
    border-radius: 50px;
    background: #E0DFDD;
    padding: 20px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const MemberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`;

const Image = styled.img`
    height: 40px;
`;

const Name = styled.span`
    font-family: "Noto Sans KR", sans-serif;
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.color || "#000"}
`;


function MemberMatchInfo(props) {
    const { name, isMatch, isReveal, matchName } = props;

    let matchMember;

    if(!isMatch) {
        matchMember = <Name color="#5C5752">아직 매칭되지 않았습니다</Name>;
    } else if(isMatch && !isReveal) {
        matchMember =(
            <>
                <Name>???</Name>
                <Image src={hidden} />
            </>
        )
    } else {
        matchMember =(
            <>
                <Name>{matchName}</Name>
                <Image src={masked} />
            </>
        )
    }

    return (
        <MemberMatchInfoContainer to='/mypage'>
            <MemberContainer>
                <Image src={masked} />
                <Name>{name}</Name>
            </MemberContainer>
            <MemberContainer>
                {matchMember}
            </MemberContainer>
        </MemberMatchInfoContainer>
    );
}

export default MemberMatchInfo;