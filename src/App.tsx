import React from 'react';
import { PomodoroTimer } from './components/pomodoroTimer';

function App(): JSX.Element {
  return (
    <div>
      <PomodoroTimer defaultPomodoroTime={1500} />
    </div>
  );
}

export default App;
