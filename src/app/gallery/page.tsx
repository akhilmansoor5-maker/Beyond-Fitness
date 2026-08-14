import type { Metadata } from "next";
import { PageChrome } from "@/components/layout/PageChrome";
import { GalleryView } from "@/components/gallery/GalleryView";
import { pageMeta } from "@/content/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: pageMeta.gallery.description,
};

export default function GalleryPage() {
  return (
    <PageChrome theme="light">
      <GalleryView />
    </PageChrome>
  );
}
