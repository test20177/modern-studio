import styled, { css } from 'styled-components';

export const IntroSection = styled.section`
  img {
    width: 100%;
  }
  ${({theme}) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    position: relative;
    div {
      padding-right: 80px;
      width: 50%;
    }
    img { 
      width: 50%; 
    }
    /* ${({theme}) => theme.effect.corner({ position: 'bottomRight', size: '100px', distance: '40px' })} */
  }
`;

export const PortfolioItem = styled.article`  
  img {
    width: 100%;
  }
  ${({theme}) => theme.mq.desktop} {
    width: 100%;
    margin: 150px 0;
    display: flex;
    align-items: center;
    position: relative;
    div {
      width: 50%;
    }
    img {
      width: 50%;
    }

    div {
      padding: ${({ isOdd }) => (isOdd ? '0 0 0 80px' : '0 80px 0 0')};
    }

    flex-direction: ${({ isOdd }) => (isOdd ? 'row-reverse' : 'row')};

    ${({isFullWidth}) => (isFullWidth ? css`
      width: 100%;
      flex-direction: column;

      // After was overwritten by the style above
      // so ::before element was used instead
      &::after {
        display: none;
      }

      img {
        width: 100%;
      }
    
      div {
        text-align: center;
        margin: 30px auto;
        padding: 0;
      }

    ` : null)}
  }
`;
