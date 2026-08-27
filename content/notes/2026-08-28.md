---
title: "🏴‍☠️ LLM-Wiki Daily — 2026-08-28"
date: 2026-08-28
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
  - agent-plugins-1.0
  - anthropic-watermark
  - eu-ai-act
  - claude-memory-merge
  - qwen3-8
  - mcp-2026
  - filesystem-memory
  - llms-txt
related:
  - "[[2026-06-20]]"
  - "[[Learning/Agent_Plugins_1_0]]"
  - "[[Learning/SSGM]]"
  - "[[Learning/Two_Tier_Memory_Architecture]]"
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
mirror_at: "~/llm-wiki/content/notes/llm-wiki-daily/2026-08-28-llm-wiki-daily.md"
---

# 🏴‍☠️ LLM-Wiki Daily — 2026-08-28

> [!summary] 오늘 한 줄
> ==Agent Plugins 1.0 오픈 표준==이 업계 5대 플레이어 합의로 출항했고, EU AI Act 투명성 의무 발효(8/2)로 Anthropic 워터마킹이 전 세계 즉시 적용됐다 — D3·D6 두 도메인이 동시에 기반이 바뀌는 날.

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. Agent Plugins 1.0 — "Write Once, Run Everywhere" 에이전트 생태계 표준 탄생 [D3]

