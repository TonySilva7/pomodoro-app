import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';
import { WrapControls, WrapPomodoro } from '../styles/GlobalStyle';
import { Button } from './button';
import { Timer } from './Timer';

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
  toggleTheme: () => void;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState<number>(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <WrapPomodoro>
      <h2>Você está: Em atividade!</h2>
      <Timer mainTime={mainTime} />

      <WrapControls>
        <Button text="Teste1" onClick={props.toggleTheme} />
        <Button text="Teste2" onClick={() => alert('oi')} />
        <Button text="Teste3" onClick={() => alert('oi')} />
      </WrapControls>

      <section>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum.</p>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem, ipsum dolor.</p>
      </section>
    </WrapPomodoro>
  );
}
