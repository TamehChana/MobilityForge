import { DocsLayout } from "@/components/layout/DocsLayout";

export default function DocsRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayout>{children}</DocsLayout>;
}
