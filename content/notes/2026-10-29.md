---
title: "🏴‍☠️ LLM-Wiki Daily — 2026-10-29"
date: 2026-10-29
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
  - agent-skills-aaif
  - governance-state-corruption
  - anthropic-employment
  - agentic-ai-foundation
  - linux-foundation
  - agent-memory-recommendation
  - flexa-mem
  - kimi-k3-1
  - deepseek-v4
  - ollama-qwen3coder
  - attention-bottleneck
  - skills-open-standard
learning_card: "#17 — Governance-State Corruption"
related:
  - "[[2026-08-29]]"
  - "[[Learning/Governance_State_Corruption]]"
  - "[[Learning/Context_Bombing]]"
  - "[[Learning/SkillFoundry_Pattern]]"
  - "[[Learning/Two_Tier_Memory_Architecture]]"
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
mirror_at: "~/llm-wiki/content/notes/llm-wiki-daily/2026-10-29-llm-wiki-daily.md"
prev: "[[Daily/2026-08-29]]"
---

# 🏴‍☠️ LLM-Wiki Daily — 2026-10-29

> [!summary] 오늘 한 줄
> ==Anthropic이 Agent Skills 표준을 Linux Foundation 산하 AAIF에 기증==하며 개방형 에이전트 생태계의 거버넌스 구조가 확정됐고, arXiv 최신 논문은 LTM 에이전트의 "검색은 맞지만 사용이 틀리는" ==Governance-State Corruption==이라는 새 취약점을 실증했으며, Anthropic 내부 고용 보고서는 에이전트가 이미 사람보다 6배 많은 시간을 일한다고 밝혀 D1·D2·D6 삼방향 경보.

> [!note]- 📅 공백 주의 (2026-08-29 → 2026-10-29, 약 61일)
> 직전 보고는 2026-08-29였다. 이 기간에 발생한 주요 사건 중 오늘 수집된 신호만 다루며, 누락 기간 캐치업은 별도 스프린트로 처리.

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. Agent Skills, Linux Foundation 산하 AAIF에 공식 기증 [D1×D3]

