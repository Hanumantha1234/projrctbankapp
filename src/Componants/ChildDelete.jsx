import React from "react";



export const ChildDelete = ({deleteData}) =>{
    return (
        <div>
            <button onClick={deleteData}>delete</button>
        </div>
    )
}