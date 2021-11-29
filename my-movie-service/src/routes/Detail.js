import { useEffect } from "react";
import { useParams } from "react-router-dom"; // useParams로 파라미터의 값을 받아올 수 있음 여기서는 영화의 id값

function Detail() {
  const { id } = useParams();
  // console.log(id);
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
