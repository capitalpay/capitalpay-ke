import { ServiceBriefData } from "@/components/services/ServiceBrief.types";

export const SERVICE_DATA: Record<string, ServiceBriefData> = {
  paymentAggregation: {
    title: "Payments & Collection Engine",
    tagline: "Collect once. Route anywhere.",
    intro:
      "We build the collection layer for ecosystems with many payers, fees, and references.",
    outcomes: [
      "Standardised collections across channels",
      "Lower mismatch and dispute rates",
      "Clear settlement reporting and audit trails",
    ],
    scope: [
      {
        problem: "Fragmented collections across banks, portals, and cash",
        outcome: "One standard collection layer with unified references",
      },
      {
        problem: "Unstructured references cause payment mismatches",
        outcome: "Reliable invoice-to-payment matching and lower disputes",
      },
      {
        problem: "Manual follow-ups and reconciliation overhead",
        outcome: "Automated matching with exception workflows",
      },
      {
        problem: "Leakage risk from cash handling",
        outcome: "Digital collection with complete audit trails",
      },
    ],
    deliverables: {
      core: [
        "Standardised invoices and references",
        "Multi-rail payment collection",
        "Receipts and payer notifications",
        "Configurable fee rules",
      ],
      controls: [
        "Reference validation",
        "Duplicate payment prevention",
        "Role-based approvals (optional)",
        "Dispute-ready transaction logs",
      ],
      reporting: [
        "Collection reporting by channel",
        "Settlement statements",
        "Audit-ready exports",
        "Exception dashboards",
      ],
    },
    bestFit: [
      {
        label: "Associations",
        note: "Membership fees, renewals, and levies.",
        examples: ["Annual membership fees", "Event registrations", "Service charges"],
      },
      {
        label: "Government collections",
        note: "Regulated fees and public payments.",
        examples: ["Permit fees", "License renewals", "Public service charges"],
      },
      {
        label: "Private operators",
        note: "High-volume service charges.",
        examples: ["Utility payments", "Logistics fees", "Trade corridor charges"],
      },
    ],
    workflows: [
      {
        name: "Member fees & renewals",
        steps: [
          "Invoice issued with unique reference",
          "Payment collected via approved rails",
          "Auto-reconciled to member account",
          "Receipt generated + reporting updated",
        ],
      },
      {
        name: "Permit / levy collections",
        steps: [
          "Fee created with validation rules",
          "Reference verified at payment",
          "Payment matched to permit record",
          "Settlement recorded for oversight",
        ],
      },
      {
        name: "High-volume charges",
        steps: [
          "Bulk invoicing with references",
          "Multi-channel collection",
          "Exception handling for mismatches",
          "Settlement statements generated",
        ],
      },
    ],
    cta: {
      title: "Ready to discuss your collection needs?",
      subtitle: "We'll map your flows and recommend a deployment path.",
      button: "Contact Kenya",
      href: "/contact",
    },
  },

  reconciliationSettlement: {
    title: "Reconciliation & Settlement Infrastructure",
    tagline: "Every payment matched.",
    intro:
      "We automate reconciliation and settlement so funds move correctly, with full traceability.",
    outcomes: [
      "Automated invoice-to-payment matching",
      "Faster settlement to stakeholders",
      "Complete audit trails for oversight",
    ],
    scope: [
      {
        problem: "Unmatched payments cause disputes and delays",
        outcome: "Automated matching with exception workflows",
      },
      {
        problem: "Manual settlement processes slow fund distribution",
        outcome: "Real-time or scheduled settlement to configured recipients",
      },
      {
        problem: "Spreadsheet reconciliation is error-prone",
        outcome: "Ledger-style audit trails with full transaction history",
      },
      {
        problem: "No visibility into outstanding or mismatched transactions",
        outcome: "Reconciliation dashboards with exception alerts",
      },
    ],
    deliverables: {
      core: [
        "Automated invoice ↔ payment matching",
        "Exception handling workflows",
        "Real-time or scheduled settlement",
        "Multi-party settlement routing",
      ],
      controls: [
        "Settlement approval workflows",
        "Refunds and reversals tracking",
        "Hold and release logic",
        "Settlement limits and rules",
      ],
      reporting: [
        "Settlement reporting",
        "Stakeholder statements",
        "Ledger-style audit trails",
        "Reconciliation health dashboards",
      ],
    },
    bestFit: [
      {
        label: "Ecosystem operators",
        note: "Managing settlement across multiple parties.",
        examples: ["Trade platforms", "Logistics operators", "Clearing agents"],
      },
      {
        label: "Associations",
        note: "Distributing funds to members or chapters.",
        examples: ["Revenue sharing", "Grant distribution", "Fee allocation"],
      },
      {
        label: "Multi-party platforms",
        note: "Settlement with complex routing.",
        examples: ["Marketplace settlement", "Commission splits", "Escrow release"],
      },
    ],
    workflows: [
      {
        name: "Split settlement",
        steps: [
          "Payment matched to invoice",
          "Settlement rules applied",
          "Funds routed to multiple recipients",
          "Statements generated for all parties",
        ],
      },
      {
        name: "Refunds tracking",
        steps: [
          "Refund request initiated",
          "Original transaction linked",
          "Reversal processed",
          "Audit trail updated",
        ],
      },
      {
        name: "Reconciliation reporting",
        steps: [
          "Daily reconciliation run",
          "Exceptions flagged",
          "Resolution workflows triggered",
          "Monthly audit report generated",
        ],
      },
    ],
    cta: {
      title: "Need reconciliation infrastructure?",
      subtitle: "Let's discuss how we can automate your settlement flows.",
      button: "Contact Kenya",
      href: "/contact",
    },
  },

  complianceControls: {
    title: "Compliance, Validation & Controls",
    tagline: "Rules built in.",
    intro:
      "We embed eligibility, approval, and compliance logic into the payment flow.",
    outcomes: [
      "Automated compliance checks before settlement",
      "Role-based approvals and policy enforcement",
      "Audit-ready records for oversight",
    ],
    scope: [
      {
        problem: "Payments processed by ineligible entities",
        outcome: "Pre-settlement accreditation and membership validation",
      },
      {
        problem: "Weak enforcement of standards and policies",
        outcome: "Policy-based routing with automated holds",
      },
      {
        problem: "No audit trail for approvals and decisions",
        outcome: "Structured approval workflows with full history",
      },
      {
        problem: "Non-compliance discovered after settlement",
        outcome: "Real-time validation with compliance dashboards",
      },
    ],
    deliverables: {
      core: [
        "Eligibility / accreditation checks",
        "Entity verification and status lookup",
        "Policy-based routing and holds",
        "Pre-settlement validation gates",
      ],
      controls: [
        "Role-based approval workflows",
        "Multi-level authorization",
        "Compliance flags and alerts",
        "Settlement holds and release",
      ],
      reporting: [
        "Compliance-ready records",
        "Oversight dashboards",
        "Approval history and audit logs",
        "Exception and violation reports",
      ],
    },
    bestFit: [
      {
        label: "Regulated ecosystems",
        note: "Where compliance is mandatory.",
        examples: [
          "Licensed operators",
          "Accredited service providers",
          "Regulated trade networks",
        ],
      },
      {
        label: "Associations",
        note: "Managing member standards.",
        examples: [
          "Membership verification",
          "Code of conduct enforcement",
          "Fee eligibility checks",
        ],
      },
      {
        label: "Government-adjacent",
        note: "Public sector payment systems.",
        examples: [
          "Permit validation",
          "License verification",
          "Regulated service payments",
        ],
      },
    ],
    workflows: [
      {
        name: "Accreditation gates",
        steps: [
          "Payment initiated with entity ID",
          "Accreditation status verified",
          "Policy checks applied",
          "Settlement approved or held",
        ],
      },
      {
        name: "Pre-settlement approval",
        steps: [
          "Payment matched to invoice",
          "Approval workflow triggered",
          "Authorized user reviews",
          "Settlement released or escalated",
        ],
      },
      {
        name: "Compliance reporting",
        steps: [
          "Transactions logged with compliance data",
          "Exceptions flagged in real-time",
          "Monthly compliance report generated",
          "Audit-ready records archived",
        ],
      },
    ],
    proof: {
      items: [
        {
          title: "Clearing & forwarding digitisation",
          description:
            "Centralised payment, compliance, and settlement infrastructure for Kenya's clearing and forwarding industry.",
          href: "/about",
        },
      ],
    },
    cta: {
      title: "Need compliance controls?",
      subtitle:
        "Let's discuss how we can build validation and oversight into your payment flow.",
      button: "Contact Kenya",
      href: "/contact",
    },
  },

  reportingIntegrations: {
    title: "Reporting, Oversight & Integrations",
    tagline: "One source of truth.",
    intro:
      "We provide visibility across collections, reconciliation, and compliance — and integrate into your stack.",
    outcomes: [
      "Unified reporting across all payment channels",
      "Audit-ready exports and dashboards",
      "Seamless integration to registries and ERPs",
    ],
    scope: [
      {
        problem: "Data scattered across channels with no unified view",
        outcome: "Single operational dashboard for all payment activity",
      },
      {
        problem: "Weak audit readiness with manual exports",
        outcome: "Automated audit logs and compliance-ready exports",
      },
      {
        problem: "Manual reporting to stakeholders",
        outcome: "Scheduled stakeholder reports and performance tracking",
      },
      {
        problem: "Payment data isolated from registries and ERPs",
        outcome: "Secure API integration to existing systems",
      },
    ],
    deliverables: {
      core: [
        "Operational dashboards",
        "Real-time payment tracking",
        "Exception and alert monitoring",
        "System status and health checks",
      ],
      controls: [
        "Secure APIs + webhooks",
        "Reference validation endpoints",
        "Entity lookup integration",
        "Custom report generation",
      ],
      reporting: [
        "Audit exports and logs",
        "Stakeholder performance reporting",
        "Compliance reporting",
        "Settlement statement generation",
      ],
    },
    bestFit: [
      {
        label: "Operators & oversight",
        note: "Running high-volume payment systems.",
        examples: [
          "Operational monitoring",
          "Performance tracking",
          "Compliance oversight",
        ],
      },
      {
        label: "Finance teams",
        note: "Boards and financial controllers.",
        examples: [
          "Monthly financial reports",
          "Settlement reconciliation",
          "Audit preparation",
        ],
      },
      {
        label: "Regulators",
        note: "Where applicable.",
        examples: [
          "Regulatory reporting",
          "Compliance audits",
          "System oversight",
        ],
      },
    ],
    workflows: [
      {
        name: "Monthly audit reporting",
        steps: [
          "Month-end reconciliation run",
          "Audit logs generated",
          "Reports exported for review",
          "Archive for compliance records",
        ],
      },
      {
        name: "Stakeholder reporting",
        steps: [
          "Performance data aggregated",
          "Statements generated per stakeholder",
          "Reports distributed automatically",
          "Dashboard updated in real-time",
        ],
      },
      {
        name: "System integrations",
        steps: [
          "API endpoints configured",
          "Reference validation connected",
          "Webhooks for real-time updates",
          "Registry lookup integrated",
        ],
      },
    ],
    cta: {
      title: "Need reporting and integrations?",
      subtitle:
        "Let's discuss how we can connect your payment infrastructure to your systems.",
      button: "Contact Kenya",
      href: "/contact",
    },
  },
};
