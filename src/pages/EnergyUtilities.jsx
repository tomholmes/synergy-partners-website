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
  Quote,
  Gauge,
  AlertTriangle,
  Leaf
} from 'lucide-react'
import EmailCapturePhp from '../components/EmailCapturePhp'
import SEO from '../components/SEO'
import Header from '../components/Header'
import energyUtilitiesHero from '../assets/industries/energy-utilities-hero.svg'

export default function EnergyUtilities() {
  // Problem → Outcome data
  const problemOutcomes = [
    {
      problem: "Aging infrastructure & unplanned outages",
      outcome: "Predictive maintenance and asset health visibility",
      icon: <Gauge className="h-6 w-6" />
    },
    {
      problem: "Complex compliance requirements",
      outcome: "Audit-ready governance aligned to industry standards",
      icon: <Shield className="h-6 w-6" />
    },
    {
      problem: "High energy losses & inefficiency",
      outcome: "Optimization analytics and real-time monitoring",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      problem: "Safety incidents & workforce risk",
      outcome: "Proactive hazard detection and response automation",
      icon: <AlertTriangle className="h-6 w-6" />
    },
    {
      problem: "Siloed operational data",
      outcome: "Unified data governance and AI-enabled decision support",
      icon: <Target className="h-6 w-6" />
    }
  ]

  // How it works steps
  const howItWorks = [
    {
      step: 1,
      title: "Assess",
      description: "with AIMM-360 across governance, infrastructure readiness, safety, and sustainability.",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      step: 2,
      title: "Benchmark",
      description: "with InsightIQ to compare plants, grids, or service areas.",
      icon: <Target className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Govern",
      description: "with TrustIQ to align to safety, compliance, and reliability standards.",
      icon: <Shield className="h-8 w-8" />
    },
    {
      step: 4,
      title: "Execute",
      description: "with ActionIQ & track with PlanIQ for measurable operational improvements.",
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
        "Compare readiness across facilities or service areas",
        "Identify gaps in predictive maintenance, safety systems, and data readiness",
        "Prioritize investments for efficiency and reliability"
      ]
    },
    {
      name: "TrustIQ",
      icon: <Shield className="h-8 w-8" />,
      title: "Governance & Compliance",
      description: "Configurable governance scoring with evidence tracking, stale-evidence penalties, and framework crosswalks.",
      useCases: [
        "Align to NERC CIP, ISO 55000, OSHA, and environmental compliance",
        "Maintain evidence for regulatory reporting",
        "Standardize governance across sites and partners"
      ]
    },
    {
      name: "ActionIQ",
      icon: <Target className="h-8 w-8" />,
      title: "Roadmaps & SOWs",
      description: "Dependency-aware, budget-constrained plans with RACI from assessment results.",
      useCases: [
        "Grid modernization programs",
        "Renewable integration projects",
        "Predictive maintenance rollouts"
      ]
    },
    {
      name: "PlanIQ",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "KPIs & Transformation Tracking",
      description: "Converts plans into trackable KPIs and milestones with governance overlay.",
      useCases: [
        "Track uptime, safety incidents, energy efficiency metrics",
        "Monitor sustainability targets",
        "Provide regulatory and board reporting dashboards"
      ]
    }
  ]

  // Use cases
  const useCases = [
    "Predictive Maintenance: Turbine, transformer, and pipeline health monitoring",
    "Grid Optimization: Load balancing, demand forecasting",
    "Outage Management: Fault location, service restoration optimization",
    "Renewable Integration: Solar/wind forecasting, storage optimization",
    "Safety & Compliance: Hazard detection, incident tracking",
    "Customer Engagement: Usage insights, proactive outage notifications",
    "Sustainability & ESG: Emissions tracking, energy efficiency analytics"
  ]

  // Framework alignment
  const frameworks = [
    {
      framework: "NERC CIP",
      checks: "Critical infrastructure protection",
      evidence: "Security policies, access logs"
    },
    {
      framework: "ISO 55000",
      checks: "Asset management governance",
      evidence: "Maintenance logs, asset registry"
    },
    {
      framework: "OSHA / EHS",
      checks: "Safety compliance",
      evidence: "Incident reports, training logs"
    },
    {
      framework: "EPA Regulations",
      checks: "Environmental compliance",
      evidence: "Emissions data, compliance reports"
    }
  ]

  // Outcomes
  const outcomes = [
    { metric: "Uptime / reliability", change: "↑", description: "illustrative" },
    { metric: "Maintenance costs", change: "↓", description: "illustrative" },
    { metric: "Energy losses", change: "↓", description: "illustrative" },
    { metric: "Safety incidents", change: "↓", description: "illustrative" }
  ]

  // FAQs
  const faqs = [
    {
      question: "How does SynergyIQ integrate with SCADA and IoT platforms?",
      answer: "SynergyIQ can integrate with existing SCADA and IoT systems to provide governance and compliance overlay while preserving operational workflows."
    },
    {
      question: "Can we benchmark across plants or grids?",
      answer: "Yes—InsightIQ supports internal benchmarks across facilities, service areas, and operational units."
    },
    {
      question: "How do you ensure safety and compliance evidence is up to date?",
      answer: "TrustIQ provides automated stale-evidence detection and alerts to ensure compliance documentation remains current."
    },
    {
      question: "Can TrustIQ support renewable integration projects?",
      answer: "Yes—TrustIQ can be configured to track governance and compliance for renewable energy projects and grid integration."
    },
    {
      question: "How quickly can predictive maintenance be deployed?",
      answer: "Rapid baseline → prioritized roadmap → pilot(s) with governance and KPIs in early phases."
    }
  ]

  // Testimonials
  const testimonials = [
    {
      quote: "We reduced unplanned outages and improved compliance reporting.",
      role: "VP Operations",
      organization: "Energy Company"
    },
    {
      quote: "Predictive maintenance became systematic and governable.",
      role: "Maintenance Director",
      organization: "Utility Provider"
    },
    {
      quote: "Safety compliance became transparent and manageable.",
      role: "EHS Manager",
      organization: "Power Generation"
    }
  ]

  return (
    <>
      <SEO 
        title="Energy & Utilities | SynergyIQ by SynergyPartners.AI"
        description="Accelerate responsible AI adoption in energy & utilities with SynergyIQ—safety compliance, predictive maintenance, and operational efficiency."
        keywords={['energy AI', 'utilities AI', 'predictive maintenance', 'grid optimization', 'NERC CIP']}
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
                <Badge className="mb-4">Energy & Utilities AI Platform</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Accelerate Responsible AI in <span className="text-primary">Energy & Utilities</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-4xl lg:max-w-none leading-relaxed">
                  SynergyIQ helps energy and utility organizations baseline AI maturity, align with safety and regulatory requirements, and execute roadmaps that turn pilots into safe, compliant, and measurable outcomes.
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
                  src={energyUtilitiesHero} 
                  alt="Energy & Utilities AI Transformation"
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
                Transform energy and utilities challenges into measurable, compliant success
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
                How <span className="text-primary">SynergyIQ</span> Works in Energy & Utilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A systematic approach to energy and utilities AI transformation
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
                <span className="text-primary">SynergyIQ</span> Modules for Energy & Utilities
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Four integrated modules that work together to deliver energy and utilities AI transformation
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
                      <h4 className="font-semibold text-foreground mb-2">Energy & utilities use cases:</h4>
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

        {/* Energy & Utilities AI Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Energy & Utilities AI <span className="text-primary">Use Cases</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive AI solutions that drive value across all energy operations
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
                Measurable improvements that demonstrate energy and utilities AI transformation success
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
                Common questions about implementing SynergyIQ in energy and utilities
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
                Trusted by Energy & Utilities Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how energy providers and utilities are transforming their operations with SynergyIQ
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
              Make your energy operations safer, more reliable, and more efficient with AI you can trust.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a Demo to see how.
            </p>
            
            <EmailCapturePhp source="energy-utilities-page" />
          </div>
        </section>
      </div>
    </>
  )
}
