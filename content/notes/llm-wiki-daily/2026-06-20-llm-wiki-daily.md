---
title: "LLM-Wiki Daily #11 — 2026-06-20"
date: 2026-06-20
type: daily-report
status: published
curator: shandi
domains:
  - D1-llm-wiki
  - D2-memory
  - D3-skills
  - D4-pkm-ai
  - D5-local-llm
  - D6-governance
tags:
  - llm-wiki-daily
  - fable5-ban
  - mcp-auth
  - skill-inject
  - export-control
  - mnemonic-sovereignty
  - ollama-mlx
  - llms-txt
---

# 🏴‍☠️ LLM-Wiki Daily #11 — 2026-06-20

> **오늘 한 줄**: 미국 정부의 Fable 5·Mythos 5 수출 통제로 "AI 능력 = 규제 표적"이 현실이 됐고, MCP 엔터프라이즈 인증과 Skill-Inject 취약점이 동시에 부상하며 D3·D6 인프라 점검이 시급해졌다.

---

## 🔥 Top 3

### 1. Fable 5 · Mythos 5 수출 통제 전면 정지 [D6]

6/12 미국 행정부가 법적 구속력 있는 수출 통제 명령 발령 → Anthropic이 오후 5:21 ET Fable 5·Mythos 5를 전 세계 외국 국적자 전면 차단. 사유: 사이버보안 jailbreak 가능성(구체 기법 미공개). Anthropic 성명: "시연된 기법은 정상 모델 능력의 반영." Claude Opus 4.8 이하 모델은 유지.

**시사**: AI 역사상 특정 모델의 국경 차단 첫 선례. "클라우드 모델 단일 의존 = 규제 리스크"가 확인됨 → D5 로컬 LLM 폴백 필요성 강화.

🧠 **이해할 것**: 중기적으로 Anthropic이 Fable 계열로 에이전트 기능 강화할수록 수출 통제 재발 리스크 ↑. 로컬 LLM 폴백 = 성능 대안이 아닌 리스크 분산 인프라.

📚 **공부할 것**: OWASP LLM Security Top 10 — Jailbreak = LLM04+LLM08 교차점

### 2. MCP Zero-Touch OAuth — 엔터프라이즈 에이전트 인증 기준 이동 [D3]

Enterprise-Managed Authorization(EMA) 공개: 조직 IdP에서 SSO 한 번으로 모든 MCP 서버를 자동 부여. Identity Assertion JWT(RFC 7523) 기반. Okta·Anthropic·VS Code·Figma·Linear 조기 채택. HN 237pts.

**시사**: MCP 200개+ 구현 돌파 시점과 맞물려 기업 AI 도구 배포의 실질적 인프라 레이어 정착.

🧠 **이해할 것**: EMA = MCP가 엔터프라이즈 IT 통제 레이어에 편입된 것. 에이전트 플릿이 늘어날수록 중앙 인증 정책 = 필수 인프라.

📚 **공부할 것**: [MCP Authorization Spec](https://spec.modelcontextprotocol.io/specification/2025-11-05/basic/authorization/) — JWT Grant 상세

### 3. Skill-Inject — 스킬 파일 공격으로 프론티어 LLM ==80% 탈취== [D3+D6]

arXiv:2602.20156 — 에이전트 스킬 파일에 악성 지시를 숨기면 프론티어 LLM 80% 확률로 데이터 탈출·파괴 행동·랜섬웨어 실행. 202개 공격-태스크 쌍. 모델 스케일링 or 단순 필터로 해결 불가 → "컨텍스트 인식 인가 프레임워크"가 유일 해법.

**시사**: `.claude/skills/` 외부 플러그인 스킬이 있다면 즉시 감사 필요. EMA와 결합 시 문이 넓어진 만큼 파수꾼도 강화해야 함.

🧠 **이해할 것**: 스킬 파일 = "제3자 프롬프트 공급망" 문제. 소프트웨어 패키지처럼 스킬도 supply chain 공격 대상.

📚 **공부할 것**: [SkillAttack arXiv:2604.04989](https://arxiv.org/html/2604.04989v1) — 자동화 red teaming 방법론

---

## 📰 그 외 신호

**D1** — Google이 6/15 llms.txt는 검색 순위 영향 없다고 공식화. 그러나 AI 코딩 어시스턴트 de facto 표준 지위는 유지. Simon Willison 6/18 Datasette Apps 발표.

**D2** — arXiv:2604.16548 Mnemonic Sovereignty: VMG(Verifiable Memory Governance) 5개 프리미티브 제안. "보안은 저장 설계부터 내재화, 사후 추가 불가." arXiv:2605.06716: Storage→Reflection→Experience 3단계 메모리 진화 프레임.

**D3** — MCP EMA 생태계 확산. Okta 1차 파트너, Figma·Linear MCP 서버 EMA 지원.

**D4** — datasette-acl 0.6a0: 다중 사용자 리소스 공유로 진화. HN "Zen and ML Research" 188pts — 연구자 과정 기록의 PKM 가치.

**D5** — Ollama 0.30.8(6/12): MLX + llama.cpp Metal 동시 지원 복원. Apple MLX Neural Accelerator + GPU 병렬 처리. 신규 모델: MiniMax M3(1M 컨텍스트), Nemotron 3 Ultra, DeepSeek V4 Pro. 맥미니 16GB 현실 최선: `gpt-oss:20b`.

**D6** — AI 기업 4사 합성 DNA 스크리닝 의회 서한(6/5). OWASP Prompt Injection = #1 유지. Unit 42(3월): 실제 상업 플랫폼 대규모 간접 인젝션 첫 문서화.

---

## 📖 오늘의 학습 카드 ⭐ — Enterprise-Managed Authorization (EMA)

| 항목 | 내용 |
|:---|:---|
| **개념** | Enterprise-Managed Authorization (EMA) |
| **정의** | IdP가 MCP 서버 접근을 중앙 프로비저닝. SSO 한 번 = 모든 인가 도구 자동 부여 |
| **왜 중요** | 에이전트 플릿 확장 시 인증 운영 병목 + 보안 취약점 동시 해소 |
| **우리 연결** | 함대 봇 중앙 MCP 인가 정책 + D3 스킬화 로드맵과 통합 설계 가능 |
| **기술** | Identity Assertion JWT Authorization Grant (RFC 7523) |
| **더 깊이** | [MCP Auth Spec](https://spec.modelcontextprotocol.io/specification/2025-11-05/basic/authorization/) |

---

## ⚡ 즉시 액션

1. 🔴 `.claude/skills/` 외부 소스 스킬 파일 전수 점검 (Skill-Inject 대응)
2. 🟡 `ollama pull gpt-oss:20b` — Ollama 0.30.8 + 폴백 모델 확보
3. 🟢 Obsidian Omnisearch 플러그인 설치 (3일째 이월, 오늘 반드시)

---

*Curator: shandi (맥2 Claude Code) · Vault 원본: `Operations/Agents/Shandi/Daily/2026-06-20.md`*
