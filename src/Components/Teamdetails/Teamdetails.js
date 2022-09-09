import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Teamdetails = () => {
    const { teamId } = useParams();
    const [teamid, setTeamid] = useState([]);
    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/2/search_all_seasons.php?id=${teamId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            const seson = data.seasons; 
            setTeamid(seson)
        },[])
    });
    return (
        <div>
            <h2>This is teamdeatils site{teamId}</h2>
            {
            }
        </div>
    );
};

export default Teamdetails;