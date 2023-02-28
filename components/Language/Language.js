import Image from "next/image";
import styles from "./Language.module.css";
import LanguageImage from "../../assets/Vector.svg";
import { useState } from "react";
import {useLanguageStore} from "../../store/LanguageStore";

const Lenguage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const switchingState = function () {
      isOpen ? setIsOpen(false) : setIsOpen(true);}

    const changeLanguageState = useLanguageStore((state) => state.changeLanguageState);
    const handleLanguage = (language) => {
        switchingState();
        changeLanguageState(language);
        }
 return(
 <>
<div onClick={() => switchingState()} className={` d-flex justify-content-center align-items-center ${styles.div}`}>
<Image src={LanguageImage} alt="Language icon" width={100} height={100}/> 
</div>
{!isOpen ? <></> : <ul className={` d-flex justify-content-end ${styles.list}  ${({ isOpen }) => (isOpen ? `d-block` : "d-none")};`}>
<li  onClick={() => {handleLanguage("EN")}} className={` d-flex justify-content-center align-items-center ${styles.listElements}`} ><div className={`${styles.language}`}>EN</div></li>
<li onClick={() => {handleLanguage("FR")}} className={` d-flex justify-content-center align-items-center ${styles.listElements}`} ><div className={`${styles.language}`} >FR</div></li>  
<li onClick={() => {handleLanguage("IT")}} className={` d-flex justify-content-center align-items-center ${styles.listElements}`} ><div className={`${styles.language}`} >IT</div></li>
<li onClick={() => {handleLanguage("DE")}} className={` d-flex justify-content-center align-items-center ${styles.listElements}`} ><div className={`${styles.language}`} >DE</div></li>
</ul>}
<div className={`d-flex justify-content-center align-items-center ${styles.secondDiv}`} >
    ?
</div>
</>
 );

}

export default Lenguage;