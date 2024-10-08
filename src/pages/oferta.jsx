import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import AreaIcon from 'assets/icon-components/area.svg';
import AvaiabilityIcon from 'assets/icon-components/avaiability.svg';
import BuildingTypeIcon from 'assets/icon-components/building-type.svg';
import OfferTypeIcon from 'assets/icon-components/offer-type.svg';
import RoomsIcon from 'assets/icon-components/rooms.svg';
import {
  StyledContentWrapper,
  OfferTitle,
  Address,
  Gallery,
  OfferDescription,
  OfferDetailsList,
} from 'assets/styles/pages/oferta.styles';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';

const Oferta = ({ data }) => (
  <StyledContentWrapper isSubpage>
    <OfferTitle>
      <Address>Marynarska 21</Address>
      <HighlightedHeading>Magiczna przestrzeń dla dużej rodziny</HighlightedHeading>
    </OfferTitle>
    <Gallery><img src={data.oferta.publicURL} alt="" /></Gallery>
    <OfferDescription>
      Pomimo braku dostępu do morza w Poznaniu, jak widać za oknem, dla nas nie ma rzeczy
      niemożliwych. Wyjątkowe mieszkanie z widokiem, którego nie da się zapomnieć.
    </OfferDescription>
    <OfferDetailsList>
      <li>
        <BuildingTypeIcon />
        <div>
          <p>Typ budynku:</p>
          <p>blok</p>
        </div>
      </li>
      <li>
        <RoomsIcon />
        <div>
          <p>Pomieszczenia</p>
          <p>4 pokoje / 2 łazienki</p>
        </div>
      </li>
      <li>
        <AvaiabilityIcon />
        <div>
          <p>Dostępność:</p>
          <p>Styczeń 2022</p>
        </div>
      </li>
      <li>
        <AreaIcon />
        <div>
          <p>Powierzchnia:</p>
          <p>95m2</p>
        </div>
      </li>
      <li>
        <OfferTypeIcon />
        <div>
          <p>Rodzaj oferty:</p>
          <p>wynajem</p>
        </div>
      </li>
    </OfferDetailsList>
    <ContactDetails />
  </StyledContentWrapper>
);

export const query = graphql`
  query {
    oferta: file(relativePath: { regex: "/oferta\/temporary-oferta.jpg/"}) {
      publicURL
    },
    avatar: file(relativePath: { regex: "/oferta\/temporary-avatar.jpg/"}) {
      publicURL
    },
  }
`;

export default Oferta;
