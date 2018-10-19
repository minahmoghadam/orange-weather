import React, { Component } from 'react';
import  GeoLocationService   from '../services/GeoLocationService';
import WeatherService from '../services/WeatherService';
import Header from './Header';
import { CurrentWeather } from './weather/CurrentWeather'; 
import { DailyWeather } from './weather/DailyWeather'; 
import { HourlyWeather } from './weather/HourlyWeather'; 

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            showCurrentWeather: false,
            showDailyWeather: false,
            showHourlyWeather: false,
            currentId: 100
        };
        this.ShowBackground = this.ShowBackground.bind(this);
    }
    componentDidMount(){
        //get lat, long of current location
        GeoLocationService.GetCurrentLocation()
        .then((location) => {
            this.GetCurrentweather(location.lat, location.lng);
            this.GetHourlyWeather(location.lat, location.lng);
            this.GetDailyWeather(location.lat, location.lng);
        })
        .catch((error) => {
            console.log(error)}
        );
    };

    GetCurrentweather(lat, lng){
        WeatherService.GetWeatherByLocation(lat, lng)
        .then(response =>{
            this.setState(() => ({ weather: response, showCurrentWeather: true }));
            this.setState({currentId: response.weather[0].id});
        })
    };
    GetHourlyWeather(lat, lng){
        WeatherService.GetHourlyWeather(lat, lng)
        .then(response =>{
            this.setState(() => ({ hourlyWeather: response, showHourlyWeather: true }));
        })
    };
    GetDailyWeather(lat, lng){
        WeatherService.GetDailyWeather(lat, lng)
        .then(response =>{
            this.setState(() => ({ dailyWeather: response, showDailyWeather: true }));
        })
    };
    ShowBackground(id){
        let img_name;

        if(id >= 200 && id < 300){
            img_name = 'thunderstorm.jpg';
        }
        else if(id >= 300 && id < 500){
            img_name = 'drizzle.jpg';
        }
        else if(id >= 500 && id < 600){
            img_name = 'rain.jpg';
        }
        else if(id >= 600 && id < 700){
            img_name = 'snow.jpg';
        }
        else if(id >= 700 && id < 800){
            img_name = 'atm.jpg';
        }
        else if(id === 800){
            img_name = 'clear-sky.jpg';
        }
        else if(id > 800){
            img_name = 'clouds.jpg';
        }
        else{
            img_name = 'dashboard.jpg';
        }
        return img_name;
    }

    render() {
        return (
            <div className="dashboard" style={{backgroundImage: 'url('+process.env.PUBLIC_URL +'/image/weather/'+ this.ShowBackground(this.state.currentId)+')'}}> 
                <Header/>
                <div className="content">
                    <div className="col-12">
                        {this.state.showCurrentWeather && <CurrentWeather currentWeather={this.state.weather} currentDate={this.state.date}/>}
                        {this.state.showHourlyWeather && <HourlyWeather hourlyWeather={this.state.hourlyWeather} />}
                        {this.state.showDailyWeather && <DailyWeather dailyWeather={this.state.dailyWeather} />}
                    </div>
                </div>
            </div>
        );
    }
}
