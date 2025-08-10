import { Loader2 } from 'lucide-react'
import PropTypes from 'prop-types'

function LoadingSpinner({ 
  size = 'default', 
  text = 'Loading...', 
  className = '',
  showText = true 
}) {
  const sizeClasses = {
    sm: 'h-4 w-4',
    default: 'h-6 w-6',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12'
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <Loader2 className={`${sizeClasses[size]} animate-spin text-primary`} />
      {showText && text && (
        <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      )}
    </div>
  )
}

LoadingSpinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'default', 'lg', 'xl']),
  text: PropTypes.string,
  className: PropTypes.string,
  showText: PropTypes.bool
}

export default LoadingSpinner
