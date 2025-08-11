import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'
import { Link } from 'react-router-dom'
import EmailCapturePhp from './components/EmailCapturePhp'
import SEO from './components/SEO'
import { motion } from 'framer-motion'
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
  Building2,
  Sparkles,
  Star,
  Zap as Lightning,
  ShoppingBag
} from 'lucide-react'
import { useState } from 'react'
import heroDashboard from './assets/hero_dashboard.png'
import aiBusinessTeam from './assets/ai_business_team.png'
import aiGovernanceIcon from './assets/ai_governance_icon.png'
import { APP_CONFIG, ROUTES, MODULES } from './constants'
import { 
  heroVariants, 
  heroTextVariants, 
  heroImageVariants, 
  cardVariants, 
  staggerContainer, 
  staggerItem,
  buttonVariants,
  badgeVariants,
  scrollVariants,
  navVariants,
  // Enhanced animations
  heroEnhancedVariants,
  heroTextEnhancedVariants,
  heroImageEnhancedVariants,
  cardEnhancedVariants,
  staggerEnhancedContainer,
  staggerEnhancedItem,
  buttonEnhancedVariants,
  badgeEnhancedVariants,
  scrollEnhancedVariants,
  navEnhancedVariants,
  parallaxVariants,
  morphVariants,
  particleVariants,
  textRevealVariants,
  staggerTextReveal,
  hoverLiftVariants,
  hoverScaleVariants,
  hoverRotateVariants,
  glowVariants,
  morphingBackgroundVariants,
  floatingEnhancedVariants,
  pulseEnhancedVariants,
  waveVariants
} from './lib/animations'

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
        {/* Enhanced Navigation */}
        <motion.nav 
          className="nav-modern-enhanced border-b sticky top-0 z-50"
          variants={navEnhancedVariants}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <motion.div
                  variants={morphVariants}
                  initial="initial"
                  animate="animate"
                  className="relative"
                >
                  <motion.img 
                    src={aiGovernanceIcon} 
                    alt={APP_CONFIG.NAME} 
                    className="h-8 w-8 mr-3"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full"
                    variants={pulseEnhancedVariants}
                    initial="initial"
                    animate="animate"
                  />
                </motion.div>
                <motion.span 
                  className="text-xl font-bold text-gradient-enhanced"
                  variants={textRevealVariants}
                  initial="initial"
                  animate="animate"
                >
                  {APP_CONFIG.NAME}
                </motion.span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {['Home', 'Platform', 'Solutions', 'Resources', 'About', 'Contact'].map((item, index) => (
                  <motion.a 
                    key={item}
                    href={`#${item.toLowerCase()}`} 
                    className="text-foreground hover:text-primary transition-colors relative group"
                    variants={textRevealVariants}
                    initial="initial"
                    animate="animate"
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                    />
                  </motion.a>
                ))}
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <motion.div
                  variants={buttonEnhancedVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    className="btn-modern-enhanced"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Book Demo
                  </Button>
                </motion.div>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <motion.div
                  variants={buttonEnhancedVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="btn-modern-enhanced"
                  >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <motion.div 
                className="md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-ultra border-t">
                  {['Home', 'Platform', 'Solutions', 'Resources', 'About', 'Contact'].map((item, index) => (
                    <motion.a 
                      key={item}
                      href={`#${item.toLowerCase()}`} 
                      className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <div className="px-3 py-2 space-y-2">
                    <Button className="w-full btn-modern-enhanced" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Book Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>

        {/* Enhanced Hero Section */}
        <motion.section 
          id="home" 
          className="py-20 lg:py-32 relative overflow-hidden hero-modern-enhanced bg-pattern-dots"
          variants={heroEnhancedVariants}
          initial="initial"
          animate="animate"
        >
          {/* Floating background elements */}
          <motion.div 
            className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
            variants={morphingBackgroundVariants}
            initial="initial"
            animate="animate"
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full blur-xl"
            variants={morphingBackgroundVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 2 }}
          />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content - Left Side */}
              <motion.div 
                className="text-center lg:text-left"
                variants={heroTextEnhancedVariants}
              >
                <motion.div
                  variants={badgeEnhancedVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className="inline-block"
                >
                  <Badge className="mb-6 badge-modern-enhanced text-sm px-4 py-2">
                    <Star className="mr-2 h-3 w-3" />
                    AI Governance Platform
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-hero-enhanced font-bold text-foreground mb-8 leading-tight"
                  variants={staggerTextReveal}
                  initial="initial"
                  animate="animate"
                >
                  <motion.span 
                    variants={textRevealVariants}
                    style={{ color: 'red', fontWeight: 'bold', fontSize: '1.5rem', display: 'inline-block', marginRight: '0.5rem' }}
                  >
                    From{' '}
                  </motion.span>
                  <motion.span 
                    variants={textRevealVariants}
                    className="inline-block mr-2"
                  >
                    <span className="text-gradient-enhanced">AI Curious</span>
                  </motion.span>
                  <motion.span 
                    variants={textRevealVariants}
                    style={{ color: 'red', fontWeight: 'bold', fontSize: '1.5rem', display: 'inline-block', marginRight: '0.5rem' }}
                  >
                    to{' '}
                  </motion.span>
                  <motion.span 
                    variants={textRevealVariants}
                    className="inline-block mr-2"
                  >
                    <span className="text-gradient-enhanced">AI Confident</span>
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={textRevealVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.4 }}
                >
                  Transform your organization with actionable AI assessments, responsible governance, and implementation roadmaps. 
                  {APP_CONFIG.NAME} helps enterprises unlock AI value through comprehensive maturity analysis and strategic planning.
                </motion.p>
                
                <motion.div 
                  className="flex justify-center lg:justify-start space-x-4"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-6 btn-modern-enhanced gradient-hero-enhanced hover:shadow-glow"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Lightning className="mr-2 h-5 w-5" />
                    Book Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="text-lg px-8 py-6 glass-ultra hover:glass-ultra-dark"
                    onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Learn More
                  </Button>
                </motion.div>
              </motion.div>
              
              {/* Image - Right Side */}
              <motion.div 
                className="relative"
                variants={heroImageEnhancedVariants}
              >
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img 
                    src={heroDashboard} 
                    alt="SynergyIQ Platform Dashboard showing AI governance metrics, KPIs, and transformation roadmaps"
                    className="w-full h-auto rounded-2xl shadow-strong relative z-10"
                  />
                  
                  {/* Enhanced floating elements */}
                  <motion.div 
                    className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full backdrop-blur floating"
                    variants={floatingEnhancedVariants}
                    initial="initial"
                    animate="animate"
                  />
                  <motion.div 
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full backdrop-blur floating-delayed"
                    variants={floatingEnhancedVariants}
                    initial="initial"
                    animate="animate"
                  />
                  <motion.div 
                    className="absolute top-1/2 -right-8 w-8 h-8 bg-primary/30 rounded-full backdrop-blur floating-slow"
                    variants={floatingEnhancedVariants}
                    initial="initial"
                    animate="animate"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Enhanced Platform Overview */}
        <motion.section 
          id="platform" 
          className="py-24 bg-muted/30 relative overflow-hidden bg-pattern-grid"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={scrollEnhancedVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              variants={staggerEnhancedItem}
            >
              <motion.h2 
                className="text-display font-bold text-foreground mb-8"
                variants={textRevealVariants}
              >
                Meet <span className="text-gradient-enhanced">SynergyIQ</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                variants={textRevealVariants}
                transition={{ delay: 0.2 }}
              >
                Our unified platform for enterprise AI readiness, governance, and transformation planning. 
                Four integrated modules that bring together deep diagnostics, intelligent benchmarking, and actionable roadmaps.
              </motion.p>
            </motion.div>

            <motion.div 
              className="platform-grid"
              variants={staggerEnhancedContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {modules.map((module, index) => {
                const moduleLinks = {
                  [MODULES.INSIGHT_IQ]: ROUTES.INSIGHT_IQ,
                  [MODULES.TRUST_IQ]: ROUTES.TRUST_IQ, 
                  [MODULES.ACTION_IQ]: ROUTES.ACTION_IQ,
                  [MODULES.PLAN_IQ]: ROUTES.PLAN_IQ
                }
                
                return (
                  <motion.div
                    key={index}
                    variants={staggerEnhancedItem}
                  >
                    <Link to={moduleLinks[module.name]} className="block">
                      <motion.div
                        className="card-modern-enhanced p-8 group cursor-pointer h-full shadow-soft hover:shadow-strong flex flex-col"
                        variants={cardEnhancedVariants}
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <div className="flex items-start space-x-3 mb-6">
                          <motion.div 
                            className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {module.icon}
                          </motion.div>
                          <div className="flex-1 min-w-0">
                            <Badge variant="secondary" className="badge-modern-enhanced mb-2">{module.name}</Badge>
                            
                            <motion.h3 
                              className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                              variants={textRevealVariants}
                            >
                              {module.title}
                            </motion.h3>
                            
                            <motion.p 
                              className="text-muted-foreground leading-relaxed text-sm"
                              variants={textRevealVariants}
                              transition={{ delay: 0.1 }}
                            >
                              {module.description}
                            </motion.p>
                          </div>
                        </div>
                        
                        <motion.div 
                          className="mt-6 flex items-center text-primary group-hover:text-primary-foreground transition-colors"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                        >
                          <span className="text-sm font-medium">Learn more</span>
                          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                      </motion.div>
                    </Link>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>
        </motion.section>

        {/* Enhanced Solutions */}
        <motion.section 
          id="solutions" 
          className="py-24 relative overflow-hidden bg-pattern-hex"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={scrollEnhancedVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              variants={staggerEnhancedItem}
            >
              <motion.h2 
                className="text-display font-bold text-foreground mb-8"
                variants={textRevealVariants}
              >
                Industry-Specific <span className="text-gradient-enhanced">Solutions</span>
              </motion.h2>
              <motion.p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                variants={textRevealVariants}
                transition={{ delay: 0.2 }}
              >
                Tailored AI governance and transformation solutions for your industry's unique challenges and compliance requirements.
              </motion.p>
            </motion.div>

            <motion.div 
              className="industry-grid"
              variants={staggerEnhancedContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerEnhancedItem}>
                <Link to={ROUTES.MANUFACTURING} className="block">
                  <motion.div
                    className="card-modern-enhanced p-8 group cursor-pointer h-full shadow-soft hover:shadow-strong flex flex-col"
                    variants={cardEnhancedVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="flex items-start space-x-3 mb-6">
                      <motion.div 
                        className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Target className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="badge-modern-enhanced mb-2">Manufacturing</Badge>
                        
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                          variants={textRevealVariants}
                        >
                          Manufacturing & CPG
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-sm"
                          variants={textRevealVariants}
                          transition={{ delay: 0.1 }}
                        >
                          Accelerate responsible AI adoption across plants and supply chains with maturity assessment, governance alignment, and transformation roadmaps.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div variants={staggerEnhancedItem}>
                <Link to={ROUTES.HIGHER_EDUCATION} className="block">
                  <motion.div
                    className="card-modern-enhanced p-8 group cursor-pointer h-full shadow-soft hover:shadow-strong flex flex-col"
                    variants={cardEnhancedVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="flex items-start space-x-3 mb-6">
                      <motion.div 
                        className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Award className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="badge-modern-enhanced mb-2">Higher Education</Badge>
                        
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                          variants={textRevealVariants}
                        >
                          Higher Education
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-sm"
                          variants={textRevealVariants}
                          transition={{ delay: 0.1 }}
                        >
                          Assess AI maturity, align governance, and execute transformation in higher education with responsible AI adoption strategies.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div variants={staggerEnhancedItem}>
                <Link to={ROUTES.HEALTHCARE} className="block">
                  <motion.div
                    className="card-modern-enhanced p-8 group cursor-pointer h-full shadow-soft hover:shadow-strong flex flex-col"
                    variants={cardEnhancedVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="flex items-start space-x-3 mb-6">
                      <motion.div 
                        className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Shield className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="badge-modern-enhanced mb-2">Healthcare</Badge>
                        
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                          variants={textRevealVariants}
                        >
                          Healthcare
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-sm"
                          variants={textRevealVariants}
                          transition={{ delay: 0.1 }}
                        >
                          Accelerate responsible AI adoption in healthcare with clinical governance, privacy compliance, and transformation roadmaps.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div variants={staggerEnhancedItem}>
                <Link to={ROUTES.FINANCIAL_SERVICES} className="block">
                  <motion.div
                    className="card-modern-enhanced p-8 group cursor-pointer h-full shadow-soft hover:shadow-strong flex flex-col"
                    variants={cardEnhancedVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="flex items-start space-x-3 mb-6">
                      <motion.div 
                        className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <BarChart3 className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="badge-modern-enhanced mb-2">Financial Services</Badge>
                        
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                          variants={textRevealVariants}
                        >
                          Financial Services
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-sm"
                          variants={textRevealVariants}
                          transition={{ delay: 0.1 }}
                        >
                          Accelerate responsible AI adoption in financial services with model risk governance, regulatory compliance, and transformation roadmaps.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div variants={staggerEnhancedItem}>
                <Link to={ROUTES.ENTERPRISE} className="block">
                  <motion.div
                    className="card-modern-enhanced p-8 group cursor-pointer h-full shadow-soft hover:shadow-strong flex flex-col"
                    variants={cardEnhancedVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="flex items-start space-x-3 mb-6">
                      <motion.div 
                        className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Building2 className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="badge-modern-enhanced mb-2">Enterprise</Badge>
                        
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                          variants={textRevealVariants}
                        >
                          Enterprise
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-sm"
                          variants={textRevealVariants}
                          transition={{ delay: 0.1 }}
                        >
                          Unify AI initiatives across business units with coordinated governance, transformation roadmaps, and portfolio management.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div variants={staggerEnhancedItem}>
                <Link to={ROUTES.PUBLIC_SECTOR} className="block">
                  <motion.div
                    className="card-modern-enhanced p-8 group cursor-pointer h-full shadow-soft hover:shadow-strong flex flex-col"
                    variants={cardEnhancedVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="flex items-start space-x-3 mb-6">
                      <motion.div 
                        className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Building2 className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="badge-modern-enhanced mb-2">Public Sector</Badge>
                        
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                          variants={textRevealVariants}
                        >
                          Public Sector & Government
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-sm"
                          variants={textRevealVariants}
                          transition={{ delay: 0.1 }}
                        >
                          Accelerate responsible AI adoption in the public sector with federal compliance, governance alignment, and transformation roadmaps.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div variants={staggerEnhancedItem}>
                <Link to={ROUTES.ENERGY_UTILITIES} className="block">
                  <motion.div
                    className="card-modern-enhanced p-8 group cursor-pointer h-full shadow-soft hover:shadow-strong flex flex-col"
                    variants={cardEnhancedVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="flex items-start space-x-3 mb-6">
                      <motion.div 
                        className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Zap className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="badge-modern-enhanced mb-2">Energy & Utilities</Badge>
                        
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                          variants={textRevealVariants}
                        >
                          Energy & Utilities
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-sm"
                          variants={textRevealVariants}
                          transition={{ delay: 0.1 }}
                        >
                          Accelerate responsible AI adoption in energy & utilities with safety compliance, predictive maintenance, and operational efficiency.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div variants={staggerEnhancedItem}>
                <Link to={ROUTES.RETAIL_ECOMMERCE} className="block">
                  <motion.div
                    className="card-modern-enhanced p-8 group cursor-pointer h-full shadow-soft hover:shadow-strong flex flex-col"
                    variants={cardEnhancedVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <div className="flex items-start space-x-3 mb-6">
                      <motion.div 
                        className="flex-shrink-0 p-3 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <ShoppingBag className="h-8 w-8" />
                      </motion.div>
                      <div className="flex-1 min-w-0">
                        <Badge variant="secondary" className="badge-modern-enhanced mb-2">Retail & E-commerce</Badge>
                        
                        <motion.h3 
                          className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight"
                          variants={textRevealVariants}
                        >
                          Retail & E-commerce
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground leading-relaxed text-sm"
                          variants={textRevealVariants}
                          transition={{ delay: 0.1 }}
                        >
                          Accelerate responsible AI adoption in retail & e-commerce with customer personalization, supply chain optimization, and privacy compliance.
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Key Benefits */}
        <motion.section 
          className="py-24 relative overflow-hidden"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              variants={staggerItem}
            >
              <h2 className="text-display font-bold text-foreground mb-8">
                Why Choose <span className="text-gradient">{APP_CONFIG.NAME}</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive AI governance that accelerates adoption while ensuring compliance and risk management.
              </p>
            </motion.div>

            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 space-modern-lg"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={staggerItem}
                >
                  <div className="flex items-start space-x-4 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent flex-shrink-0">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Trust Indicators */}
        <motion.section 
          className="py-24 relative overflow-hidden"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              className="text-center mb-20"
              variants={staggerItem}
            >
              <h2 className="text-display font-bold text-foreground mb-8">
                Trusted by Leading Organizations
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Helping enterprises across industries achieve AI confidence
              </p>
            </motion.div>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-8 items-center space-modern-lg"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <motion.div variants={staggerItem}>
                <img 
                  src={aiBusinessTeam} 
                  alt="Professional AI Strategy Team collaborating on enterprise AI transformation and governance" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div variants={staggerItem}>
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
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          id="contact" 
          className="py-24 relative overflow-hidden"
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          variants={scrollVariants}
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h2 
              className="text-display font-bold mb-8"
              variants={staggerItem}
            >
              Ready to Accelerate Your AI Strategy?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              variants={staggerItem}
            >
              Book a live demo today. 
              Transform from AI curious to AI confident with {APP_CONFIG.NAME}.
            </motion.p>
            
            <EmailCapturePhp source="homepage" />
            
            <motion.div 
              className="mt-8 text-center"
              variants={staggerItem}
            >
              <p className="text-sm opacity-80">
                After submitting your information, we'll automatically send you a confirmation email and schedule your demo.
              </p>
            </motion.div>
          </div>
        </motion.section>

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
                  <li><Link to={ROUTES.RETAIL_ECOMMERCE} className="hover:text-background transition-colors">Retail & E-commerce</Link></li>
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

