import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';

export default StyleSheet.create({
    button:{
        backgroundColor:'#555',
        width:'100%',
        height:45,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        flexDirection:'row',
        marginBottom:15
    },
    btnText:{
        color:'#000',
        fontSize:25
    },
    btnIcon:{
        aspectRatio:1,
        height:40,
        width:40,
        marginRight:20
    }
})