import React from 'react';
import { Const } from '../../Const';

const showWeekDays = (dt) =>{
    let d = new Date(dt * 1000).getDay();
    switch(d){
        case 0 : d='Sun'; break;
        case 1 : d='Mon'; break;
        case 2 : d='Tue'; break;
        case 3 : d='Wed'; break;
        case 4 : d='Thr'; break;
        case 5 : d='Fri'; break;
        case 6 : d='Sat'; break;
    }
    return d;
};

export const DailyWeatherCol = ({col}) =>{
    return(
        <div className="daily text-center">
            <h6>{showWeekDays(col.dt).toString()}</h6>
            <div>
                <img src={Const.WEATHER_IMG_URL + '/' + col.weather[0].icon +'.png'} />
                <p className="deg">
                    {parseInt(col.temp.min)} &deg;&nbsp;<sup>c</sup> | {parseInt(col.temp.max)} &deg;&nbsp;<sup>c</sup>
                </p>
            </div>              
        </div>
    )
}