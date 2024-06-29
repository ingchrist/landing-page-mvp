import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
  noah?: string;
  noahhweb3?: string;
  hr?: string;
  more?: string;
  tornadoWatchAlertAPower?: string;
  frame30144?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
  noah,
  noahhweb3,
  hr,
  more,
  tornadoWatchAlertAPower,
  frame30144,
}) => {
  return (
    <div className={[styles.tornadoAlertDetailsParent, className].join(" ")}>
      <div className={styles.tornadoAlertDetails}>
        <div className={styles.tornadoAlertContent}>
          <div className={styles.tornadoAlertHeader}>
            <b className={styles.noah}>{noah}</b>
            <div className={styles.noahhweb3}>{noahhweb3}</div>
            <div className={styles.tornadoAlertUser}>-</div>
            <div className={styles.hr}>{hr}</div>
          </div>
          <img className={styles.moreIcon} loading="lazy" alt="" src={more} />
        </div>
        <div className={styles.tornadowatchAlert}>
          {tornadoWatchAlertAPower}
        </div>
      </div>
      <img
        className={styles.frameChild}
        loading="lazy"
        alt=""
        src={frame30144}
      />
    </div>
  );
};

export default FrameComponent1;
