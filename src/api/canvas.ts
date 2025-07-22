import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

import { apiDefaultParams, searchPrams } from '@app-types/canvas';
import { baseInstance } from './http';

// 목록
export async function getCanvases(
  params: apiDefaultParams & Partial<searchPrams>,
) {
  const finalParams = Object.assign(
    {
      _sort: 'lastModified',
      _order: 'desc',
    },
    params,
  );

  console.log('getCanvases > params : ', finalParams);
  const res = await baseInstance
    .get('/canvases', { params: finalParams })
    // .then((res) => {
    //   return res;
    // })
    .catch(err => {
      if (axios.isCancel(err)) {
        console.log('요청이 취소되었습니다:', err.message);
      } else if (err.name === 'CanceledError') {
        console.log('AbortController에 의한 취소');
      } else {
        console.error('에러:', err);
      }
      return err;
    });
  console.log('getCanvases > res : ', res);

  if (res?.request?.status !== 200) {
    res.data = [];
  }

  return res.data;
}

// 저장, 수정, 삭제
export function createCanvas() {
  const newCanvas = {
    title: uuidv4().substring(0, 4) + '_새로운 린 캔버스',
    lastModified: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    category: '신규',
  };
  return baseInstance.post('/canvases', newCanvas);
}

export async function deleteCanvas(id: number) {
  //await baseInstance.delete(`/${id}`);    // 강제 404 오류 테스트
  await baseInstance.delete(`/canvases/${id}`);
}

export async function getCanvasById(id: number) {
  const { data } = await baseInstance.get(`/canvases/${id}`);
  return data;
}

export async function updateTitle(id: number, title: string) {
  await baseInstance.patch(`/canvases/${id}`, { title: title });
}
