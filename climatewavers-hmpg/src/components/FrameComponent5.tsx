import { FunctionComponent } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./FrameComponent5.module.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.homeWrapper}>
          <img className={styles.homeIcon} alt="" src="/home.svg" />
        </div>
        <div className={styles.homeContainer}>
          <div className={styles.home}>Home</div>
        </div>
      </div>
      <FrameComponent people="/people.svg" community="Community" />
      <FrameComponent people="/bookmark.svg" community="Bookmark" />
      <div className={styles.iconContainer}>
        <div className={styles.iconContainerChild} />
        <div className={styles.voiceSquareParent}>
          <img
            className={styles.voiceSquareIcon}
            loading="lazy"
            alt=""
            src="/voicesquare.svg"
          />
          <div className={styles.live}>Live</div>
        </div>
      </div>
      <FrameComponent people="/profile.svg" community="Profile" />
      <FrameComponent people="/sms.svg" community="Messages" />
      <FrameComponent people="/home-1.svg" community="Settings" />
      <div className={styles.iconContainer1}>
        <div className={styles.iconContainerItem} />
        <div className={styles.treeParent}>
          <img
            className={styles.treeIcon}
            loading="lazy"
            alt=""
            src="/tree.svg"
          />
          <div className={styles.waverx}>
            <span>Waver</span>
            <b className={styles.x}>X</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
