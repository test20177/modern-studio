import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';

const IntroSection = styled.section`
  img {
    width: 100%;
  }
  ${({theme}) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    position: relative;
    div {
      width: 50%;
      padding-right: 80px;
    }
    img { 
      width: 50%; 
    }
    ${({theme}) => theme.effect.corner({ position: 'bottomRight', size: '100px', distance: '40px' })}
  }
`;

const PortfolioItem = styled.article`
  margin: 100px 0;
  img {
    width: 100%;
  }
  ${({theme}) => theme.mq.desktop} {
    margin: 150px 0;
    display: flex;
    align-items: center;
    position: relative;
    div {
      width: 50%;
    }
    img {
      width: 50%;
    }
    &:nth-child(odd) {
      ${({theme}) => theme.effect.corner({ position: 'topRight', size: '100px', distance: '40px'})}
      div {
        padding-right: 80px;
      }
    }
    &:nth-child(even) {
      flex-direction: row-reverse;
      ${({theme}) => theme.effect.corner({ position: 'topLeft', size: '100px', distance: '40px', color: theme.color.beige })}
      div {
        padding-left: 80px;
      }
    }
    &:last-child {
      width: 100%;
      flex-direction: column;
      ${({theme}) => theme.effect.corner({ position: 'bottomRight', size: '100px', distance: '40px', pseudoelement: 'before' })}
      // After was overwritten by the style above
      // so ::before element was used instead
      &::after {
        display: none;
      }
      img {
        width: 100%;
      }
      div {
        text-align: center;
        margin: 30px auto;
        padding: 0;
      }
    }
  }
`;


const Realizacje = ({ data }) => (
  <ContentWrapper isSubpage>
    <IntroSection>
      <div>
        <HighlightedHeading>Poznaj nasze realizacje</HighlightedHeading>
        <p>
          Każda współpraca to dla nas wspaniała przygoda, a to co po niej pozostaje, 
          to pełna satysfakcja naszych klientów. Sprawdź, co udało nam się do tej pory 
          osiągnąć.
        </p>
      </div>
      <img src={data.intro0.publicURL} alt="" />
    </IntroSection>
    <PortfolioItem>
      <div>
        <HighlightedHeading>ul. Sielska</HighlightedHeading>  
        <p>
          Przepiękne mieszkanie z tarasem na dachu położone w doskonałej lokalizacji. Właścicielom zależało na x i y więc podeszliśmy do tego w taki sposób, że na końcu był po prostu sztosik.
        </p>
      </div>
      <img src={data.boznicza2.publicURL} alt="" />
    </PortfolioItem>
    <PortfolioItem>
      <div>
        <HighlightedHeading>Bóżnicza 1</HighlightedHeading>
        <p>
          Tej ulicy nie trzeba nikomu przedstawiać. Doskonała lokalizacja w samym centrum Poznania – nawet ekstremalnie krzywy bruk położony na Bóżniczej nie pokrzyżował nam planów i mieszkanie sprzedało się praktycznie na pniu.
        </p>
      </div>
      <img src={data.garbary3.publicURL} alt="" />
    </PortfolioItem>
    <PortfolioItem>
      <div>
        <HighlightedHeading>Jeleniogórska 54</HighlightedHeading>
        <p>
          Tu jeszcze jedno mieszkanko, które było takim sztosem, że aż zrobiliśmy duże zdjęcie na środku. A tak serio to po prostu chciałem pokazać, że nie wszystkie zdjęcia muszą być po bokach.
        </p>
      </div>
      <img src={data.jeleniogorska4.publicURL} alt="" />
    </PortfolioItem>
  </ContentWrapper>
);






// {data.1rolna.publicURL}




export const query = graphql`
  query {
    intro0: file(relativePath: { regex: "/realizacje\/0_intro.jpg/"}) {
      publicURL
    },
    rolna1: file(relativePath: { regex: "/realizacje\/1_rolna.jpg/"}) {
      publicURL
    },
    boznicza2: file(relativePath: { regex: "/realizacje\/2_boznicza.jpg/"}) {
      publicURL
    },
    garbary3: file(relativePath: { regex: "/realizacje\/3_garbary.jpg/"}) {
      publicURL
    },
    jeleniogorska4: file(relativePath: { regex: "/realizacje\/4_jeleniogorska.jpg/"}) {
      publicURL
    },
  }
`;

export default Realizacje;
