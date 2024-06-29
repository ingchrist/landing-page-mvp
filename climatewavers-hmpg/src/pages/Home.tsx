import { FunctionComponent, useCallback } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent from "../components/FrameComponent";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const onLiveCardContainersClick = useCallback(() => {
    // Please sync "Live seccession preview low" to the project
  }, []);

  const onFrameButtonClick = useCallback(() => {
    // Please sync "Create Post" to the project
  }, []);

  return (
    <div className={styles.home}>
      <FrameComponent4 />
      <main className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <FrameComponent5 />
          <div className={styles.frameWrapper}>
            <button className={styles.postWrapper} onClick={onFrameButtonClick}>
              <div className={styles.post}>Post</div>
            </button>
          </div>
        </div>
        <section className={styles.frameContainer}>
          <div className={styles.feedOptionsParent}>
            <div className={styles.feedOptions}>
              <div className={styles.feedsWrapper}>
                <a className={styles.feeds}>Feeds</a>
              </div>
              <div className={styles.feedIconContainers}>
                <a className={styles.tornadowatch}>TornadoWatch</a>
              </div>
              <div className={styles.feedIconContainers1}>
                <a className={styles.nature}>Nature</a>
              </div>
              <div className={styles.feedIconContainers2}>
                <a className={styles.sunsetflow}>SunsetFlow</a>
              </div>
              <div className={styles.feedIconContainers3}>
                <a className={styles.explorers}>Explorers</a>
              </div>
              <div className={styles.feedIconContainers4}>
                <a className={styles.greenharbor}>GreenHarbor</a>
              </div>
              <div className={styles.feedIconContainers5}>
                <b className={styles.wildguardians}>WildGuardians</b>
              </div>
              <div className={styles.feedIconContainers6}>
                <a className={styles.culture}>Culture</a>
              </div>
              <div className={styles.feedIconContainers7}>
                <b className={styles.earthinsight}>EarthInsight</b>
              </div>
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.inputContainerWrapper}>
                <div className={styles.inputContainer}>
                  <div className={styles.inputContainerParent}>
                    <div
                      className={styles.inputContainer1}
                      onClick={onFrameButtonClick}
                    >
                      <div className={styles.frameParent1}>
                        <img
                          className={styles.frameChild}
                          loading="lazy"
                          alt=""
                          src="/frame-30139@2x.png"
                        />
                        <div className={styles.frameWrapper1}>
                          <div className={styles.whatsOnYourMindParent}>
                            <div className={styles.whatsOnYour}>
                              Whats on your mind?
                            </div>
                            <div className={styles.galleryParent}>
                              <img
                                className={styles.galleryIcon}
                                loading="lazy"
                                alt=""
                                src="/gallery.svg"
                              />
                              <img
                                className={styles.voiceSquareIcon}
                                loading="lazy"
                                alt=""
                                src="/voicesquare-1.svg"
                              />
                              <img
                                className={styles.musicIcon}
                                loading="lazy"
                                alt=""
                                src="/music.svg"
                              />
                              <img
                                className={styles.emojiNormalIcon}
                                loading="lazy"
                                alt=""
                                src="/emojinormal.svg"
                              />
                              <img
                                className={styles.locationIcon}
                                loading="lazy"
                                alt=""
                                src="/location.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.postSubmissionWrapper}>
                        <div className={styles.postSubmission}>
                          <div className={styles.post1}>Post</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.frameParent2}>
                      <img
                        className={styles.frameItem}
                        loading="lazy"
                        alt=""
                        src="/frame-30156@2x.png"
                      />
                      <div className={styles.frameWrapper2}>
                        <FrameComponent1
                          noah="Noah"
                          noahhweb3="@Noahhweb3"
                          hr="24hr"
                          more="/more.svg"
                          tornadoWatchAlertAPower="🌪️ TornadoWatch Alert 🌪️: A powerful storm system is approaching our region. Stay informed and take necessary precautions. Seek shelter if advised by local authorities. Safety first! #TornadoWatch #StaySafe"
                          frame30144="/frame-30144@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.emptyEventContainerParent}>
                    <img
                      className={styles.emptyEventContainer}
                      loading="lazy"
                      alt=""
                      src="/frame-30141-1@2x.png"
                    />
                    <div className={styles.eventContent}>
                      <FrameComponent1
                        noah="EcoEd"
                        noahhweb3="@EcoEd233wfe"
                        hr="2days"
                        more="/more.svg"
                        tornadoWatchAlertAPower="🌿 Join our EcoEd workshop! Learn practical tips for reducing your environmental footprint. From composting to energy conservation, we’ve got you covered. Let’s make a positive impact together! 🌎 #EcoEd #SustainableLiving"
                        frame30144="/frame-30144-1@2x.png"
                      />
                      <div className={styles.eventActions}>
                        <div className={styles.eventActionIconsContainer}>
                          <img
                            className={styles.messageIcon}
                            alt=""
                            src="/message.svg"
                          />
                          <div className={styles.emptyEventActions}>56</div>
                        </div>
                        <div className={styles.eventActionIconsContainer1}>
                          <img
                            className={styles.repeatIcon}
                            alt=""
                            src="/repeat.svg"
                          />
                          <div className={styles.div}>72</div>
                        </div>
                        <div className={styles.eventActionIconsContainer2}>
                          <img
                            className={styles.heartIcon}
                            alt=""
                            src="/heart.svg"
                          />
                          <div className={styles.div1}>120</div>
                        </div>
                        <div className={styles.eventActionIconsContainer3}>
                          <img
                            className={styles.chartIcon}
                            alt=""
                            src="/chart.svg"
                          />
                          <div className={styles.div2}>300</div>
                        </div>
                        <div className={styles.shareEventAction}>
                          <img
                            className={styles.shareIcon}
                            alt=""
                            src="/share.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.frameParent4}>
                  <div className={styles.liveOnWaverWrapper}>
                    <b className={styles.liveOnWaver}>Live On Waver</b>
                  </div>
                  <div className={styles.liveCardContainersParent}>
                    <FrameComponent2
                      frame30111="/nested-card-containers@2x.png"
                      zenLife="ZenLife"
                      isHosting="is Hosting"
                      guidedMeditationToStartTh="Guided meditation to start the day mindfully"
                      frame30108="/empty-footer-containers@2x.png"
                      frame30113="/empty-footer-containers@2x.png"
                      frame30114="/frame-30114@2x.png"
                      prop="+56"
                      onFrameContainerClick={onLiveCardContainersClick}
                    />
                    <FrameComponent2
                      frame30111="/frame-30111-1@2x.png"
                      zenLife="BirdLover123"
                      isHosting="is Listening"
                      guidedMeditationToStartTh="Spotting local birds and learning about their habitats"
                      frame30108="/frame-30108-1@2x.png"
                      frame30113="/frame-30113-1@2x.png"
                      frame30114="/frame-30114-1@2x.png"
                      prop="+30"
                    />
                    <FrameComponent2
                      frame30111="/frame-30111-2@2x.png"
                      zenLife="NatureExplorer"
                      isHosting="is Hosting"
                      guidedMeditationToStartTh="Virtual walk through a serene forest"
                      frame30108="/frame-30108-2@2x.png"
                      frame30113="/frame-30113-2@2x.png"
                      frame30114="/frame-30114-2@2x.png"
                      prop="+133"
                    />
                  </div>
                </div>
                <div className={styles.trendingHeaderParent}>
                  <div className={styles.trendingHeader}>
                    <b className={styles.trending}>{`#Trending `}</b>
                  </div>
                  <div className={styles.trendingTopics}>
                    <div className={styles.topicList}>
                      <div className={styles.topicItems}>
                        <div className={styles.natureArt}>Nature Art</div>
                        <b className={styles.artinbloom}>#ArtInBloom</b>
                        <div className={styles.posts}>573 Posts</div>
                      </div>
                      <img
                        className={styles.moreIcon}
                        loading="lazy"
                        alt=""
                        src="/more-2.svg"
                      />
                    </div>
                    <FrameComponent3
                      mindfulHiking="Mindful Hiking"
                      trailBliss="#TrailBliss"
                      posts="573 Posts"
                      more="/more.svg"
                    />
                    <FrameComponent3
                      mindfulHiking="Stargazing Nights"
                      trailBliss="#CelestialWonders"
                      posts="287 Posts"
                      more="/more.svg"
                    />
                    <FrameComponent3
                      mindfulHiking="Wildlife"
                      trailBliss="#Saving The Penguins"
                      posts="432 Posts"
                      more="/more.svg"
                    />
                    <FrameComponent3
                      mindfulHiking="Nature Photography"
                      trailBliss="#CapturingBeauty"
                      posts="300 Posts"
                      more="/more.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameComponent />
        </section>
      </main>
    </div>
  );
};

export default Home;
