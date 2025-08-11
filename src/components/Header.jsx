import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  ChevronDown, 
  Building2, 
  Target, 
  Shield, 
  BarChart3, 
  Award, 
  Zap,
  TrendingUp,
  Globe,
  Users,
  FileText,
  BookOpen,
  PlayCircle,
  Download,
  ExternalLink,
  ShoppingBag
} from 'lucide-react'
import { APP_CONFIG, ROUTES, MODULES } from '../constants'
import { 
  navVariants, 
  dropdownVariants, 
  buttonVariants,
  badgeVariants,
  staggerContainer,
  staggerItem
} from '../lib/animations'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    {
      name: 'Platform',
      href: '#',
      dropdown: [
        {
          name: 'InsightIQ',
          description: 'AI Maturity Assessment & Benchmarking',
          href: ROUTES.INSIGHT_IQ,
          icon: <BarChart3 className="h-5 w-5" />,
          badge: 'Assessment'
        },
        {
          name: 'TrustIQ',
          description: 'AI Governance & Risk Management',
          href: ROUTES.TRUST_IQ,
          icon: <Shield className="h-5 w-5" />,
          badge: 'Governance'
        },
        {
          name: 'ActionIQ',
          description: 'AI Transformation Roadmaps',
          href: ROUTES.ACTION_IQ,
          icon: <Target className="h-5 w-5" />,
          badge: 'Roadmap'
        },
        {
          name: 'PlanIQ',
          description: 'KPIs, Milestones & Tracking',
          href: ROUTES.PLAN_IQ,
          icon: <TrendingUp className="h-5 w-5" />,
          badge: 'Tracking'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '#',
      dropdown: [
        {
          name: 'Manufacturing & CPG',
          description: 'AI adoption across plants and supply chains',
          href: ROUTES.MANUFACTURING,
          icon: <Target className="h-5 w-5" />,
          badge: 'Industry'
        },
        {
          name: 'Higher Education',
          description: 'AI governance and transformation in education',
          href: ROUTES.HIGHER_EDUCATION,
          icon: <Award className="h-5 w-5" />,
          badge: 'Education'
        },
        {
          name: 'Healthcare',
          description: 'Clinical governance and privacy compliance',
          href: ROUTES.HEALTHCARE,
          icon: <Shield className="h-5 w-5" />,
          badge: 'Healthcare'
        },
        {
          name: 'Financial Services',
          description: 'Model risk governance and compliance',
          href: ROUTES.FINANCIAL_SERVICES,
          icon: <BarChart3 className="h-5 w-5" />,
          badge: 'Finance'
        },
        {
          name: 'Enterprise',
          description: 'Unified AI initiatives across business units',
          href: ROUTES.ENTERPRISE,
          icon: <Building2 className="h-5 w-5" />,
          badge: 'Enterprise'
        },
        {
          name: 'Public Sector',
          description: 'Federal compliance and governance',
          href: ROUTES.PUBLIC_SECTOR,
          icon: <Globe className="h-5 w-5" />,
          badge: 'Government'
        },
        {
          name: 'Energy & Utilities',
          description: 'Safety compliance and predictive maintenance',
          href: ROUTES.ENERGY_UTILITIES,
          icon: <Zap className="h-5 w-5" />,
          badge: 'Energy'
        },
        {
          name: 'Retail & E-commerce',
          description: 'Customer personalization and supply chain optimization',
          href: ROUTES.RETAIL_ECOMMERCE,
          icon: <ShoppingBag className="h-5 w-5" />,
          badge: 'Retail'
        }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      dropdown: [
        {
          name: 'Whitepapers',
          description: 'In-depth research on AI governance',
          href: '#',
          icon: <FileText className="h-5 w-5" />,
          badge: 'Research'
        },
        {
          name: 'Case Studies',
          description: 'Real-world AI transformation stories',
          href: '#',
          icon: <BookOpen className="h-5 w-5" />,
          badge: 'Stories'
        },
        {
          name: 'Assessment Tool',
          description: 'Learn more about AIMM-360™',
          href: '#',
          icon: <Target className="h-5 w-5" />,
          badge: 'Learn'
        },
        {
          name: 'Documentation',
          description: 'Platform guides and API docs',
          href: '#',
          icon: <FileText className="h-5 w-5" />,
          badge: 'Docs'
        }
      ]
    },
    {
      name: 'About',
      href: '#about'
    },
    {
      name: 'Contact',
      href: '#contact'
    }
  ]

  const isActive = (path) => {
    if (path === '#') return false
    if (path.startsWith('#')) return location.hash === path
    return location.pathname === path
  }

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'nav-modern shadow-medium backdrop-blur-md' 
          : 'bg-transparent'
      }`}
      variants={navVariants}
      initial="initial"
      animate="animate"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            variants={badgeVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="p-2 bg-primary/10 rounded-xl text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Building2 className="h-6 w-6" />
              </motion.div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {APP_CONFIG.NAME}
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-1 group ${
                        isActive(item.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground hover:text-primary hover:bg-muted/50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-md border border-border/50 rounded-xl shadow-strong p-4"
                          variants={dropdownVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                        >
                          <motion.div 
                            className="grid gap-3"
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                          >
                            {item.dropdown.map((dropdownItem, index) => (
                              <motion.div
                                key={dropdownItem.name}
                                variants={staggerItem}
                              >
                                <Link
                                  to={dropdownItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                                  onClick={() => setActiveDropdown(null)}
                                >
                                  <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    {dropdownItem.icon}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                        {dropdownItem.name}
                                      </p>
                                      <Badge variant="secondary" className="badge-modern text-xs">
                                        {dropdownItem.badge}
                                      </Badge>
                                    </div>
                                    <p className="text-xs text-muted-foreground">
                                      {dropdownItem.description}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-muted/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                variant="outline" 
                size="sm"
                className="btn-modern"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Download className="h-4 w-4 mr-2" />
                Assessment Tool
              </Button>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button 
                size="sm"
                className="btn-modern gradient-primary hover:shadow-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <PlayCircle className="h-4 w-4 mr-2" />
                Book Demo
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn-modern"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur border-t">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          className="w-full text-left px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            <ChevronDown 
                              className={`h-4 w-4 transition-transform duration-200 ${
                                activeDropdown === item.name ? 'rotate-180' : ''
                              }`} 
                            />
                          </div>
                        </button>
                        {activeDropdown === item.name && (
                          <motion.div
                            className="ml-4 mt-2 space-y-1"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-3 py-2 text-foreground hover:text-primary hover:bg-muted/50 rounded-lg transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-3 py-2 space-y-2 border-t pt-4">
                  <Button 
                    variant="outline" 
                    className="w-full btn-modern"
                    onClick={() => {
                      setIsMenuOpen(false)
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Assessment Tool
                  </Button>
                  <Button 
                    className="w-full btn-modern gradient-primary hover:shadow-glow"
                    onClick={() => {
                      setIsMenuOpen(false)
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Book Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header
