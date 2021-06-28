import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

const SearchBar = ({ fetchWeather }) => {
    const [q,setQ] = useState();

    return (
        <div className="searchbar">
          <input onChange={(e)=>setQ(e.target.value)} type="text" placeholder="type for cities" />
          <button onClick={()=>fetchWeather(q)}>Search</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state
    }
}

export default connect(mapStateToProps, { fetchWeather })(SearchBar);
