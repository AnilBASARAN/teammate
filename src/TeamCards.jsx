
const TeamCards=(props)=>{

    const {info}=props;
      
      return(
    
    <div className="outerContainer flex shdow-md p-2 m-2">
    
      <div className="leftSide bg-teal-400">
      <img alt="" src={info.image} className="rounded-full bg-teal-400 w-24" />  
      </div>
      <div className="rightSide bg-white flex-1 ml-2">
      <div className="text-xl text-neutral-500">{info.name}</div>
      <div className="text-lg text-neutral-500">{info.title}</div>
      <div className="text-sm text-neutral-500">{info.email}</div>
      </div>
      
    </div>
        
      );
      
    };
      export default TeamCards;