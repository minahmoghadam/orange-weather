import axios from 'axios';
const base_url = 'https://www.googleapis.com/geolocation/v1';
const geo_key = process.env.REACT_APP_GOOGLE_GEOLOCATION;

export default {
   GetCurrentLocation(){
        return new Promise ((resolve, reject) => {
            axios.post(
                base_url + '/geolocate?key='+ geo_key,
                {'considerIp': true}
            )
            .then(response => {
                 if (response) {
                        resolve (response.data.location);
                } else {
                    reject('Your location is not found !');
                } 
            })
            .catch(error => {
                console.log(error);
            });
        }) 
    }
}
