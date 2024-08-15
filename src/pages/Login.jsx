import { useState } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login(props){
  const[eusername,seteusername]=useState()
  const[epassword,setepassword]=useState()
  const[ruser,setruser] =useState(true)
  const user=props.user
  const navigate=useNavigate()
  var userfound=false
  function checkUser(){
    user.forEach(function(item){
      if(item.username === eusername && item.password === epassword){
        console.log("login success")
        console.log(user)
        userfound = true
        navigate("/landing",{state:{user:eusername}})
      }
    })
    if(userfound===false){
      console.log("login failed")
      setruser(false)
    }
  }
  

function handleInput(evt){
  seteusername(evt.target.value)
}

function handlepassword(evt){
  setepassword(evt.target.value)
}
  return (<div className="bg-black p-10">
    
    <div className="bg-[#EFEFEF] border rounded-md p-10">
      
      <h1 className="text-2xl font-medium">Hey Hi</h1>
      {ruser?<p>I help you manage your activities after you login :)</p>:<p className="text-red-500">Please signup before login</p>}
      
      <div className="flex flex-col gap-2 my-2">
        
        <input 
        type="text" 
        className="w-52 border-black bg-transparent border rounded-md p-1" 
        placeholder="username" 
        value={eusername} 
        onChange={handleInput} />
        
        <input 
        type="text" 
        className="w-52 border-black bg-transparent border rounded-md p-1" 
        placeholder="password" 
        value={epassword} onChange={handlepassword}/>

      </div>

      <button className="bg-[#8272DA] p-1 border rounded-md w-24 text-xl" onClick={checkUser}>Login</button>
     
      <p>Don't you have an account?<Link  className="underline" to={"/signup"}>SignUp</Link></p>
    
    </div>

  </div>)
}

export default Login