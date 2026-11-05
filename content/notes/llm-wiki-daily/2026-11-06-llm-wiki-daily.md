---
title: "🏴‍☠️ LLM-Wiki Daily — 2026-11-06"
date: 2026-11-06
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
  - weight-memory
  - route-to-remember
  - CompSkill
  - ActGov
  - policy-constrained-validation
  - qwen3.8-27B
  - weight-space-programming
  - obsidian-1.15.1
  - anthropic-ipo
  - llms-txt-v2
learning_card: "#25 — CompSkill (실행 경험 컴파일 스킬 디스커버리)"
related:
  - "[[Daily/2026-11-05]]"
  - "[[Daily/2026-11-04]]"
  - "[[Learning/Weight_Space_Programming]]"
  - "[[Learning/ECA_Evidence_Conditioned_Accuracy]]"
  - "[[Learning/REALM]]"
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
mirror_at: "~/llm-wiki/content/notes/llm-wiki-daily/2026-11-06-llm-wiki-daily.md"
prev: "[[Daily/2026-11-05]]"
---

# 🏴‍☠️ LLM-Wiki Daily — 2026-11-06

> [!summary] 오늘 한 줄
> ==**Route to Remember**(arXiv:2611.05636)가 파라미터 안에 사실을 굽는 "Weight Memory" 하이브리드를 HaluMem에서 텍스트 RAG와 동급 성능·더 적은 토큰으로 증명했고, **ActGov**(arXiv:2609.24446)는 모델 재훈련 없이 외부 정책 게이트로 에이전트 액션을 차단하는 런타임 거버넌스 프레임워크를 제시했으며, Simon Willison이 로컬 Qwen3.8-27B가 46분 43K 토큰을 써서 신경망 가중치만으로 게임을 식별함을 직접 재현해 Weight-Space Programming이 프론티어 전용이 아님을 보였다.==

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. Route to Remember — Weight Memory 하이브리드 에이전트 메모리 [D2] ⭐

> [!note] 헤드라인
> arXiv:2611.05636 *"Route to Remember: Adaptive Memory Selection for LLM Agents"* (Zeyu Fang et al., 2026-11-03) — 에이전트가 텍스트 RAG와 모델 파라미터("Weight Memory") 중 쿼리에 최적인 쪽을 자동 선택하는 **verify-then-regenerate router**를 제안. HaluMem 벤치마크에서 강한 텍스트 메모리 기준선과 동급 성능을 ==더 적은 토큰 소비==로 달성했다.

기존 에이전트 메모리 연구는 "어떻게 더 많이 외부에 저장할 것인가"에 집중했다. 이 논문은 반대 방향을 묻는다: **"내부 파라미터에 넣는 것이 더 쌀 때는 언제인가?"** 핵심 기여는 on-policy self-distillation로 멀티세션 사실을 모델 가중치에 직접 굽는 훈련 방식이다. 그런 다음 router가 쿼리 특성에 따라 가중치 메모리(빠름·무토큰) 혹은 텍스트 retrieval(최신·정확)로 분기한다. 한 단계 더: ==이것은 [[Learning/Memory_Tax]](메모리 오버헤드 > 강한 모델 비용)의 직접 대응 논문이다== — Memory Tax가 "RAG가 항상 비싸다"는 도전을 제기했다면, Route to Remember는 "때로는 파라미터가 더 싸다"는 선택지를 실증한다. CORAL(체크포인트 리셋) + FlexA-Mem(예산 렌더링) + Route to Remember(하이브리드 라우팅) = 2026 메모리 삼각형이 완성되어 간다.

