import { Component } from "react";
import Output from "./Output.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cycles: [
        "11:44 PM",
        "1:14 AM",
        "2:44 AM",
        "4:14 AM",
        "5:44 AM",
        "7:14 AM",
      ],
      showOutput: false,
    };
  }

  calcCycles() {
    // get current time
    let now = Date.now(); // in milliseconds
    let minute = 60 * 1000; // milliseconds
    let cycle = now;
    const cycles = new Array(this.state.cycles.length);

    // allow 14 minutes to fall sleep
    cycle += 14 * minute;

    // calculate 6 sleep cycles (each 90 minutes)
    for (let i = 0; i < 6; i++) {
      cycle += 90 * minute;

      // update the sleep cycles
      cycles[i] = new Date(cycle).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // print cycles for sanity check
    console.log(cycles);

    // update state
    this.setState({ cycles: cycles, showOutput: true });
  }

  render() {
    return (
      <div className="App">
        <p>If you go to bed NOW, you should wake up at...</p>
        <button onClick={this.calcCycles.bind(this)}>zzz</button>
        <Output cycles={this.state.cycles} showOutput={this.state.showOutput} />
      </div>
    );
  }
}

export default App;
