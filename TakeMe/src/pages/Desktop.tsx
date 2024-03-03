import { FunctionComponent } from "react";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <div className={styles.welcomeBackPlease}>
        Welcome back! Please login to your account.
      </div>
      <b className={styles.trymeTextmeTakeme}>TryMe, TextMe, TakeMe</b>
      <img className={styles.pngImage1} alt="" src="/png-image-1@2x.png" />
      <div className={styles.desktop1Child} />
      <div className={styles.desktop1Item} />
      <div className={styles.desktop1Inner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.frameDiv} />
      <img
        className={styles.untitledDesign1}
        alt=""
        src="/untitled-design-1@2x.png"
      />
      <div className={styles.desktop1Child1} />
    </div>
  );
};

export default Desktop;
