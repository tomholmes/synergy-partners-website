import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Badge } from '../components/ui/badge'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import EmailCapturePhp from '../components/EmailCapturePhp'
import SEO from '../components/SEO'
import Header from '../components/Header'
import { 
  GraduationCap, 
  Shield, 
  BarChart3, 
  Target, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Users,
  BookOpen,
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
  Quote
} from 'lucide-react'
import { APP_CONFIG, ROUTES } from '../constants'
import higherEducationHero from '../assets/industries/higher-education-hero.svg'

function HigherEducation() {
  // Note: Form handling is managed by the EmailCapturePhp component
  // This component provides the contact form functionality

  const problemOutcomeCards = [
    {
      problem: "Fragmented AI pilots",
      outcome: "A single, evidence‑based maturity baseline",
      icon: <PieChart className="h-6 w-6" />
    },
    {
      problem: "Compliance uncertainty",
      outcome: "Audit‑ready governance scoring and documentation",
      icon: <Shield className="h-6 w-6" />
    },
    {
      problem: "Unclear ROI",
      outcome: "Prioritized roadmaps with task‑level KPIs",
      icon: <BarChart3 className="h-6 w-6" />
    },
    {
      problem: "Siloed data & models",
      outcome: "Centralized visibility across functions and vendors",
      icon: <Database className="h-6 w-6" />
    }
  ]

  const howItWorksSteps = [
    {
      step: 1,
      title: "Assess",
      description: "with AIMM‑360 to baseline capabilities and risks",
      icon: <BarChart3 className="h-8 w-8" />
    },
    {
      step: 2,
      title: "Benchmark",
      description: "with InsightIQ to compare across peers and internal units",
      icon: <Award className="h-8 w-8" />
    },
    {
      step: 3,
      title: "Govern",
      description: "with TrustIQ to align to frameworks and evidence requirements",
      icon: <Shield className="h-8 w-8" />
    },
    {
      step: 4,
      title: "Execute",
      description: "with ActionIQ & track with PlanIQ to deliver time‑bound results",
      icon: <Target className="h-8 w-8" />
    }
  ]

  const modules = [
    {
      name: "InsightIQ",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Assessment & Benchmarking",
      description: "Diagnose readiness across strategy, data, governance, people, use cases, and operations. Role‑aware dashboards and peer benchmarks guide where to invest first.",
      features: ["AIMM‑360 survey", "Role-based views", "Peer benchmarks", "PDF/interactive reports"],
      useCases: ["Academic unit comparisons", "Enterprise readiness", "Sourcing decisions"]
    },
    {
      name: "TrustIQ",
      icon: <Shield className="h-8 w-8" />,
      title: "Governance & Compliance",
      description: "Configurable scoring aligned to recognized frameworks. Evidence tracking, stale‑evidence penalties, and transparency waterfalls build institutional confidence.",
      features: ["Configurable scoring", "Evidence tracking", "Stale-evidence penalties", "Framework crosswalks"],
      useCases: ["NIST AI RMF alignment", "Academic integrity tooling review", "Vendor risk oversight"]
    },
    {
      name: "ActionIQ",
      icon: <Target className="h-8 w-8" />,
      title: "Roadmaps & SOWs",
      description: "Auto‑generated, dependency‑aware plans with RACI and budget guardrails. Aligns to Microsoft solution areas when applicable.",
      features: ["Auto-generated SOWs", "Dependencies", "Budget logic", "RACI", "Microsoft solution mapping"],
      useCases: ["Advising chatbots rollout", "Data platform modernization", "Model risk controls"]
    },
    {
      name: "PlanIQ",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "KPIs & Transformation Tracking",
      description: "Converts plans into measurable KPIs and milestones. Monitors governance tiers, adoption, and value realization across terms and academic years.",
      features: ["Task‑level KPIs", "Milestone dashboards", "Governance tier tracking", "Export to OKRs/BI"],
      useCases: ["Retention initiatives", "Enrollment ops", "Faculty enablement tracking"]
    }
  ]

  const useCases = [
    {
      title: "Student Success & Retention",
      description: "Identify risk signals early and support advisors with AI copilots grounded in institutional policy.",
      icon: <Users className="h-6 w-6" />
    },
    {
      title: "Enrollment & Financial Aid Ops",
      description: "Triage documents and cases, reduce manual effort, and improve cycle times with responsible automation.",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "Faculty Enablement & Academic Integrity",
      description: "Provide AI literacy resources and governance‑vetted tools that protect learning outcomes.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      title: "Research & Data Governance",
      description: "Maintain a registry of models, datasets, and decisions with transparent lineage and review.",
      icon: <Database className="h-6 w-6" />
    },
    {
      title: "Institutional Effectiveness",
      description: "Modernize analytics to support planning, accreditation, and board reporting.",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      title: "Accessibility & Inclusion",
      description: "Apply inclusive design and monitor for bias in student‑facing AI interactions.",
      icon: <Globe className="h-6 w-6" />
    }
  ]

  const frameworks = [
    {
      framework: "NIST AI RMF",
      checks: "Risk management artifacts, impact assessments",
      evidence: "Policy docs, model cards, review logs"
    },
    {
      framework: "OMB/GSA Guidance",
      checks: "Governance processes, procurement oversight",
      evidence: "Review logs, vendor assessments, policy alignment"
    },
    {
      framework: "Institutional Data Policies",
      checks: "Access controls, FERPA considerations",
      evidence: "Audit logs, data classification, consent records"
    }
  ]

  const outcomes = [
    {
      metric: "Time to Assessment",
      change: "↓",
      description: "Faster maturity baseline"
    },
    {
      metric: "Governance Coverage",
      change: "↑",
      description: "Comprehensive compliance"
    },
    {
      metric: "Time to Pilot",
      change: "↓",
      description: "Accelerated deployment"
    },
    {
      metric: "Stakeholder Satisfaction",
      change: "↑",
      description: "Improved transparency"
    }
  ]

  const faqs = [
    {
      question: "How does SynergyIQ integrate with Microsoft/Azure OpenAI?",
      answer: "SynergyIQ provides native integration with Microsoft solutions, including Azure OpenAI. Our platform aligns with Microsoft's AI governance frameworks and can import/export data from Azure services. ActionIQ specifically maps to Microsoft solution areas for seamless implementation planning."
    },
    {
      question: "What data and documents are needed for the first assessment?",
      answer: "The initial assessment requires basic institutional information, existing AI initiatives, governance policies, and stakeholder interviews. We provide a comprehensive checklist and can work with your team to gather information incrementally. No sensitive data is required for the baseline assessment."
    },
    {
      question: "How customizable is the governance scoring?",
      answer: "TrustIQ offers highly configurable scoring that can be tailored to your institution's specific policies, accreditation requirements, and risk tolerance. You can adjust weights, thresholds, and evidence definitions to match local governance frameworks while maintaining alignment with industry standards."
    },
    {
      question: "Can we benchmark across colleges or internal schools?",
      answer: "Yes, InsightIQ provides both peer benchmarking across similar institutions and internal benchmarking across your academic units. This helps identify best practices, resource allocation opportunities, and areas where cross-departmental collaboration could accelerate AI adoption."
    },
    {
      question: "How do you handle FERPA-related considerations?",
      answer: "SynergyIQ is designed with higher education compliance in mind. Our platform supports FERPA-compliant data handling, role-based access controls, and audit trails. We can configure governance scoring to include FERPA-specific requirements and help ensure your AI initiatives maintain student privacy."
    },
    {
      question: "How quickly can we launch the first pilot with ActionIQ?",
      answer: "With ActionIQ, you can typically launch your first AI pilot within 4-8 weeks after completing the assessment phase. The platform generates detailed implementation roadmaps with dependencies, resource requirements, and milestone tracking. Many institutions see their first measurable outcomes within the first academic term."
    }
  ]

  const testimonials = [
    {
      quote: "SynergyIQ gave us the framework we needed to move from scattered AI experiments to a coordinated, compliant strategy. The maturity assessment revealed gaps we didn't know existed.",
      role: "CIO",
      organization: "Regional University System"
    },
    {
      quote: "The governance scoring in TrustIQ helped us align our AI initiatives with accreditation requirements while maintaining academic freedom. It's become our compliance dashboard.",
      role: "Dean of Academic Affairs",
      organization: "Liberal Arts College"
    },
    {
      quote: "ActionIQ transformed our student success planning from reactive to proactive. We now have clear roadmaps with measurable KPIs that our board can understand and support.",
      role: "Director of Student Success",
      organization: "State University"
    }
  ]

  return (
    <>
      <SEO 
        title="Higher Education | SynergyIQ by SynergyPartners.AI"
        description="Assess AI maturity, align governance, and execute transformation in Higher Education with SynergyIQ—InsightIQ, TrustIQ, ActionIQ, and PlanIQ."
        keywords={['AI governance', 'AI transformation', 'higher education', 'AI maturity assessment', 'academic AI', 'FERPA compliance']}
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
                <Badge className="mb-4">Higher Education AI Platform</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                  Accelerate Responsible AI in <span className="text-primary">Higher Education</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-4xl lg:max-w-none leading-relaxed">
                  SynergyIQ helps higher education institutions baseline AI maturity, align with academic and compliance requirements, and execute roadmaps that turn pilots into safe, compliant, and measurable outcomes.
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
                  src={higherEducationHero} 
                  alt="Higher Education AI Transformation"
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
                Transform common higher education AI challenges into measurable, compliant success stories
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
                How SynergyIQ Works in Higher Ed
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
                Each module addresses specific higher education needs while working together as a unified platform
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
                      <h4 className="font-semibold text-foreground mb-2">Higher Ed Use Cases:</h4>
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

        {/* Higher Ed AI Use Cases */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Higher Education AI Use Cases
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real-world applications that demonstrate the value of responsible AI in academic settings
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
                TrustIQ supports alignment to recognized frameworks and federal guidance
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
                <strong>Note:</strong> TrustIQ supports alignment to recognized frameworks (e.g., NIST AI RMF) and federal guidance. 
                Institutions can configure weights, thresholds, and evidence definitions to match local policy. 
                We do not claim certification; we provide alignment support and audit‑ready documentation.
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
                Institutions using SynergyIQ typically see measurable improvements across key performance indicators
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
                <em>Specific results vary by institutional context and implementation approach.</em>
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
                Common questions about implementing SynergyIQ in higher education
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
                Trusted by Higher Education Leaders
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                See how institutions are transforming their AI capabilities with SynergyIQ
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
              Ready to move from pilots to measurable, responsible AI at your institution?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a Demo to begin your AI transformation journey with SynergyIQ
            </p>
            
            <EmailCapturePhp source="higher-education-page" />
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

export default HigherEducation
