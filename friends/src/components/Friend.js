import React, { useEffect,useState } from 'react';
import {axiosWithAuth} from '../axiosWithAuth'
const Friend = props =>{
    const handleClick = e => {

        axiosWithAuth()
            .delete(`/friends/${props.data.id}`)
            .then( res => {
                props.getData()
            })
    }
   

    return(
        <div>
            <h2>Name: {props.data.name}</h2>
            <p>Age: {props.data.age}</p>
            <p>E-mail: {props.data.email}</p>
            <button onClick={handleClick}>remove</button>
        </div>
    )
}
export default Friend;