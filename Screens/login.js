import React from "react";
import {View, Text, StyleSheet, Image,ImageBackground, TouchableOpacity, TextInput} from "react-native";


export default function login({navigation}) {
   return(
    <ImageBackground style={{backgroundColor:'#FFFFFF'}}>
    <View style={style.frame}>
        <Image
        style={style.logo1} 
        source={require("../../Assignment/assets/semicircle.png")}
        />
     

        <Text style={{fontSize:25,color:'#1C140D',fontWeight:'900', marginLeft:15, marginRight:80, marginTop:50}}>Hey,</Text>

        <Text style={{fontSize:25,color:'#1C140D',fontWeight:'900', marginLeft:15, textAlign:'left', marginRight:80}}>Login Now.</Text>
         
         <View style={{flexDirection:'row', marginTop:15}}>
         <Text style={{fontSize:15,color:'#99B2B7',fontWeight:'400', marginLeft:15,}}>If you are new /</Text>
         <TouchableOpacity>
         <Text style={{fontSize:15,color:'#1C140D',fontWeight:'400'}}>Create New </Text>
         </TouchableOpacity>
        </View>

        <View style={style.username}>
            <TextInput style={{justifyContent:'flex-start', marginTop:10, marginLeft:10,fontSize:18, fontWeight:'400'}} placeholder="Dstudio_agency"></TextInput>
            <TouchableOpacity>
             <View style={style.whitebackground}>
            <Image 
            style={style.editicon}
            source={require("../../Assignment/assets/editicon.png")} />
            </View>
            </TouchableOpacity>
        </View>

        <View style={style.password}>
            <TextInput style={{justifyContent:'flex-start', marginTop:10, marginLeft:10,fontSize:18, fontWeight:'400'}}
             placeholder="Password"
             maxLength={15}></TextInput>
        </View>

        <View style={{flexDirection:'row', marginTop:15}}>
         <Text style={{fontSize:15,color:'#99B2B7',fontWeight:'400', marginLeft:15,}}>Forgot Password? /</Text>
         <TouchableOpacity>
         <Text style={{fontSize:15,color:'#1C140D',fontWeight:'400', marginLeft:5}}> Reset </Text>
         </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() =>navigation.navigate('dashboard')}>
        <View style={style.login}>
            <Text style={{justifyContent:'flex-start', marginTop:15,textAlign:'center',fontSize:20, fontWeight:'900', }}> Login</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text style={{fontSize:15,color:'#99B2B7',fontWeight:'400',marginTop:15, textAlign:'center'}}>Skip Now</Text>
            </TouchableOpacity>


    </View>
    </ImageBackground>
   );
}


const style= StyleSheet.create({
    frame:{
        height:860,
        width:350,
        alignSelf:'center',
       backgroundColor:'#FFFFFF'
    },
    logo1:{
        transform: [{ rotate: '90deg' }],
        height:45,
        width:45,
        marginTop: 100,
      
    },
    next:{
        height:25,
        width:70,
        backgroundColor:'red',
        borderRadius:6,
        marginLeft:150
    },
    username:{
        height:55,
        width:320,
        backgroundColor:'#F0A22A',
        borderRadius:10,
        alignSelf:'center',
        marginTop:35

    },
    whitebackground:{
        height:35,
        width:35,
        backgroundColor:'#FFFFFF',
        borderRadius:65,
        marginTop:-28,
        marginLeft:280

    },
    editicon:{
        height:20,
        width:20,
        alignSelf:'center',
        marginTop:8
    },
    password:{
        height:55,
        width:320,
        borderRadius:10,
        marginTop:35,
        alignSelf:'center',
        backgroundColor:'#99B2B7'
    },
    login:{
        height:55,
        width:320,
        borderRadius:10,
        marginTop:30,
        alignSelf:'center',
        backgroundColor:'#60B99A'
    }

})