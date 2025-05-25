import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import masked from "../../assets/masked.png";
import hidden from "../../assets/hidden.png";

const MemberMatchInfoContainer = styled.div`
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
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.color || "#000"};
    cursor: pointer;

    ${(props) =>
      props.hover &&
      `
        &:hover {
            color: rgba(48, 48, 48, 0.5);
        }
    `}
`;

export default function MemberMatchInfo({ id, nickname, isMatch, isReveal, matchId, matchNickname }) {
    const navigate = useNavigate();

    const handleProfile = (IsMe) => {
        if(IsMe) {
            navigate("/mypage", { state: { id, nickname } });
        } else if(matchId && matchNickname) {
            navigate("/mypage", { state: { id: matchId, nickname: matchNickname } });
        }
    };

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
                <Name onClick={() => handleProfile(false)} hover>{matchNickname}</Name>
                <Image src={masked} />
            </>
        )
    }

    return (
        <MemberMatchInfoContainer>
            <MemberContainer>
                <Image src={masked} />
                <Name onClick={() => handleProfile(true)} hover>{nickname}</Name>
            </MemberContainer>
            <MemberContainer>
                {matchMember}
            </MemberContainer>
        </MemberMatchInfoContainer>
    );
}