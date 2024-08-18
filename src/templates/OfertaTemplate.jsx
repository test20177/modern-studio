import React from 'react';
import { graphql } from 'gatsby';
import { Carousel } from 'react-responsive-carousel';
import {
  StyledContentWrapper,
  OfferTitle, Address,
  Gallery,
  OfferDescription,
  OfferDetailsList,
} from 'assets/styles/pages/oferta.styles';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';
import BuildingTypeIcon from 'assets/icon-components/building-type.svg';
import RoomsIcon from 'assets/icon-components/rooms.svg';
import AreaIcon from 'assets/icon-components/area.svg';
import AvaiabilityIcon from 'assets/icon-components/avaiability.svg';
import OfferTypeIcon from 'assets/icon-components/offer-type.svg';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

const galleryOptions = {
  showStatus: false,
  showThumbs: false,
  infiniteLoop: true,
};

const OfertaTemplate = ({ data: { oferta, avatar } }) => (
  <StyledContentWrapper>
    <OfferTitle>
      <Address>{oferta.adres}</Address>
      <HighlightedHeading>{oferta.tytul}</HighlightedHeading>
    </OfferTitle>
    <Gallery>
      <Carousel {...galleryOptions}>
        {
          oferta.galeria.map((item) => (
            <img src={item.file.url} alt="" />
          ))
        }
      </Carousel>
    </Gallery>
    <OfferDescription
      dangerouslySetInnerHTML={{
        __html: oferta.opis.childMarkdownRemark.html,
      }} />
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
    <ContactDetails contact={oferta.kontakt}/>
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
        childMarkdownRemark {
          html
        }
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
