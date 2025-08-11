import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion'
import { 
  ArrowRight, 
  Target, 
  Shield, 
  BarChart3, 
  TrendingUp, 
  Building2,
  Users,
  Globe,
  Zap,
  CheckCircle,
  Quote
} from 'lucide-react'
import EmailCapturePhp from '../components/EmailCapturePhp'
import SEO from '../components/SEO'
import Header from '../components/Header'
import healthcareHero from '../assets/industries/healthcare-hero.svg'

export default function Healthcare() {
  // Problem → Outcome data
  const problemOutcomes = [
    {
      problem: "Pilot sprawl without clinical validation",
      outcome: "Evidence-based maturity baseline and prioritized roadmap",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      problem: "Regulatory & data privacy complexity",
      outcome: "Audit-ready governance scoring and documentation",
      icon: <Shield className="h-6 w-6" />
    },
    {
      problem: "Siloed EHR and claims data",
      outcome: "Data readiness and lineage for AI use cases",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      problem: "Throughput and staffing pressure",
      outcome: "Workflow automation and decision support with controls",
      icon: <Target className="h-6 w-6" />
    },
    {
      problem: "Bias and safety concerns",
      outcome: "Transparent model documentation, monitoring, and human oversight",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      problem: "Unclear ROI",
      outcome: "KPIs tied to clinical, operational, and financial goals",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  // How it works steps
  const howItWorks = [
    {
      step: 1,
      title: "Assess",
      description: "with AIMM-360 across governance, clinical safety, data, workflow, and workforce.",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      step: 2,
      title: "Benchmark",
      description: "with InsightIQ to compare hospitals, service lines, and peer cohorts.",
      icon: <Target className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Govern",
      description: "with TrustIQ to align to health privacy, safety, and AI risk policies with evidence.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      step: 4,
      title: "Execute",
      description: "with ActionIQ & track with PlanIQ for measurable outcomes and readiness for audits.",
      icon: <TrendingUp className="h-8 w-8" />
    }
  ]

  // Module details
  const modules = [
    {
      name: "InsightIQ",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Assessment & Benchmarking",
      description: "Measures readiness across clinical governance, data quality, workflow integration, and adoption.",
      useCases: [
        "Compare maturity across hospitals/departments",
        "Prioritize use cases by safety, ROI, and complexity",
        "Guide sourcing and vendor selection"
      ]
    },
    {
      name: "TrustIQ",
      icon: <Shield className="h-8 w-8" />,
      title: "Governance & Compliance",
      description: "Configurable scoring, evidence tracking, and framework crosswalks with stale-evidence penalties.",
      useCases: [
        "Privacy & security (HIPAA/HITECH) documentation and monitoring",
        "Model approvals and change logs for clinical decision support",
        "Vendor evaluation and ongoing oversight"
      ]
    },
    {
      name: "ActionIQ",
      icon: <Target className="h-8 w-8" />,
      title: "Roadmaps & SOWs",
      description: "Dependency-aware, budget-constrained plans with RACI, tailored to clinical and operational priorities.",
      useCases: [
        "Care management & throughput programs",
        "Coding/denials automation; prior auth optimization",
        "Imaging AI rollout with governance guardrails"
      ]
    },
    {
      name: "PlanIQ",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "KPIs & Transformation Tracking",
      description: "Converts plans into KPIs and milestones; overlays governance compliance.",
      useCases: [
        "Monitor LOS, readmissions, denials, turnaround times",
        "Track adoption, training, and safety outcomes",
        "Executive dashboards for board/quality committees"
      ]
    }
  ]

  // Use cases
  const useCases = [
    "Clinical Operations & Throughput: Bed management, OR scheduling, patient flow predictions",
    "Imaging & Diagnostics: Triage/prioritization support with documented oversight and limitations",
    "Care Management & Population Health: Risk stratification, outreach prioritization",
    "Revenue Cycle & Coding: Document AI, CDI, denials prevention and appeals",
    "Patient Access & Experience: Virtual assistants, self-service scheduling, contact center copilots",
    "Quality & Safety Analytics: Event detection, bias checks, explainability documentation",
    "Supply Chain: Demand forecasting, inventory optimization, device utilization",
    "Workforce Enablement: Clinical documentation support, knowledge retrieval, training"
  ]

  // Framework alignment
  const frameworks = [
    {
      framework: "HIPAA / HITECH",
      checks: "Privacy, security, access controls, audit logs",
      evidence: "Risk assessments, BAAs, access reports"
    },
    {
      framework: "ONC / CMS guidance",
      checks: "Interoperability, data use, auditability",
      evidence: "FHIR/HL7 conformance, API logs"
    },
    {
      framework: "FDA (SaMD, where applicable)",
      checks: "Safety, validation, post-market surveillance",
      evidence: "Validation protocols, change control"
    },
    {
      framework: "NIST AI RMF / NIST 800-53/66",
      checks: "Risk management, controls, documentation",
      evidence: "Policies, control mappings, logs"
    },
    {
      framework: "21 CFR Part 11 (where applicable)",
      checks: "Electronic records/signatures controls",
      evidence: "Audit trails, validation, SOPs"
    },
    {
      framework: "State privacy/consumer acts",
      checks: "Data rights, consent, retention",
      evidence: "DPIAs, consent/audit logs"
    }
  ]

  // Outcomes
  const outcomes = [
    { metric: "Length of stay / throughput", change: "↓", description: "illustrative" },
    { metric: "Denials & rework", change: "↓", description: "illustrative" },
    { metric: "Time-to-triage / turnaround", change: "↓", description: "illustrative" },
    { metric: "Patient and clinician satisfaction", change: "↑", description: "illustrative" },
    { metric: "Evidence freshness & governance coverage", change: "↑", description: "illustrative" },
    { metric: "Pilot-to-production conversion", change: "↑", description: "illustrative" }
  ]

  // FAQs
  const faqs = [
    {
      question: "How do you ensure privacy and clinical safety?",
      answer: "TrustIQ aligns governance and evidence to HIPAA/HITECH and clinical oversight practices, with configurable thresholds."
    },
    {
      question: "How does SynergyIQ integrate with EHRs and health data platforms?",
      answer: "Vendor-agnostic patterns for HL7/FHIR, imaging systems, claims, and data lakes/warehouses."
    },
    {
      question: "What roles participate in the assessment?",
      answer: "Clinical leadership, Quality/Safety, Compliance/Privacy, IT/Data/AI, Operations, and Finance."
    },
    {
      question: "Can we benchmark across hospitals or service lines?",
      answer: "Yes—InsightIQ supports internal and peer cohort comparisons."
    },
    {
      question: "How are imaging and clinical decision support tools governed?",
      answer: "Model registry, approvals, change logs, and monitoring with documented limitations and human oversight."
    },
    {
      question: "What's the path to early wins?",
      answer: "Rapid baseline → 1–3 high-value use cases → governance & KPI instrumentation → scale."
    },
    {
      question: "Do you support payer use cases as well?",
      answer: "Yes—claims triage, prior auth, fraud/waste/abuse analytics, care management."
    }
  ]

  // Testimonials
  const testimonials = [
    {
      quote: "We operationalized AI with clinical governance we can trust.",
      role: "Chief Medical Officer",
      organization: "Academic Medical Center"
    },
    {
      quote: "Revenue cycle automation with clear guardrails improved consistency.",
      role: "VP Revenue Cycle",
      organization: "Health System"
    },
    {
      quote: "Board oversight improved with transparent KPIs and evidence.",
      role: "Chief Quality Officer",
      organization: "Hospital Network"
    }
  ]

  return (
    <>
      <SEO 
        title="Healthcare | SynergyIQ by SynergyPartners.AI"
        description="Accelerate responsible AI adoption in healthcare with SynergyIQ—clinical governance, privacy compliance, and transformation roadmaps."
        keywords={['healthcare AI', 'health system AI', 'clinical AI', 'HIPAA compliance', 'healthcare transformation']}
        image="/og-image.jpg"
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <Badge className="mb-4">Healthcare AI Platform</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Accelerate Responsible AI in <span className="text-primary">Healthcare</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-4xl lg:max-w-none leading-relaxed">
                  SynergyIQ helps provider and payer organizations baseline AI maturity, align with clinical and data governance requirements, and execute roadmaps that turn pilots into safe, compliant, and measurable outcomes.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <img 
                  src={healthcareHero} 
                  alt="Healthcare AI Transformation"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem → Outcome Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                From <span className="text-primary">Problems</span> to <span className="text-primary">Outcomes</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform healthcare AI challenges into measurable, safe, and compliant success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {problemOutcomes.map((item, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {item.icon}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-sm font-medium text-muted-foreground">
                        {item.problem}
                      </div>
                      <div className="text-lg font-semibold text-foreground">
                        {item.outcome}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How SynergyIQ Works Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                How <span className="text-primary">SynergyIQ</span> Works in Healthcare
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to healthcare AI transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-4 bg-primary/10 rounded-full text-primary">
                      {step.icon}
                    </div>
                  </div>
                  <div className="mb-3">
                    <Badge variant="secondary" className="text-sm">
                      Step {step.step}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Module Deep-Dive Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                <span className="text-primary">SynergyIQ</span> Modules for Healthcare
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four integrated modules that work together to deliver healthcare AI transformation
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {module.icon}
                      </div>
                      <Badge variant="secondary">{module.name}</Badge>
                    </div>
                    <CardTitle className="text-xl">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {module.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Healthcare use cases:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {module.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Healthcare AI Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Healthcare AI <span className="text-primary">Use Cases</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive AI solutions that drive value across all healthcare functions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <Zap className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Framework & Compliance Alignment Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Framework & <span className="text-primary">Compliance</span> Alignment
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                TrustIQ supports alignment to recognized frameworks and provides audit-ready documentation
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-4 font-semibold text-foreground">Framework / Policy</th>
                    <th className="text-left p-4 font-semibold text-foreground">What TrustIQ checks</th>
                    <th className="text-left p-4 font-semibold text-foreground">Typical Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {frameworks.map((framework, index) => (
                    <tr key={index} className="border-b border-border/50 hover:bg-muted/30">
                      <td className="p-4 font-medium text-foreground">{framework.framework}</td>
                      <td className="p-4 text-muted-foreground">{framework.checks}</td>
                      <td className="p-4 text-muted-foreground">{framework.evidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                <em>TrustIQ provides alignment support and audit-ready documentation, not certification. Organizations configure weights, thresholds, and evidence definitions per local policy.</em>
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes & Metrics Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                <span className="text-primary">Outcomes</span> & Metrics
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Measurable improvements that demonstrate healthcare AI transformation success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {outcomes.map((outcome, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {outcome.change}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {outcome.metric}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      <em>{outcome.description}</em>
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                <em>Specific results vary by organizational context and implementation approach.</em>
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions about implementing SynergyIQ in healthcare
              </p>
            </div>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border">
                  <AccordionTrigger className="px-6 py-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Proof & Social */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Trusted by Healthcare Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how healthcare organizations are transforming their AI capabilities with SynergyIQ
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Quote className="h-8 w-8 text-primary mx-auto" />
                    </div>
                    <p className="text-muted-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.organization}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Strong CTA */}
        <section id="contact" className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to scale safe, responsible AI across your health system?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a Demo to see your path forward
            </p>
            
            <EmailCapturePhp source="healthcare-page" />
          </div>
        </section>
      </div>
    </>
  )
}
