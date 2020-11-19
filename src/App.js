import Output from "./Output.js";

function App() {
  const cycles = [
    "11:44 PM",
    "1:14 AM",
    "2:44 AM",
    "4:14 AM",
    "5:44 AM",
    "7:14 AM",
  ];

  return (
    <div>
      <p>If you go to bed NOW, you should wake up at...</p>
      <button>zzz</button>
      <Output cycles={cycles} />
    </div>
  );
}

export default App;
