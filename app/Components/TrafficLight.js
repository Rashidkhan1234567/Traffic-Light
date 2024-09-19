"use client";
import { useState, useEffect } from "react";

const TrafficLight = () => {
  const [lightStatus, setLightStatus] = useState("red");
  let num = 0

  useEffect(() => {
    const lightColor = ["red", "yellow", "green"];
    
    const interval =  setInterval(() => {
      num++
      if(num > 3 ){
        num = 0;
      }else{
        setLightStatus(lightColor[num - 1])
        console.log(num) ;
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="main overflow-hidden w-screen h-screen grid place-content-center">
      <div className="traffic-light-container relative w-[190px] h-[450px] bg-black rounded-md flex flex-col justify-center items-center gap-7 shadow-inner shadow-slate-600">
        <div
          className={`light w-[60%] h-[25%] ${
            lightStatus === "red" ? "bg-red-700" : "bg-gray-700"
          } rounded-full`}
        ></div>
        <div
          className={`light w-[60%] h-[25%] ${
            lightStatus === "yellow" ? "bg-yellow-500" : "bg-gray-700"
          } rounded-full`}
        ></div>
        <div
          className={`light w-[60%] h-[25%] ${
            lightStatus === "green" ? "bg-green-600" : "bg-gray-700"
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
};

export default TrafficLight;