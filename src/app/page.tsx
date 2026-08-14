import { PageChrome } from "@/components/layout/PageChrome";
import { Hero } from "@/components/home/Hero";
import { HomeGateway } from "@/components/home/HomeGateway";
import { HomePhilosophy } from "@/components/home/HomePhilosophy";
import { HomeClose } from "@/components/home/HomeClose";

export default function HomePage() {
  return (
    <PageChrome theme="light">
      <main>
        <Hero />
        <HomePhilosophy />
        <HomeGateway />
        <HomeClose />
      </main>
    </PageChrome>
  );
}
