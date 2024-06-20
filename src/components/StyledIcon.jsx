import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIconWrapper = styled.span`
  display: inline-block;
  svg {
    width: 100%;
    height: auto;
  }
  svg path {
    fill: ${({ isDark }) => (isDark ? '#000' : '#fff')};
  }
`;

export const StyledIcon = ({ children, ...props }) => (
  <StyledIconWrapper {...props}>
    {children}
  </StyledIconWrapper>
);

StyledIcon.propTypes = {
  children: PropTypes.node.isRequired,
}