import React from "react";
import "./teams.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import soccer from "../Photo/male.png";
import { useNavigate } from "react-router-dom";

const Teams = (props) => {
  const { strLeagueAlternate,  strSport, idLeague} = props.leagues;
  const navigation = useNavigate();
const exploreTeam =(idLeague)=>{
  navigation(`/teamid/${idLeague}`);
}
  return (
    <div className=" main d-flex col-md-4">
      {/* <h4 className='text-danger'>Title </h4> */}
      
        <Card className='card'>
            <Card.Img
            variant="top"
            style={{
                width: "100%",
                display: "block",
                margin: "0 auto",
            }}
            src={soccer}
            />
            <Card.Body>
            <Card.Title><h2> {strLeagueAlternate}</h2></Card.Title>
            <Card.Text>
                <p>Sports type: {strSport}</p>
            </Card.Text>
            <Button variant="primary" onClick={()=>exploreTeam(idLeague)}><span style={{fontWeight: 'bold',}}> Explore &#8594;</span></Button>{' '}
            </Card.Body>
        </Card>
      
    </div>
  );
};

export default Teams;
