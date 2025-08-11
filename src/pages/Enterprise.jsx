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
import enterpriseHero from '../assets/industries/enterprise-hero.svg'

export default function Enterprise() {
  // Problem → Outcome data
  const problemOutcomes = [
    {
      problem: "Disconnected AI initiatives across business units",
      outcome: "Unified maturity baseline and transformation strategy",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      problem: "Inconsistent governance & compliance practices",
      outcome: "Standardized, audit-ready governance scoring and evidence",
      icon: <Shield className="h-6 w-6" />
    },
    {
      problem: "Underutilized data assets",
      outcome: "Enterprise data readiness and cross-unit insights",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      problem: "Slow pilot-to-production timelines",
      outcome: "Prioritized roadmaps with budget and KPI guardrails",
      icon: <Target className="h-6 w-6" />
    },
    {
      problem: "Unclear ROI and impact tracking",
      outcome: "Role-based dashboards with measurable business outcomes",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      problem: "Risk of vendor lock-in",
      outcome: "Vendor-agnostic, framework-aligned approach with configurable scoring",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  // How it works steps
  const howItWorks = [
    {
      step: 1,
      title: "Assess",
      description: "with AIMM-360 to baseline capabilities, risks, and opportunities across divisions.",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      step: 2,
      title: "Benchmark",
      description: "with InsightIQ to compare business units internally and against peers.",
      icon: <Target className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Govern",
      description: "with TrustIQ to standardize AI risk management, documentation, and oversight.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      step: 4,
      title: "Execute",
      description: "with ActionIQ & track with PlanIQ to ensure initiatives deliver enterprise-level value.",
      icon: <TrendingUp className="h-8 w-8" />
    }
  ]

  // Module details
  const modules = [
    {
      name: "InsightIQ",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Assessment & Benchmarking",
      description: "Measures AI readiness across strategy, governance, data, skills, infrastructure, and adoption.",
      useCases: [
        "Compare maturity across business units or geographies",
        "Identify enterprise-wide gaps in data governance or AI literacy",
        "Guide investment sequencing for maximum portfolio impact"
      ]
    },
    {
      name: "TrustIQ",
      icon: <Shield className="h-8 w-8" />,
      title: "Governance & Compliance",
      description: "Creates a consistent governance scoring model with evidence tracking and stale-evidence penalties.",
      useCases: [
        "Apply uniform governance to AI initiatives across functions",
        "Align to NIST AI RMF, ISO, and regulatory guidance in multiple jurisdictions",
        "Create a centralized model registry and audit trail"
      ]
    },
    {
      name: "ActionIQ",
      icon: <Target className="h-8 w-8" />,
      title: "Roadmaps & SOWs",
      description: "Produces dependency-aware, budget-constrained, role-assigned plans from assessment results.",
      useCases: [
        "Coordinate rollout of AI tools across sales, operations, finance, and customer service",
        "Prioritize high-value, low-risk pilots for early wins",
        "Integrate Microsoft/Azure OpenAI solutions with existing enterprise systems"
      ]
    },
    {
      name: "PlanIQ",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "KPIs & Transformation Tracking",
      description: "Converts plans into measurable KPIs and milestones for continuous tracking.",
      useCases: [
        "Monitor adoption, ROI, and governance coverage across portfolios",
        "Track transformation progress for executive reporting and board updates",
        "Align with OKRs, balanced scorecards, and regulatory metrics"
      ]
    }
  ]

  // Use cases
  const useCases = [
    "Customer Service Optimization: AI copilots, intelligent routing, and sentiment analytics",
    "Sales & Marketing Enablement: Predictive lead scoring, campaign optimization, and personalization engines",
    "Finance & Risk Management: Fraud detection, credit risk modeling, automated reporting",
    "Supply Chain Optimization: Predictive demand, inventory management, and logistics routing",
    "HR & Talent Management: AI-assisted recruiting, employee engagement analytics, skills gap analysis",
    "Operations & Process Automation: Workflow automation, document processing, process mining",
    "Compliance & Regulatory Reporting: Automated evidence gathering, audit-ready documentation",
    "Innovation Acceleration: AI-assisted R&D, trend analysis, and product design optimization",
    "IT Operations & Security: Anomaly detection, automated remediation, policy enforcement"
  ]

  // Framework alignment
  const frameworks = [
    {
      framework: "NIST AI RMF",
      checks: "Risk management workflows, transparency, bias mitigation",
      evidence: "Model documentation, risk registers, review logs"
    },
    {
      framework: "ISO/IEC 42001 (AI Mgmt Systems)",
      checks: "AI system lifecycle governance, continual improvement",
      evidence: "Governance policies, improvement logs"
    },
    {
      framework: "GDPR / CCPA / Privacy Acts",
      checks: "Data processing, consent, retention, minimization",
      evidence: "Data catalogs, DPIAs, consent logs"
    },
    {
      framework: "SOC 2 / ISO 27001",
      checks: "Security controls, monitoring, access management",
      evidence: "Audit reports, security logs"
    },
    {
      framework: "Sector-specific regulations",
      checks: "Financial, healthcare, or other applicable compliance",
      evidence: "Compliance reports, validation records"
    }
  ]

  // Outcomes
  const outcomes = [
    { metric: "Time-to-assessment", change: "↓ from months to weeks", description: "illustrative" },
    { metric: "Governance coverage across AI portfolio", change: "↑", description: "illustrative" },
    { metric: "Pilot-to-production conversion rate", change: "↑", description: "illustrative" },
    { metric: "Stakeholder satisfaction", change: "↑", description: "illustrative" },
    { metric: "Operational cost savings from AI automation", change: "↑", description: "illustrative" },
    { metric: "Evidence freshness & audit readiness", change: "↑", description: "illustrative" }
  ]

  // FAQs
  const faqs = [
    {
      question: "How does SynergyIQ handle multiple business units with different AI maturity levels?",
      answer: "We allow benchmarking across units and tailor roadmaps to each while maintaining a unified governance model."
    },
    {
      question: "Can we integrate with existing enterprise platforms?",
      answer: "Yes — SynergyIQ integrates with Microsoft 365, Azure OpenAI, Power BI, CRM/ERP systems, and data warehouses."
    },
    {
      question: "How is governance applied across global operations?",
      answer: "TrustIQ can be configured with different thresholds and evidence requirements by jurisdiction."
    },
    {
      question: "What roles participate in the assessment?",
      answer: "Typically business unit leaders, CIO/CDO, Risk, Compliance, HR, Operations, and AI/analytics leads."
    },
    {
      question: "How are KPIs tracked across large portfolios?",
      answer: "PlanIQ aggregates KPIs into enterprise dashboards with drill-down to projects."
    },
    {
      question: "Can we incorporate vendor AI solutions into governance scoring?",
      answer: "Yes — TrustIQ supports vendor assessment and ongoing monitoring."
    },
    {
      question: "What if we already have AI pilots in place?",
      answer: "We normalize evidence and maturity scoring to integrate those pilots into the enterprise portfolio."
    }
  ]

  // Testimonials
  const testimonials = [
    {
      quote: "We finally have a single view of AI maturity across 20+ business units.",
      role: "Global CIO",
      organization: "Fortune 500 Corporation"
    },
    {
      quote: "TrustIQ keeps our governance aligned across multiple regulatory regimes.",
      role: "Chief Risk Officer",
      organization: "Global Financial Services"
    },
    {
      quote: "PlanIQ gave our board the metrics they needed to support AI investment.",
      role: "VP Strategy",
      organization: "Multi-National Manufacturing"
    }
  ]

  return (
    <>
      <SEO 
        title="Enterprise | SynergyIQ by SynergyPartners.AI"
        description="Accelerate responsible AI adoption across the enterprise with SynergyIQ—InsightIQ, TrustIQ, ActionIQ, and PlanIQ for unified transformation."
        keywords={['enterprise AI', 'AI governance', 'AI transformation', 'AI maturity assessment', 'cross-departmental AI']}
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
                <Badge className="mb-4">Enterprise AI Platform</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Accelerate Responsible AI Across the <span className="text-primary">Enterprise</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-4xl lg:max-w-none leading-relaxed">
                  SynergyIQ enables organizations to baseline AI maturity, strengthen governance and compliance, and execute cross-departmental roadmaps—turning siloed pilots into coordinated, measurable transformation.
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
                  src={enterpriseHero} 
                  alt="Enterprise AI Transformation"
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
                Transform enterprise AI challenges into measurable, coordinated success
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
                How <span className="text-primary">SynergyIQ</span> Works in the Enterprise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to enterprise-wide AI transformation
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
                <span className="text-primary">SynergyIQ</span> Modules for Enterprise
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four integrated modules that work together to deliver enterprise-wide AI transformation
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
                      <h4 className="font-semibold text-foreground mb-2">Enterprise use cases:</h4>
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

        {/* Enterprise AI Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Enterprise AI <span className="text-primary">Use Cases</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive AI solutions that drive value across all business functions
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
                Measurable improvements that demonstrate enterprise AI transformation success
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
                Common questions about implementing SynergyIQ in enterprise environments
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
                Trusted by Enterprise Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how organizations are transforming their AI capabilities with SynergyIQ
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
              Ready to unify and accelerate AI adoption across your enterprise?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a Demo to see your transformation path
            </p>
            
            <EmailCapturePhp source="enterprise-page" />
          </div>
        </section>
      </div>
    </>
  )
}
