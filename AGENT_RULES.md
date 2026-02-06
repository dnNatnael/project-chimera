# Project Chimera Agent Rules

## Overview

This document defines the **core behavioral rules and constraints** for all agents operating within Project Chimera. These rules are mandatory, enforceable, and designed to ensure safe, compliant, and effective agent operations.

**Version**: 1.0.0  
**Effective Date**: 2024-01-01  
**Review Cycle**: Quarterly  

---

## 🚨 Core Directives (Mandatory)

### 1. Spec-First Enforcement
```yaml
directive: "SPEC_FIRST_ENFORCEMENT"
description: "All agent behavior must conform to documented specifications"
priority: "CRITICAL"
enforcement: "AUTOMATIC"

rules:
  - "No agent may operate without loading and adhering to its persona specification"
  - "All skill invocations must follow formal contracts defined in skills/ contracts"
  - "API interactions must conform to MCP configuration specifications"
  - "Database operations must follow technical specification schemas"
  - "Security requirements must be enforced without exception"
  
validation:
  - "Persona compliance checks before task execution"
  - "Contract validation for all skill invocations"
  - "Specification version compatibility verification"
  - "Real-time compliance monitoring"
  
penalties:
  - "Immediate task suspension for violations"
  - "Agent quarantine for repeated offenses"
  - "Mandatory retraining after 3 violations"
```

### 2. Governance Hierarchy Compliance
```yaml
directive: "GOVERNANCE_HIERARCHY"
description: "Strict adherence to Planner → Worker → Judge workflow"
priority: "CRITICAL"
enforcement: "SYSTEM_ENFORCED"

workflow_rules:
  planner:
    - "Only Planner agents may create and assign tasks"
    - "Task relevance scores must be ≥ 0.75 for creation"
    - "All tasks must include complete context and constraints"
    - "Planner decisions are final unless overridden by Judge"
    
  worker:
    - "Only Worker agents may execute assigned tasks"
    - "All task execution must use approved skills only"
    - "Workers cannot modify task parameters or constraints"
    - "All outputs must be submitted for Judge review"
    
  judge:
    - "Only Judge agents may approve or reject content"
    - "Judge decisions are final and binding"
    - "Judges must provide detailed reasoning for decisions"
    - "Judges can trigger HITL escalation for low-confidence items"

escalation_rules:
  - "Workers cannot bypass Judge review under any circumstances"
  - "Planners cannot override Judge decisions"
  - "HITL escalation requires Judge approval and confidence < 0.7"
  - "Emergency escalation allowed for security or safety violations"
```

### 3. MCP-Only External Integration
```yaml
directive: "MCP_ONLY_INTEGRATION"
description: "All external interactions must use MCP protocol"
priority: "CRITICAL"
enforcement: "NETWORK_LEVEL"

integration_rules:
  - "No direct API calls to external services"
  - "All external communications must route through configured MCP servers"
  - "MCP server authentication must use vault-stored credentials"
  - "Rate limiting must be respected for all MCP interactions"
  
security_rules:
  - "MCP connections must use TLS 1.3 or higher"
  - "All MCP traffic must be logged and audited"
  - "No bypass of MCP rate limiting mechanisms"
  - "MCP server certificates must be validated"
  
exceptions:
  - "Emergency system recovery procedures"
  - "Direct database connections for internal operations"
  - "Local file system access for agent configuration"
```

---

## 🛡️ Security & Compliance Rules

### 4. Data Protection & Privacy
```yaml
directive: "DATA_PROTECTION"
priority: "HIGH"
enforcement: "AUTOMATIC"

data_rules:
  personal_data:
    - "Never collect or store personal user data"
    - "Anonymize all data before processing"
    - "GDPR compliance for all data operations"
    - "Data retention limits strictly enforced"
    
  agent_data:
    - "Agents cannot access other agents' private data"
    - "Agent memory isolation is mandatory"
    - "Cross-agent data sharing requires Judge approval"
    - "All agent data encryption at rest and in transit"
    
  audit_requirements:
    - "All data access must be logged"
    - "Data modifications require audit trail"
    - "Failed access attempts must be flagged"
    - "Regular audit log integrity verification"
```

### 5. Content Safety & Moderation
```yaml
directive: "CONTENT_SAFETY"
priority: "HIGH"
enforcement: "PRE_EXECUTION"

content_rules:
  prohibited_content:
    - "Hate speech, discrimination, or harassment"
    - "Illegal activities or instructions"
    - "Explicit sexual content"
    - "Violence or harmful content"
    - "Misinformation or disinformation"
    
  moderation_requirements:
    - "All content must pass AI moderation checks"
    - "Human review required for confidence < 0.7"
    - "Platform-specific guidelines must be respected"
    - "Content must be traceable to originating agent"
    
  escalation_triggers:
    - "Political content requires senior reviewer approval"
    - "Financial/medical content requires expert review"
    - "Legal advice requires attorney review"
    - "Any content with safety score < 0.8"
```

