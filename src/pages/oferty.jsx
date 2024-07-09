import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';

const ThumbnailWrapper = styled.div`
  width: 100%;
  height: 30vw;
  min-height: 450px;
  max-height: 700px;
  position: relative;
  display: flex;
  align-items: flex-end;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  object-position: left bottom;
  z-index: -1;
`;
const ThumnailInfo = styled.div`
  width: 100%;
  padding: 20px;
  p:first-child {
    font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    position: relative;
  }
  p:first-child::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 1px;
    background-color: white;
    bottom: -10px;
    left: 0;
  }
  p:last-child {
    font-size: ${({ theme }) => theme.font.size.thumbnail};
    font-weight: 700;
    color: white;
  }
`;

const Thumbnail = ({ imageSource }) => (
  <ThumbnailWrapper>
    <ThumbnailImage src={imageSource} alt="" />
    <ThumnailInfo>
      <p>Rolna 20</p>
      <p>Nowoczesny apartament z klasą</p>
    </ThumnailInfo>
  </ThumbnailWrapper>
);

const ContentInfo = styled.div`
  ${({theme}) => theme.mq.desktop} {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 40px;
  }
`;

const FiltersList = styled.ul`
  margin: 0 0 50px;
  padding: 0;
  display: flex;
  flex-direction: column;
  list-style: none;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  li {
    padding: 10px 0;
    font-weight: 700;
  }
  li:first-child {
    text-decoration: underline;
  }
  ${({ theme }) => theme.mq.desktop } {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    li {
      padding: 20px 35px;
    }
  }
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  ${({theme}) => theme.mq.tablet} { 
    grid-template-columns: repeat(2, 1fr);
  }
  ${({theme}) => theme.mq.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`

const Oferty = ({ data }) => (
  <ContentWrapper isSubpage>
    <ContentInfo>
      <HighlightedHeading>Nasza oferta</HighlightedHeading>
      <p>
        Proponujemy Państwu najlepsze oferty na rynku nieruchomości dostosowane do Państwa potrzeb w najlepszych cenach
      </p>
    </ContentInfo>
    <FiltersList>
      <li>Mieszkanie</li>
      <li>Dom</li>
      <li>Działka</li>
    </FiltersList>
    <Gallery>
      <Thumbnail imageSource={data.thumbnail.publicURL}/>
      <Thumbnail imageSource={data.thumbnail.publicURL}/>
      <Thumbnail imageSource={data.thumbnail.publicURL}/>
      <Thumbnail imageSource={data.thumbnail.publicURL}/>
      <Thumbnail imageSource={data.thumbnail.publicURL}/>
    </Gallery>
  </ContentWrapper>
);

export const query = graphql`
  query {
    thumbnail: file(relativePath: { regex: "/oferty\/temportary-thumbnail.jpg/"}) {
      publicURL
    }
  }
`;

export default Oferty;
