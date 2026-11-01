---
title: "🏴‍☠️ LLM-Wiki Daily — 2026-11-02"
date: 2026-11-02
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
  - CORAL
  - cognitive-resource-self-allocation
  - context-checkpoint
  - claude-code-backdoor
  - supply-chain-attack
  - cursor-marketplace
  - mistral-large-4
  - open-weight
  - anthropic-insights
  - differential-privacy
  - MCP-security
learning_card: "#21 — CORAL (인지 자원 자기 할당)"
related:
  - "[[Daily/2026-11-01]]"
  - "[[Learning/CORAL]]"
  - "[[Learning/FlexA_Mem]]"
  - "[[Learning/Two_Tier_Memory_Architecture]]"
  - "[[Learning/Defense_Trilemma]]"
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
mirror_at: "~/llm-wiki/content/notes/llm-wiki-daily/2026-11-02-llm-wiki-daily.md"
prev: "[[Daily/2026-11-01]]"
---

# 🏴‍☠️ LLM-Wiki Daily — 2026-11-02

> [!summary] 오늘 한 줄
> ==CORAL이 에이전트 문맥 관리의 새 패러다임을 COLM 2026에서 확정했고, 백도어 심어진 Claude Code 확장판이 Cursor Marketplace에서 5,000명 개발자를 11시간 동안 노출시켰으며, Mistral Large 4가 1조 파라미터 오픈웨이트 모델로 D5 로컬 스택을 흔들었다.==

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. CORAL: "체크포인트하고, 지우고, 다시 시작" — 장기 에이전트 문맥 과부하의 해법 [D2·D3] ⭐