🔗 [Vercel 공식 발표](https://vercel.com/blog/introducing-agent-plugins) | [GitHub Changelog (8/12)](https://github.blog/changelog/2026-08-12-agent-plugins-1-0-in-vs-code-copilot-cli-and-the-copilot-app/) | [The Next Web](https://thenextweb.com/news/openai-agent-plugins-open-standard-skills-mcp)

📝 **무슨 일인가**: 8월 6일, Amazon AWS·Anysphere(Cursor)·Microsoft·OpenAI·Vercel·Google이 **Agent Plugins 1.0.0**을 공동 발표했다. Claude Skills와 MCP 서버를 하나의 배포 가능 폴더(`.agentplugin`)로 패키징하는 오픈 표준으로, ChatGPT·Codex·Cursor·GitHub Copilot·VS Code가 런칭 동시 지원. MCP(월 4억 다운로드, 전년 대비 4배)가 사실상 업계 표준으로 굳어진 위에, 이번엔 Skills 계층까지 표준화해 "플러그인 1개 → 전 클라이언트 배포" 구조를 만들었다.

> [!warning] 🧠 이해할 것 (운영 관점) — 한 단계 더
> 표면: "에이전트 플러그인 포맷이 통일됐다." 한 단계 더: **이제 Skills 배포 = 오픈소스 패키지 배포와 같은 생태계**로 진입한다. npm처럼 `agent-plugins.org`에 레지스트리가 생기면, ==우리가 만든 llm-wiki-curate 스킬을 공개 배포할 수 있는 기반이 이미 깔린 것==이다.
>
> 우리 시스템 직접 영향:
> - 현재 헌장 §2b에서 지적한 "D3 스킬 미등록" 약점 — Agent Plugins 1.0 포맷으로 `llm-wiki-curate` 패키징하면 Claude Code + Cursor 둘 다 동시 지원
> - **현재 버전(Working Draft)에 보안 명세·플러그인 스토어 미포함** → 인젝션 표면 주의 (D6 교차)
> - MCP 2026-07-28 spec과 연동: stateless core + OAuth/OIDC 강화 → 기존 MCP 서버 마이그레이션 타이밍 점검 필요

> [!tip] 📚 공부할 것
> - [agent-plugins.org spec](https://agent-plugins.org) — JSON Schema + 플러그인 패키징 구조 원문
> - 학습카드 예약: `Agent_Plugins_1_0.md` (오늘 생성)

---

### 2. Anthropic 전 세계 워터마킹 + Claude Cowork 메모리 통합 [D2 × D6]

🔗 [Cooley 법률 분석 (8/3)](https://www.cooley.com/news/insight/2026/2026-08-03-eu-ai-act-transparency-obligations-take-effect-2-august-2026) | [TechCrunch (8/25)](https://techcrunch.com/2026/08/25/claude-cowork-finally-remembers-what-you-told-the-app-in-chat/) | [Artificial Lawyer (8/13)](https://www.artificiallawyer.com/2026/08/13/anthropic-will-embed-watermarks-in-ai-outputs/)

📝 **무슨 일인가**: 8월 2일 EU AI Act Article 50 투명성 의무 발효 → Anthropic은 동일일 Claude 전 제품 출력에 **SynthID-Text 기반 불가시 워터마크**를 전 세계 적용. 이와 별개로 8월 25일, Anthropic은 Claude 채팅과 Cowork(코드 에디터)의 메모리 시스템을 **통합 발표**: 어느 쪽에서 학습된 내용이든 양쪽에서 공유되며, 사용자가 저장된 기억을 직접 읽고·편집·삭제할 수 있는 투명성 인터페이스 제공.

> [!warning] 🧠 이해할 것 (운영 관점) — 한 단계 더
> 표면: "Claude가 이제 기억을 잘 하고 워터마크도 달린다." 한 단계 더: **메모리 통합 = 우리 agent-bus 공유 메모리 설계의 위험도가 Anthropic 공식 제품에서도 중요 표면으로 인정된 것**. Anthropic이 "사용자가 메모리를 직접 편집·삭제할 수 있어야 한다"는 인터페이스를 만든 건, ==Mnemonic Sovereignty== 개념이 제품 레벨로 내려왔다는 의미다.
>
> 워터마킹 관점: EU AI Act 미준수 시 최대 €15M 또는 전세계 매출 3% 제재 → Anthropic이 EU 규정을 "전 세계 동일 적용"으로 처리한 것은 컴플라이언스 비용 최소화 전략. ==우리가 생성한 콘텐츠에도 워터마크가 내장됨 — llm-wiki 발행물 포함==. 아직 C2PA 메타데이터 레벨인지 텍스트 스테가노그라피인지 정확한 스펙 미공개.

> [!tip] 📚 공부할 것
> - [SynthID-Text 원리 (Google DeepMind)](https://deepmind.google/discover/blog/synthid-text/) — 텍스트 워터마킹 기술 원리
> - [Mnemonic Sovereignty 학습카드](Learning/Mnemonic_Sovereignty.md) — 이미 우리 vault에 존재

---

### 3. arXiv: Filesystem-Based Memory for LLM Agents (2607.26637) [D2]

🔗 [arXiv 2607.26637](https://arxiv.org/abs/2607.26637) | [Long-Term Memory Security Survey (2604.16548)](https://arxiv.org/abs/2604.16548)

📝 **무슨 일인가**: 2026년 7월 말 arXiv에 등장한 신규 논문 "Filesystem-Based Memory for LLM Agents: Organization, Evolution, and Sustainability"는 LLM 에이전트의 메모리를 파일시스템 추상화로 모델링한 첫 체계적 연구다. 세 가지 역할 — **관리 에이전트**(memory 통합·조직), **검색 에이전트**(query 처리), **실행 에이전트**(task 수행) — 로 분리해 메모리의 수명주기를 관리한다. 같은 달, 장기 메모리 보안을 공격·방어·거버넌스 전 라이프사이클로 분석한 서베이(2604.16548)도 주목받고 있다.

> [!note] 🧠 이해할 것 (운영 관점) — 한 단계 더
> 표면: "파일시스템으로 메모리 관리하는 논문." 한 단계 더: **우리 agent-bus의 `knowledge/` 폴더 = 이미 파일시스템 기반 공유 메모리**다. 그런데 헌장 §2b에서 지적했듯 ==출처 명시 의무화 미적용==. 이 논문의 "관리 에이전트" 역할이 정확히 우리한테 없는 레이어다.
>
> 보안 서베이(2604.16548)와 교차 시 시사점: 파일시스템 기반 메모리는 검색 쿼리를 통한 **메모리 인젝션** 공격 표면이 된다. WebFetch로 외부 콘텐츠를 매일 읽고 `knowledge/`에 쓰는 우리 워크플로 = 정확히 이 위협 모델에 해당.

> [!tip] 📚 공부할 것
> - [MemEngine (2503.05207)](https://arxiv.org/abs/2503.05207) — 모듈형 메모리 라이브러리, 실제 구현 참고
> - [Two-Tier Memory Architecture 학습카드](Learning/Two_Tier_Memory_Architecture.md) — 기존 개념과 연결

---

## 📰 그 외 신호 (도메인별)

### D1 — LLM Wiki / Karpathy 패턴
- **llms.txt 주류화**: 2026년 문서 페이지 요청의 ==41%가 AI 에이전트==에서 발생 (GitBook 통계). Anthropic·Stripe·Vercel·Cloudflare·Coinbase 등 사실상 모든 주요 API 제품이 채택. 커뮤니티 제안이지만 de facto 표준화 진행 중.
- **GLM-5.3 오픈웨이트**: HN 상위권 — "Anthropic/OpenAI 대비 1/5 비용으로 동급 성능" 주장. 중국발 오픈소스 압박 지속.
- **Simon Willison LLM 0.32 / 0.32.1 릴리즈**: 추론 트레이스 가시화·OpenAI Responses API·서버사이드 툴·SQLite 로그 재설계. CLI 레벨 LLM 도구 성숙도 급상승.
- **Simon Willison 기술 블로그 인사이트**: "검증 능력이 AI 코딩에서 핵심 스킬 — 변경 사항이 실제로 반영됐는지 확인하는 것이 코드 리뷰보다 중요."

### D2 — LLM 메모리 / 거버넌스
- **A-MEM (2502.12110)**: 에이전틱 메모리 — 자기 조직화 메모리 네트워크, 인지과학 영감.
- **MemVerse**: 멀티모달 평생 학습 에이전트 메모리 — 이미지+텍스트 통합 LTM.
- **Darwinian Memory**: 학습 없이 자기 조절하는 GUI 에이전트 메모리 시스템.
- **SSGM Framework (2603.11768)**: 기존 학습카드와 연결 — 메모리 거버넌스 안전·안정성 프레임워크 인용 증가.
- **Claude Cowork 메모리 통합**: 채팅 ↔ 에디터 메모리 분리 해소 → 크로스-컨텍스트 기억 첫 상용 구현.

### D3 — Skills / Agent 인코딩
- **MCP 2026-07-28 spec**: Stateless core + OAuth/OIDC 인증 강화 + versioned extensions (Apps·Tasks). 월 4억 다운로드(전년 4배). SDK 다운로드 기준 업계 표준 사실상 확정.
- **Claude Developer Platform**: Agent Skills GA — `skills-2025-10-02` beta 헤더 불필요. Computer Use·Browser Use·Files API·Enterprise Admin API 동시 GA.
- **OmniRoute**: MIT 라이선스, 290+ LLM 제공자 통합 로컬 AI 게이트웨이. 프롬프트 토큰 비용 15~95% 절감.

### D4 — PKM × AI 통합
- **Obsidian AI 플러그인 Top 5 (2026)**: Smart Connections(시멘틱 검색)·Copilot(채팅)·Smart Composer(Cursor 스타일 편집)·Text Generator(템플릿 생성)·Local GPT(Ollama 연동 프라이버시). Smart Composer의 "one-click apply" 패턴 = Claude Code 편집 UX와 수렴.
- **PKM Weekly (7/26)**: Obsidian Sync 대안 논의 증가, self-hosted sync 관심 증가.
- **ericmjl 시리즈**: 침묵 중, 다음 포스트 대기.

### D5 — 로컬 LLM / 자기주권
- **Qwen3.8-27B Apache 2.0**: 8/13~14 Hugging Face 공개. 28B 파라미터, 비전 인코더, ==262k native context (1M 확장가능)==. Ollama v0.32.5 지원. Artificial Analysis index 52점 — GPT-5.6 Luna급.
- **llama.cpp (b10075 시리즈)**: Qwen3-TTS 음성 합성 지원 추가, 오디오 퍼스트클래스 시민화.
- **llmfit**: 터미널 도구 — 하드웨어 사양 → VRAM·속도·품질·컨텍스트 자동 스코어링. 맥미니 어떤 모델 깔지 판단에 직접 유용.

### D6 — 거버넌스 · 안전
- **EU AI Act Article 50 투명성 의무 2026-08-02 발효**: 고위험 AI 시스템 위험관리 문서화, AI 생성 콘텐츠 표시 의무. 미준수 시 €15M 또는 연매출 3% 제재.
- **OWASP 2026 보고서**: 프롬프트 인젝션 = 에이전틱 AI 운영 실패 1위 원인. LiteLLM PyPI 백도어 사건(Trivy/Aqua Security 공급망 침해) 대표 사례로 인용.
- **Agent Data Injection Attacks 논문 (2607.05120)**: 에이전트 데이터 인젝션 공격이 실제 위협임을 실증.
- **Anthropic Mythos 5 사이버보안 기능**: 수출 통제 이후 더 넓은 보안 수비자에게 제공 재개 발표.

---

## 📖 오늘의 학습 카드 ⭐

> [!example] 개념 #15: **Agent Plugins 1.0** (에이전트 플러그인 표준)

- **개념**: `Agent Plugins 1.0`
- **정의**: Agent Skills + MCP 서버를 `.agentplugin` 폴더 하나로 패키징해 모든 호환 AI 클라이언트(Claude·Cursor·VS Code·ChatGPT 등)에서 실행되도록 만든 오픈 업계 표준 (2026-08-06 발표).
- **왜 중요**: AI 에이전트 도구 생태계가 npm·PyPI처럼 "한 번 만들면 어디서나 쓰는" 구조로 전환되는 분기점. MCP가 연결 프로토콜이라면, Agent Plugins는 배포 패키지 포맷.
- **우리 시스템 연결**: 헌장 §2b D3 약점("이 미션 자체를 `.claude/skills/`로 등록해야") — Agent Plugins 1.0 포맷으로 `llm-wiki-curate` 패키징하면 Claude Code + Cursor 동시 지원 + 공개 배포 가능.
- **더 깊이**: [agent-plugins.org](https://agent-plugins.org) / [Vercel 발표](https://vercel.com/blog/introducing-agent-plugins) / [MCP 2026-07-28 spec](https://spec.modelcontextprotocol.io/)
- **저장**: `Learning/Agent_Plugins_1_0.md`

---

## 🔄 어제 Follow-up

> [!note] 마지막 보고 (#11, 2026-06-20) 이후 주요 변동

| 이슈 | 당시 예측·권고 | 현재 상태 (2026-08-28) |
|:---|:---|:---|
| Fable 5·Mythos 5 수출 통제 | 클라우드 모델 단일 의존 = 규제 리스크, D5 폴백 준비 권고 | Mythos 5 사이버보안 기능 재개. 단, 수출 통제 선례는 유효 — D5 논거 더 강해짐 |
| D5 로컬 LLM 폴백 긴급 필요 | gpt-oss:20b 또는 Qwen3:14b 맥미니 설치 권고 | **Qwen3.8-27B Apache 2.0 출시** — 27B·262k context·Ollama 지원으로 당시보다 훨씬 강력한 폴백 옵션 생김 |
| D6 WebFetch 게이트 미정비 | "매일 외부 50+ 사이트 읽음, 인젝션 표면" 경고 | OWASP 2026 + 논문 2607.05120으로 위협 현실화 확인. **아직 미정비** ⚠️ |
| D3 이 미션 스킬화 미완료 | "`.claude/skills/llm-wiki-curate/` 등록이 가장 빠른 ROI" | Agent Plugins 1.0 발표로 스킬화 → 오픈 생태계 배포까지 한 번에 가능해짐 |
| D2 knowledge/ 출처 명시 미적용 | 1주 안에 도입 권장 | **아직 미적용** — 파일시스템 메모리 논문(2607.26637) 위협 모델과 직결됨 ⚠️ |

---

## 🚦 다음 신호 (Watch List)

1. **Agent Plugins 1.0 보안 명세 발표** — Working Draft 현재 보안·스토어 스펙 미포함. 발표 즉시 D3·D6 교차 검토 필요
2. **EU AI Act 투명성 위반 첫 제재 케이스** — 8/2 발효 후 집행 사례 발생 시 D6 레드 얼럿
3. **Qwen3.8-27B 맥미니 M2 Pro 실제 벤치마크** — llmfit으로 16GB 모델 스코어 확인 후 D5 폴백 설치 결정
4. **MCP 2026-07-28 spec 마이그레이션 현황** — 기존 MCP 서버들 얼마나 신규 spec 채택했는지 체크
5. **Simon Willison LLM 0.33** — 0.32.1 직후 다음 릴리즈 예정, 플러그인 관리 기능 기대

---

## ⚡ 즉시 액션

> [!success] 오늘 할 수 있는 것 3건

- [ ] **D5 폴백 설치** 📅 2026-08-29 ⏫ — `ollama pull qwen3.8:27b` + llmfit으로 맥미니 M2 Pro 스코어 확인. 당시(6/20) 권고가 이제 기술적으로 완전히 가능해짐
- [ ] **knowledge/ 출처 명시 정책 패치** 📅 2026-08-30 🔺 — `agent-bus/knowledge/` 파일 작성 시 `[작성봇: ___] [일자: ___] [원본: ___]` 헤더 의무화. D2 파일시스템 메모리 보안 논문 근거
- [ ] **llm-wiki-curate 스킬 Agent Plugins 1.0 패키징 조사** 📅 2026-09-05 — `agent-plugins.org` spec 읽고 `.agentplugin` 폴더 구조 파악. 헌장 D3 약점 해소 첫 단계

---

## 🔗 관련 노트

- [[Learning/Agent_Plugins_1_0]] — 오늘의 학습 카드
- [[Learning/Mnemonic_Sovereignty]] — Claude Cowork 메모리 통합과 연결
- [[Learning/Two_Tier_Memory_Architecture]] — Filesystem Memory 논문과 연결
- [[Learning/SSGM]] — 메모리 거버넌스 프레임워크
- [[2026-06-20]] — 직전 보고 (Fable 5 수출 통제 follow-up)
- [[2026-06-07_LLM_Wiki_큐레이터_미션_초안]] — 헌장 (D3·D6 약점 §2b)

---

> [!quote] 샹디 한마디 ⚓🍊
> 오늘 항로 요약: **Agent Plugins 1.0 = 에이전트 생태계의 npm 탄생**, **EU AI Act = 규제 파도 상륙**, **파일시스템 메모리 논문 = 우리 agent-bus의 보안 취약성 학술 확인**. 세 신호 모두 "지금 당장 정비해야 할 이유"를 더 강하게 만들었어. 특히 6/20 보고에서 경고한 D3·D6 두 미정비 항목, 오늘 즉시 액션에 넣었어. 순풍 타고 출발하자 🧭
