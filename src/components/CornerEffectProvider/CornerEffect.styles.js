import styled, { keyframes, css } from 'styled-components';

const showTopLeftCorner = keyframes`
  0% {
    clip-path: polygon(20% 100%, 0 100%);
  }
  50% {
    clip-path: polygon(0 0, 20% 0, 20% 100%, 0 100%);
  }
  100% {
        clip-path: polygon(0 0, 100% 0, 100% 20%, 20% 20%, 20% 100%, 0 100%);
  }
`;

const showTopRightCorner = keyframes`
  0% {
    clip-path: polygon(80% 100%, 100% 100%);
  }
  50% {
    clip-path: polygon(80% 0%, 100% 0%, 100% 100%, 80% 100%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 80% 100%, 80% 20%, 0% 20%);
  }
`;

const showBottomLeftCorner = keyframes`
  0% {
    clip-path: polygon(0% 100%, 20% 100%);
  }
  50% {
    clip-path: polygon(0% 0%, 20% 0%, 20% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 0%, 100% 0%, 100% 20%, 20% 20%, 20% 100%, 0% 100%);
  }
`;

const showBottomRightCorner = keyframes`
  0% {
    clip-path: polygon(0% 80%, 0% 100%);
  }
  50% {
    clip-path: polygon(0% 80%, 100% 80%, 100% 100%, 0% 100%);
  }
  100% {
    clip-path: polygon(0% 80%, 80% 80%, 80% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
`;

export const CornerEffectWrapper = styled.div`  
  position: relative;
  &::after, &::before {
    animation-play-state: ${({ playstate }) => (playstate ? 'running !important' : 'paused !important')};
  }  
  ${({
    theme,
    pseudoelement,
    color,
    size,
    distance,
    position,
  }) => css`  
  &::${pseudoelement} {
    background-color: ${theme.color[color]};
    position: absolute;
    width: ${size};
    height: ${size};
    content: '';       
    ${() => {
    switch (position) {
      case 'topLeft':
        return css`
          animation: ${showTopLeftCorner} 1.2s ease forwards;
          clip-path: polygon(100% 15%, 15% 15%, 15% 100%, 0 100%, 0 0, 100% 0);
          top: -${distance};
          left: -${distance};
        `;
      case 'topRight':
        return css`
          animation: ${showTopRightCorner} 1.2s ease forwards;
          clip-path: polygon(0 15%, 0 0, 100% 0, 100% 100%, 85% 100%, 85% 15%);
          top: -${distance};
          right: -${distance};
        `;
      case 'bottomLeft':
        return css`
          animation: ${showBottomLeftCorner} 1.2s ease forwards;
          clip-path: polygon(0 0, 15% 0, 15% 85%, 100% 85%, 100% 100%, 0 100%);
          bottom: -${distance};
          left: -${distance};
        `;
      case 'bottomRight':
        return css`
          animation: ${showBottomRightCorner} 1.2s ease forwards; 
          clip-path: polygon(85% 0, 85% 85%, 0 85%, 0 100%, 100% 100%, 100% 0);
          bottom: -${distance};
          right: -${distance};
        `;
      default:
        return '';
    }
  }
}
}
  
`}



  
`;
