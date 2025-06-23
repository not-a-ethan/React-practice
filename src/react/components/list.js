import React, { Children } from "react";

function List( { children } ) {

    return (
        <>
            {Children.map(children, child =>
                <li>
                    {child.key.split(",")[0]} | {child.key.split(",")[1]}
                </li>
            )}
        </>
    );
};

export default List;