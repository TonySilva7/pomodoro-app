import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { PomodoroTimer } from './components/pomodoroTimer';
import { useInterval } from './hooks/useInterval';
import { GlobalStyle } from './styles/GlobalStyle';
import { activeTheme, restTheme } from './styles/theme';

function App(): JSX.Element {
  const [timeCounting, setTimeCounting] = useState<boolean>(false);
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [isResting, setIsResting] = useState<boolean>(false);
  const [pomodoroTime, setPomodoroTime] = useState<number>(1500);
  const [theme, setTheme] = useState(restTheme);

  //-------------------
  useInterval(
    () => {
      setPomodoroTime(pomodoroTime - 1);
    },
    timeCounting ? 1000 : null,
  );
  //------------------

  const toggleTheme = () => {
    setTimeCounting(!timeCounting);
  };

  const handleWork = () => {
    setIsWorking(true);
    setIsResting(false);
    setTimeCounting(true);
    setPomodoroTime(1500);
    setTheme(activeTheme);
  };

  const handleRest = (long: boolean) => {
    setIsWorking(false);
    setIsResting(true);
    setTimeCounting(true);
    setTheme(restTheme);

    if (long) {
      setPomodoroTime(900);
    } else {
      setPomodoroTime(300);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PomodoroTimer
        pomodoroTime={pomodoroTime}
        cycles={4}
        timeCounting={timeCounting}
        toggleTheme={toggleTheme}
        handleWork={handleWork}
        handleRest={handleRest}
        isWorking={isWorking}
        isResting={isResting}
      />
    </ThemeProvider>
  );
}

export default App;
