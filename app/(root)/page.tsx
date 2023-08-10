import Companies from "@/components/Companies";
import Container from "@/components/Container";
import FAQ from "@/components/Faq/FAQ";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero/Hero";
import Publish from "@/components/Publish";

export default function Home() {
  return (
    <main className="">
      <Container>
        <Hero />
        <Companies />
        <Publish />
      </Container>
      <FAQ />
      <GetStarted />
    </main>
  );
}
