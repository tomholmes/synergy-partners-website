import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import aiGovernanceIcon from '../assets/ai_governance_icon.png'
import { APP_CONFIG, ROUTES, MODULES } from '../constants'
import SEO from './SEO'
import EmailCapturePhp from './EmailCapturePhp'

function ModulePage({ 
  moduleData, 
  heroImage, 
  features, 
  benefits, 
  useCases, 
  technicalSpecs 
}) {
  return (
    <>
      <SEO 
        title={`${moduleData.name} - ${APP_CONFIG.NAME}`}
        description={moduleData.description}
        keywords={['AI governance', 'AI transformation', moduleData.name.toLowerCase(), 'enterprise AI']}
        image="/og-image.jpg"
        type="website"
      />
      <div className="min-h-screen bg-background">
        {/* Navigation */}
      <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to={ROUTES.HOME} className="flex items-center">
              <img src={aiGovernanceIcon} alt={APP_CONFIG.NAME} className="h-8 w-8 mr-3" />
              <span className="text-xl font-bold text-foreground">{APP_CONFIG.NAME}</span>
            </Link>
            
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/platform" className="text-muted-foreground hover:text-foreground transition-colors">Platform</Link>
              <Link to="/solutions" className="text-muted-foreground hover:text-foreground transition-colors">Solutions</Link>
              <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to={ROUTES.HOME} className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Platform Overview
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {moduleData.icon}
                </div>
                <Badge variant="secondary" className="text-lg px-4 py-2">{moduleData.name}</Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                {moduleData.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {moduleData.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt={`${moduleData.name} Interface`}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Key Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive capabilities designed for enterprise AI governance and transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Why Choose {moduleData.name}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven benefits that drive real business value and accelerate your AI transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                  <CheckCircle className="h-6 w-6" />
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

      {/* Use Cases */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Use Cases & Applications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real-world scenarios where {moduleData.name} delivers measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {useCase.description}
                  </CardDescription>
                  <div className="mt-4">
                    <Badge variant="outline">{useCase.industry}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Technical Specifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Enterprise-grade capabilities built for scale, security, and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {technicalSpecs.map((spec, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{spec.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {spec.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started with {moduleData.name}?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Experience the power of {moduleData.name} with a personalized demo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Schedule Your {moduleData.name} Demo
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Get a personalized walkthrough of how {moduleData.name} can transform your organization.
          </p>
          
          <EmailCapturePhp source={`${moduleData.name.toLowerCase()}-page`} />
          
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
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
                <img src={aiGovernanceIcon} alt="SynergyPartners.AI" className="h-8 w-8 mr-3 filter invert" />
                <span className="text-xl font-bold">SynergyPartners.AI</span>
              </div>
              <p className="text-background/80">
                From AI Curious to AI Confident. Comprehensive AI governance and transformation platform.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-background/80">
                              <li><Link to={ROUTES.INSIGHT_IQ} className="hover:text-background transition-colors">{MODULES.INSIGHT_IQ}</Link></li>
              <li><Link to={ROUTES.TRUST_IQ} className="hover:text-background transition-colors">{MODULES.TRUST_IQ}</Link></li>
              <li><Link to={ROUTES.ACTION_IQ} className="hover:text-background transition-colors">{MODULES.ACTION_IQ}</Link></li>
              <li><Link to={ROUTES.PLAN_IQ} className="hover:text-background transition-colors">{MODULES.PLAN_IQ}</Link></li>
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

ModulePage.propTypes = {
  moduleData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired,
  heroImage: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.element.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  benefits: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })).isRequired,
  useCases: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired
  })).isRequired,
  technicalSpecs: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.string.isRequired,
    items: PropTypes.arrayOf(PropTypes.string).isRequired
  })).isRequired
}

export default ModulePage

