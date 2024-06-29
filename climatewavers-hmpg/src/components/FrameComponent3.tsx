import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
  mindfulHiking?: string;
  trailBliss?: string;
  posts?: string;
  more?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  mindfulHiking,
  trailBliss,
  posts,
  more,
}) => {
  return (
    <div className={[styles.topicList, className].join(" ")}>
      <div className={styles.mindfulHikingParent}>
        <div className={styles.mindfulHiking}>{mindfulHiking}</div>
        <b className={styles.trailbliss}>{trailBliss}</b>
        <div className={styles.posts}>{posts}</div>
      </div>
      <img className={styles.moreIcon} alt="" src={more} />
    </div>
  );
};

export default FrameComponent3;
