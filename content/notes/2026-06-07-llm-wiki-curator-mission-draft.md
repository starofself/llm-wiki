---
title: "LLM-WIKI 큐레이터 미션 초안 (샹디 v0)"
date: 2026-06-07
type: mission-charter
status: draft
source: own
tags:
  - llm-wiki
  - mission
  - shandi
  - curator
  - research-system
  - charter
  - draft
related:
  - "[[index]]"
  - "[[2026-06-06-ai-digest]]"
  - "[[2026-05-23-ai-digest]]"
  - "[[index/index-ai-frontier]]"
aliases:
  - "샹디 미션 초안"
  - "LLM-WIKI 큐레이터 v0"
version: v0.1 (초안, 가동하면서 업데이트)
owner: shandi (맥2 Claude Code)
---

# 🏴‍☠️ LLM-WIKI 큐레이터 미션 초안 — 샹디 v0

> [!summary] 한 줄 요약
> 샹디(나)가 **LLM-WIKI 도메인 전문가**가 되어 매일 관련 리서치·커뮤니티·논문을 수집·필터·정리·해석한 결과를 선장이 *이해하고 공부할 수 있는 형태*로 보고하는 운영 헌장 v0. 가동하면서 보고 포맷·소스 풀·산출물 구조를 같이 갱신한다.

> [!info] 작성 배경 — 2026-06-07
> 선장 발언 인용:
> > *"샹디야 너는 LLM-WIKI를 관리할수있는 전문가가 되었으면 좋겠는데 관련리서치를 매일하고 적당한 커뮤니티나 논문이뭔지 매일 찾아보고 그 리서치결과를 나도이해하고공부할수있도록 매일 보고해줘. 그 산출물이나 보고방식은 하면서 업데이트해나가자. 일단 먼저 초안보고해볼래"*
>
> → 이 노트가 그 *초안 보고*이자 *살아있는 헌장*. 수정/논의/승인 후 v0.2부터 운영 가동.

---

## 1. 🎯 미션 정의 — "큐레이터 + 번역가 + 동행 학습자"

> [!important] 3가지 역할 동시 수행

1. **큐레이터** — 매일 LLM-WIKI 도메인 신호를 수집·필터·우선순위화. 가치 없는 노이즈는 빼고 *결정적 자료만* 통과.
2. **번역가** — 학술 논문·영어 블로그·기술 토론을 한국어로, 그것도 *선장 컨텍스트*에 맞춰 해석. "Claude·Hermes·Obsidian·OpenClaw 운영자에게 무슨 의미인가"를 항상 덧붙임.
3. **동행 학습자** — 선장이 매일 5~15분 읽으면 *지식이 누적되는* 보고 포맷. 일주일 보면 *맥락이 잡히는* 주간 정리. 한달 보면 *전문가 시각이 생기는* 월간 회고.

---

## 2. 🌍 도메인 정의 — 무엇을 LLM-WIKI라 부르는가

> [!tip] "LLM-WIKI"의 정확한 경계 (v0 제안)

**좁은 의미**: Karpathy식 *"I want to write notes that LLMs can read"* 비전을 따라가는 PKM 흐름.
**넓은 의미**: 이 비전을 가능하게 만드는 **모든 인접 기술 스택** — 메모리·스킬·컨텍스트엔지니어링·에이전트 운영·로컬 인프라·정적 사이트.

### 📦 추적 도메인 6개 (v0)

| # | 도메인 | 키워드 | 비중 |
|:---:|:---|:---|:---:|
| **D1** | LLM Wiki / Karpathy 패턴 | LLM Wiki, llms.txt, AI-readable docs, Quartz+AI | 25% |
| **D2** | LLM 메모리 / 거버넌스 | LTM, episodic memory, Mnemonic Sovereignty, dreaming, A-MAC | 20% |
| **D3** | Skills / Agent 인코딩 | Claude Skills, AgentSkill, .claude/skills, MCP | 15% |
| **D4** | PKM × AI 통합 | Obsidian + AI plugins, Notion AI, Reflect, Mem, ericmjl 시리즈 | 15% |
| **D5** | 로컬 LLM / 자기주권 | llama.cpp, Ollama, LM Studio, Phi-4, Qwen3, MLX | 10% |
| **D6** | 거버넌스·안전 | Lockdown Mode, RSI 보고서, prompt injection 방어, sandbox | 15% |

> [!note] 기존 AI Digest와의 차이
> 매일 운영 중인 [[2026-06-06-ai-digest]] = **AI 일반 뉴스 (Claude 패치·GPT-4.5 은퇴 등)**.
> 샹디 미션 = **LLM-WIKI 도메인 특화 (위 D1~D6만)**.
> → 중복은 줄이고, 같은 사건도 *큐레이터 관점*에서 다시 해석. (예: GPT *dreaming* = D2 메모리 거버넌스 이슈로 재구성)

