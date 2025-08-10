import ModulePage from '../components/ModulePage'
import { BarChart3, Brain, Database, TrendingUp, Users, Shield, Target, Zap } from 'lucide-react'
import heroImage from '../assets/insightiq_dashboard.png'

function InsightIQ() {
  const moduleData = {
    name: "InsightIQ",
    icon: <BarChart3 className="h-12 w-12" />,
    title: "AI Maturity Assessment & Benchmarking",
    description: "AIMM-360-powered diagnostic assessments with industry-specific maturity models and benchmarking across 100+ data points. Role-specific views for CIOs, Procurement, and NIST/OMB compliance teams with comprehensive analytics and reporting."
  }

  const features = [
    {
      icon: <Brain className="h-6 w-6" />,
      title: "AIMM-360 Intelligence Engine",
      description: "Advanced AI maturity modeling with machine learning-powered insights and predictive analytics for strategic planning."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "100+ Assessment Data Points",
      description: "Comprehensive evaluation across technology, governance, people, processes, and strategic alignment dimensions."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Industry Benchmarking",
      description: "Compare your AI maturity against industry peers with detailed competitive analysis and positioning insights."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Role-Specific Dashboards",
      description: "Customized views for CIOs, Procurement teams, Compliance officers, and executive leadership with relevant KPIs."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Framework Mapping",
      description: "Automated alignment with NIST AI RMF, CNA AI Maturity Model, OMB Memos, and other regulatory frameworks."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Gap Analysis & Recommendations",
      description: "Identify maturity gaps with prioritized recommendations and implementation roadmaps for improvement."
    }
  ]

  const benefits = [
    {
      title: "Accelerated Assessment Process",
      description: "Complete comprehensive AI maturity assessments in days, not months, with automated data collection and analysis."
    },
    {
      title: "Data-Driven Decision Making",
      description: "Make informed strategic decisions with quantitative insights and evidence-based recommendations."
    },
    {
      title: "Regulatory Compliance Assurance",
      description: "Ensure alignment with federal and industry standards through automated compliance mapping and tracking."
    },
    {
      title: "Competitive Intelligence",
      description: "Understand your market position with detailed benchmarking against industry leaders and peers."
    },
    {
      title: "Executive-Ready Reporting",
      description: "Generate board-ready reports with clear visualizations and actionable insights for leadership."
    },
    {
      title: "Continuous Monitoring",
      description: "Track progress over time with automated re-assessments and trend analysis capabilities."
    }
  ]

  const useCases = [
    {
      title: "Federal Agency AI Readiness",
      description: "Comprehensive assessment of AI capabilities across federal departments with NIST AI RMF alignment and OMB compliance reporting.",
      industry: "Government"
    },
    {
      title: "Enterprise Digital Transformation",
      description: "Evaluate organizational AI maturity to guide strategic investments and technology adoption roadmaps.",
      industry: "Enterprise"
    },
    {
      title: "Manufacturing AI Integration",
      description: "Assess readiness for Industry 4.0 initiatives with focus on operational AI and smart manufacturing capabilities.",
      industry: "Manufacturing"
    },
    {
      title: "Higher Education AI Strategy",
      description: "Evaluate institutional AI capabilities for research, administration, and educational technology integration.",
      industry: "Education"
    },
    {
      title: "Healthcare AI Governance",
      description: "Assess AI readiness for clinical applications with emphasis on safety, ethics, and regulatory compliance.",
      industry: "Healthcare"
    },
    {
      title: "Financial Services AI Risk",
      description: "Comprehensive evaluation of AI risk management capabilities and regulatory compliance in financial institutions.",
      industry: "Financial"
    }
  ]

  const technicalSpecs = [
    {
      category: "Assessment Framework",
      items: [
        "AIMM-360 proprietary methodology",
        "100+ standardized assessment criteria",
        "Industry-specific maturity models",
        "Multi-dimensional scoring algorithms",
        "Automated gap analysis engine"
      ]
    },
    {
      category: "Compliance & Standards",
      items: [
        "NIST AI Risk Management Framework",
        "CNA AI Maturity Model alignment",
        "OMB AI Memo compliance tracking",
        "ISO/IEC 23053 AI governance",
        "Custom regulatory frameworks"
      ]
    },
    {
      category: "Data & Analytics",
      items: [
        "Real-time assessment processing",
        "Advanced visualization dashboards",
        "Predictive analytics capabilities",
        "Trend analysis and forecasting",
        "Automated report generation"
      ]
    },
    {
      category: "Integration & Security",
      items: [
        "SOC2 Type II certified platform",
        "Enterprise SSO integration",
        "API-first architecture",
        "Role-based access controls",
        "Data encryption at rest and transit"
      ]
    }
  ]

  return (
    <ModulePage
      moduleData={moduleData}
      heroImage={heroImage}
      features={features}
      benefits={benefits}
      useCases={useCases}
      technicalSpecs={technicalSpecs}
    />
  )
}

export default InsightIQ

