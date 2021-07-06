import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

const SearchBar = ({ fetchWeather }) => {
    const [q,setQ] = useState("london");

    useEffect(() => {
        fetchWeather(q)
    }, [])

    const click = (q) => {
        fetchWeather(q);
        setQ('');
    }

    return (
        <div className="searchbar">
          <input onChange={(e)=>setQ(e.target.value)} value={q} type="text" placeholder="type for cities" />
          <button onClick={()=>click(q)}>Search</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state
    }
}

export default connect(mapStateToProps, { fetchWeather })(SearchBar);
