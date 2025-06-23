import React, { useState } from "react";

import DisplayObj from "./displayObj";

function Request() {
    const [data, setData] = useState();
    
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => setData(json))

    return data ?/* <span>User ID: {data["userId"]}<br />Id: {data["id"]}<br />Title: {data["title"]}</span>*/ <DisplayObj obj={data} />: "";
}

export default Request;