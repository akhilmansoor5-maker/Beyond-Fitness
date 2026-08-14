import type { Metadata } from "next";
import { PageChrome } from "@/components/layout/PageChrome";
import { FitnessView } from "@/components/fitness/FitnessView";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Fitness",
  description: pageMeta.fitness.description,
};

export default function FitnessPage() {
  return (
    <PageChrome theme="light">
      <FitnessView />
    </PageChrome>
  );
}
