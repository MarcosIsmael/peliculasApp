import axios from "axios"

const movieDB = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params:{
        api_key:'767002a2959bccc1c9cc44a11018bef5',
        language:'es-ES'
    }
})

export default movieDB