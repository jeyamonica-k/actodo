import { useState } from "react";
import Todolistitem from "./Todolistitem";

function Todolist(props) {
  const arrlist=props.arrlist
  const setarrlist=props.setarrlist
  return (
    <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
      <h1 className="font-medium text-2xl">Today's Activity</h1>
      {arrlist.length === 0?<p>You haven't added any activity yet</p>:"" }
      {
        arrlist.map(function(item,index){
          return (<Todolistitem index={index} activity={item.activity} id={item.id} arrlist={arrlist} setarrlist={setarrlist}></Todolistitem>)
        })
      }
    </div>
  );
}
export default Todolist;
