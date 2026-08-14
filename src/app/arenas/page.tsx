import type { Metadata } from "next";
import { PageChrome } from "@/components/layout/PageChrome";
import { ArenasView } from "@/components/arenas/ArenasView";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Arenas",
  description: pageMeta.arenas.description,
};

export default function ArenasPage() {
  return (
    <PageChrome theme="light">
      <ArenasView />
    </PageChrome>
  );
}
