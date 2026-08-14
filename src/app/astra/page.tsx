import type { Metadata } from "next";
import { PageChrome } from "@/components/layout/PageChrome";
import { AstraView } from "@/components/astra/AstraView";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Astra",
  description: pageMeta.astra.description,
};

export default function AstraPage() {
  return (
    <PageChrome theme="combat">
      <AstraView />
    </PageChrome>
  );
}
