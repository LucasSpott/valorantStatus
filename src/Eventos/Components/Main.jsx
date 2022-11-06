import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './CSS/Main.css'

export default function Main() {

const [eventos, setEventos] = useState(null);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/events?language=pt-BR", {
            method: "GET",    
    })
    .then(response => response.json())
    .then(response => {
        setEventos(response);
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    });
    }, []);
    return (
        <div>
            <h1>Eventos</h1>
        <div className="divApiEventos">
            
            {eventos && eventos.data.map((data) => (
                <Link className="EventosApi" key={data.uuid}>
                    <div className="divEventos">
                    <h1>{data.displayName}</h1>
                    <h3>{data.shortDisplayName}</h3>
                    <p>{data.startTime}</p>
                    <p>{data.endTime}</p>
                    </div>
                </Link>
            ))}
        </div>
        </div>
    );
}