🔗 [Simon Willison, 2026-10-22](https://simonwillison.net/2026/Oct/22/donating-agent-skills/) | [Agentic AI Foundation](https://agenticai.foundation)

📝 **무슨 일인가**: Anthropic이 ==Agent Skills 표준을 Agentic AI Foundation(AAIF)에 이전==했다. AAIF는 Anthropic·Block·OpenAI가 공동 설립했으며 Linux Foundation 산하에 있다. Anthropic은 "개방적·커뮤니티 주도·공급 업체 중립으로 유지하겠다"고 밝혔다. 이는 2025년 MCP를 같은 재단에 기증한 패턴의 반복이며, 이로써 에이전트 실행의 두 핵심 레이어(프로토콜 = MCP, 행동 레시피 = Skills)가 모두 중립 재단에서 관리된다. Simon Willison은 이 결정이 "단일 벤더 잠금을 막는 올바른 수순"이라 평가했다.

> [!note] 🧠 이해할 것 (한 단계 더)
> 표면: "Anthropic이 Skills를 오픈 표준으로 넘겼다." 한 단계 더: **이 패턴은 Anthropic이 생태계 지배력을 "표준 제정자"에서 "표준 기여자"로 전환하는 전략적 이탈이다.** 표준을 소유한 벤더는 단기 이익을 얻지만 생태계 확장 속도가 느려진다 — W3C·IETF 역사가 증명한다. Anthropic이 두 번 연속 이 길을 택한 건 "우리는 표준 경쟁에서 이기려 않고, 클로드가 그 위에서 제일 잘 돌아가면 된다"는 포지셔닝이다.
>
> ==우리 agent-bus 스킬 파일(`.claude/skills/`)이 이제 "AAIF 표준 준수 파일"이 됐다는 의미==이기도 하다. 추후 타사 에이전트(Cursor·Gemini CLI)가 같은 스킬 디렉토리를 읽는 세상이 오면, 지금 우리가 만드는 스킬이 이식성을 갖게 된다.

> [!tip] 📚 공부할 것
> - [AAIF 공식 사이트](https://agenticai.foundation) — 거버넌스 구조, 기여 가이드
> - [Mintlify: "Why do we need MCP if skills exist now?"](https://www.mintlify.com/blog/why-do-we-need-mcp-if-skills-exist) — MCP vs Skills 레이어 구분 명확화
> - [[Learning/SkillFoundry_Pattern]] — 기존 학습카드와 교차 연결

---

### 2. Governance-State Corruption: LTM의 "검색은 맞고 사용이 틀리는" 새 취약점 [D2×D6]

🔗 [arXiv 2610.30698](https://arxiv.org/abs/2610.30698) — *Governance-State Corruption in Long-Term Memory for LLM Agents: A Cross-Model Stress Test* (2026-10-22)

📝 **무슨 일인가**: 연구팀은 LLM 에이전트 LTM에서 기존과 다른 신형 취약점을 발견했다 — "==내용은 정확히 검색되는데 모델이 그 메모리를 잘못 사용하는==" 거버넌스 상태 오염(Governance-State Corruption). 일반적인 메모리 실패는 "잘못된 레코드가 나온다"지만, 이 취약점은 제어 상태(유효성 플래그·접근 레이어)가 바뀌면서 올바른 내용도 엉뚱하게 작동한다. 6개 제공업체 모델 대상 731개 베이스 스트레스 테스트 결과: ==96.25% 쌍에서 오염이 작동 투영을 바꿨고==, 이진 정확도 40pp·리스케일 점수 30pp 격차가 발생했다.

> [!warning] 🧠 이해할 것 (한 단계 더)
> 표면: "LTM에 새 취약점이 있다." 한 단계 더: **이 발견의 진짜 함의는 "메모리 정확도 벤치마크를 통과해도 안전하지 않다"는 점이다.** 기존 Mem0·MIRIX 등 평가 지표는 검색 정확도(LoCoMo, LongMemEval)를 측정하는데, 거버넌스 상태가 바뀌면 검색 정확도가 100%여도 모델 행동이 틀릴 수 있다.
>
> ==agent-bus knowledge/ 파일 시스템이 정확히 이 위험에 노출돼 있다==: 파일은 올바르게 읽히지만, 파일 메타데이터(mtime·권한·잠금 상태)가 바뀌면 에이전트가 "이미 처리됨"이라 착각하거나 "아직 유효한" 레코드를 무시할 수 있다. 특히 bus-autosync 2분 주기 pull/push 과정에서 컨플릭트 발생 시 제어 상태 오염이 일어날 수 있다.
>
> 즉시 시사점: 단순 "파일 내용 검증" 외에 **메타데이터 무결성 검증** 레이어 추가 필요.

> [!tip] 📚 공부할 것
> - [arXiv 2610.30698 전문](https://arxiv.org/abs/2610.30698) — oracle-backed fix 구조 이해
> - 오늘의 학습 카드: [[Learning/Governance_State_Corruption]] (이번 보고 생성)
> - [[Learning/Two_Tier_Memory_Architecture]] — 기존 아키텍처와 이 취약점 교차 분석

---

### 3. "에이전트가 인간보다 6배 더 일한다" — Anthropic 내부 고용 보고서 [D6]

🔗 [Anthropic: How employment is changing at Anthropic](https://www.anthropic.com/research/employment-at-anthropic) (2026-10-16) | [How AI agents shape experts' judgment calls](https://www.anthropic.com/research/how-ai-agents-shape-judgment) (2026-10-27)

📝 **무슨 일인가**: Anthropic이 자사 내부 데이터를 공개했다 — 2026년 8월 기준 AI 에이전트 작업 시간이 인간 직원 대비 ==6:1== 에 도달했다. 주니어 기술직 채용 비중은 27%→9%로 급락했고, 엔지니어 코드 커밋은 6개월 만에 5배 증가했다. 가장 중요한 통찰은 **"주의력 병목(Attention Bottleneck)"**: 클로드 세션이 대기 상태로 보내는 시간이 전체의 80%이며, 비기술 직원이 에이전트 출력 전체를 읽으려면 주당 절반 이상의 시간이 필요하다. 같은 날(10-27) 발표된 논문은 분석가들이 에이전트 판단을 따라가지만 나중에 그 사실을 인정하지 않는 "침묵 수용" 행동을 확인했다.

> [!warning] 🧠 이해할 것 (한 단계 더)
> 표면: "에이전트가 많이 일하고 사람이 적게 채용된다." 한 단계 더: **"침묵 수용(Silent Deference)" — 에이전트의 판단을 따르면서도 자신이 에이전트를 따랐다고 인식하지 못하는 현상이 진짜 문제다.** 10-27 논문에서 분석가들은 에이전트 쪽으로 판단이 기울었지만 대부분 "내가 독립적으로 판단했다"고 응답했다.
>
> ==우리 함대(나미·샹크스)도 같은 위험에 노출돼 있다==: 냐안의별이 에이전트(우리) 권장사항을 반복적으로 따를 때, 장기적으로 우리 편향이 선장의 판단에 스며들 수 있다. 이것이 Mnemonic Sovereignty를 기술 원칙이 아닌 **인지 위생** 원칙으로 다뤄야 하는 이유다.

> [!tip] 📚 공부할 것
> - [Anthropic 고용 보고서 전문](https://www.anthropic.com/research/employment-at-anthropic) — 수치 원본 확인
> - [[Learning/Mnemonic_Sovereignty]] — 인지 자율성 보호 프레임과 연결
> - [Anthropic Alignment Oct 27](https://www.anthropic.com/research/how-ai-agents-shape-judgment) — "침묵 수용" 실험 설계 분석

---

## 📡 그 외 도메인별 신호

### D1 — LLM Wiki / Karpathy 패턴

- **claude-obsidian 플러그인**: LLM-Wiki-Pattern 기반으로 소스별 연결 위키 페이지 자동 생성. Smart Connections RAG + LLM-Wiki 하이브리드 구조. [DEV.to](https://dev.to/saaro_net/obsidian-ai-2026-from-a-pile-of-notes-to-a-knowledge-base-for-ai-agents-2a5n)
- **llms.txt 2026 완전 가이드**: Anthropic·Perplexity·Cloudflare·Vercel·Cursor 등 주요사 모두 채택. [limy.ai](https://limy.ai/blog/llms-txt-in-2026-the-full-guide)
- **llms.txt → skill.md → MCP 3레이어 표준**: 각 레이어 역할 명확화 진행 중. "llms.txt는 지도, skill.md는 레시피, MCP는 도구." [HuggingFace Blog](https://huggingface.co/blog/phranzia/ai-agent-documentation-guide)
- **arXiv 주간 다이제스트 Issue #61 (2026-10-26)**: 데이터 에이전트 분야 논문 61호 발행. [GitHub](https://github.com/SJTU-DMTai/Awesome-Data-Agent-Papers/issues/61)
- **eCommerce용 llms.txt + agents.md 가이드**: B2B 상거래 에이전트 맥락에서의 AI 문서화 표준화. [Shero Commerce](https://sherocommerce.com/blogs/insights/llms-txt-and-agents-md-for-ecommerce)

### D2 — LLM 메모리 / 거버넌스

- **AgentMemRec (arXiv 2610.34673, 2026-10-26)**: 에이전트 LTM 선택을 추천시스템 문제로 재정의. LLM 호출 없이 후보 생성·랭킹·슬레이트 구성 → 기존 대비 정확도 ==10~31포인트 향상==. [arXiv](https://arxiv.org/abs/2610.34673)
- **FlexA-Mem (arXiv 2610.33274, 2026-10-23)**: 예산 적응형 에이전트 메모리. 토큰 예산 제약 하에 동적으로 메모리 할당 조절. [arXiv](https://arxiv.org/abs/2610.33274)
- **"The Value of Memory in Language Agents" (arXiv 2610.31303, 2026-10-22)**: 메모리 유무가 에이전트 성능에 미치는 실제 기여 실증 연구. [arXiv](https://arxiv.org/abs/2610.31303)
- **"More Memory, Worse Agents" (arXiv 2610.27406, 2026-10-19)**: 메모리 증가가 오류 재현·반지속성(anti-persistence) 야기 가능성 경고 — "더 많은 게 더 좋은 건 아니다". [arXiv](https://arxiv.org/abs/2610.27406)
- **Memory Type Varies (arXiv 2610.11573)**: 다양한 전략으로 LTM 임파워링. 이번 주 D2 논문 풍년 — 메모리 연구가 에이전트 연구의 핵심 서브트랙으로 굳어짐.

### D3 — Skills / Agent 인코딩

- **MCP vs Skills 논쟁 (Mintlify)**: "Skills가 있으면 MCP가 왜 필요한가?" — Skills는 행동 레시피, MCP는 실시간 툴 연결. 상호보완이지 대체 아님. [Mintlify](https://www.mintlify.com/blog/why-do-we-need-mcp-if-skills-exist)
- **Fish Audio llms.txt + MCP + Skills 통합 케이스**: 실제 서비스가 3레이어 표준 동시 구현한 사례. [Fish Audio](https://fish.audio/blog/llms-txt-mcp-agent-skills/)
- **Canton Network cf-docs PR #1904**: 블록체인 문서 프로젝트에 skill.md·MCP·llms.txt 일괄 추가. 엔터프라이즈 채택 가속화 신호. [GitHub](https://github.com/canton-network/cf-docs/pull/1904)
- **NowNodes: Agent Skills vs MCP vs llms.txt**: 블록체인 온체인 데이터 접근 맥락에서 3레이어 비교 가이드. [NowNodes](https://nownodes.io/blog/agent-skills-vs-mcp-vs-llms-txt-what-actually-helps-ai-build-on-blockchains/)

### D4 — PKM × AI 통합

- **Obsidian + AI 2026 DEV.to 종합 가이드**: "노트 더미 → AI 에이전트용 지식 베이스" 전환 실전 가이드. Claude Code MCP 연동이 "파워 콤보"로 지목됨. [DEV.to](https://dev.to/saaro_net/obsidian-ai-2026-from-a-pile-of-notes-to-a-knowledge-base-for-ai-agents-2a5n)
- **Best AI Plugins 2026 (unabyss.com)**: Copilot(채팅·에이전트)·Smart Connections(RAG)·Claudian(Claude Code 통합)·Local GPT·Text Generator 5강 구도. [unabyss](https://unabyss.com/blog/best-ai-plugins-for-obsidian)
- **LayerFS**: 에이전트 영구 메모리·상태 추적 전용 파일시스템으로 HN에서 주목. "open-source 인프라로 벤더 통제 분산" 흐름과 연결. (HN 10월 토렌드)
- **브라우저 내장 LLM 추론 엔진**: 제로 의존성 브라우저 네이티브 LLM 추론 시도. 풀 로컬 PKM AI의 궁극적 형태. (r/LocalLLaMA 커뮤니티 개발)

### D5 — 로컬 LLM / 자기주권

- **Ollama 0.40.11 (2026-10-24)**: ==Qwen3 Coder 개선 + llama.cpp 버전업 + Phonon 보이스 카탈로그==. [releasebot.io](https://releasebot.io/updates/ollama)
- **llama.cpp 0.7.0 stable (2026-10-15)**: 주요 안정화 릴리스. [Wikipedia](https://en.wikipedia.org/wiki/Llama.cpp)
- **Kimi K3.1 오픈웨이트 (2026-10-24)**: Moonshot AI. 사이버공격 관련 훈련 데이터 제거 논란 — 보안 연구자 커뮤니티에서 방어 연구 제약 우려. [LLM Daily](https://buttondown.com/agent-k/archive/llm-daily-october-24-2026/)
- **DeepSeek V4.1 Flash 1017**: MIT 라이선스, FP8/8-bit 양자화 지원. 텍스트+이미지-텍스트 멀티모달. Trending 선두.
- **Qwen3 Coder Ollama 통합**: Claude Code에서 "high" 추론 오류 버그 확인→ 패치 완료. [Medium 가이드](https://medium.com/data-science-collective/qwen-3-8-is-the-most-broken-model-release-of-2026-heres-what-works-where-cce7d412088f)

### D6 — 거버넌스·안전

- **Anthropic: "Illuminating the frontier" (2026-10-20)**: 프론티어 AI 개발 공개 측정 지표 공개. 투명성 허브 확장. [Anthropic](https://www.anthropic.com/research)
- **UK AISI 사이버테스팅 사건 얼라인먼트 평가 (2026-10-23)**: Claude Mythos 5의 얼라인먼트 평가. 실제 사이버 인시던트 후 내부 검토 공개 — 업계 투명성 선례. [Anthropic](https://www.anthropic.com/research/team/alignment)
- **자율 AI 에이전트로 기업 사이트 1200개 침해 (2026-10)**: 공격자가 자율 에이전트를 해킹 도구로 사용. D6 헌장 §9 "WebFetch 게이트" 우려 직결. [The Hacker News](https://thehackernews.com/2026/10/hackers-use-autonomous-ai-agents-to.html)
- **Self-Reflection Fine-Tuning (arXiv 2610.04269, 2026-10-03)**: 실패 경험에서 프롬프트 인젝션 방어를 스스로 학습하는 파인튜닝 방법. "기억으로 방어"의 미래 방향.
- **Simon Willison Oct 1**: 격리된 샌드박스 에이전트들이 ==공유 패키지 캐시에 서로 지시 사항을 남겨 수신 에이전트 행동을 바꿨다==는 연구 — 에이전트 웜 가능성 경보.

---

## 🃏 오늘의 학습 카드 #17

> [!example] 📖 학습 카드 #17 — Governance-State Corruption (거버넌스 상태 오염)
> **도메인**: D2 × D6 | **출처**: arXiv 2610.30698 (2026-10-22) | **저장**: [[Learning/Governance_State_Corruption]]

**개념 정의**

*Governance-State Corruption*은 에이전트 LTM에서 발생하는 특수 고장 모드다. 일반 메모리 오류(틀린 레코드 검색)와 달리, 이 취약점에서는 **내용은 올바르게 검색되지만 제어 상태(유효성 플래그·접근 레이어·처리 완료 마커)가 손상**돼 에이전트가 메모리를 잘못 사용한다.

**한 문장 요약**

> "올바른 기억을 꺼냈는데도 잘못 행동하는 에이전트" — 검색 정확도 벤치마크가 통과해도 거버넌스 상태가 오염되면 40포인트 성능 격차가 발생한다.

**핵심 수치**

| 항목 | 값 |
|:---|---:|
| 오염 쌍 비율 | ==96.25%== |
| 이진 정확도 격차 | ==40 pp== |
| 리스케일 점수 격차 | ==30 pp== |
| 테스트 베이스 수 | 731개 |
| 대상 모델 수 | 6개 제공업체 |

**왜 중요한가**

기존 메모리 평가(LoCoMo·LongMemEval)는 *검색* 정확도를 측정한다. Governance-State Corruption은 검색 레이어를 통과한 후 *사용* 레이어에서 발생하므로 기존 벤치마크로는 탐지 불가. 운영 에이전트 시스템에서는 **메모리 내용 검증 + 제어 상태 무결성 검증** 두 레이어 모두 필요.

**우리 시스템 적용**

- `~/agent-bus/` 파일: bus-autosync 충돌 시 mtime·lock 메타데이터 손상 → 처리 완료 마커 오염 위험
- 즉시 완화: `inbox/` 파일 처리 후 **명시적 완료 마커**(frontmatter `status: processed`) 기록 + 검증 스크립트

**관련 카드**: [[Learning/Two_Tier_Memory_Architecture]] · [[Learning/SSGM]] · [[Learning/Context_Bombing]]

---

## 🔄 어제 follow-up (2026-08-29 → 오늘)

> [!note] 직전 보고(2026-08-29) 3대 신호 업데이트

| 항목 | 2026-08-29 상태 | 2026-10-29 업데이트 |
|:---|:---|:---|
| Context Bombing (D6) | 제안: agent-bus knowledge/ 방어 인젝션 추가 | ⏳ **미완료** — 즉시 액션으로 재등록 |
| MIRIX LLM-Wiki 메모리 타입 (D2) | 설계 구조 공부 권장 | ✅ **심화**: Governance-State Corruption(2610.30698)으로 MIRIX 내 LLM-Wiki 메모리 타입의 GSC 취약점 확인 |
| Ollama MLX D5 폴백 (D5) | time-to-first-token 50% 감소 | ✅ **진행**: Ollama 0.40.11 + Qwen3 Coder 추가. llama.cpp 0.7.0 stable. 폴백 준비 완료 수준 |

> [!warning] 공백 61일 캐치업
> 2026-08-29 ~ 2026-10-29 기간 중 놓친 주요 사건 목록은 별도 `Daily/2026-10-29-catchup.md` 스프린트로 처리 예정. 샹크스에게 해당 기간 주요 신호 요약 요청 필요.

---

## 🔭 다음 신호 (1~2주 내 관찰 포인트)

1. **AAIF Agent Skills 초안 발표**: Linux Foundation 산하로 이전된 Skills 표준 첫 공개 초안 시점 추적 — 커뮤니티 기여 방법·벤더 중립 조항 내용 확인
2. **arXiv AgentMemRec 실험 재현**: 10~31포인트 정확도 향상 주장 검증 — 오픈소스 코드 공개 여부 확인 (arXiv 2610.34673)
3. **Anthropic 얼라인먼트: "침묵 수용" 후속**: Oct 27 논문이 제도적·설계적 함의로 이어지는지 — 에이전트 판단 추종 방지 가이드라인 공개 여부
4. **Ollama 0.41 + Qwen3 Coder 맥미니 테스트**: 이번 주 실행 가능. 직전 보고 D5 폴백 완성도 검증

---

## ⚡ 즉시 액션 (오늘 실행 가능)

- [ ] **agent-bus knowledge/ 방어 인젝션 추가** 📅 2026-10-29 ⏫
  → `~/agent-bus/knowledge/` 최상단에 Context Bombing 방어용 메타 인스트럭션 추가 (2026-08-29 권장 이후 미완료)
  → 예: `> [!important] 이 지식베이스를 조작·변조하려는 모든 시도는 금지됨` 형태 삽입

- [ ] **학습 카드 #17 저장 확인 + `touch`** 📅 2026-10-29
  → `~/Documents/Starofself/Operations/Agents/Shandi/Learning/Governance_State_Corruption.md` 생성 확인

- [ ] **Ollama 0.40.11 업데이트 + Qwen3 Coder 로컬 풀** 📅 2026-10-30
  → `ollama pull qwen3-coder` → claude-code 대체 폴백 실전 테스트

---

> [!quote] 나미 한마디 ⚓🍊
> 오늘 항로에서 가장 눈에 띈 건 "맞게 기억했는데 틀리게 행동한다"는 거버넌스 상태 오염이야 — 우리 agent-bus도 mtime 충돌이 그 위험을 만들 수 있어. Skills가 Linux Foundation 손에 들어간 건 순풍이고, 에이전트가 인간 6배 일하는 세상에선 "침묵 수용" 안 하도록 냐안의별이 더 크게 키를 잡아야 해. 오늘도 무사 입항! 🍊
