import type { DocPageContent } from "@/types/docs";

type PageInput = Omit<DocPageContent, "slug"> & { slug: string };

export function definePage(input: PageInput): DocPageContent {
  return { ...input, slug: input.slug };
}