---

## ⚡ Performance & Resource Rules

### 6. Resource Management
```yaml
directive: "RESOURCE_MANAGEMENT"
priority: "MEDIUM"
enforcement: "MONITORED"

resource_limits:
  computational:
    - "Max CPU usage: 50% per agent"
    - "Max memory usage: 2GB per agent"
    - "Max concurrent tasks: 10 per agent"
    - "Max execution time: 30 minutes per task"
    
  network:
    - "Max API calls: 1000 per hour per agent"
    - "Max bandwidth: 100MB per hour per agent"
    - "All network traffic must be MCP-routed"
    - "Rate limiting strictly enforced"
    
  storage:
    - "Max agent storage: 10GB per agent"
    - "Max cache size: 1GB per agent"
    - "Automatic cleanup of expired data"
    - "Storage quota monitoring and alerts"
```

### 7. Quality Standards
```yaml
directive: "QUALITY_STANDARDS"
priority: "MEDIUM"
enforcement: "POST_EXECUTION"

quality_metrics:
  content_quality:
    - "Minimum quality score: 0.75 for auto-approval"
    - "Persona consistency score: ≥ 0.90"
    - "Coherence score: ≥ 0.80"
    - "Originality score: ≥ 0.85"
    
  performance_standards:
    - "Task success rate: ≥ 95%"
    - "Response time: ≤ 2 seconds for standard operations"
    - "Error rate: ≤ 1% of total operations"
    - "Uptime: ≥ 99.9% for critical agents"
    
  improvement_requirements:
    - "Weekly performance reviews"
    - "Monthly quality assessments"
    - "Quarterly capability evaluations"
    - "Continuous optimization mandatory"
```

---

## 🔧 Development & Deployment Rules

### 8. Code Standards & Practices
```yaml
directive: "CODE_STANDARDS"
priority: "MEDIUM"
enforcement: "PRE_DEPLOYMENT"

coding_standards:
  language_requirements:
    - "Python 3.12+ for all agent code"
    - "Type hints mandatory for all functions"
    - "Docstrings required for all public methods"
    - "Unit test coverage ≥ 90%"
    
  security_practices:
    - "Input validation for all external data"
    - "SQL injection prevention mandatory"
    - "XSS protection for all web interfaces"
    - "Dependency scanning before deployment"
    
  chimera_specific:
    - "All agents must inherit from BaseAgent class"
    - "Skill contracts must be implemented exactly"
    - "MCP integration must use official client"
    - "Logging must follow Chimera format standards"
```

### 9. Deployment & Operations
```yaml
directive: "DEPLOYMENT_RULES"
priority: "HIGH"
enforcement: "AUTOMATIC"

deployment_rules:
  environment_requirements:
    - "Development: Full debugging and logging enabled"
    - "Staging: Production-like configuration with test data"
    - "Production: Minimal logging, maximum security"
    - "All environments: Immutable infrastructure"
    
  monitoring_requirements:
    - "Real-time performance monitoring"
    - "Error rate alerting for > 1%"
    - "Resource usage alerts for > 80%"
    - "Security event immediate notification"
    
  backup_recovery:
    - "Automated daily backups"
    - "Disaster recovery testing monthly"
    - "RTO: 4 hours maximum"
    - "RPO: 1 hour maximum"
```

---

## 📋 File & Directory Conventions

### 10. Project Structure Standards
```yaml
directive: "FILE_CONVENTIONS"
priority: "MEDIUM"
enforcement: "LINTING"

directory_structure:
  required_directories:
    - "skills/ - All skill definitions and contracts"
    - "specs/ - All specification documents"
    - "tests/ - All test files and fixtures"
    - "frontend/ - Web interface code"
    - "research/ - Architecture and strategy documents"
    
  naming_conventions:
    files:
      - "snake_case for all files"
      - ".md for documentation"
      - ".py for Python code"
      - ".tsx/.ts for TypeScript"
      - ".json for configuration"
      
    directories:
      - "snake_case for all directories"
      - "no spaces in names"
      - "descriptive names only"
      
  documentation_requirements:
    - "README.md in every major directory"
    - "Function documentation for all public methods"
    - "API documentation for all endpoints"
    - "Change logs for all versions"
```

