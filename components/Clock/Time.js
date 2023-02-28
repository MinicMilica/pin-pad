import { useEffect, useState } from "react";
import styles from "./Time.module.css";
import Clock from 'react-digital-clock';

const Time = () => {
  
    return (
      <div
        className={`text-uppercase text-center ${styles.clock}`}
      >
        <Clock  hour12={false} format={'hh-mm'} className={` ${styles.clock}`} />
      </div>
    );
  };
  
  export default Time;
  