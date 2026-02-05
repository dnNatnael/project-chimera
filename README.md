# project-chimera

This repository contains the **research, architecture, and specification foundation** for *Project Chimera*, an Autonomous AI Influencer platform built on agent swarms, spec-driven development, and human-in-the-loop governance.

⚠️ This repository intentionally contains **no implementation code**.  
It is focused strictly on:

• **Task 1 — Strategy & Architecture**  
• **Task 2 — Specification & Context Engineering**

---

## 🎯 Mission

Design the *factory* that produces Autonomous AI Influencers:
• Persistent, goal-directed digital personas  
• Capable of research, content creation, and engagement  
• Governed by specs, not fragile prompts  

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
├── technical.md # APIs, schemas, system contracts
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

## 🧰 Agent Skills (Interfaces Only)

The `skills/` directory defines **capability contracts**, not implementations.

Each skill specifies:
• Purpose  
• Inputs / Outputs  
• Constraints  

---

## 📁 Repository Structure (Tasks 1 & 2)

chimera/
├── research/
│ └── architecture_strategy.md
│ └── tooking_strategy.md
├── specs/
│ ├── _meta.md
│ ├── functional.md
│ ├── openclaw_integration.md
│ └── technical.md
├── skills/
│ └── README.md
│ └── skill_trend_fetcher/
│ └── skill_video_publisher/
├── .cursor/
│ └── rules/
│ └── agents.mdc
└── README.md