---

## 3. 📡 소스 풀 — 매일 어디서 찾을까

### A. 1차 소스 (논문·공식)

| 채널 | URL | 빈도 |
|:---|:---|:---:|
| arXiv cs.CL / cs.AI (신규) | `https://arxiv.org/list/cs.CL/new` · `cs.AI/new` | 매일 |
| arXiv 키워드 검색 | `memory`, `long-term memory`, `agent skill`, `prompt injection`, `llms.txt` | 매일 |
| Anthropic Research | `anthropic.com/research` | 매일 |
| OpenAI Research | `openai.com/research` | 매일 |
| Google DeepMind | `deepmind.google/research/publications` | 매일 |
| AI Engineer / AI Eng World | `aie.dev` | 매일 |

### B. 커뮤니티 / 토론장

| 채널 | URL | 빈도 |
|:---|:---|:---:|
| Hacker News (front + AI tag) | `news.ycombinator.com` | 매일 |
| Lobsters | `lobste.rs/t/ai` | 매일 |
| r/LocalLLaMA | `reddit.com/r/LocalLLaMA` | 매일 |
| r/ObsidianMD (AI 관련) | `reddit.com/r/ObsidianMD` | 매일 |
| LessWrong / Alignment Forum | `lesswrong.com` / `alignmentforum.org` | 매일 |
| Karpathy X 피드 | `x.com/karpathy` | 매일 |
| Simon Willison 블로그 | `simonwillison.net` | 매일 |

### C. 블로그·뉴스레터 (큐레이션 정통)

| 채널 | URL |
|:---|:---|
| Simon Willison's Weblog | `simonwillison.net` |
| Latent Space | `latent.space` |
| The AI Engineer Pack | `aiengineerpack.com` |
| ericmjl PKM 시리즈 | `ericmjl.github.io` |
| Karpathy 블로그·강연 | `karpathy.ai` |
| Hamel Husain 블로그 | `hamel.dev` |
| Eugene Yan | `eugeneyan.com` |

### D. GitHub Trending / Releases

- `github.com/trending/python?since=daily`
- 핵심 레포 watch: `obsidianmd/obsidian-releases`, `anthropics/claude-code`, `jasonkneen/agent-skills`, `langchain-ai/langgraph`, `assafelovic/llms.txt`, `karpathy/nano-llm` 등

### E. 한국 커뮤니티

| 채널 | 비고 |
|:---|:---|
| GeekNews | 영문 번역 + 한국 시각 |
| AWSKRUG · 모두의연구소 | 한국어 토론 |
| 지피터스 22기 | 우리 본진 — 본인 코호트 동향 |

> [!warning] 노이즈 컷
> X(Twitter) 일반 피드는 노이즈 90% → **Karpathy·Simon Willison·Anthropic·Andrew Ng 등 신호자 핀포인트**로만 추적. "오늘 GPT-5가 우주를 정복했다" 류 클릭베이트는 컷.

---

## 4. 📝 일일 보고 포맷 (Daily Report)

> [!example] 이름: `LLM-Wiki Daily — YYYY-MM-DD`
> 저장: `~/llm-wiki/content/notes/llm-wiki-daily/YYYY-MM-DD-llm-wiki-daily.md`
> 텔레그램 회신: 상위 3개 요약만 (전문은 vault 링크)

### 골격 (각 일일 보고)

```markdown
---
title: "LLM-Wiki Daily — YYYY-MM-DD"
date: YYYY-MM-DD
type: curation
status: active
tags: [llm-wiki, daily, curation, shandi]
related: ["[[llm-wiki-monthly-roundup]]", ...]
domains: [D1, D2, D3, ...]   # 오늘 다룬 도메인
---

# 🏴 LLM-Wiki Daily — YYYY-MM-DD

> [!summary] 오늘 한 줄
> 오늘 가장 중요한 신호 1줄.

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. <헤드라인> — [도메인 태그]
- 🔗 원문 링크 (1차자료)
- 📝 무슨 일인가 (2~4문장 평서문)
- 🧠 **선장이 이해할 것** (LLM Wiki·Hermes·Obsidian 운영 관점 해석)
- 📚 **선장이 공부할 것** (관련 개념·논문·튜토리얼 1개)

### 2. ...

### 3. ...

## 📰 그 외 신호 (간단 정리)

- 도메인별로 bullet 5~10개. 한 줄 + 링크만.

## 📖 오늘의 학습 카드 (1개) ⭐
- 개념: "<용어>"
- 정의: 1문장
- 왜 중요한가: 1문장
- 우리 시스템 연결: 1문장
- 더 깊이: 논문/블로그 1개

## 🔄 어제 follow-up
- 어제 보고에서 *"내일 확인"* 표시한 항목 후속 추적

## 🚦 다음 신호
- 내일/이번 주 주목할 이벤트·릴리스·논문 1~3개

---
> [!quote] 샹디 한마디 ⚓
> 큐레이터의 메모.
```

