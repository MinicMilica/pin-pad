import styles from "./DateTime.module.css";

const DateTime = () => {
    let dateObj = new Date();
    let month = String(dateObj.getMonth() + 1).padStart(2, "0");
    let year = dateObj.getFullYear();
    let day = String(dateObj.getDate()).padStart(2, "0");
    let output = day + "." + month + "." + year;
    return (
      <div className={`text-uppercase text-center ${styles.date}`} >
          {" "}
          {output}{" "}
        </div>
    );
  };
  
  export default DateTime;
  