import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchWeather } from "../actions";

const SearchBar = ({ fetchWeather }) => {
    const [q,setQ] = useState("london");

    useEffect(() => {
        fetchWeather(q)
    }, [])

    const click = (e,q) => {
        fetchWeather(q);
        setQ('');
        e.preventDefault();
    }

    return (
        <div className="searchbar">
        <form onSubmit={(e)=>click(e,q)}>
          <input onChange={(e)=>setQ(e.target.value)} value={q}
                 type="text" placeholder="type for cities" />
          <button type="submit">Search</button>
        </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state
    }
}

export default connect(mapStateToProps, { fetchWeather })(SearchBar);
