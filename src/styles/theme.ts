// eslint-disable-next-line
import { DefaultTheme } from 'styled-components';

const activeTheme: DefaultTheme = {
  title: 'active',
  borderRadius: '5px',

  colors: {
    main: '#ef5d50',
    secondary: '#ff8154',
  },
};

const restTheme: DefaultTheme = {
  title: 'rest',
  borderRadius: '5px',

  colors: {
    main: '#41e1ba',
    secondary: '#15b453',
  },
};

export { restTheme, activeTheme };
