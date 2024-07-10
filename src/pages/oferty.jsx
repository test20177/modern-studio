import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
import { 
  ContentInfo,
  FiltersList,
  Gallery,
} from '../assets/styles/pages/oferty.styles';
import { Thumbnail } from '../components/Thumbnail/Thumbnail';


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
