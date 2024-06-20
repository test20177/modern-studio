import { Link } from 'gatsby';
import React, { useState} from 'react';
import Logo from 'assets/icons/logo.svg';
import FacebookIcon from 'assets/icons/facebook.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import styled from 'styled-components';
import { StyledIcon } from './StyledIcon';

const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};  
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
`;

const StyledLogo = styled(Logo)`
  width: ${({ isSmall }) => (isSmall ? '50px' : '100px')};
`;

const StyledBurger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;

const StyledSocialIcon = styled(StyledIcon)`
  margin: 0 20px;
  width: 50px;
  height: 50px;
`;

const StyledNavigationIcon = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    text-align: center;
    li {
      margin: 50px 0;   
      a {
        color: black;
        text-decoration: none;
        font-size: ${({ theme }) => theme.font.size.mobileMenu };
      }
    }

    
  }
`;

export const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
 
  const toggleNavigation = () => {
    setIsOpen(!isOpen)

  }

  return (
    <OuterWrapper>
      <Link to="/"><StyledLogo isSmall /></Link>
      <StyledBurger onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <StyledNavigationIcon>
          <ul>
            <li><Link to="/">Oferty</Link></li>
            <li><Link to="/">Realizacje</Link></li>
            <li><Link to="/">Zespół</Link></li>
            <li><Link to="/">Usługi</Link></li>
            <li><Link to="/">Kontakt</Link></li>
          </ul>
        </StyledNavigationIcon>
        <div>
          <StyledSocialIcon isDark>
            <FacebookIcon />
          </StyledSocialIcon>
          <StyledSocialIcon isDark>
            <InstagramIcon />
          </StyledSocialIcon>
        </div>
      </Wrapper>
    </OuterWrapper>
  )
};
