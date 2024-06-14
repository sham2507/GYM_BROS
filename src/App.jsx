import Hero from "./components/Hero.jsx";
import Generator from "./components/Generator.jsx";
import Workout from "./components/Workout.jsx";

import { generateWorkout } from "./util/functions.js";

import {useState} from "react";

function App() {

  let [workout,setWorkout] = useState(null);  
  let [poison,setPoison] = useState("individual");
  // eslint-disable-next-line no-unused-vars
  let [muscles,setMuscles] = useState([]);
  let [goal,setGoal] = useState('strength_power');

  let [terms,setTerms] = useState(false);
  function termsConditions(){            
    setTerms(true);    
    window.location.href = '#generate';
  }
  
  function updateWorkout(){
    if(muscles.length < 1){
      return;
    }
    let newWorkout = generateWorkout({poison,muscles,goal});
    setWorkout(newWorkout);
    window.location.href = "#workout";
  }

  return (
    <main className="min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base">
      <Hero terms = {termsConditions}/>

      {terms === true ? <Generator poison={poison} setPoison={setPoison} muscles={muscles} setMuscles={setMuscles} goal={goal} setGoal={setGoal} updateWorkout = {updateWorkout}/>: null}

      {(workout) ? <Workout id={"workout"} workout={workout}/>: null}
      
    </main>
  )
}

export default App
