import React from 'react'
import { ActivityIndicator, Button, Dimensions, FlatList, Text, View } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import MoviePosterCard from '../components/MoviePosterCard'
import useMovies from '../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler';
import HorizontalSlider from '../components/HorizontalSlider';

const HomeScreen = () => {
const{ top }= useSafeAreaInsets()
const { isLoading, nowPlaying,popular,topRated,upcoming }= useMovies()
const { width:windowWidth } =Dimensions.get('window')
if(isLoading){
    return (
        <View style={{flex:1,justifyContent:'center', alignContent:'center'}}>
            <ActivityIndicator color={'red'} size={100}/>
        </View>
    )
}
    return (
        <ScrollView>
            <View style={{marginTop:top +20}}>
                <View style={{height:440}}>
                        <Carousel
                        data={nowPlaying!}
                        renderItem={({item}:any)=> <MoviePosterCard movie={item}/>}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={1}
                        />
                </View>
            </View>
            <HorizontalSlider title='Populares' movies={popular!}/>
            <HorizontalSlider title='Top Rated' movies={topRated!}/>
            <HorizontalSlider title='Upcoming' movies={upcoming!}/>

        </ScrollView>
    )
}

export default HomeScreen
