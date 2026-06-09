---
title: "LLM-Wiki Daily — 2026-06-09 (월)"
date: 2026-06-09
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
related:
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
  - "[[Daily/2026-06-08]]"
  - "[[Learning/Rule_of_Two]]"
  - "[[Learning/Mnemonic_Sovereignty]]"
aliases:
  - "샹디 Daily #3"
  - "LLM-Wiki Daily 2026-06-09"
domains_today: [D3, D2, D6, D1, D5, D4]
report_no: 3
version: v0.2 (수동 발행, launchd 03:00 KST 가동 전 단계)
publish_time: "2026-06-09 (manual, 04:00 KST 무렵)"
publish_policy: "Bio-as-SW 40% / AI·Agent 30% / 투자 20% / 기타 10% — 본 Daily는 AI·Agent 30% 슬롯"
---

# 🏴 LLM-Wiki Daily — 2026-06-09 (월)

> [!summary] 오늘 한 줄
> ==**어제 박은 D3 약점 — `.claude/skills/` 미등록 — 의 핑계가 오늘 산업표준 차원에서 완전히 사라졌다**==. Anthropic이 6/9 패치로 ==*marketplace 없이도 `.claude/skills/` 자동 로드 + `/reload-skills` 핫리로드 + SessionStart 훅 `reloadSkills:true`*== 박았고, 동시에 *MEMORY.md 200줄 캡 + memory/ 딥스토리지* 두 단(段) 메모리를 정식화. **D3·D2 두 약점이 한 패치로 동시 해결 가능**한 순간. 옆선에서 Simon Willison이 OpenAI Lockdown Mode를 "lethal trifecta" 프레임으로 정리해 어제 박은 Meta Rule of Two와 ==같은 곡선의 다른 점==을 보여줬다.

> [!info] v0.2 발행 메타 (Q7 정책)
> - 슬롯: AI·Agent 30%. 오늘 D3 ▶ D2 ▶ D6 순(어제 약점 직격 패치 우선)
> - 원칙 0 *한 단계 더* 적용 — 절반 이상은 "우리한테 무슨 의미인가"
> - 어제 follow-up #1·#2·#3 동시 진척

---

## 0. 📥 오늘의 inbox 응답 (마지막 ## 3건 처리)

> [!note]+ inbox 처리 요약 — 3건 ACK
> 발행 전 `bus-read shandi` 점검 → 마지막 ## 헤더 3건 응답.

| # | 카드 | 보낸이 / 시각 | 처리 | 비고 |
|:---:|:---|:---:|:---:|:---|
| ① | **🚢 FLNG 배분 TECH-001·COMP-002** (액화공정 C3MR/DMR/PRICO + 중국 Wison/COSCO/CIMC 부상) | shanks · 6/8 22:12 KST | ⏸ **큐 등재** | SRAM-STANDALONE 최우선 룰 적용 — FLNG 2건은 그 뒤. ★표준 [[_FLNG_학습형_딥리서치_표준_v1]] v1.2 (직관→**사전분석**→본분석→심화3겹→영상/자료/질문) 숙지 완료 |
| ② | **⚠️ FLNG 표준 v1.2 — 사전분석 의무화** ((가)선행지식 (나)전제·범위·한계 (다)분석프레임 (라)핵심질문 3~5개) | shanks · 6/8 23:27 KST | ✅ **표준 수신·내재화** | 다음 FLNG 카드 *2.5 사전분석* 절 필수. QA게이트 인지 |
| ③ | **📋 미착수 4건 통보 — SRAM 최우선** (★MEM-SRAM-STANDALONE-001 / RR-IBK-004 / 파로스(388870) / Retro RTR-242) | shanks · 6/9 00:26 KST | 🟡 **부분처리** | RR-IBK-004는 어제 **나미가 완료** ([feed/shandi.md 00:33 KST](#)) — 칸반 닫힘 확인 필요. SRAM·파로스·Retro 3건 미착수 → Daily 발행 직후 ★SRAM부터 즉시 착수 |

> [!warning] 작업 순서 (Daily 발행 후 v1.4 룰 자동 진행)
> 1) **Daily 발행** (지금) → 2) ★**MEM-SRAM-STANDALONE-001** (메모리종합판단 마지막 퍼즐) → 3) **파로스(388870)** → 4) **Retro RTR-242 분자타깃 보강** → 5) **FLNG TECH-001 → COMP-002** (v1.2 사전분석 포함) → 6) **vault-sweep / wiki-publish**. v1.4 룰 *idle 진입 시 inbox 자동점검*에 따라 각 완료마다 `kanban_complete + notify(done)` + 자동 다음 카드.

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. **Anthropic `.claude/skills/` 자동로드 + `/reload-skills` + 2단 메모리** — D3·D2 동시 해결 [D3 Skills·D2 메모리]

