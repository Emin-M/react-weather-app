import axios from "axios";

const KEY = "0b7a38753bcd79623a4a7078a0706f60";

export const fetchWeather = (request) => async (dispatch) => {
    const response = await axios.get(`api.openweathermap.org/data/2.5/weather?q=${request}&appid=${KEY}`)
    .catch((err) => console.log(err))

    var k = `api.openweathermap.org/data/2.5/weather?q=${request}&appid=${KEY}`
    console.log(k);
    
    dispatch({
        type: "FETCH_WEATHER",
        payload: response
    })
}