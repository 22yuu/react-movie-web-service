import { useState, useEffect } from "react";
import Movie from "../components/Movies";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  /* useEffect(() => {
      fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rationg=8.5&sort_by=year`
      )
        .then((response) => response.json())
        .then((json) => {
          setMovies(json.data.movies);
          setLoading(false);
        });
    }, []); 
      최신 기법은 then을 쓰지 않고 아래의 코드처럼 async await를 사용한다.
    */

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rationg=8.8&sort_by=year`
    );
    const json = await response.json();
    // -> const response = await (await fetch(...)).json(); 이렇게도 표현 가능
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              year={movie.year}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
