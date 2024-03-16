const Button = ({ text, width, height }) => {
  const possible = ["md:w-[140px]", "md:w-[188px]", "h-[112px]"];

  return (
    <button
      type="submit"
      value="Submit"
      className={`w-full md:w-${width} h-${height} bg-blue rounded-md flex justify-center items-center text-sm text-white leading-6 tracking-[0.75px] transform active:scale-90 active:opacity-75 hover:bg-opacity-90 transition duration-300`}
    >
      {text}
    </button>
  );
};

export default Button;
