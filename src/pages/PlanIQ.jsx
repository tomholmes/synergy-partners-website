import ModulePage from '../components/ModulePage'
import { TrendingUp, BarChart3, Target, Clock, AlertCircle, FileBarChart, Zap, Activity } from 'lucide-react'
import heroImage from '../assets/planiq_dashboard.png'

function PlanIQ() {
  const moduleData = {
    name: "PlanIQ",
    icon: <TrendingUp className="h-12 w-12" />,
    title: "KPIs, Milestones & Tracking",
    description: "AI-generated KPIs, health dashboards, and governance tier tracking with milestone templates and exportable views. Real-time progress monitoring with predictive analytics and automated reporting capabilities."
  }

  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "AI-Generated KPIs",
      description: "Intelligent KPI generation based on industry best practices, organizational goals, and AI maturity benchmarks."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Real-Time Health Dashboards",
      description: "Live monitoring dashboards with customizable widgets, alerts, and performance indicators for all stakeholders."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Milestone Management",
      description: "Automated milestone tracking with progress indicators, dependency monitoring, and achievement validation."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Predictive Analytics",
      description: "Forecast project outcomes and identify potential delays with machine learning-powered predictive models."
    },
    {
      icon: <AlertCircle className="h-6 w-6" />,
      title: "Intelligent Alerting",
      description: "Smart notification system with configurable thresholds, escalation protocols, and automated responses."
    },
    {
      icon: <FileBarChart className="h-6 w-6" />,
      title: "Exportable Reporting",
      description: "Comprehensive reporting suite with customizable templates, automated generation, and multi-format export."
    }
  ]

  const benefits = [
    {
      title: "Data-Driven Insights",
      description: "Make informed decisions with real-time analytics, trend analysis, and predictive modeling capabilities."
    },
    {
      title: "Proactive Management",
      description: "Identify and address issues before they impact project success with predictive alerts and early warning systems."
    },
    {
      title: "Stakeholder Transparency",
      description: "Provide stakeholders with clear visibility into progress, performance, and outcomes through intuitive dashboards."
    },
    {
      title: "Automated Reporting",
      description: "Reduce administrative overhead with automated report generation and distribution to relevant stakeholders."
    },
    {
      title: "Performance Optimization",
      description: "Continuously improve performance with AI-powered recommendations and optimization suggestions."
    },
    {
      title: "Compliance Tracking",
      description: "Maintain compliance with regulatory requirements through automated tracking and documentation."
    }
  ]

  const useCases = [
    {
      title: "Federal Program Oversight",
      description: "Comprehensive tracking of federal AI initiatives with OMB reporting, milestone management, and compliance monitoring.",
      industry: "Government"
    },
    {
      title: "Enterprise AI Portfolio Management",
      description: "Portfolio-level tracking of AI investments with ROI analysis, resource optimization, and strategic alignment.",
      industry: "Enterprise"
    },
    {
      title: "Manufacturing Performance Monitoring",
      description: "Real-time monitoring of AI-driven manufacturing processes with quality metrics and operational efficiency tracking.",
      industry: "Manufacturing"
    },
    {
      title: "Healthcare Outcome Tracking",
      description: "Patient outcome monitoring for AI-powered clinical applications with safety metrics and efficacy analysis.",
      industry: "Healthcare"
    },
    {
      title: "Financial Risk Monitoring",
      description: "Real-time risk monitoring for AI-driven financial services with regulatory compliance and performance tracking.",
      industry: "Financial"
    },
    {
      title: "Educational Impact Assessment",
      description: "Student learning outcome tracking for AI-powered educational tools with engagement and performance analytics.",
      industry: "Education"
    }
  ]

  const technicalSpecs = [
    {
      category: "Analytics Engine",
      items: [
        "Machine learning-powered KPI generation",
        "Predictive analytics algorithms",
        "Real-time data processing",
        "Statistical trend analysis",
        "Anomaly detection capabilities"
      ]
    },
    {
      category: "Dashboard & Visualization",
      items: [
        "Interactive dashboard builder",
        "Customizable widget library",
        "Real-time data visualization",
        "Mobile-responsive design",
        "Multi-tenant architecture"
      ]
    },
    {
      category: "Reporting & Export",
      items: [
        "Automated report generation",
        "Multi-format export (PDF, Excel, CSV)",
        "Scheduled report delivery",
        "Custom template builder",
        "API-driven data access"
      ]
    },
    {
      category: "Integration & Alerts",
      items: [
        "Enterprise system integration",
        "Configurable alert thresholds",
        "Multi-channel notifications",
        "Escalation workflow management",
        "Audit trail and logging"
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

export default PlanIQ

