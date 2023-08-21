import Companies from "@/components/Landing Page/Companies";
import Container from "@/components/Container";
import FAQ from "@/components/Landing Page/Faq/FAQ";
import GetStarted from "@/components/Landing Page/GetStarted";
import Hero from "@/components/Landing Page/Hero/Hero";
import Publish from "@/components/Landing Page/Publish";

export default function Home() {
  return (
    <main>
      <Container>
        <Hero />
        <Companies />
        <Publish />
        <FAQ />
        <GetStarted />
      </Container>
    </main>
  );
}
