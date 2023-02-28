import Image from "next/image";
import Logo from "../../assets/konnex-logo.jpg";
import Time from "../Clock/Time";
import DateTime from "../Date/Date";
import styles from "./header.module.css";

export default function Header() {
  
  return (
    <div
      className={`w-100  d-flex justify-content-between align-items-center ${styles.wrapper}`}
    >
      <Image src={Logo} alt="Logo image" width={953} height={152} />
      <div className="d-flex flex-column align-items-center ">
        <Time />
        <DateTime/>
      </div>
    </div>
  );
}
