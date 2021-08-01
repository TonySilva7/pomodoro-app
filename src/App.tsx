import React, { useCallback, useEffect, useState } from 'react';
// eslint-disable-next-line
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { PomodoroTimer } from './components/pomodoroTimer';
import { useInterval } from './hooks/useInterval';
import { GlobalStyle } from './styles/GlobalStyle';
import { activeTheme, restTheme } from './styles/theme';
import { secondsToTime } from './utils/secondsToTime';

function App(): JSX.Element {
  const [pomodoroTime, setPomodoroTime] = useState<number>(1500);
  const [timeCounting, setTimeCounting] = useState<boolean>(false);
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [isResting, setIsResting] = useState<boolean>(false);
  const [theme, setTheme] = useState<DefaultTheme>(restTheme);
  const [cycles, setCycles] = useState<boolean[]>(new Array(4 - 1).fill(true));

  const [completedCycle, setCompletedCycle] = useState<number>(0);
  const [fullWorkingTime, setFullWorkingTime] = useState<number>(0);
  const [numberOfPomodoro, setNumberOfPomodoro] = useState<number>(0);

  useEffect(() => {
    if (pomodoroTime > 0) return;

    if (isWorking && cycles.length > 0) {
      cycles.pop();
      handleRest(false);
    } else if (isWorking && cycles.length <= 0) {
      handleRest(true);
      setCycles(new Array(4 - 1).fill(true));
      setCompletedCycle(completedCycle + 1);
    }

    if (isWorking) setNumberOfPomodoro(numberOfPomodoro + 1);
    if (isResting) handleWork();
  }, [isWorking, pomodoroTime, setCycles]);

  //-------------------
  useInterval(
    () => {
      setPomodoroTime(pomodoroTime - 1);
      if (isWorking) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );
  //------------------

  const toggleTheme = () => {
    setTimeCounting(!timeCounting);
    new Audio('/notification.mp3').play().catch(() => '');
  };

  const handleWork = useCallback(() => {
    setIsWorking(true);
    setIsResting(false);
    setTimeCounting(true);
    setPomodoroTime(10);
    setTheme(activeTheme);
    new Audio('/bell-start.mp3').play().catch(() => '');
  }, [setIsWorking, setIsResting, setTimeCounting, setPomodoroTime, setTheme]);

  const handleRest = useCallback(
    (long: boolean) => {
      setIsWorking(false);
      setIsResting(true);
      setTimeCounting(true);
      setTheme(restTheme);

      if (long) {
        setPomodoroTime(900);
      } else {
        setPomodoroTime(300);
      }
      new Audio('/bell-finish.mp3').play().catch(() => '');
    },
    [setIsWorking, setIsResting, setTimeCounting, setTheme],
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PomodoroTimer
        pomodoroTime={pomodoroTime}
        timeCounting={timeCounting}
        toggleTheme={toggleTheme}
        handleWork={handleWork}
        handleRest={handleRest}
        isWorking={isWorking}
        isResting={isResting}
        completedCycles={completedCycle}
        numberOfPomodoro={numberOfPomodoro}
        hoursWorking={secondsToTime(fullWorkingTime)}
      />
    </ThemeProvider>
  );
}

export default App;
