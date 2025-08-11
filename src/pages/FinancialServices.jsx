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
import financialServicesHero from '../assets/industries/financial-services-hero.svg'

export default function FinancialServices() {
  // Problem → Outcome data
  const problemOutcomes = [
    {
      problem: "Fragmented AI pilots across lines of business",
      outcome: "Unified maturity baseline and portfolio strategy",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      problem: "Model risk & regulatory pressure",
      outcome: "Audit-ready governance scoring and model documentation",
      icon: <Shield className="h-6 w-6" />
    },
    {
      problem: "Data silos & lineage gaps",
      outcome: "Enterprise data readiness with traceability",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      problem: "Fraud & financial crime complexity",
      outcome: "AI-enabled detection with governed deployment",
      icon: <Target className="h-6 w-6" />
    },
    {
      problem: "Unclear AI ROI",
      outcome: "Prioritized roadmaps with budget guardrails and KPIs",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      problem: "Third-party/vendor risk",
      outcome: "Standardized onboarding, monitoring, and evidence",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  // How it works steps
  const howItWorks = [
    {
      step: 1,
      title: "Assess",
      description: "with AIMM-360 across risk, data, controls, use cases, and skills.",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      step: 2,
      title: "Benchmark",
      description: "with InsightIQ across LOBs and peers.",
      icon: <Target className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Govern",
      description: "with TrustIQ to align to model risk and regulatory guidance with evidence.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      step: 4,
      title: "Execute",
      description: "with ActionIQ & track with PlanIQ for measurable outcomes and board-ready reporting.",
      icon: <TrendingUp className="h-8 w-8" />
    }
  ]

  // Module details
  const modules = [
    {
      name: "InsightIQ",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Assessment & Benchmarking",
      description: "Measures readiness across governance, data, modeling, controls, and adoption.",
      useCases: [
        "Compare maturity across Retail, Commercial, Wealth, Claims, Underwriting",
        "Sequence investments for fraud, CX, and risk analytics",
        "Make/buy/vendor rationalization"
      ]
    },
    {
      name: "TrustIQ",
      icon: <Shield className="h-8 w-8" />,
      title: "Governance & Compliance",
      description: "Configurable governance scoring with evidence tracking, stale-evidence penalties, and framework crosswalks.",
      useCases: [
        "Model inventory, approvals, monitoring (incl. genAI)",
        "SR 11-7 model risk alignment and documentation",
        "Third-party AI vendor assessments and ongoing monitoring"
      ]
    },
    {
      name: "ActionIQ",
      icon: <Target className="h-8 w-8" />,
      title: "Roadmaps & SOWs",
      description: "Dependency-aware, budget-constrained plans with RACI from assessment results.",
      useCases: [
        "Fraud & AML roadmap; underwriting automation; collections optimization",
        "Customer intelligence and personalization programs",
        "Data platform modernization (feature stores, lineage)"
      ]
    },
    {
      name: "PlanIQ",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "KPIs & Transformation Tracking",
      description: "Converts plans into trackable KPIs and milestones with governance overlay.",
      useCases: [
        "Monitor false-positive/negative rates, loss avoidance, approval cycle times",
        "Evidence freshness and control coverage",
        "Executive/board-level dashboards"
      ]
    }
  ]

  // Use cases
  const useCases = [
    "Fraud, AML, and Financial Crime: Transaction monitoring, network analytics, case prioritization",
    "Credit Risk & Underwriting: Alternative data, explainability, bias checks, decision transparency",
    "Claims (Insurance): Triage, document AI, FNOL automation, leakage reduction",
    "Customer Intelligence & Personalization: Next-best-offer, churn prediction, journey analytics",
    "Operations & Cost: Document processing, reconciliations, KYC refresh, call-center copilots",
    "Treasury & Trading: Signal discovery, surveillance alerts, scenario stress testing",
    "Regulatory Reporting: Evidence gathering, lineage, automated workflow and attestations",
    "GenAI Enablement: Policy-aligned copilots with logging, guardrails, and human oversight"
  ]

  // Framework alignment
  const frameworks = [
    {
      framework: "SR 11-7 (Model Risk Management)",
      checks: "Inventory, validation, monitoring, governance",
      evidence: "Model cards, validation reports, approvals"
    },
    {
      framework: "FFIEC / OCC / PRA/FCA (as applicable)",
      checks: "Risk governance, controls, documentation",
      evidence: "Policies, risk registers, testing logs"
    },
    {
      framework: "SOX / SOC 2 / ISO 27001",
      checks: "Controls, access, monitoring",
      evidence: "Audit reports, access logs"
    },
    {
      framework: "GDPR / CCPA / GLBA",
      checks: "Privacy, lawful basis, retention, minimization",
      evidence: "DPIAs, consent logs, data catalogs"
    },
    {
      framework: "PCI DSS (payments)",
      checks: "Cardholder data protection and process controls",
      evidence: "PCI attestation, network & access reports"
    },
    {
      framework: "FINRA / SEC (capital markets)",
      checks: "Supervision, surveillance, record-keeping",
      evidence: "Supervision logs, trade surveillance artifacts"
    }
  ]

  // Outcomes
  const outcomes = [
    { metric: "False positives (fraud/AML)", change: "↓", description: "illustrative" },
    { metric: "Loss avoidance / recoveries", change: "↑", description: "illustrative" },
    { metric: "Underwriting cycle time", change: "↓", description: "illustrative" },
    { metric: "Customer satisfaction / NPS", change: "↑", description: "illustrative" },
    { metric: "Evidence freshness & governance coverage", change: "↑", description: "illustrative" },
    { metric: "Pilot-to-production conversion", change: "↑", description: "illustrative" }
  ]

  // FAQs
  const faqs = [
    {
      question: "How does SynergyIQ address model risk for AI and genAI?",
      answer: "TrustIQ maps governance and evidence to model lifecycle controls, including monitoring and change management."
    },
    {
      question: "Can we integrate with existing data platforms and case systems?",
      answer: "Yes—vendor-agnostic patterns for lakes/warehouses, case tools, and CRM/claims systems."
    },
    {
      question: "How are privacy and explainability handled?",
      answer: "Institutions configure evidence requirements (e.g., DPIAs, explainability reports) and thresholds per use case."
    },
    {
      question: "What roles participate in the assessment?",
      answer: "Risk, Compliance, Credit/Underwriting, Fraud/AML, Ops, Data/AI, and Business leaders."
    },
    {
      question: "Can we benchmark across regions and LOBs?",
      answer: "InsightIQ supports internal benchmarks and peer cohorts."
    },
    {
      question: "How quickly do we see value?",
      answer: "Rapid baseline → prioritized roadmap → pilot(s) with governance and KPIs in early phases."
    },
    {
      question: "Do you support third-party AI vendors?",
      answer: "Yes—onboarding checks, periodic reviews, and monitoring."
    }
  ]

  // Testimonials
  const testimonials = [
    {
      quote: "We finally unified model risk governance across AI and genAI.",
      role: "Chief Risk Officer",
      organization: "Global Financial Services"
    },
    {
      quote: "Fraud alerts are now prioritized with clear evidence trails.",
      role: "Head of Fraud",
      organization: "Major Bank"
    },
    {
      quote: "Board reporting improved with portfolio-level KPIs.",
      role: "CFO",
      organization: "Insurance Company"
    }
  ]

  return (
    <>
      <SEO 
        title="Financial Services | SynergyIQ by SynergyPartners.AI"
        description="Accelerate responsible AI adoption in financial services with SynergyIQ—model risk governance, regulatory compliance, and transformation roadmaps."
        keywords={['financial services AI', 'banking AI', 'insurance AI', 'model risk management', 'regulatory compliance']}
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
                <Badge className="mb-4">Financial Services AI Platform</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Accelerate Responsible AI in <span className="text-primary">Financial Services</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-4xl lg:max-w-none leading-relaxed">
                  SynergyIQ helps financial institutions baseline AI maturity, align with regulatory and compliance requirements, and execute roadmaps that turn pilots into safe, compliant, and measurable outcomes.
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
                  src={financialServicesHero} 
                  alt="Financial Services AI Transformation"
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
                Transform financial services AI challenges into measurable, compliant success
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
                How <span className="text-primary">SynergyIQ</span> Works in Financial Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to financial services AI transformation
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
                <span className="text-primary">SynergyIQ</span> Modules for Financial Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four integrated modules that work together to deliver financial services AI transformation
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
                      <h4 className="font-semibold text-foreground mb-2">Financial services use cases:</h4>
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

        {/* Financial Services AI Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Financial Services AI <span className="text-primary">Use Cases</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive AI solutions that drive value across all financial functions
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
                Measurable improvements that demonstrate financial services AI transformation success
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
                Common questions about implementing SynergyIQ in financial services
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
                Trusted by Financial Services Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how financial institutions are transforming their AI capabilities with SynergyIQ
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
              Ready to scale responsible, compliant AI across your financial enterprise?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a Demo to see your transformation path
            </p>
            
            <EmailCapturePhp source="financial-services-page" />
          </div>
        </section>
      </div>
    </>
  )
}
