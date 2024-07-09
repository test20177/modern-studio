import * as React from 'react';
import { graphql } from 'gatsby';
import { 
  Hero,
  HeroHeading,
  HeroParagraph,
  ContentWrapper,
  WelcomeSection,
  WelcomeSectionContent,
  WelcomeSectionImage,
  AdvantagesSection,
  ShowcaseSection,
  ShowcaseButtonContainer,
  StyledButton,
  ShowcaseGallery,
  ShowcaseImage,
  ServicesSection,
  StyledList,
  TeamSection,
  StyledLinkButton,
  ReviewSection,
  ContactForm,
  TeamImage,
  StyledReview
} from '../assets/styles/pages/Homepage.styles';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';

const HomePage = ({ data }) => (
  <>
    <Hero imageSource={data.hero.publicURL}>
      <HeroHeading>Biuro nieruchomości, którego potrzebujesz</HeroHeading>
      <HeroParagraph>Modern Studio to nowoczesne biuro nieruchomości z profesjonalnym i innowacyjnym podejściem do tematu nieruchomości i inwestycji.</HeroParagraph>
    </Hero>
    <ContentWrapper>

      <WelcomeSection>
        <WelcomeSectionContent>
          <h2>
            Obsługę nieruchomości
            wymyśliliśmy na nowo
          </h2>
          <p>
            Modern Studio to nowoczesne biuro nieruchomości z projekcją na 
            nieruchomości i inwestycji
          </p>
          <p>
            Klienci wybierają nas ponieważ zakres naszych usłg wykracza poza to, co jest w stanie zaoferować konkurencja.
          </p>
        </WelcomeSectionContent>
        <WelcomeSectionImage imageSource={data.welcome.publicURL} />
      </WelcomeSection>

      <AdvantagesSection>
        <HighlightedHeading>Dlaczego szukasz właśnie nas?</HighlightedHeading>
        <StyledList>
          <li>
            <h3>
              Kompleksowa obsługa
            </h3>
            <p>
              Kupujesz, sprzedajesz lub chcesz wynająć nieruchomość? Zajmiemy się Twoją sprawą od A do Z, aby zaoszczędzić Twój czas.
            </p>
          </li>
          <li>
            <h3>
              Agent na wyłączność
            </h3>
            <p>
              W powierzone nam zlecenia angażujemy się w 100% - dzięki nam zaoszczędzisz maksimum czasu, zachowując przy tym pełną kontrolę.
            </p>
          </li>
          <li>
            <h3>
              Zgrany zespół
            </h3>
            <p>
            Doskonale rozumiemy Twoje potrzeby. Jesteśmy zespołem o zróżnicowanych kompetencjach, dzięki którym świetnie się uzupełniamy.
            </p>
          </li>
        </StyledList>
      </AdvantagesSection>
      <ShowcaseSection>
        <h2>Oferta</h2>
        <ShowcaseButtonContainer>
          <StyledButton isCentered>Bieżące oferty</StyledButton>
          <StyledButton isCentered>Nasze realizacje</StyledButton>
        </ShowcaseButtonContainer>
        <>
          <ShowcaseImage src={data.grid1.publicURL} alt="#" />
          <ShowcaseImage isBig src={data.grid2.publicURL} alt="#" />
          <ShowcaseImage src={data.grid3.publicURL} alt="#" />
          <ShowcaseImage isBig src={data.grid4.publicURL} alt="#" />
        </>
      </ShowcaseSection>
      <ServicesSection>
        <div>
          <HighlightedHeading>Twój komfort ponad wszystko</HighlightedHeading>
          <StyledLinkButton>Sprawdź pełen zakres naszych usług</StyledLinkButton>
        </div>
        <p>
          To co dla innych biur nieruchomości wykracza poza zakres usług, dla nas jest standardem. Wyróżnia nas bezkompromisowa troska o interes klienta.
        </p>
        <StyledList>
          <li>
            <h3>Pośrednictwo</h3>
            <p>
              Profesjonalne i kompleksowe usługi pośrednictwa w sprzedaży, zakupie, wynajmie lub najmie nieruchomości.
            </p>
          </li>
          <li>
            <h3>Doradztwo</h3>
            <p>
              Współpracujemy z najlepszymi kancelariami prawnymi i notarialnymi, zapewniamy fachowe doradztwo w zakresie kredytowania i ubezpieczeń.
            </p>
          </li>
          <li>
            <h3>Home staging</h3>
            <p>
              Modna i funkcjonanlna metamorfoza wnętrza mieszkania, domu czy biura podnosi atrakcyjność oferty na rynku.
            </p>
          </li>
          <li>
            <h3>Współpraca z najlepszymi</h3>
            <p>
              Poznański rynek znamy jak własną kieszeń - współpracując z nami wybierasz najlepszych deweloperów, prawników i architektów.
            </p>
          </li>
        </StyledList>
      </ServicesSection>
      <TeamSection>
        <div>
          <HighlightedHeading>Poznaj nasz zespół</HighlightedHeading>
          <p>
            Dzięki doskonałej współpracy i przyjacielskiej atmosferze udało nam się stworzyć zespół doskonały
          </p>
          <StyledLinkButton>Sprawdź kim jesteśmy</StyledLinkButton>
        </div>
        <TeamImage imageSource={data.team1.publicURL} alt="" />
        <TeamImage imageSource={data.team2.publicURL} alt="" />
      </TeamSection>
      <ReviewSection>
        <div>
          <HighlightedHeading>
            Co mówią o nas nasi klienci?
          </HighlightedHeading>
          <p>
            Bezkompromisowo wspieramy naszych klientów a ich satysfakcja jest dla nas najważniejszym celem
          </p>
        </div>
        <div>
          <StyledReview>
            <p>
              Witam. Jesteśmy bardzo zadowoleni z wyboru agencji nieruchomości. Co  mnie zaskoczyło: pełen profesjonalizm, pełna obsługa a co najważniejsze  miła atmosfera! 
            </p>
            <p>Katarzyna</p>
          </StyledReview>
          <StyledReview>
            <p>
              Dziękuje pracownikom biura za fachową oraz  kompleksową pomoc przy sprzedaży mojego mieszkania. Współpraca z tym biurem to czysta przyjemność.
            </p>
            <p>
              Kamila
            </p>
          </StyledReview>
        </div>
      </ReviewSection>
      <ContactForm action="#">
        <HighlightedHeading>Napisz do nas</HighlightedHeading>
        <label htmlFor="email">Adres e-mail</label>
        <input type="text" name="email" id="email" placeholder="Adres e-mail" />
        <label htmlFor="message">Treść</label>
        <textarea name="message" id="message" placeholder="Wiadomość" />
        <StyledButton>Wyślij</StyledButton>
      </ContactForm>
    </ContentWrapper>
  </>
);

export const query = graphql`
  query {
    hero: file(relativePath: { regex: "/homepage\/0_hero.jpg/"}) {
      publicURL    
    },
    welcome: file(relativePath: { regex: "/homepage\/1_grid.jpg/"}) {
      publicURL    
    },    
    grid1: file(relativePath: { regex: "/homepage\/1_grid.jpg/"}) {
      publicURL    
    },
    grid2: file(relativePath: { regex: "/homepage\/2_grid.jpg/"}) {
      publicURL    
    },
    grid3: file(relativePath: { regex: "/homepage\/3_grid.jpg/"}) {
      publicURL    
    },
    grid4: file(relativePath: { regex: "/homepage\/4_grid.jpg/"}) {
      publicURL    
    },
    team1: file(relativePath: { regex: "/homepage\/5_team.jpg/"}) {
      publicURL
    },
    team2: file(relativePath: { regex: "/homepage\/6_team.jpg/"}) {
      publicURL
    }
  }
`;

export default HomePage;
