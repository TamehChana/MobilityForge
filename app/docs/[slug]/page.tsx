import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { DocPage } from "@/components/docs/DocPage";
import { getDocPage, getAllDocSlugs } from "@/content/pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) return { title: "Not Found" };
  return {
    title: page.title,
    description: page.description,
  };
}

export default async function DocSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getDocPage(slug);
  if (!page) notFound();
  return <DocPage page={page} slug={slug} />;
}
