import axios from 'axios';
const base_url = 'https://api.openweathermap.org';
const weather_key = process.env.REACT_APP_WEATHER_APP_ID;

export default {
    GetWeatherByLocation(lat, long) {
        return new Promise((resolve, reject) => {
            axios.get(base_url +'/data/2.5/weather?lat='+ lat +'&lon='+ long + '&appid='+ weather_key + '&units=metric')
            .then(response => {
                if(response) {
                    resolve (response.data);
                }
                else {
                    alert('Unable to show weather');
                }
            })
            .catch(error => {
                console.log(error);
            })
        })
    },
    GetWeatherByCityName(city) {
        return new Promise((resolve, reject) => {
            axios.get(base_url + '/data/2.5/weather?q='+ city + '&appid='+ weather_key+ '&units=metric')
            .then(response => {
                if(response) {
                    resolve (response.data);
                }
                else {
                    alert('Unable to find weather');
                }
            })
            .catch(error => {
                //console.log(error);
                reject(error);
            })
        })
    },
    GetGroupOfWathersByCityId(ids) {
        return new Promise((resolve, reject) => {
            axios.get(base_url+ '/data/2.5/group?id='+ ids + '&appid='+weather_key + '&units=metric')
            .then(response => {
                if(response) {
                    resolve (response.data);
                }
                else {
                    alert('Unable to find weather');
                }
            })
            .catch(error => {
                console.log(error);
                //reject(error);
            })
        })
    },
    GetDailyWeather(lat, long) {
        return new Promise((resolve, reject) => {
            axios.get(base_url + '/data/2.5/forecast/daily?lat='+ lat +'&lon='+ long + '&appid='+ weather_key + '&units=metric&cnt=6')
            .then(response => {
                if(response) {
                    resolve(response.data);
                }
                else {
                    alert('Unable to show daily weather');
                }
            })
            .catch(error => {
                console.log(error);
            })
        })
    },
    GetHourlyWeather(lat, long) {
        return new Promise((resolve, reject) => {
            axios.get(base_url + '/data/2.5/forecast?lat='+ lat +'&lon='+ long + '&appid='+ weather_key + '&units=metric&cnt=8')
            .then(response => {
                if(response) {
                    resolve(response.data);
                }
                else {
                    alert('Unable to show hourly weather');
                }
            })
            .catch(error => {
                console.log(error);
            })
        })
    },
    GetWeatherMap(lat, long, zoom) {
        return new Promise((resolve, reject) => {
            axios.get(base_url + '/weathermap?basemap=map&cities=false&layer=temperature&lat='+ lat +'&lon=' + long + '&zoom='+ zoom)
            .then(response => {
                if(response) {
                    resolve(response.data);
                }
                else {
                    alert('Unable to show weather map');
                }
            })
            .catch(error => {
                console.log(error);
            })
        })
    }
}