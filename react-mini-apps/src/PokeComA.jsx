import Axios from "axios";
import React, { useEffect, useState } from "react";

const PokeComA = () => {

   const [num,setNum] = useState("1");
   const [name,setName] = useState();
   const [moves,setMoves] = useState();

   useEffect(() => {
     async function getData () {
       const res = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
       console.log(res);
       setName(res.data.name);
       setMoves(res.data.moves.length);
       document.title=`${res.data.name}`;  // Set the title of the tab
     }
     getData();
   });

  return (
    <>
    <h2>You choose <span style={{color:"red"}}> {num} </span> value</h2>
    <h2>My name is <span style={{color:"red"}}>{name}</span> name</h2>
    <h2>I have <span style={{color:"red"}}>{moves}</span> moves </h2>
      <select value={num} onChange={(event)=>{
          setNum(event.target.value);
      }}>
        <option value="1"> 1 </option>
        <option value="25"> 25 </option>
        <option value="3"> 3 </option>
        <option value="4"> 4 </option>
        <option value="5"> 5 </option>
      </select>
    </>
  );
};

export default PokeComA;
