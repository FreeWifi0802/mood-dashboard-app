import { useState } from 'react';
import MoodButton from './components/MoodButton';
import MoodStats from './components/MoodStats';

const moods = [
  { emoji: '😊', mood: 'happy' },
  { emoji: '😴', mood: 'tired' },
  { emoji: '🤩', mood: 'excited' },
  { emoji: '😐', mood: 'meh' },
];

function App() {
  // 1️⃣  State object holding a vote‑count for each mood
  const [counts, setCounts] = useState({
    happy: 0,
    tired: 0,
    excited: 0,
    meh: 0,
  });

  // 2️⃣  Update state immutably
  function handleVote(mood) {
    setCounts(prev => ({ ...prev, [mood]: prev[mood] + 1 }));
  }

  function resetCounts(){
    setCounts(prev => Object.fromEntries(Object.keys(prev).map(key => [key, 0])));
  }

  return (
    <div className="dashboard">
      <h1>Emoji Mood Dashboard</h1>

      {/* 3️⃣  Render one button per mood */}
      <div className="buttons">
        {moods.map(({ emoji, mood }) => (
          <MoodButton
            key={mood}
            emoji={emoji}
            mood={mood}
            onVote={handleVote}
          />
        ))}

        <button onClick = {resetCounts}>Reset</button>
      </div>

      {/* 4️⃣  Pass the **real variable** `counts` to MoodStats */}
      <MoodStats counts={counts} />
    </div>
  );
}
export default App