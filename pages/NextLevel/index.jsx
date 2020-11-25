import React from 'react';
import {View, Image, Text, Button} from 'react-native';
import coin from '../../assets/components/PokeCoin.png';
import Constants from '../../utils/contants';

export default ({route,navigation}) => {
    const level = Constants.level.find(level =>  level.level == (route.params.level+1) );

    return(
        <View style={{display:'flex',justifyContent:"center",marginLeft:'auto',marginRight:'auto',marginTop:150}}>
            <Text style={{fontSize:30}}>Parabens voce passou de nivel</Text>
            <Image source={coin} style={{height:'auto',width:"70%", marginLeft:'auto',marginRight:'auto',aspectRatio:1}}/>
            {
                level && <Button  title={level.name} onPress={() => navigation.navigate('Game',{ level })}/>
            }
            
        </View>
    )
}