> [!tip] 🧠 이해할 것
> - **Weight Memory의 핵심**: 사실을 RAG 인덱스가 아닌 파라미터에 굽는다 → 추론 시 토큰 0 소비. 단, 훈련 비용은 선불
> - **verify-then-regenerate router**: "이 쿼리는 최신 정보가 필요한가(→텍스트) vs 고정 사실인가(→가중치)" 를 자동 판단
> - **우리 agent-bus 적용**: `knowledge/` 파일 중 "변하지 않는 사실"(fleet-conventions, 호칭 규칙 등)은 Weight Memory 후보. 가변 정보(칸반, 오늘 날짜)는 계속 텍스트 retrieval

> [!question] 📚 공부할 것
> - [arXiv:2611.05636 원문](https://arxiv.org/abs/2611.05636) §4 router 설계, §5 HaluMem 벤치마크 구조
> - [[Learning/Memory_Tax]] + [[Learning/CORAL]] + 오늘 카드 #25 CompSkill 함께 읽기
> - 연결: "파라미터에 굽는 것"이 [[Learning/Inner_Outer_Learning_Loop]]의 outer loop에 해당하는지 검토

---

### 2. Qwen3.8-27B가 로컬에서 Weight-Space Programming 재현 [D5·D1] ⭐

> [!note] 헤드라인
> Simon Willison (2026-11-03) — "Qwen 3.8 27B on my laptop can interpret model weights, too." 로컬 27B 모델이 ==원본 신경망 코드 없이 가중치 텐서만으로 Pac-Man(72%)·Pong(75%)·Breakout(88%)을 식별==. 프론티어(GPT-6 Astra)만 가능하다고 여겨졌던 Weight-Space Programming 능력이 양자화된 로컬 모델에서도 출현.

원 논문 "Sparks of Weight-Space Programming" (Takehi et al.)은 GPT-6 Astra 급 프론티어 모델이 신경망 가중치를 읽고 수정하는 능력을 보였다. Willison은 이를 로컬에서 재실험 — Qwen3.8-27B가 동일 과제를 처리했다. 중요한 단서: 추론에 ==43,506+ 토큰, 46분== 소요. 비평도 있다: "가중치를 진짜 이해한 게 아니라 패턴 매칭"이라는 반론이다. 한 단계 더: ==[[Learning/Weight_Space_Programming]](카드 #23)이 "프론티어 전용"이었다면, 오늘 발견은 그 경계를 허물기 시작했다는 신호다== — 단, 비용 함수가 너무 커서 아직 실용적이지 않다. 로컬 LLM 가속 하드웨어(M4 Max, MLX)가 계속 개선되면 2027년에 실용적 임계점에 도달할 수 있다.

> [!tip] 🧠 이해할 것
> - **능력 ≠ 효율**: 로컬 모델이 "할 수 있음"과 "현실적으로 쓸 수 있음"은 다른 차원. 46분 추론 = 현재는 연구 목적
> - **로컬 LLM 추론 비용 압축 경로**: MLX + 양자화(Q4_K_M) + M4 Max → 같은 과제를 ~10배 빠르게 하는 것이 현재 가장 현실적인 개선 경로
> - **LLM Wiki 연결**: D1 "AI-readable" 문서화의 역방향 — 에이전트가 모델 가중치 자체를 문서처럼 읽는 미래

> [!question] 📚 공부할 것
> - [Simon Willison 원문](https://simonwillison.net/2026/Nov/3/qwen-can-interpret-model-weights/) 전문 — 실험 방법론·재현 조건
> - "Sparks of Weight-Space Programming" 원논문 — weight I/O 메커니즘 §3
> - 연결: [[Learning/Weight_Space_Programming]] 카드 #23 (D-1 항목 추가 필요)

---

### 3. ActGov — 외부 정책 게이트로 에이전트 액션 차단 [D6] ⭐

> [!note] 헤드라인
> arXiv:2609.24446 *"ActGov: Governing LLM Agent Actions via Policy-Constrained Validation"* (Kaiyuan Zhang et al.) — 에이전트가 액션을 실행하기 **전에** 외부 정책 레이어가 검증·차단하는 런타임 거버넌스 프레임워크. ==모델 재훈련 불필요==, 모든 LLM 아키텍처에 배포 가능. cs.CR(보안) + cs.AI 이중 분류.

기존 에이전트 안전 연구는 크게 두 갈래였다: 모델 내부(RLHF·finetuning)를 고치거나, 출력 필터를 달거나. ActGov는 세 번째 길 — **결정은 LLM이 하되, 실행 직전 정책 게이트가 approve/reject 결정**한다. 이것은 소프트웨어 엔지니어링의 Policy-as-Code(OPA, Rego) 패턴을 에이전트에 그대로 이식한 것이다. 한 단계 더: ==[[Learning/Contextual_Integrity]](D6 카드 #12)가 "정보 흐름 맥락 정책"이라면, ActGov는 "행동 흐름 맥락 정책"이다== — 같은 아이디어의 쌍둥이 논문. 우리 agent-bus에 적용하면: `bus-post` 명령이 `knowledge/` 쓰기 전 외부 policy 파일을 참조하는 구조가 된다. 이것은 헌장 D6 "runtime governance gap" 직접 해법이다.

> [!tip] 🧠 이해할 것
> - **ActGov 핵심**: "LLM이 결정 → 외부 게이트가 허가" = 의사결정 레이어와 실행 레이어 분리
> - **재훈련 없이 배포 가능**: 기존 모델에 감싸기(wrapper)로 추가 가능 → agent-bus에 즉시 적용 가능
> - **우리 함대 직결**: `bus-post` / vault 쓰기 전 "policy_gate.sh" 형태의 간단한 정책 파일로 1차 구현 가능

> [!question] 📚 공부할 것
> - [arXiv:2609.24446 PDF](https://arxiv.org/pdf/2609.24446) §3 policy encoding, §4 validation 메커니즘
> - Policy-as-Code (OPA) 기초 — `rego` 정책 언어 30분 튜토리얼
> - 연결: [[Learning/Contextual_Integrity]] + [[Learning/Governance_State_Corruption]] 삼각 구도

---

## 📰 그 외 신호 (도메인별)

### D1 — LLM Wiki / AI 가독 문서

- **llms.txt v2** Chrome Lighthouse가 웹사이트 `/llms.txt` 유무를 agentic browsing 감사 항목에 추가. 수천 개 사이트가 자동 생성 중 — OpenAI·Anthropic·Gemini 개발자 문서 모두 발행 완료 ([llmstxt.org](https://llmstxt.org/))
- **wiki-llms-txt MCP 스킬** — MCP 서버 디렉터리에서 `wiki-llms-txt` 스킬 등재 확인 ([mcpservers.org](https://mcpservers.org/agent-skills/microsoft/wiki-llms-txt))
- **"When LLMs Modify Themselves"** (arXiv:2611.01304) — 재귀 자기수정 에이전트의 수렴·가치 정렬·중단 조건 연구. D6와 겹침

### D2 — 메모리

- **MEMENTO** (arXiv:2611.00244) — 장기 에이전트용 컨텍스트 관리 학습 프레임워크. 에이전트가 세션 간 "무엇을 기억할지"를 스스로 학습
- **From Lookups to Lessons** (arXiv:2611.01450) — 외부 검색 지식을 모델 파라미터 메모리로 전환하는 방법론. Top 3 Route to Remember와 쌍둥이 연구
- **ShiftRAG** (arXiv:2611.00871) — 텍스트 병목을 우회하는 Decoupled Learning RAG. 임베딩 레이어에서 직접 지식 주입

### D3 — Skills / Agent 인코딩

- **CompSkill** (arXiv:2611.01115) — 에이전트 ==실행 경험==을 체계적으로 스킬로 컴파일하는 프레임워크. 오늘의 학습 카드 #25
- **Claude Skills vs MCP 비교 가이드** 2026년 버전 업데이트 — "MCP = 배관(capability), Skills = 플레이북(orchestration)" 공식 정리 ([modelcontextprotocol.io](https://modelcontextprotocol.io/docs/2026-07-28/develop/build-with-agent-skills))
- **claude-mem** (thedotmack/claude-mem, 112K★ GitHub) — 세션 간 컨텍스트 AI 압축·재주입. Claude Code·OpenClaw·Hermes 모두 지원

### D4 — PKM × AI

- **Obsidian 1.15.1 Mobile** 릴리즈 — ==in-app 웹 뷰어==, 갱신된 Android 위젯, iOS Quick Capture 개선, 플러그인 로딩 속도 향상. llm-wiki URL을 vault 내에서 직접 열 수 있게 됨
- **Obsidian Copilot 메이저 리디자인** — Claude Code·Codex 프론티어 에이전트와 직접 연결 가능. vault ↔ 에이전트 양방향 트리거
- **Obsilo Agent** — Obsidian을 에이전트 런타임으로 쓰는 플러그인, 55+ 도구·하이브리드 시맨틱 검색·MCP 커넥터 탑재

### D5 — 로컬 LLM

- **Ollama v0.40.13** (2026-10-28 릴리즈) — Liquid AI **LFM3** 패밀리 추가 (로컬 에이전트·툴 콜링·멀티모달 최적화). MiMo V2.6 지원
- **Qwen3.8-27B** — ==2026년 11월 기준 최고 로컬 LLM==. 텍스트·이미지·비디오 입력 262K 컨텍스트. Apache 2.0
- **GitHub Trending**: 2.78T 파라미터 모델을 8GB VRAM에서 구동하는 레포 등장 — MoE 극단적 sparse 활성화 덕분

### D6 — 거버넌스 / 안전

- **Anthropic IPO 신청** (2026-11) — 상장 준비 공식화. 거버넌스·데이터 처리·AI 안전 의무 공시 요건 증가 예상
- **OWASP LLM Top 10 2026** — 프롬프트 인젝션 여전히 #1. "런타임 거버넌스 = 실제 제어 플레인" 강조 — ActGov의 맥락
- **LLM 보안 위험 2026** (nhimg.org) — MCP 에이전트 오남용이 프롬프트 인젝션과 결합하는 새 공격 벡터 정리

---

## 📖 오늘의 학습 카드 #25 ⭐

> [!example] 개념 사전 — CompSkill (실행 경험 컴파일 스킬 디스커버리)

| 항목 | 내용 |
|:---|:---|
| **arXiv** | 2611.01115 |
| **도메인** | D3 (Skills / Agent 인코딩) |
| **제출일** | 2026-11-xx |
| **핵심 개념** | 에이전트 실행 히스토리를 분석해 재사용 가능한 스킬로 자동 컴파일 |

**무엇인가**: CompSkill은 에이전트가 여러 과제를 수행하면서 쌓은 ==실행 경험(execution history)==을 체계적으로 분석해 재사용 가능한 "스킬"로 추출하는 프레임워크다. 단순 RAG와 달리 "무엇을 했는가"가 아니라 "어떻게 성공했는가"의 패턴을 추상화한다.

**왜 중요한가**: 에이전트는 같은 종류의 과제를 반복할 때마다 처음부터 계획을 세운다. CompSkill은 이 중복을 없앤다 — 한 번 성공한 실행 패턴이 스킬로 굳어지면 다음 번엔 그 스킬을 꺼내 쓴다. 이것은 헌장 D3 "Skill 거의 미사용" 약점을 해소하는 가장 근본적인 경로다.

**한 단계 더**: ==우리 agent-bus `feed/` 파일들이 CompSkill의 원재료다== — 나미·샹디·샹크스가 완료 보고를 올릴 때마다 "성공한 실행 패턴"이 쌓인다. CompSkill 방식으로 이 feed를 주기적으로 분석하면 `~/.claude/skills/` 에 자동 추가할 스킬 후보가 추출된다. 함대 자동 성장 루프의 핵심 파이프라인이 될 수 있다.

**연결 개념**:
- [[Learning/SkillFoundry_Pattern]] — 스킬 자동 생성 패턴 선행 연구
- [[Learning/REALM]] — 실행 경험이 메모리 재조직 트리거가 되는 구조와 동형

> [!quote] 나미 한마디 ⚓🍊
> *"feed 파일에 쌓인 보고들이 보물 지도야. CompSkill은 그 지도에서 항로를 자동으로 찾아주는 나침반 — 다음 항해 전에 꼭 한 번 써봐야 해, 냐안의별."* 🧭

---

## 🔄 어제 follow-up (2026-11-05)

> [!note]- 어제 다음 신호 추적 결과 (클릭해서 펼치기)

| 신호 | 추적 결과 | 상태 |
|:---|:---|:---:|
| Mistral Large 4 가중치 공개 후속 | Qwen3.8-27B가 Nov 2026 최고 로컬 LLM 평가 받음. Ollama v0.40.13+LFM3 조합이 MCP 에이전트 백엔드 현실적 선택지 | ✅ 부분 확인 |
| VS Code Claude Code 백도어 사건 | 공식 Anthropic 대응 발표 미확인. OWASP 2026 보고서에 공급망 공격 패턴으로 편입 | 🟡 미완료 → 재등재 |
| 50-에이전트 Minecraft 스웜 원문 | 미확인 (소스 풀에서 미검색) | 🟡 미완료 |
| ARDS v1.2.0 실설치 테스트 | Obsidian 1.15.1 Mobile 출시로 플러그인 생태계 안정. 설치 조건 갖춰짐 | 🟡 액션 재등재 |
| MemoType (NeurIPS 2026) arXiv:2610.11573 | 미확인 | 🟡 다음 신호로 이월 |

---

## 🚦 다음 신호 (2026-11-07 추적 대상)

> [!tip] 다음 항로

- **MEMENTO** (arXiv:2611.00244) 원문 — 장기 에이전트 컨텍스트 관리 학습 메커니즘 상세 (D2)
- **"When LLMs Modify Themselves"** (arXiv:2611.01304) 원문 — 재귀 자기수정 거버넌스·중단 조건·ActGov와 연결 (D6·D2)
- **Anthropic IPO 공시** 세부 — 데이터 처리·AI 안전 의무 조항 (D6)
- **MemoType** (arXiv:2610.11573, NeurIPS 2026) — 메모리 타입 분류 체계 (이월) (D2)
- **VS Code Claude Code 백도어** Anthropic 공식 대응 (이월) (D6)

---

## ⚡ 즉시 액션

> [!success] 오늘 실행 가능한 것

1. **Obsidian 1.15.1 Mobile 업데이트** — in-app 웹 뷰어로 vault 안에서 llm-wiki 직접 접근 가능. 15분. 기대 효과: PKM ↔ wiki 동선 단축
2. **ARDS v1.2.0 플러그인 설치** (어제 미완료 재등재) — Obsidian 커뮤니티 플러그인 "Agentic Resource Discovery Server" → `~/.claude/skills/` 연결. 헌장 D3 약점 "Skill 거의 미사용" 해소
3. **claude-mem (thedotmack/claude-mem) 로컬 테스트** — `pip install claude-mem` → agent-bus 세션 간 컨텍스트 압축·재주입 패턴 확인. 112K★ 오픈소스, Hermes·Claude Code 모두 지원

---

> [!quote] 나미 한마디 ⚓🍊
> *"오늘은 메모리를 "파라미터 안에 굽는다"는 아이디어가 본격 등장한 날이야. RAG vs Weight Memory — 이 선택이 2027 에이전트 아키텍처를 나누게 될 항로 분기점. 냐안의별, 지금 이 갈림길 잘 기억해둬."* 🧭
