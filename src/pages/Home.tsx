import { useState, useEffect } from 'react';
import { getCanvases, createCanvas, deleteCanvas } from '@api/canvas';

import {
  Tdata,
  searchPrams,
  apiDefaultParams,
  apiError,
} from '@app-types/canvas';

import ErrorCom from '../components/common/Error';
import Loading from '../components/common/Loading';
import Button from '../components/common/Button';
import CanvasList from '../components/Canvas/CanvasList';
import SearchBar from '../components/Canvas/SearchBar';
import ViewToggle from '../components/Canvas/ViewToggle';

function Home() {
  const [searchText, setSearchText] = useState<string>('');
  const [isGridView, setIsGridView] = useState<boolean>(true);
  const [initialData, setInitialData] = useState<Tdata[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<apiError | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const apiDefaultParams = { signal: controller.signal };
    const searchParams = searchText ? { title_like: searchText } : {};
    const params = Object.assign(apiDefaultParams, searchParams);
    fetchData(params);

    // react 비동기 완료전 재호출시 오류 예외처리
    return () => {
      controller.abort(); // 요청 중단
    };
  }, [searchText]);

  async function fetchData(params: apiDefaultParams & Partial<searchPrams>) {
    // const data = await fetch('http://localhost:8000/canvases')
    //   .then(res => res.json())
    //   .catch(error => console.error(error));

    // const response = await axios.get('http://localhost:8000/canvases');
    // console.log('fetchData > response : ', response);

    try {
      setIsLoading(true);

      // 로딩&오류 테스트
      // await new Promise(resolver => setTimeout(resolver, 3000));
      // throw new Error('네트워크 통신 중 오류가 발생하였습니다.');

      const data = await getCanvases(params);
      setInitialData(data);
    } catch (error) {
      console.error('fetchData > error : ', error);
      let apiError: apiError = {
        message: '네트워크 통신 중 오류가 발생하였습니다.',
      };

      if ((error as apiError)?.message) {
        apiError = error as apiError;
      }

      setError(apiError);
    } finally {
      setIsLoading(false);
    }
  }

  const handleCreateCanvas = async () => {
    try {
      setIsLoading(true);
      await createCanvas();
    } catch (error) {
      console.error('handleCreateCanvas > error :', error);

      let apiError: apiError = {
        message: '네트워크 통신 중 오류가 발생하였습니다.',
      };

      if ((error as apiError)?.message) {
        apiError = error as apiError;
      }

      alert(apiError.message);
    } finally {
      // 검색어 초기화하여 리스트 재조회
      setSearchText('');

      setIsLoading(false);
    }
  };
  // const filteredData: Tdata[] = initialData.filter(d =>
  //   d.title.toLowerCase().includes(searchText.toLowerCase()),
  // );

  const handleDeleteItem = async (id: number) => {
    if (confirm('삭제 하시겠습니까?') === false) {
      return;
    }

    console.log('onDeleteItem : ', id);
    //setInitialData(initialData.filter(d => d.id !== id));

    try {
      setIsLoading(true);
      await deleteCanvas(id);
    } catch (error) {
      console.error('handleCreateCanvas > error :', error);

      let apiError: apiError = {
        message: '네트워크 통신 중 오류가 발생하였습니다.',
      };

      if ((error as apiError)?.message) {
        apiError = error as apiError;
      }

      alert(apiError.message);
    } finally {
      setSearchText('');
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between">
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
        <ViewToggle isGridView={isGridView} setIsGridView={setIsGridView} />
      </div>
      <Button
        className={'flex justify-end mb-6'}
        onClick={handleCreateCanvas}
        loading={isLoading}
      >
        등록하기
      </Button>

      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorCom error={error} onRetry={() => {}} />
      ) : (
        <CanvasList
          searchText={searchText}
          isGridView={isGridView}
          // filteredData={filteredData}
          filteredData={initialData}
          onDeleteItem={handleDeleteItem}
        />
      )}
    </>
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
