import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Movie } from '../interfaces/movieDbInterface'
import { RootStackParams } from '../navigation/Navigation'
import Icon from 'react-native-vector-icons/Ionicons'
import useMovieDetails from '../hooks/useMovieDetails'
import MovieDetails from '../components/MovieDetails'
interface Props extends StackScreenProps<RootStackParams>{}
const screenHeight = Dimensions.get('window').height
const DetailScreen = ({route}: Props) => {
const movie = route.params as Movie
const url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
 const { isLoading, cast, movieFull }=useMovieDetails(movie.id)

    return (
        <ScrollView>
            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                    source={{uri: url}}
                    style={styles.posterImage}
                    />
                </View>

            </View>
                <View style={styles.marginContainer}>
                    <Text style={styles.subTitle}>{movie.original_language}</Text>
                    <Text style={styles.title}>{movie.original_title}</Text>
                </View>
                    {
                        isLoading
                        ? <ActivityIndicator size={35}color={'grey'} style={{marginTop: 20}}/>
                        :<MovieDetails movieFull={movieFull!} cast={cast}/>
                    }
        </ScrollView>
    )
}

export default DetailScreen
const styles =  StyleSheet.create({
    posterImage :{
        flex:1
    },
    imageContainer : {
        width:'100%',
        overflow:'hidden',
        height: screenHeight * 0.70,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        borderBottomEndRadius:25,
        borderBottomStartRadius:25,
    },
    marginContainer :{
        marginHorizontal:20,
        marginTop:20
    },
    subTitle:{
        fontSize:16,
        opacity:0.8
    },
    title:{
        fontSize:20,
        fontWeight:'bold'
    },
    imageBorder : {
        flex: 1,
        overflow:'hidden',
        borderBottomEndRadius:25,
        borderBottomStartRadius:25,

    }

})
