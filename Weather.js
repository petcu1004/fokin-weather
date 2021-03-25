import React from "react";
import {View, Text, StyleSheet, StatusBar}from "react-native";
import PropTypes from "prop-types";
import {LinearGradient} from 'expo-linear-gradient';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"]
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"]
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title:"Clear", 
        subtitle:"It's a nice day for a walk."
    },
    Clouds: {
        iconName: "",
        gradient: []
    },
    Haze: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"], 
        title:"Haze", 
        subtitle:"Just don't go outside"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"]
    }

};

export default function Weather({condition}){
    return (
        <LinearGradient
                colors={weatherOptions["Clear"].gradient}
                style={styles.container}>
            <View style={styles.halfContainer}>
                <StatusBar barStyle="light-content"/>

                <MaterialCommunityIcons size={96} name={weatherOptions["Clear"].iconName} color="white" />
                <Text style={styles.condition}>{condition}</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                
                    <Text style={styles.title}>{weatherOptions["Clear"].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions["Clear"].subtitle}</Text>
                
            </View>
            </LinearGradient>
            
        
    );
}

Weather.propTypes={
    temp:PropTypes.number.isRequired, 
    condition:PropTypes.oneOf(
        ["Thunderstorm", "Drizzle", "Rain", "Snow", 
        "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }, 
    temp:{
        fontSize:42, 
        color:"white"
    },
    halfContainer:{
        flex:1, 
        justifyContent:"center", 
        alignItems:"center"
    }, 
    title:{
        color:"white",
        fontSize:44, 
        fontWeight:"300", 
        marginBottom:10
    }, 
    subtitle:{
        color:"white",
        fontWeight:"600", 
        fontSize:24
    },
    textContainer:{
        paddingHorizontal:20, 
        alignItems:"flex-start"
    },
    condition:{
        color:"white",
        fontWeight:"600", 
        fontSize:24
    }
    
});