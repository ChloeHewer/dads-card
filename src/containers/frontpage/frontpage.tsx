import * as React from "react";
import styles from "./frontpage.module.scss";

export interface IProps {}

export interface IState {}

class FrontPage extends React.Component<IProps, IState> {
  // state = { :  }
  public render() {
    return (
      <section>
        <div>This is the front page</div>
      </section>
    );
  }
}

export default FrontPage;
