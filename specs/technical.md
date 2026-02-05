# Technical Specification — Project Chimera

## Architecture Pattern

- Swarm Pattern: Planner → Worker → Judge
- Integration Layer: MCP (Model Context Protocol)
- Storage:
  - Weaviate (Semantic Memory)
  - PostgreSQL (Transactional)
  - Redis (Queues + Cache)

---

## API Contracts

### Agent Task Schema

```json
{
  "task_id": "uuid",
  "task_type": "generate_content | reply_comment | execute_transaction",
  "priority": "high | medium | low",
  "context": {
    "goal_description": "string",
    "persona_constraints": ["string"],
    "required_resources": ["mcp://news/latest"]
  },
  "created_at": "timestamp",
  "status": "pending | in_progress | review | complete"
}
