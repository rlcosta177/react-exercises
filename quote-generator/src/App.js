import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    // bypassing browser cache, so that it shows a new quote on refresh
    const cashtemp = `?timestamp=${new Date().getTime()}`;

    // using axios to handle the get request
    axios
      .get(`https://api.adviceslip.com/advice${cashtemp}`)
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // render is used to display something on the page
  render() {
    // destructing syntax to reduce memory allocation
    // const { advice } = this.state;
    //             and
    // const advice = this.state.advice;
    // are the same, but the former is more memory effecient and less repetitive
    const { advice } = this.state;

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
        </div>
      </div>
    );
  }
}

export default App;
