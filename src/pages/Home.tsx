import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>홈</h1>
      <p>여기는 홈 페이지입니다.</p>

      <ul>
        <li>
          <Link to={`/canvases/3`}>1번 게시글</Link>
        </li>
        <li>
          <Link to={`/canvases/2?keyword=키워드&detail=상세`}>2번 게시글</Link>
        </li>
        <li>
          <Link to={`/canvases/3?keyword=키워드#HashTag`}>3번 게시글</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
