import React from 'react';
import { WrapTimer } from '../styles/GlobalStyle';
import { secondsToMinutes } from '../utils/secondsToMinutes';

interface Props {
  mainTime: number;
}
export function Timer(props: Props): JSX.Element {
  return <WrapTimer>{secondsToMinutes(props.mainTime)}</WrapTimer>;
}
