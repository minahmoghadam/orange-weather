import React, { Component } from 'react';
import WeatherService from '../../services/WeatherService';
import { Const } from '../../Const';

export default class TopCityWeather extends Component{
    constructor(props){
        super(props);
        this.state = {
            topCities : [],
            showCities: false
        }
        this.citiesId = "2643743,5601538,5128638,4717560";//London, Moscow, New York, Paris
    }
    componentDidMount(){
        this.GetTopCities(this.citiesId);
    }
    GetTopCities(cities){
        WeatherService.GetGroupOfWathersByCityId(cities)
        .then(response=>{
            this.setState({topCities: response.list, showCities: true});
        })
    }
    render(){
        return(  
            <div className="row m-3">
                {this.state.topCities.map((city, i) =>
                    <div className="col-xl-3 col-md-6 col-sm-6 col-12" key={i} >
                        <div className="city" style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/image/cities/'+ i +'.jpg )', backgroundSize: 'cover'}}>
                            <div className="city-desc">
                                <h6>{city.name}</h6>
                                <img src={Const.WEATHER_IMG_URL + '/' + city.weather[0].icon +'.png'} />&nbsp;&nbsp;&nbsp;
                                <span className="deg">
                                    {parseInt(city.main.temp)} &deg;&nbsp;<sup>c</sup>
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}