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

export default function PublicSector() {
  // Problem → Outcome data
  const problemOutcomes = [
    {
      problem: "Disparate AI pilots across departments",
      outcome: "Unified readiness baseline and transformation strategy",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      problem: "Compliance with evolving federal AI policies",
      outcome: "Audit-ready governance aligned to OMB, NIST, GSA",
      icon: <Shield className="h-6 w-6" />
    },
    {
      problem: "Limited cross-agency data sharing",
      outcome: "Data readiness, lineage, and governance frameworks",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      problem: "Procurement and vendor oversight gaps",
      outcome: "Evidence-based sourcing and monitoring",
      icon: <Target className="h-6 w-6" />
    },
    {
      problem: "Constituent trust challenges",
      outcome: "Transparent reporting and accountability dashboards",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  // How it works steps
  const howItWorks = [
    {
      step: 1,
      title: "Assess",
      description: "with AIMM-360 against federal AI guidance, data maturity, governance, and workforce readiness.",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      step: 2,
      title: "Benchmark",
      description: "with InsightIQ to compare agencies or programs internally and with peers.",
      icon: <Target className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Govern",
      description: "with TrustIQ to align to frameworks and document evidence for audits.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      step: 4,
      title: "Execute",
      description: "with ActionIQ & track with PlanIQ to ensure programs deliver measurable impact.",
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
        "Compare maturity across bureaus, offices, and programs",
        "Identify gaps in compliance with OMB M-21-31, M-22-09, M-25-24",
        "Guide funding and resource prioritization"
      ]
    },
    {
      name: "TrustIQ",
      icon: <Shield className="h-8 w-8" />,
      title: "Governance & Compliance",
      description: "Configurable governance scoring with evidence tracking, stale-evidence penalties, and framework crosswalks.",
      useCases: [
        "Align AI projects to NIST AI RMF and GSA AI CMM",
        "Maintain evidence for OMB and inspector general audits",
        "Standardize governance across agencies and contractors"
      ]
    },
    {
      name: "ActionIQ",
      icon: <Target className="h-8 w-8" />,
      title: "Roadmaps & SOWs",
      description: "Dependency-aware, budget-constrained plans with RACI from assessment results.",
      useCases: [
        "Program modernization",
        "Vendor AI oversight and contracting",
        "Cross-agency data integration initiatives"
      ]
    },
    {
      name: "PlanIQ",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "KPIs & Transformation Tracking",
      description: "Converts plans into trackable KPIs and milestones with governance overlay.",
      useCases: [
        "Track program milestones, compliance coverage, and adoption",
        "Monitor constituent service metrics",
        "Provide transparency to leadership and oversight bodies"
      ]
    }
  ]

  // Use cases
  const useCases = [
    "Constituent Services: AI virtual assistants, multilingual support, 311/211 optimization",
    "Regulatory Enforcement: Automated evidence gathering, compliance monitoring",
    "Public Safety: Crime trend analysis, emergency response optimization",
    "Infrastructure & Transportation: Predictive maintenance, route optimization",
    "Health & Human Services: Eligibility determinations, benefits case management",
    "Open Data & Transparency: AI-assisted analytics, dashboards for public reporting"
  ]

  // Framework alignment
  const frameworks = [
    {
      framework: "OMB Memos (M-21-31, M-22-09, M-25-24)",
      checks: "Evidence, governance processes, transparency",
      evidence: "Policies, review logs"
    },
    {
      framework: "NIST AI RMF",
      checks: "Risk management, bias mitigation, transparency",
      evidence: "Model docs, risk registers"
    },
    {
      framework: "GSA AI CMM",
      checks: "Capability maturity",
      evidence: "Program scorecards"
    },
    {
      framework: "FedRAMP / FISMA",
      checks: "Security and privacy controls",
      evidence: "ATO docs, audit logs"
    }
  ]

  // Outcomes
  const outcomes = [
    { metric: "Compliance coverage", change: "↑", description: "illustrative" },
    { metric: "Audit readiness", change: "↑", description: "illustrative" },
    { metric: "Time-to-pilot", change: "↓", description: "illustrative" },
    { metric: "Constituent satisfaction", change: "↑", description: "illustrative" }
  ]

  // FAQs
  const faqs = [
    {
      question: "How does SynergyIQ support OMB compliance?",
      answer: "TrustIQ aligns governance and evidence to OMB memos with configurable thresholds and automated compliance tracking."
    },
    {
      question: "Can we benchmark across departments?",
      answer: "Yes—InsightIQ supports internal benchmarks across bureaus, offices, and programs."
    },
    {
      question: "How do you handle classified or sensitive data?",
      answer: "SynergyIQ supports on-premise deployment and can be configured to work within your security classification requirements."
    },
    {
      question: "Can TrustIQ support vendor oversight?",
      answer: "Yes—vendor onboarding checks, periodic reviews, and ongoing monitoring with evidence tracking."
    },
    {
      question: "How do you document AI transparency for the public?",
      answer: "TrustIQ provides transparency reporting templates and dashboards that can be adapted for public disclosure."
    },
    {
      question: "How quickly can programs be assessed?",
      answer: "Rapid baseline → prioritized roadmap → pilot(s) with governance and KPIs in early phases."
    }
  ]

  // Testimonials
  const testimonials = [
    {
      quote: "We now have a unified framework for AI oversight and readiness.",
      role: "Federal CIO",
      organization: "Federal Agency"
    },
    {
      quote: "OMB compliance became transparent and manageable.",
      role: "Deputy CIO",
      organization: "State Government"
    },
    {
      quote: "Cross-agency collaboration improved with shared governance.",
      role: "Program Director",
      organization: "Local Government"
    }
  ]

  return (
    <>
      <SEO 
        title="Public Sector & Government | SynergyIQ by SynergyPartners.AI"
        description="Accelerate responsible AI adoption in the public sector with SynergyIQ—federal compliance, governance alignment, and transformation roadmaps."
        keywords={['public sector AI', 'government AI', 'federal AI', 'OMB compliance', 'NIST AI RMF']}
        image="/og-image.jpg"
        type="website"
      />
      
      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4">Public Sector AI Platform</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Accelerate Responsible AI in the <span className="text-primary">Public Sector</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                SynergyIQ helps government agencies baseline AI readiness, align with federal guidance, and execute roadmaps that deliver transparent, compliant, and measurable results for constituents.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
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
                Transform public sector AI challenges into measurable, compliant success
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
                How <span className="text-primary">SynergyIQ</span> Works in Public Sector
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to public sector AI transformation
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
                <span className="text-primary">SynergyIQ</span> Modules for Public Sector
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four integrated modules that work together to deliver public sector AI transformation
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
                      <h4 className="font-semibold text-foreground mb-2">Public sector use cases:</h4>
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

        {/* Public Sector AI Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Public Sector AI <span className="text-primary">Use Cases</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive AI solutions that drive value across all government functions
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
                Measurable improvements that demonstrate public sector AI transformation success
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                Common questions about implementing SynergyIQ in the public sector
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
                Trusted by Public Sector Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how government agencies are transforming their AI capabilities with SynergyIQ
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
              Bring transparency, compliance, and measurable outcomes to your AI programs.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a Demo to see how.
            </p>
            
            <EmailCapturePhp source="public-sector-page" />
          </div>
        </section>
      </div>
    </>
  )
}
