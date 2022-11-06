import React from "react";
import { useEffect } from "react";
import './CSS/Main.css'
import { Link } from "react-router-dom";


export default function Main() {
    const [api, setApi] = React.useState(null);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents?language=pt-BR", {
            method: "GET",
            headers: {
            ContentType: "application/json",
            },
        })
        .then(response => response.json())
        .then(response => {
            setApi(response);
            console.log(response);
        })
        .catch(err => {
            console.error(err);
        });
        }, []);
         //CONECCAO COM API

    return (
        <div>
            
        {api && api.data.map((data) => (
        <Link to="/Eventos/Champions" key={data.displayName}>
        <img className="imgDisplay" src={data.displayIcon} alt={data.displayName} />
        <p className="pApiHome">{data.description}</p>
        </Link>
            ))}
        
        </div>
    );
}