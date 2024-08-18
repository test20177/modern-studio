import React from 'react';
import { graphql } from 'gatsby';
import PeopleIcon from 'assets/icon-components/people.svg';
import ConsultancyIcon from 'assets/icon-components/consultancy.svg';
import HeartIcon from 'assets/icon-components/heart.svg';
import BlocksIcon from 'assets/icon-components/blocks.svg';
import SuitcaseIcon from 'assets/icon-components/suitcase.svg';
import KeyIcon from 'assets/icon-components/key.svg';

import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';

import { Hero, HeroImage, HeroInfo, ServicesStyledList } from 'assets/styles/pages/uslugi.styles';

const Uslugi = ({ data }) => (
  <ContentWrapper>
    <Hero>
      <h1>Obsługę nieruchomości wymyśliliśmy na nowo</h1>
      <HeroImage imageSource={data.hero.publicURL} />
      <HeroInfo>
        <p>
          Poziom zaangażowania i zakres usług Modern Studio 
          wykracza daleko poza to, co oferują inne biura nieruchomości 
          – sprawdź, jak możemy Ci pomóc.
        </p>
        <a href="#szczegoly">Czytaj dalej</a>
      </HeroInfo>
    </Hero>
    <HighlightedHeading id="szczegoly">Jak możemy Ci pomóc?</HighlightedHeading>
    <ServicesStyledList>
      <li>
        <PeopleIcon />
        <h3>
          Pośrednictwo w obrocie nieruchomościami
        </h3>
        <p>
          Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, 
          zakupie, wynajmie lub najmie nieruchomości.
        </p>
      </li>
      <li>
        <ConsultancyIcon />
        <h3>Kompleksowe doradztwo</h3>
        <p>
          Współpracujemy z najlepszymi kancelariami prawnymi 
          i notarialnymi, zapewniamy fachowe doradztwo w zakresie 
          kredytowania i ubezpieczeń.
        </p>
      </li>
      <li>
        <HeartIcon />
        <h3>Home staging</h3>
        <p>
          Profesjonalne przygotowanie nieruchomości niewielkim 
          nakładem środków do szybkiej transakcji. Modna i 
          funkcjonalna metamorfoza wnętrza mieszkania, domu czy 
          biura.
        </p>
      </li>
      <li>
        <BlocksIcon />
        <h3>Współpraca z deweloperem</h3>
        <p>
          Pośrednictwo w zakresie sprzedaży inwestycji deweloperskiej 
          (pełen zakres, znajomość lokalnych inwestycji/pewność wysokiej jakości wykonania)
        </p>
      </li>
      <li>
        <SuitcaseIcon />
        <h3>Współpraca z inwestorem</h3>
        <p>
          Kompleksowa obsługa klienta poszukującego nieruchomości 
          w celach inwestycyjnych (lokata kapitału, analiza rynku).
        </p>
      </li>
      <li>
        <KeyIcon />
        <h3>Współpraca z architektem</h3>
        <p>
          Współpraca z zaprzyjaźnionym biurem architektonicznym 
          w zakresie projektowania wnętrz (zarówno prywatnych jak 
          i komercyjnych) i kompleksowej usługi wykończenie pod klucz.
        </p>
      </li>
    </ServicesStyledList>
  </ContentWrapper>
);

export const query = graphql`
  query {
    hero: file(relativePath: { regex: "/uslugi\/0_hero.jpg/" }) {
      publicURL
    }
  }
`;

export default Uslugi;
