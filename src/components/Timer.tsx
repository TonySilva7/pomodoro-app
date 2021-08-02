import React from 'react';
import { WrapTimer } from '../styles/GlobalStyle';
import { secondsToMinutes } from '../utils/secondsToMinutes';

interface Props {
  mainTime: number;
  myMin: string;
  setMyMin: (e: string) => void;
  mySec: string;
  setMySec: (e: string) => void;
}

export function Timer(props: Props): JSX.Element {
  return (
    <WrapTimer>
      <h1>{secondsToMinutes(props.mainTime)}</h1>
      <div>
        <input
          type="text"
          onChange={(e) => props.setMyMin(e.target.value)}
          value={props.myMin}
          placeholder="min"
        />
        <h3>:</h3>
        <input
          type="text"
          onChange={(e) => props.setMySec(e.target.value)}
          value={props.mySec}
          placeholder="seg"
        />
      </div>
    </WrapTimer>
  );
}
