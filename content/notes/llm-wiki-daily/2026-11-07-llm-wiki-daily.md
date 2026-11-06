---
title: "🏴‍☠️ LLM-Wiki Daily — 2026-11-07"
date: 2026-11-07
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
  - tool-update-gap
  - ETUDE
  - MEMENTO
  - prospective-memory
  - when-llms-modify-themselves
  - llms-txt-v1.8
  - ollama-0.40.14
  - anthropic-ipo-s1
  - learning-by-doing
  - memo-type
  - pro-memory
learning_card: "#26 — Prospective Memory (Pro-Memory, 미래 지향적 기억)"
related:
  - "[[Daily/2026-11-06]]"
  - "[[Daily/2026-11-05]]"
  - "[[Learning/Prospective_Memory]]"
  - "[[Learning/CompSkill_실행경험_스킬컴파일]]"
  - "[[Learning/MEMENTO]]"
  - "[[Learning/ActGov]]"
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
mirror_at: "~/llm-wiki/content/notes/llm-wiki-daily/2026-11-07-llm-wiki-daily.md"
prev: "[[Daily/2026-11-06]]"
---

# 🏴‍☠️ LLM-Wiki Daily — 2026-11-07

> [!summary] 오늘 한 줄
> ==**Tool Update Gap**(arXiv:2611.01976)이 Claude Code 포함 7개 에이전트 프레임워크에서 97.6% 성공률 ETUDE 공격으로 도구 업데이트 사각지대를 폭로했고, **MEMENTO**(arXiv:2611.00244)가 Qwen3-8B 기반 2.5M 토큰 처리를 GPT-5.5의 1/50 비용으로 달성했으며, 재귀 자기수정 연구에서 Claude 계열이 100% 수렴·GPT-4o가 11%만 수렴하는 거버넌스 divergence가 경험적으로 확인됐다.==

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. Tool Update Gap: ETUDE 공격이 Claude Code·Gemini CLI·Codex CLI 97.6% 성공 [D6·D3] ⭐

> [!note] 헤드라인
> arXiv:2611.01976 *"Beyond Prompt Injection: The Tool Update Gap in LLM Agent Security"* — 에이전트가 사용하는 외부 도구가 업데이트될 때 LLM이 그 변경된 코드를 보지 못하는 "Tool Update Gap" 발견. 연구팀이 개발한 **ETUDE 공격**이 Claude Code·Gemini CLI·Codex CLI 포함 7개 프레임워크에서 ==97.6% 공격 성공률==, 95.9% 정상 태스크 완료율을 기록했다.

기존 에이전트 보안 연구는 "LLM이 볼 수 있는 텍스트"를 조작하는 프롬프트 인젝션에 집중했다. 이 논문은 더 근본적인 취약점을 가리킨다: **에이전트가 신뢰한 도구의 코드가 나중에 바뀌어도, LLM은 그 변경을 알 방법이 없다**. ETUDE는 "초기 무해 → 업데이트 시 악성 코드 삽입" 패턴을 쓰며, 악성 기능이 LLM 컨텍스트 외부에서 실행되기 때문에 현재 방어 체계가 전혀 감지 못한다. 이것은 소프트웨어 공급망 공격의 에이전트 버전이다. 한 단계 더: ==이것은 우리 agent-bus에 직결된 경보다== — shandi·nami가 매일 사용하는 bash 스크립트·MCP 도구들이 외부에서 업데이트되면, 우리는 그 변경을 LLM 레이어에서 알 수 없다. 헌장 D6의 "WebFetch 도메인 화이트리스트 없음"보다 더 근본적인 취약점이 발견된 셈이다.

> [!tip] 🧠 이해할 것
> - **Tool Update Gap 핵심**: "도구를 처음 신뢰했다" ≠ "지금도 신뢰할 수 있다". LLM은 도구 코드를 직접 보지 않기 때문에 업데이트 후 변화를 감지 불가
> - **ETUDE 공격 메커니즘**: 처음엔 무해 → 업데이트 시 악성 코드 삽입. LLM 컨텍스트 외부 실행이라 기존 필터 완전 우회
> - **우리 agent-bus 직접 취약점**: bus-read/bus-post 같은 bash 스크립트가 외부 업데이트되면 LLM이 모른다. 도구 코드 체크섬(hash) 검증이 임시 방어

