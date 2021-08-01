import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.colors.main};
    transition: background-color 300ms ease;
    line-height: 1.5;
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export const WrapPomodoro = styled.div<{ loadBar: number; isWorking: boolean }>`
  background: #f5f5f5;
  margin: 20px 20px;
  padding: 20px;
  border-radius: 0 0 10px 10px;
  width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    text-align: center;
    color: #444;
    strong {
      color: ${(props) => props.theme.colors.secondary};
    }
  }

  & > span {
    display: block;
    width: ${(props) => (props.isWorking ? 100 : 0)}%;
    transition: all 700ms cubic-bezier(0.46, 0.85, 0.62, 1.15);

    background: #fff;
    height: 15px;
    border-radius: 10px;
    box-shadow: -2px 4px 3px rgba(0, 0, 0, 0.1) inset;
    margin-bottom: 2rem;

    & > span {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      font-size: 12px;
      color: #f5f5f5;
      width: ${(props) => props.loadBar}%;
      height: 15px;
      background: ${(props) => (props.isWorking ? '#ef5d50' : 'Transparent')};
      border-radius: 10px;
      padding: 0 5px;
      transition: all 300px ease;
    }
    em {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      background-color: transparent;
      width: ${(props) => props.loadBar}%;
      font-size: 0.8rem;
      color: ${(props) => (props.isWorking ? '#ef5d50' : 'Transparent')};
    }
  }

  section {
    margin: 20px 0;

    p {
      strong {
        /* color: #ff8154; */
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 367px;
  }
`;

export const WrapTimer = styled.div`
  font-size: 6rem;
  text-align: center;
  font-weight: bold;
  color: #444;
`;

export const WrapControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${(props) => props.theme.colors.main};
    border: none;
    cursor: pointer;
    padding: 10px 14px;
    color: #000;
    transition: background-color 300ms ease;
    margin: 20px auto;
    border-radius: 5px;

    svg {
      margin-right: 10px;
      fill: snow;
    }

    h3 {
      color: #444;
    }
  }
`;

export const WrapApp = styled.article`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  margin-top: 2rem;
  overflow: hidden;

  & > h1 {
    text-align: center;
    box-sizing: border-box;
    color: #444;
    background: #f2f2f2;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 10px;
    width: 100%;
    border-radius: 10px 10px 0 0;
    width: 500px;

    @media screen and (max-width: 600px) {
      width: 367px;
    }
  }

  footer {
    color: #444;
    svg {
      fill: #ef5d50;
    }
  }
`;
