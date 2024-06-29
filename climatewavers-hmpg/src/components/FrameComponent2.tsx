import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
  frame30111?: string;
  zenLife?: string;
  isHosting?: string;
  guidedMeditationToStartTh?: string;
  frame30108?: string;
  frame30113?: string;
  frame30114?: string;
  prop?: string;

  /** Action props */
  onFrameContainerClick?: () => void;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
  frame30111,
  zenLife,
  isHosting,
  guidedMeditationToStartTh,
  frame30108,
  frame30113,
  frame30114,
  prop,
  onFrameContainerClick,
}) => {
  const onLiveCardContainersClick = useCallback(() => {
    // Please sync "Live seccession preview low" to the project
  }, []);

  return (
    <div
      className={[styles.liveCardContainers, className].join(" ")}
      onClick={onFrameContainerClick}
    >
      <img className={styles.nestedCardContainers} alt="" src={frame30111} />
      <div className={styles.cardDetailsContainers}>
        <div className={styles.cardContentContainers}>
          <div className={styles.cardHeaderContainers}>
            <b className={styles.zenlife}>{zenLife}</b>
            <div className={styles.isHosting}>{isHosting}</div>
          </div>
          <b className={styles.guidedMeditationTo}>
            {guidedMeditationToStartTh}
          </b>
        </div>
        <div className={styles.cardFooterContainers}>
          <div className={styles.nestedFooterContainers}>
            <img
              className={styles.emptyFooterContainers}
              alt=""
              src={frame30108}
            />
            <img
              className={styles.emptyFooterContainers1}
              alt=""
              src={frame30113}
            />
            <img
              className={styles.emptyFooterContainers2}
              loading="lazy"
              alt=""
              src={frame30114}
            />
          </div>
          <b className={styles.emptyLabels}>{prop}</b>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
