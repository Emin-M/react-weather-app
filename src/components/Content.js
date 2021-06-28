import React from "react";
import { connect } from "react-redux";

const Content = ({ weather }) => {
    return (
        <div className="content">
            <div>Country Name</div>
            <div>icon</div>
            <div>temparature</div>
            <div>description</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        weather: state
    }
}

export default connect(mapStateToProps)(Content);