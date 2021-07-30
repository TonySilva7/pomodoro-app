import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div>
      <PomodoroTimer defaultPomodoroTime={1000} />
    </div>
  );
}

export default App;
