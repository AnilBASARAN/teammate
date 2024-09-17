
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import TeamCards from "./TeamCards.jsx";
import {useState,useEffect} from "react";

const App = () => {

  const [teamInfo, setTeamInfo] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  
/*   const fetchInfo=()=>{
fetch("https://api.react-formula.com/learning-api/demos/teammates-project/profiles")
  .then((response)=>response.json())
  .then((data)=> {
    setTeamInfo(data);
    setIsLoading(false);
  }
  )
} */

  const fetchInfo = () => {
    setTimeout(() => {
      fetch("https://api.react-formula.com/learning-api/demos/teammates-project/profiles")
        .then((response) => response.json())
        .then((data) => {
          setTeamInfo(data);
          setIsLoading(false);
        });
    }, 2000); // 2 seconds delay
  };
  

  useEffect(()=>{
  fetchInfo();
},[])
  console.log(teamInfo)
  const allTeam = teamInfo.map((member,index)=><TeamCards key={index} info={member} />)
  
  return <div className="bg-neutral-100 flex min-h-screen justify-center items-center">
 {
    isLoading ? (<FontAwesomeIcon icon={faSpinner} className='text-6xl text-teal-400 animate-spin' />) : ( <div className="innerContainer" >
      {allTeam}
    </div>)


 }
  </div>
};

export default App;
