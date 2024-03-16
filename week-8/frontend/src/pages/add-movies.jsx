import Header from "../components/Header";
import Input from "../components/Admin/Input";
import calendar from "../assets/calendar-icon.svg";
import dropdown from "../assets/dropdown.svg";
import addTime from "../assets/add-time-icon.svg";
import Button from "../components/Movies/Button";

const AddMovies = () => {
  return (
    <div className="w-full min-h-screen bg-dark-grey bg-opacity-[0.2] py-11">
      <Header />
      <main className="w-[327px] md:w-[768px] lg:w-[1000px] xl:w-[1106px] mx-auto">
        <div className="w-[732px] h-[1473px] flex flex-col justify-start items-center rounded-2xl bg-white mb-[49px] mx-auto">
          <form className="w-[616px]">
            <div className="w-[616px] mt-[52px]">
              <div className="w-full font-bold text-xl text-left leading-[30px] tracking-[0.25px]">
                Add New Movie
              </div>
            </div>

            <label htmlFor="upload-image" className="flex leading-5 mt-7 mb-3">
              Upload Image
            </label>
            <div className="relative w-[95px] h-8 bg-blue rounded-md flex flex-col justify-center items-center text-white">
              Upload
              <input
                type="file"
                id="upload-image"
                className="absolute top-0 w-full bg-transparent outline-none z-20 opacity-0"
              />{" "}
            </div>

            <Input
              name={"Movie Name"}
              type={"text"}
              width={"full"}
              height={"[64px]"}
              placeholder={"Enter movie name"}
            />
            <Input
              name={"Category"}
              type={"text"}
              width={"full"}
              height={"[64px]"}
              placeholder={"Enter category"}
            />
            <div className="relative flex justify-between items-center w-full">
              <div className="absolute top-[18px] md:top-[87px] left-[220px] w-[250px] md:w-[160px] lg:w-[234px] flex justify-between">
                <img src={dropdown} alt="dropdown icon" />
              </div>
              <Input
                name={"Release Date"}
                type={"date"}
                width={"[275px]"}
                height={"[64px]"}
              />
              <div className="h-[97px]">
                <div className="mt-[10px]">Duration (hour / minute)</div>
                <div className="flex space-x-6 mt-[-46px]">
                  <Input
                    type={"number"}
                    width={"[135px]"}
                    height={"[64px]"}
                    placeholder={"hours"}
                  />
                  <Input
                    type={"number"}
                    width={"[135px]"}
                    height={"[64px]"}
                    placeholder={"minutes"}
                  />
                </div>
              </div>
            </div>
            <Input
              name={"Director Name"}
              type={"text"}
              width={"full"}
              height={"[64px]"}
              placeholder={"Enter director name"}
            />

            <Input
              name={"Cast"}
              type={"text"}
              width={"full"}
              height={"[64px]"}
              placeholder={"Enter cast names"}
            />

            <div className="w-full leading-[20px] text-semiblack text-left mt-6 mb-3">
              Synopsis
            </div>
            <textarea
              className="w-full h-[207px] leading-[20px] bg-lighter-grey border-1 border-grey outline-none rounded px-9 py-5"
              placeholder="Enter synopsis"
              required
            />

            <Input
              name={"Add Location"}
              type={"text"}
              width={"full"}
              height={"[64px]"}
              placeholder={"Enter location"}
            />

            <div className="relative w-full flex flex-col mt-6">
              <div className="absolute top-[18px] md:top-[50px] left-6 w-[250px] md:w-[160px] lg:w-[234px] flex justify-between">
                <img src={calendar} alt="calendar icon" className="z-30" />
                <img src={dropdown} alt="dropdown icon" className="z-10" />
              </div>
              <label htmlFor="date" className="flex leading-5 mb-3">
                Set Date & Time
              </label>
              <div className="w-full md:w-[200px] lg:w-[284px] h-14 bg-[#EFF0F6] rounded-md">
                <input
                  type="date"
                  id="date"
                  value={new Date().toISOString().slice(0, 10)}
                  className="relative w-[300px] md:w-[210px] lg:w-full bg-transparent outline-none pl-[60px] xl:pl-[66px] pr-6 pt-[14px] z-20"
                />
              </div>
            </div>

            <div className="w-full h-[30px] flex items-center space-x-[30px] text-sm mt-6">
              <img src={addTime} alt="add time icon" />
              <div className="">08.30am</div>
              <div className="">10.30am</div>
            </div>

            <div className="w-full border-t-1 border-[#E6EAF0] my-6"></div>
            <Button text={"Save Movie"} width={"full"} height={"[56px]"} />
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddMovies;
