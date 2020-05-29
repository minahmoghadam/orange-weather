import React from 'react';
import { Const } from '../../Const';

export const HourlyWeatherCol = ({col}) => {
    return(
        <div className="hourly text-center">
            <h6>{new Date(col.dt * 1000).getHours().toString()} : 00</h6>
            <div>
                <img src={Const.WEATHER_IMG_URL + '/' + col.weather[0].icon +'.png'} />
                <p className="deg">
                    {parseInt(col.main.temp)} &deg;&nbsp;<sup>c</sup>
                </p>
            </div>                           
        </div>
    )
}