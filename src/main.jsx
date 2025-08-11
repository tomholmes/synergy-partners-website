import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import LoadingSpinner from './components/LoadingSpinner.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { ROUTES } from './constants'

// Lazy load page components
const InsightIQ = lazy(() => import('./pages/InsightIQ.jsx'))
const TrustIQ = lazy(() => import('./pages/TrustIQ.jsx'))
const ActionIQ = lazy(() => import('./pages/ActionIQ.jsx'))
const PlanIQ = lazy(() => import('./pages/PlanIQ.jsx'))
const HigherEducation = lazy(() => import('./pages/HigherEducation.jsx'))
const Manufacturing = lazy(() => import('./pages/Manufacturing.jsx'))
const Enterprise = lazy(() => import('./pages/Enterprise.jsx'))
const FinancialServices = lazy(() => import('./pages/FinancialServices.jsx'))
const Healthcare = lazy(() => import('./pages/Healthcare.jsx'))
const PublicSector = lazy(() => import('./pages/PublicSector.jsx'))
const EnergyUtilities = lazy(() => import('./pages/EnergyUtilities.jsx'))
const RetailEcommerce = lazy(() => import('./pages/RetailEcommerce.jsx'))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path={ROUTES.HOME} element={<App />} />
            <Route path={ROUTES.INSIGHT_IQ} element={<InsightIQ />} />
            <Route path={ROUTES.TRUST_IQ} element={<TrustIQ />} />
            <Route path={ROUTES.ACTION_IQ} element={<ActionIQ />} />
            <Route path={ROUTES.PLAN_IQ} element={<PlanIQ />} />
            <Route path={ROUTES.HIGHER_EDUCATION} element={<HigherEducation />} />
            <Route path={ROUTES.MANUFACTURING} element={<Manufacturing />} />
            <Route path={ROUTES.ENTERPRISE} element={<Enterprise />} />
            <Route path={ROUTES.FINANCIAL_SERVICES} element={<FinancialServices />} />
            <Route path={ROUTES.HEALTHCARE} element={<Healthcare />} />
            <Route path={ROUTES.PUBLIC_SECTOR} element={<PublicSector />} />
            <Route path={ROUTES.ENERGY_UTILITIES} element={<EnergyUtilities />} />
            <Route path={ROUTES.RETAIL_ECOMMERCE} element={<RetailEcommerce />} />
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
)
