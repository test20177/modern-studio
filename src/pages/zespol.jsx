import React from 'react';
import { graphql } from 'gatsby';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import EmailIcon from 'assets/icon-components/email.svg';
import PhoneIcon from 'assets/icon-components/phone.svg';
import { Hero, InfoItem, InfoItemContent } from 'assets/styles/pages/zespol.styles'; 

const Zespol = ({ data }) => (
  <ContentWrapper isSubpage>
    <Hero imageSource={data.intro0.publicURL}>
      <h1>Poznajmy się</h1>
      <p>Razem tworzymy wyjątkowy zespół. Zobacz, dlaczego warto z nami współpracować,</p>
    </Hero>
    <InfoItem>
      <InfoItemContent>
        <HighlightedHeading>Anna Żarczyńska</HighlightedHeading>
        <p>Pośrednik nieruchomości nr licencji 667</p>
        <p>
          Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu.
          Doświadczenie zawodowe zdobyła w poznańskich kancelariach prawnych. Swoją pracę
          opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych
          wnętrz, niebanalnej architektury i sztuki w każdej postaci.
        </p>
        <a href="mailto:ania@nieruchomosci.pl"><EmailIcon/>ania@nieruchomosci.pl</a>
        <a href="tel:730026439"><PhoneIcon/>730 026 439</a>
      </InfoItemContent>
      <img src={data.ania1.publicURL} alt=""/>
    </InfoItem>
    <InfoItem>
      <InfoItemContent>
        <HighlightedHeading>Basia Kowalska</HighlightedHeading>
        <p>Pośrednik nieruchomości nr licencji 267</p>
        <p>
          Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu.
          Doświadczenie zawodowe zdobyła w poznańskich kancelariach prawnych. Swoją pracę
          opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych
          wnętrz, niebanalnej architektury i sztuki w każdej postaci.
        </p>
        <a href="mailto:ania@nieruchomosci.pl"><EmailIcon/>ania@nieruchomosci.pl</a>
        <a href="tel:730026439"><PhoneIcon/>730 026 439</a>
      </InfoItemContent>
      <img src={data.amelia2.publicURL} alt=""/>
    </InfoItem>
    <InfoItem>
      <InfoItemContent>
        <HighlightedHeading>Aneta Kaczka</HighlightedHeading>
        <p>Pośrednik nieruchomości nr licencji 667</p>
        <p>
          Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu.
          Doświadczenie zawodowe zdobyła w poznańskich kancelariach prawnych. Swoją pracę
          opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych
          wnętrz, niebanalnej architektury i sztuki w każdej postaci.
        </p>
        <a href="mailto:ania@nieruchomosci.pl"><EmailIcon/>ania@nieruchomosci.pl</a>
        <a href="tel:730026439"><PhoneIcon/>730 026 439</a>
      </InfoItemContent>
      <img src={data.aneta3.publicURL} alt=""/>
    </InfoItem>
    <InfoItem>
      <InfoItemContent>
        <HighlightedHeading>Kamila Bodzka</HighlightedHeading>
        <p>Pośrednik nieruchomości nr licencji 667</p>
        <p>
          Założycielka Modern Studio. Z wykształcenia prawnik, absolwentka UAM w Poznaniu.
          Doświadczenie zawodowe zdobyła w poznańskich kancelariach prawnych. Swoją pracę
          opiera na przyjaznych relacjach, szacunku i zaufaniu. Pasjonatka wyjątkowych
          wnętrz, niebanalnej architektury i sztuki w każdej postaci.
        </p>
        <a href="mailto:ania@nieruchomosci.pl"><EmailIcon/>ania@nieruchomosci.pl</a>
        <a href="tel:730026439"><PhoneIcon/>730 026 439</a>
      </InfoItemContent>
      <img src={data.kamila4.publicURL} alt=""/>
    </InfoItem>
  </ContentWrapper>
)

export const query = graphql`
  query {
    intro0: file(relativePath: { regex: "/zespol\/0_hero.jpg/" }) {
      publicURL
    },
    ania1: file(relativePath: { regex: "/zespol\/1_ania.jpg/" }) {
      publicURL
    },
    amelia2: file(relativePath: { regex: "/zespol\/2_amelia.jpg/" }) {
      publicURL
    },
    aneta3: file(relativePath: { regex: "/zespol\/3_aneta.jpg/" }) {
      publicURL
    },
    kamila4: file(relativePath: { regex: "/zespol\/4_kamila.jpg/" }) {
      publicURL
    },
  }
`;

export default Zespol;
