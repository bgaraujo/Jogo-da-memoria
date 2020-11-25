import React from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import StyleSheet from './StyleSheet'
import Crown from '../../assets/components/Crown.png';

export default function Button({ title,onPress }){
    return(
        <TouchableOpacity style={StyleSheet.button} onPress={onPress}>
            <Image style={StyleSheet.btnIcon} source={Crown} />
            <Text style={StyleSheet.btnText}>{title}</Text>
        </TouchableOpacity>
    )
}