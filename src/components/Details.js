import React from "react";

function Details({name, number}){
    return(
        <div className="details">
            <ul>
                <li>Acount Details</li>
                <li>Ac. Name: {name}</li>
                <li>Ac. Number: {number}</li>
            </ul>
        </div>
    )
}

export default Details;