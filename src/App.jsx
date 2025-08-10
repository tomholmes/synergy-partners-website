import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Link } from 'react-router-dom'
import EmailCapturePhp from './components/EmailCapturePhp'
import SEO from './components/SEO'
import { 
  CheckCircle, 
  ArrowRight, 
  Zap,
  Target,
  Shield, 
  BarChart3, 
  Award, 
  Globe,
  TrendingUp,
  Menu,
  X,
  Building2
} from 'lucide-react'
import { useState } from 'react'
import heroDashboard from './assets/hero_dashboard.png'
import aiBusinessTeam from './assets/ai_business_team.png'
import aiGovernanceIcon from './assets/ai_governance_icon.png'
import { APP_CONFIG, ROUTES, MODULES } from './constants'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const modules = [
    {
      name: "InsightIQ",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "AI Maturity Assessment & Benchmarking",
      description: "AIMM-360-powered diagnostic assessments with industry-specific maturity models and benchmarking across 100+ data points. Role-specific views for CIOs, Procurement, and NIST/OMB compliance."
    },
    {
      name: "TrustIQ", 
      icon: <Shield className="h-8 w-8" />,
      title: "AI Governance & Risk Management",
      description: "Configurable scoring engine with crosswalk alignment to NIST AI RMF, CNA AI Maturity Model, and OMB Memos. Evidence-based scoring and governance dashboards."
    },
    {
      name: "ActionIQ",
      icon: <Target className="h-8 w-8" />,
      title: "AI Transformation Roadmaps", 
      description: "Task-level SOWs, Gantt charts, and implementation roadmaps with Microsoft solution alignment and federal-ready outputs. Role-based RACI and task dependencies."
    },
    {
      name: "PlanIQ",
      icon: <TrendingUp className="h-8 w-8" />,
      title: "KPIs, Milestones & Tracking",
      description: "AI-generated KPIs, health dashboards, and governance tier tracking with milestone templates and exportable views. Real-time progress monitoring."
    }
  ]

  const benefits = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Rapid AI Maturity Assessments",
      description: "Aligned with global frameworks and industry standards"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Tailored Implementation Guidance", 
      description: "Customized roadmaps for your specific industry and use cases"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Transparent AI Governance",
      description: "Evidence-based scoring and compliance tracking"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "End-to-End Planning",
      description: "From assessment to implementation and monitoring"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Microsoft Integration",
      description: "Built for the Microsoft ecosystem with Azure OpenAI support"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Federal Compliance Ready",
      description: "SOC2-ready with role-based access and full data control"
    }
  ]

  return (
    <>
      <SEO 
        title={`${APP_CONFIG.NAME} - ${APP_CONFIG.TAGLINE}`}
        description={APP_CONFIG.DESCRIPTION}
        keywords={['AI governance', 'AI transformation', 'enterprise AI', 'AI strategy', 'AI maturity assessment']}
        image="/og-image.jpg"
        type="website"
      />
      <div className="min-h-screen bg-background">
        {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={aiGovernanceIcon} alt={APP_CONFIG.NAME} className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold text-primary">{APP_CONFIG.NAME}</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#platform" className="text-foreground hover:text-primary transition-colors">Platform</a>
              <a href="#solutions" className="text-foreground hover:text-primary transition-colors">Solutions</a>
              <a href="#resources" className="text-foreground hover:text-primary transition-colors">Resources</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Book Demo
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">Home</a>
                <a href="#platform" className="block px-3 py-2 text-foreground hover:text-primary">Platform</a>
                <a href="#solutions" className="block px-3 py-2 text-foreground hover:text-primary">Solutions</a>
                <a href="#resources" className="block px-3 py-2 text-foreground hover:text-primary">Resources</a>
                <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">About</a>
                <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">Contact</a>
                <div className="px-3 py-2 space-y-2">
                  <Button className="w-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                    Book Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32 relative overflow-hidden hero-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hero-content">
            {/* Text Content - Left Side */}
            <div className="hero-text">
              <Badge className="mb-4">AI Governance Platform</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                {APP_CONFIG.TAGLINE.split(' ').map((word, index, array) => 
                  <span key={index}>
                    {word === 'Curious' || word === 'Confident' ? 
                      <span className="text-primary">{word}</span> : 
                      word
                    }
                    {index < array.length - 1 && ' '}
                  </span>
                )}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Transform your organization with actionable AI assessments, responsible governance, and implementation roadmaps. 
                {APP_CONFIG.NAME} helps enterprises unlock AI value through comprehensive maturity analysis and strategic planning.
              </p>
              <div className="flex justify-center">
                <Button size="lg" className="text-lg px-8" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Book Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            
            {/* Image - Right Side */}
            <div className="hero-image">
              <img 
                src={heroDashboard} 
                alt="SynergyIQ Platform Dashboard showing AI governance metrics, KPIs, and transformation roadmaps" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section id="platform" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Meet <span className="text-primary">SynergyIQ</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our unified platform for enterprise AI readiness, governance, and transformation planning. 
              Four integrated modules that bring together deep diagnostics, intelligent benchmarking, and actionable roadmaps.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => {
              const moduleLinks = {
                [MODULES.INSIGHT_IQ]: ROUTES.INSIGHT_IQ,
                [MODULES.TRUST_IQ]: ROUTES.TRUST_IQ, 
                [MODULES.ACTION_IQ]: ROUTES.ACTION_IQ,
                [MODULES.PLAN_IQ]: ROUTES.PLAN_IQ
              }
              
              return (
                <Link key={index} to={moduleLinks[module.name]} className="block">
                  <Card className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          {module.icon}
                        </div>
                        <Badge variant="secondary">{module.name}</Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">
                        {module.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Industry-Specific <span className="text-primary">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored AI governance and transformation solutions for your industry's unique challenges and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to={ROUTES.MANUFACTURING} className="block">
              <Card className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Target className="h-8 w-8" />
                    </div>
                    <Badge variant="secondary">Manufacturing</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Manufacturing & CPG
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Accelerate responsible AI adoption across plants and supply chains with maturity assessment, governance alignment, and transformation roadmaps.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to={ROUTES.HIGHER_EDUCATION} className="block">
              <Card className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Award className="h-8 w-8" />
                    </div>
                    <Badge variant="secondary">Higher Education</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Higher Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Assess AI maturity, align governance, and execute transformation in higher education with responsible AI adoption strategies.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to={ROUTES.HEALTHCARE} className="block">
              <Card className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Shield className="h-8 w-8" />
                    </div>
                    <Badge variant="secondary">Healthcare</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Healthcare
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Accelerate responsible AI adoption in healthcare with clinical governance, privacy compliance, and transformation roadmaps.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to={ROUTES.FINANCIAL_SERVICES} className="block">
              <Card className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <BarChart3 className="h-8 w-8" />
                    </div>
                    <Badge variant="secondary">Financial Services</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Financial Services
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Accelerate responsible AI adoption in financial services with model risk governance, regulatory compliance, and transformation roadmaps.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to={ROUTES.ENTERPRISE} className="block">
              <Card className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Building2 className="h-8 w-8" />
                    </div>
                    <Badge variant="secondary">Enterprise</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Enterprise
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Unify AI initiatives across business units with coordinated governance, transformation roadmaps, and portfolio management.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to={ROUTES.PUBLIC_SECTOR} className="block">
              <Card className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Building2 className="h-8 w-8" />
                    </div>
                    <Badge variant="secondary">Public Sector</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Public Sector & Government
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Accelerate responsible AI adoption in the public sector with federal compliance, governance alignment, and transformation roadmaps.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>

            <Link to={ROUTES.ENERGY_UTILITIES} className="block">
              <Card className="hover:shadow-lg transition-shadow duration-300 group cursor-pointer h-full">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Zap className="h-8 w-8" />
                    </div>
                    <Badge variant="secondary">Energy & Utilities</Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    Energy & Utilities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    Accelerate responsible AI adoption in energy & utilities with safety compliance, predictive maintenance, and operational efficiency.
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">{APP_CONFIG.NAME}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive AI governance that accelerates adoption while ensuring compliance and risk management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-muted-foreground">
              Helping enterprises across industries achieve AI confidence
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={aiBusinessTeam} 
                alt="Professional AI Strategy Team collaborating on enterprise AI transformation and governance" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg">SOC2-Ready Security & Compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg">Microsoft Ecosystem Integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg">Federal & Enterprise Ready</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-lg">NIST AI RMF Aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Accelerate Your AI Strategy?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book a live demo today. 
            Transform from AI curious to AI confident with {APP_CONFIG.NAME}.
          </p>
          
          <EmailCapturePhp source="homepage" />
          
          <div className="mt-8 text-center">
            <p className="text-sm opacity-80">
              After submitting your information, we'll automatically send you a confirmation email and schedule your demo.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src={aiGovernanceIcon} alt={APP_CONFIG.NAME} className="h-8 w-8 mr-3 filter invert" />
                <span className="text-xl font-bold">{APP_CONFIG.NAME}</span>
              </div>
              <p className="text-background/80">
                {APP_CONFIG.TAGLINE}. {APP_CONFIG.DESCRIPTION}.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/insightiq" className="hover:text-background transition-colors">InsightIQ</Link></li>
                <li><Link to="/trustiq" className="hover:text-background transition-colors">TrustIQ</Link></li>
                <li><Link to="/actioniq" className="hover:text-background transition-colors">ActionIQ</Link></li>
                <li><Link to="/planiq" className="hover:text-background transition-colors">PlanIQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Federal Government</a></li>
                <li><Link to={ROUTES.MANUFACTURING} className="hover:text-background transition-colors">Manufacturing</Link></li>
                <li><Link to={ROUTES.HIGHER_EDUCATION} className="hover:text-background transition-colors">Higher Education</Link></li>
                <li><Link to={ROUTES.HEALTHCARE} className="hover:text-background transition-colors">Healthcare</Link></li>
                <li><Link to={ROUTES.FINANCIAL_SERVICES} className="hover:text-background transition-colors">Financial Services</Link></li>
                <li><Link to={ROUTES.ENTERPRISE} className="hover:text-background transition-colors">Enterprise</Link></li>
                <li><Link to={ROUTES.PUBLIC_SECTOR} className="hover:text-background transition-colors">Public Sector</Link></li>
                <li><Link to={ROUTES.ENERGY_UTILITIES} className="hover:text-background transition-colors">Energy & Utilities</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Whitepapers</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Assessment Tool</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2025 {APP_CONFIG.NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
      </div>
    </>
  )
}

export default App

