// Framer Motion animation variants for enhanced UI interactions

// Page transitions
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 0.98
  }
}

export const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.6
}

// Stagger animations for lists
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

export const staggerItem = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// Card animations
export const cardVariants = {
  initial: {
    opacity: 0,
    y: 30,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1
    }
  }
}

// Button animations
export const buttonVariants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
}

// Hero section animations
export const heroVariants = {
  initial: {
    opacity: 0,
    y: 40
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

export const heroTextVariants = {
  initial: {
    opacity: 0,
    x: -30
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: "easeOut"
    }
  }
}

export const heroImageVariants = {
  initial: {
    opacity: 0,
    x: 30,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.4,
      ease: "easeOut"
    }
  }
}

// Navigation animations
export const navVariants = {
  initial: {
    y: -100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Dropdown animations
export const dropdownVariants = {
  initial: {
    opacity: 0,
    y: -10,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: {
      duration: 0.15,
      ease: "easeIn"
    }
  }
}

// Scroll-triggered animations
export const scrollVariants = {
  initial: {
    opacity: 0,
    y: 50
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const scrollStaggerVariants = {
  initial: {
    opacity: 0,
    y: 30
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// Icon animations
export const iconVariants = {
  initial: {
    scale: 0,
    rotate: -180
  },
  animate: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

// Badge animations
export const badgeVariants = {
  initial: {
    scale: 0,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "backOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2
    }
  }
}

// Form input animations
export const inputVariants = {
  initial: {
    scale: 1
  },
  focus: {
    scale: 1.02,
    transition: {
      duration: 0.2
    }
  }
}

// Loading animations (basic version)
export const loadingVariantsBasic = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Floating animation for subtle movement
export const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Pulse animation for attention
export const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

// Slide in from sides
export const slideInLeft = {
  initial: {
    x: -100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export const slideInRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Fade in with scale
export const fadeInScale = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// Hover lift effect
export const hoverLift = {
  initial: {
    y: 0
  },
  hover: {
    y: -8,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Text reveal animation
export const textReveal = {
  initial: {
    y: 100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

// Grid item animations
export const gridItemVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Modal animations
export const modalVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    y: 20
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 20,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
}

// Overlay animations
export const overlayVariants = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  }
}

// Enhanced parallax effects
export const parallaxVariants = {
  initial: {
    y: 0,
    scale: 1
  },
  whileInView: {
    y: [0, -50, 0],
    scale: [1, 1.05, 1],
    transition: {
      duration: 8,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

// Morphing shape animations
export const morphVariants = {
  initial: {
    borderRadius: "50%",
    scale: 1
  },
  animate: {
    borderRadius: ["50%", "25%", "50%", "25%", "50%"],
    scale: [1, 1.1, 0.9, 1.1, 1],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

// Floating particles effect
export const particleVariants = {
  initial: {
    opacity: 0,
    scale: 0,
    y: 0
  },
  animate: {
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    y: [0, -100, -200],
    transition: {
      duration: 4,
      ease: "easeOut",
      repeat: Infinity,
      delay: (i) => i * 0.5
    }
  }
}

// Enhanced card interactions
export const cardEnhancedVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.9,
    rotateX: 15
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
  hover: {
    y: -15,
    scale: 1.03,
    rotateX: -5,
    rotateY: 2,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.98,
    rotateX: 0,
    rotateY: 0,
    transition: {
      duration: 0.1
    }
  }
}

// Enhanced button interactions
export const buttonEnhancedVariants = {
  initial: {
    scale: 1,
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)"
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1
    }
  }
}

// Text reveal animations
export const textRevealVariants = {
  initial: {
    opacity: 0,
    y: 30,
    filter: "blur(10px)"
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

// Stagger text reveal
export const staggerTextReveal = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Enhanced hero animations
export const heroEnhancedVariants = {
  initial: {
    opacity: 0,
    y: 100,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: "easeOut"
    }
  }
}

export const heroTextEnhancedVariants = {
  initial: {
    opacity: 0,
    x: -50,
    filter: "blur(20px)"
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.3
    }
  }
}

export const heroImageEnhancedVariants = {
  initial: {
    opacity: 0,
    x: 50,
    scale: 0.8,
    filter: "blur(20px)"
  },
  animate: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
      delay: 0.6
    }
  }
}

// Enhanced scroll animations
export const scrollEnhancedVariants = {
  initial: {
    opacity: 0,
    y: 60,
    scale: 0.95
  },
  whileInView: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

// Enhanced stagger container
export const staggerEnhancedContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

// Enhanced stagger item
export const staggerEnhancedItem = {
  initial: {
    opacity: 0,
    y: 40,
    scale: 0.9
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// Enhanced badge animations
export const badgeEnhancedVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
    rotate: -10
  },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

// Enhanced navigation animations
export const navEnhancedVariants = {
  initial: {
    y: -100,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

// Enhanced focus animations
export const focusVariants = {
  initial: {
    scale: 1,
    boxShadow: "0 0 0 0 rgba(69, 108, 245, 0)"
  },
  focus: {
    scale: 1.02,
    boxShadow: "0 0 0 4px rgba(69, 108, 245, 0.3)",
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

// Enhanced loading animations
export const loadingVariants = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

// Enhanced hover lift effect
export const hoverLiftVariants = {
  initial: {
    y: 0,
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"
  },
  hover: {
    y: -8,
    boxShadow: "0 20px 25px rgba(0, 0, 0, 0.15)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Enhanced scale effect
export const hoverScaleVariants = {
  initial: {
    scale: 1
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

// Enhanced rotation effect
export const hoverRotateVariants = {
  initial: {
    rotate: 0
  },
  hover: {
    rotate: 5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Enhanced glow effect
export const glowVariants = {
  initial: {
    boxShadow: "0 0 0 0 rgba(69, 108, 245, 0)"
  },
  hover: {
    boxShadow: "0 0 20px rgba(69, 108, 245, 0.4)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Enhanced morphing background
export const morphingBackgroundVariants = {
  initial: {
    borderRadius: "50%",
    scale: 1,
    rotate: 0
  },
  animate: {
    borderRadius: ["50%", "30%", "50%", "30%", "50%"],
    scale: [1, 1.2, 0.8, 1.2, 1],
    rotate: [0, 180, 360, 540, 720],
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity
    }
  }
}

// Enhanced floating elements
export const floatingEnhancedVariants = {
  initial: {
    y: 0,
    rotate: 0
  },
  animate: {
    y: [-10, 10, -10],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

// Enhanced pulse effect
export const pulseEnhancedVariants = {
  initial: {
    scale: 1,
    opacity: 1
  },
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}

// Enhanced wave effect
export const waveVariants = {
  initial: {
    scale: 1,
    opacity: 1
  },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0, 1],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity
    }
  }
}
