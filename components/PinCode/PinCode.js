import styles from "./PinCode.module.css"

const PinCode = ({pinCode}) => {
 return(
  <>
  <div className={`d-flex justify-content-center ${styles.pinCodeDiv}`}>
  </div>
  <div className={`d-flex justify-content-center ${styles.pinCodeDiv}`}>
  <div className={` float-end d-flex flex-row  justify-content-center align-items-end ${styles.pinWrapper}`}>

<div className={` ${styles.borderDiv}`} > <p className={` ${styles.number}`}>{pinCode[0]}</p></div>
<div className={` ${styles.borderDiv}`} > <p className={` ${styles.number}`}>{pinCode[1]}</p></div>
<div className={` ${styles.borderDiv}`} > <p className={` ${styles.number}`}>{pinCode[2]}</p></div>
<div className={` ${styles.borderDiv}`} > <p className={` ${styles.number}`}>{pinCode[3]}</p></div>
<div className={` ${styles.borderDiv}`} > <p className={` ${styles.number}`}>{pinCode[4]}</p></div>
<div className={` ${styles.borderDiv}`} > <p className={` ${styles.number}`}>{pinCode[5]}</p></div>
</div>
</div>
</>
 );
}

export default PinCode;