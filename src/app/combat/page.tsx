import type { Metadata } from "next";
import { PageChrome } from "@/components/layout/PageChrome";
import { CombatView } from "@/components/combat/CombatView";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Combat & Sport",
  description: pageMeta.combat.description,
};

export default function CombatPage() {
  return (
    <PageChrome theme="combat">
      <CombatView />
    </PageChrome>
  );
}
