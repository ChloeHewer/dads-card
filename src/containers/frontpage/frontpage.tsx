import * as React from "react";
import styles from "./frontpage.module.scss";

export interface IProps { }

export interface IState {
  isCardOpen: boolean;
}

class FrontPage extends React.Component<IProps, IState> {
  public state = { isCardOpen: false };
  public render() {
    const flip = this.state.isCardOpen ? styles.cardRotated : null;
    return (
      <section className={styles.centerCard}>
        <div className={styles.innerCard}>
          <p>To Father,</p>
          <p>HAPPY BIRTHDAY OLD MAN</p>
          <p>Hope your day is amazing - which it will be because we're gonna be there</p>
        </div>
        <section className={styles.frontPage}>
          <div
            onClick={this.handleCardClick}
            className={`${styles.card} ${flip}`}
          >
            <div className={styles.flipCardFront}>
              <div className={styles.parent}>
                <span className={styles.writting}>
                  <section className={styles.beProudText}>
                    <p className={styles.happyBirthday}>HAPPY BIRTHDAY FATHER</p>
                    <p>
                      You must be <span className={styles.so}>so</span>
                      <span className={styles.proud}> proud</span> at how
                      <span className={styles.awesome}> awesome</span> I turned
                        out!
                  </p>
                  </section>
                </span>
                <div className={styles.slanted}>
                  <div className={styles.familyPic} />
                  <div />
                  <div />
                </div>
              </div>
            </div>
            <div className={styles.flipCardBack} />
          </div>
        </section>
      </section>
    );
  }

  private handleCardClick = (): void => {
    this.setState({ isCardOpen: !this.state.isCardOpen });
  };
}

export default FrontPage;
