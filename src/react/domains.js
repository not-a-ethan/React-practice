import React from "react";

// Components
import Request from "./components/apiRequest";

function Domains() {

    return (
        <>
            <h1>API request</h1>

            <p>I make an API request on this page. Once it is made the data will be displayed below</p>

            <Request />
        </>
    );
};

export default Domains;