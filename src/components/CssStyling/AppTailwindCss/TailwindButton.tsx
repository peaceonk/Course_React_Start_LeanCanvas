function TailwindButton({
  children,
  onClick,
}: {
  children?: React.ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      className="bg-orange-400 hover:bg-red-500 text-shadow-white font-bold py-2 px-4 rounded-full transition duration-75"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default TailwindButton;
