import './Output.css';

function Output(props) {
  return !props.showOutput ? (
    <div></div>
  ) : (
    <div>
      <p>It takes the average human fourteen minutes to fall asleep.</p>
      <p>
        If you head to bed right now, you should try to wake up at one of the
        following times:
      </p>
      <ul>
        {props.cycles.map((cycle, index) => (
          <li key={index}>{cycle}</li>
        ))}
      </ul>

      <p>A good night's sleep consists of 5-6 complete sleep cycles.</p>
    </div>
  );
}

export default Output;
