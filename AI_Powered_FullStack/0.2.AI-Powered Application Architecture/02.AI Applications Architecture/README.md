# 🏗️ AI Applications Architecture
# 🏗️ 02. AI Applications Architecture

Welcome to the **AI Applications Architecture** reference guide! This folder houses core concepts, design patterns, and engineering strategies for building production-grade Large Language Model (LLM) applications.

---

## 🍽️ The AI Application Anatomy

To visualize how an AI application functions, think of a **high-end restaurant** operation:

```text
 ┌────────────────┐          ┌────────────────┐          ┌────────────────┐
 │  The Interface │ ◄──────► │  Orchestrator  │ ◄──────► │   LLM Engine   │
 │   (Frontend)   │          │   (Backend)    │          │    (The Brain) │
 └────────────────┘          └───────┬────────┘          └────────────────┘
                                     │
                                     ▼
                             ┌────────────────┐
                             │  Order History │
                             │   (Database)   │
                             └────────────────┘

```

* **The Chef (LLM Engine):** External AI models (e.g., OpenAI, Gemini, Claude) that act as the raw intelligence. The chef knows thousands of recipes but never interacts with customers directly—only responding to structured "order tickets" (prompts).


* **The Waiter (Backend Orchestrator):** Built with frameworks like Express or FastAPI. Handles authentication, applies security guardrails, formats raw user requests into structured prompts, and manages asynchronous tasks.


* **The Dining Room (Frontend):** Modern, reactive user interfaces (e.g., React) that render interactions and handle token-by-token response streaming for a live typing effect.


* **The Order History (Database):** Traditional databases (MySQL, PostgreSQL) or Vector databases (Pinecone, ChromaDB) that store persistent session logs and context memory so the model "remembers" previous turns.



---

## 📐 Core Architectures & Controls

### 1. Essential Metrics

* **Context Window:** The maximum capacity of tokens a model can process in a single prompt. Larger context windows allow models to analyze full codebases, long transcripts, or extensive document histories simultaneously.


* **Tokens:** The fundamental unit of text processed by an LLM (1 token ≈ 0.75 words). Drives direct billing costs and memory limits.


* **Inference vs. Training:** Training happens once. Inference occurs on every single user prompt and defines ongoing infrastructure costs and runtime latency.



---

### 2. Hyperparameter Knobs

| Parameter | Function | Low Setting (e.g., 0.2 / 5) | High Setting (e.g., 0.8 / 50) |
| --- | --- | --- | --- |
| **Temperature**<br> | Sets the "creativity thermostat" for token selection.

 | Factual, deterministic, safe

 | Creative, varied, exploratory

 |
| **Top-k**<br> | Restricts choices to the top *k* candidate tokens.

 | Highly focused candidate pool

 | Diverse menu of unexpected choices

 |
| **Top-p (Nucleus)**<br> | Dynamically selects tokens exceeding a cumulative probability threshold *p*.

 | Tight, obvious completion choices

 | Broader, adaptive candidate set

 |

---

### 3. Practical Tuning Matrix

```text
 🎯 Coding / Factual Q&A    ──► Temp: 0.2  | Top-p: 0.8  (Precision-focused)
 🎨 Creative / Storytelling ──► Temp: 0.8  | Top-p: 0.95 (Imaginative)
 💬 General Chatbot        ──► Temp: 0.5  | Top-p: 0.90 (Balanced)

```

---

## 💡 Prompt Engineering Strategies

1. **Zero-Shot Prompting:** Requesting a task without providing explicit past examples, relying entirely on the model's pretrained weights.


2. **Few-Shot Prompting:** Providing a few demonstration input-output pairs inside the prompt to guide output structure and tone.


3. **Chain of Thought (CoT):** Explicitly instructing the model to break complex queries down and reason step-by-step prior to returning a final answer.


4. **System vs. User Separation:**
* **System Prompt:** Establishes permanent behavioral guidelines, personality, guardrails, and role rules.


* **User Prompt:** Contains the dynamic incoming message or task request.