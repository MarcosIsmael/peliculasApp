import React, { useRef } from 'react';
import { Animated } from 'react-native';

const useFade = () => {
    const opacity = useRef(new Animated.Value(0.5)).current;

    const fadeIn = ()=>{
        Animated.timing(
            opacity, {
                toValue:1,
                duration:1000,
                useNativeDriver:true
            }
        ).start()
    }
    const fadeOut = ()=>{
        Animated.timing(
            opacity, {
                toValue:0.5,
                duration:1000,
                useNativeDriver:true
            }
        ).start()
    }
    return { fadeIn, fadeOut, opacity}
};

export default useFade;
