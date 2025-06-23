import React, { useState } from "react";

// Components
import DisplayObj from "./displayObj";

function Request() {
    const [data, setData] = useState();
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setData(json));

    return data ? <DisplayObj obj={data} />: "";
}

export default Request;