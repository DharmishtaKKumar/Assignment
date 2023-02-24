import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from "react-native";


export default function onboarding({navigation}) {
   return(
    <ImageBackground style={{backgroundColor:'#FFFFFF'}}>
    <View style={style.frame}>
      
        <Image 
        style={style.heroine}
          source={require("../../Assignment/assets/heroine.png")}/>
        
        <Image
        style={style.logo1} 
        source={require("../../Assignment/assets/semicircle.png")}
        />

        <Text style={{fontSize:15,color:'#99B2B7',fontWeight:'400',marginLeft:45, marginTop:390}}>Get Started</Text>

        <Text style={{fontSize:20,color:'#1C140D',fontWeight:'900', textAlign:'left',marginLeft:48, marginRight:120}}>Millions of people use to turn their ideas into reality.</Text>

       <View style={{flexDirection:'row', marginTop:15, justifyContent:'space-between',marginLeft:50, marginRight:50}}>
       <TouchableOpacity>
        <Text style={{fontSize:15,color:'#99B2B7',fontWeight:'400' }}>Skip Now</Text>
       </TouchableOpacity>

       
       <TouchableOpacity onPress={() => navigation.navigate("login")}>
        <View style={style.next}>
        <Text style={{fontSize:18,color:'#1C140D',fontWeight:'700',marginLeft:15, marginRight:10}}>Next</Text>
        </View>
       </TouchableOpacity>
  
       </View>

    </View>
    </ImageBackground>
   );
}


const style= StyleSheet.create({
    frame:{
        height:860,
        width:350,
        marginLeft:15,
        marginRight:15,
        alignSelf:'center',
      
        backgroundColor:'#FFFFFF'
       
    },
    logo1:{
        transform: [{ rotate: '90deg' }],
        height:45,
        width:45,
        marginTop: 50,
        marginLeft:35
      
    },
    heroine:{
        height:430, 
        width:250,
        alignSelf:'center',
        position:'absolute',
        marginTop:50
    },
    next:{
        height:25,
        width:70,
        backgroundColor:'#60B99A',
        borderRadius:6,
        
        
    }

})