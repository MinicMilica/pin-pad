import { useEffect, useState } from "react";
import styles from "./Time.module.css";
import Clock from 'react-live-clock';


const Time = () => {
  
    return (
      <div
        className={`text-uppercase text-center ${styles.clock}`}
      >
        <Clock format={'HH:mm'} ticking={true} hour12={false}  className={` ${styles.clock}`}/>
      </div>
    );
  };
  
  export default Time;
  