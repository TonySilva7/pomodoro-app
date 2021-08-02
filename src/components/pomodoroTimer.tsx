import React from 'react';
import { FaCoffee, FaPause, FaPlay, FaRocket } from 'react-icons/fa';
import { WrapControls, WrapPomodoro } from '../styles/GlobalStyle';
import { Button } from './button';
import { Timer } from './Timer';

interface Props {
  pomodoroTime: number;
  timeCounting: boolean;
  isWorking: boolean;
  isResting: boolean;
  toggleTheme: () => void;
  handleWork: () => void;
  handleRest: (long: boolean) => void;

  numberOfPomodoro: number;
  completedCycles: number;
  hoursWorking: string;
  status: string;
  loadBar: number;

  myMin: string;
  setMyMin: (e: string) => void;
  mySec: string;
  setMySec: (e: string) => void;

  isDisplay: boolean;
  setIsDisplay: (display: boolean) => void;
}

export function PomodoroTimer(props: Props): JSX.Element {
  return (
    <WrapPomodoro loadBar={props.loadBar} isWorking={props.isWorking}>
      <h2>
        Você está: <strong>{props.status}</strong>
      </h2>
      <Timer
        mainTime={props.pomodoroTime}
        myMin={props.myMin}
        setMyMin={props.setMyMin}
        mySec={props.mySec}
        setMySec={props.setMySec}
        isDisplay={props.isDisplay}
        setIsDisplay={props.setIsDisplay}
      />

      <span>
        <span></span>
        <em>{props.loadBar}%</em>
      </span>

      <WrapControls>
        <Button
          text={props.isWorking ? 'Restart' : 'Work'}
          onClick={props.handleWork}
        >
          <FaRocket size={17} />
        </Button>

        <Button
          text={props.isResting ? 'Restart' : 'Rest'}
          onClick={() => props.handleRest(false)}
        >
          <FaCoffee size={17} />
        </Button>

        {props.isWorking || props.isResting ? (
          <Button
            text={props.timeCounting ? 'Pause' : 'Play'}
            onClick={props.toggleTheme}
          >
            {props.timeCounting ? <FaPause size={17} /> : <FaPlay size={17} />}
          </Button>
        ) : (
          ''
        )}
      </WrapControls>

      <section>
        <p>
          Ciclos concluídos: <strong>{props.completedCycles}</strong>
        </p>
        <p>
          Horas trabalhadas: <strong>{props.hoursWorking}</strong>{' '}
        </p>
        <p>
          Pomodoros concluídos: <strong>{props.numberOfPomodoro}</strong>
        </p>
      </section>
    </WrapPomodoro>
  );
}
