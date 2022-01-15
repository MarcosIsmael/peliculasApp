import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Movie,  MovieDBNowResults } from "../interfaces/movieDbInterface"

interface MoviesState {
    nowPlaying : Movie[],
    popular:Movie[],
    topRated:Movie[],
    upcoming:Movie[]

}
const useMovies = () => {

    const [moviesState, setMoviesState] = useState<MoviesState>()
    const [isLoading, setIsLoading] = useState(true)

    const getMovies = async()=>{
        let respNowPlaying =  movieDB.get<MovieDBNowResults>('/movie/now_playing')
        let respPopular =  movieDB.get<MovieDBNowResults>('/movie/popular')
        let respTopRated = movieDB.get<MovieDBNowResults>('/movie/top_rated')
        let respUpcoming = movieDB.get<MovieDBNowResults>('/movie/upcoming')

        let result = await Promise.all([respNowPlaying,respPopular,respTopRated,respUpcoming])

        setMoviesState({
            nowPlaying:result[0].data.results,
            popular:result[1].data.results,
            topRated:result[2].data.results,
            upcoming:result[3].data.results
        })

        setIsLoading(false)
    }

    useEffect(() => {
      getMovies()
    }, [])
    return {
     ...moviesState,
        isLoading
    }
}

export default useMovies
