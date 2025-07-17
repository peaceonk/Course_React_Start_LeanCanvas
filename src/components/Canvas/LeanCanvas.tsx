import { v4 as uuidv4 } from 'uuid';

import CanvasCard from 'components/Canvas/CanvasCard';

interface TDummyCard {
  id: string;
  title: string;
  isSubtitle?: boolean;
}

const dummyCards1: TDummyCard[] = [
  { id: uuidv4(), title: '1. 문제' },
  { id: uuidv4(), title: '4. 해결안' },
  { id: uuidv4(), title: '3 가치제안' },
  { id: uuidv4(), title: '5. 경쟁우위' },
  { id: uuidv4(), title: '2. 목표고객' },
  { id: uuidv4(), title: '기존 대안', isSubtitle: true },
  { id: uuidv4(), title: '8. 핵심지표' },
  { id: uuidv4(), title: '상위개념', isSubtitle: true },
  { id: uuidv4(), title: '9. 고객경로' },
  { id: uuidv4(), title: '얼리 어답터', isSubtitle: true },
];

const dummyCards2: TDummyCard[] = [
  { id: uuidv4(), title: '7. 비용구조' },
  { id: uuidv4(), title: '6. 수익흐름' },
];

const LeanCanvas: React.FC = () => {
  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        {dummyCards1.map(c => (
          <CanvasCard key={c.id} title={c.title} isSubtitle={c?.isSubtitle} />
        ))}
      </div>
      <div className="grid grid-cols-2">
        {dummyCards2.map(c => (
          <CanvasCard key={c.id} title={c.title} isSubtitle={c?.isSubtitle} />
        ))}
      </div>
    </div>
  );
};

/*
const LeanCanvas: React.FC = () => {
  return (
    <div className="border-4 border-black">
      <div className="grid grid-cols-5">
        {dummyCards1.map(c => (
          <CanvasCard title={c.title} isSubtitle={c?.isSubtitle} />
        ))}

        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="bg-gray-100 border-b border-b-gray-300 flex items-start justify-between px-3 py-2">
            <h3 className="font-bold">1. 문제</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div> 
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="bg-gray-100 border-b border-b-gray-300 flex items-start justify-between px-3 py-2">
            <h3 className="font-bold">4. 해결안</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="bg-gray-100 border-b border-b-gray-300 flex items-start justify-between px-3 py-2">
            <h3 className="font-bold">3. 가치제안</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="bg-gray-100 border-b border-b-gray-300 flex items-start justify-between px-3 py-2">
            <h3 className="font-bold">5. 경쟁우위</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="bg-gray-100 border-b border-b-gray-300 flex items-start justify-between px-3 py-2">
            <h3 className="font-bold">2. 목표 고객</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
        
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="flex items-start justify-between px-3 py-2">
            <h3>기존 대안</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="bg-gray-100 border-b border-b-gray-300 flex items-start justify-between px-3 py-2">
            <h3 className="font-bold">8. 핵심지표</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="flex items-start justify-between px-3 py-2">
            <h3>상위개념</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="bg-gray-100 border-b border-b-gray-300 flex items-start justify-between px-3 py-2">
            <h3 className="font-bold">9. 고객 경로</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="flex items-start justify-between px-3 py-2">
            <h3>얼리 어답터</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="bg-gray-100 border-b border-b-gray-300 flex items-start justify-between px-3 py-2">
            <h3 className="font-bold">7. 비용 구조</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
        <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
          <div className="bg-gray-100 border-b border-b-gray-300 flex items-start justify-between px-3 py-2">
            <h3 className="font-bold">6. 수익 흐름</h3>
            <button className="bg-blue-400  text-white p-1.5 text-xs rounded-md">
              <FaPlus />
            </button>
          </div>
          <div className="space-y-3 min-h-32 p-3">memo..</div>
        </div>
      </div>
    </div>
  );
};
*/

export default LeanCanvas;
