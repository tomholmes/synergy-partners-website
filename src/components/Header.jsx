import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { APP_CONFIG } from '../constants'
import aiGovernanceIcon from '../assets/ai_governance_icon.png'
import { useLocation } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
            <a href={isMainPage ? "#solutions" : "/#solutions"} className="text-foreground hover:text-primary transition-colors">Solutions</a>
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
              <a href={isMainPage ? "#solutions" : "/#solutions"} className="block px-3 py-2 text-foreground hover:text-primary">Solutions</a>
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
