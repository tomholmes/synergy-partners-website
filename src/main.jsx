import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import InsightIQ from './pages/InsightIQ.jsx'
import TrustIQ from './pages/TrustIQ.jsx'
import ActionIQ from './pages/ActionIQ.jsx'
import PlanIQ from './pages/PlanIQ.jsx'
import HigherEducation from './pages/HigherEducation.jsx'
import Manufacturing from './pages/Manufacturing.jsx'
import Enterprise from './pages/Enterprise.jsx'
import FinancialServices from './pages/FinancialServices.jsx'
import Healthcare from './pages/Healthcare.jsx'
import PublicSector from './pages/PublicSector.jsx'
import EnergyUtilities from './pages/EnergyUtilities.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import { ROUTES } from './constants'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <Router>
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
        </Routes>
      </Router>
    </ErrorBoundary>
  </StrictMode>,
)
