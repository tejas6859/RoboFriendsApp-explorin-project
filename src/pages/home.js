import React from "react";
import monsterCard from "../cards/MonsterCard";
const home =()=>{
    return(
        <>
            <div className="top">
                <h1 className="heading">Robo Friends App</h1>
            </div>
        <div className="search-bar">
                <p className="heading-2">Search by name</p>
                <input type="search" placeholder="search your robot" id="input"></input>
            </div><div className={"row"}>
                <monsterCard title={"jhamura"} description={"hilo hilo"} image={"https://robohash.org/2"}/>
                <monsterCard title={"ghamura"} description={"hilo hilo"} image={"https://robohash.org/1"} />
                <monsterCard title={"jinavar"} description={"hilo hilo"} image={"https://robohash.org/5"} />
                <monsterCard title={"zombida"} description={"hilo hilo"} image={"https://robohash.org/9"} />
            </div></>
    )
}