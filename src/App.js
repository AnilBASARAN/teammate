
import './App.css';

import TeamCards from "./TeamCards.jsx";
import {useState,useEffect} from "react";

const App = () => {

  const [teamInfo, setTeamInfo] = useState([]);
  
  const fetchInfo=()=>{
fetch("https://api.react-formula.com/learning-api/demos/teammates-project/profiles")
  .then((response)=>response.json())
  .then((data)=> setTeamInfo(data) )
}

  useEffect(()=>{
  fetchInfo();
},[])
  console.log(teamInfo)
  const allTeam = teamInfo.map((member,index)=><TeamCards key={index} info={member} />)
  
  return <div className="bg-neutral-100 flex min-h-screen justify-center">
  <div className="innerContainer" >
    {allTeam}
  </div>
  </div>
};

export default App;
