import React, { useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { PomodoroTimer } from './components/pomodoroTimer';
import { GlobalStyle } from './styles/GlobalStyle';
import { activeTheme, restTheme } from './styles/theme';

function App(): JSX.Element {
  const [myTheme, setMyTheme] = useState<DefaultTheme>(activeTheme);

  const toggleTheme = () => {
    setMyTheme(myTheme === activeTheme ? restTheme : activeTheme);
  };

  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <PomodoroTimer
        pomodoroTime={1500}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
        toggleTheme={toggleTheme}
      />
    </ThemeProvider>
  );
}

export default App;
