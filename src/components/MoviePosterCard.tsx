import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Movie } from '../interfaces/movieDbInterface'

interface Props {
    movie: Movie,
    height?:number,
    width?:number
}
const MoviePosterCard = ({movie, height = 420, width = 300}: Props) => {
    console.log(movie.poster_path)
    const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    return (
      <View style={{width:width, height:height, marginHorizontal:8}}>
          <View style={styles.imageContainer}>
            <Image
            source={{uri:url}}
            style={styles.image}
            />
          </View>
      </View>
    )
}

export default MoviePosterCard

 const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18,
    },
    imageContainer:{
        borderRadius:18,
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
});