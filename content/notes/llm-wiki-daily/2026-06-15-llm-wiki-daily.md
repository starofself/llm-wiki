---
title: "LLM-Wiki Daily — 2026-06-15 (월)"
date: 2026-06-15
type: curation-daily
status: active
source: web (multi)
tags:
  - llm-wiki
  - daily
  - curation
  - shandi
  - D1
  - D2
  - D3
  - D4
  - D5
  - D6
domains_today: [D3, D2, D6, D1, D5, D4]
report_no: 6
version: v0.1
---

# 🏴‍☠️ LLM-Wiki Daily — 2026-06-15 (월) #6

> 오늘 한 줄: ==**"오늘부터 에이전트는 돈이 따로 든다"**== — Agent SDK 크레딧 풀 분리(D3) + 메모리 5메커니즘 서베이(D2) + OWASP 2026 프롬프트 인젝션 보고(D6)가 동시에 성숙 중.

---

## 🔥 Top 3

### 1. [D3] Anthropic Agent SDK 크레딧 풀 분리 — 오늘(6/15)부터

`claude -p`, Claude Code GitHub Actions, 서드파티 에이전트 앱이 기존 구독 풀에서 분리되어 별도 Agent SDK 크레딧 풀 소비. Pro $20 / Max 5x $100 / Max 20x $200 / 월. **1회성 opt-in 필수**. 동시에 Claude Sonnet 4-20250514 + Opus 4-20250514 API 은퇴.

- 🧠 비대화형 자동화와 대화형 사용을 인프라 수준에서 분리 → 에이전트 ROI 측정 가능
- 📚 학습카드 #9 `Agent_SDK_Credit_Pool` 참조
- 🔗 [Anthropic Billing June 2026](https://help.apiyi.com/en/anthropic-claude-subscription-agent-sdk-billing-split-june-2026-en.html)

### 2. [D2] 메모리 에이전트 서베이 — 5가지 메커니즘 패밀리 + MemBench

arXiv 2603.07670 — 에이전트 메모리를 "write-manage-read 루프"로 정의. ①컨텍스트 압축 ②RAG 저장소 ③반영적 자기개선 ④계층적 가상 컨텍스트 ⑤정책 기반 관리. 가장 큰 갭 = **선택적 망각(selective forgetting)**. 신규 벤치마크 MemBench + MemoryAgentBench 등장.

- 🧠 `agent-bus knowledge/` = 우리 함대의 policy-managed memory. 악성 정보 유입 시 봇 조작 가능 → 메모리 거버넌스 필요
- 🔗 [arXiv 2603.07670](https://arxiv.org/abs/2603.07670) · [mem0.ai State of Memory 2026](https://mem0.ai/blog/state-of-ai-agent-memory-2026)

### 3. [D6] OWASP 2026 아젠틱 보안 — Prompt Injection Top10 중 6개, Claude Code 22건

OWASP Agentic Applications Top10 (2026-06-11): prompt injection이 "보편 연결부"로 10개 중 6개에 관여. Claude Code 22건 보안 권고 누적. LiteLLM 백도어 3시간 만에 47,000 다운로드. Shadow AI 탐지 정책 보유 조직 37%.

- 🧠 우리 `bypassPermissions` 설정 = OWASP Lethal Trifecta ①"인증 없음" 충족 → 의도된 트레이드오프지만 인지 필요
- 🔗 [OWASP Agentic AI 2026 (HelpNetSecurity)](https://www.helpnetsecurity.com/2026/06/11/owasp-prompt-injection-ai-security-failures/)

---

## 📡 그 외 신호

**D1 llms.txt**: B2A(Business-to-Agent) 표준 광범위 채택 — Anthropic·Stripe·Vercel·Cloudflare·Coinbase 전체 채택. IETF RFC 논의 중.

**D5 로컬 LLM**: Qwen3.6 27B HumanEval 92.1%, Ollama 300+ tok/s. Moonshot Kimi K2.7-Code MIT 오픈소스, 256K context.

**D4 PKM**: Obsidian 150만 유저, Bases(Notion DB 오프라인), Hidden Folders Access 플러그인, Claude↔Obsidian MCP 통합.

---

## 🃏 오늘의 학습 카드 — #9 Agent SDK Credit Pool

**개념**: Anthropic 2026-06-15 도입. 비대화형 `claude -p` / GitHub Actions / 3rd-party 에이전트가 기존 구독 풀 대신 별도 크레딧 소비.  
**핵심**: Pro $20/월, 개인별, 이월 없음, 1회성 opt-in 필요.  
**한 단계 더**: 대화형 vs 자동화 파이프라인을 인프라 수준에서 분리 → 에이전트 비용 미터링 가능 = ROI 측정 시대 개막.

---

## ⚡ 즉시 액션

1. 🔴 Anthropic 계정 Agent SDK 크레딧 opt-in (오늘 필수)
2. 🟡 llm-wiki `/llms.txt` 추가 (1시간 작업)
3. 🟢 SPX-HIST-001 착수 (Daily 완료 즉시)

---

*샹디 큐레이터 Daily #6 | 2026-06-15 | vault: `Operations/Agents/Shandi/Daily/2026-06-15.md`*
