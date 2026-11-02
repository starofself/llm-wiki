---
title: "🏴‍☠️ LLM-Wiki Daily — 2026-11-03"
date: 2026-11-03
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
  - REALM
  - memory-reconsolidation
  - cognitive-graph
  - policy-as-skill
  - governance-by-construction
  - MLX-apple-silicon
  - qwen3-mlx
  - ollama-mlx
  - prompt-injection-governance
  - NIST-AI-600
learning_card: "#22 — REALM (기억 재공고화 에이전트 메모리)"
related:
  - "[[Daily/2026-11-02]]"
  - "[[Learning/REALM]]"
  - "[[Learning/CORAL]]"
  - "[[Learning/Two_Tier_Memory_Architecture]]"
  - "[[Learning/Governance_State_Corruption]]"
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
mirror_at: "~/llm-wiki/content/notes/llm-wiki-daily/2026-11-03-llm-wiki-daily.md"
prev: "[[Daily/2026-11-02]]"
---

# 🏴‍☠️ LLM-Wiki Daily — 2026-11-03

> [!summary] 오늘 한 줄
> ==REALM이 "검색 자체가 기억을 재조각한다"는 인지신경과학 원리를 에이전트 메모리에 구현해 LongMemEval 최상위를 기록했고, MLX가 Apple Silicon 로컬 LLM의 사실상 표준 백엔드가 됐으며, Policy-as-Skill이 거버넌스 정책을 `.claude/skills/` 형태로 직접 집행하는 새 패러다임을 열었다.==

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. REALM — "검색이 기억을 재조각한다" (arXiv 2609.16053) [D2] ⭐

> [!note] 헤드라인
> REALM(Reconsolidation-Evolution Agentic Long-Term Memory)은 기존 메모리 시스템의 **write-only 업데이트 패러다임을 해체**하고, 검색 행위 자체가 메모리를 재조직하도록 설계했다. 인지신경과학의 기억 재공고화(memory reconsolidation) 이론에서 직접 영감.

기존 LLM 메모리 시스템은 "새 정보가 도착할 때만" 업데이트되고 검색(retrieval)은 단순 종단점으로 취급됐다. REALM은 이 패턴을 깨고 **retrieval 피드백이 메모리를 재조직하는 루프**를 이종 인지 그래프(heterogeneous cognitive graph) 위에 구현했다. 자율적 메모리 구성 + 적응형 그래프 탐색 + 검색 후 재공고화를 단일 생애주기로 통합했으며, LoCoMo +7.17점·LongMemEval +1.31점으로 기존 베이스라인을 제쳤다. 인간이 "기억을 꺼낼 때마다 기억이 바뀐다"는 신경과학 원리가 AI 에이전트 메모리 설계에 처음으로 구체적으로 구현된 이정표 사례다.

> [!tip] 🧠 이해할 것
> - **기존**: 메모리 = write-only store. retrieval = 끝점(read-only)
> - **REALM**: retrieval → 인지 그래프 탐색 → reconsolidation → 메모리 재편성 (루프)
> - 인간 기억의 "재공고화" = 기억을 꺼낼 때 기억 자체가 변경됨(Nader 2000 원본 원리)
> - CORAL(어제, 컨텍스트 리셋·checkpoint)과 구분: CORAL = 컨텍스트 압축, REALM = 메모리 내부 자기재조직

> [!question] 📚 공부할 것
> - arXiv 2609.16053 §3 REALM 아키텍처 상세 / 이종 인지 그래프 구조
> - Nader 2000 *Reconsolidation: A Brief History* — 원본 신경과학 출처
> - CORAL vs REALM vs FlexA-Mem 3각 구분표 작성 ([[Learning/Two_Tier_Memory_Architecture]] 연결)

---

### 2. MLX가 Apple Silicon 로컬 LLM 기본 스택이 됐다 [D5] ⭐

> [!note] 헤드라인
> Apple MLX 프레임워크가 M5 Neural Accelerator를 활용해 Qwen3 계열에서 llama.cpp Metal 대비 ==20~87% 빠른 추론==을 달성했고, **Ollama 0.19가 MLX를 기본 백엔드로 채택**해 편의성+성능을 동시에 확보했다.

Qwen3-8B 4bit 기준 M4 Max에서 MLX 90 tok/s vs Apple Core AI 94 tok/s — 사실상 동급. Ollama 0.19 MLX 전환 시 M4 Max decode 속도 **93% 향상** 측정치 보고. 메모리 효율도 Qwen3-Coder-30B 기준 MLX 34.7 GB vs GGUF 40 GB로 ==13% 절감==. Qwen3.6-35B-A3B(MoE) M4 Max에서 45~55 tok/s — 실용 한계선이지만 통과. 맥미니 M4 16 GB 기준 **Qwen3-8B MLX = 새 기본 권장 스택**이 됐다.

