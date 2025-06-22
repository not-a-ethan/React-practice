import React from "react";

import List from "./list";

function DisplayObj(props) {
    const obj = props.obj;
    const keys = Object.keys(obj);
    const vals = Object.values(obj);

    const arr = [];

    for (let i = 0; i < keys.length; i++) {
        arr.push([keys[i], vals[i]]);
    }

    return (
        <ul>
            <List>
                {arr.map((item) =>
                    <br key={item} />
                )}
            </List>
        </ul>  
    )
}

export default DisplayObj;