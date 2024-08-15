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


const Oferty = ({ data: { oferty: { nodes: oferty }} }) => (
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
      {oferty.map((oferta) => (
        <Thumbnail
          key={oferta.id}
          imageSource={oferta.galeria[0].file.url}
          address={oferta.adres}
          title={oferta.tytul}
        />
      ))}
    </Gallery>
  </ContentWrapper>
);



/* export const query = graphql`
  query {
    thumbnail: file(relativePath: { regex: "/oferty\/temportary-thumbnail.jpg/"}) {
      publicURL
    },
}
`; */

export const query = graphql`
  query {
    oferty: allContentfulOferta {
      nodes {
        id
        adres
        tytul
        galeria {
          file {
            url
          }
        }
      }
    }
  }
`;






export default Oferty;
