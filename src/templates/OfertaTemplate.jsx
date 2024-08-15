import React from 'react';
import {
  StyledContentWrapper,
  OfferTitle, Address,
  Gallery,
  OfferDescription,
  OfferDetailsList,
  ContactDetails,
} from '../assets/styles/pages/oferta.styles';
import BuildingTypeIcon from '../assets/icon-components/building-type.svg';
import RoomsIcon from '../assets/icon-components/rooms.svg';
import AreaIcon from '../assets/icon-components/area.svg';
import AvaiabilityIcon from '../assets/icon-components/avaiability.svg';
import OfferTypeIcon from '../assets/icon-components/offer-type.svg';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { graphql } from 'gatsby';

const OfertaTemplate = ({ data: { oferta, avatar } }) => (
  <StyledContentWrapper>
    <OfferTitle>
      <Address>{oferta.adres}</Address>
      <HighlightedHeading>{oferta.tytul}</HighlightedHeading>
    </OfferTitle>
    <Gallery><img src={oferta.galeria[0].file.url} alt="" /></Gallery>
    <OfferDescription>{oferta.opis.opis}</OfferDescription>
    <OfferDetailsList>
      <li>
        <BuildingTypeIcon />
        <div>
          <p>Typ budynku:</p>
          <p>{oferta.typBudynku}</p>
        </div>
      </li>
      <li>
        <RoomsIcon />
        <div>
          <p>Pomieszczenia</p>
          <p>{oferta.pomieszczenia}</p>
        </div>
      </li>
      <li>
        <AvaiabilityIcon />
        <div>
          <p>Dostępność:</p>
          <p>{oferta.dostepnosc}</p>
        </div>
      </li>
      <li>
        <AreaIcon />
        <div>
          <p>Powierzchnia:</p>
          <p>{oferta.powierzchnia}</p>
        </div>
      </li>
      <li>
        <OfferTypeIcon />
        <div>
          <p>Rodzaj oferty:</p>
          <p>{oferta.rodzajOferty}</p>
        </div>
      </li>
    </OfferDetailsList>
    <ContactDetails>
      <img src={avatar.publicURL} alt="" />
      <div>
        <p>Kontakt:</p>
        <p>Anna Żarczyńska</p>
        <p>ania@msnieruchomości.pl</p>
        <p>730 026 439</p>
      </div>
    </ContactDetails>
  </StyledContentWrapper>
);

export const query = graphql`
  query {
    oferta: contentfulOferta(id: {eq: "58ec6a9e-df89-51ff-994c-95fe393e22f0"}) {
      tytul
      typBudynku
      rodzajOferty
      powierzchnia
      pomieszczenia
      kontakt
      dostepnosc
      opis {
        opis
      }
      galeria {
        file {
          url
        }
      }
      adres
    },
    avatar: file(relativePath: { regex: "/oferta\/temporary-avatar.jpg/"}) {
      publicURL
    },
  }
`;

export default OfertaTemplate;
