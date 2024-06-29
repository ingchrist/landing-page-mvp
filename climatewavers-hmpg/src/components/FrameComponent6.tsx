import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.wildlifeContentParent, className].join(" ")}>
      <div className={styles.wildlifeContent}>
        <img
          className={styles.spacingElementIcon}
          alt=""
          src="/frame-30141-2@2x.png"
        />
        <div className={styles.wildlifeContent1}>
          <div className={styles.wildlifeInfo}>
            <div className={styles.wildlifeHeader}>
              <b className={styles.wildlifeguardians}>WildlifeGuardians</b>
              <div className={styles.wlguard123}>@Wlguard123</div>
              <div className={styles.wildlifeTitle}>-</div>
              <div className={styles.hrs}>12hrs</div>
            </div>
            <img className={styles.moreIcon} alt="" src="/more.svg" />
          </div>
          <div className={styles.areYouA}>Are you a Wild Life lover?</div>
        </div>
      </div>
      <div className={styles.wildlifeOptions}>
        <div className={styles.yesNoButtons}>
          <div className={styles.yesNoButtonList}>
            <div className={styles.yesNoLabels}>
              <b className={styles.yes}>Yes</b>
            </div>
            <div className={styles.yesNoLabels1}>
              <b className={styles.no}>No</b>
            </div>
          </div>
          <div className={styles.wildlifeActionButtons}>
            <div className={styles.wildlifeActionButtonList}>
              <img className={styles.messageIcon} alt="" src="/message.svg" />
              <div className={styles.emptyStates}>56</div>
            </div>
            <div className={styles.wildlifeActionButtonList1}>
              <img className={styles.repeatIcon} alt="" src="/repeat.svg" />
              <div className={styles.div}>72</div>
            </div>
            <div className={styles.wildlifeActionButtonList2}>
              <img className={styles.heartIcon} alt="" src="/heart.svg" />
              <div className={styles.div1}>120</div>
            </div>
            <div className={styles.wildlifeActionButtonList3}>
              <img className={styles.chartIcon} alt="" src="/chart.svg" />
              <div className={styles.div2}>300</div>
            </div>
            <img className={styles.shareIcon} alt="" src="/share.svg" />
          </div>
        </div>
      </div>
      <div className={styles.spacingElementParent}>
        <img
          className={styles.spacingElementIcon1}
          alt=""
          src="/frame-30141-3@2x.png"
        />
        <div className={styles.cultRootsContent}>
          <div className={styles.cultRootsInfo}>
            <div className={styles.cultRootsDetails}>
              <div className={styles.cultRootsHeader}>
                <div className={styles.cultRootsTitle}>
                  <b className={styles.cultroots}>CultRoots</b>
                  <div className={styles.rootscozq}>@rootscozq</div>
                  <div className={styles.cultRootsLabel}>-</div>
                  <div className={styles.days}>2days</div>
                </div>
                <img className={styles.moreIcon1} alt="" src="/more.svg" />
              </div>
              <div className={styles.stepBackIn}>
                🌲 Step back in time! Join our CultRoots forest walk. Discover
                ancient trees, hidden trails, and folklore. Let nature whisper
                its stories to you. 🌿👣 #CultRoots #NatureWalk
              </div>
            </div>
          </div>
          <div className={styles.shareIconsParent}>
            <div className={styles.shareIcons}>
              <img className={styles.messageIcon1} alt="" src="/message.svg" />
              <div className={styles.emptyStates1}>56</div>
            </div>
            <div className={styles.shareIcons1}>
              <img className={styles.repeatIcon1} alt="" src="/repeat.svg" />
              <div className={styles.div3}>72</div>
            </div>
            <div className={styles.shareIcons2}>
              <img className={styles.heartIcon1} alt="" src="/heart.svg" />
              <div className={styles.div4}>120</div>
            </div>
            <div className={styles.shareIcons3}>
              <img className={styles.chartIcon1} alt="" src="/chart.svg" />
              <div className={styles.div5}>300</div>
            </div>
            <div className={styles.shareAction}>
              <img className={styles.shareIcon1} alt="" src="/share.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
