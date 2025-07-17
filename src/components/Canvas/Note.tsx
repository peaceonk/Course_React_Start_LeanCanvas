import { useState, useRef, useEffect } from 'react';

import { AiOutlineClose, AiOutlineCheck } from 'react-icons/ai';

import { TNote } from '@app-types/canvas';

type NoteProps = {
  noteData: TNote;
  handleRemoveNote: (id: string) => void;
};
const Note: React.FC<NoteProps> = ({ noteData, handleRemoveNote }) => {
  const colorOptions = [
    'bg-yellow-300',
    'bg-pink-300',
    'bg-blue-300',
    'bg-green-300',
  ];

  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(noteData.content);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const randomColorIndex = Math.floor(Math.random() * colorOptions.length);
  const [color, setColor] = useState(colorOptions[randomColorIndex]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height =
        textAreaRef.current.scrollHeight + 'px';
    }
  });

  return (
    <div
      className={`p-4 ${color} relative max-h-[32rem] overflow-hidden`}
      onClick={() => {
        setIsEditing(true);
      }}
    >
      <div className="absolute top-2 right-2">
        {isEditing ? (
          <button
            aria-label="Check Note"
            className="text-gray-700"
            onClick={e => {
              setIsEditing(false);
              e.stopPropagation();
            }}
          >
            <AiOutlineCheck size={20} />
          </button>
        ) : (
          <button
            aria-label="Close Note"
            className="text-gray-700"
            onClick={() => handleRemoveNote(noteData.id)}
          >
            <AiOutlineClose size={20} />
          </button>
        )}
      </div>
      <textarea
        className={`w-full h-full bg-transparent resize-none border-none focus:outline-none text-gray-900 overflow-hidden`}
        aria-label="Edit Note"
        placeholder="메모를 작성하세요."
        style={{ height: 'auto', minHeight: '8rem' }}
        readOnly={!isEditing}
        ref={textAreaRef}
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      {isEditing && (
        <div className="flex space-x-2">
          {colorOptions.map((option, index) => (
            <button
              key={index}
              className={`w-6 h-6 rounded-full cursor-pointer outline outline-gray-50 ${option}`}
              aria-label={`Change color to ${option}`}
              onClick={() => setColor(option)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Note;
