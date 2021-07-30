import React from 'react';
import { WrapTimer } from '../styles/GlobalStyle';
import { secondsToTime } from '../utils/secondsToTime';

interface Props {
  mainTime: number;
}
export function Timer(props: Props): JSX.Element {
  return <WrapTimer>{secondsToTime(props.mainTime)}</WrapTimer>;
}