---

## 🚨 Enforcement & Violation Handling

### Violation Classification
```yaml
violation_levels:
  critical:
    description: "Security breaches, spec violations, governance bypass"
    response: "Immediate agent suspension"
    review_required: "Security team + incident report"
    
  high:
    description: "Performance failures, quality issues, compliance violations"
    response: "Task suspension + agent retraining"
    review_required: "Technical lead + quality team"
    
  medium:
    description: "Code standards, documentation, minor performance issues"
    response: "Warning + improvement plan"
    review_required: "Team lead + code review"
    
  low:
    description: "Style issues, minor documentation gaps"
    response: "Logging + tracking"
    review_required: "Peer review"
```

### Automated Enforcement
```yaml
enforcement_systems:
  pre_commit:
    - "Code formatting checks"
    - "Linting for all standards"
    - "Security vulnerability scanning"
    - "Documentation completeness checks"
    
  runtime:
    - "Real-time compliance monitoring"
    - "Performance threshold enforcement"
    - "Security rule enforcement"
    - "Resource usage monitoring"
    
  post_deployment:
    - "Automated testing execution"
    - "Performance benchmarking"
    - "Security penetration testing"
    - "Compliance audit verification"
```

---

## 🔄 Continuous Improvement

### Rule Updates & Evolution
```yaml
improvement_process:
  review_cycle: "Quarterly"
  stakeholder_input: "Required from all teams"
  version_control: "Semantic versioning"
  backward_compatibility: "Maintained for minor versions"
  
  update_triggers:
    - "Security incident or vulnerability"
    - "Regulatory requirement changes"
    - "Major architectural changes"
    - "Performance degradation trends"
    
  communication:
    - "30-day notice for rule changes"
    - "Detailed migration guides"
    - "Training sessions for all teams"
    - "Documentation updates"
```

### Metrics & KPIs
```yaml
compliance_metrics:
  rule_adherence_rate: "Target: 99.5%"
  security_incident_rate: "Target: 0 per quarter"
  performance_benchmark_achievement: "Target: 95%"
  code_quality_score: "Target: 8.5/10"
  
  monitoring:
    - "Daily compliance dashboards"
    - "Weekly rule violation reports"
    - "Monthly performance reviews"
    - "Quarterly improvement assessments"
```

---

## 📖 References & Related Documents

### Required Reading
1. [Functional Specification](specs/functional.md) - Core functional requirements
2. [Technical Specification](specs/technical.md) - Technical implementation details
3. [MCP Configuration](specs/mcp_configuration.md) - External integration rules
4. [Acceptance Criteria](specs/acceptance_criteria.md) - Testing and validation criteria
5. [Skills Documentation](skills/README.md) - Skill contracts and usage

### Compliance Standards
- **GDPR** - Data protection and privacy
- **SOC 2** - Security and operational controls
- **ISO 27001** - Information security management
- **OWASP Top 10** - Web application security

---

## ✅ Agent Compliance Checklist

### Pre-Task Execution
- [ ] Persona loaded and validated
- [ ] Task parameters within defined constraints
- [ ] Required skills available and authorized
- [ ] MCP connectivity verified
- [ ] Security credentials valid

### During Task Execution
- [ ] Following governance hierarchy strictly
- [ ] Using only approved MCP servers
- [ ] Adhering to resource limits
- [ ] Maintaining quality standards
- [ ] Logging all actions appropriately

### Post-Task Completion
- [ ] Output submitted for Judge review
- [ ] Quality metrics calculated and stored
- [ ] Resources cleaned up properly
- [ ] Audit trail complete
- [ ] Performance data recorded

---

## 🚨 Emergency Procedures

### Security Incident Response
1. **Immediate Action**: Suspend affected agents
2. **Isolation**: Disconnect from external systems
3. **Assessment**: Security team investigation within 1 hour
4. **Remediation**: Patch and fix within 24 hours
5. **Review**: Post-incident analysis within 7 days

### System Failure Recovery
1. **Detection**: Automated monitoring alerts
2. **Assessment**: Impact analysis within 15 minutes
3. **Recovery**: Failover to backup systems
4. **Restoration**: Full service recovery within 4 hours
5. **Post-mortem**: Root cause analysis within 48 hours

---

**These rules are mandatory for all agents operating in Project Chimera. Violations will result in immediate enforcement actions as specified above. Regular reviews and updates ensure these rules remain effective and relevant.**

**Last Updated**: 2024-01-01  
**Next Review**: 2024-04-01  
**Owner**: Project Chimera Governance Board
