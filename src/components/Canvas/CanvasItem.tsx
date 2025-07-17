import { Link } from 'react-router-dom';

import { FaTrash } from 'react-icons/fa';

import { Tdata } from '@app-types/canvas';

type CanvasItemProps = {
  data: Tdata;
  onDelete: (id: number) => void;
};

const CanvasItem: React.FC<CanvasItemProps> = ({ data, onDelete }) => {
  return (
    <Link
      className="group relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
      to={`/canvases/${data.id}`}
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{data.title}</h2>
        <p className="text-sm text-gray-600 mb-4">
          최근 수정일: {data.lastModified}
        </p>
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full">
          {data.category}
        </span>
      </div>
      <button
        className="absolute top-2 right-2 p-2 text-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        aria-label="Delete"
        onClick={e => {
          e.preventDefault(); // 네비게이션(기본 동작) 방지
          // e.stopPropagation(); // 이벤트 전파 방지
          onDelete(data.id);
        }}
      >
        <FaTrash />
      </button>
    </Link>
  );
};

export default CanvasItem;
