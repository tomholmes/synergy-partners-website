import ModulePage from '../components/ModulePage'
import { Target, Calendar, Users, FileText, Workflow, CheckSquare, GitBranch, Clock } from 'lucide-react'
import heroImage from '../assets/actioniq_dashboard.png'

function ActionIQ() {
  const moduleData = {
    name: "ActionIQ",
    icon: <Target className="h-12 w-12" />,
    title: "AI Transformation Roadmaps",
    description: "Task-level Gantt charts, and implementation roadmaps with solution alignment and federal-ready outputs. Role-based RACI and task dependencies with comprehensive project management capabilities."
  }

  const features = [
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Dynamic Gantt Charts",
      description: "Interactive project timelines with dependency tracking, resource allocation, and milestone management for complex AI initiatives."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Task-Level SOWs",
      description: "Detailed statements of work with deliverables, acceptance criteria, and resource requirements for each implementation phase."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "RACI Matrix Management",
      description: "Role-based responsibility assignment with clear accountability frameworks and stakeholder engagement protocols."
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Dependency Mapping",
      description: "Automated dependency identification and critical path analysis with risk assessment and contingency planning."
    },
    {
      icon: <CheckSquare className="h-6 w-6" />,
      title: "Microsoft Integration",
      description: "Native integration with Microsoft Project, Teams, and Azure ecosystem for seamless workflow management."
    },
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "Federal-Ready Templates",
      description: "Pre-configured templates for government projects with compliance requirements and approval workflows."
    }
  ]

  const benefits = [
    {
      title: "Accelerated Implementation",
      description: "Reduce project timelines by 40% with pre-built templates, automated planning, and proven implementation methodologies."
    },
    {
      title: "Clear Accountability",
      description: "Eliminate confusion with detailed RACI matrices and role-based task assignments for all stakeholders."
    },
    {
      title: "Risk Mitigation",
      description: "Proactively identify and address project risks with dependency analysis and contingency planning capabilities."
    },
    {
      title: "Resource Optimization",
      description: "Optimize resource allocation and utilization with advanced scheduling and capacity planning tools."
    },
    {
      title: "Stakeholder Alignment",
      description: "Maintain stakeholder alignment with transparent progress tracking and automated status reporting."
    },
    {
      title: "Compliance Assurance",
      description: "Ensure project compliance with regulatory requirements through built-in governance and approval workflows."
    }
  ]

  const useCases = [
    {
      title: "Federal AI Modernization",
      description: "Large-scale AI transformation for federal agencies with compliance tracking, stakeholder management, and phased implementation.",
      industry: "Government"
    },
    {
      title: "Enterprise AI Strategy Execution",
      description: "Corporate AI transformation roadmaps with cross-functional coordination and executive oversight capabilities.",
      industry: "Enterprise"
    },
    {
      title: "Manufacturing Digital Transformation",
      description: "Industry 4.0 implementation with IoT integration, predictive maintenance, and smart factory initiatives.",
      industry: "Manufacturing"
    },
    {
      title: "Healthcare AI Implementation",
      description: "Clinical AI deployment with regulatory compliance, safety protocols, and phased rollout management.",
      industry: "Healthcare"
    },
    {
      title: "Financial Services AI Adoption",
      description: "AI implementation for trading, risk management, and customer service with regulatory oversight.",
      industry: "Financial"
    },
    {
      title: "Educational Technology Integration",
      description: "AI-powered educational platform deployment with faculty training and student engagement tracking.",
      industry: "Education"
    }
  ]

  const technicalSpecs = [
    {
      category: "Project Management",
      items: [
        "Advanced Gantt chart engine",
        "Critical path method (CPM)",
        "Resource leveling algorithms",
        "Monte Carlo simulation",
        "Earned value management (EVM)"
      ]
    },
    {
      category: "Microsoft Ecosystem",
      items: [
        "Microsoft Project integration",
        "Teams collaboration features",
        "Azure DevOps connectivity",
        "Power BI reporting",
        "Office 365 document management"
      ]
    },
    {
      category: "Workflow Automation",
      items: [
        "Automated task creation",
        "Dependency resolution engine",
        "Progress tracking automation",
        "Notification and alert system",
        "Approval workflow management"
      ]
    },
    {
      category: "Reporting & Analytics",
      items: [
        "Real-time progress dashboards",
        "Executive summary reports",
        "Resource utilization analytics",
        "Risk assessment reporting",
        "Compliance status tracking"
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

export default ActionIQ