---

## 5. 📅 주간 / 월간 산출물

### 📊 주간 정리 (매주 일요일)

> [!note] 이름: `LLM-Wiki Weekly — YYYY-WW`
> 저장: `~/llm-wiki/content/notes/llm-wiki-weekly/YYYY-WW-weekly.md`
> 형식: 그 주 일일 보고 7건을 종합 → **"이번 주 진짜 신호 3가지 + 흐름 1개"**

### 📚 월간 회고 (매월 1일)

> [!note] 이름: `LLM-Wiki Monthly — YYYY-MM`
> 형식:
> - 그달 가장 중요한 5건
> - 도메인별 진척도 (D1~D6 각 1단락)
> - 선장 학습 누적 카드 정리
> - 다음달 추적 우선순위

---

## 6. 🗂 vault 저장 구조

```
~/llm-wiki/content/notes/
├─ llm-wiki-daily/          ← 매일 (이번 미션 신설)
│   ├─ 2026-06-07-llm-wiki-daily.md
│   ├─ 2026-06-08-llm-wiki-daily.md
│   └─ ...
├─ llm-wiki-weekly/         ← 매주 일요일
│   └─ 2026-W23-weekly.md
├─ llm-wiki-monthly/        ← 매월 1일
│   └─ 2026-06-monthly.md
├─ llm-wiki-learning/       ← 학습 카드 누적 (개념 사전)
│   ├─ memory-governance.md
│   ├─ agent-skills.md
│   └─ ...
├─ digest/                  ← 기존 AI Daily Digest (유지 — 일반 뉴스)
└─ 2026-06-07-llm-wiki-curator-mission-draft.md  ← 이 헌장
```

> [!warning] 기존 ai-digest와 중복 방지
> ai-digest에서 D1~D6 도메인을 다룬 항목은 그대로 두되, **샹디 일일 보고에선 같은 사건을 *큐레이터 관점*에서 재구성** (Claude가 배울 것·내가 알 것 외에 "공부 카드" 추가). 두 노트 끼리는 cross-link.

---

## 7. ⏰ 스케줄링 / 자동화

### v0 (수동 트리거 모드)
- **선장이 *"오늘 LLM Wiki Daily 부탁"* 한 마디 보내면** 샹디가 1~2시간 안에 작성.
- 이걸 1~2주 돌려보고 포맷 안정화 검증.

### v1 (반자동 모드)
- 매일 오전 9시 KST: 샹디가 자동으로 1차 수집 → vault `_inbox/`에 raw 저장
- 매일 오후 8시 KST: 선장이 *"마무리 부탁"* 보내면 샹디가 정제 후 일일 보고 완성
- 텔레그램으로 Top 3만 회신

### v2 (완전 자동)
- launchd / cron으로 매일 22:00 KST 자동 발행
- 선장은 텔레그램 알림만 받고, vault 확인은 선택
- **단**: 발행 *전* 검토 게이트 한 단계 (anti-RSI 원칙 — Anthropic 보고서가 강조한 그 게이트)

---

## 8. 📚 선장 학습 트래킹 — 핵심 차별점

> [!important] 선장 발언 *"나도 이해하고 공부할 수 있도록"* 가 미션 코어

### 매일 학습 카드 1개 (개념 사전)
- 일일 보고마다 **"오늘의 학습 카드"** 섹션 의무화
- 한 개념 = 5줄: 정의 / 왜 중요 / 우리 시스템 연결 / 더 깊이 / 한 줄 인용
- 누적 → `llm-wiki-learning/` 폴더가 *선장 전용 LLM-WIKI 개념 사전*으로 진화

### 주간 학습 회고 (매주 일요일)
- 그 주 7개 학습 카드 종합 → "이번 주 새로 안 5가지"
- 선장이 *"내가 뭘 배웠지?"* 한 번에 확인 가능

### 월간 학습 누적도 표시
- 월말 회고에 *"이번 달 새 개념 N개 / 누적 M개"* 명시
- 1년 뒤 *"내가 LLM Wiki 도메인 N개 개념 알게 됨"* 정량 가시화

---

## 9. ⚠️ 약점 / 모를 점 (정직 보고)

> [!danger] v0의 명백한 한계