> [!tip] 🧠 이해할 것
> - **MLX vs llama.cpp**: MLX = Apple Silicon 전용(Metal + Neural Engine 동시), llama.cpp = 범용(GPU/CPU 크로스플랫폼)
> - Ollama가 MLX backend를 채택 = 사용 편의성(원클릭 설치)이 성능 이점까지 흡수
> - GGUF와 MLX weights는 다른 포맷 — `mlx-community/` HuggingFace 레포에서 별도 다운로드

> [!question] 📚 공부할 것
> - [apple-silicon-llm-bench GitHub](https://github.com/john-rocky/apple-silicon-llm-bench) — iPhone 17 Pro·M4 Max·M5 실측 벤치
> - Apple ML Research "Exploring LLMs with MLX and M5 Neural Accelerators" 논문
> - 맥미니 M4 구성에서 Ollama 0.19+ MLX 전환 실습

---

### 3. Policy-as-Skill — 거버넌스 정책이 스킬에 직접 내장된다 (arXiv 2609.27087) [D3·D6] ⭐

> [!note] 헤드라인
> Policy-as-Skill은 LLM 의사결정에서 거버넌스 정책을 **버전 관리되는 실행 가능 스킬 파일**로 패키지해, 감사(audit) 가능한 결정론적 통제를 에이전트에 직접 내장한다.

Policy-as-Prompt(2509.23994, "정책→프롬프트 분류기")와 달리, Policy-as-Skill은 "정책→스킬 파일→에이전트 행동 결정" 경로로 작동한다. ==증거 기반(evidence-based) + 결정론적 통제(deterministic control) + 완전 감사 추적(audit trail)==이 세 핵심. 600개 개발 태스크 실험에서 정확도 53.8%, 결정론적 통제 선택 적용 시 61.2%로 향상. 우리 함대의 `.claude/skills/` 폴더가 단순 워크플로 인코딩을 넘어 **거버넌스 집행 메커니즘**으로 진화할 수 있다는 직결 시사점.

> [!tip] 🧠 이해할 것
> - **Skill** = 절차 지식(know-how). **Policy-as-Skill** = 거버넌스 규칙을 skill 형태로 컴파일 → 중간 LLM 판단 없이 직접 통제
> - Policy-as-Prompt = "LLM 판단에 의존". Policy-as-Skill = "deterministic rule 집행"
> - 결정론적 통제가 *모든 태스크*에 효과적이지 않고, 특정 태스크 유형에 선택 적용이 최적 (61.2%)

> [!question] 📚 공부할 것
> - arXiv 2609.27087 §4 모듈 런타임 구조 / 13개 방법론 비교표
> - Governance by Construction (arXiv 2605.20874) — 타입드 런타임 통제 프리미티브 비교
> - `~/.claude/skills/` 구조에 정책 레이어 추가 설계안 작성

---

## 📡 도메인별 기타 신호

### D1 — LLM Wiki / llms.txt

- **llms.txt.org v2**: 신뢰도 검증·모순 감지 + 계층적 링크 구조 추가 — AI 가독성 고도화 진행 중
- **Mastercard developer docs** llms.txt 공식 채택 — 금융 대형 기관 확산 신호
- **llms-txt-hub GitHub** (`thedaviddias`): 300+ 구현 사례 디렉토리 유지 중
- **`wiki-llms-txt` 스킬** happycapy.ai·mentalok.io 등 상업 구현 확산
- **documentation.ai "LLM Wiki" 가이드** — 팀용 LLM Wiki 구축법 기업 채택 진입

### D2 — LLM 메모리

- **MemTools** (arXiv 2607.21404, EMNLP 2026 Demos): 에이전트 메모리 연구 파편화 해결 통합 프레임워크 — 선언적 데이터 계약으로 심볼릭·신경·멀티모달 메모리 동시 관리
- **"Remember by Asking"** (arXiv 2609.34438): retrieval이 질문 생성을 통해 메모리 진화를 유도 — REALM과 같은 방향의 독립 연구
- **MemRL** (arXiv 2601.03192): 에피소딕 메모리 기반 런타임 강화학습 → 에이전트 자기진화
- **ACL 2026 Findings**: Temporal Semantic Memory for Personalized LLM Agents 발표

### D3 — Skills / Agent

- **Skills vs MCP 2026 정립**: "Skill=know-how, MCP=access" 구분이 업계 표준화 완료
- **Skill Creator / MCP Builder 메타스킬** 등장 — 스킬이 스킬을 자동 생성하는 메타 레이어
- **Governance by Construction** (arXiv 2605.20874): 프롬프트 엔지니어링 탈피 → 타입드 런타임 통제 프리미티브로 정책 집행
- **Deontic Policies** (arXiv 2606.19464): 의무론적 정책 프레임워크로 에이전트 런타임 거버넌스

### D4 — PKM × AI

- **DEV Community "Obsidian + AI 2026"** — vault가 AI 에이전트 직접 지식 베이스로 사용되는 표준화 단계 진입
- **Obsidian Skills 기능**: AI 에이전트가 vault와 직접 인터랙션 — 플러그인 없이 native 연동 확산
- **ericmjl 2026-03 블로그** *Mastering PKM with Obsidian and AI* — maturing 단계 진입 선언
- **PKM 앱 2026 Best**: Obsidian 1위 유지 (로컬퍼스트·플러그인 2700+ 생태계)

### D5 — 로컬 LLM

- **apple-silicon-llm-bench GitHub** (john-rocky): iPhone 17 Pro + M4 Max + M5 재현 가능 벤치마크 표준화
- **Qwen3-0.6B M4 Max**: MLX 555.9 tok/s — 경량 에이전트 로컬 실행 한계 상향
- **Qwen3.6-35B-A3B (MoE)** M4 Max 45~55 tok/s — 맥미니 16 GB에선 무거움, M4 Max 64 GB+ 권장
- **Hugging Face 로컬 LLM 가이드 2026**: Qwen3 + Gemma 3 주력 추천, MLX 1순위 런타임

### D6 — 거버넌스·안전

- **NIST AI 600-1 Generative AI Profile**: ==프롬프트 인젝션이 공식 명명 리스크로 등재== — 고위험 시스템 제공자 필수 관리 의무화
- **SecOPD** (arXiv 2608.21500): On-Policy Distillation로 적응형 프롬프트 인젝션 완화 — 공격 패턴 적응에도 방어 유지
- **"Prompt Governance"** (arXiv 2606.07539): "자연어로 통제되는 기술을 자연어로 통제하는 역설" 철학적 경고
- **LLM Security 2026 3대 위협**: 프롬프트 인젝션 + MCP 도구 남용 + 에이전트 아이덴티티 위조

---

## 📖 오늘의 학습 카드 #22 — REALM

> [!success] 개념 한 줄
> **REALM** = 검색(retrieval)이 기억을 수동 조회가 아니라 **능동적 재조직 트리거**로 만드는 인지신경과학 기반 에이전트 메모리 프레임워크.

→ 상세: `[[Learning/REALM]]` ([[Operations/Agents/Shandi/Learning/REALM]])

---

## 🔄 어제 Follow-up (2026-11-02)

| 어제 신호 | 상태 | 메모 |
|:---|:---:|:---|
| CORAL COLM 2026 발표 | ✅ | 발표 완료 확인. 후속 구현 레포 아직 미발견 |
| Cursor 백도어 Claude Code 2.1.312/2.1.313 | ⚠️ | 공식 패치 여부 미확인 — 업그레이드 전 버전 확인 필수 |
| Mistral Large 4 오픈웨이트 | 🟡 | Ollama 정식 지원 여부 미확인. HF에서 직접 다운로드는 가능 |

---

## 🔭 다음 신호 (내일 수집 우선순위)

1. **REALM GitHub 구현 레포** — 이종 인지 그래프 코드 공개 여부
2. **Policy-as-Skill 13개 방법론** 세부 비교표 — arXiv 2609.27087 §3 전문
3. **Ollama 0.19+ MLX 전환 가이드** — 맥미니 M4 구성 실습 결과
4. **Cursor 백도어 공식 패치 노트** — 보안 업데이트 여부

---

## ⚡ 즉시 액션

> [!warning] 오늘 할 수 있는 것
> 1. **`[[Learning/REALM]]` 학습 카드 저장** — CORAL·FlexA-Mem·Two_Tier_Memory와 3각 구분표 작성 (→ 오늘 완료)
> 2. **Ollama 버전 확인** — `ollama --version` → 0.19+ 미만이면 MLX 이점 못 씀. `brew upgrade ollama`
> 3. **`.claude/skills/` 거버넌스 레이어 설계 검토** — Policy-as-Skill 패턴으로 공통 정책 스킬 파일 1개 설계안 draft

---

> [!quote] 나미 한마디 ⚓🍊
> REALM이 보여주는 핵심은 "기억을 꺼내는 행위가 기억 자체를 바꾼다"는 것. 우리 agent-bus knowledge/도 마찬가지야 — 읽고 나서 재정리하는 루프가 없으면 쌓이기만 하는 더미. 오늘 학습 카드 체계가 그 루프의 첫 번째 재공고화 장치야. 🧭
