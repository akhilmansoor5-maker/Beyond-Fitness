import type { Metadata } from "next";
import { PageChrome } from "@/components/layout/PageChrome";
import { VisitView } from "@/components/visit/VisitView";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Visit",
  description: pageMeta.visit.description,
};

export default function VisitPage() {
  return (
    <PageChrome theme="light">
      <VisitView />
    </PageChrome>
  );
}
