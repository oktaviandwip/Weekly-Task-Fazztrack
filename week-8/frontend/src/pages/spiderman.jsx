import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImages from "../assets/bg-spiderman.svg";
import spiderman from "../assets/spiderman-homecoming.png";
import calendar from "../assets/calendar-icon.svg";
import time from "../assets/time-icon.svg";
import location from "../assets/location.svg";
import dropdown from "../assets/dropdown.svg";
import Button from "../components/Movies/Button";
import Pagination from "../components/Movies/Pagination";
import ebvid from "../assets/ebv-id.svg";
import hiflix from "../assets/hiflix.svg";
import cineone21 from "../assets/CineOne21.svg";

const MovieDetails = () => {
  const details = [
    ["Release date", "June 28, 2017", "Duration", "2 hrs 13 min"],
    [
      "Directed by",
      "Jon Watss",
      "Casts",
      "Tom Holland, Michael Keaton, Robert Downey Jr",
    ],
  ];

  const bookings = [
    ["Date", "date", calendar, "2024-02-28"],
    ["Time", "time", time, "08:30"],
    [
      "Location",
      "select",
      location,
      ["purwokerto", "banjarnegara", "purbalingga"],
    ],
  ];

  const cinemas = [ebvid, hiflix, cineone21, ebvid];

  return (
    <>
      <Header />
      <div
        className="w-full h-[475px] md:h-[415px] shadow-inset bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImages})`,
          backgroundPosition: "80% 0%",
        }}
      />
      <main className="w-[327px] md:w-[768px] lg:w-[1000px] xl:w-[1106px] mx-auto">
        <div className="relative flex flex-col md:flex-row justify-start items-center">
          <img
            src={spiderman}
            alt="movie image"
            className="mt-[-334px] md:mt-[-163px] w-[327px] h-[502px] md:w-[264px] md:h-[405px] md:mr-5"
          />
          <div className="w-full flex flex-col items-center md:items-start">
            <div className=" text-center md:text-left text-xl md:text-[32px] leading-[34px] font-bold tracking-[1px] my-6">
              Spider-Man: Homecoming
            </div>
            <div className="flex space-x-2">
              {["Action", "Adventure"].map((genre, index) => (
                <span
                  key={index}
                  className="px-3 py-1 mb-2 rounded-full text-dark-grey bg-light-grey tracking-[0.75px]"
                >
                  {genre}
                </span>
              ))}
            </div>
            <div className="w-full flex mt-4">
              {details.map((d, index) => (
                <div key={index}>
                  <div className="w-[160px] mr-6 md:mr-8 lg:mr-14 mb-3">
                    <div className="text-sm text-dark-grey leading-6 tracking-[0.75px]">
                      {d[0]}
                    </div>
                    <div className="leading-8 tracking-[0.75px]">{d[1]}</div>
                  </div>
                  <div className="w-[153px] md:w-full">
                    <div className="text-sm text-dark-grey leading-6 tracking-[0.75px]">
                      {d[2]}
                    </div>
                    <div className="leading-8 tracking-[0.75px]">{d[3]}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="text-xl font-semibold mt-8 mb-1">Synopsis</div>
          <div className="md:w-[700px] lg:w-[821px] text-dark-grey leading-8 tracking-[0.75px]">
            Thrilled by his experience with the Avengers, Peter returns home,
            where he lives with his Aunt May, under the watchful eye of his new
            mentor Tony Stark, Peter tries to fall back into his normal daily
            routine - distracted by thoughts of proving himself to be more than
            just your friendly neighborhood Spider-Man - but when the Vulture
            emerges as a new villain, everything that Peter holds most important
            will be threatened.
          </div>
        </div>
        <form>
          <div className="text-[32px] leading-[45px] tracking-[1px] mt-[55px] mb-[22px] md:mb-[38px]">
            Book Tickets
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:space-x-[15px] xl:space-x-[30px] space-y-3 md:space-y-0">
            {bookings.map((d, index) => (
              <div key={index} className="relative flex flex-col">
                <div className="absolute top-[18px] md:top-[65px] left-6 w-[250px] md:w-[160px] lg:w-[234px] flex justify-between">
                  <img src={d[2]} alt={`${d[1]} icon`} className="z-30" />
                  <img src={dropdown} alt="dropdown icon" className="z-10" />
                </div>
                <label
                  htmlFor={d[1]}
                  className="hidden md:block text-xl font-semibold leading-[34px] tracking-[0.5px] mb-3"
                >
                  Choose {d[0]}
                </label>
                <div className="w-full md:w-[200px] lg:w-[284px] h-14 bg-[#EFF0F6] rounded-md">
                  {index < 2 ? (
                    <input
                      type={d[1]}
                      id={d[1]}
                      value={d[3]}
                      className="relative w-[300px] md:w-[210px] lg:w-full bg-transparent outline-none pl-[60px] xl:pl-[66px] pr-6 pt-[14px] z-20"
                    />
                  ) : (
                    <select
                      id={d[0]}
                      className="relative w-full bg-transparent outline-none pl-[60px] xl:pl-[66px] pr-6 pt-[16px] z-20 appearance-none capitalize"
                    >
                      {d[3].map((option, optionIndex) => (
                        <option key={optionIndex} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  )}
                  <style>
                    {`
                      input[type="date"]::-webkit-calendar-picker-indicator {
                        opacity: 0;
                      }
                      input[type="time"]::-webkit-calendar-picker-indicator {
                        opacity: 0;
                      }
                    `}
                  </style>
                </div>
              </div>
            ))}
            <Button text={"Filter"} width={"[188px]"} height={"[56px]"} />
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full flex space-x-[34px] justify-center md:justify-start items-center my-10">
              <div className="text-xl font-semibold leading-[34px] tracking-[0.5px]">
                Choose Cinema
              </div>
              <div className="text-lg text-dark-grey font-bold leading-6 tracking-[0.75px]">
                39 Result
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row justify-between space-y-[40px] md:space-y-0">
              {cinemas.map((e, index) => (
                <div
                  key={index}
                  className="w-[327px] md:w-[180px] lg:w-[240px] xl:w-[264px] h-[157px] md:h-[120px] lg:h-[157px] border-2 flex justify-center items-center border-grey rounded-[8px]"
                >
                  <div
                    className="w-[150px] h-[83px] bg-contain bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${e})` }}
                  ></div>
                </div>
              ))}
            </div>
            <div className="my-10">
              <Pagination radius={"[8px]"} />
            </div>
            <Button text={"Book Now"} width={"[188px]"} height={"[56px]"} />
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default MovieDetails;
