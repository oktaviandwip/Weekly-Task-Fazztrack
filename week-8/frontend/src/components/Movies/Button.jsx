const Button = ({ text, width, height }) => {
  const possible = ["md:w-[140px]", "h-[50px]"];

  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <button
      className={`w-full md:w-${width} h-${height} bg-blue text-sm text-white rounded-md leading-6 tracking-[0.75px] transform active:scale-90 active:opacity-75 hover:bg-opacity-90 transition duration-300`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;
