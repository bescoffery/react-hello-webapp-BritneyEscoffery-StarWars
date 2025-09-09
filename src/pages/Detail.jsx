import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Detail = () => { 
    const {store, dispatch}= useGlobalReducer()
    const {id} = useParams()
    // console.log("Current ID:", ID);


    const getDetails = () =>{
        fetch(store.baseURL + "/people/" + id)
        .then((resp) => resp.json())
        .then((data) => console.log("Luke Details tag:",data))
    }
    useEffect(
        ()=>{
            getDetails()
        },[]
    )
    return(
        <div>
            <h1>Details</h1>
            <Link to="/">
            <button 
            type="button" 
            className="btn btn-danger">
                Home
                </button>
            </Link>
            {id}
        </div>
    )
};