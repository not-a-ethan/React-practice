import React from "react";

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
            {arr.map((item) =>
                <li key={item[0]}>
                    <code>{item[0]}</code>: <code>{item[1]}</code>
                </li>
            )}
        </ul>
    )
}

export default DisplayObj;