import React from 'react';
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
}

export function PomodoroTimer(props: Props): JSX.Element {
  return (
    <WrapPomodoro>
      <h2>Você está: Em atividade!</h2>
      <Timer mainTime={props.pomodoroTime} />

      <WrapControls>
        <Button text="Work" onClick={props.handleWork} />
        <Button text="Rest" onClick={() => props.handleRest(false)} />
        {props.isWorking || props.isResting ? (
          <Button
            text={props.timeCounting ? 'Pause' : 'Play'}
            onClick={props.toggleTheme}
          />
        ) : (
          ''
        )}
      </WrapControls>

      <section>
        <p>Ciclos concluídos: {props.completedCycles}</p>
        <p>Horas trabalhadas: secondsToTime(fullWorkingTime)</p>
        <p>Pomodoros concluídos: {props.numberOfPomodoro}</p>
      </section>
    </WrapPomodoro>
  );
}
