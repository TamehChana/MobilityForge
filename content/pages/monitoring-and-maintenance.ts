import { definePage } from "./define-page";

export const monitoringAndMaintenance = definePage({
  slug: "monitoring-and-maintenance",
  title: "Monitoring and Maintenance",
  description: "Post-launch crashes, errors, and continuous improvement.",
  intro:
    "Work does not end at release. Monitor crashes, failed logins, API errors, and payment failures, then fix, patch, and document.",
  whyItMatters:
    "A weak team waits for complaints. A strong team detects issues early with Sentry, Crashlytics, backend logs, and analytics.",
  howToApply: [
    {
      heading: "Tools",
      body: "Sentry, Firebase Crashlytics, Expo logs, backend/API logs, uptime monitoring. Review after every release.",
    },
  ],
  commonMistakes: [
    "No monitoring configured",
    "Ignoring crash spikes after a release",
    "Never updating dependencies",
  ],
  checklist: [
    {
      title: "Monitoring checklist",
      items: [
        "Crash reporting enabled",
        "Alerts for error spikes",
        "Backend logs accessible",
        "Post-release review scheduled",
      ],
    },
  ],
});
