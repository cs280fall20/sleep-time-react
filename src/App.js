import { Component } from "react";
import Output from "./Output.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.cycles = [
      "11:44 PM",
      "1:14 AM",
      "2:44 AM",
      "4:14 AM",
      "5:44 AM",
      "7:14 AM",
    ];
  }

  calcCycles() {
    // get current time
    let now = Date.now(); // in milliseconds
    let minute = 60 * 1000; // milliseconds
    let cycle = now;

    // allow 14 minutes to fall sleep
    cycle += 14 * minute;

    // calculate 6 sleep cycles (each 90 minutes)
    for (let i = 0; i < 6; i++) {
      cycle += 90 * minute;

      // update the sleep cycles
      this.cycles[i] = new Date(cycle).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    }

    // print cycles for sanity check
    console.log(this.cycles);
  }

  render() {
    return (
      <div>
        <p>If you go to bed NOW, you should wake up at...</p>
        <button onClick={this.calcCycles.bind(this)}>zzz</button>
        <Output cycles={this.cycles} />
      </div>
    );
  }
}

export default App;
