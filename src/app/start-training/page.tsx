import type { Metadata } from "next";
import { PageChrome } from "@/components/layout/PageChrome";
import { StartTrainingView } from "@/components/start/StartTrainingView";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Start Training",
  description: pageMeta.start.description,
};

export default function StartTrainingPage() {
  return (
    <PageChrome theme="light">
      <StartTrainingView />
    </PageChrome>
  );
}
