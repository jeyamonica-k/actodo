import Addtodo from "./Addtodo"
import Todolist from "./Todolist"
import { useState } from "react"

function Todocontainer(){
  const[arrlist,setarrlist]=useState([{id:1,activity:"Go for walk"},
    {id:2,activity:"warm up exercise"},
    {id:3,activity:"workout for 30mins"}])
  return(
    <div>
      <div className="flex gap-5 flex-wrap">
          <Addtodo arrlist={arrlist} setarrlist={setarrlist}></Addtodo>
          <Todolist arrlist={arrlist} setarrlist={setarrlist}></Todolist>
        </div>
    </div>
    
  )
}

export default Todocontainer