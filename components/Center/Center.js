import Keyboard from "../Keyboard/Keyboard";
import PinCode from "../PinCode/PinCode";
import styles from "./Center.module.css";
import PadLock from "../../assets/padlock.svg"
import Circle from "../../assets/Ellipse2.svg";
import Exit from "../../assets/Exit.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Language from "../Language/Language";
import { useLanguageStore } from "../../store/LanguageStore";

const Center = () => {
  const [pinCode, setPinCode] = useState([]);
  const lang = useLanguageStore((state) => state.language);
  const handleDelete = () => {
    setPinCode(pinCode.slice(0, -1))
  }
  
  const [string1, setString1] = useState("")
  const [string2, setString2] = useState("");
  const [string3, setString3] = useState("");
  const [string4, setString4] = useState("");
   
  useEffect(() => {
    if( lang === "EN") {
      setString1("welcome to the konnex");
      setString2("enter your pin code");
      setString3("Check in without a guest card");
      setString4("Or try your guest card scanner again");
    }
    else if ( lang === "FR" ) {
      setString1("bienvenue à la konnex");
      setString2("entrez votre code PIN");
      setString3( "Arrivée sans carte d'hôte");
      setString4("Ou essayez à nouveau votre scanner de carte d'hôte");
    }
    else if ( lang === "IT" ) {
      setString1("benvenuto alla konnex");
      setString2("inserisci il tuo codice PIN");
      setString3("Effettua il check-in senza una carta ospite");
      setString4("Oppure prova di nuovo lo scanner per carte ospiti");
    }
    else if ( lang === "DE" ) {
      setString1("willkommen im konnex");
      setString2("Geben Sie Ihren PIN-Code ein");
      setString3("Einchecken chne Gästekarte");
      setString4("Oder versuchen Sie erneut, ihren Gästeausweis zu scannen");
    }
    
  }, [lang]);

  return (
    <>
    <div className={`${styles.wrapper}`}>
      <h3 className={`text-uppercase text-stwelcome to the connectionart ${styles.h3}`} >
        {string1}
      </h3>
      </div>
      <div className={styles.grayBackground}>
        <Image src={Exit} alt="Exit" width={76} height={76}  className={`${styles.exitButton}`}/>
        <h1 className={`text-uppercase text-start ${styles.h1}`}>
          {string2}
        </h1>
        <div className="d-flex flex-row ">
       <Keyboard setPinCode={setPinCode} handleDelete={handleDelete}/>
        <div className="d-flex align-items-center flex-column">
          <div className={`d-flex justify-content-center ${styles.padClockDiv}`}>
          <Image src={PadLock} alt="PadLock image" width={283} height={394} />
          </div>
          <PinCode pinCode={pinCode} />
        </div>
        </div>
    </div>
    <Language/>
    <div className={` d-flex flex-row align-items-center ${styles.wrapperSlide}`}>
      <div className={`d-flex flex-row align-items-center justify-content-start w-50 ${styles.sliderGap}`}>
      <Image src={Circle} alt="Left arrow" width={146} height={146} className={`${styles.imageLeftArrow}`}/>
        <div className={`${styles.h4}`}> {string3} </div></div>
        <div className={`d-flex flex-row align-items-center justify-content-end w-50 ${styles.sliderGap} `} >
        <div className={` d-flex justify-content-end text-end ${styles.h4}`} > {string4} </div>
        <Image src={Circle} alt="Left arrow" width={146} height={146} className={`${styles.imageRightArrow}`} />
        </div>
    </div>
    </>
  );
};

export default Center;
