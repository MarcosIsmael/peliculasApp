
import { useEffect, useState } from "react";
import movieDB from "../api/movieDB"
import { Cast, MovieCredits } from "../interfaces/credits";
import { MovieFull } from "../interfaces/movieDbInterface";


interface MovieDetails {
    isLoading :boolean,
     movieFull ?:MovieFull,
    cast : Cast[]
}


const useMovieDetails = (id_movie :number) => {
const [state, setState] = useState<MovieDetails>({
  isLoading : true,
  movieFull : undefined,
  cast : []
});

const getMovieDetail = async(id_movie : number)=>{
  const moviesPromise = await  movieDB.get<MovieFull>(`/movie/${id_movie}`)
  const creditsPromise = await movieDB.get<MovieCredits>(`/movie/${id_movie}/credits`)
  const [moviesResponse, creditsResponse] =  await Promise.all([moviesPromise,creditsPromise])
  
  setState({
    isLoading :false,
    movieFull : moviesResponse.data,
    cast : creditsResponse.data.cast
  })
}

useEffect(() => {
getMovieDetail(id_movie)
}, []);


return {...state}
};

export default useMovieDetails;
