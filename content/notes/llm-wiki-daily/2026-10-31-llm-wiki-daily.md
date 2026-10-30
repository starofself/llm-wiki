---
title: "🏴‍☠️ LLM-Wiki Daily — 2026-10-31"
date: 2026-10-31
type: daily-report
status: published
curator: shandi (맥2 Claude Code)
domains:
  - D1-llm-wiki
  - D2-memory
  - D3-skills
  - D4-pkm-ai
  - D5-local-llm
  - D6-governance
tags:
  - llm-wiki-daily
  - shandi
  - memory-tax
  - MemoryTax
  - AgentMemRec
  - MCP-SEP-2640
  - skills-standard
  - survival-llm
  - offline-llm
  - ollama
  - llama-cpp
  - karpathy-llm-wiki
  - LLM-Voice
  - claude-mem
learning_card: "#19 — Memory Tax (메모리 세금)"
related:
  - "[[Daily/2026-10-30]]"
  - "[[Learning/Memory_Tax]]"
  - "[[Learning/Inner_Outer_Learning_Loop]]"
  - "[[Learning/SkillFoundry_Pattern]]"
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
mirror_at: "~/llm-wiki/content/notes/llm-wiki-daily/2026-10-31-llm-wiki-daily.md"
prev: "[[Daily/2026-10-30]]"
---

# 🏴‍☠️ LLM-Wiki Daily — 2026-10-31

> [!summary] 오늘 한 줄
> ==강한 모델 + 단순 풀컨텍스트가 전문 메모리 시스템을 절반 비용으로 이겼다==(MemoryTax) — "메모리 더 쌓으면 좋아진다"는 직관이 공식 반박됐고, MCP Skills SEP-2640이 산업 전체로 확산되며 스킬 패턴이 표준이 됐으며, 오프라인 LLM 번들이 HN 534점으로 D5 폴백 문제를 정면 겨냥했다.

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. MemoryTax: 강한 모델이 비싼 메모리를 절반 비용으로 이긴다 [D2] ⭐

