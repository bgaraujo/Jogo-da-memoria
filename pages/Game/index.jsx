import React, {useState, useEffect} from "react";
import {Text, ImageBackground, View} from "react-native";
import style from './style';
import Parts from '../../components/Parts'
import { set } from "react-native-reanimated";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function Game ({route,navigation}) {
    const [arr,setArr] = useState([]);
    const [selectedCardObj,setSelectedCardObj] = useState(null);
    const [points,setPoints] = useState(0);
    const [waiting, setWaiting] = useState(false);
    
    
    useEffect(() => {
        setArr(sortItens(initVar(route.params.level.level)));
    }, []);

    const  initVar = (level) => {
        const levelResponse = route.params.level;
        var newArr = [];
        for (let index = 1; index <= levelResponse.cards; index++) {
            newArr.push({
                id:index,
                idDouble:0,
                back:true,
                finished:false
            });
            newArr.push({
                id:index,
                idDouble:1,
                back:true,
                finished:false
            });
        }
        return newArr;
    }
    
    const sortItens = (arrIn) => {
        for (let i = 0; i < arrIn.length; i++) {
          const j = Math.floor(Math.random() * (i + 1));
          [arrIn[i], arrIn[j]] = [arrIn[j], arrIn[i]];
        }
        return arrIn;
    }

    const turnCard = (obj,callback) => {
        if(!obj.back || obj.finished) return false;
        const newArray = arr.map(arrObj =>
            (arrObj.id == obj.id && arrObj.idDouble == obj.idDouble)
              ? { ...arrObj, back: false }
              : arrObj
        );
        setArr(newArray,callback)
    }

    const validMatch = (obj) =>{
        if(!selectedCardObj){
            setSelectedCardObj(obj)
        }else{
            if( obj.id !=  selectedCardObj.id){
                setWaiting(true);
                setTimeout(() => {
                    const backToDefalt = arr.map(arrObj =>
                        ( 
                            (arrObj.id == obj.id && arrObj.idDouble == obj.idDouble) || 
                            (arrObj.id == selectedCardObj.id && arrObj.idDouble == selectedCardObj.idDouble) 
                        )
                          ? { ...arrObj, back: true }
                          : arrObj
                    );
                    setArr(backToDefalt);
                    setWaiting(false);
                }, 1000);
            }else{
                const finishedArray = arr.map(arrObj =>
                    ( (arrObj.id == obj.id && arrObj.idDouble == obj.idDouble) || (arrObj.id == selectedCardObj.id && arrObj.idDouble == selectedCardObj.idDouble) )
                      ? { ...arrObj, finished: true }
                      : arrObj
                );
                setArr(finishedArray)
                setPoints(points+1)
            }
            setSelectedCardObj(null)
        }
    }

    if(points == route.params.level.cards){
        setSelectedCardObj(null);
        setPoints(0);
        setWaiting(false);
        navigation.navigate('NextLevel',route.params.level)
    }

    const selectedCard = (obj) => {
        if(!waiting)
            turnCard(obj,validMatch(obj));
    }

    return(
        <ImageBackground source={require('../../assets/places/city.jpg')} style={style.bgImage}>
            <View >
                <Text>Points: {points}</Text>
            </View>
            <View style={style.container}>
                {
                    arr.map( (obj,id) => {
                        return (<Parts obj={obj} level={route.params.level} key={id} onPress={() => selectedCard(obj)}/>) 
                    })
                }
            </View>
        </ImageBackground>
    )
}