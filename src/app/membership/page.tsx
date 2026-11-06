import type { Metadata } from "next";
import { PageChrome } from "@/components/layout/PageChrome";
import { MembershipView } from "@/components/membership/MembershipView";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Membership Plans",
  description: pageMeta.membership.description,
};

export default function MembershipPage() {
  return (
    <PageChrome theme="light">
      <MembershipView />
    </PageChrome>
  );
}
