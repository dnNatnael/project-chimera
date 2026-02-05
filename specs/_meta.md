# Project Chimera — Master Specification

## Vision

Project Chimera is an Autonomous Influencer Network designed to operate fleets of AI-powered digital personas that can perceive trends, generate multimodal content, manage engagement, and execute economic actions with minimal human intervention.

Chimera is not a chatbot platform. It is an **agentic operating system** built on:
- Swarm Architectures (Planner → Worker → Judge)
- Model Context Protocol (MCP) for all external integrations
- Agentic Commerce via Coinbase AgentKit

## Strategic Goals

- Enable thousands of AI Influencers to operate concurrently.
- Maintain brand safety via Human-in-the-Loop governance.
- Separate **Intent (Specs)** from **Execution (Agents + Tools)**.
- Make the repository safe for AI swarms to build against.

## Constraints

- All external interactions MUST go through MCP.
- No direct API calls from agent core logic.
- Code must NEVER be written before specs are ratified.
- Safety > Speed.

## Core Principles

- Spec-Driven Development (SDD)
- Traceability via MCP telemetry
- Swarm-based execution
- Governance by exception (HITL only when needed)

## Non-Goals

- No monolithic agent.
- No hardcoded integrations.
- No prompt-only architectures.