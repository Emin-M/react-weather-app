import React from "react";
import { connect } from "react-redux";

const Content = ({ weather }) => {
    console.log(weather);
    return (
        <div className="content">
        <div>{weather.name} {weather.sys ? weather.sys.country : null}
        </div>
        <div>Current-Temp: {weather.main ? (weather.main.temp - 273.5).toFixed(1) : null} °C</div>
        <div>
        <span>MAX:  {weather.main ? (weather.main.temp_max - 273.5).toFixed(1) : null} °C</span>
        <span>MIN:  {weather.main ?  (weather.main.temp_min - 273.5).toFixed(1) : null} °C</span>
        </div>
        <div>{weather.weather ? (weather.weather[0].description).toUpperCase() : null}
        </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state.weather
    }
}

export default connect(mapStateToProps)(Content);