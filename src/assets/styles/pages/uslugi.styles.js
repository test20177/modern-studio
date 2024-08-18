import styled from 'styled-components';
import arrowIcon from '../../styles/arrow.svg';
import { StyledList } from 'components/StyledList/StyledList';

export const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80vh;
  margin-bottom: 100px;
  h1 {
    margin: 0;
    font-size: ${({ theme }) => theme.font.size.heading};
  }
 
  ${({ theme }) => theme.mq.tablet} {
    height: 40vh;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: ${({ theme }) => theme.size.desktopHeroHeight};
    justify-content: flex-end;
    h1 {
      max-width: 500px;
      margin-bottom: 380px;
    }
  }
`;

export const HeroInfo = styled.div`
  a {
      color: black;
      font-weight: 700;
      position: relative;
      left: 30px;
      &::before {      
        position: absolute;
        content: '';
        background-image: url("${arrowIcon}");      
        background-repeat: no-repeat;
        background-size: contain;
        background-position: 0 50%;
        width: 20px;
        height: 20px;
        left: -30px;
        top: 50%;
        transition: translateY(-50%) rotate(90deg);      
      }
    }
    ${({ theme }) => theme.mq.desktop } {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: row-reverse;
      &::before {
        content: '';
        height: 1px;
        width: 100%;
        position: relative;
        background-color: ${({ theme }) => theme.color.steel };
        transform: translateY(-50px);
      }
      p {
        margin: 0;
        width: 460px;
      }
  }
`;

export const HeroImage = styled.div`
    background-image: url("${({ imageSource }) => imageSource}" );
    background-position: 50% 50%;
    background-size: cover;
    width: 90%;
    height: 60%;
    position: absolute;
    z-index: -1;
    top: 20%;
    right: 0;
    ${({ theme }) => theme.mq.tablet} {
      top: 0;      
      width: 75%;
      height: 75%;
    }
    ${({ theme }) => theme.mq.desktop} {
      top: 0;
      width: 60%;
      height: 75%;
    }
`;

export const ServicesStyledList = styled(StyledList)`
  li {
    margin: 80px 0;   
    max-width: 500px;
  }
  svg {
    margin-bottom: 20px;
  }
  ${({ theme }) => theme.mq.desktop } {
    grid-gap: 50px;
  }
`;
