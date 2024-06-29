import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
  people?: string;
  community?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  people,
  community,
}) => {
  return (
    <div className={[styles.iconContainer, className].join(" ")}>
      <div className={styles.iconContainerChild} />
      <div className={styles.innerIconContainer}>
        <img className={styles.peopleIcon} loading="lazy" alt="" src={people} />
        <div className={styles.community}>{community}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
