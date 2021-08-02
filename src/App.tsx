import React, { useCallback, useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
// eslint-disable-next-line
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { PomodoroTimer } from './components/pomodoroTimer';
import { useInterval } from './hooks/useInterval';
import { GlobalStyle, WrapApp } from './styles/GlobalStyle';
import { activeTheme, restTheme } from './styles/theme';
import { secondsToTime } from './utils/secondsToTime';

function App(): JSX.Element {
  const [pomodoroTime, setPomodoroTime] = useState<number>(1500);
  const [myMin, setMyMin] = useState<string>('25');
  const [mySec, setMySec] = useState<string>('00');

  const [timeCounting, setTimeCounting] = useState<boolean>(false);
  const [isWorking, setIsWorking] = useState<boolean>(false);
  const [isResting, setIsResting] = useState<boolean>(false);
  const [theme, setTheme] = useState<DefaultTheme>(restTheme);
  const [cycles, setCycles] = useState<boolean[]>(new Array(4 - 1).fill(true));

  const [completedCycle, setCompletedCycle] = useState<number>(0);
  const [fullWorkingTime, setFullWorkingTime] = useState<number>(0);
  const [numberOfPomodoro, setNumberOfPomodoro] = useState<number>(0);
  const [status, setStatus] = useState<string>('Aguardando...');

  const [loadBar, setLoadBar] = useState<number>(0);
  const [countLoadBar, setCountLoadBar] = useState<number>(1);

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

  //--------------------------------------
  useInterval(
    () => {
      setPomodoroTime(pomodoroTime - 1);

      if (isWorking) setFullWorkingTime(fullWorkingTime + 1);

      if (isWorking) {
        setCountLoadBar(countLoadBar + 1);

        const iterateCycle = Math.round(handleSave() / 100);
        console.log('countBar: ', countLoadBar, 'iterate: ', iterateCycle);
        if (countLoadBar === iterateCycle) {
          loadBar < 100 ? setLoadBar(loadBar + 1) : setLoadBar(0);
          setCountLoadBar(1);
        }
      }
    },
    timeCounting ? 1000 : null,
  );
  //--------------------------------------

  // inicia contagem
  const toggleTheme = () => {
    setTimeCounting(!timeCounting);
    new Audio('/notification.mp3').play().catch(() => '');
  };

  // ...........
  const handleSave = () => {
    if (myMin === '' || mySec === '') {
      alert('Digite um valor');
      return 240;
    }
    const minToNumber = Number.parseInt(myMin);
    const min = minToNumber * 60;

    const secToNumber = Number.parseInt(mySec);
    return min + secToNumber;
  };
  // ...........

  // inicia working
  const handleWork = useCallback(() => {
    setPomodoroTime(handleSave());

    setIsWorking(true);
    setIsResting(false);
    setTimeCounting(true);
    setTheme(activeTheme);
    setLoadBar(0);
    setStatus('Em atividade');
    new Audio('/bell-start.mp3').play().catch(() => '');
  }, [
    setIsWorking,
    setIsResting,
    setTimeCounting,
    setPomodoroTime,
    setTheme,
    handleSave,
  ]);

  // inicia resting
  const handleRest = useCallback(
    (long: boolean) => {
      setIsWorking(false);
      setIsResting(true);
      setTimeCounting(true);
      setTheme(restTheme);
      setStatus('Descansando');

      if (long) {
        setPomodoroTime((handleSave() * 60) / 100);
      } else {
        setPomodoroTime((handleSave() * 20) / 100);
      }
      new Audio('/bell-finish.mp3').play().catch(() => '');
    },
    [setIsWorking, setIsResting, setTimeCounting, setTheme, handleSave],
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <WrapApp>
        <h1>POMODORO APP</h1>
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
          status={status}
          loadBar={loadBar}
          //...
          myMin={myMin}
          setMyMin={setMyMin}
          mySec={mySec}
          setMySec={setMySec}
        />
        <footer>
          Desenvolvido com <FaHeart /> por Tony Silva
        </footer>
      </WrapApp>
    </ThemeProvider>
  );
}

export default App;
