import React, { useRef } from 'react';
import { Animated, Button, View } from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
    const { fadeIn, fadeOut, opacity}= useFade()

  return <View style={{
                flex:1, 
                backgroundColor:'grey',
                justifyContent:'center',
                alignItems:'center'}}>
            <Animated.View 
                style={{
                backgroundColor:'#084f6a',
                width:150,
                height:150,
                borderColor:'white',
                borderWidth:10,
                marginBottom:10,
                 opacity
                }}/>
                <Button
                onPress={fadeIn}
                title='Fade In'/>
                <Button
                onPress={fadeOut}
                title='Fade out'/>
        </View>;
};

export default FadeScreen;
