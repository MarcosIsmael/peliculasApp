import React from 'react';
import { Text, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/credits';
import { MovieFull } from '../interfaces/movieDbInterface';
import currencyFormatter from 'currency-formatter'
import CastItem from './CastItem';
interface Props {
    movieFull: MovieFull,
    cast : Cast[]
}
const MovieDetails = ({movieFull,cast}: Props) => {
  return <>
            <View style={{marginHorizontal:20}}>
                <View style={{flexDirection:'row'}}>    
                    <Icon
                    name='star-outline'
                    color={'grey'}
                    size={16}
                    />
                    <Text>{movieFull.vote_average}</Text>

                    <Text style={{marginLeft:5}}>
                        -{ movieFull.genres.map(g => g.name).join(',')}
                    </Text>
                </View>
                <Text style={{fontSize:23, marginTop:10, fontWeight:'bold'}}>Historia</Text>
                <Text style={{fontSize:10}}>{movieFull.overview}</Text>

                <Text style={{fontSize:23, marginTop:10, fontWeight:'bold'}}>Presupuesto</Text>
                <Text style={{fontSize:18}}>{currencyFormatter.format(movieFull.budget, {code:'USD'}) }</Text>
                
                <View style={{marginTop:10, marginBottom:100}}>
                <Text style={{fontSize:23, marginTop:10, fontWeight:'bold', marginHorizontal:20}}>Actores</Text>
                    <CastItem actor={cast[0]}/>
                </View>
            </View>
        </>;
};

export default MovieDetails;