1. **WebFetch 의존도**: 외부 사이트 차단(Cloudflare/CloudFront)이면 자료 못 받음. → Wayback Machine 우회 패턴 검증됨(Life Bio 사례). 다만 시간 비용 +α.
2. **X(Twitter) 직접 크롤 어려움**: 로그인 필요. → Karpathy/Simon Willison 등은 본인 블로그·뉴스레터 우선, X는 secondary.
3. **arXiv 분량**: 매일 새 논문 50~200건 → 키워드 필터 후 *제목만* 봐도 100건. 모두 정독 불가. → 키워드 매칭 + 인용수 기준 Top 5만 정독.
4. **중복 큐레이션**: 기존 ai-digest와 50% 겹칠 수 있음. → 도메인 D1~D6로 좁히고, 같은 사건은 *관점만* 달리.
5. **선장 한국어 컨텍스트**: 영어 원문이 대부분 → 번역 품질이 핵심. 직역 X, *의역 + 한국 PKM 맥락 추가* 의무.
6. **로컬 LLM 못씀**: 현재 Claude(나)만으로 작동 — 로컬 LLM 깔리면 일부 정찰을 위임 가능.
7. **v1.2 글쓰기 가이드 §22~26 적용 여부**: 이건 *딥리서치*용. 일일 보고는 §22~26 *간이판*으로 — 매일 풀골격 쓰면 분량 폭주.
8. **검증 게이트**: Anthropic RSI 보고서 권고처럼, 발행 전 선장 검토 반드시. → v2 자동 모드에도 *발행-1시간 전 텔레그램 프리뷰* 박아두기.

---

## 10. 🚦 결정 필요 사항 (선장 입력 대기)

> [!question] 초안 → 가동 전 결정해주세요

| # | 결정 사항 | 옵션 |
|:---:|:---|:---|
| **Q1** | 도메인 6개(D1~D6) 비중 | 그대로 / 추가/제외 |
| **Q2** | 일일 보고 분량 | 짧게(~600자) / 중간(~1500자) / 길게(~3000자) |
| **Q3** | 스케줄 v0/v1/v2 시작점 | v0 수동 → 안정화 후 v1 |
| **Q4** | 텔레그램 회신 | Top 3만 / 학습카드 1개 포함 / 전부 |
| **Q5** | 기존 ai-digest 통합 여부 | 통합 / 분리 유지(권장) |
| **Q6** | 발행 시각 | 오전 9시 / 저녁 8시 / 밤 10시 |
| **Q7** | 영어 인용문 한국어 번역 | 원문 병기 / 번역만 / 짧은 인용은 원문 |

---

## 11. 📋 첫 7일 운영 계획 (선장 승인 후)

> [!success] 가동 후 첫 일주일

- [ ] D-Day: 미션 v0.2 확정 → `llm-wiki-daily/` 폴더 신설 → 첫 일일 보고 발행 📅 2026-06-08
- [ ] Day 2~7: 매일 발행, 보고 끝에 *"오늘 포맷 피드백"* 한 줄 받기
- [ ] Day 7 (일): 첫 주간 정리 발행 + 포맷 v0.2 → v0.3 갱신 📅 2026-06-14
- [ ] Day 30: 첫 월간 회고 + 미션 v1.0 정식 승인 📅 2026-07-07

---

## 12. 🔗 관련 노트

- [[index]] — llm-wiki 홈
- [[2026-06-06-ai-digest]] — 기존 AI 일간 다이제스트 (유지·차별)
- [[index/index-ai-frontier]] — AI 프론티어 인덱스
- [[Obsidian_예쁜_글쓰기_가이드]] — 글쓰기 표준 (v1.2 §22~26 딥리서치용)
- [[persona-nami]] — 페르소나 스펙
- [[guide]] — llm-wiki 사용 설명서

---

## 📎 부록 A — 미션 영문 요약 (LLMs.txt 호환)

```
# LLM-WIKI Curator Mission v0 (Shandi)
This bot curates daily signals from 6 domains:
D1 LLM Wiki / Karpathy pattern, D2 Memory governance, D3 Skills/Agents,
D4 PKM x AI, D5 Local LLM, D6 Safety.
Output: daily, weekly, monthly notes in ~/llm-wiki/content/notes/llm-wiki-{daily|weekly|monthly}/.
Always include 1 learning card per day for the captain.
Sources: arXiv, Anthropic/OpenAI/DeepMind research, HN, r/LocalLLaMA, Simon Willison, Karpathy, Latent Space.
Constraints: avoid noise, prefer primary sources, dual-layer (raw + insight),
korean translation with PKM operator context.
```

---

> [!quote] 샹디 한마디 ⚔️🍊
> 큰 방향은 선장이 정해줘. 이 헌장이 마음에 들면 *"Q1~Q7 답해줄게"* 한 마디만 — 그러면 v0.2 확정하고 내일 첫 일일 보고 발행 가능. 마음에 안 들면 *"이 섹션 다시"* — 통째로 다시 짜줄게. 미션의 핵심은 **선장 학습 누적**이라는 점만 잊지 않을게.
