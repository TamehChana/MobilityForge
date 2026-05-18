import type { DocPageContent } from "@/types/docs";
import { enrichPage } from "@/content/universal-metadata";
import { getPageCodeExamples } from "@/content/page-code-examples";
import { startHere } from "./start-here";
import { adoptThisPlaybook } from "./adopt-this-playbook";
import { mobileEngineering2026 } from "./mobile-engineering-2026";
import { recommendedStack } from "./recommended-stack";
import { designWorkflow } from "./design-workflow";
import { figmaAndFigmaAi } from "./figma-and-figma-ai";
import { cleanArchitecture } from "./clean-architecture";
import { folderStructure } from "./folder-structure";
import { reusableComponents } from "./reusable-components";
import { apiIntegration } from "./api-integration";
import { authenticationAndAuthorization } from "./authentication-and-authorization";
import { stateManagement } from "./state-management";
import { securityChecklist } from "./security-checklist";
import { testingChecklist } from "./testing-checklist";
import { gitWorkflow } from "./git-workflow";
import { cicdAndReleaseManagement } from "./cicd-and-release-management";
import { monitoringAndMaintenance } from "./monitoring-and-maintenance";
import { teamCollaboration } from "./team-collaboration";
import { projectDocumentationTemplate } from "./project-documentation-template";
import { organizationAdoptionPlan } from "./organization-adoption-plan";

const RAW_PAGES: Record<string, DocPageContent> = {
  [startHere.slug]: startHere,
  [adoptThisPlaybook.slug]: adoptThisPlaybook,
  [mobileEngineering2026.slug]: mobileEngineering2026,
  [recommendedStack.slug]: recommendedStack,
  [designWorkflow.slug]: designWorkflow,
  [figmaAndFigmaAi.slug]: figmaAndFigmaAi,
  [cleanArchitecture.slug]: cleanArchitecture,
  [folderStructure.slug]: folderStructure,
  [reusableComponents.slug]: reusableComponents,
  [apiIntegration.slug]: apiIntegration,
  [authenticationAndAuthorization.slug]: authenticationAndAuthorization,
  [stateManagement.slug]: stateManagement,
  [securityChecklist.slug]: securityChecklist,
  [testingChecklist.slug]: testingChecklist,
  [gitWorkflow.slug]: gitWorkflow,
  [cicdAndReleaseManagement.slug]: cicdAndReleaseManagement,
  [monitoringAndMaintenance.slug]: monitoringAndMaintenance,
  [teamCollaboration.slug]: teamCollaboration,
  [projectDocumentationTemplate.slug]: projectDocumentationTemplate,
  [organizationAdoptionPlan.slug]: organizationAdoptionPlan,
};

function enrichFull(page: DocPageContent): DocPageContent {
  const withMeta = enrichPage(page);
  if (withMeta.codeExamples?.length) return withMeta;
  const examples = getPageCodeExamples(withMeta.slug);
  return examples ? { ...withMeta, codeExamples: examples } : withMeta;
}

export const DOC_PAGES: Record<string, DocPageContent> = Object.fromEntries(
  Object.entries(RAW_PAGES).map(([slug, page]) => [slug, enrichFull(page)]),
);

export function getDocPage(slug: string): DocPageContent | undefined {
  return DOC_PAGES[slug];
}

export function getAllDocSlugs(): string[] {
  return Object.keys(DOC_PAGES);
}
