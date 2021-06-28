import axios from "axios";

const KEY = "0b7a38753bcd79623a4a7078a0706f60";
/*const KEY = "db1d760c40424ce4a01517790e2817e3";*/

export const fetchWeather = (request) => async (dispatch) => {
    const response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${request}&appid=${KEY}`)
    .catch((err) => console.log(err))
    
    dispatch({
        type: "FETCH_WEATHER",
        payload: response
    })

    /*const response = await axios.get(`https://api.weatherbit.io/v2.0/history/daily?postal_code=27601&country=US&start_date=2021-06-24&end_date=2021-06-25&key=${KEY}`)
    .catch((err) => console.log(err))
    
    dispatch({
        type: "FETCH_WEATHER",
        payload: response
    })*/
}