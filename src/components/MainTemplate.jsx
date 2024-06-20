import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../assets/styles/GlobalStyles';
import { theme } from '../assets/styles/theme';
import { Navigation } from './Navigation';

export const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        {children}
      </ThemeProvider>
    </>
  );
}

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
