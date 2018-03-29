import React from "react";
import dummyApi from "./dummyApi";

export default class Clock extends React.PureComponent {
  testValue = "aman";
  state = {
    externalData: null
  };
  componentDidMount() {
    setTimeout(() => {

      this.tick();
    }, 5000);
    const res = dummyApi().then(res => {
      if(!this.ignoreLastApiRequest) {
        this.setState({
          externalData: res 
        });
      }
    });
  }

  tick = () => {
    console.log("value is: ", this.props.no);
    console.log("test values  is : ", this.testValue);
  };

  componentWillUnmount() {
    this.testValue = "malkeet";
    console.log("ignore last api request: true");
    this.ignoreLastApiRequest = true;
  }

  render() {
    return (
      <div className="alert alert-success">
        {!this.state.externalData && <h1>Loading... </h1>}
        {this.state.externalData}
      </div>
    );
  }
}
