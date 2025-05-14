import React from "react";
import masked from "../assets/masked.png";
import fav from "../assets/fav.png";

function BoardPopular() {
  return (
    <div className="min-h-screen bg-[#D8CDB9] font-['Noto_Sans_KR']">
      {/* 상단 네비게이션 */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* 로고 */}
        <h1 className="text-[35px] font-bold font-['Figma_Hand_Bold']">ManittoTie</h1>
        {/* 메뉴 */}
        <div className="flex items-center gap-6 text-[23px] font-['Figma_Hand_Bold']">
          <a href="#">Group</a>
          <a href="#">Manage</a>
          <a href="#">Mypage</a>
          <img src={masked} alt="masked rabbit icon" className="w-6 h-6" />
        </div>
      </div>

      {/* 검색창 */}
      <div className="flex justify-center my-6">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-md w-1/2 max-w-xl">
          <span className="text-gray-400 mr-2">🔍</span>
          <input
            type="text"
            placeholder="게시글 제목 또는 내용을 입력해주세요"
            className="w-full bg-transparent outline-none text-[24px] font-medium"
          />
        </div>
      </div>

      {/* 인기글 카드 */}
      <div className="flex justify-center gap-6 mt-6 px-4">
        {["TOP1", "TOP2", "TOP3"].map((rank) => (
          <div
            key={rank}
            className="bg-[#F8F1E7] rounded-xl w-40 h-40 shadow-md flex items-center justify-center"
          >
            <span className="text-[24px] font-medium">인기글 {rank}</span>
          </div>
        ))}
      </div>

      {/* 검색 결과 없음 */}
      <div className="flex flex-col items-center mt-10">
        <img src={fav} alt="검색 결과 없음 이미지" className="w-20 h-20 mb-2" />
        <p className="text-[36px] font-medium">검색 결과가 없어요</p>
      </div>
    </div>
  );
}

export default BoardPopular;