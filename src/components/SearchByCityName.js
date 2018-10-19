import React, { Component } from 'react';
import WeatherService  from '../services/WeatherService';
import TopCityWeather from './weather/TopCityWeather';
import Header from './Header';
import { Const } from '../Const'

class SearchByCityName extends Component {
    constructor(props){
        super(props);
        this.state = {
            showSearchResult: false,
            searchResult: {},
            key: '',
            searchError: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputSubmit = this.handleInputSubmit.bind(this);
    }

    handleInputChange(e){
        this.setState({key: e.target.value});
    }
    handleInputSubmit(e){
        e.preventDefault();
        //console.log(e.target.value);
        if(this.state.key.length > 2){
            this.getWeatherByCityName(this.state.key);
        }
    }
    getWeatherByCityName(city){
        WeatherService.GetWeatherByCityName(city)
        .then(response => {
            this.setState({searchResult: response, showSearchResult: true, searchError: ''});
        
        }).catch(error =>{
            console.log(error);
            this.setState({searchResult:[], showSearchResult: false, searchError: 'Not Found :)'});
        });
    }
    render() {
        const search = this.state.searchResult;
        return (
            <div>
                <Header/>
                <div className="content">
                    <TopCityWeather/>
                    <ul>
                        <li>
                            <p>Put the city's name or its part and get the list of the most proper cities in the world. Example - Lon or Lond or London. The more precise city name you put the more precise list you will get.</p>
                        </li>
                    </ul>
                    <div className="col-12 col-md-4 offset-md-4 col-sm-6 offset-sm-3 mt-3">
                        <form className=" input-group" onSubmit={this.handleInputSubmit}>
                            <input type="text" className="form-control" placeholder="City name" onChange={this.handleInputChange}/>
                            <div className="input-group-append">
                                <input type="submit" className="btn btn-main" value="search"/>
                            </div>
                        </form>
                        <div className="mt-2">
                            {
                                this.state.showSearchResult && 
                                <div className="search-result">
                                    <span>{search.sys.country}-{search.name}</span> &nbsp;&nbsp;
                                    <span>{parseInt(search.main.temp)} &deg;&nbsp;<sup>c</sup></span>
                                    <img src={Const.WEATHER_IMG_URL + '/' + search.weather[0].icon +'.png'} />
                                    <p>{parseInt(search.main.temp_min)} &deg;&nbsp;<sup>c</sup> - {parseInt(search.main.temp_max)} &deg;&nbsp;<sup>c</sup></p>
                                </div>
                            }
                            {
                                !this.state.showSearchResult &&
                                <div>
                                    <p className="text-center text-danger">{this.state.searchError}</p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { SearchByCityName };