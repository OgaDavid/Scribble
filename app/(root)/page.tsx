import Companies from "@/components/Companies";
import Container from "@/components/Container";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main className="">
      <Container>
        <Hero />
        <Companies />
      </Container>
    </main>
  );
}
