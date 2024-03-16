import editIcon from "../../assets/edit-icon.svg";
import eyeIcon from "../../assets/eye-icon.svg";
import deleteIcon from "../../assets/delete-icon.svg";

const ListMovie = ({
  no,
  image,
  name,
  category,
  duration_hour,
  duration_minute,
  release_date,
}) => {
  const actions = [
    {
      icon: editIcon,
      alt: "edit icon",
      bgColor: "bg-blue",
    },
    {
      icon: eyeIcon,
      alt: "view icon",
      bgColor: "bg-[#5D5FEF]",
    },
    {
      icon: deleteIcon,
      alt: "delete icon",
      bgColor: "bg-[#E82C2C]",
    },
  ];

  return (
    <>
      <div className="w-full text-sm text-[#1F4173] leading-[15px] flex justify-between items-center">
        <div className="w-[17px] h-[57px] flex justify-center items-center">
          {no}
        </div>
        <div className="w-[61px] h-[57px] flex justify-center items-center">
          <div
            className="w-[46px] h-[38px] rounded-[10px] bg-cover bg-no-repeat bg-top"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="w-[170px] h-[57px] flex justify-center items-center text-blue">
          {name}
        </div>
        <div className="w-[150px] h-[57px] flex justify-center items-center">
          {category.join(", ")}
        </div>
        <div className="w-[117px] h-[57px] flex justify-center items-center">
          {new Date(release_date).toLocaleDateString()}
        </div>
        <div className="w-[150px] h-[57px] flex justify-center items-center">
          {duration_hour} hours {duration_minute} minutes
        </div>
        <div className="w-[119px] h-[57px] flex justify-between items-center">
          {actions.map(({ icon, alt, bgColor }, index) => (
            <div
              key={index}
              className={`flex justify-center items-center size-[31px] rounded-md ${bgColor} transform active:scale-90 active:opacity-75 hover:bg-opacity-90 transition duration-300 cursor-pointer`}
            >
              <img src={icon} alt={alt} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-t-1 border-[#E6EAF0]"></div>
    </>
  );
};

export default ListMovie;
