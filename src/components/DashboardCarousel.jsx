import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from './ui/button'

const DashboardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const dashboards = [
    {
      id: 'hero',
      image: '/src/assets/hero_dashboard.png',
      alt: 'SynergyIQ Platform Dashboard showing AI governance metrics, KPIs, and transformation roadmaps',
      title: 'SynergyIQ Platform'
    },
    {
      id: 'insight',
      image: '/src/assets/insightIQ_dashboard.png',
      alt: 'InsightIQ Dashboard - AI Maturity Assessment & Benchmarking',
      title: 'InsightIQ Dashboard'
    },
    {
      id: 'trust',
      image: '/src/assets/trustIQ_dashboard.png',
      alt: 'TrustIQ Dashboard - AI Governance & Risk Management',
      title: 'TrustIQ Dashboard'
    },
    {
      id: 'action',
      image: '/src/assets/actioniq_dashboard.png',
      alt: 'ActionIQ Dashboard - AI Transformation Roadmaps',
      title: 'ActionIQ Dashboard'
    },
    {
      id: 'plan',
      image: '/src/assets/planiq_dashboard.png',
      alt: 'PlanIQ Dashboard - KPIs, Milestones & Tracking',
      title: 'PlanIQ Dashboard'
    }
  ]

  // Auto-rotate every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dashboards.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, dashboards.length])

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dashboards.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + dashboards.length) % dashboards.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds of manual navigation
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <div className="relative w-full h-full group">
      {/* Main Carousel */}
      <div className="relative overflow-hidden rounded-2xl shadow-strong">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <img
              src={dashboards[currentIndex].image}
              alt={dashboards[currentIndex].alt}
              className="w-full h-auto rounded-2xl"
            />
            
            {/* Overlay with title */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-white text-lg font-semibold">
                {dashboards[currentIndex].title}
              </h3>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="sm"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        
        <Button
          variant="ghost"
          size="sm"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Progress Bar */}
        <div className="absolute top-4 left-4 right-4">
          <div className="w-full bg-white/20 rounded-full h-1 backdrop-blur-sm">
            <motion.div
              className="bg-white h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 4, ease: "linear" }}
              key={currentIndex}
            />
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {dashboards.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-primary scale-125'
                : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Pause/Play Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        {isAutoPlaying ? (
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-1 h-4 bg-white rounded-sm mr-1"></div>
            <div className="w-1 h-4 bg-white rounded-sm"></div>
          </div>
        ) : (
          <div className="w-4 h-4 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[8px] border-l-white border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
          </div>
        )}
      </Button>
    </div>
  )
}

export default DashboardCarousel
