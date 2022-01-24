
import { useEffect, useState } from "react";
import movieDB from "../api/movieDB"
import { MovieFull } from "../interfaces/movieDbInterface";


interface MovieDetails {
    isLoading :boolean,
     movieFull :MovieFull
    cast : any[]
}


const useMovieDetails = (id_movie :number) => {
const [state, setState] = useState<MovieDetails>();

const getMovieDetail = async(id_movie : number)=>{
  const resp = await  movieDB.get<MovieFull>(`/movie/${id_movie}`)
  console.log(resp.data.overview)
}

useEffect(() => {
getMovieDetail(id_movie)
}, []);


return {state}
};

export default useMovieDetails;