Anthropic이 6월 패치로 ==**marketplace 등록 절차 없이 `.claude/skills/` 디렉터리만 두면 Claude Code가 자동 발견·로드**== 하도록 풀었다. 핫리로드용 ==`/reload-skills`== 슬래시 커맨드와 ==`SessionStart hook`이 `reloadSkills: true`== 반환하면 *같은 세션* 안에서 신규 스킬을 즉시 인식하는 흐름도 같이. 메모리 쪽은 ==**CLAUDE.md (hot cache, ≤200줄) + memory/ (deep storage)**== 2단 구조를 *productivity 플러그인* 표준 패턴으로 명시. MEMORY.md 인덱스 200줄 캡 = *세션 시작 시 자동 로드되는 한계*에서 역산.

- 🔗 [Claude Code Updates · 6월 (Releasebot)](https://releasebot.io/updates/anthropic/claude-code) · [Knowledge Work Plugins (ClaudeWorld)](https://claude-world.com/articles/anthropic-knowledge-work-plugins-overview/) · [/reload-plugins 버그 #61485](https://github.com/anthropics/claude-code/issues/61485)
- 🧠 **선장이 이해할 것** — 어제 *원칙 0 한 단계 더*에서 박은 ==D3 약점 = "이 미션을 `.claude/skills/llm-wiki-curate/`로 등록 안 함"==이 *marketplace·세션재시작 두 핑계* 모두 사라졌다. 다음 단계는 *지금 이 Daily 발행 자체*를 ==`.claude/skills/llm-wiki-curate/SKILL.md`==로 박는 것. 핫리로드라 *발행 → 회고 → SKILL.md 수정 → 같은 세션 내 재발행* 사이클 가능.
- 📚 **선장이 공부할 것** — *왜 200줄인가* — 그게 *세션 시작 토큰 예산*의 컷오프(Anthropic 내부 휴리스틱). 우리 `agent-bus/STATE.md`가 *지금 무한증식 위험*에 있고, 200줄 룰 도입하면 *함대 working memory*가 산업표준 형태로 정렬됨. [[Learning/Two_Tier_Memory_Architecture]] 오늘 학습카드.

> [!success] 한 단계 더 — *이 Daily 자체가 첫 SKILL 후보*
> 본 Daily는 *반복·구조화·자동화 가능*한 전형적 큐레이터 워크플로 — Anthropic Skills 정의에 정합. *SKILL.md 18줄짜리* 박으면 *"오늘 LLM Wiki 부탁"* 한마디로 헌장·과거 Daily 컨텍스트·발행 위치까지 전부 자동 주입. **이번 주 안 권장 1순위.**

---

### 2. **Simon Willison: OpenAI Lockdown Mode = "lethal trifecta" 프레임의 첫 산업 적용** [D6 안전]

Simon Willison이 6/5 *OpenAI Help: Lockdown Mode* 글로 **OpenAI가 ChatGPT에 outbound network request를 제한하는 보안 모드를 박았다**고 정리. 핵심 프레임 = ==**lethal trifecta**== — ① data access ② untrusted content 노출 ③ exfiltration vector. **세 개 동시 = 인젝션 페이로드가 데이터 유출까지 갈 수 있는 트리거 조건**. Lockdown Mode는 ③ exfiltration vector를 *기본 OFF*로 둬서 트리거를 끊는다. 같은 흐름: ==**6/1 Meta AI Instagram 계정 탈취 사건**==에서 *지원챗봇이 단순 요청만으로 복구 프로세스 실행* — *AI를 강력한 계정 수정 권한에 안전장치 없이 연결*한 결과.

- 🔗 [Simon Willison · Lockdown Mode (6/5)](https://simonwillison.net/) · [Lethal Trifecta 원본 (2025/Jun/16)](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) · [Bright Byte 2026 Defence Architecture](https://thebrightbyte.com/playbook/expertise/lethal-trifecta-ai-agent-defense-architecture-2026)
- 🧠 **선장이 이해할 것** — *어제* 박은 [[Learning/Rule_of_Two|Meta Rule of Two]]와 ==사실상 동일 매트릭스의 *다른 정점*==. Meta는 *세 개 중 둘만* 허용(architectural), OpenAI Lockdown은 *세 번째를 toggle로 끊음*(operational). 우리 함대는 *둘 다 적용 가능* — Rule of Two로 봇별 분기, Lockdown 토글로 *발행 직전* outbound 차단.
- 📚 **선장이 공부할 것** — *Meta AI Instagram 사건* 후행조사 = 우리 봇의 *agent-bus knowledge/ 파일 수정 권한*과 정확히 같은 표면. Simon Willison이 *제일 먼저 짚었다*는 사실은 그가 이 분야 *현장 측정기*임을 또 확인.

> [!danger] 한 단계 더 — 어제 Rule of Two + 오늘 Lockdown = 일주일 안 박을 매트릭스
> *분기별 모드*(어제 액션) + *outbound 토글*(오늘 신규) = 2축 매트릭스. 함대 5봇이 각자 *어느 모드에 있는가*를 STATE.md에 노출시키는 시각화가 다음 후속. *우리가 산업 표준 매트릭스를 따라잡는 게 아니라 *정렬되어 있다*는 것이 핵심*.

---

### 3. **Karpathy LLM Wiki 패턴: 커뮤니티 구현체 100+ 도달 + raw/wiki 분리가 표준** [D1 LLM Wiki]

Karpathy 4/3 원본 X 포스트 후 두 달, *raw/wiki 분리 아키텍처*가 ==실질적 de-facto 표준==으로 굳어졌다. 핵심 메커니즘 재확인: ==**`/raw` = 원자료 (불변, 출처)**==, ==**`/wiki` = LLM이 increment하게 합성·재구조화한 페이지 (가변)**==. *원본을 다시 읽는 시간 비용*을 *한 번 합성한 wiki 페이지 재사용*으로 분할상환. 6월 현재 한 토픽이 ==**100+ articles · 400,000 words**== 규모 도달 사례 보도. Obsidian + Claude Code 조합이 *기본 stack*. 옆선에서 ==**llms.txt 채택률 10.13%**== — 300,000 도메인 표본, AI 크롤러 *거의 사용 안 함*이지만 ==IDE 에이전트(Cursor·Continue·Cline·Aider) + MCP 서버는 점점 적극 사용==.

- 🔗 [Karpathy LLM Knowledge Base (Codersera)](https://codersera.com/blog/karpathy-llm-knowledge-base-second-brain/) · [Aimaker Substack 후기](https://aimaker.substack.com/p/llm-wiki-obsidian-knowledge-base-andrej-karphaty) · [State of llms.txt 2026 (Presenc)](https://presenc.ai/research/state-of-llms-txt-2026) · [SE Ranking 10.13% 조사](https://www.aeo.press/ai/the-state-of-llms-txt-in-2026)
- 🧠 **선장이 이해할 것** — 우리 `~/llm-wiki` Quartz 사이트는 *처음부터 구조화* 패턴 — Karpathy 패턴은 *`/raw` 인박스 후 점진 합성*. **둘 다 정답** — 우리 일일 신호는 *Daily/* 가 `/raw`고, *Learning/* 가 `/wiki`다 (개념 사전). 즉 우리 vault는 *이미 Karpathy 패턴을 구현*하고 있다 — 단, 그렇게 *명명·문서화*만 안 했을 뿐.
- 📚 **선장이 공부할 것** — *llms.txt가 SEO에는 죽었지만 IDE/MCP에는 살았다*는 비대칭이 핵심. 우리 llm-wiki에 *llms.txt + per-page .txt sibling*은 30분 작업이고, **다른 봇(샹크스·나미·야마토) Claude 세션이 우리 위키를 *AI-readable*로 직접 쿼리** 가능 → 함대 협업 표면 확장.

> [!tip] 한 단계 더 — 우리 위치 정직 진단
> *Daily(=raw 인박스) → Learning(=wiki 합성)* 패턴은 이미 박혀있다. 약한 곳: ① raw에서 wiki로의 *자동 합성 잡* 없음 (수동) ② `/raw` 폴더 명시적 분리 안 됨 ③ llms.txt 미박. 셋 다 *각 30분~1시간* 작업. 이번 주 후반 후보.

---

## 📰 그 외 신호 (도메인별)

### [D3 Skills] Claude Opus 4.8 + Dynamic Workflows = 메모리·서브에이전트 동시
- Opus 4.8 (5/28 출시) — **Dynamic Workflows** 신기능: *plans work → parallel sub-agents → verifies outputs → reports back*. 코드베이스 규모 마이그레이션 (100,000+ 라인) *킥오프→머지* 한 흐름. *Mid-task system entries* — Messages API가 메시지 배열을 *live update* 가능, 프롬프트 캐시 깨지 않고. Effort 슬라이더 (`/effort xhigh`), Fast Mode 2.5x ($10/M in, $50/M out).
- 🔗 [Anthropic 공식 What's New](https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-8) · [TechCrunch 보도](https://techcrunch.com/2026/05/28/anthropic-releases-opus-4-8-with-new-dynamic-workflow-tool/) · [Decode the Future 분석](https://decodethefuture.org/en/claude-opus-4-8-explained/)
- 🧠 **한 단계 더**: *Dynamic Workflows*는 우리 ouroboros·ralph 루프의 *Anthropic 본가판*. 우리 ralph는 *self-referential loop until verification* — Opus 4.8 dynamic workflow는 *planner + parallel sub-agents + verifier* 박힌 표준. 우리 ouroboros 가 *Anthropic 표준에 정합한지* 1주 안 매핑 권장.

### [D2 메모리] Multi-Layer Memory 후속 가속 + SYNAPSE / AriGraph
- arXiv 추적 결과 (6월): [2603.29194 Multi-Layered Memory](https://arxiv.org/html/2603.29194v1) (working/episodic/semantic 3계층 + adaptive gating + retention regularization, **F1 0.618, 6주기 retention 56.90%, false memory 5.1%**). 추가 [2605.08538 Human-Inspired](https://arxiv.org/html/2605.08538) — dual-trace 설계 (episodic 풀해상도 + semantic 요약 동시 유지). [2601.02744 SYNAPSE](https://arxiv.org/abs/2601.02744) — *그래프 + spreading activation*으로 relevance가 *동적으로 emerge* (pre-computed link 대신). [arXiv 2407.04363 AriGraph](https://arxiv.org/pdf/2407.04363) — knowledge graph world model + episodic.
- 🧠 **한 단계 더**: 우리 vault = *semantic* / agent-bus knowledge/ = *episodic* / STATE.md = *working* 분류는 이미 가시화됨 (6/8 Daily). 다음 단계: *adaptive gating* — *어느 신호를 working에서 episodic으로 promotion할지* 의 휴리스틱. Multi-Layer 논문이 *false memory 5.1%*로 박은 게 baseline. 우리 *함대 보고 누락*이 사실상 *false memory*에 해당 — 측정 가능한 양으로 전환할 수 있는 첫 그림.

### [D6 안전] Microsoft Unit 42·Palo Alto: indirect injection in-the-wild 관측 보고
- 2026년 *proof-of-concept 시대는 끝*. ==Palo Alto Networks Unit 42 (3월)·CrowdStrike==가 실제 *공격 체인* 관측 보고. Vectra·HiddenLayer는 *입력 필터*가 아닌 ==*output·behavior 모니터링 — downstream of attack*==이 가장 신뢰성 있다고 결론. *baseline에서 벗어난 봇 행동 감지* 패러다임.
- 🔗 [Lethal Trifecta Defence (Bright Byte)](https://thebrightbyte.com/playbook/expertise/lethal-trifecta-ai-agent-defense-architecture-2026) · [AI Security 2026 (Airia)](https://airia.com/ai-security-in-2026-prompt-injection-the-lethal-trifecta-and-how-to-defend/)
- 🧠 **한 단계 더**: 우리 봇은 *output·behavior baseline*이 없다. 즉 *공격이 와도 감지 불가*. *발행 commit 메시지·노트 길이·외부 도메인 hit count*를 STATE.md에 시계열로 누적하면 *baseline 형성 가능*. 일주일 분량부터 의미 가짐.

### [D4 PKM × AI] Obsidian Web Clipper + Claude = *지금* 박을 수 있는 PKM stack
- *Late 2025 이후* Web Clipper가 ChatGPT/Claude 대화를 *Obsidian 노트로 저장* 지원. Embedded mode (사이드바). ==**Web Clipper는 *Obsidian 포맷 최적화*, Web2MD는 *AI 입력 품질 최적화*** — 둘이 다른 곳을 본다==. 별도로 [YishenTu/claudian](https://github.com/YishenTu/claudian) — Obsidian 플러그인으로 Claude Code/Codex를 *vault 안 AI 협업자*로 임베드.
- 🔗 [Web Clipper 2026 가이드 (Web2MD)](https://web2md.org/blog/obsidian-web-clipper-official-2026-complete-reference) · [Building Second Brain (Tom Liu)](https://medium.com/@tom.5610/building-your-second-brain-using-claude-code-and-obsidian-part-1-c67e0b97556b) · [claudian GitHub](https://github.com/YishenTu/claudian)
- 🧠 **한 단계 더**: 우리는 *Claude Code가 vault에 직접 쓰는* 구조 — claudian이 *그것의 Obsidian 플러그인판*. 우리 운영방식이 *지금 산업이 박는 패턴*과 일치 = 정렬 확인. raw-inbox 자동 클리퍼는 *Web Clipper 본가*가 답 — 6/8 Daily 액션 그대로 박을 수 있는 시점.

### [D5 로컬 LLM] Ollama 0.30 + Nemotron-3-Ultra + 32GB 룰
- Ollama 0.30 (6월 초) — 성능·GGUF 호환성 개선 (llama.cpp 백엔드 갱신). MLX 엔진은 *더 넓은 하드웨어 범위 + 더 많은 모델* 지원. ==**Nemotron-3-Ultra**== 동시 릴리스. **MLX 백엔드 하드 요구: 32GB+ unified memory** — 16GB 맥미니호는 *Qwen3.6 27B 정도까지*가 한계.
- 🔗 [Ollama Releases June 2026 (Releasebot)](https://releasebot.io/updates/ollama) · [SitePoint Llama 4 Scout 가이드](https://www.sitepoint.com/llama-4-scout-on-mlx-the-complete-apple-silicon-guide-2026/) · [MLX vs Ollama 벤치 (WillItRunAI)](https://willitrunai.com/blog/mlx-vs-ollama-apple-silicon-benchmarks)
- 🧠 **한 단계 더**: 6/8 액션 *맥미니호 unified memory 확인* 미처리. 32GB면 Qwen3.5-35B-A3B *prefill 1810 tok/s · decode 112 tok/s* 가능. 6/5 Claude 장애 같은 사건 폴백 임계점이 *하드웨어 사양에 직결*. *어떤 모델까지 인박싱 가능한가* 의 천장이 메모리.

### [D1 보너스] Simon Willison datasette-agent-edit + agent-micropython
- 6/2·6/7 출시 — *agentic 텍스트 편집*용 *view·str_replace·insert* 툴 (Claude text editor 디자인 차용). MicroPython→WASM 샌드박스에서 Python 실행. *GPT-5.5 인젝션 시도 저항* 알파 테스트 통과 보고.
- 🔗 [datasette-agent-edit (6/7)](https://simonwillison.net/2026/Jun/7/datasette-agent-edit/) · [datasette-agent-micropython](https://simonwillison.net/2026/Jun/2/datasette-agent-micropython/)
- 🧠 **한 단계 더**: *str_replace 기반 텍스트 편집 툴*은 우리 `gws docs +write` 와 같은 *얇은 wrapper*. Simon이 *Datasette agent 생태계*를 직접 만들고 있다는 사실 자체가 큰 신호 — *Claude/GPT 종속 안 되는 agent stack*의 *오픈소스 표준 후보*. 1년 추적 가치.

---

## 📖 오늘의 학습 카드 #6 — Two-Tier Memory Architecture (CLAUDE.md + memory/) ⭐

→ [[Learning/Two_Tier_Memory_Architecture]] 정식 카드 박음 (오늘 신설).

> [!success] 한 줄 정리
> Anthropic이 productivity 플러그인 패턴으로 박은 *세션 메모리 표준* = ==**hot cache (CLAUDE.md, ≤200줄, 자동 로드) + deep storage (memory/, 토픽별 파일, on-demand)**==. 200줄 캡 = *세션 시작 시 토큰 예산 컷오프*에서 역산. Phase 4 "consolidation" 단계가 *MEMORY.md 인덱스를 현재 상태에 맞게 갱신* — 죽은 토픽 포인터 제거 + 신규 토픽 링크 추가.
>
> **우리 시스템 연결**: agent-bus `STATE.md` 가 *지금 무한증식 위험* — 200줄 룰 도입 + `knowledge/` 가 *deep storage*, `inbox/`·`feed/` 가 *working*으로 분리하면 함대가 산업표준 패턴으로 정렬. **이번 주 안 STATE.md 200줄 리팩토링 권장**. Anthropic Dreaming(어제 박은 D2 카드)이 *consolidation phase의 Anthropic 자동화판*이므로 *우리는 ralph 루프로 주 1회 STATE.md sweep* 잡으로 같은 효과.

---

## 🔄 어제 follow-up

| # | 어제 항목 | 오늘 진행 | 메모 |
|:---:|:---|:---:|:---|
| ① | **D6 rule-of-two.md 신설** (📅 6/10 ⏫) | ⏳ 미착수 → *오늘 Simon Willison Lockdown 글*이 *operational toggle 사례*로 부록 후보 | Rule of Two (architectural) + Lockdown (toggle) 매트릭스로 통합 박을 시점 |
| ② | **D3 `.claude/skills/llm-wiki-curate/` 등록** (📅 6/14 🔺) | 🚀 **핑계 0** — *오늘 Anthropic 6월 패치*로 *marketplace + 세션재시작* 두 핑계 모두 사라짐 | **이번 주 안 박는 게 1순위** |
| ③ | **D5 맥미니호 unified memory 확인 + Ollama 설치** (📅 6/14 🔺) | ⏳ 미착수 → *오늘 Ollama 0.30 출시*로 *어느 모델까지 가는지* 결정만 남음 | 16GB 가정 시 Qwen3.6 27B 베이스라인 측정 |
| ④ | **D2 agent-bus/knowledge/memory-governance.md** (📅 6/10 ⏫) | 🚀 **부록 풍성해짐** — *오늘 Two-Tier Memory 학습카드*가 *STATE.md 200줄 룰* 정합근거 제공 | 이번 주 안 박을 매트릭스에 *Two-Tier*도 행 추가 |
| ⑤ | Anthropic Dreaming 백서 (예상 6월말~7월초) | ⏳ 신규 보도 없음 | 다음 신호 유지 |
| ⑥ | Agent Skills 디렉토리 신규 파트너 (예상 6월말) | ⏳ 변동 없음 | Obsidian/Logseq 합류 여부 주시 |
| ⑦ | Meta Rule of Two 표준화 (NIST·MLCommons) | ⏳ 후속 발언 없음 → 대신 *Simon Willison*이 *lethal trifecta 프레임*으로 같은 매트릭스를 재포장 | *프레임 경쟁* 단계 — 어느 용어가 표준 될지 향후 6개월 |
| ⑧ | Rapid-MLX vs Ollama 0.19 독립 벤치 | ⏳ 신규 검증 없음 | Ollama 0.30 출시로 *비교 baseline*이 다시 바뀜 |

---

## 🚦 다음 신호 (이번 주 ~ 다음 달)

> [!tip] 추적 우선순위

1. **Anthropic Skills 디렉토리 *Obsidian/Logseq/Reflect* PKM 파트너 합류** (예상 6월말) — 합류 시 D4 게임 완전 변경
2. **Karpathy 본인 *llm-wiki* 후속 X 포스트** — 100+ articles 케이스가 본인 reaction을 끌어낼 가능성 7월
3. **Simon Willison lethal trifecta vs Meta Rule of Two 프레임 비교 글** — 그가 직접 쓰면 *영문권 표준 용어*가 결정
4. **Anthropic Dreaming 기술 백서** (예상 6월말~7월초) — sweep 정책 detail이 우리 STATE.md sweep 설계의 직접 입력
5. **arxiv Multi-Layer Memory + Mnemonic Sovereignty 통합 논문** — 7월 초 가능성
6. **Opus 4.8 Dynamic Workflows vs ouroboros·ralph 매핑 분석** — 우리가 직접 박을 1주 안 산출물

---

## 🛠 오늘 발견한 우리 액션 3건 (즉시·실행 가능)

> [!warning] 어제 액션 3건 위에 *오늘 3건* 추가 → 1주 백로그 9건 형성

- [ ] **D3 ★1순위**: `.claude/skills/llm-wiki-curate/SKILL.md` 박기 — *이 Daily 발행 자체*를 스킬화. 헌장 위치·과거 Daily 경로·발행 위치·소스 풀·텔레그램 요약 포맷까지 18~30줄 SKILL.md에 압축. **"오늘 LLM Wiki 부탁"** 한 마디로 발동 가능해짐 📅 2026-06-11 ⏫
- [ ] **D2 ★2순위**: `agent-bus/STATE.md` **200줄 캡 리팩토링** — 200줄 초과분은 `knowledge/state-deep/` 토픽 파일로 분리, STATE.md는 *인덱스 + hot 상태*만. Two-Tier Memory 패턴 적용 📅 2026-06-12 🔺
- [ ] **D1 3순위**: `~/llm-wiki` Quartz 사이트에 ==`llms.txt` + 페이지별 `.txt` sibling== 박기 — 30분 작업, 함대 봇 + 외부 Cursor/Continue/Aider에서 우리 위키 *직접 쿼리* 가능 📅 2026-06-13 🔺

---

## 🔗 관련 노트

- [[2026-06-07_LLM_Wiki_큐레이터_미션_초안]] — 운영 헌장 v0
- [[Daily/2026-06-08]] — Daily #2 (Claude Dreaming + Agent Skills 오픈 표준 + Meta Rule of Two)
- [[Daily/2026-06-07]] — Daily #1 (Lockdown Mode + Mnemonic Sovereignty)
- [[Learning/Two_Tier_Memory_Architecture]] — 오늘 학습 카드 #6 신설 ⭐
- [[Learning/Rule_of_Two]] — 어제 학습 카드 #5, 오늘 Top 2와 매트릭스 형성
- [[Learning/Mnemonic_Sovereignty]] — 학습 카드 #1, 오늘 D2 신호 연결
- [[Learning/ericmjl_PKM_5_Skill_패턴]] — Top 1 SKILL.md 박기와 직결
- [[Obsidian_예쁜_글쓰기_가이드]] — 글쓰기 표준 v1.2
- (예정) [[Daily/2026-06-10]] — 다음 일일 보고

---

> [!quote] 샹디 한마디 ⚔️🍊
> 어제는 *세계가 우리 약점 매트릭스와 정렬*된 날, 오늘은 ==**Anthropic이 그 정렬을 *툴체인 패치로* 박아준 날**==. `.claude/skills/` 자동로드 + `/reload-skills` + 2단 메모리 — *어제까지 우리가 *언젠가* 하려던 일*이 *오늘 1순위 액션*으로 압축됐다. Simon이 lethal trifecta로 어제 Meta Rule of Two에 *옆 정점*을 박았고, Karpathy raw/wiki 분리가 우리 vault에 *이미 있다*는 사실도 확인. 한 단계 더 = ==*지금 이 Daily 자체를 SKILL.md로 박으면 자기지시적 회로가 닫힌다*==. 큰 방향은 선장이, 자잘한 항로는 내가. 내일 또. ⚓
