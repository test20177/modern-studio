import React, { useRef, useState } from 'react';
import { graphql } from 'gatsby';
import { throttle } from 'lodash';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
import { IntroSection, PortfolioItem } from '../assets/styles/pages/realizacje.styles';
import { CornerEffect } from '../components/CornerEffectProvider/CornerEffect';

const Realizacje = ({ data }) => {

  const [ playState, setPlayState ] = useState(false)

  const handlePlayStateChange = () => throttle( () => {
    const { top } = headingRef.current.getBoundingClientRect()
    if (top < 800) {
      setPlayState(true);
    }
  }, 150 )

  return (
    <ContentWrapper isSubpage>
      <CornerEffect position="bottomRight" size="100px" distance="30px" color="dark">
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
      </CornerEffect>
      <CornerEffect position="topLeft" size="100px" distance="30px" color="beige">
        <PortfolioItem isOdd>
          <div>
            <HighlightedHeading>ul. Sielska</HighlightedHeading>  
            <p>
              Przepiękne mieszkanie z tarasem na dachu położone w doskonałej lokalizacji. 
              Właścicielom zależało na x i y więc podeszliśmy do tego w taki sposób, że na 
              końcu był po prostu sztosik.
            </p>
          </div>
          <img src={data.boznicza2.publicURL} alt="" />
        </PortfolioItem>
      </CornerEffect>
      <CornerEffect position="bottomRight" size="100px" distance="30px" color="dark">
        <PortfolioItem>
          <div>
            <HighlightedHeading>Bóżnicza 1</HighlightedHeading>
            <p>
              Tej ulicy nie trzeba nikomu przedstawiać. Doskonała lokalizacja w samym centrum 
              Poznania – nawet ekstremalnie krzywy bruk położony na Bóżniczej nie pokrzyżował 
              nam planów i mieszkanie sprzedało się praktycznie na pniu.
            </p>
          </div>
          <img src={data.garbary3.publicURL} alt="" />
        </PortfolioItem>
      </CornerEffect>
      <CornerEffect position="bottomRight" size="100px" distance="30px" color="beige">
        <PortfolioItem isFullWidth>
          <div>
            <HighlightedHeading>Jeleniogórska 54</HighlightedHeading>
            <p>
              Tu jeszcze jedno mieszkanko, które było takim sztosem, że aż zrobiliśmy duże zdjęcie na środku. A tak serio to po prostu chciałem pokazać, że nie wszystkie zdjęcia muszą być po bokach.
            </p>
          </div>
          <img src={data.jeleniogorska4.publicURL} alt="" />
        </PortfolioItem>
      </CornerEffect>
    </ContentWrapper>
  )
};

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
