import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import EmailCapturePhp from '../components/EmailCapturePhp'
import SEO from '../components/SEO'
import Header from '../components/Header'
import { 
  Factory, 
  Shield, 
  BarChart3, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  Settings,
  Database,
  Globe,
  Award,
  Zap,
  Building2,
  Lightbulb,
  Clock,
  Eye,
  Lock,
  FileText,
  PieChart,
  Wrench,
  Gauge,
  Truck,
  Leaf
} from 'lucide-react'
import { APP_CONFIG, ROUTES } from '../constants'
import manufacturingHero from '../assets/industries/manufacturing-hero.svg'

function Manufacturing() {
  // Note: Form handling is managed by the EmailCapturePhp component
  // This component provides the contact form functionality

  const problemOutcomeCards = [
    {
      problem: "Fragmented pilots & POCs",
      outcome: "Unified maturity baseline and prioritized roadmap",
      icon: <PieChart className="h-6 w-6" />
    },
    {
      problem: "Quality escapes & variable yield",
      outcome: "Computer vision QA and closed‑loop improvement",
      icon: <Eye className="h-6 w-6" />
    },
    {
      problem: "Unplanned downtime",
      outcome: "Predictive maintenance and asset health visibility",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      problem: "Opaque supplier risk",
      outcome: "Supplier quality intelligence and traceable decisions",
      icon: <Truck className="h-6 w-6" />
    },
    {
      problem: "Compliance uncertainty",
      outcome: "Audit‑ready governance scoring and evidence",
      icon: <Shield className="h-6 w-6" />
    },
    {
      problem: "High energy & scrap costs",
      outcome: "Energy optimization and process analytics with measurable KPIs",
      icon: <Leaf className="h-6 w-6" />
    }
  ]

  const howItWorksSteps = [
    {
      step: 1,
      title: "Assess",
      description: "with AIMM‑360 to baseline capability, risks, and readiness across plants, functions, and vendors",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      step: 2,
      title: "Benchmark",
      description: "with InsightIQ across peers or divisions to focus investment where impact is highest",
      icon: <Award className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Govern",
      description: "with TrustIQ to align to recognized frameworks, policies, and evidence requirements",
      icon: <Shield className="h-8 w-8" />
    },
    {
      step: 4,
      title: "Execute",
      description: "with ActionIQ & track with PlanIQ to deliver time‑bound results, KPIs, and governance coverage",
      icon: <Target className="h-8 w-8" />
    }
  ]

  const modules = [
    {
      name: "InsightIQ",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Assessment & Benchmarking",
      description: "Diagnoses AI maturity across strategy, data, OT/IT integration, workforce, use cases, and governance.",
      features: ["AIMM‑360 survey", "Role-based views", "Peer benchmarks", "PDF/interactive reports"],
      useCases: ["Compare readiness across plants/lines and product families", "Prioritize use cases by ROI and complexity", "Guide make/buy decisions and vendor selection"]
    },
    {
      name: "TrustIQ",
      icon: <Shield className="h-8 w-8" />,
      title: "Governance & Compliance",
      description: "Provides configurable governance scoring, evidence tracking, stale‑evidence penalties, and framework crosswalks.",
      features: ["Configurable scoring", "Evidence tracking", "Stale-evidence penalties", "Framework crosswalks"],
      useCases: ["Align computer vision and predictive models to risk controls", "Track model lineage, approvals, and change logs", "Standardize governance across plants and supplier tooling"]
    },
    {
      name: "ActionIQ",
      icon: <Target className="h-8 w-8" />,
      title: "Roadmaps & SOWs",
      description: "Converts gaps into dependency‑aware roadmaps and detailed SOWs with RACI and budget guardrails.",
      features: ["Auto-generated SOWs", "Dependencies", "Budget logic", "RACI", "Microsoft solution mapping"],
      useCases: ["Plant‑level rollouts for CV inspection, predictive maintenance, and scheduling", "Data platform modernization for MES/SCADA/ERP integrations", "E2E transformation programs across operations, quality, supply chain, and EHS"]
    },
    {
      name: "PlanIQ",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "KPIs & Transformation Tracking",
      description: "Turns plans into measurable KPIs and milestones with governance overlay.",
      features: ["Task‑level KPIs", "Milestone dashboards", "Governance tier tracking", "Export to OKRs/BI"],
      useCases: ["Monitor yield, OEE, MTBF/MTTR, scrap, energy, on‑time delivery", "Track adoption, training, and change management", "Provide executive and plant‑level scorecards"]
    }
  ]

  const useCases = [
    {
      title: "Computer Vision Quality Inspection",
      description: "Detect defects in real time; feed root‑cause analysis and corrective actions.",
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: "Predictive Maintenance & Asset Health",
      description: "Forecast failures for critical equipment; optimize spare parts and service windows.",
      icon: <Wrench className="h-6 w-6" />
    },
    {
      title: "Production Scheduling & Throughput Optimization",
      description: "AI‑assisted finite scheduling to reduce changeovers and bottlenecks.",
      icon: <Clock className="h-6 w-6" />
    },
    {
      title: "Demand Forecasting & Inventory Optimization",
      description: "Integrate sales, promo, channel, and exogenous signals to improve service levels.",
      icon: <TrendingUp className="h-6 w-6" />
    },
    {
      title: "Supplier Quality & Procurement Risk",
      description: "Scorecards, anomaly detection, and automated escalation workflows.",
      icon: <Truck className="h-6 w-6" />
    },
    {
      title: "Energy & Sustainability Optimization",
      description: "Identify high‑consumption assets and optimize process parameters to reduce energy and emissions.",
      icon: <Leaf className="h-6 w-6" />
    },
    {
      title: "Traceability & Serialization",
      description: "Improve lot‑level visibility; accelerate recalls and compliance checks.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "EHS & Safety Analytics",
      description: "Monitor leading indicators; flag near‑miss patterns; document workflow compliance.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "R&D/Design Intelligence",
      description: "Mine historical failures, warranty claims, and field data to inform design changes.",
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: "Workforce Enablement & Copilots",
      description: "Operator guidance, digital work instructions, and AI‑assisted troubleshooting.",
      icon: <Users className="h-6 w-6" />
    }
  ]

  const frameworks = [
    {
      framework: "NIST AI RMF",
      checks: "Risk identification, measurement, governance workflows, transparency artifacts",
      evidence: "Model cards, risk registers, review logs"
    },
    {
      framework: "ISO 9001 (Quality Mgmt)",
      checks: "Documented processes, continual improvement evidence",
      evidence: "SOPs, CAPA records, audit trails"
    },
    {
      framework: "ISA/IEC 62443 (Industrial Security)",
      checks: "Secure development & operations for OT/ICS, access and change control",
      evidence: "Access logs, patch/change records"
    },
    {
      framework: "IATF 16949 (Auto)",
      checks: "Supplier quality, defect prevention, change management",
      evidence: "PPAP docs, supplier audits"
    },
    {
      framework: "GxP / GMP (CPG/Pharma adj.)",
      checks: "Validation, traceability, auditability for regulated processes",
      evidence: "Validation protocols, batch records"
    },
    {
      framework: "OSHA / EHS Policies",
      checks: "Safety procedures, incident tracking, training & controls",
      evidence: "Training logs, incident reports"
    },
    {
      framework: "Data Governance / Privacy",
      checks: "Data access, lineage, retention for AI training/inference",
      evidence: "Data catalogs, approvals, lineage maps"
    }
  ]

  const outcomes = [
    {
      metric: "Unplanned Downtime",
      change: "↓ 15–30%",
      description: "Reduced equipment failures"
    },
    {
      metric: "First-Pass Yield",
      change: "↑",
      description: "Improved quality outcomes"
    },
    {
      metric: "Energy Consumption",
      change: "↓",
      description: "Per unit optimization"
    },
    {
      metric: "Schedule Adherence",
      change: "↑",
      description: "Better throughput"
    }
  ]

  const faqs = [
    {
      question: "How does SynergyIQ integrate with MES/SCADA/ERP and data lakes?",
      answer: "We support integration patterns common in manufacturing environments and map data to assessment, governance, and KPI models. Vendor‑agnostic; your policies and security controls apply."
    },
    {
      question: "Can we start at one plant and scale later?",
      answer: "Yes. Assess and pilot in a single facility, then use benchmarks and governance templates to scale across sites."
    },
    {
      question: "How is governance scoring configured for different risk levels?",
      answer: "TrustIQ allows configurable weights, thresholds, and evidence definitions by use case (e.g., CV vs. predictive models)."
    },
    {
      question: "What skills or roles are needed to get value quickly?",
      answer: "Typical participants include Operations, Quality, Maintenance, Supply Chain, IT/OT, and Data/AI leads. We tailor the assessment and roadmap to available capacity."
    },
    {
      question: "Can we benchmark across plants and product lines?",
      answer: "Yes. InsightIQ supports internal comparisons and peer benchmarks to identify where investments deliver the highest impact."
    },
    {
      question: "How do you handle security in OT environments?",
      answer: "We respect existing network segmentation and change controls. Governance alignment can reference ISA/IEC 62443 practices and your internal policies."
    },
    {
      question: "How soon do we see results?",
      answer: "Most organizations establish a baseline assessment quickly, then launch 1–3 high‑ROI use cases—with governance and KPIs—in the first phases."
    },
    {
      question: "What if we already have pilots in progress?",
      answer: "SynergyIQ normalizes evidence, maturity, and KPI tracking across pilots to avoid duplication and accelerate scale decisions."
    }
  ]

  const testimonials = [
    {
      quote: "We finally have a common lens for plant‑level AI readiness and risk. The maturity assessment revealed gaps we didn't know existed.",
      role: "VP Operations",
      organization: "Durable Goods Manufacturer"
    },
    {
      quote: "Governance templates let us scale CV inspection responsibly. TrustIQ's evidence tracking gives us confidence in our compliance.",
      role: "Director of Quality",
      organization: "CPG Company"
    },
    {
      quote: "PlanIQ's KPI view tied everything back to throughput and scrap. We now have clear roadmaps with measurable outcomes our executives can understand.",
      role: "Plant Manager",
      organization: "Industrial Equipment Manufacturer"
    }
  ]

  return (
    <>
      <SEO 
        title="Manufacturing | SynergyIQ by SynergyPartners.AI"
        description="Accelerate responsible AI adoption across plants and supply chains with SynergyIQ—InsightIQ, TrustIQ, ActionIQ, and PlanIQ for Durable Goods and CPG manufacturers."
        keywords={['AI governance', 'AI transformation', 'manufacturing', 'AI maturity assessment', 'industrial AI', 'quality inspection', 'predictive maintenance']}
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
                <Badge className="mb-4">Manufacturing AI Platform</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Accelerate Responsible AI in <span className="text-primary">Manufacturing</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-4xl lg:max-w-none leading-relaxed">
                  SynergyIQ helps manufacturing organizations baseline AI maturity, align with safety and quality requirements, and execute roadmaps that turn pilots into safe, compliant, and measurable outcomes.
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
                  src={manufacturingHero} 
                  alt="Manufacturing AI Transformation"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem → Outcome Cards */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                From <span className="text-red-600">Problems</span> to <span className="text-green-600">Outcomes</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transform common manufacturing AI challenges into measurable, compliant success stories
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problemOutcomeCards.map((card, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                        {card.icon}
                      </div>
                      <div className="flex-1">
                        <div className="mb-3">
                          <Badge variant="destructive" className="mb-2">Problem</Badge>
                          <p className="font-medium text-foreground">{card.problem}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ArrowRight className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">becomes</span>
                        </div>
                        <div className="mt-3">
                          <Badge variant="default" className="mb-2">Outcome</Badge>
                          <p className="font-medium text-foreground">{card.outcome}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How SynergyIQ Works */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                How SynergyIQ Works in Manufacturing
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                A proven 4-step process that transforms AI readiness into measurable outcomes
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorksSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-primary">
                        {step.icon}
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Module Deep-Dive */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Four Integrated Modules
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Each module addresses specific manufacturing needs while working together as a unified platform
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {modules.map((module, index) => (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {module.icon}
                      </div>
                      <div>
                        <Badge variant="secondary">{module.name}</Badge>
                        <CardTitle className="text-xl mt-2">{module.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {module.description}
                    </CardDescription>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {module.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Manufacturing Use Cases:</h4>
                      <ul className="space-y-1">
                        {module.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <Lightbulb className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
                            {useCase}
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

        {/* Manufacturing AI Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Manufacturing AI Use Cases (Durable Goods & CPG)
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-world applications that demonstrate the value of responsible AI in manufacturing environments
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                    {useCase.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Framework & Compliance Alignment */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Framework & Compliance Alignment
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                TrustIQ supports alignment to recognized frameworks and industry standards
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left p-4 font-semibold text-foreground">Framework / Policy</th>
                    <th className="text-left p-4 font-semibold text-foreground">What TrustIQ Checks</th>
                    <th className="text-left p-4 font-semibold text-foreground">Typical Evidence</th>
                  </tr>
                </thead>
                <tbody>
                  {frameworks.map((framework, index) => (
                    <tr key={index} className="border-b border-muted">
                      <td className="p-4 font-medium text-foreground">{framework.framework}</td>
                      <td className="p-4 text-muted-foreground">{framework.checks}</td>
                      <td className="p-4 text-muted-foreground">{framework.evidence}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> TrustIQ provides alignment support and audit‑ready documentation, not certification. 
                Institutions configure weights, thresholds, and evidence per local policy.
              </p>
            </div>
          </div>
        </section>

        {/* Outcomes & Metrics */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Outcomes & Metrics
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Manufacturers using SynergyIQ typically see measurable improvements across key performance indicators
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {outcomes.map((outcome, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {outcome.change}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{outcome.metric}</h3>
                  <p className="text-muted-foreground">{outcome.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground">
                <em>Specific results vary by manufacturing context and implementation approach.</em>
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
                Common questions about implementing SynergyIQ in manufacturing
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
                Trusted by Manufacturing Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how manufacturers are transforming their AI capabilities with SynergyIQ
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
              Ready to turn AI pilots into measurable, plant‑to‑enterprise outcomes?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a Demo to see where to begin
            </p>
            
            <EmailCapturePhp source="manufacturing-page" />
          </div>
        </section>
      </div>
    </>
  )
}

// Simple Quote icon component
function Quote({ className, ...props }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  )
}

export default Manufacturing
