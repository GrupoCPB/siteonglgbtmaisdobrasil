import { BannerNewsletter } from "../../components/BannerNewsletter";
import { FooterArea } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Pages } from "../../components/Pages";

import { Container } from "./styles";

export function Podcast() {
  return (
    <Container>
      <Header pageName="podcast" />
      <BannerNewsletter pageName="podcast" />
      <Pages pageName="podcast"/>
      <FooterArea pageName="podcast" />
    </Container>
  );
}
