import { useState } from "react";
import styles from "./Keyboard.module.css";

const Keyboard = ({setPinCode, handleDelete}) => {
  const [count, setCount] = useState(0);
  const[isSuccess, setIsSuccess] = useState(false);
  
  const handleClick = (num) => {
    if( num !== "C" && num !== "Y") {
      setPinCode(pinCode => [...pinCode, num]);
      setCount(count + 1);
    }
    else if (num === "C") {
      handleDelete();
      setCount(count - 1);
    }
  };
  const handleSuccess = () => {
    checkPassword().then(data => {
      if (data.message === 'Success' && count >= 6) {
        setIsSuccess(true);
        setPinCode("");
      }
    });
  };
  const checkPassword = async () => {
    const response = await fetch('api/password');
    return response.json();
  };

  return (
    <div className={` d-flex justify-content-center align-items-center ${styles.keyboardWrapper}`}>
   { !isSuccess ? (<div className={` d-flex flex-column justify-content-between ${styles.secondDiv}`} >
      <div className={`d-flex flex-row justify-content-between ${styles.customRow}`}>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(7)}><p className={`text-center ${styles.p}`}>7</p></button>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(8)}><p className={`text-center ${styles.p}`}>8</p></button>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(9)}><p className={`text-center ${styles.p}`}>9</p></button>
      </div>

      <div className={`d-flex flex-row justify-content-between ${styles.customRow}`}>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(4)}><p className={`text-center ${styles.p}`}>4</p></button>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(5)}><p className={`text-center ${styles.p}`}>5</p></button>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(6)}><p className={`text-center ${styles.p}`}>6</p></button>
      </div>

      <div className={`d-flex flex-row justify-content-between ${styles.customRow}`}>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(1)}><p className={`text-center ${styles.p}`}>1</p></button>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(2)}><p className={`text-center ${styles.p}`}>2</p></button>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(3)}><p className={`text-center ${styles.p}`}>3</p></button>
      </div>

      <div className={`d-flex flex-row justify-content-between ${styles.customRow}`}>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`}><div className={`text-center ${styles.p} ${styles.divC}`} onClick={() => handleClick("C")}>C</div></button>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.button}`} onClick={() => handleClick(0)}><p className={`text-center ${styles.p}`}>0</p></button>
        <button className={`btn btn-outline-dark  d-flex justify-content-center align-items-center ${styles.imageButton}`} onClick={() => handleSuccess()}>  </button>
      </div>
    </div>) : (<div className="d-flex justify-content-center align-items-center"> <div className={`${styles.message}`}> Success! </div></div>) }
  </div>
  );
};

export default Keyboard;
