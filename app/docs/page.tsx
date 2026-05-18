import { redirect } from "next/navigation";
import { FIRST_DOC_SLUG } from "@/content/navigation";

export default function DocsIndexPage() {
  redirect(`/docs/${FIRST_DOC_SLUG}`);
}
