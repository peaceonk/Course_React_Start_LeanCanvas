import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { FaPlus } from 'react-icons/fa';

import { TNote } from '@app-types/canvas';
import Note from 'components/Canvas/Note';

type CanvasCardProps = {
  title: string;
  isSubtitle?: boolean;
};

const CanvasCard: React.FC<CanvasCardProps> = ({
  title,
  isSubtitle = false,
}) => {
  const [notes, setNotes] = useState<TNote[]>([]);

  const handleAddNote = () => {
    setNotes([...notes, { id: uuidv4(), content: '' }]);
  };

  const handleRemoveNote = (id: string) => {
    setNotes(notes.filter(n => n.id != id));
  };

  return (
    <div className="row-span-1 bg-white min-h-48 border border-collapse border-gray-300">
      <div
        className={`${isSubtitle === false && 'bg-gray-100 border-b border-b-gray-300'} flex items-start justify-between px-3 py-2`}
      >
        <h3 className={`${isSubtitle === false && 'font-bold'} `}>{title}</h3>
        <button
          className="bg-blue-400  text-white p-1.5 text-xs rounded-md"
          onClick={handleAddNote}
        >
          <FaPlus />
        </button>
      </div>
      <div className="space-y-3 min-h-32 p-3">
        {notes.map(n => (
          <Note key={n.id} noteData={n} handleRemoveNote={handleRemoveNote} />
        ))}
      </div>
    </div>
  );
};

export default CanvasCard;
