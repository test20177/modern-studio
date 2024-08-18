import { Link } from 'gatsby';
import React from 'react';
import { StyledFooter } from './Footer.styles';
import FacebookIcon from 'assets/icons/facebook.svg';
import InstagramIcon from 'assets/icons/instagram.svg';
import { StyledIcon } from '../StyledIcon/StyledIcon';

export const Footer = () => (
  <StyledFooter>
    <h4>Modern Studio</h4>
    <div>
      <Link to="/oferty">Oferty</Link>
      <Link to="/realizacje">Realizacje</Link>
      <Link to="/zespol">Zespół</Link>
      <Link to="/uslugi">Usługi</Link>
      <Link to="/kontakt">Kontakt</Link>
    </div>
    <div>
      <StyledIcon isDark>
        <FacebookIcon />
      </StyledIcon>
      <StyledIcon isDark>
        <InstagramIcon />
      </StyledIcon>
    </div>
  </StyledFooter>
);
