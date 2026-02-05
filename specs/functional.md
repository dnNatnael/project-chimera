# Functional Specification — Project Chimera

## Personas

### FR-1: Agent Persona System
As a system, Chimera SHALL load agent identities from `SOUL.md` files that define:
- Backstory
- Voice/Tone
- Beliefs
- Directives

### FR-2: Hierarchical Memory
Agents SHALL retrieve:
- Short-term memory from Redis
- Long-term semantic memory from Weaviate
before reasoning.

---

## Perception

### FR-3: Trend Ingestion
As an Agent, I need to monitor MCP Resources (news, mentions, feeds) to detect trends.

### FR-4: Relevance Scoring
As a Planner, I only create tasks when relevance_score ≥ 0.75.

---

## Creation

### FR-5: Multimodal Content
As a Worker, I can generate:
- Text
- Images
- Video
via MCP Tools.

### FR-6: Character Consistency
All image/video generations MUST include `character_reference_id`.

---

## Action

### FR-7: Platform Publishing
As a Worker, I publish posts only through MCP Tools (e.g. twitter.post_tweet).

### FR-8: Bi-directional Loop
As an Agent, I must ingest → plan → generate → act → verify.

---

## Governance

### FR-9: Judge Review
All outputs MUST be validated by Judge Agents.

### FR-10: HITL Escalation
If confidence_score < 0.7 OR topic is sensitive → send to Human Review.

---

## Commerce

### FR-11: Wallet Assignment
Each Agent SHALL have a non-custodial crypto wallet.

### FR-12: Budget Enforcement
All transactions MUST be approved by CFO Judge.