import { Button } from './ui/button'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { APP_CONFIG } from '../constants'
import aiGovernanceIcon from '../assets/ai_governance_icon.png'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ROUTES } from '../constants'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const location = useLocation()
  const isMainPage = location.pathname === '/'

  return (
    <nav className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img src={aiGovernanceIcon} alt={APP_CONFIG.NAME} className="h-8 w-8 mr-3" />
            <span className="text-xl font-bold text-primary">{APP_CONFIG.NAME}</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href={isMainPage ? "#platform" : "/#platform"} className="text-foreground hover:text-primary transition-colors">Platform</a>
            
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="text-foreground hover:text-primary transition-colors flex items-center space-x-1"
              >
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSolutionsOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                >
                  <Link 
                    to={ROUTES.HIGHER_EDUCATION} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    Higher Education
                  </Link>
                  <Link 
                    to={ROUTES.MANUFACTURING} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    Manufacturing
                  </Link>
                  <Link 
                    to={ROUTES.ENTERPRISE} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    Enterprise
                  </Link>
                  <Link 
                    to={ROUTES.FINANCIAL_SERVICES} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    Financial Services
                  </Link>
                  <Link 
                    to={ROUTES.HEALTHCARE} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    Healthcare
                  </Link>
                  <Link 
                    to={ROUTES.PUBLIC_SECTOR} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    Public Sector
                  </Link>
                  <Link 
                    to={ROUTES.ENERGY_UTILITIES} 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsSolutionsOpen(false)}
                  >
                    Energy & Utilities
                  </Link>
                </div>
              )}
            </div>
            
            <a href={isMainPage ? "#resources" : "/#resources"} className="text-foreground hover:text-primary transition-colors">Resources</a>
            <a href={isMainPage ? "#about" : "/#about"} className="text-foreground hover:text-primary transition-colors">About</a>
            <a href={isMainPage ? "#contact" : "/#contact"} className="text-foreground hover:text-primary transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button onClick={() => {
              if (isMainPage) {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              } else {
                window.location.href = '/#contact'
              }
            }}>
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
              <a href="/" className="block px-3 py-2 text-foreground hover:text-primary">Home</a>
              <a href={isMainPage ? "#platform" : "/#platform"} className="block px-3 py-2 text-foreground hover:text-primary">Platform</a>
              
              {/* Mobile Solutions Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                  className="w-full text-left px-3 py-2 text-foreground hover:text-primary flex items-center justify-between"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSolutionsOpen && (
                  <div className="pl-4 space-y-1">
                    <Link 
                      to={ROUTES.HIGHER_EDUCATION} 
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                      onClick={() => {
                        setIsSolutionsOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      Higher Education
                    </Link>
                    <Link 
                      to={ROUTES.MANUFACTURING} 
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                      onClick={() => {
                        setIsSolutionsOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      Manufacturing
                    </Link>
                    <Link 
                      to={ROUTES.ENTERPRISE} 
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                      onClick={() => {
                        setIsSolutionsOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      Enterprise
                    </Link>
                    <Link 
                      to={ROUTES.FINANCIAL_SERVICES} 
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                      onClick={() => {
                        setIsSolutionsOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      Financial Services
                    </Link>
                    <Link 
                      to={ROUTES.HEALTHCARE} 
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                      onClick={() => {
                        setIsSolutionsOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      Healthcare
                    </Link>
                    <Link 
                      to={ROUTES.PUBLIC_SECTOR} 
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                      onClick={() => {
                        setIsSolutionsOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      Public Sector
                    </Link>
                    <Link 
                      to={ROUTES.ENERGY_UTILITIES} 
                      className="block px-3 py-2 text-sm text-gray-700 hover:text-primary transition-colors"
                      onClick={() => {
                        setIsSolutionsOpen(false)
                        setIsMenuOpen(false)
                      }}
                    >
                      Energy & Utilities
                    </Link>
                  </div>
                )}
              </div>
              
              <a href={isMainPage ? "#resources" : "/#resources"} className="block px-3 py-2 text-foreground hover:text-primary">Resources</a>
              <a href={isMainPage ? "#about" : "/#about"} className="block px-3 py-2 text-foreground hover:text-primary">About</a>
              <a href={isMainPage ? "#contact" : "/#contact"} className="block px-3 py-2 text-foreground hover:text-primary">Contact</a>
              <div className="px-3 py-2 space-y-2">
                <Button className="w-full" onClick={() => {
                  if (isMainPage) {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  } else {
                    window.location.href = '/#contact'
                  }
                }}>
                  Book Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Header
