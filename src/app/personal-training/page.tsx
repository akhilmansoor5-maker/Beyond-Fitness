import type { Metadata } from "next";
import { PageChrome } from "@/components/layout/PageChrome";
import { PersonalTrainingView } from "@/components/pt/PersonalTrainingView";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Personal Training",
  description: pageMeta.personalTraining.description,
};

export default function PersonalTrainingPage() {
  return (
    <PageChrome theme="light">
      <PersonalTrainingView />
    </PageChrome>
  );
}
