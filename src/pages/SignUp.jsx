import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SignUp(props){
  const user=props.user
  const setuser=props.setuser
  const[eusername,seteusername]=useState()
  const[epassword,setepassword]=useState()
  const navigate=useNavigate()
  
function handleInput(evt){
  seteusername(evt.target.value)
}

function handlepassword(evt){
  setepassword(evt.target.value)
}
function addUser(){
  setuser([...user,{username:eusername,password:epassword}])
  navigate("/")
}
  return (
  
  <div className="bg-black p-10">
    
    <div className="bg-[#EFEFEF] border rounded-md p-10">
      
      <h1 className="text-2xl font-medium">Hey Hi</h1>
      <p>I help you manage your activities after you login :)</p>
      
      <div className="flex flex-col gap-2 my-2">
       
        <input 
        type="text" 
        className="w-52 border-black bg-transparent border rounded-md p-1" 
        placeholder="username" 
        value={eusername}
        onChange={handleInput}/>
        <input 
        type="text" 
        className="w-52 border-black bg-transparent border rounded-md p-1" 
        placeholder="password"
        value={epassword}
        onChange={handlepassword}/>
        <input 
        type="text" 
        className="w-52 border-black bg-transparent border rounded-md p-1"
        placeholder="confrim password" />

      </div>
      
      <button className="bg-[#FCA201] p-1 border rounded-md w-24 text-xl" onClick={addUser}>Sign Up</button>
     
      <p>Already have an account?<Link  className="underline" to={"/"}>Login</Link></p>
    
    </div>

  </div>)
}
export default SignUp