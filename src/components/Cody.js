import React, { useState } from "react";
import data from "./data";
import "../css/body.css";
function Cody() {
  const [search,setSearch] = useState("");
  return (
    <>
      <>
        <>
            <div className="top">
              <h1 className="heading">Robo Friends App</h1>
            </div>
        </>
        <div className="search-bar">
          <p className="heading-2">Search by name:</p>
          <input
            type="search"
            placeholder="search your robot"
            id="input"
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
      </>
      <div className="cards-container">
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search);
          })
          .map((element) => (
            <div key={element.id} className="box">
              <img src={`https://robohash.org/${element.id}`} />
              <h3 className="dark">{element.name}</h3>
              <p className="normal-font">{element.email}</p>
              <p className="normal-font">{element.username}</p>
            </div>
          ))}
      </div>
    </>
  );
}
export default Cody;
