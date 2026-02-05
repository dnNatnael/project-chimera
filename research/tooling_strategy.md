# Tooling Strategy – Project Chimera
_Task 2: The Architect (Specification & Context Engineering)_

## 1. Purpose

This document defines the **tooling strategy** for Project Chimera, with a strict separation between:

- **Developer Tooling (Design-Time MCP Tools)**  
  Tools that assist human developers and architects during specification, development, and governance.

- **Agent Runtime Skills (Execution-Time Capabilities)**  
  Capabilities that autonomous Chimera agents are allowed to invoke at runtime.

This separation is **mandatory** and derived directly from the Project Chimera SRS, which emphasizes governance, safety, and MCP-based abstraction.

---

## 2. Core Principle: Tools vs Skills

### 2.1 Definition

**Developer Tools**
- Used by humans
- Improve productivity, traceability, and governance
- Never exposed to autonomous agents
- Exist only during development and review

**Agent Skills**
- Used by Planner / Worker / Judge agents at runtime
- Strictly governed by specs and confidence thresholds
- Invoked via MCP or internal orchestration
- Never allow direct infrastructure access

This distinction prevents:
- Privilege escalation
- Uncontrolled agent behavior
- Architecture drift

---

## 3. Developer Tooling (MCP – Design Time)

### 3.1 Role of Developer MCP Tools

From the SRS:
> MCP acts as the standardized interface between reasoning systems and external capabilities.

At **design time**, MCP servers are used to:
- Inspect the repository
- Maintain traceability
- Validate alignment between specs, skills, and tests
- Act as a “black box recorder” for engineering decisions

---

### 3.2 Selected Developer MCP Tools

#### 3.2.1 `git-mcp`
**Purpose**
- Allow AI-assisted development without bypassing Git hygiene

**Responsibilities**
- Read commit history
- Create structured commits
- Review diffs in context of specs

**Why it exists**
- Enforces the SRS principle that *commit history should tell a story*
- Prevents undocumented architectural drift

---

#### 3.2.2 `filesystem-mcp`
**Purpose**
- Controlled access to the project file system

**Responsibilities**
- Read and edit markdown specifications
- Prevent unauthorized file creation
- Enforce directory boundaries (e.g., no code generation in Task 2)

**Why it exists**
- Ensures spec-driven development
- Prevents AI tools from “vibe coding” outside allowed folders

---

#### 3.2.3 `database-mcp` (Optional, Read-Only)
**Purpose**
- Inspect schemas and migrations (when applicable)

**Responsibilities**
- Validate database models against `specs/technical.md`
- No write access during Task 2

**Why it exists**
- Supports schema correctness without enabling mutation

---

## 4. Agent Runtime Skills (Execution Time)

> **Important:**  
> Agent skills are **not MCP servers**.  
> They are **capability packages** invoked by agents and governed by the swarm architecture.

This distinction aligns with the SRS requirement that:
- MCP Servers = external capability providers
- Skills = internal agent affordances

---

## 5. Skill Design Rules (Derived from SRS)

All agent skills MUST:

1. Have a **single responsibility**
2. Declare explicit **input and output contracts**
3. Emit a **confidence_score**
4. Fail safely and return structured errors
5. Be invocable only by the appropriate agent role:
   - Planner → orchestration
   - Worker → execution
   - Judge → validation

No skill may:
- Directly call third-party APIs
- Modify global state without Judge approval
- Bypass MCP tools

---

## 6. Initial Critical Skills (Specification Only)

These skills are defined at the **interface level only** in Task 2.

### 6.1 `skill_trend_fetcher`

**Purpose**
Retrieve and summarize trending topics relevant to an agent’s niche using MCP Resources.

**Inputs**
- `niche: string`
- `time_window: string` (e.g., "4h", "24h")

**Outputs**
- `trends: list[string]`
- `confidence_score: float`

**Failure Modes**
- No relevant data available
- MCP resource timeout

---

### 6.2 `skill_content_generator`

**Purpose**
Generate text, image, or video prompts aligned with persona constraints.

**Inputs**
- `content_type: text | image | video`
- `goal_description: string`
- `persona_constraints: list[string]`

**Outputs**
- `content_artifact: string | url`
- `confidence_score: float`

**Failure Modes**
- Persona violation detected
- Low confidence generation

---

### 6.3 `skill_social_publisher`

**Purpose**
Publish approved content via MCP social media tools.

**Inputs**
- `platform: twitter | instagram | threads`
- `content_artifact`
- `disclosure_level`

**Outputs**
- `post_id`
- `timestamp`
- `confidence_score`

**Failure Modes**
- Platform rate limit
- MCP tool rejection

---

## 7. Governance Alignment

This tooling strategy enforces the following SRS mandates:

- **MCP-only external interaction**
- **Planner–Worker–Judge separation**
- **Human-in-the-Loop escalation**
- **Optimistic Concurrency Control**
- **Budget and safety enforcement**

No tooling decision in this document permits behavior that violates:
- Persona constraints
- Confidence thresholds
- Economic governance

---

## 8. Task 2 Boundary

This document intentionally excludes:
- Tool configuration
- Skill implementation
- Infrastructure setup
- CI/CD integration

Those belong to **Task 3: The Governor**.

---

## 9. Summary

This tooling strategy ensures that:
- Humans retain architectural control
- Agents operate within explicit capability boundaries
- MCP acts as the universal abstraction layer
- Specifications, not prompts, govern behavior

This is a foundational control layer for scaling Project Chimera safely and reliably.