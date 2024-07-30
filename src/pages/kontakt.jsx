import React from 'react';
import { graphql } from 'gatsby';
import PhoneIcon from '../assets/icon-components/phone.svg';
import { ContactForm, StyledButton } from '../assets/styles/pages/homepage.styles';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContactContentWrapper, ContactInfoWrapper, ContactPhoto } from '../assets/styles/pages/kontakt.styles';

const Kontakt = ({ data }) => (
  <ContactContentWrapper isSubpage>
    <ContactInfoWrapper>
      <HighlightedHeading>Kontakt</HighlightedHeading>
      <p>
        Szukasz nieruchomości dla siebie? A może potrzebujesz 
        fachowej pomocy przy sprzedaży własnej nieruchomości? 
        Chętnie odpowiemy na Twoje pytania. Napisz lub zadzwoń.
      </p>
      <a href="tel:730026439">
        <PhoneIcon />
        730 026 439
      </a>
    </ContactInfoWrapper>
    <ContactForm action="#">
      <HighlightedHeading>Napisz do nas</HighlightedHeading>
      <label htmlFor="email">Adres e-mail</label>
      <input type="text" name="email" id="email" placeholder="Adres e-mail" />
      <label htmlFor="message">Treść</label>
      <textarea name="message" id="message" placeholder="Wiadomość" />
      <StyledButton>Wyślij</StyledButton>
    </ContactForm>
    <ContactPhoto imageSource={data.hero.publicURL} />
    <h1>Kontakt</h1>
  </ContactContentWrapper>
);


export const query = graphql`
  query {
    hero: file(relativePath: {regex: "/zespol\/0_hero.jpg/"}) {
      publicURL
    }
  }
`;

export default Kontakt;
