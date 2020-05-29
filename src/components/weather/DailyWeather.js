import React, { Component } from 'react';
import { DailyWeatherCol } from './DailyWeatherCol';
import OwlCarousel from 'react-owl-carousel2';

const options = {
    rewind: true,
    autoplay: true,
    nav: false,
    margin: 10,
    responsive: {
        0: {items: 1},
        480:{items: 2},
        600:{items: 3},
        768:{items: 4},
        980:{items: 5},
        1200: {items: 5}
    }
};

export class DailyWeather extends Component {
    constructor(props) {
        super(props);
	}
	
    render() {
        return(
            <div className="weather">
                <div className="carousel">
                    <OwlCarousel ref="car" options={options}>
                        {this.props.dailyWeather.list.map((day, i) =>
                            <DailyWeatherCol col={day} key={i}/>
                        )}
                    </OwlCarousel>
                </div>
            </div>
        )
    }
}