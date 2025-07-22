import React, { useEffect, useState } from 'react';
// import { useParams, useSearchParams, useLocation } from 'react-router-dom';

import { Tdata } from '@app-types/canvas';
import CanvasTitle from 'components/Canvas/CanvasTitle';
import LeanCanvas from 'components/Canvas/LeanCanvas';
import { useParams } from 'react-router-dom';
import { getCanvasById } from '@api/canvas';

const CanvasDetail: React.FC = () => {
  const { id } = useParams();
  const [canvas, setCanvas] = useState<Tdata>();

  useEffect(() => {
    const fetchCanvas = async () => {
      try {
        const data = await getCanvasById(Number(id));
        setCanvas(data);
      } catch (error) {
        console.error('CanvasDetail > useEffect > error : ', error);
      }
    };

    fetchCanvas();
  }, [id]);

  return (
    <div>
      <CanvasTitle titleValue={canvas?.title} />
      <LeanCanvas />
    </div>
  );
};
export default CanvasDetail;

/* 
// 예시 데이터
const canvases = [
  {
    id: '1',
    title: '비즈니스 모델 캔버스',
    description: '이곳에 상세 설명이 들어갑니다.',
    createdAt: '2024-06-01',
    // 기타 필요한 필드 추가
  },
  {
    id: '2',
    title: '비즈니스 모델 캔버스',
    description: '이곳에 상세 설명이 들어갑니다.',
    createdAt: '2024-06-02',
    // 기타 필요한 필드 추가
  },
  {
    id: '3',
    title: '비즈니스 모델 캔버스',
    description: '이곳에 상세 설명이 들어갑니다.',
    createdAt: '2024-06-03',
    // 기타 필요한 필드 추가
  },
  // ...더 많은 데이터
];

const CanvasDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // id가 일치하는 요소만 필터링
  const filtered = canvases.filter(canvas => canvas.id === id);

  // 혹은 find로 하나만 찾을 수도 있음
  // const canvas = canvases.find(canvas => canvas.id === id);

  return (
    <div>
      {filtered.length > 0 ? (
        filtered.map(canvas => (
          <div key={canvas.id}>
            <h2>{canvas.title}</h2>
            <p>{canvas.description}</p>
            <p>{canvas.createdAt}</p>
            <hr />
            <div>
              {[...searchParams.entries()].map(([key, value]) => (
                <p key={key}>
                  {key}: {value}
                </p>
              ))}
            </div>
            <hr />
            {location?.hash ? <a>hash : {location?.hash}</a> : ''}
          </div>
        ))
      ) : (
        <p>해당 캔버스를 찾을 수 없습니다.</p>
      )}
    </div>
  );
};
*/
