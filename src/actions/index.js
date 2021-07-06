import axios from "axios";

const KEY = "0b7a38753bcd79623a4a7078a0706f60";

export const fetchWeather = (request) => async (dispatch) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${request}&appid=${KEY}`)
    
    dispatch({
        type: "FETCH_WEATHER",
        payload: response.data
    })
}