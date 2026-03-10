export interface ServiceBriefData {
  title: string;
  tagline: string;
  intro: string;
  outcomes: string[];
  scope: Array<{
    problem: string;
    outcome: string;
  }>;
  deliverables: {
    core: string[];
    controls: string[];
    reporting: string[];
  };
  bestFit: Array<{
    label: string;
    note: string;
    examples: string[];
  }>;
  workflows: Array<{
    name: string;
    steps: string[];
  }>;
  proof?: {
    items: Array<{
      title: string;
      description: string;
      href: string;
    }>;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
    href: string;
  };
}
