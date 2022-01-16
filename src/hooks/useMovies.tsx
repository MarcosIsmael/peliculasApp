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

    const [moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying : [],
        popular:[],
        topRated:[],
        upcoming:[]
        })
    const [isLoading, setIsLoading] = useState(true)
    const [playing, setPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [rated, setRated] = useState<Movie[]>([])
    const [coming, setcoming] = useState<Movie[]>([])
    const getMovies = async()=>{
         movieDB.get<MovieDBNowResults>('/movie/now_playing')
         .then(resp => {setPlaying( resp.data.results);setIsLoading(false)})
         movieDB.get<MovieDBNowResults>('/movie/popular')
         .then(resp => { setPopular(resp.data.results);setIsLoading(false)})
         movieDB.get<MovieDBNowResults>('/movie/top_rated')
         .then(resp => {setRated(resp.data.results);setIsLoading(false)})
         movieDB.get<MovieDBNowResults>('/movie/upcoming')
         .then(resp => { setcoming(resp.data.results);setIsLoading(false)})

        // let result = await Promise.all([respNowPlaying,respPopular,respTopRated,respUpcoming])

        // setMoviesState({
        //     nowPlaying:result[0].data.results,
        //     popular:result[1].data.results,
        //     topRated:result[2].data.results,
        //     upcoming:result[3].data.results
        // })

    }

    useEffect(() => {
      getMovies()
    }, [])
    return {
        nowPlaying: playing,
        popular,
        topRated: rated,
        upcoming :coming,
        isLoading
    }
}

export default useMovies
