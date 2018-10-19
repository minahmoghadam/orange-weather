import React from 'react';
import { Const } from '../../Const';

const showCurrentDate = (dt)=> {
    return new Date(dt * 1000);
}
export const  CurrentWeather = (props) => {
    const data = props.currentWeather;
    return (
        <div className="weather">
            <div className="row">
                <div className="col-12 col-sm-6 offset-sm-3 col-md-4 offset-md-4 current">
                <div> 
                    <h5>{data.sys.country}, {data.name}</h5>
                </div>
                    <div>
                        <img src={Const.WEATHER_IMG_URL + '/' + data.weather[0].icon +'.png'} />&nbsp;&nbsp;&nbsp;
                        <span className="deg">
                            {parseInt(data.main.temp)} &deg;&nbsp;<sup>c</sup>
                        </span>
                    </div>
                    <p className="desc">{data.weather[0].description}</p> 
                    <div className="row">
                        <span className="col-6">
                            {parseInt(data.main.temp_min)} &deg;&nbsp;<sup>c</sup>
                        </span>
                        <span className="col-6">
                            {parseInt(data.main.temp_max)} &deg;&nbsp;<sup>c</sup>
                        </span>
                    </div>
                </div>
            </div>
        </div> 
    )
}

