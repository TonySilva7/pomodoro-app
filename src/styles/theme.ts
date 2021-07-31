// eslint-disable-next-line
import { DefaultTheme } from 'styled-components';

const activeTheme: DefaultTheme = {
  title: 'active',
  borderRadius: '5px',

  colors: {
    main: '#ef5d50',
    secondary: 'magenta',
  },
};

const restTheme: DefaultTheme = {
  title: 'rest',
  borderRadius: '5px',

  colors: {
    main: '#41e1ba',
    secondary: 'magenta',
  },
};

export { restTheme, activeTheme };
