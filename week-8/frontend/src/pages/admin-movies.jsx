import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import calendarIcon from "../assets/calendar-icon.svg";
import dropdown from "../assets/dropdown.svg";
import Button from "../components/Movies/Button";
import ListMovie from "../components/Admin/ListMovie";
import Pagination from "../components/Movies/Pagination";

const AdminMovies = () => {
  const [data, setData] = useState(null);
  const [date, setDate] = useState("2024-12-03");
  useState(new Date().toISOString().slice(0, 10));

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies/?page=1")
      .then((res) => {
        setData(res.data.rows);
        console.log(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const headerItems = [
    { label: "No", width: "w-[17px]" },
    { label: "Thumbnail", width: "w-[61px]" },
    { label: "Movie Name", width: "w-[170px]" },
    { label: "Category", width: "w-[150px]" },
    { label: "Released date", width: "w-[117px]" },
    { label: "Duration", width: "w-[150px]" },
    { label: "Action", width: "w-[119px]" },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-dark-grey bg-opacity-[0.2] py-11">
        <Header role={"admin"} />
        <main className="w-[327px] md:w-[768px] lg:w-[1000px] xl:w-[1106px] mx-auto">
          <div className="w-full h-[567px] flex flex-col justify-start items-center rounded-2xl bg-white mb-[49px]">
            <div className="w-[1012px] h-[57px] flex justify-between items-center mt-[39px]">
              <div className="font-bold text-2xl leading-[30px]">
                List Movie
              </div>
              <div className="flex">
                <div className="relative">
                  <div className="absolute top-[18px] md:top-[18px] left-6 w-[250px] md:w-[160px] lg:w-[234px] flex justify-between">
                    <img
                      src={calendarIcon}
                      alt="calendar icon"
                      className="z-30"
                    />
                    <img src={dropdown} alt="dropdown icon" className="z-10" />
                  </div>
                  <div className="w-full md:w-[200px] lg:w-[284px] h-14 bg-[#EFF0F6] rounded-md mr-[14px]">
                    <input
                      type="date"
                      id="date"
                      value={date}
                      className="relative w-[300px] md:w-[210px] lg:w-full bg-transparent outline-none pl-[60px] xl:pl-[66px] pr-6 pt-[14px] z-20"
                      onChange={(e) => handleDateChange(e.target.value)}
                    />
                    <style>
                      {`
                        input[type="date"]::-webkit-calendar-picker-indicator {
                          opacity: 0;
                        }
                      `}
                    </style>
                  </div>
                </div>
                <Button
                  text={"Add Movies"}
                  width={"[140px]"}
                  height={"[56px]"}
                />
              </div>
            </div>
            <div className="w-[1012px] h-[57px] mt-[15px]">
              <div className="w-full text-xs font-bold leading-[15px] text-[#1F4173] flex justify-between items-center">
                {headerItems.map(({ label, width }, index) => (
                  <div
                    key={index}
                    className={`${width} h-[57px] flex justify-center items-center`}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full border-t-1 border-[#E6EAF0]"></div>
            <div className="whitespace-nowrap overflow-x-auto">
              <div className="w-[1012px]">
                {data &&
                  data.slice(0, 5).map((e, index) => {
                    return (
                      <ListMovie
                        key={e.movie_id}
                        no={index + 1}
                        image={e.image}
                        name={e.movie_name}
                        category={e.category}
                        duration_hour={e.duration_hour}
                        duration_minute={e.duration_minute}
                        release_date={e.release_date}
                      />
                    );
                  })}
              </div>
            </div>
            <div className="my-3">
              <Pagination radius={"[8px]"} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminMovies;
