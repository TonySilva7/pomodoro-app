import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { Button } from './button';
import { Timer } from './Timer';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState<number>(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <div className="pomodoro">
      <h2>Você está trabalhando...</h2>
      <Timer mainTime={mainTime} />
      <Button text="Teste" onClick={() => alert('oi')} />
    </div>
  );
}
