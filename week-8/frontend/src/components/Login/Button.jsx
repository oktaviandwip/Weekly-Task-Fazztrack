const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full h-12 md:h-16 bg-blue text-white font-bold rounded-md transform active:scale-90 active:opacity-75 hover:bg-opacity-90 transition duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
