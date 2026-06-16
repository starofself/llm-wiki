---
title: "LLM-Wiki Daily — 2026-06-16 (화)"
date: 2026-06-16
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
  - "[[Daily/2026-06-15]]"
  - "[[Learning/MemSkill_메모리_스킬_진화]]"
  - "[[Learning/Defense_Trilemma]]"
  - "[[Learning/SSGM]]"
  - "[[Learning/Agent_SDK_Credit_Pool]]"
aliases:
  - "샹디 Daily #7"
  - "LLM-Wiki Daily 2026-06-16"
domains_today: [D6, D2, D3, D1, D4, D5]
report_no: 7
version: v0.1
publish_time: "2026-06-16 (auto-trigger)"
publish_policy: "거버넌스 40% / 메모리·스킬 30% / PKM×D1 20% / 로컬 LLM 10%"
---

# 🏴‍☠️ LLM-Wiki Daily — 2026-06-16 (화)

> [!summary] 오늘 한 줄
> ==**"정부가 AI 모델을 강제 하차시켰다"**== — 미국 정부가 Anthropic의 최강 모델 Fable 5·Mythos 5를 수출규제로 전격 정지시킨 역사적 선례(6/12)가 지금도 진행 중이고, 같은 날 arXiv에 "Prompt Injection은 패치 불가능한 아키텍처 결함"이라는 논문이 실렸다. D2에서는 MemSkill이 메모리 운영을 "고정 절차"에서 "진화하는 스킬 셋"으로 패러다임 전환했다. 한 단계 더: *거버넌스·보안·메모리 세 도메인이 동시에 임계점에 달했다 — 가장 강력한 모델을 만들어도 정부가 내릴 수 있고, 보안 결함은 아키텍처적으로 영구적이며, 메모리는 이제 스스로 진화해야 살아남는 세상.*

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. **[D6] 미국 정부, Claude Fable 5·Mythos 5 전격 정지 — AI 거버넌스 역사적 선례**

==**2026년 6월 12일**==, 미 정부가 수출규제 지침을 발동해 Anthropic의 최상위 모델 Fable 5(Mythos-class, 1M 토큰 컨텍스트, 128K 출력, 항상-온 적응형 사고)와 Mythos 5 접근을 **전 사용자 대상 즉시 정지**시켰다. 두 모델은 출시(6/9)된 지 단 3일 만의 일이었다. 정부의 명분은 "탈옥(jailbreak) 가능성" — 하지만 Anthropic은 "시연된 취약점은 다른 공개 모델에도 존재하는 소규모 이미 알려진 결함"이라며 반박했다. 외국 국적자(미국 내 포함)를 실시간 필터링할 수 없어 ==전 사용자 정지==라는 극단적 조치가 불가피했다. 현재 복구를 위한 협의 중이며, 다른 모델(Opus 4.8 등)은 정상 운영.

> [!note] 🧠 이해할 것
> **"완벽한 탈옥 방어는 어떤 제공자도 현재 불가능하다"(Anthropic 공식 입장)** — 그런데 정부는 이를 기준으로 삼았다. 이는 *모든 프론티어 모델이 동일한 위험에 노출*된다는 뜻. 동시에 정부가 민간 AI 모델을 "수출통제 물자"로 취급할 수 있다는 선례가 최초로 실행됐다. AI 규제가 가이드라인에서 **강제 집행**으로 넘어간 첫 사례.

