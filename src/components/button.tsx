import React from 'react';
interface Props {
  text: string;
  onClick?: () => void;
  children: JSX.Element;
}
export function Button(props: Props): JSX.Element {
  return (
    <button onClick={props.onClick}>
      {props.children}
      <h3>{props.text}</h3>
    </button>
  );
}
