
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';
// function App() {
//   return (
//     <div className='bg-black p-10'>
//       <div className="bg-[#EFEFEF] p-10 border rounded-md">
//         {/* Header component */}
//         <Header></Header>
//         {/* Card component */}
//         <div className="flex justify-between gap-7 my-5 flex-wrap">
//         <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
//         <Card bgcolor={"#FD6663"} title={"13August2024"} subtitle={"18:48"}></Card>
//         <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
//         </div>
//         {/* Todocontainer component */}
//         <Todocontainer></Todocontainer>
//       </div>
//     </div>
//   );
// }
function App(){
  const[user,setuser]=useState(
    [
      {
        username:"john",
        password:"123"
      }
    ]
  )
  return (<div>
    <BrowserRouter>
    
    <Routes>
    <Route path='/' element={<Login user={user} setuser={setuser}/>}></Route>
    <Route path='/signup' element={<SignUp user={user} setuser={setuser}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
    </Routes></BrowserRouter>
    </div>
    )
}

export default App;
