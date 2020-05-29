import React, { Component } from 'react';
import { HourlyWeatherCol } from './HourlyWeatherCol';
import OwlCarousel from 'react-owl-carousel2';

const options = {
    rewind: true,
    autoplay: true,
    nav: false,
    margin: 10,
    responsive: {
        0: {items: 2},
        480:{items: 3},
        768:{items: 4},
        980:{items: 6},
        1200: {items: 7}
    }
};

export class HourlyWeather extends Component {
    constructor(props) {
        super(props);
	}
	
    render() {
        return(
            <div className="weather">
                <div className="carousel">
                    <OwlCarousel ref="car" options={options}>
                        { this.props.hourlyWeather.list.map((hour, i) =>
                            <HourlyWeatherCol col={hour}  key={i}/>
                        )}
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}