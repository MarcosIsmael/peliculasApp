import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Cast } from '../interfaces/credits';

interface Props  {
    actor : Cast
}
const CastItem = ({actor}: Props) => {
    const url = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return <View style={styles.container}> 
  {
    actor.profile_path && 

            <Image 
            source={{uri : url}}
            style={{width:50, height:50, borderRadius:10}}
            />
  }
            <View style={styles.actorInfo}>
                <Text style={{fontSize:18, fontWeight:'bold'}}>
                    {actor.name}
                </Text>
                <Text style={{fontSize:16, opacity:0.7}}>
                    {actor.character}
                </Text>
            </View>
   
        </View>;
};

const styles = StyleSheet.create({
    container : {
        flexDirection:'row',
        shadowColor: "#000",
        backgroundColor:'white',
        borderRadius:10,
        height:70,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,
        paddingRight:15,
        marginLeft:20
    },
    actorInfo:{
        marginLeft:10,
        marginTop:4
    }
})
export default CastItem;
