import * as React from "react";

export interface IProps {}

export interface IState {}

class BackPage extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <section>
        <div>This is the back page</div>
      </section>
    );
  }
}

export default BackPage;
