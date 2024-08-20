import React from 'react';
import { graphql } from 'gatsby';
import PhoneIcon from 'assets/icon-components/phone.svg';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContactContentWrapper, ContactInfoWrapper, ContactPhoto } from 'assets/styles/pages/kontakt.styles';

import { ContactForm } from 'components/ContactForm/ContactForm';

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
    <ContactForm />
    <ContactPhoto offset="2000" position="bottomLeft" size="100px" distance="30px" color="steel" imageSource={data.hero.publicURL} />
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
