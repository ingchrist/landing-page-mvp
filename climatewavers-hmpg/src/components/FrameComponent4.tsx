import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameChild} />
      <div className={styles.frameGroup}>
        <button className={styles.donateWrapper}>
          <a className={styles.donate}>Donate</a>
        </button>
        <div className={styles.walletWrapper}>
          <img
            className={styles.walletIcon}
            loading="lazy"
            alt=""
            src="/wallet.svg"
          />
        </div>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/frame-30139@2x.png"
        />
      </div>
    </header>
  );
};

export default FrameComponent4;
