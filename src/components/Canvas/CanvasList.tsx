import { Tdata } from '@app-types/canvas';
import CanvasItem from './CanvasItem';

type CanvasListProps = {
  searchText: string;
  isGridView: boolean;
  filteredData: Array<Tdata>;
  onDeleteItem: (id: number) => void;
};

const CanvasList: React.FC<CanvasListProps> = ({
  searchText,
  isGridView,
  filteredData,
  onDeleteItem,
}) => {
  return (
    <>
      {filteredData.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">
            {searchText ? '검색 결과가 없습니다' : '목록이 없습니다'}
          </p>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${isGridView ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}
        >
          {filteredData.map(d => {
            return (
              <CanvasItem
                key={d.id}
                data={d}
                onDelete={id => onDeleteItem(id)}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default CanvasList;
