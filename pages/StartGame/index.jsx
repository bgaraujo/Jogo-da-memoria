import React from 'react';
import {ImageBackground, View, Text, TouchableOpacity, Image} from 'react-native';
import StyleSheet from './StyleSheet'
import bgImage from '../../assets/bg.jpg';
import Constants from '../../utils/contants';
import Button from '../../components/Button';

import Crown from '../../assets/components/Crown.png';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function StartGame({ navigation }){

    return(
        <ImageBackground source={bgImage} style={StyleSheet.bgImage}>
            <View style={StyleSheet.container}>
                {
                    Constants.level.map( 
                        (level,key) => <Button key={key} title={level.name} onPress={() => navigation.navigate('Game',{level})}/>
                    )
                }
            </View>
        </ImageBackground>
    )
}