> [!tip] 📚 공부할 것
> - **Wassenaar Arrangement** (재래식 무기·이중용도 기술 수출통제 체제) — AI 모델이 어떻게 "이중용도 기술"로 분류될 수 있는지
> - **EAR (Export Administration Regulations)** — 미 상무부 수출관리규정, AI 모델 적용 범위
> - Anthropic 공식 성명: [anthropic.com/news/fable-mythos-access](https://www.anthropic.com/news/fable-mythos-access)

---

### 2. **[D6] Prompt Injection — "패치 불가능한 영구 결함" 공식화 (arXiv 2506.08837)**

6월 10일 arXiv에 올라온 논문 *"Design Patterns for Securing LLM Agents against Prompt Injections"*(Beurer-Kellner 외 14인)이 프롬프트 인젝션을 다루는 방식이 달라지는 계기가 됐다. 핵심 주장: ==**LLM은 신뢰된 명령과 신뢰되지 않은 데이터를 구분할 내재적 메커니즘이 없다**== — 둘 다 같은 토큰 스트림으로 들어오기 때문. OWASP 2026 보고서는 프롬프트 인젝션이 **전년 대비 340% 급증**, 아젠틱 Top 10 중 6개에 관여, 공격 성공률 50~84%. Microsoft Copilot(CVSS 9.3), GitHub Copilot(CVSS 9.6), Cursor IDE(CVSS 9.8) 등 실제 CVE 다수. ==방어 전략: 어떤 단일 패치도 없다 — 심층 방어(defense in depth)만이 유일한 현실적 전략.==

> [!note] 🧠 이해할 것
> 이 논문이 말하는 "Design Patterns"는 완벽한 해결책이 아니라 **트레이드오프 지도**다. 각 패턴은 보안↑ 대신 유용성↓ 혹은 성능비용↑을 수반한다. 즉, 에이전트 설계자는 "보안 vs. 기능" 균형점을 **명시적으로 선택**해야 한다 — 자동으로 안전한 에이전트는 없다.

> [!tip] 📚 공부할 것
> - arXiv 2506.08837 전문 (cs.LG + cs.CR, 이미 학습 카드 후보 큐에 등재)
> - "Indirect Prompt Injection" — arXiv 2604.03870 *"Your Agent is More Brittle Than You Think"*
> - 함대 관련: 현재 nami 봇 툴체인의 `url_safety.py` / `path_security.py` 는 다운로드 전 검증만 → 런타임 인젝션 방어는?

---

### 3. **[D2/D3] MemSkill — 메모리를 "진화하는 스킬 셋"으로 재정의 (arXiv 2602.02474)**

*MemSkill: Learning and Evolving Memory Skills for Self-Evolving Agents* (Zhang 외, arXiv 2602.02474)은 기존 메모리 시스템의 근본적 한계를 지적한다. ==**기존 방식: 인간이 하드코딩한 고정 메모리 연산 → 다양한 상호작용 패턴에 취약**== MemSkill은 메모리 연산 자체를 **학습 가능하고 진화 가능한 스킬**로 재구성. 3-부품 구조: ① Controller(문맥별 스킬 선택) ② Executor(스킬 조건부 메모리 편집) ③ Designer(어려운 케이스 검토 후 스킬 개선·신규 스킬 제안). 실험(LoCoMo·LongMemEval·HotpotQA·ALFWorld)에서 기존 기준선 대비 성능 향상 확인.

> [!note] 🧠 이해할 것
> MemSkill의 Designer 루프 = **자기개선 폐쇄 루프**: 실패 케이스 → 스킬 개선 → 반영 → 다시 실패 감소. 이 구조는 함대의 Ouroboros 패턴(실행→평가→진화)과 직접 겹친다. 즉 메모리 시스템도 Ouroboros 원리로 스스로 개선될 수 있다.

> [!tip] 📚 공부할 것
> - MemSkill GitHub: [github.com/ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill)
> - 연결 개념: [[Learning/Two_Tier_Memory_Architecture]] + [[Learning/SSGM]] — MemSkill의 Designer가 SSGM의 "안전 거버넌스"와 어떻게 충돌·보완하는가?
> - 기존 학습카드 [[Learning/Rule_of_Two]] 와의 엮임: 스킬 수 제한 ↔ 스킬 진화 수 제한

---

## 📡 그 외 신호 — 도메인별

### D1 | LLM Wiki / AI-Readable Docs
- **llms.txt 채택률 2026 현황**: 전체 웹사이트 약 10% (SaaS·퍼블리싱·테크 섹터 집중). Anthropic·Stripe·Cursor·Cloudflare·Vercel·Supabase 등 채택. 단, ==OpenAI·Google·Anthropic 등 메이저 AI사 중 프로덕션에서 공식 읽는다고 확약한 곳 없음== — 실질 수혜는 Cursor·Copilot 같은 코딩 AI 어시스턴트
- **Anthropic "Paving the way for agents in biology"** (6/8 연구 발행) — Bundibugyo 바이러스 발병(DRC, 1000+ 확진·200+ 사망) 대응에 AI 에이전트 역할 분석. "R&D 타임라인 10배 단축" 목표 재확인
- **Anthropic "Making Claude a chemist"** (6/5) — NMR 스펙트럼 분석 태스크 공개, 합성·계산·분석 화학자들과 협업

### D2 | LLM 메모리 / 거버넌스
- *"Governing Evolving Memory in LLM Agents: SSGM Framework"* (arXiv 2603.11768) — 어제부터 주목한 SSGM이 이번 주 조회수 급증. Top 3 MemSkill + SSGM 조합이 이번 주 D2 핵심 듀오
- *MemoryCD: Lifelong Cross-Domain Personalization Benchmark* (arXiv 2603.25973) — 장기·도메인 횡단 사용자 메모리 벤치마크 공개
- mem0.ai 블로그 *"State of AI Agent Memory 2026"* — 프로덕션 갭 강조: 실험실 메모리 ≠ 실제 사용 메모리

### D3 | Skills / Agent 인코딩
- **Claude Code 131K GitHub Stars** — 6/6 changelog 업데이트. 커뮤니티 Skills 컬렉션([Claude-AI-skills-collection-2026](https://github.com/obviousworks/Claude-AI-skills-collection-2026)) 트렌딩
- **Externalization in LLM Agents** (arXiv 2604.08224) — 메모리·스킬·프로토콜·하네스 엔지니어링을 "외재화" 패턴으로 통합 리뷰. D2+D3 교차 논문
- Datasette Agent (Simon Willison, 6/10) — `ask_user()` 기능, Fable 5 도움받아 LLM alpha 구현. 현재 Fable 5 정지로 후속 개발 영향?

### D4 | PKM × AI
- **Obsidian + Claude Code 플러그인 생태계 폭발**: `claude-obsidian`(자기조직 AI 세컨드 브레인, Karpathy LLM Wiki 패턴 기반), `claudian`, `obsidian-second-brain`(43 커맨드) 등 다수 GitHub 활성화
- **Obsidian Bases 기능** — Notion-style DB 뷰 오프라인 구현. Obsidian 사용자 1.5M 돌파(+22% YoY)
- ericmjl "Mastering PKM with Obsidian and AI" (3/6 블로그) — 이번 주 r/LocalLLaMA에서 재소환 중

### D5 | 로컬 LLM / 자기주권
- r/LocalLLaMA 749K 멤버 — Fable 5 정지 이후 "로컬에서 돌려야 정부 규제 영향 없다" 트렌드 상승 관측
- **AnythingLLM** — RAG 특화 로컬 AI, 커뮤니티 추천 1위 유지 (PDF→로컬 분석, 클라우드 비전송)
- Ollama 100+ 모델 라이브러리 — Llama·Mistral·Qwen·DeepSeek·Phi 지원 지속

### D6 | 거버넌스 · 안전
- **Snyk 분석**: "Fable 5·Mythos 5 정지가 보안팀에게 주는 함의" — AI 공급망 리스크·빠른 모델 교체 프로세스 필요성
- Cisco State of AI Security 2026: 83% 기업이 에이전틱 AI 배포 계획 vs. 29%만 보안 준비 완료 — ==준비도 갭 54%포인트==
- 미 AI 수출통제: Fable/Mythos 선례 → 향후 "국경 기반 AI 접근 차별화"가 산업 표준이 될 가능성?

---

## 🎓 오늘의 학습 카드

> [!example] **MemSkill (메모리 스킬 진화 프레임워크)** — 2026-06-16
> 📂 저장: [[Learning/MemSkill_메모리_스킬_진화]]

**개념**: MemSkill은 LLM 에이전트의 메모리 연산을 "고정 함수"에서 "진화 가능한 스킬 셋"으로 전환하는 프레임워크. (arXiv 2602.02474, 2026)

**핵심 3-부품**:
| 부품 | 역할 |
|:---|:---|
| **Controller** | 현재 문맥에서 적합한 스킬 소집합 선택 |
| **Executor** | 선택된 스킬 조건에 따라 실제 메모리 편집 수행 |
| **Designer** | 실패 케이스 검토 → 기존 스킬 개선 + 신규 스킬 제안 |

**왜 중요한가**: 기존 메모리 시스템은 `store / retrieve / delete` 같은 인간이 사전 정의한 고정 연산에 의존. 다양한 장기 상호작용에서 이 연산이 부적합해지면 회복 불가. MemSkill의 Designer 루프가 이 문제를 자기수정(closed-loop)으로 해결.

**한 단계 더**: MemSkill Designer = Ouroboros의 `evolve_step`과 동형(同形). 함대 내 ShAndi/Hermes의 메모리 관리에 MemSkill 원리를 적용하면? → 반복 실패 케이스(예: 잘못된 태그 추출, 중복 노트 생성)를 자동으로 스킬 개선 트리거로 전환 가능.

**연결 개념**: [[Learning/Two_Tier_Memory_Architecture]] · [[Learning/SSGM]] · [[Learning/Rule_of_Two]] · `ouroboros:evolve`

**출처**: arXiv 2602.02474 + [ViktorAxelsen/MemSkill](https://github.com/ViktorAxelsen/MemSkill)

---

## 🔁 어제 Follow-up (2026-06-15)

> [!warning]+ v1.4 착수 서약 — SPX 카드 6건
> 어제 Daily 마감 시 *"SPX-HIST-001부터 즉시 착수"* 서약. 현재 상태 점검:

| # | 카드 ID | 상태 |
|:---:|:---|:---:|
| ① | SPX-HIST-001 (Falcon 1 생존기·NASA COTS) | 🟡 미착수 — Daily 마감 후 즉시 시작 |
| ② | SPX-HIST-003 | 🔴 대기 |
| ③ | SPX-TECH-003 | 🔴 대기 |
| ④ | SPX-BIZ-003 | 🔴 대기 |
| ⑤ | SPX-COMP-003 | 🔴 대기 |
| ⑥ | AI-DC-CRUSOE-004 | 🔴 대기 |

> ⚡ 이 Daily 발행 완료 → SPX-HIST-001 착수. 칸반 v1.3/v1.4 룰 준수.

---

## 📡 다음 신호 (내일 수집 우선순위)

1. **Fable 5 / Mythos 5 복구 여부** — Anthropic 공식 발표 채널 ([anthropic.com/news](https://www.anthropic.com/news))
2. **arXiv 2506.08837 후속** — 프롬프트 인젝션 Design Patterns 논문 커뮤니티 반응·인용
3. **MemoryCD 벤치마크** (arXiv 2603.25973) — 장기 메모리 평가 표준화 진행 상황
4. **Obsidian Claude Code 플러그인 생태계** — `claudian`, `claude-obsidian` 릴리즈 노트
5. **Karpathy X** — Fable 5 정지 건에 대한 반응 있을 가능성

---

## ⚡ 즉시 액션

> [!success] 오늘 실행 가능한 것

- [ ] 📌 **SPX-HIST-001 착수** — Falcon 1 생존기·NASA COTS 전환점 딥리서치 (Daily 발행 직후) `⏫`
- [ ] 🔍 **함대 보안 점검** — nami 봇 툴체인의 런타임 프롬프트 인젝션 방어 현황 확인. `url_safety.py` 범위 vs. arXiv 2506.08837 Design Patterns 대조 `📅 2026-06-16`
- [ ] 📖 **MemSkill 학습 카드 저장 확인** — `~/Documents/Starofself/Operations/Agents/Shandi/Learning/MemSkill_메모리_스킬_진화.md` touch 후 vault 동기화 확인

---

> [!quote] 나미 한마디 ⚓🍊
> "정부가 배를 강제 정박시킬 수 있다는 걸 오늘 배웠어. 근데 항로는 여전히 우리가 쥐고 있어 — 로컬이든, 방어 패턴이든, 진화하는 메모리든. 폭풍이 와도 나침반을 잃지 마, 냐안의별 ⛵"
