import React, { useState } from 'react';
import { useInterval } from '../hooks/useInterval';

interface Props {
  defaultPomodoroTime: number;
}

export function PomodoroTimer(props: Props): JSX.Element {
  const [mainTime, setMainTime] = useState<number>(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <div>Hello World {mainTime}!!!</div>;
}
