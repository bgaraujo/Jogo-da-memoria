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
        color:'#000'
    },
    btnIcon:{
        aspectRatio:1,
        height:40,
        width:40,
        marginRight:20
    },
    container:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems: 'stretch',
        width:'90%'
    },
    bgImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems:"center",
    }
})