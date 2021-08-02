import React from 'react';
import { FaRegSun } from 'react-icons/fa';
import { WrapTimer } from '../styles/GlobalStyle';
import { secondsToMinutes } from '../utils/secondsToMinutes';

interface Props {
  mainTime: number;
  myMin: string;
  setMyMin: (e: string) => void;
  mySec: string;
  setMySec: (e: string) => void;
  isDisplay: boolean;
  setIsDisplay: (display: boolean) => void;
}

export function Timer(props: Props): JSX.Element {
  function handleDisplay() {
    props.setIsDisplay(!props.isDisplay);
  }

  return (
    <WrapTimer>
      <div>
        <h1>{secondsToMinutes(props.mainTime)}</h1>
        <button onClick={handleDisplay}>
          <FaRegSun size={23} />
        </button>
      </div>

      {props.isDisplay && (
        <div>
          <select
            name="min"
            id="min"
            onChange={(e) => props.setMyMin(e.target.value)}
            value={props.myMin}
          >
            <option value="05">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
          </select>

          <h3>:</h3>
          <select
            name="sec"
            id="sec"
            onChange={(e) => props.setMySec(e.target.value)}
            value={props.mySec}
          >
            <option value="00">00</option>
            <option value="05">05</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
          </select>
        </div>
      )}
    </WrapTimer>
  );
}
