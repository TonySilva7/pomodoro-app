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
}

export function PomodoroTimer(props: Props): JSX.Element {
  return (
    <WrapPomodoro>
      <h2>
        Você está: <strong>{props.status}</strong>
      </h2>
      <Timer mainTime={props.pomodoroTime} />

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
