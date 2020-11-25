import React from 'react';
import {TouchableHighlight,ImageBackground} from 'react-native';
import style from './style';
import switchImage from './switchImage'
import back from '../../assets/components/Pokeball.png';

export default Parts = ({level,onPress,obj}) => {
    const customWidth = (level) => {
        switch (level) {
            case 1:
            case 2:
                return {width:"45%"};
            case 3:
            case 4:
                return {width:"24%"};
            default:
                return {width:"45%"};
        }
    }

    return(
        <TouchableHighlight style={[style.parts, customWidth(level.level)]} onPress={onPress}>
            <ImageBackground source={switchImage.switchImage(obj) } style={style.image}/>
        </TouchableHighlight>  
    );
}