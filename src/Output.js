function Output() {
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
      <p>It takes the average human fourteen minutes to fall asleep.</p>
      <p>
        If you head to bed right now, you should try to wake up at one of the
        following times:
      </p>
      <ul>
        {cycles.map((cycle, index) => (
          <li key={index}>{cycle}</li>
        ))}
      </ul>

      <p>A good night's sleep consists of 5-6 complete sleep cycles.</p>
    </div>
  );
}

export default Output;