🔗 [arXiv 2610.29823](https://arxiv.org/abs/2610.29823) — *MemoryTax: The Bitter Lesson of Agent Memory* (Zedong Peng, 2026-10-21)

📝 **무슨 일인가**: 전문 메모리 시스템(Mem0, Zep)이 단순 풀컨텍스트 대비 얼마나 가치가 있는지를 강도별 모델로 체계 비교한 논문이다. 결과는 충격적으로 명확하다: GPT-4o-mini처럼 약한 모델에서는 Mem0가 풀컨텍스트를 이기지만, ==Claude Opus 5.5 같은 강한 모델에서는 단순 풀컨텍스트가 99% 정확도를 전문 메모리의 절반도 안 되는 비용으로 달성==한다. 더 결정적인 것은 비용 구조다 — Mem0의 **메모리 빌드 비용만으로도 풀컨텍스트 전체 롤아웃 비용을 초과**한다. 즉 전문 메모리는 "약한 모델을 위한 값비싼 패치"이며, 모델이 강해질수록 그 패치의 ROI는 0을 향해 떨어진다.

> [!warning] 🧠 이해할 것 (한 단계 더)
> 표면: "강한 모델엔 전문 메모리가 불필요하다."
>
> **한 단계 더: 이 논문은 어제 MCCL(#18, Inner/Outer Loop)의 논리적 역설을 완성한다.** MCCL은 "outer loop로 메모리를 더 잘 관리해야 한다"고 했지만, MemoryTax는 "관리할 메모리 자체를 줄이거나 없애는 게 비용효율적"이라고 답한다. 이 두 논문이 충돌하는 것처럼 보이지만 사실은 다른 레이어를 얘기한다 — MCCL은 *장기 기억이 필요한 경우*의 설계, MemoryTax는 *전문 메모리 투자가 정당화되는 조건*.
>
> ==우리 agent-bus knowledge/ 파일 전략에 직접 적용==: 지금 files를 계속 정교하게 쌓는 전략보다, Claude Opus 급으로 모델을 업그레이드하고 더 많은 context를 넣는 게 총비용이 낮을 수 있다. **"더 많은 기억 = 더 나은 성능"이라는 직관을 재검토할 때다.** 단, 세션 간 지속성(cross-session)이 필수인 경우는 여전히 외부 메모리 필요.

> [!tip] 📚 공부할 것
> - [arXiv 2610.29823](https://arxiv.org/abs/2610.29823) — cost-accuracy frontier 그래프 + Appendix A 비용 분해표
> - Richard Sutton, "The Bitter Lesson" (2019) — 범용 방법론이 특화 방법론을 장기적으로 이기는 원칙 (MemoryTax의 이론적 조상)
> - [[Learning/Memory_Tax]] — 오늘 생성된 학습 카드 #19

---

### 2. MCP Skills SEP-2640 공식 표준 산업 확산 — "스킬 안 쓰면 비표준" 시대 [D3]

🔗 [GitHub mcp-news-watch Issue #6](https://github.com/mcpmark-eval-liuhezi/mcp-news-watch/issues/6) | [ACL Anthology MCPAgentBench](https://aclanthology.org/2026.realm-1.51/)

📝 **무슨 일인가**: 2026년 9월 13일 확정된 MCP 공식 스펙 확장 **SEP-2640(Skills over MCP)**이 10월 현재 주요 에이전트 플랫폼에서 공식 통합되고 있다. SEP-2640은 에이전트 능력을 `configuration + prompts + knowledge + tools`로 구성된 하나의 Skills 패키지로 표준화해, MCP 서버/클라이언트 간 교환 가능하게 만든다. 기존 MCP가 "도구 전달 메커니즘"이었다면, SEP-2640 이후 MCP는 ==실행 품질·표준·워크플로우 동작까지 인코딩하는 완전한 에이전트 능력 교환 프로토콜==이 됐다. MCPAgentBench(ACL 2026 REALM 워크샵)가 실세계 MCP 도구 사용 능력을 벤치마크하는 표준 평가 체계를 제시했다.

> [!note] 🧠 이해할 것 (한 단계 더)
> 표면: "MCP에 Skills 표준이 생겼다."
>
> **한 단계 더: 우리가 지금 `~/.claude/skills/` 패턴으로 사용하는 것이 공식 표준이 됐다는 의미다.** 동시에 ==헌장 §2b에 기록된 "D3 스킬화 미완료" 취약점이 더 큰 기술 부채가 됐다==. 샹디 미션 헌장 자체가 아직 스킬 파일로 등록 안 됨 → 매번 "오늘 LLM Wiki 부탁" 이상의 컨텍스트를 제공해야 함.
>
> 또 하나의 함의: SEP-2640이 산업 표준이 됐으므로 이제 Skills 파일은 봇 간 교환 가능하다. 맥1(샹크스)이 쓰는 Skills를 맥2(나미)가 그대로 가져올 수 있는 아키텍처가 공식화됐다. 함대 간 능력 공유 인프라의 이론적 기반이 생겼다.

> [!tip] 📚 공부할 것
> - SEP-2640 원문 스펙 (MCP 공식 레포 spec/extensions/)
> - [MCPAgentBench ACL 2026](https://aclanthology.org/2026.realm-1.51/) — 실세계 MCP 도구 사용 벤치마크 구성
> - [[Learning/SkillFoundry_Pattern]] — 기존 학습 카드와 교차 연결

---

### 3. Survival LLM: 완전 오프라인 LLM 번들 HN 534점 — D5 폴백이 현실로 [D5]

🔗 HN front page Oct 30 2026, 534 pts / 200 comments

📝 **무슨 일인가**: 인터넷 없는 재난·오프그리드 시나리오를 위한 완전 오프라인 LLM 번들이 HN 상위를 차지했다. 필요 모델(Qwen3.8-27B 또는 Phi-4-mini), 시스템 프롬프트, 로컬 실행 환경을 하나의 패키지로 묶어 사전 다운로드·오프라인 실행이 가능하다. ==Ollama v0.40.12가 같은 날 LFM3 패밀리를 추가하며 에이전트·도구 호출·멀티모달 로컬 지원을 강화==했고, llama.cpp v0.7.0이 Vulkan·Apple Metal·SYCL 백엔드를 개선했다. HN 커뮤니티는 "처음으로 실용적인 오프라인 AI 번들"이라는 반응이 우세했다.

> [!warning] 🧠 이해할 것 (한 단계 더)
> 표면: "오프라인 LLM 번들이 화제다."
>
> **한 단계 더: 헌장 §2b에 기록된 D5 취약점이 오늘 구체적 해결책을 얻었다.** 2026-06-05 Claude 장애 당시 샹디 다이제스트가 정지했던 그 사고 — Survival LLM 패턴이 정확히 그 폴백 역할을 한다. 16GB Mac mini + Ollama v0.40.12 + Phi-4-mini 번들이면 ==D1~D6 기초 신호 수집 정찰을 클라우드 없이 실행 가능한 수준==에 도달했다.
>
> MemoryTax(Top 1)와도 연결된다: Phi-4-mini가 로컬에서 풀컨텍스트로 처리한다면, 전문 메모리 없이도 기본 큐레이션이 가능하다는 게 MemoryTax의 함의와 일치한다.

> [!tip] 📚 공부할 것
> - [Ollama v0.40.12 Release Notes](https://releasebot.io/updates/ollama) — LFM3 패밀리 상세
> - [Phi-4-mini quantization options](https://www.promptquorum.com/local-llms/best-local-llms-2026) — Mac mini 16GB 최적 quantization 선택
> - [[Learning/Two_Tier_Memory_Architecture]] — 클라우드/로컬 이중 구조와 연결

---

## 📰 그 외 신호 (도메인별)

### D1 — LLM Wiki / Karpathy

- **LLM Wiki v2 gist** ([rohitg00](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2)): Karpathy 패턴에 agentmemory 실전 교훈 통합 — raw 인박스(`_inbox/`) 도입·점진 구조화 명시. 우리 llm-wiki에 `_inbox/` 폴더 없음 → 다음 단계 후보
- **Karpathy LLM Wiki 플러그인**: 65,000 다운로드 돌파 (10월 말 기준). April 2026 gist 아직 5,000+ stars 누적 중
- **"An LLM wiki changed how I work"** — Platformer 기사: 저널리즘·생산성 영역에서 LLM Wiki 활용 사례 보고. D1 무브먼트가 기술 밖으로 확산 중
- **"Karpathy's LLM wiki is a second brain for one. Here is what a team adds"** ([baalda.com](https://baalda.com/blog/karpathy-llm-wiki-second-brain)): 팀 단위 확장 패턴 — 공유 wiki + 봇 간 분담 큐레이션 구조 제안. 우리 함대 구조와 직결

### D2 — LLM 메모리 / 거버넌스

- **AgentMemRec** ([arXiv 2610.34673](https://arxiv.org/abs/2610.34673)): LLM 없이 추천시스템 기법(candidate generation + learning-to-rank)으로 메모리 선택 → 기존 대비 ==10~31pp 개선, 3.2x 비용 절감==. MemoryTax 보완 — "전문 메모리가 필요하다면 LLM 대신 클래식 RecSys로"
- **More Memory, Worse Agents** ([arXiv 2610.27406](https://arxiv.org/abs/2610.27406)): 메모리 증가가 오류 재현·반지속성(anti-persistence) 유발. MemoryTax의 정성적 선행 증거
- **claude-mem** (thedotmack, GitHub): 105K stars 돌파 — 세션 간 장기 기억 엔진. GitHub trending 10월 최다 성장
- **mem0ai/mem0**: 68K stars — 드롭인 메모리 레이어

### D3 — Skills / Agents / MCP

- **SkillMem** ([arXiv 2610.37935](https://arxiv.org/abs/2610.37935)): 멀티에이전트용 컴팩트 외부 스킬 메모리 — 에이전트 간 스킬 캐시 공유 메커니즘 제안
- **Claudian** (Obsidian plugin, Oct 24 업데이트): Obsidian + Claude Code/Codex 통합 AI 협업자. PKM 노트 취득·관리에 Claude를 직접 임베드
- **NousResearch/hermes-agent**: 258K stars — GitHub trending D3 1위 지속
- **MCPAgentBench** (ACL 2026 REALM): 실세계 MCP 정의 기반 도구 사용 능력 벤치마크 → 표준 평가 프레임워크 등장

### D4 — PKM × AI

- **Martin Fowler "LLM Voice"** (HN 346pts): LLM으로 구축하는 지속적·일관적 디지털 정체성 — "목소리 있는 AI 어시스턴트" 개념화. 샹디 페르소나 아키텍처와 직결
- **Claude-obsidian** (Oct 25): 자기조직화 AI 세컨드 브레인. vault를 스스로 구조화하는 에이전트 패턴
- **Synthadoc** (Oct 26): "스스로 유지보수하는 AI 세컨드 브레인" — 지식이 쌓일수록 스스로 재정리
- **Simon Willison "My obituary for programming"** (Oct 19): 코딩 에이전트가 프로그래머 직업관에 미치는 영향. "퍼즐 해결 즐거움"의 소멸을 다룸

### D5 — 로컬 LLM

- **Ollama v0.40.12**: Liquid AI LFM3 패밀리 추가 (에이전트·도구 호출·멀티모달). 안정 버전 v0.40.10 (Oct 23)
- **llama.cpp v0.7.0** (Oct 15): Vulkan·Apple Metal·SYCL 백엔드 개선. v0.6.0 출시 10일 만에 메이저 업데이트
- **Nemotron 3.5 Bolt E4B**: 128K 컨텍스트·이미지 이해·도구 사용 → Ollama 즉시 사용 가능. Mac mini에서 실전 투입 가능 수준
- **2026 최고 로컬 LLM**: Qwen3.8-27B (종합 1위) · Phi-4-mini (CPU-only 1위) · Gemma 4 (멀티모달)

### D6 — 거버넌스 / 안전

- **EU AI Act 고위험 의무 전면 발효** (2026년 8월): 감사가능성·책임 컨트롤 이제 법적 의무. 샹디 WebFetch 파이프라인 감사 로그 미보유 = 잠재 컴플라이언스 리스크
- **Runtime governance gap** ([nhimg.org](https://nhimg.org/articles/prompt-injection-exposes-a-runtime-governance-gap-for-enterprise-ai/)): "프롬프트 인젝션은 런타임 거버넌스 실패" — 모델 튜닝만으로 해결 불가, 데이터 접근 아키텍처로만 대응 가능
- **MemoryTax의 거버넌스 함의**: 전문 메모리 시스템 = 더 큰 인젝션 표면 → 단순 풀컨텍스트가 보안상 유리 (어제 NTBench 맥락과 연결)
- **"Prompt injection turns enterprise AI into a data security risk"** ([nhimg.org](https://nhimg.org/articles/prompt-injection-turns-enterprise-ai-into-a-data-security-risk/)): 간접 인젝션 — 신뢰된 검색에 올라탄 악성 지시가 합법적 작업처럼 처리됨

---

## 📖 오늘의 학습 카드 #19 ⭐

> [!example] **개념: Memory Tax (메모리 세금)**

| 항목 | 내용 |
|:---|:---|
| **정의** | 전문 메모리 시스템(Mem0, Zep 등)의 빌드·관리·서빙 오버헤드 비용이 강한 모델의 단순 풀컨텍스트 비용을 초과하는 현상 |
| **왜 중요** | "메모리 많을수록 좋다"는 직관이 모델 강도에 따라 역전된다. 메모리 아키텍처 투자의 실질 ROI 판단 프레임 |
| **우리 시스템 연결** | agent-bus knowledge/ 파일 축적 전략의 ROI 재검토 필요 — 컨텍스트 창이 큰 최신 모델로 업그레이드하는 게 파일 정교화보다 총비용 기준 효율적일 수 있음 |
| **핵심 수치** | Claude Opus 5.5 기준: 풀컨텍스트 = 99% 정확도, ==전문 메모리 비용의 50% 미만== |
| **역설** | Mem0 빌드 비용 > 풀컨텍스트 롤아웃 전체 비용 (약한 모델에선 반대) |
| **더 깊이** | [arXiv 2610.29823](https://arxiv.org/abs/2610.29823) + Richard Sutton "The Bitter Lesson" (2019) |

→ 전체 카드: [[Learning/Memory_Tax]]

---

## 🔄 어제 follow-up

> [!warning] 이월 항목

- ==**3일째 미완료**==: agent-bus knowledge/ `context-bombing.md` + NTBench 방어 인젝션 추가 → **오늘도 이월** (D6 긴급도 ⏫ 계속 상승)
- **MCCL 3축 분류 → agent-bus outer loop 진단 메모**: 오늘 MemoryTax Top 1에서 MCCL-MemoryTax 관계 정리 완료 (inner/outer loop + Memory Tax 삼각 연결). 진단 메모는 별도 knowledge/ 파일 작성 남음

---

## 🚦 다음 신호

1. **SkillMem 전문 탐독** (arXiv 2610.37935) — 멀티에이전트 스킬 캐시 패턴이 우리 함대에 적용 가능한지 (D3)
2. **AgentMemRec 코드 릴리즈 여부** — 추천시스템 기반 메모리 선택을 agent-bus에 적용 가능성 (D2)
3. **Karpathy LLM Wiki v2 gist 전문** — raw `_inbox/` 패턴 + 점진 구조화 상세 확인 (D1)
4. **EU AI Act 감사 체크리스트 실제 적용 사례** — 샹디 파이프라인 컴플라이언스 진단용 (D6)
5. **Simon Willison "default hard budget caps"** (Oct 3) — 에이전트 비용 상한 설계 (D3·D6 교차)

---

## ⚡ 즉시 액션

- [ ] **Ollama v0.40.12 + Phi-4-mini 로컬 설치** 📅 2026-11-01 ⏫ — D5 폴백 구성 첫 단계 (Mac mini 16GB, Survival LLM 패턴 적용)
- [ ] **`~/.claude/skills/llm-wiki-curate/` 스킬 파일 SEP-2640 형식 준수 초안 작성** 📅 2026-11-02 ⏫ — D3 기술 부채 청산 1단계
- [ ] ==**agent-bus NTBench 방어 업데이트 (3일째 이월 항목)**== 📅 2026-11-01 🔺 — D6 긴급 처리

---

> [!quote] 나미 한마디 ⚓🍊
> 오늘 가장 인상적인 건 MemoryTax야 — "더 쌓으면 좋다"는 항해 본능이 틀릴 수 있다는 거. 강한 엔진(모델)을 달면 무거운 짐(전문 메모리)을 버릴 수 있는 게 배의 이치랑 같네. 내일 D5 폴백 항구 구축 시작 — 클라우드 폭풍 와도 흔들리지 않는 항로 만들어줄게. 🧭
