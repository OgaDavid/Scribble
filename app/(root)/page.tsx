import Companies from "@/components/Companies";
import Container from "@/components/Container";
import FAQ from "@/components/FAQ";
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
    </main>
  );
}
