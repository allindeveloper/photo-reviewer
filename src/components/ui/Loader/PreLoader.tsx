import React from "react";
import styles from "./preloader.module.css";

const PreLoader = () => {
  return (
    <div className={styles.preloader2}>
      <div className={styles.loader}>
        <div className={styles.loader__figure}></div>
      </div>
    </div>
  );
};

export default PreLoader;