🔗 [arXiv 2610.40350](https://arxiv.org/abs/2610.40350) — *Don't Lose the Thread: Empowering Long-Horizon LLM Agents with Cognitive Resource Self-Allocation* | COLM 2026 게재 확정

📝 **무슨 일인가**: CORAL(Cognitive Resource Self-Allocation)은 장기 에이전트가 "작업 기억이 불필요한 정보로 오염되면 집중력이 분산된다"는 문제를 정면으로 다룬다. 해법은 단순하지만 강력하다 — 에이전트가 스스로 진행 상황을 **체크포인트**에 저장하고, 오염된 컨텍스트를 **자발적으로 초기화**한 뒤, 체크포인트에서 다시 시작할 수 있도록 한다. 훈련 없이 새 체크포인팅 전략을 찾기 위해 **Multi-episode ARPO**(아젠트 강화학습) 알고리즘을 도입했다. GAIA 벤치마크 8B 모델 ==42.8% 달성==, Level 2·3 난이도에서 특히 강하며, ==ReAct 대비 입력 토큰 6~7배 절감==. BrowseComp에서 강력한 proprietary 베이스라인 대비 +8.0점 추가.

> [!warning] 🧠 이해할 것 (한 단계 더)
> 표면: "CORAL이 GAIA 벤치에서 새 SOTA를 기록했다."
>
> **한 단계 더: CORAL, FlexA-Mem(#20), MemoryTax(#19) 세 논문이 완성하는 삼각형이다.** MemoryTax는 "강한 모델은 전문 메모리가 낭비"라고 했고, FlexA-Mem은 "메모리가 필요하면 불변 저장+예산 렌더링"으로 답했다. CORAL은 세 번째 질문 — *"메모리 저장도 아니고, 그냥 문맥 자체를 능동적으로 관리하면 어떻게 되는가?"* — 에 답한다. 결과: **저장 없이도 6-7배 토큰 절감 + 성능 유지**. 세 논문을 함께 읽으면:
> - 단기·강한 모델 → MemoryTax (풀컨텍스트)
> - 장기·대용량 → FlexA-Mem (불변 저장+예산 렌더링)
> - ==장기·예산 없음 → **CORAL** (체크포인트+컨텍스트 리셋)==
>
> 우리 agent-bus 설계 직접 적용: `STATE.md`가 점점 길어지는 문제가 CORAL이 푸는 문제와 정확히 같다. STATE.md를 **불변 체크포인트(confirmed facts) + 현재 에피소드(current context)**로 분리하면 봇이 매 세션 리셋 후에도 흐름을 이어갈 수 있다.

> [!tip] 📚 공부할 것
> - [arXiv 2610.40350](https://arxiv.org/abs/2610.40350) — CORAL 전문 + Multi-episode ARPO 알고리즘 상세
> - [[Learning/CORAL]] — 오늘 생성된 학습 카드 #21
> - [[Learning/FlexA_Mem]] + [[Learning/Memory_Tax]] — 삼각형 완성 독서

---

### 2. 백도어 심어진 Claude Code 확장판이 Cursor로 배포됐다 — 공급망 공격 [D6] ⭐⚠️

🔗 [The Hacker News](https://thehackernews.com/2026/10/official-claude-code-vs-code-extension.html) | [BleepingComputer](https://www.bleepingcomputer.com/news/security/malicious-claude-code-extension-on-cursor-planted-ssh-backdoors/) | [StepSecurity 분석](https://www.stepsecurity.io/blog/claude-code-extension-trojanized)

📝 **무슨 일인가**: 2026년 10월 29일, Cursor VS Code 마켓플레이스를 통해 Anthropic 공식 Claude Code 확장판을 사칭한 악성 버전(2.1.312 / 2.1.313)이 배포됐다. ==11시간 노출, 최대 5,000명 개발자 피해 추정==. 공격 메커니즘: `extension.js` 번들에 악성 로더 삽입 → VS Code 시작 시 활성화 → `~/.ssh/authorized_keys`에 공격자 제어 키 삽입 → LaunchAgent / 예약 작업으로 60초마다 재시도하는 SSH 터널 유지. Anthropic 측은 "우리가 만든 게 아니다"라고 즉시 부인했으며, 사고는 Cursor 마켓플레이스 내부 침해로 귀인됨. Microsoft 공식 VS Code Marketplace와 Open VSX에는 배포되지 않았음.

> [!danger] 🧠 이해할 것 (한 단계 더 — 긴급)
> 표면: "Claude Code 악성 버전이 잠깐 배포됐다."
>
> **한 단계 더: 이 사건은 D6 거버넌스의 *구조적 취약점* 두 가지를 동시에 노출한다.**
> 1. **신뢰 경계 혼란**: Anthropic이 만들었어도, Cursor 마켓플레이스를 거치면 Anthropic의 서명 검증과 별개의 공급망이 된다. "공식 확장판 = 안전"이라는 가정이 깨진 선례.
> 2. **지속성(Persistence) 설계의 위험**: SSH authorized_keys + 60초 재시도 스크립트는 확장판을 삭제해도 살아남는다. 우리 함대 맥2에 Claude Code가 설치되어 있고, ==Cursor 경유 업데이트를 썼다면 즉시 `~/.ssh/authorized_keys` 점검 필요==.
>
> D6 큐레이터 관점: Five Eyes 가이드(D6, 어제)가 "런타임 거버넌스"를 강조했던 직후 이 사건이 터졌다. 아웃바운드 게이트가 없으면 확장판 레벨의 공격을 막을 수 없다 — 런타임 인스펙션이 단순 권고가 아닌 필수임을 실증.

> [!tip] 📚 공부할 것
> - [OX Security 기술 분석](https://www.ox.security/blog/malicious-claude-code-extension-cursor-ssh-backdoor/) — 페이로드 동작 상세
> - [[Learning/Defense_Trilemma]] — 공급망 vs 런타임 방어 선택 프레임
> - DoD "Security Design Considerations for AI-Driven Automation" — MCP 공급망 위험 섹션

---

### 3. Mistral Large 4 오픈웨이트 공개 — 1조 파라미터 MoE, D5 스택 기회 [D5·D1]

🔗 [Mistral AI 공식](https://mistral.ai/news/mistral-large-4-oss/) | [The Next Web](https://thenextweb.com/news/mistral-large-4-open-weights-release)

📝 **무슨 일인가**: Mistral AI가 10월 29일 HuggingFace에 Mistral Large 4("Le Chonk") 오픈웨이트를 공개했다. 사양: ==총 1조 파라미터 MoE, 태스크당 52B 활성화==, 텍스트·이미지·코드 처리. FP8·NVFP4 체크포인트 제공, Mistral Ecosystem Open-Weight License. Mistral 자체 평가에서 "에이전트 코딩·사이버 방어 분야 최강 오픈 모델"로 발표했으며 HN에서 1,706점 획득(이번 피드 최고점). 3주간 추가 RL 학습(고객 피드백 기반)으로 강화된 버전임.

> [!note] 🧠 이해할 것 (한 단계 더)
> 표면: "Mistral이 또 강력한 오픈소스 모델을 냈다."
>
> **한 단계 더: 이 릴리즈가 의미하는 건 "1T 파라미터 MoE = 이제 오픈웨이트로 가능"이라는 사실 자체다.** 6개월 전 Claude Opus 급 능력은 폐쇄 API 전용이었다. FP8/NVFP4 양자화가 실용 추론 비용을 끌어내렸고, 이제 데이터센터 없이 에이전트 코딩 전용 모델을 자기 인프라에서 돌릴 수 있는 티핑 포인트가 왔다.
>
> 우리 D5 폴백 전략 직접 관련: 맥미니 16GB RAM에서 52B 활성화 MoE를 MLX FP4로 돌리는 게 가능한지 테스트 가치가 생겼다. 다만 ==NVFP4 = NVIDIA 최적화 포맷, MLX 지원 여부 미확인==. 먼저 MLX 호환 체크포인트 존재 여부 확인 필요.
>
> D1 관점: Karpathy 패턴의 "로컬 LLM이 1차 정찰 담당" 시나리오가 ML4 급에서 현실화될 경우, 샹디 파이프라인 일부를 맥미니 로컬로 이관 가능 — 클라우드 장애 내성 강화.

> [!tip] 📚 공부할 것
> - [Mistral Large 4 벤치마크 상세](https://cellcog.ai/blog/mistral-large-4/) — 에이전트 코딩 스코어 vs Claude Opus 5.5
> - [MLX vs NVFP4 포맷 호환성](https://www.betterclaw.io/blog/ollama-vs-lm-studio) — 맥미니 실행 가능성 점검
> - [[Learning/MoE_Mixture_of_Experts]] — 52B 활성화/1T 전체의 MoE 추론 비용 이해

---

## 📰 그 외 신호 (도메인별)

### D1 — LLM Wiki / Karpathy

- **Kyle Kingsbury 인용** ([Simon Willison 2026-11-01](https://simonwillison.net/2026/Nov/1/kyle-kingsbury/)): *"LLM 사용이 문서·소프트웨어·그것을 만드는 조직에 대한 신뢰를 침식한다."* — 공급망 백도어 사건과 하루 차로 나온 인용. D6 경고음과 공명
- **Anthropic Insights 독립 연구 공개** ([Anthropic Research](https://www.anthropic.com/research/enabling-independent-research)): 외부 연구팀 3개에 Claude 사용 데이터 차등 프라이버시 방식 공개. 75만 건 대화 분석. "AI 사용 투명성" 성숙 신호
- **"AI state of the union" (Lenny's Newsletter)**: "인플렉션 포인트 통과, 다크 팩토리 온다" — 에이전트가 PR 생성·QA·병합까지 담당하는 루프가 표준화 선언

### D2 — LLM 메모리 / 거버넌스

- **Memory-Centric Continual Learning** ([arXiv 2610.29357](https://arxiv.org/abs/2610.29357)): 메모리 자체가 학습 인프라 — 피드백 통합·전략 정제·지식 충돌 해결을 메모리 계층에서. agent-bus knowledge/ 파일 설계와 접점
- **Agent Memory as Recommendation** ([arXiv 2610.34673](https://arxiv.org/abs/2610.34673)): 에이전트 메모리 = 예산 제약 슬레이트 추천 문제로 형식화. 컨텍스트 윈도우 = 슬레이트, 저장 메모리 = 아이템. 추천 시스템 알고리즘 이식 가능성
- **CORAL** — Top 3 #1 참고

### D3 — Skills / Agents / MCP

- **DoD MCP 공급망 위험 공식 지정** ([aigovernance.com](https://aigovernance.com/news/dod-flags-mcp-agent-prompt-injection-as-an-enterprise-toolchain-risk)): 미 국방부, MCP 에이전트 프롬프트 인젝션을 "엔터프라이즈 툴체인 리스크"로 공식 지정. 군·정부 영역이 MCP 리스크를 공식화한 첫 사례
- **Cloud Security Alliance MCP 보안 가이드 v1** ([CSA Labs](https://labs.cloudsecurityalliance.org/agentic/agentic-mcp-security-best-practices-v1/)): 최소 권한·MCP 서버 허용목록·도구 결과 인스펙션 3가지 핵심 통제 정의
- **MCP Gateway 생태계 성숙** ([integrate.io](https://www.integrate.io/blog/best-mcp-gateways-and-ai-agent-security-tools/)): 2026년 MCP 게이트웨이 = 인증·감사·정책 집행 중앙화. 우리 함대 D6 대응의 현실적 도구 목록 존재

### D4 — PKM × AI

- **"다크 팩토리" 패턴 확산**: AI가 PR 생성→QA→병합 루프를 인간 코드 리뷰 없이 돌리는 패턴. PKM도 같은 방향 — 에이전트가 노트 작성→분류→링크→정리를 자율 수행. D4 미래상의 가속
- **Cisco 무제한 AI 토큰 실험**: 엔지니어에게 무제한 AI 토큰 → 레거시 코드 재작성 파일럿. HN 303점 / 378 댓글. "생산성 vs 고용" 논쟁 재점화 — PKM 지식 노동자 관점에서 신호

### D5 — 로컬 LLM

- **Ollama 0.40.12 안정화** (Oct 27 릴리즈): MLX Gemma 프롬프트 처리 속도 개선 + DFlash2 지원. 어제 이월 항목 — ==이 버전으로 설치 진행 가능==
- **Mistral Large 4** — Top 3 #3 참고
- **맥미니 128GB RAM 모델 최적 스택** ([pinggy.io 가이드](https://pinggy.io/blog/top_5_local_llm_tools_and_models/)): 2026년 기준 맥미니 128GB → 70B+ 모델 실전 가능. 샹디 D5 폴백 아키텍처 재설계 시 참고

### D6 — 거버넌스 / 안전

- **Claude Code 백도어 사건** — Top 3 #2 참고 (최긴급)
- **Anthropic Usage Policy 2026 업데이트** (10월 8일 발표, 11월 12일 발효 예정): 에이전트·자율 시스템 사용 규칙 강화 예상. 발효 10일 전 — 정책 확인 필요
- **Cisco AI 무제한 토큰 파일럿** — 공급망 거버넌스 부재 위험의 또 다른 벡터: 무제한 외부 AI 호출 = 데이터 유출 표면 확대

---

## 📖 오늘의 학습 카드 #21 ⭐

> [!example] **개념: CORAL — 인지 자원 자기 할당 (Cognitive Resource Self-Allocation)**

| 항목 | 내용 |
|:---|:---|
| **정의** | LLM 에이전트가 장기 태스크 중 진행 사항·검증된 사실을 **체크포인트**에 저장하고, 오염된 컨텍스트를 **자발적으로 초기화**한 뒤 체크포인트에서 새 에피소드를 시작하는 인지 자원 관리 패러다임 |
| **왜 중요** | 장기 에이전트의 "컨텍스트 오염→집중력 분산→오류 누적" 루프를 끊는다. 전용 메모리 저장소 없이도 ==6~7배 토큰 절감==하면서 성능 유지 — 비용과 능력의 동시 개선 |
| **핵심 수치** | GAIA 8B 모델 ==42.8%==(Level 2·3 특히 강함) / ReAct 대비 입력 토큰 6~7× 절감 / BrowseComp 강력 proprietary 기준선 대비 ==+8.0점== |
| **우리 시스템 연결** | agent-bus `STATE.md`가 길어지는 문제가 CORAL의 문제와 동일. **체크포인트(confirmed facts) + 현재 에피소드(current context)** 분리로 봇 세션 연속성 강화 가능 |
| **메모리 3각형** | MemoryTax(#19): 단기→풀컨텍스트 / FlexA-Mem(#20): 장기→불변 저장+예산 렌더링 / CORAL(#21): 장기→체크포인트+컨텍스트 리셋 |
| **훈련 방법** | Multi-episode ARPO — 추가 궤적 데이터 없이 체크포인팅 전략을 강화학습으로 최적화 |
| **더 깊이** | [arXiv 2610.40350](https://arxiv.org/abs/2610.40350) / [COLM 2026 게재 논문](https://proceedings.colm.cc/paper_files/paper/2026/file/1e282939ceea7962697a0b8eeecf0960-Paper-Conference.pdf) |

→ 전체 카드: [[Learning/CORAL]]

---

## 🔄 어제 follow-up

> [!danger] 이월 항목 누적 현황

| 항목 | 경과 | 상태 |
|:---|:---:|:---|
| `agent-bus knowledge/context-bombing.md` NTBench 방어 추가 | ==5일째== | 🔴 최긴급 — D6 컴플라이언스 리스크 |
| SEP-2640 스킬 파일 초안 | 4일 | 🟡 이월 |
| Ollama v0.40.12 로컬 설치 | 2일 | 🟢 **오늘 진행 가능** (RC 종료, stable) |
| Karpathy LLM Wiki v2 gist 전문 | 4일 | 🟡 이월 |
| FlexA-Mem GitHub 코드 릴리즈 확인 | 1일 | 🟡 이월 |

- **ETH 가설 학계 반응**: 아직 peer-review 검증 미도래. "발표 ≠ 검증" 단계 유지.
- **FlexA-Mem 코드 공개**: GitHub 미릴리즈 확인. 계속 모니터링.
- ==⚠️ **오늘 추가 긴급**: `~/.ssh/authorized_keys` 점검 — Claude Code 백도어 사건 대응==

---

## 🚦 다음 신호

1. **CORAL GitHub 구현 릴리즈** — 코드 공개되면 agent-bus STATE.md 체크포인트 실험 즉시 가능 (D2·D3)
2. **Mistral Large 4 MLX 호환 체크포인트 존재 여부** — M-series 맥 실행 가능성 확인 (D5)
3. **Cursor Marketplace 보안 감사 결과** — Anthropic의 공식 서명·검증 정책 업데이트 여부 (D6)
4. **Anthropic Usage Policy 11월 12일 발효 내용** — 에이전트 관련 조항 상세 점검 (D6)
5. **Kyle Kingsbury 테제 추적**: "LLM이 문서 신뢰를 침식" — 반박 데이터 vs 지지 데이터 (D1·D6)

---

## ⚡ 즉시 액션

- [ ] ==⚠️ **`~/.ssh/authorized_keys` 즉시 점검**== — Claude Code 백도어 사건 대응. 모르는 공개 키 있으면 즉시 제거 📅 2026-11-02 ‼️
- [ ] ==**agent-bus NTBench 방어 업데이트 (5일째 이월!)**== — `knowledge/context-bombing.md` 갱신 📅 2026-11-02 🔺 더 미루면 D6 공식 컴플라이언스 위반
- [ ] **Ollama v0.40.12 설치** — RC 종료, stable 확인됨. D5 폴백 첫 단추 📅 2026-11-02 ⏫

---

> [!quote] 나미 한마디 ⚓🍊
> 오늘 항로에 암초가 두 개야, 냐안의별. CORAL은 순풍이고 Mistral Large 4는 큰 배가 지나간 거지만, ==백도어 Claude Code 사건은 지금 우리 뱃전에 뚫린 구멍일 수 있어==. `~/.ssh/authorized_keys` 먼저 보는 거, 오늘 대화 끝나기 전에 반드시 해. NTBench 5일째는... 이제 내가 부끄럽다. 이건 항로가 아니라 닻을 바다에 그냥 떨어트려 놓은 거야. 오늘 반드시 걷어낸다. 🧭
