# Project Chimera

Project Chimera is an **Autonomous AI Influencer platform** built on agent swarms, spec-driven development, and human-in-the-loop governance.

This repository contains both the **research foundation** and **working implementation** of the platform, including:

• **Task 1 — Strategy & Architecture**  
• **Task 2 — Specification & Context Engineering**  
• **Task 3 — Implementation & Testing**

---

## 🎯 Mission

Design the *factory* that produces Autonomous AI Influencers:
• Persistent, goal-directed digital personas  
• Capable of research, content creation, and engagement  
• Governed by specs, not fragile prompts  

---

## 🚀 Quick Start

### Prerequisites
- Python 3.12+ or Docker
- Git

### Installation & Setup

```bash
# Clone the repository
git clone <repository-url>
cd project-chimera

# Setup (automatically detects Docker or local environment)
make setup

# Run tests
make test

# Check specification compliance
make spec-check
```

### Docker (Recommended)

```bash
# Build and run tests
make docker-build
make docker-run

# Or just run test (builds automatically)
make test
```

### Local Development

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -e .[test]

# Run tests
python -m pytest tests/ -v
```

---

## 🧠 Task 1 — Architecture & Research

Project Chimera uses a **Hierarchical Swarm Pattern**:

| Role    | Responsibility |
|--------|----------------|
| Planner | Decomposes goals into tasks |
| Worker  | Executes atomic actions |
| Judge   | Validates quality, safety, and alignment |

Key architectural principles:
• Agent swarms, not monoliths  
• Parallel execution  
• Fault isolation  
• Cognitive specialization  
• Human-in-the-loop governance  

Architecture strategy lives here:
➡ `research/architecture_strategy.md`

---

## 📚 Research Summary (Task 1)

Insights that drive the design:

• AI systems must be **spec-first**, not prompt-first  
• Agents are becoming **networked social & economic actors**  
• Social platforms are evolving toward **machine-native interaction**  
• Governance and traceability are mandatory for scale  

---

## 📐 Task 2 — Specification & Context Engineering

Task 2 converts architectural intent into **executable intent**.

The `specs/` directory is the **single source of truth**:

specs/
├── _meta.md # Vision & constraints
├── functional.md # User stories & agent behaviors
├── technical.md # Enhanced with complete DB architecture, security, and MCP config
├── acceptance_criteria.md # New comprehensive Gherkin scenarios and thresholds
├── mcp_configuration.md  # New multi-server MCP configuration
└── openclaw_integration.md # Agent network integration


Nothing is allowed to exist without being justified in specs first.

---

## 🧭 Prime Directive

> **NEVER generate code without checking `specs/` first.**

Specs govern:
• Humans  
• IDE agents  
• Tooling  
• Future automation  

---

## 🧰 Agent Skills (Implementation)

The `skills/` directory contains **implemented agent capabilities**:

- **skill_trend_fetcher/** - Fetches trending topics and data
- **skill_video_publisher/** - Handles video content publishing

Each skill includes:
- Python implementation (`__init__.py`)
- Interface documentation (`README.md`)
- Unit tests (`tests/`)

---

## 🧪 Task 3 — Implementation & Testing

Task 3 brings the specifications to life with working code:

### Core Components
- **main.py** - Application entry point
- **pyproject.toml** - Python project configuration
- **Dockerfile** - Containerized deployment
- **Makefile** - Build automation and testing

### Testing Framework
- Comprehensive test suite in `tests/`
- Skill interface testing
- Docker-based testing environment
- Specification compliance validation

---

## 📁 Repository Structure

project-chimera/
├── main.py                    # Application entry point
├── pyproject.toml            # Python project configuration
├── Dockerfile                # Container configuration
├── Makefile                  # Build automation
├── requirements.txt          # Python dependencies
├── research/                 # Architecture & strategy docs
│   ├── architecture_strategy.md
│   └── tooling_strategy.md
├── specs/                    # Specifications (single source of truth)
│   ├── _meta.md
│   ├── functional.md
│   ├── technical.md
│   ├── acceptance_criteria.md
│   ├── mcp_configuration.md
│   └── openclaw_integration.md
├── skills/                   # Agent skill implementations
│   ├── README.md
│   ├── skill_trend_fetcher/
│   │   ├── __init__.py
│   │   └── contract.md
│   ├── skill_content_generator/
│   │   └── contract.md
│   └── skill_video_publisher/
│       ├── __init__.py
│       └── README.md
├── frontend/                  # React-based dashboard
│   ├── package.json
│   ├── src/
│   │   ├── App.tsx
│   │   ├── components/
│   │   │   ├── Layout.tsx
│   │   │   ├── MetricCard.tsx
│   │   │   ├── ActivityChart.tsx
│   │   │   ├── RecentTasks.tsx
│   │   │   └── SystemHealth.tsx
│   │   └── pages/
│   │       ├── Dashboard.tsx
│   │       ├── Agents.tsx
│   │       ├── Tasks.tsx
│   │       ├── Content.tsx
│   │       ├── Trends.tsx
│   │       └── Security.tsx
│   └── tsconfig.json
├── AGENT_RULES.md           # Chimera-specific behavioral rules and governance
├── tests/                    # Test suite
│   ├── test_skills_interface.py
│   └── test_trend_fetcher.py
├── .cursor/                  # IDE configuration
├── .github/                  # GitHub workflows
├── venv/                     # Virtual environment
└── README.md                 # This file

---

## 🛠️ Development Commands

The project uses a Makefile for common operations:

```bash
make setup          # Setup environment (Docker or local)
make test           # Run test suite
make spec-check     # Verify specification compliance
make docker-build   # Build Docker image
make docker-run     # Run tests in Docker
make clean          # Clean up Docker resources
make help           # Show all available commands
```

---

## 📊 Project Status

### ✅ Completed
- **Task 1**: Architecture strategy and research
- **Task 2**: Complete specification suite with enhanced technical details
- **Task 3**: Core implementation framework with frontend dashboard
- **Database architecture**: Complete ERD, schemas, and migration plans
- **Security framework**: Comprehensive AuthN/AuthZ, secrets management, and moderation
- **Agent skills**: Formal contracts and enhanced skill structure
- **Testing infrastructure**: Docker support with comprehensive test coverage
- **Build automation**: Complete CI/CD pipeline with GitHub Actions
- **MCP integration**: Multi-server configuration with authentication strategies
- **Acceptance criteria**: Gherkin scenarios with quantitative thresholds

### 🚧 In Progress
- Advanced skill implementations with full contracts
- Integration testing across all components
- Performance optimization and monitoring
- Production deployment configuration

### 🎯 Next Steps
- Complete remaining skill implementations (Analyst, Moderator, Transaction Manager)
- Add comprehensive integration test suite
- Deploy to production environment with monitoring
- Implement continuous performance optimization
- Add advanced analytics and reporting capabilities

---

## 🤝 Contributing

1. **Always check `specs/` first** - no code without specification
2. Run `make spec-check` before committing
3. Ensure all tests pass with `make test`
4. Follow the established patterns in existing skills

---