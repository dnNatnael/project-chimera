# Chimera Agent Skills — Runtime Capability Strategy

This document defines the **runtime Skills** used by Chimera Agents.  
A *Skill* is a modular capability package that an agent can invoke to perform a specific class of actions.

These are **conceptual and structural definitions only**.  
No implementation logic exists at this stage.

---

## 🧩 What Is a Skill?

In Project Chimera, a *Skill* is:

• A named, reusable capability  
• Bound to a single responsibility  
• Callable by Worker agents  
• Governed by Judge and HITL layers  

Skills represent **what agents are allowed to do**, not how they do it.

---

## 🎯 Design Goals

• Atomic and composable  
• Safe by default  
• Governed by policy  
• Scalable across thousands of agents  

---

## 📌 Core Runtime Skills

The following are the **critical runtime Skills** for Chimera Agents:

---

### 🔹 skill_trend_fetcher  
Purpose:  
Allows an agent to discover emerging topics and patterns relevant to its niche.

Used for:  
• Campaign ideation  
• Content planning  
• Audience relevance tracking  

---

### 🔹 skill_content_generator  
Purpose:  
Allows an agent to produce persona-aligned content.

Used for:  
• Writing posts, scripts, and captions  
• Maintaining consistent voice  
• Translating ideas into publishable material  

---

### 🔹 skill_publisher  
Purpose:  
Allows an agent to publish approved content to external platforms.

Used for:  
• Executing distribution  
• Scheduling posts  
• Managing disclosure levels  

---

## 🛡 Governance Rules

• Skills are invoked only by Worker agents  
• All outputs must pass through Judge review  
• Sensitive actions require Human-in-the-Loop approval  
• No Skill bypasses governance  

---

## 🧠 Architectural Alignment

Skills are:

• Stateless  
• Interoperable via MCP  
• Controlled by the Orchestrator  
• Logged for traceability  

---

## 📍 Status

This file satisfies:

**Task 2.3 — Tooling & Skills Strategy**  
**Sub-Task B — Agent Skills (Runtime)**

---

This document defines the *capability layer* of Chimera — not its code.