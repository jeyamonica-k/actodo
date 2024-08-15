function Todolistitem(props){
  const arrlist=props.arrlist
  const setarrlist=props.setarrlist
  function handledelete(removeid){
    const temparr= arrlist.filter(function(item){
      if(removeid === item.id ){
        return false
      }
      else{
        return true
      }
    })
    setarrlist(temparr)
  }
  return (<div className="flex justify-between">
    <p>{props.index+1}.{props.activity}</p>
    <button className="text-red-600" onClick={()=>handledelete(props.id)}>Delete</button></div>)
}

export default Todolistitem