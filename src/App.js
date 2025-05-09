import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/Globalstyles";
import Navbar from "./components/Navbar";

import Main from "./pages/Main";
import LogIn from "./pages/Login";
import SignIn from "./pages/Signin";
import Attendance from "./pages/Attendance";
import Board from "./pages/Board";
import BoardDetail from "./pages/BoardDetail";
import BoardPopular from "./pages/BoardPopular";
import BoardUpload from "./pages/BoardUpload";
import Group from "./pages/Group";
import GroupDetail from "./pages/GroupDetail";
import GroupMake from "./pages/GroupMake";
import Manage from "./pages/Manage";
import ManageDetail from "./pages/ManageDetail";
import ManiMall from "./pages/ManiMall";
import Mypage from "./pages/Mypage";
import MypageUpload from "./pages/MypageUpload";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <div className="app-container">
        <Navbar />
        <Routes>
          {/* 로그인 전 메인화면 */}
          <Route path="/" element={<Main />} />

          {/* 로그인/회원가입 */}
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignIn />} />

          {/* 마이 페이지 */}
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/attendance" element={<Attendance />} />
          <Route path="/mypage/upload" element={<MypageUpload />} />
          <Route path="/mypage/manimall" element={<ManiMall />} />

          {/* 관리자페이지 */}
          <Route path="/manage" element={<Manage />} />
          <Route path="/manage/detail" element={<ManageDetail />} />

          {/* 그룹페이지 */}
          <Route path="/group" element={<Group />} />
          <Route path="/group/detail" element={<GroupDetail />} />
          <Route path="/group/make" element={<GroupMake />} />

          {/* 게시판 */}
          <Route path="/board" element={<Board />} />
          <Route path="/board/detail" element={<BoardDetail />} />
          <Route path="/board/popular" element={<BoardPopular />} />
          <Route path="/board/upload" element={<BoardUpload />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
