export type CaseMetric = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  impact: string;
  category: string;
  description: string;
  metrics: CaseMetric[];
  color: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "global-fintech-modernization",
    title: "Global FinTech Modernization",
    client: "Nexus Capital",
    impact: "40% Latency Reduction",
    category: "Distributed Systems",
    description:
      "Architected a high-frequency trading platform using Rust and gRPC. We migrated legacy monolithic systems to a globally distributed microservices mesh.",
    metrics: [
      { label: "Throughput", value: "+250%" },
      { label: "Cost Saving", value: "32% p.a." },
      { label: "Reliability", value: "99.999%" },
    ],
    color: "from-blue-500 to-indigo-600",
    image: "/images/cons.png",
    overview:
      "A global trading organization needed to reduce order latency while improving reliability across regions.",
    challenge:
      "Legacy monoliths created bottlenecks, inconsistent regional performance, and high operational costs.",
    solution:
      "We decomposed the platform into domain services, introduced event streaming, and deployed edge-aware routing with global observability.",
    results: [
      "Order processing times dropped by 40% across peak volumes.",
      "Reliability hit five nines with multi-region failover.",
      "Infrastructure spend reduced by 32% year-over-year.",
    ],
    tech: ["Rust", "gRPC", "Kafka", "Kubernetes", "OpenTelemetry"],
  },
  {
    slug: "agentic-ai-healthcare-triage",
    title: "Agentic AI Healthcare Triage",
    client: "BioSync Health",
    impact: "98% Triage Accuracy",
    category: "Agentic AI",
    description:
      "Developed a multi-agent system that autonomously analyzes patient symptoms and medical history to provide instant, high-precision triage recommendations.",
    metrics: [
      { label: "Wait Time", value: "-85%" },
      { label: "Agent Success", value: "92%" },
      { label: "Compliance", value: "HIPAA/SOC2" },
    ],
    color: "from-violet-500 to-purple-600",
    image: "/images/aa.jpg",
    overview:
      "A digital health provider wanted a scalable triage assistant to reduce patient wait times.",
    challenge:
      "Clinical workflows were slow, and the team needed auditable AI decisions within strict compliance constraints.",
    solution:
      "We built a tool-using multi-agent flow with evaluation pipelines, guardrails, and clinician override paths.",
    results: [
      "Triage accuracy reached 98% within four weeks.",
      "Average wait time dropped by 85% across pilot clinics.",
      "Auditable trails satisfied HIPAA and SOC2 requirements.",
    ],
    tech: ["LangGraph", "OpenAI", "Vector DB", "FastAPI", "SOC2 Controls"],
  },
  {
    slug: "logistics-edge-intelligence",
    title: "Logistics Edge Intelligence",
    client: "SwiftTrack Global",
    impact: "Real-time Fleet Opt.",
    category: "Cloud Native",
    description:
      "Implemented a massive-scale IoT platform processing 1M+ events per second at the edge, reducing central cloud processing costs significantly.",
    metrics: [
      { label: "Nodes", value: "10k+" },
      { label: "Data Delay", value: "<50ms" },
      { label: "Fuel Eff.", value: "+12%" },
    ],
    color: "from-emerald-500 to-teal-600",
    image: "/images/lina.jpg",
    overview:
      "A logistics provider needed real-time routing intelligence without ballooning cloud spend.",
    challenge:
      "Centralized processing could not keep pace with fleet telemetry while meeting latency SLAs.",
    solution:
      "We deployed edge compute nodes with streaming inference and built a cloud control plane for orchestration.",
    results: [
      "Event processing latency dropped below 50ms globally.",
      "Fuel efficiency increased by 12% across pilot fleets.",
      "Cloud compute costs reduced by double digits.",
    ],
    tech: ["Edge Runtime", "Kafka", "Kubernetes", "Rust", "Terraform"],
  },
];

export const caseSlugs = caseStudies.map((study) => study.slug);

export const getCaseBySlug = (slug: string) =>
  caseStudies.find((study) => study.slug === slug);
