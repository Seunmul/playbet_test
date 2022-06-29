import React from "react";
import "./css/board.css";

const Board = () => {
  return (
    <div className="board">
      <nav className="board-navbar">최상단 네비게이션 바</nav>
      <div className="board-menubar">메뉴 바</div>
      <div className="board-bet">베팅 정보 바</div>
      <div className="board-p">
        <div className="board-p-main">

          <div className="board-p-m-nav">
            게시판 네비바
            <div className="board-p-m-nav-menu">
              <div id="board-p-m-menu">
                게시판 메뉴 바(상단):
                <div>|전체</div>
                <div>|ㅇㅈ글</div>
              </div>
              <div id="board-p-m-btn">
                글쓰기 버튼
              </div>
            </div>
          </div>

          <div className="board-p-m-table">
            글목록
            <div className="board-p-m-table-fr">글목록 첫 행</div>
            {[1, 2, 3].map((num) => (
              <div className="board-p-m-table-list" key={num}>
                {num}
              </div>
            ))}
          </div>

          <div className="board-p-m-foot">
            게시판 풋바
            <div className="board-p-m-foot-menu">
              <div id="board-p-m-menu">
                게시판 메뉴 바(상단):
                <div>|전체</div>
                <div>|ㅇㅈ글</div>
              </div>
              <div id="board-p-m-btn">
                글쓰기 버튼
              </div>
            </div>
            <div className="board-p-footer-list"> 글 목록 번호</div>
            <div className="board-p-footer-search"> 글 검색</div>
          </div>

        </div>
        <div className="board-p-sidebar">사이드바</div>
      </div>
      <footer className="board-footbar">최하단 푸터 바</footer>
    </div>
  );
};

export default Board;
