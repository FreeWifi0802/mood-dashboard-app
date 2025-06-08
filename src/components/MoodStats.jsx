function MoodStats({ counts=0 }) {
  /* TODO #5
     - Calculate total votes
     - Determine percentages
     - Render a simple table or list
  */
 let totalVotes = 0;
  totalVotes = Object.entries(counts).reduce((sum, [, counts]) => sum + counts, 0);

  if (totalVotes === 0) {
    return(
    <section>
      <h2>
        No votes yet. Vote for a mood!
      </h2>
    </section>
    );
  }
  return (
    <section className="stats">
      <h2>Total votes: {totalVotes}</h2>
      <ul>
        <li>😊 Happy: {(counts['happy'] * 100 / totalVotes).toFixed(2)}%</li>
        <li>😴 Tired: {(counts['tired'] * 100 / totalVotes).toFixed(2)}%</li>
        <li>🤩 Excited: {(counts['excited'] * 100 / totalVotes).toFixed(2)}%</li>
        <li>😐 Meh: {(counts['meh'] * 100 / totalVotes).toFixed(2)}%</li>
      </ul>
    </section>
  );
}

export default MoodStats