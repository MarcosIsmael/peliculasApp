import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradiantContext } from '../context/GradiantContext';

interface Props {
    children : JSX.Element | JSX.Element[]
}
const GradientBackground = ({ children }: Props) => {

    const {colors} = useContext(GradiantContext);

  return <View style={{flex:1}}>
            <LinearGradient
            colors={[colors.primary,colors.secondary, 'white']}
            style={{...StyleSheet.absoluteFillObject}}
            start={{x:0.1, y:0.1}}
            end={{x:0.5, y:0.7}}>
                {children}
            </LinearGradient>
        </View>;
};

export default GradientBackground;
