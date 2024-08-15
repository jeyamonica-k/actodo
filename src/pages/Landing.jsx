import { useLocation } from "react-router-dom"
import Header from "../components/Header";
import Card from "../components/Card";
import Todocontainer from "../components/Todocontainer";

function Landing(){
  const data=useLocation()
  
  // return(<h1 className="text-2xl text-red-500">Hello {data.state.user} </h1>)
  return (
    <div className='bg-black p-10'>
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        {/* Header component */}
        <Header name={data.state.user}></Header>
        {/* Card component */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">
        <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"}></Card>
        <Card bgcolor={"#FD6663"} title={"13August2024"} subtitle={"18:48"}></Card>
        <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"}></Card>
        </div>
        {/* Todocontainer component */}
        <Todocontainer></Todocontainer>
      </div>
    </div>
  );
}

export default Landing