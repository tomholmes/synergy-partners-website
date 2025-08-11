import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import EmailCapturePhp from '../components/EmailCapturePhp'
import SEO from '../components/SEO'
import Header from '../components/Header'
import { 
  ShoppingBag, 
  Shield, 
  BarChart3, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  CreditCard,
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
  Truck,
  Smartphone
} from 'lucide-react'
import { APP_CONFIG, ROUTES } from '../constants'
import retailEcommerceHero from '../assets/industries/retail-ecommerce-hero.svg'

function RetailEcommerce() {
  // Note: Form handling is managed by the EmailCapturePhp component
  // This component provides the contact form functionality

  const problemOutcomeCards = [
    {
      problem: "Fragmented customer data across channels",
      outcome: "Unified data readiness and AI-driven insights",
      icon: <Database className="h-6 w-6" />
    },
    {
      problem: "Inconsistent personalization and targeting",
      outcome: "Governed, bias-checked recommendation engines",
      icon: <Users className="h-6 w-6" />
    },
    {
      problem: "High returns and low conversion rates",
      outcome: "AI-enabled merchandising and inventory optimization",
      icon: <ShoppingBag className="h-6 w-6" />
    },
    {
      problem: "Manual demand forecasting",
      outcome: "Automated, adaptive forecasting with governance checks",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      problem: "Privacy compliance risks",
      outcome: "Audit-ready governance aligned to GDPR, CCPA, and local laws",
      icon: <Shield className="h-6 w-6" />
    }
  ]

  const howItWorksSteps = [
    {
      step: 1,
      title: "Assess",
      description: "with AIMM-360 across data, governance, personalization, supply chain, and workforce",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      step: 2,
      title: "Benchmark",
      description: "with InsightIQ to compare regions, brands, or channels",
      icon: <Award className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Govern",
      description: "with TrustIQ to ensure AI initiatives meet privacy, ethical, and transparency standards",
      icon: <Shield className="h-8 w-8" />
    },
    {
      step: 4,
      title: "Execute",
      description: "with ActionIQ & track with PlanIQ to deliver measurable customer and operational outcomes",
      icon: <Target className="h-8 w-8" />
    }
  ]

  const modules = [
    {
      name: "InsightIQ",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Assessment & Benchmarking",
      description: "Diagnose readiness across strategy, data, governance, people, use cases, and operations. Role-aware dashboards and peer benchmarks guide where to invest first.",
      features: ["AIMM-360 survey", "Role-based views", "Peer benchmarks", "PDF/interactive reports"],
      useCases: ["Compare AI maturity across brands, stores, or digital channels", "Identify gaps in omnichannel data integration", "Prioritize AI use cases with highest ROI potential"]
    },
    {
      name: "TrustIQ",
      icon: <Shield className="h-8 w-8" />,
      title: "Governance & Compliance",
      description: "Configurable scoring aligned to recognized frameworks. Evidence tracking, stale-evidence penalties, and transparency waterfalls build institutional confidence.",
      features: ["Configurable scoring", "Evidence tracking", "Stale-evidence penalties", "Framework crosswalks"],
      useCases: ["Align personalization and pricing algorithms to privacy laws", "Audit recommendation engines for bias and explainability", "Maintain evidence for consumer data requests and regulatory audits"]
    },
    {
      name: "ActionIQ",
      icon: <Target className="h-8 w-8" />,
      title: "Roadmaps & SOWs",
      description: "Auto-generated, dependency-aware plans with RACI and budget guardrails. Aligns to Microsoft solution areas when applicable.",
      features: ["Auto-generated SOWs", "Dependencies", "Budget logic", "RACI", "Microsoft solution mapping"],
      useCases: ["E-commerce personalization rollout", "AI-assisted merchandising and pricing optimization", "Supply chain AI integration for inventory and logistics"]
    },
    {
      name: "PlanIQ",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "KPIs & Transformation Tracking",
      description: "Converts plans into measurable KPIs and milestones. Monitors governance tiers, adoption, and value realization across terms and academic years.",
      features: ["Task-level KPIs", "Milestone dashboards", "Governance tier tracking", "Export to OKRs/BI"],
      useCases: ["Monitor conversion rates, AOV, return rates, and customer satisfaction", "Track adoption of AI-enabled tools across teams", "Report on governance coverage and compliance status"]
    }
  ]

  const useCases = [
    {
      title: "Personalized Product Recommendations",
      description: "Governed, bias-checked algorithms for upsell and cross-sell that comply with privacy regulations.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Dynamic Pricing Optimization",
      description: "AI-driven price adjustments with compliance controls and ethical pricing practices.",
      icon: <CreditCard className="h-6 w-6" />
    },
    {
      title: "Inventory & Demand Forecasting",
      description: "Reduce stockouts and overstocks with predictive models that optimize supply chain efficiency.",
      icon: <Truck className="h-6 w-6" />
    },
    {
      title: "Fraud Detection",
      description: "Protect transactions and loyalty programs with anomaly detection and real-time monitoring.",
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: "Customer Service Automation",
      description: "AI chatbots, virtual assistants, and knowledge bases that enhance customer experience.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Store Operations",
      description: "Workforce scheduling, foot traffic analysis, and loss prevention with AI insights.",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: "Marketing Optimization",
      description: "Attribution modeling, ad spend optimization, and campaign targeting with governance controls.",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      title: "Sustainability Analytics",
      description: "Reduce waste and optimize supply chain routes for environmental impact.",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  const frameworks = [
    {
      framework: "GDPR / CCPA / CPRA",
      checks: "Data rights, consent, opt-out mechanisms",
      evidence: "Consent logs, DPIAs"
    },
    {
      framework: "PCI DSS",
      checks: "Payment card data protection",
      evidence: "PCI reports, security logs"
    },
    {
      framework: "ISO 27001",
      checks: "Information security management",
      evidence: "Policies, risk assessments"
    },
    {
      framework: "AI Ethics Guidelines (OECD/Local)",
      checks: "Fairness, transparency, explainability",
      evidence: "Model documentation, bias reports"
    }
  ]

  const outcomes = [
    {
      metric: "Conversion rates",
      change: "↑",
      description: "Improved customer engagement"
    },
    {
      metric: "Average order value",
      change: "↑",
      description: "Better personalization"
    },
    {
      metric: "Return rates",
      change: "↓",
      description: "Reduced customer dissatisfaction"
    },
    {
      metric: "Inventory carrying costs",
      change: "↓",
      description: "Optimized supply chain"
    }
  ]

  const faqs = [
    {
      question: "How does SynergyIQ integrate with POS, CRM, and e-commerce platforms?",
      answer: "SynergyIQ provides native integration with major retail platforms including Shopify, Salesforce, and various POS systems. Our platform can import data from these systems to assess AI maturity and track transformation progress. We also support API integrations for real-time data synchronization and governance monitoring."
    },
    {
      question: "Can we benchmark across brands, stores, and online channels?",
      answer: "Yes, InsightIQ provides comprehensive benchmarking capabilities across your retail ecosystem. You can compare AI maturity between physical stores, e-commerce channels, different brands, and geographic regions. This helps identify best practices and resource allocation opportunities across your retail network."
    },
    {
      question: "How do you ensure personalization complies with privacy laws?",
      answer: "TrustIQ includes specific governance controls for retail personalization use cases. We check for GDPR/CCPA compliance, consent management, data minimization, and algorithmic bias. The platform provides audit-ready documentation and evidence tracking to demonstrate compliance with privacy regulations."
    },
    {
      question: "Can TrustIQ audit AI models for bias in recommendations?",
      answer: "Absolutely. TrustIQ includes specialized retail governance checks for recommendation engines, pricing algorithms, and customer segmentation models. We audit for fairness, transparency, and explainability, ensuring your AI systems don't discriminate and can explain their decisions to customers and regulators."
    },
    {
      question: "How quickly can we deploy retail AI pilots?",
      answer: "With ActionIQ, you can typically launch your first retail AI pilot within 4-8 weeks after completing the assessment phase. The platform generates detailed implementation roadmaps with dependencies, resource requirements, and milestone tracking. Many retailers see measurable outcomes within the first quarter."
    },
    {
      question: "Do you support AI use cases for both physical and digital retail?",
      answer: "Yes, SynergyIQ is designed for omnichannel retail. We support AI use cases across physical stores (inventory management, workforce optimization, loss prevention), e-commerce (personalization, fraud detection, customer service), and unified operations (supply chain, analytics, governance)."
    }
  ]

  const testimonials = [
    {
      quote: "SynergyIQ helped us scale personalization across all channels while staying compliant with privacy laws. The governance framework gave us confidence to move fast without risking customer trust.",
      role: "Chief Digital Officer",
      organization: "National Retail Chain"
    },
    {
      quote: "The AI maturity assessment revealed gaps in our omnichannel data integration that we didn't know existed. Now we have a clear roadmap to transform our customer experience.",
      role: "VP of Technology",
      organization: "E-commerce Platform"
    },
    {
      quote: "TrustIQ's retail-specific governance checks ensure our AI initiatives meet both business objectives and compliance requirements. It's become our compliance dashboard for AI ethics.",
      role: "Head of Data & Analytics",
      organization: "Fashion Retailer"
    }
  ]

  return (
    <>
      <SEO 
        title="Retail & E-commerce | SynergyIQ by SynergyPartners.AI"
        description="Assess AI maturity, align governance, and execute transformation in Retail & E-commerce with SynergyIQ—InsightIQ, TrustIQ, ActionIQ, and PlanIQ."
        keywords={['AI governance', 'AI transformation', 'retail AI', 'e-commerce AI', 'AI maturity assessment', 'retail compliance', 'customer personalization']}
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
                <Badge className="mb-4">Retail & E-commerce AI Platform</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Accelerate Responsible AI in <span className="text-primary">Retail & E-commerce</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-4xl lg:max-w-none leading-relaxed">
                  SynergyIQ helps retailers and e-commerce businesses baseline AI maturity, align governance with consumer privacy requirements, and execute transformation roadmaps that improve customer experience, optimize operations, and increase profitability.
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
                  src={retailEcommerceHero} 
                  alt="Retail & E-commerce AI Transformation"
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
                Transform common retail AI challenges into measurable, compliant success stories
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
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
                How SynergyIQ Works in Retail
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
                Each module addresses specific retail needs while working together as a unified platform
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
                      <h4 className="font-semibold text-foreground mb-2">Retail Use Cases:</h4>
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

        {/* Retail AI Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Retail & E-commerce AI Use Cases
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-world applications that demonstrate the value of responsible AI in retail settings
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
                TrustIQ supports alignment to recognized frameworks and retail compliance requirements
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-primary">
                    <th className="text-left p-4 font-semibold text-foreground">Framework</th>
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
                <strong>Note:</strong> TrustIQ supports alignment to recognized frameworks and retail compliance requirements. 
                Retailers can configure weights, thresholds, and evidence definitions to match local policy and industry standards. 
                We do not claim certification; we provide alignment support and audit-ready documentation.
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
                Retailers using SynergyIQ typically see measurable improvements across key performance indicators
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
                <em>Specific results vary by retail context and implementation approach.</em>
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
                Common questions about implementing SynergyIQ in retail and e-commerce
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
                Trusted by Retail Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how retailers are transforming their AI capabilities with SynergyIQ
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
              Deliver personalized, compliant, and profitable customer experiences with AI you can trust.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a Demo to see how.
            </p>
            
            <EmailCapturePhp source="retail-ecommerce-page" />
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

export default RetailEcommerce
