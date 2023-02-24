import React from "react";
import {View, Text, Style, StyleSheet, Image,ImageBackground, TouchableOpacity} from "react-native";


export default function dashboard ({navigation}) {
    return(
        <ImageBackground style={{backgroundColor:'#FFFFFF'}}>
        <View style={style.frame}>

            <View style={{marginTop:80, flexDirection:'row'}}>

            <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={{fontSize:15,color:'#000000',fontWeight:'400',  marginLeft:20}}> Back</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image 
             style={style.option}
             source={require("../../Assignment/assets/option.png")}/>
            </TouchableOpacity>

            </View>

            <View style={style.greenstrap}/>
           
            <View>
            <Image 
            style={style.profileimage}
              source={require("../../Assignment/assets/profile.png")}/>

              <View style={{marginTop:-135, marginLeft:200}}>
              <TouchableOpacity>
              <View
              style={style.yellowbox}>
              <Image 
               style={style.cameraicon}
               source={require("../../Assignment/assets/camera.png")}/>
            
               </View>
               </TouchableOpacity>
               </View>


               <View style={{flexDirection:'row', justifyContent:'space-evenly', marginTop:120}}>
                <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                    <Text style={{fontSize:18, fontWeight:'500',color:'#99B2B7'}}>Applied</Text>
                    <Text style={{fontSize:15, fontWeight:'500',textAlign:'center', marginTop:5}}>23</Text>
                </View>

                <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                    <Text  style={{fontSize:18, fontWeight:'500',color:'#99B2B7'}}>Reviwed</Text>
                    <Text style={{fontSize:15, fontWeight:'500',textAlign:'center', marginTop:5 }}>73</Text>
                </View>

                <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                    <Text  style={{fontSize:18, fontWeight:'500',color:'#99B2B7'}}>Contacted</Text>
                    <Text style={{fontSize:15, fontWeight:'500',textAlign:'center', marginTop:5 }}>18</Text>
                </View>

               </View>

               <Text style={{fontSize:24, fontWeight:'500',textAlign:'left', marginTop:32}}>Complete Profile</Text>
             
               <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:8}}>
               <View style={style.education}>

                <View style={style.educationincon}>
                <Image 
                  style={{  height:20,width:20,marginTop:3,alignSelf:'center'}}
                  source={require("../../Assignment/assets/education.png")}/>
                  </View>

                  <Text style={{fontSize:15, fontWeight:'400',marginTop:10, marginLeft:10}}> Education</Text>

                  <Text style={{fontSize:16, fontWeight:'600',marginLeft:12, marginRight:35, marginTop:15}}>02 Steps Left</Text>
                  <Image 
                  style={{width:60, height:2}}
                  source={require("../../Assignment/assets/underline.png")}/>

                  <TouchableOpacity>
                  <Image 
                  style={{width:13, height:10, marginLeft:100, marginTop:-10}}
                  source={require("../../Assignment/assets/arrow.png")}/>
                  </TouchableOpacity>
               </View>

               <View style={style.professional}>
               <View style={style.professionalincon}>
                <Image 
                  style={{  height:20,width:20,marginTop:3,alignSelf:'center'}}
                  source={require("../../Assignment/assets/professional.png")}/>
                  </View>

                  <Text style={{fontSize:15, fontWeight:'400',marginTop:10, marginLeft:10}}> Professional</Text>

                  <Text style={{fontSize:16, fontWeight:'600',marginLeft:12, marginRight:35, marginTop:15}}>04 Steps Left</Text>
                  <Image 
                  style={{width:60, height:2}}
                  source={require("../../Assignment/assets/underline.png")}/>

                  <TouchableOpacity>
                  <Image 
                  style={{width:15, height:10, marginLeft:100, marginTop:-10}}
                  source={require("../../Assignment/assets/arrow.png")}/>
                  </TouchableOpacity>
               </View>
               </View>

               <View style={{flexDirection:'column',marginTop:15, alignSelf:'center',marginTop:15}}>
                <Text style={{fontSize:16, fontWeight:'600',marginLeft:12, marginRight:15, textDecorationLine: 'underline' }}>Buy Pro $23.49</Text>
                </View>

            </View>

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
    option:{
        height:30,
        width:30,
        marginLeft:240
    },
    greenstrap:{
        transform: [{ rotate: '170deg' }],
         height:100,
         width:320,
        marginTop:55,
         alignSelf:'center',
         backgroundColor:'#60B99A',
    },
    profileimage:{
        height:120,
        width:110,
        borderRadius:40,
       alignSelf:'center',
        marginTop:-50

    },
    cameraicon:{
        height:25,
        width:25,
        marginTop:2,
        alignSelf:'center'
    },
    yellowbox:{
        height:30,
        width:35,
        borderRadius:50,
        backgroundColor:'#F0A22A',
        
    },
    education:{
        height:150,
        width:140, 
        borderRadius:20,
        marginTop:10,
        marginLeft:28,
        backgroundColor:'#60B99A'
    },
    professional:{
        height:150,
        width:140, 
        borderRadius:20,
        marginTop:10,
        marginRight:28,
        backgroundColor:'#F0A22A'
    },
    educationincon:{
        height:25,
        width:25,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginLeft:15,
        marginTop:15

    },
    professionalincon:{
        height:25,
        width:25,
        backgroundColor:'#FFFFFF',
        borderRadius:10,
        marginLeft:15,
        marginTop:15
    },
  
  
})