import React from "react";
import { render } from "react-dom";
import Clock from "./Clock";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.PureComponent {
  state = {
    displayClock: true
  };

  clickHandler = () => {
    this.setState(prevState => ({
      displayClock: !this.state.displayClock
    }));
  };

  render() {
    return (
      <React.Fragment>
        {this.state.displayClock && <Clock no={1} />}
        <button className="btn btn-primary full" onClick={this.clickHandler}/>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
