import { useState } from "react"

function Addtodo(props){
  const arrlist=props.arrlist
  const setarrlist=props.setarrlist
  const [newarrlist,setnewarrlist]=useState("")
  function handleChange(evt){
    setnewarrlist(evt.target.value)
  }
  function handleaddlist(){
    setarrlist([...arrlist,{id:arrlist.length+1,activity:newarrlist}])
  }
  return (
    <div className="flex flex-col gap-3">
    <h1 className="text-2xl font-medium">Manage Activities</h1>
    <div>
      <input type="text" placeholder="Next Activity?" className="border bg-transparent p-1"  value={newarrlist} onChange={handleChange}/>
      <button className="bg-black text-white border p-1" onClick={handleaddlist}>Add</button>
    </div>
  </div>
  )
}
export default Addtodo