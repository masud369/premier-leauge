import React, { useEffect, useState } from "react";
import Teams from "../Teams/Teams";
import maleimage from "../Photo/male.png";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './home.css';

const Home = () => {
  const [leauges, setLeauges] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_leagues.php`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const datas = data.leagues.slice(0, 15);
        setLeauges(datas);
        console.log(data);
      });
  }, []);
return (
    <div className="">
      <img style={{ height: "40vh", width: "95%" }} src={maleimage} alt="" />
      <div className="card-background">
       <div className="row cardContainer">  
            {leauges.map((leagues) => (
                <Teams leagues={leagues} key={leagues.id}></Teams>
            ))}
        </div>
      </div>
        
    </div>
  );
};

export default Home;
