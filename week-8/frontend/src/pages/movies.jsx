import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import avenger from "../assets/background-login.svg";
import jhonWick3 from "../assets/jhon-wick-3.png";
import spiderman from "../assets/spiderman-homecoming.png";
import Carousel from "../components/Movies/Carousel";
import Filter from "../components/Movies/Filter";
import Movie from "../components/Home/Movie";
import Pagination from "../components/Movies/Pagination";
import Newsletter from "../components/Home/Newsletter";
import Footer from "../components/Footer";

const MovieList = () => {
  const bgImages = [avenger, jhonWick3, spiderman];
  const title = "LIST MOVIE OF THE WEEK";
  const subtitle = "Experience the Magic of Cinema: Book Your Tickets Today";

  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies/?page=1")
      .then((res) => {
        setData(res.data.rows);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <Carousel bgImages={bgImages} title={title} subtitle={subtitle} />
      <main className="w-[327px] md:w-[768px] lg:w-[1000px] xl:w-[1106px] mx-auto">
        <Filter />
        <div className="whitespace-nowrap overflow-x-auto mt-8 md:mt-14">
          <div className="grid grid-cols-4 grid-rows-3 w-[1000px] md:w-[1106px]">
            {data &&
              data.map((e) => {
                return (
                  <Movie
                    key={e.movie_id}
                    image={e.image}
                    name={e.movie_name}
                    genres={e.category}
                    recommended={e.recommended}
                    detail={e.detail}
                  />
                );
              })}
          </div>
        </div>
        <Pagination radius={"full"} />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default MovieList;