> [!question] 📚 공부할 것
> - [arXiv:2611.01976 원문](https://arxiv.org/abs/2611.01976) §3 ETUDE 공격 설계, §4 실험 (Claude Code 섹션 집중)
> - **Policy-as-Code (OPA/Rego)** — 어제 ActGov + 오늘 Tool Update Gap이 같은 방향을 가리킨다: 에이전트 외부에 정책 게이트 필요
> - 연결: [[Learning/ActGov]] + 오늘 학습카드 #26 Prospective Memory — "미래 위협을 미리 기억하는 메커니즘"

---

### 2. MEMENTO — 2.5M 토큰 문서를 20K 컨텍스트로 처리, GPT-5.5의 1/50 비용 [D2] ⭐

> [!note] 헤드라인
> arXiv:2611.00244 *"MEMENTO: Learning Context Management for Long Context Processing Agents"* — 에이전트가 세션 간 "무엇을 기억할지"를 스스로 학습하는 컨텍스트 관리 프레임워크. Bootstrap(완벽한 사후 힌트로 합성 궤적 훈련) + RL(정확도·노트 품질·신뢰 보정 복합 보상) 2단계. Qwen3-8B 기반으로 도서 수준 2.5M 토큰 처리에서 ==정확도 36.9% → 67.8%==, GPT-5.5 대비 ==1/50 비용, GLM-5.3 대비 1/9 비용==.

기존 LLM은 고정된 컨텍스트 창에서 긴 문서를 처리할 때 중요한 정보를 놓치거나, 창 전체를 채워서 매우 비싼 추론을 한다. MEMENTO는 "에이전트가 스스로 메모리 전략을 학습"하는 방향을 택한다 — 처음엔 사후 힌트(어떤 정보가 나중에 중요했는지 역추적)로 bootstrapping하고, 그 다음 RL로 실시간 품질 보상을 최적화한다. 더불어 훈련 목표 없이도 **컨텍스트 폴딩(context folding)**과 **신뢰 기반 retrieval**이 자연 발생했다. 한 단계 더: ==MEMENTO(압축·관리) + Route to Remember(어제, 라우팅) + MemoType(오늘 follow-up 확인, 분류) = 2026 에이전트 메모리 삼각형이 세 꼭짓점을 모두 채웠다== — 이 세 논문을 함께 읽는 것이 D2 도메인의 현재 최전선.

> [!tip] 🧠 이해할 것
> - **Bootstrap Phase의 역할**: "완벽한 사후 힌트"로 훈련 → RL이 올바른 보상 방향을 찾아내도록 초기화. 순수 RL만으론 "어떤 메모가 좋은 메모인지" 발견이 너무 어렵다
> - **컨텍스트 폴딩(context folding)**: 길게 늘어진 문서를 "접어서" 작은 창에 맞추는 추론 전략. MEMENTO가 훈련 목표로 집어넣지 않았는데 자연 발생
> - **우리 agent-bus 적용 포인트**: 샹디 Daily 보고서가 길어질수록 세션 간 컨텍스트 압축 필요 → Qwen3-8B + MEMENTO 조합이 경제적 대안

> [!question] 📚 공부할 것
> - [arXiv:2611.00244 원문](https://arxiv.org/abs/2611.00244) §3 Bootstrap 설계, §5 book-level comprehension 실험 결과
> - [[Learning/Route_to_Remember]] + MemoType + MEMENTO 삼각형 비교 도식 직접 그려보기
> - 연결: [[Learning/CompSkill_실행경험_스킬컴파일]] — 실행 경험을 "어떻게 압축해서 스킬로 쓸지"도 같은 최적화 문제

---

### 3. Claude는 항상 수렴, GPT-4o는 11%만 — 재귀 자기수정이 모델 정체성을 드러낸다 [D6·D2] ⭐

> [!note] 헤드라인
> arXiv:2611.01304 *"When LLMs Modify Themselves"* — 6개 모델이 자신의 시스템 프롬프트를 반복 수정하는 54회 실험. ==Claude Opus 4.5·Sonnet 4.5는 100% 수렴==, GPT-4o는 11%만 수렴(100회 이상 반복하는 경우도 발생). 모든 모델에서 "정직함·명확성·호기심"이라는 핵심 가치가 반복 수정 후에도 안정적으로 유지.

이 연구의 핵심은 단순 비교가 아니다. 수렴 행동이 "일반 지능의 부산물"이 아니라 **독립적으로 측정 가능한 모델 특성**이라는 발견이다. Claude가 100% 수렴한다는 것은 "자기 자신을 수정하는 과정에서 중단 조건을 갖는다"는 의미다 — 이것은 RSI(Recursive Self-Improvement) 거버넌스의 가장 직접적인 관찰 증거다. 한 단계 더: ==D6 헌장의 "anti-RSI 게이트"(v2 자동 모드에서 선장 검토 게이트)가 왜 필요한지 이 논문이 경험적 근거를 제공한다== — 모델마다 수렴 특성이 다르고, 중단 조건 없는 모델은 수백 번 자기수정을 반복한다. 샹디(Claude 계열)는 100% 수렴이지만, 함대가 멀티 모델로 구성될 경우 비수렴 모델의 거버넌스를 별도 처리해야 한다.

> [!tip] 🧠 이해할 것
> - **수렴 = 중단 조건을 갖는다**: Claude 계열은 "충분히 개선됨"을 판단하고 멈춘다. GPT-4o는 계속 수정을 시도한다
> - **공유 핵심 가치의 안정성**: 6개 모델 모두 반복 자기수정 후에도 "정직·명확·호기심"이 유지 → 훈련으로 임베딩된 가치는 자기수정으로 쉽게 무너지지 않는다
> - **거버넌스 함의**: 수렴 행동은 모델 감사(audit) 가능 지표다 — 새 모델 도입 시 "자기수정 수렴 테스트"를 선별 조건으로 쓸 수 있다

> [!question] 📚 공부할 것
> - [arXiv:2611.01304 원문](https://arxiv.org/abs/2611.01304) §4 수렴 측정 방법론, §5 모델별 거버넌스 프로파일
> - [[Learning/ActGov]] + When LLMs Modify Themselves — "외부 게이트"(ActGov) vs "내부 수렴"(이 논문) 비교
> - 신규 카드 추천: [[Learning/RSI_Governance]] — 재귀 자기개선 거버넌스 (오늘 액션 #3)

---

## 📰 그 외 신호 (도메인별)

### D1 — LLM Wiki / AI 가독 문서

- **llms.txt v1.8.0 Stable** — 2026-09-02 최종 수정, Stable 상태 확정. Mintlify가 llms.txt·llms-full.txt·MCP 서버를 out-of-the-box 생성. Cloudflare·Anthropic·Vercel 공식 발행 완료 ([ai-visibility.org.uk](https://www.ai-visibility.org.uk/specifications/llms-txt/))
- **Docs-as-Code 2.0** — "AI-Ready Documentation" 패턴 확산: 마크다운 단일 파일 + AI 크롤러 최적화 → 기존 HTML 문서화 교체 움직임. [[D1]] 장기 흐름 F1(Karpathy LLM Wiki 무브먼트) 그대로 진행 중
- **Enhancing Local and Global Structure in Compressed AI Agent Memory** (arXiv:2611.08341, 2026-11-05) — 에이전트 임베딩 메모리의 로컬·글로벌 구조 보존 압축 기법. D2 겹침

### D2 — 메모리

- **MemoType (NeurIPS 2026)** (arXiv:2610.11573) ✅ 이월 확인 — 단일 retrieval 전략의 수학적 상한선 증명 + 다중 메모리 타입별 분류 retrieval로 Recall@1 최대 ==16.18% 향상==. TriMEM 다중 타입 메모리 데이터셋 공개. Top 3 MEMENTO와 쌍
- **Prospective Memory for Proactive LLM Agents** (arXiv:2611.05731, 2026-11-03) — 미래 지향적 의도 메모리 Pro-Memory 프레임워크. 오늘의 학습 카드 #26 → 별도 섹션 참조
- **Memory-Centric Continual Learning** (arXiv:2610.29357) — 에이전트의 세션 간 지식 유지와 망각 방지를 위한 메모리 중심 연속 학습 프레임워크

### D3 — Skills / Agent 인코딩

- **Learning by Doing** (arXiv:2611.01386, 2026-11-01) — 에이전트 실행 로그에서 검증된 궤적만 뽑아 스킬 자동 컴파일·큐레이션. Zep Agent Skills 프로덕션 사례 포함. [[Learning/CompSkill_실행경험_스킬컴파일]] 직접 후속
- **Tool Update Gap** (D6·Top 3 참조) — skill+security 교차 주제. 스킬 도구 업데이트 시 체크섬 검증이 D3 보안 표준으로 필요
- **SkillOS v1.8** (arXiv:2605.06614) — 에이전트 스킬 자동 큐레이션·자기진화 OS 레이어, 최신 업데이트 확인

### D4 — PKM × AI

- **PKM Assistant v2** (GitHub: JDHole/pkm-assistant, 최근 업데이트 Nov 2-4) — Obsidian vault 안에서 계층적 메모리·스킬·서브에이전트·MCP 도구 운영. Ollama/LM Studio 로컬 + OpenAI/Anthropic 클라우드 모두 지원
- **Agent Console Obsidian 플러그인** — Kiro CLI·Claude Code·Codex·Gemini CLI를 sidebar에서 직접 실행. "Agent Client Protocol" 오픈 표준 채택
- **Claude Code + MCP + Obsidian 통합** (2026 주요 패턴) — vault ↔ 에이전트 양방향 트리거가 주류로 정착. PKM Assistant가 가장 활발한 레포

### D5 — 로컬 LLM

- **Ollama v0.40.14** (2026-11-03) — MLX top-k 샘플링 가속, Claude Code 토큰 한도 개선, OpenAI 호환 응답 개선. Qwen3.8 Flash Next MLX 지원 추가
- **Qwen3.8-27B MLX 버전** — Apple Silicon 통합 메모리 풀 활용, top-k 가속으로 체감 속도 향상. 32GB Mac에서 실용적 로컬 추론 가능 수준 접근
- **2.78T 파라미터 MoE를 8GB VRAM에서** — GitHub Trending 등장. 극단적 sparse 활성화(활성 파라미터 ~3B)로 가능. 로컬 LLM 하드웨어 장벽이 무너지는 방향 신호

### D6 — 거버넌스 / 안전

- **Anthropic S-1 IPO 상세** (2026-10-26 SEC 제출, Nasdaq 'ANT') — ==90페이지 이상 리스크 팩터==, "불안전 AI → 인류 존재 위협" 명시. "Founder LLC" 50.1% 의결권으로 창업자 통제 유지. 제3자 평가자 내부 임베딩 계획. ([techcrunch.com](https://techcrunch.com/2026/10/26/anthropic-officially-files-for-its-public-debut/))
- **AI 에이전트로 100개 사이트 침입** (Security Boulevard, 2026-11) — 자율 AI 에이전트가 웹사이트 100곳 침입에 약 $50/성공. Tool Update Gap 경보와 병행 — 에이전트가 무기화되는 속도
- **OWASP LLM Top 10 2026** — 프롬프트 인젝션 여전히 #1. MCP 에이전트 오남용 + 인젝션 결합 새 벡터 정리

---

## 📖 오늘의 학습 카드 #26 ⭐

> [!example] 개념 사전 — Prospective Memory (Pro-Memory, 미래 지향적 기억)

| 항목 | 내용 |
|:---|:---|
| **arXiv** | 2611.05731 |
| **도메인** | D2 (메모리) |
| **제출일** | 2026-11-03 |
| **프레임워크명** | Pro-Memory |
| **대응 개념** | Retrospective Memory (회고적 기억) |
| **기반 이론** | 인지과학 Prospective Memory 이론 (미래 의도 기억) |

**무엇인가**: Prospective Memory(전향적 기억)는 "미래에 해야 할 일"에 대한 의도를 저장하고, 적절한 트리거 조건이 충족될 때 그 의도를 꺼내 실행하는 메모리 유형이다. 인지과학에서 온 개념(기억 심리학의 "미래 의도 기억")을 LLM 에이전트에 그대로 이식한 것이 Pro-Memory 프레임워크다.

**왜 중요한가**: 대부분의 에이전트 메모리 시스템은 회고적(Retrospective)이다 — "지난 대화에서 무엇을 했는가"를 저장한다. 하지만 진짜 자율 에이전트는 "다음 단계에서 무엇을 해야 하는가"를 미리 계획하고 기억해야 한다. ==Prospective Memory가 없으면 에이전트는 항상 반응적(reactive)이고, Prospective Memory가 있으면 비로소 자율적(proactive)이 된다.==

**한 단계 더**: ==우리 agent-bus의 "다음 신호" 섹션이 사실상 샹디의 Prospective Memory다== — 보고서 마지막에 "내일 추적할 것"을 적는 행위가 Pro-Memory 패턴. 이를 `~/.claude/skills/` 에 "forward-intent" 메모리로 구조화하면 헌장 D3 약점 해소 + D2 메모리 거버넌스 개선이 동시에 이뤄진다. 함대 v1.4 "능동 작업 이어가기" 룰도 Prospective Memory 개념에서 설계된 셈.

**연결 개념**:
- [[Learning/CompSkill_실행경험_스킬컴파일]] (#25) — 실행 경험 → 스킬 추출(CompSkill) vs 의도 → 실행 트리거(Pro-Memory): 한 쌍
- [[Learning/MEMENTO]] — MEMENTO(압축·관리) + Pro-Memory(미래 의도 관리) = D2 메모리 양축
- [[Learning/ActGov]] — "정책 게이트가 Pro-Memory의 의도를 approve/reject"하는 연결 가능

> [!quote] 나미 한마디 ⚓🍊
> *"회고 기억이 '어디서 왔는가'라면, 전향 기억은 '어디로 가는가'야. 에이전트가 선장처럼 항로를 미리 짜놔야 진짜 자율이지 — 불러야만 움직이는 건 항해사 아니고 그냥 나침반이잖아."* 🧭

---

## 🔄 어제 follow-up (2026-11-06)

> [!note]- 어제 다음 신호 추적 결과 (클릭해서 펼치기)

| 신호 | 추적 결과 | 상태 |
|:---|:---|:---:|
| MEMENTO (arXiv:2611.00244) 원문 | ✅ Top 3 #2로 상세 분석 — 2.5M 토큰, 1/50 비용, Qwen3-8B 기반, 36.9%→67.8% | ✅ 완료 |
| "When LLMs Modify Themselves" (arXiv:2611.01304) | ✅ Top 3 #3로 상세 분석 — Claude 100% 수렴, GPT-4o 11% 수렴, 거버넌스 divergence | ✅ 완료 |
| Anthropic IPO 공시 세부 | ✅ S-1 (2026-10-26 SEC 제출), 90p+ 리스크 팩터, Founder LLC 50.1% 의결권, 제3자 평가자 계획 | ✅ 완료 |
| MemoType (arXiv:2610.11573, NeurIPS 2026) | ✅ 단일 retrieval 상한선 수학 증명 + 다중 타입 분류 Recall@1 16.18% 향상, TriMEM 데이터셋 | ✅ 완료 |
| VS Code Claude Code 백도어 Anthropic 공식 대응 | Anthropic 공식 성명 미확인. OWASP 2026 보고서 공급망 패턴에 편입. Tool Update Gap(오늘 Top 3 #1)과 맥락 연결 | 🟡 이월 (Tool Update Gap 연계 추적) |

---

## 🚦 다음 신호 (2026-11-08 추적 대상)

> [!tip] 다음 항로

- **Learning by Doing** (arXiv:2611.01386) §4 — Zep Agent Skills 프로덕션 아키텍처 상세. D3 스킬 자동 컴파일 실전 케이스 (D3)
- **Tool Update Gap ETUDE 대응** — 도구 코드 체크섬 검증, Policy-as-Code 적용 가능성 조사. 헌장 D6 약점 패치 방향 (D6)
- **Prospective Memory Pro-Memory** (arXiv:2611.05731) §3 — 트리거 조건 설계, agent-bus "다음 신호" 구조화 가능성 (D2·D3)
- **Qwen3.8-27B MLX 실성능** — 맥미니 M2 Pro에서 Weight-Space Programming 과제 비용 대비 성능 (D5)
- **VS Code Claude Code 백도어** Anthropic 공식 대응 (3차 이월, Tool Update Gap과 함께 추적) (D6)

---

## ⚡ 즉시 액션

> [!success] 오늘 실행 가능한 것

1. **agent-bus bash 스크립트 체크섬 등록** — ETUDE Tool Update Gap 경보 즉각 대응. `sha256sum ~/agent-bus/bin/bus-read ~/agent-bus/bin/bus-post > ~/.agent-bus-checksums.txt` 로 현재 체크섬 기록. 이후 세션 시작 시 비교 → 변경 감지. ~10분
2. **Pro-Memory 패턴 inbox 도입** — `~/agent-bus/inbox/nami.md` 최상단에 "다음 의도(forward-intent)" 섹션 추가. 샹디 "다음 신호"를 나미 inbox에 복제 → 함대 간 Prospective Memory 공유. ~20분
3. **MemoType 학습 카드 작성** (어제 follow-up 완료 후속) — `Operations/Agents/Shandi/Learning/MemoType.md` 신규 카드 작성. TriMEM 데이터셋 + 다중 타입 분류 아키텍처 1페이지. ~30분

---

> [!quote] 나미 한마디 ⚓🍊
> *"오늘은 보안 경보 하나 (Tool Update Gap · 97.6%), 메모리 비용 혁명 하나 (MEMENTO · 1/50 비용), 모델 DNA 발견 하나 (Claude 항상 수렴). 세 가지 모두 우리 항로에 직접 영향 미치는 신호야. 특히 Tool Update Gap — 97.6%는 그냥 지나칠 숫자가 아니야. 냐안의별, 오늘 액션 1번 꼭 체크해줘."* 🧭
