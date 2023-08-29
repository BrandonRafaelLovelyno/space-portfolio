//Importing react boostrap component
import { useEffect, useRef, useState } from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//Importing utilities
import addObserver from '../../utils/observer'

function CircularProgress({ value,color,text,size}) {
  const [isVisible,setisVisible]=useState(false);
  const circularRef=useRef();
  useEffect(()=>{
    const observer=new IntersectionObserver((entries)=>{
      setisVisible(entries[0].isIntersecting)
    })
    observer.observe(circularRef.current)
   return ()=>{
    observer.disconnect()
   } 
  },[])
  const styles={
    width:`${size}px`,
    height:`${size}px`,
    marginBottom:'20px',
  }
  return (
    <div className="circular-container">
    <div style={styles}>
    <div ref={circularRef} className={isVisible?"animate__animated animate__fadeInUp":"none"}>
      <CircularProgressbar value={value} maxValue={100} minValue={0} text={`${value}%`}styles={buildStyles({
    rotation: 0.25,
      strokeLinecap: 'butt',
      textSize: '16px',
      pathColor: `rgba(187,68,240,${value / 100})`,
      pathTransitionDuration: 0.5,
      textColor: '#ffff',
      trailColor: 'rgba(225,225,225,0.1)',
      backgroundColor: '#3e98c7',
  })}/>
  </div>
  </div>
      <span className="circular-sub-text">{text}</span>
    </div>
  );
}

export default CircularProgress;
