import ModulePage from '../components/ModulePage'
import { Shield, Lock, FileCheck, AlertTriangle, Users, BarChart3, Settings, Eye } from 'lucide-react'
import heroImage from '../assets/trustIQ_dashboard.png'

function TrustIQ() {
  const moduleData = {
    name: "TrustIQ",
    icon: <Shield className="h-12 w-12" />,
    title: "AI Governance & Risk Management",
    description: "Configurable scoring engine with crosswalk alignment to NIST AI RMF, CNA AI Maturity Model, and OMB Memos. Evidence-based scoring and governance dashboards with comprehensive risk monitoring and compliance tracking."
  }

  const features = [
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Risk Assessment Engine",
      description: "Advanced AI risk evaluation with automated threat detection, impact analysis, and mitigation recommendations."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Compliance Automation",
      description: "Automated compliance monitoring and reporting for NIST AI RMF, regulatory frameworks, and industry standards."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Real-Time Monitoring",
      description: "Continuous monitoring of AI systems with real-time alerts for governance violations and risk threshold breaches."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Stakeholder Management",
      description: "Role-based governance workflows with approval processes, accountability tracking, and audit trails."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Governance Dashboards",
      description: "Executive and operational dashboards with KPIs, risk metrics, and compliance status visualization."
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Policy Configuration",
      description: "Flexible policy engine for custom governance rules, approval workflows, and organizational standards."
    }
  ]

  const benefits = [
    {
      title: "Proactive Risk Management",
      description: "Identify and mitigate AI risks before they impact operations with predictive risk analytics and early warning systems."
    },
    {
      title: "Automated Compliance",
      description: "Reduce compliance burden with automated monitoring, reporting, and evidence collection for regulatory requirements."
    },
    {
      title: "Enhanced Transparency",
      description: "Provide stakeholders with clear visibility into AI governance processes and decision-making frameworks."
    },
    {
      title: "Operational Efficiency",
      description: "Streamline governance workflows with automated approvals, notifications, and task management capabilities."
    },
    {
      title: "Audit Readiness",
      description: "Maintain comprehensive audit trails and documentation for regulatory inspections and internal reviews."
    },
    {
      title: "Stakeholder Confidence",
      description: "Build trust with customers, partners, and regulators through demonstrated AI governance excellence."
    }
  ]

  const useCases = [
    {
      title: "Federal AI Risk Management",
      description: "Comprehensive AI risk assessment and governance for federal agencies with NIST AI RMF compliance and OMB reporting.",
      industry: "Government"
    },
    {
      title: "Financial Services AI Oversight",
      description: "Risk management for AI-driven trading, lending, and customer service applications with regulatory compliance.",
      industry: "Financial"
    },
    {
      title: "Healthcare AI Safety",
      description: "Governance framework for clinical AI applications with patient safety monitoring and FDA compliance tracking.",
      industry: "Healthcare"
    },
    {
      title: "Manufacturing AI Ethics",
      description: "Ethical AI governance for autonomous systems, predictive maintenance, and quality control applications.",
      industry: "Manufacturing"
    },
    {
      title: "Enterprise AI Governance",
      description: "Corporate AI governance framework with risk management, policy enforcement, and stakeholder oversight.",
      industry: "Enterprise"
    },
    {
      title: "Educational AI Responsibility",
      description: "Responsible AI governance for educational technology, student data protection, and academic integrity.",
      industry: "Education"
    }
  ]

  const technicalSpecs = [
    {
      category: "Risk Management",
      items: [
        "Multi-dimensional risk scoring",
        "Predictive risk analytics",
        "Automated threat detection",
        "Impact assessment modeling",
        "Mitigation tracking and reporting"
      ]
    },
    {
      category: "Compliance Framework",
      items: [
        "NIST AI RMF implementation",
        "CNA AI Maturity Model mapping",
        "OMB AI Memo compliance",
        "Custom regulatory frameworks",
        "International standards support"
      ]
    },
    {
      category: "Governance Workflows",
      items: [
        "Role-based access controls",
        "Approval workflow automation",
        "Policy enforcement engine",
        "Audit trail generation",
        "Stakeholder notification system"
      ]
    },
    {
      category: "Monitoring & Alerting",
      items: [
        "Real-time system monitoring",
        "Configurable alert thresholds",
        "Automated incident response",
        "Performance metrics tracking",
        "Compliance status reporting"
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

export default TrustIQ

