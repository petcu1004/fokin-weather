import React from 'react';
import Loading from "./Loading";
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios";
import Weather from "./Weather";

const API_KEY="ab2f48fc29dd3e8320de497bb7b03321";

export default class extends React.Component {
  state={
    isLoading:true
  }

  getWeather=async(latitude, longitude) =>{
    //const {data:{main :{temp}, weather}}=
    //await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
    const {data:{pm10Value}}=
    await axios.get(`http://220.69.209.54:9001/air/getAirInfoByGPS?lat=${latitude}&long=${longitude}`);
    

    this.setState({isLoading:false, condition:pm10Value});
  }


  getLocation=async() =>{
    try{
      await Location.requestPermissionsAsync();
      const {
        coords:{latitude, longitude}
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude)

      //Send to API and get weather
    }catch(error){
      Alert.alert("Can't find you. ", "So sad");
    }
  };

  componentDidMount(){
    this.getLocation();
  }

  render(){
    const{isLoading,condition}=this.state;
    return isLoading ?<Loading />:<Weather condition={condition}/>;
  }
}
  


