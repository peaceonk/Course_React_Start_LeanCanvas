import { useState } from 'react';
import { Tdata } from '@app-types/canvas';

import CanvasList from '../components/Canvas/CanvasList';
import SearchBar from '../components/Canvas/SearchBar';
import ViewToggle from '../components/Canvas/ViewToggle';

const dummyData: Tdata[] = [
  {
    id: 1,
    title: '친환경 도시 농업 플랫폼ㅁㄴㅇㄹ',
    lastModified: '2023-06-15',
    category: '농업',
  },
  {
    id: 2,
    title: 'AI 기반 건강 관리 서비스',
    lastModified: '2023-07-02',
    category: '헬스케어',
  },
  {
    id: 3,
    title: '온라인 교육 통합 솔루션',
    lastModified: '2023-08-10',
    category: '교육',
  },
  {
    id: 4,
    title: '스마트 물류 자동화 시스템',
    lastModified: '2023-09-01',
    category: '물류',
  },
  {
    id: 5,
    title: '모바일 금융 관리 앱',
    lastModified: '2023-09-18',
    category: '금융',
  },
  {
    id: 6,
    title: '실시간 번역 챗봇',
    lastModified: '2023-10-05',
    category: 'IT',
  },
];

function Home() {
  const [searchText, setSearchText] = useState('');
  const [isGridView, setIsGridView] = useState(true);
  const [initialData, setInitaildata] = useState(dummyData);

  const filteredData: Tdata[] = initialData.filter(d =>
    d.title.toLowerCase().includes(searchText.toLowerCase()),
  );

  const onDeleteItem = (id: number) => {
    console.log('onDeleteItem : ', id);
    setInitaildata(initialData.filter(d => d.id !== id));
    return;
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>

      <CanvasList
        searchText={searchText}
        isGridView={isGridView}
        filteredData={filteredData}
        onDeleteItem={onDeleteItem}
      />
    </div>
  );
}

export default Home;

/* export default function Home() {
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
} */
