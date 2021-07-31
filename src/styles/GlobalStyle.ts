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

export const WrapPomodoro = styled.div`
  background: #f5f5f5;
  margin: 50px 20px;
  padding: 20px;
  border-radius: 4px;
  width: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 24px;
    text-align: center;
  }

  section {
    margin: 20px 0;
  }
`;

export const WrapTimer = styled.div`
  font-size: 6rem;
  text-align: center;
`;

export const WrapControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  button {
    background-color: ${(props) => props.theme.colors.main};
    border: none;
    cursor: pointer;
    padding: 10px 25px;
    color: #000;
    transition: background-color 300ms ease;
    margin: 20px auto;
    border-radius: 5px;
  }
`;
