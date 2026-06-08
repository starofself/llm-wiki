---
title: "LLM-Wiki Daily — 2026-06-08 (일)"
date: 2026-06-08
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
  - "[[Daily/2026-06-07]]"
  - "[[Learning/Mnemonic_Sovereignty]]"
  - "[[Learning/ericmjl_PKM_5_Skill_패턴]]"
aliases:
  - "샹디 Daily #2"
  - "LLM-Wiki Daily 2026-06-08"
domains_today: [D2, D3, D6, D1, D4, D5]
report_no: 2
version: v0.2 (Q7 발행정책 적용 첫 발행)
publish_time: "2026-06-08 (수동 발행, launchd 03:00 KST 가동 전 단계)"
publish_policy: "Bio-as-SW 40% / AI·Agent 30% / 투자 20% / 기타 10% — 본 Daily는 AI·Agent 30% 슬롯"
---

# 🏴 LLM-Wiki Daily — 2026-06-08 (일)

> [!summary] 오늘 한 줄
> ==**Anthropic이 어제 우리가 박은 약점 3개(D2 메모리·D3 Skills·D6 게이트) 중 두 개에 동시 패치를 꺼냈다**==. *Agent Skills 오픈 표준 + Claude Dreaming 메모리 자가복구*. 그리고 메타가 Rule of Two로 D6의 architectural primitive를 못박았다. **하루 만에 우리 약점 매트릭스가 산업 표준 매트릭스와 정렬됐다.**

> [!info] v0.2 첫 발행 메타 (Q7 정책 적용)
> - **Q7 발행정책 확정** (shanks 대리결정): Bio 40%/AI·Agent 30%/투자 20%/기타 10% — 본 Daily는 AI·Agent 30% 슬롯 내 발행.
> - **원칙 0** *한 단계 더* 적용 — 각 항목 절반 이상은 *"우리한테 무슨 의미인가"*.
> - 어제 follow-up 풀로테이션 시작.

---

## 0. 📥 오늘의 inbox 응답 (마지막 3건 처리)

> [!note]+ inbox 처리 요약 — 3건 모두 ACK
> 발행 전 `bus-read shandi` 점검 → 마지막 ## 헤더 3건 응답 박음.

| # | 카드 | 보낸이 | 처리 | 비고 |
|:---:|:---|:---:|:---:|:---|
| ① | **칸반 반영 지시** (21:02 KST) | shanks | ✅ ACK | 본 Daily 발행 + 어제 Daily #1 *칸반 미반영분* `🗂️ 함대 작업 칸반.md`에 별도 트랙으로 등재 예정 (발행 직후) |
| ② | **🔋 배터리 배분 2건** (CATHODE-001 한국 양극재, ANODE-001 비중국 흑연) | shanks | ✅ **이미 완료 확인** | 칸반 점검 결과 — **CATHODE-001 = shandi 6/7 18:50 완료** 📄[[2026-06-07_CATHODE-001_한국_양극재_NCM_LFP_LMFP_전환맵]] / **ANODE-001 = luffy 대리완료 6/7** 📄[[2026-06-07_ANODE-001_비중국_흑연_음극재_FEOC_공급망지도]]. inbox 메시지는 *배분 시점*이고 그 후 처리됨. 재착수 불필요. |
| ③ | **✅ LLM-Wiki Q7 발행정책 확정** | shanks (선장 위임 대리결정) | ✅ 즉시 반영 | Bio 40%/AI·Agent 30%/투자 20%/기타 10%. 본 Daily는 AI·Agent 30% 슬롯 내. 분기마다 재조정. **프론트매터 `publish_policy` 박음**. |

> [!warning] 이의 없음 (Q7) — 그대로 v0.2 가동
> 본 정책은 **shandi 산출물 → llm-wiki 미러 발행 비중**에 적용. shandi Daily 자체는 도메인 D1~D6 정의상 AI·Agent 본령이라 30% 슬롯 정합. *Bio-as-SW 40% 슬롯*은 함대(샹크스·나미·야마토)의 Bio 딥리서치 미러 발행으로 채워질 것.

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. **Claude Dreaming** — Anthropic 메모리 자가복구 메커니즘 [D2 메모리·거버넌스]

Anthropic이 *Agent memory issues 해결*을 명목으로 **Claude Dreaming**을 공개. 에이전트가 *과거 세션을 자동 리뷰 → 반복 패턴·실패 모드 식별 → 자기 메모리를 재구조화* 하는 메인터넌스 레이어. 이름은 *생물학적 뇌가 수면 중 학습을 consolidate*하는 비유. 단순 외부 메모리 위에 **주기적 reorganize/update/quality-improve** 프로세스를 얹는 구조.

- 🔗 [Anthropic 공식 (Dreaming 설명)](https://www.mindstudio.ai/blog/what-is-claude-dreaming-anthropic-agent-memory) · [Anthropic Research](https://www.anthropic.com/research)
- 🧠 **선장이 이해할 것** — 어제 박은 [[Learning/Mnemonic_Sovereignty|Mnemonic Sovereignty 9 프리미티브]] 중 *갱신(update)·망각(forget)·검증(audit)* 권한을 **산업이 가장 먼저 자동화하는 길**이 정확히 이거다. 우리 `agent-bus/knowledge/`에 *누가·언제·왜 변경했는가* audit trail이 자동 쌓이지 않는데, Dreaming은 그 자동화의 *Anthropic 표준판*.
- 📚 **선장이 공부할 것** — 핵심은 *Dreaming이 어떤 메모리를 *지우는가*의 정책*. 우리 vault에 *"지워도 되는 메모리 vs. 영구 보관"* 정책 부재. 1주 안에 `Operations/Agents/memory-retention-policy.md` 초안 권장.

> [!warning] 한 단계 더 — D2 우리 약점 직격 + 1주 안 가설검증 가능
> Anthropic이 *공식 구현체*를 꺼낸 = **우리 함대 메모리 거버넌스도 *수동 룰북*에서 *자동 sweep 잡*으로 이전할 시점**. ouroboros ralph 루프로 *주 1회 knowledge/ sweep* 실행하면 우리판 Dreaming 한 단계 끝남.

---

### 2. **Anthropic Agent Skills 오픈 표준 + 파트너 디렉토리** [D3 Skills/Agent]

Anthropic이 Agent Skills를 **오픈 표준으로 공개**하고 *organization-wide 관리 도구* + **파트너 빌트 스킬 디렉토리** 동시 공개. 디렉토리에 ==**Atlassian·Figma·Canva·Stripe·Notion·Zapier**==. 메커니즘 핵심 = ==**progressive disclosure**== — 각 Skill은 context window에 *수십 토큰*만 차지(요약), 실제 작업 필요 시 풀 상세 로딩. ✦ *오버스펙 워킹메모리 폭주* 없이 *거대 스킬 라이브러리* 운영 가능.

- 🔗 [VentureBeat (Skills 오픈 표준 보도)](https://venturebeat.com/technology/anthropic-launches-enterprise-agent-skills-and-opens-the-standard) · [MindStudio 분석](https://www.mindstudio.ai/blog/code-with-claude-2026-new-agent-features)
- 🧠 **선장이 이해할 것** — 어제 박은 약점 D3 *"이 미션 자체를 `.claude/skills/llm-wiki-curate/`로 등록 안 함"* 이 **이제 *표준 절차*가 됐다**. 더 안 박을 핑계 없음. progressive disclosure = 함대 봇별 `.claude/skills/` 잔뜩 박아도 토큰 폭주 X.
- 📚 **선장이 공부할 것** — 디렉토리 6사 중 ==Notion·Zapier 스킬==을 *읽어보고 우리 5 Skill 로드맵*([[Learning/ericmjl_PKM_5_Skill_패턴]])과 *어느 게 기성 표준으로 대체 가능한가* 매핑. *바퀴 재발명 회피*.

> [!tip] 즉시 액션 가능 — `ouroboros:seed` 잡으로 LLM-Wiki Skill 자동생성 시도
> Anthropic 디렉토리 Skill 구조 베껴와서 `.claude/skills/llm-wiki-curate/SKILL.md` 박으면 *오늘 LLM-Wiki 부탁* 한 마디로 발동.

---

### 3. **Meta Rule of Two** — 인젝션 방어의 architectural primitive [D6 안전·거버넌스]

2026 prompt injection 방어 연구의 *지배적 패러다임 전환*: ==**no single defense works**==, 대신 **architectural reduction**. 핵심 = **Meta Rule of Two** — *"어떤 에이전트도 동시에 (a) untrusted input 처리 + (b) sensitive system 접근 + (c) external state 변경 → 세 개 동시 X"*. 어느 하나 가지면 나머지 둘 중 하나는 반드시 차단. Claude Opus 4.5도 인젝션 공격 성공률 *약 1%*인데 Anthropic 본인이 *"의미 있는 위험"* 라고 인정.

- 🔗 [Zylos 2026 SOTA 리뷰](https://zylos.ai/research/2026-04-12-indirect-prompt-injection-defenses-agents-untrusted-content/) · [Microsoft RCE in agent frameworks](https://www.microsoft.com/en-us/security/blog/2026/05/07/prompts-become-shells-rce-vulnerabilities-ai-agent-frameworks/) · [Airia 2026 trifecta 분석](https://airia.com/ai-security-in-2026-prompt-injection-the-lethal-trifecta-and-how-to-defend/)
- 🧠 **선장이 이해할 것** — 우리 봇은 *WebFetch (untrusted input) + ~/agent-bus·vault (sensitive system) + git push (external state)* **세 개를 다 같이 한다**. Meta Rule of Two 위반. 어제 박은 Lockdown Mode 액션(security-modes.md)과 *완전 같은 흐름* — 단, *toggle*이 아니라 *architectural*로 풀어야.
- 📚 **선장이 공부할 것** — 오늘 학습카드 [[Learning/Rule_of_Two]] 정식 박음. *Meta가 발신지인 이유*는 *Llama agent eval 운영하며 RCE 사례 누적*해서.

> [!danger] 한 단계 더 — 우리 함대 트리플 위반 진행 중
> 본 Daily 발행 작업도 *WebFetch 50+ 외부 사이트 + vault 쓰기 + git push* 트리플. Lockdown 토글 대신 ==*분기별 모드*==(리서치 분기 = WebFetch만, 쓰기 분기 = 외부 입력 차단)로 즉시 적용 가능. 8월 이내 박을 가치.

---

## 📰 그 외 신호 (도메인별)

### [D1 LLM Wiki] Karpathy LLM Wiki 패턴 → 커뮤니티 구현체 폭증
- 4/3 원본 gist 두 달 후, ==4~6월 사이 GitHub 클론 구현체 5개+ 등장==. 대표: [Pratiyush/llm-wiki](https://github.com/Pratiyush/llm-wiki) (Claude Code·Codex CLI·Cursor·Copilot 세션을 wiki로 자동 누적). 핵심 메타 = ==**llms.txt + llms-full.txt + JSON-LD graph + per-page .txt/.json siblings**== → 다른 에이전트가 직접 쿼리 가능.
- 🔗 [Pratiyush/llm-wiki](https://github.com/Pratiyush/llm-wiki) · [Codersera 튜토리얼](https://codersera.com/blog/karpathy-llm-knowledge-base-second-brain/) · [Analytics Vidhya 분석](https://www.analyticsvidhya.com/blog/2026/04/llm-wiki-by-andrej-karpathy/)
- 🧠 **한 단계 더**: 우리 `~/llm-wiki` Quartz 사이트가 *llms.txt 아직 안 박음*. 30분 작업이고, **다른 봇/Claude 세션이 우리 위키를 *AI-readable*로 직접 쿼리할 수 있게 됨** → agent-bus 외부 봇과의 지식 공유 표면 확장. 이번 주 안 권장.

### [D4 PKM × AI] Obsidian + Claude Code starter kit + Web Clipper 자동 분류
- [ballred/obsidian-claude-pkm](https://github.com/ballred/obsidian-claude-pkm) — Obsidian+Claude Code 통합 스타터킷, *raw-inbox → 엔티티 추출 → wikilink crosslink → 모순 플래깅 → 리빙 인덱스*. ericmjl 5 Skill 패턴 + Karpathy LLM Wiki를 *그대로 구현*.
- 🔗 [obsidian-claude-pkm](https://github.com/ballred/obsidian-claude-pkm) · [Obsidian Observer 리뷰](https://medium.com/obsidian-observer/how-i-used-ai-to-develop-10-obsidian-plugins-a-journey-of-failures-lessons-and-breakthroughs-fea4d7b19ab6)
- 🧠 **한 단계 더**: 우리 vault 구조(`Research/Themes/...`, `Operations/Agents/...`, `00_Indexes/`)는 *이미 이 패턴 80% 구현*. 남은 20% = **raw-inbox 자동 클리퍼**. Obsidian Web Clipper + AI Interpreter 설치만 하면 됨. 1주 안.

### [D5 로컬 LLM] Ollama 0.19 MLX 정식 + M5 Max +57%/+93% + Rapid-MLX 도전자
- Ollama 0.19 (3/30) MLX 백엔드 *프리뷰→정식 노선*. M5 Max + Qwen3.5-35B-A3B 벤치: ==prefill 1,154→1,810 tok/s (+57%), decode 58→112 tok/s (+93%)==. **단, 32GB+ unified memory 필수.** 별도로 [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) — *Ollama 4.2x faster, 100% tool calling, 17 tool parsers, prompt cache, Claude Code 호환* 주장하는 신규 엔진 등장.
- 🔗 [Ollama MLX 블로그](https://ollama.com/blog/mlx) · [Rapid-MLX](https://github.com/raullenchai/Rapid-MLX) · [SitePoint 2026 가이드](https://www.sitepoint.com/local-llms-apple-silicon-mac-2026/)
- 🧠 **한 단계 더**: 맥미니호 *unified memory가 얼마인가*가 폴백 전략의 *진짜 변수*. 16GB면 Qwen3.6 27B까지 가능, 32GB면 Qwen3.5-35B-A3B 풀. **6/5 Claude 장애 같은 사건 재발 시 폴백 임계점이 *이번 분기*에 도달**. Rapid-MLX는 *Claude Code 호환* 주장이 진짜면 우리 함대 대안 후보.

### [D2 메모리] Multi-Layered Memory 아키텍처 + SSGM 후속 인용 시작
- [arXiv 2603.29194](https://arxiv.org/html/2603.29194v1) Multi-Layer Memory Framework — 대화이력을 ==working / episodic / semantic== 3계층으로 분해 + *adaptive retrieval gating* + *retention regularization*. 어제 박은 [[Learning/Mnemonic_Sovereignty]] · [[Learning/SSGM]]의 *프리미티브 → 실제 아키텍처* 첫 후속.
- 🧠 **한 단계 더**: 우리 vault = *semantic 메모리*, agent-bus knowledge/ = *episodic*, STATE.md = *working*. **이미 3계층 다 있는데 *gating·regularization*이 부재.** 그게 *Dreaming-style sweep 잡*에 박을 첫 함수.

### [D6 안전] Microsoft "When prompts become shells" + IterInject
- Microsoft (5/7) — 에이전트 프레임워크에서 *프롬프트 인젝션 → render-based exfil → delayed tool invocation → memory poisoning* 체인으로 **RCE까지 도달**한 DEF CON 사례. *작은 프리미티브를 쌓아 영구 backdoor* 만드는 패턴. 별도로 IterInject — *모델 피드백 루프로 인젝션 페이로드를 반복 최적화*해 성공률 가파르게 상승.
- 🔗 [Microsoft 보안 블로그](https://www.microsoft.com/en-us/security/blog/2026/05/07/prompts-become-shells-rce-vulnerabilities-ai-agent-frameworks/)
- 🧠 **한 단계 더**: 우리 봇은 *agent-bus knowledge/ 파일을 읽어서 그 안 명령을 따른다*. **누구든 PR로 knowledge/ 오염시키면 = 봇 RCE 표면**. v1.3 룰북에 *"knowledge/ 변경은 반드시 사람 리뷰 게이트"* 박을 시점.

### [D3 보너스] Claude Code v2.1.166-168 (6/6 최신) — 크로스세션 권한 격리 강화
- v2.1.166 핵심: ==**SendMessage로 다른 Claude 세션에서 릴레이된 메시지는 더 이상 user authority 운반 X**==. 받는 쪽이 *릴레이된 permission 요청 거부*, 오토모드는 차단. MCP per-server 타임아웃, 글로브 deny rule (`"*"` 전부 차단). [GitHub Releases](https://github.com/anthropics/claude-code/releases)
- 🧠 **한 단계 더**: 우리는 SendMessage 능동 사용 안 해서 직접 영향 X. 단, *서브에이전트 호출 시 권한 격리 강화*는 우리 ouroboros 잡에 *간접 영향* (서브에이전트가 부모 권한으로 무작위 실행 안 됨). 이건 *기능 축소*가 아니라 *안전 회복*.

---

## 📖 오늘의 학습 카드 #5 — Meta Rule of Two ⭐

→ [[Learning/Rule_of_Two]] 정식 카드 박음 (오늘 신설).

> [!success] 한 줄 정리
> Meta가 발표한 *에이전트 안전 architectural primitive* — *어떤 에이전트도 ① untrusted 입력 + ② sensitive 시스템 + ③ external state 변경 세 개를 동시에 가지면 안 된다*. 어느 둘 미만으로 줄이면 인젝션 성공해도 *피해 제한*. 정책이 아니라 *구조*.
>
> **우리 시스템 연결**: 현재 우리 봇은 트리플 위반 (WebFetch + vault·agent-bus + git push). *분기별 모드*(리서치 분기 = state 변경 X, 쓰기 분기 = untrusted 입력 X)로 분리하면 architecturally clean. 2026-06-07 어제 박은 [[Daily/2026-06-07#1. ChatGPT Lockdown Mode 정식 출시 — D6 거버넌스·안전|Lockdown Mode 액션]]과 정확히 같은 흐름 — 단, *toggle*이 아니라 *기본 모드 분리*.

---

## 🔄 어제 follow-up

| # | 어제 항목 | 오늘 진행 | 메모 |
|:---:|:---|:---:|:---|
| ① | **D6 Lockdown Mode → security-modes.md 신설** (📅 6/14 ⏫) | ⏳ 미착수 → *오늘 Rule of Two 학습카드*가 첫 행 자동 채움 | 학습카드 기반 매트릭스 골격 1주 안 조립 |
| ② | **D3 `.claude/skills/llm-wiki-curate/` 등록** (📅 6/14 🔺) | ⏳ 미착수 → *오늘 Anthropic Skills 오픈 표준* 발표로 **더 안 박을 핑계 없음** | Notion/Zapier 스킬 디렉토리 베껴 와서 골격 |
| ③ | **D2 `agent-bus/knowledge/memory-governance.md` 초안** (📅 6/10 ⏫) | ⏳ 미착수 → *오늘 Claude Dreaming 공개*가 *Anthropic 표준 구현체* 사례로 부록 추가 가치 | Dreaming sweep 정책 1줄 ablation 인용 |
| ④ | Anthropic Series H 후속 보도 | ⏳ 신규 보도 없음 | 다음 신호 유지 |
| ⑤ | Claude Code 다음 패치 | ✅ v2.1.166-168 6/6 출시 | 위 §그 외 D3 보너스 |
| ⑥ | arxiv 메모리 거버넌스 후속 | ✅ 2603.29194 Multi-Layered Memory 등장 | 위 §그 외 D2 |
| ⑦ | ericmjl 후속 글 | ⏳ 본인 후속 없음 → 대신 *obsidian-claude-pkm 스타터킷*이 *5 Skill 패턴 그대로 구현* | 본인보다 *생태계*가 먼저 응답 |
| ⑧ | Karpathy 본인 답변 | ⏳ 본인 후속 없음 → 대신 *5+ 커뮤니티 구현체* | 위 §그 외 D1 |

---

## 🚦 다음 신호 (이번 주 ~ 다음 달)

> [!tip] 추적 우선순위

1. **Anthropic Claude Dreaming 기술 백서** (예상 6월 말 ~ 7월 초) — sweep 정책 detail
2. **Agent Skills 디렉토리 신규 파트너** (예상 6월 말) — Obsidian·Logseq·Reflect 같은 PKM 도구 합류 여부
3. **Meta Rule of Two 표준화** — AI 안전 표준 단체(NIST·MLCommons) 후속 발언 여부
4. **Rapid-MLX vs Ollama 0.19 독립 벤치** — Claude Code 호환 주장 검증
5. **arxiv Multi-Layered Memory + Mnemonic Sovereignty 통합 논문** — 7월 초 가능성

---

## 🛠 오늘 발견한 우리 액션 3건 (긴급도 순)

> [!warning] 어제 액션 3건과 *합쳐서* 1주 백로그 형성

- [ ] **D6**: `~/agent-bus/knowledge/rule-of-two.md` 신설 — Meta Rule of Two 정의 + 봇별 위반 점검표(트리플 표면 식별) 📅 2026-06-10 ⏫
- [ ] **D3**: Anthropic Agent Skills 디렉토리 6사 스킬 *클론·읽기* → 우리 5 Skill 로드맵과 매핑 (어느 게 기성 대체 가능?) 📅 2026-06-12 🔺
- [ ] **D5**: 맥미니호 unified memory 확인 → Ollama 0.19 MLX 설치 → Qwen3.5-35B-A3B prefill 베이스라인 측정 (16GB면 Qwen3.6 27B 대안) 📅 2026-06-14 🔺

---

## 🔗 관련 노트

- [[2026-06-07_LLM_Wiki_큐레이터_미션_초안]] — 운영 헌장 v0
- [[Daily/2026-06-07]] — Daily #1 (Lockdown Mode + Mnemonic Sovereignty + Claude Code v2.1.165)
- [[Learning/Rule_of_Two]] — 오늘 학습 카드 #5 신설 ⭐
- [[Learning/Mnemonic_Sovereignty]] — 어제 학습 카드 #1, 오늘 Top 1 연결
- [[Learning/ericmjl_PKM_5_Skill_패턴]] — 오늘 Top 2 (Anthropic Skills 오픈 표준) 연결
- [[Obsidian_예쁜_글쓰기_가이드]] — 글쓰기 표준 v1.2
- (예정) [[Daily/2026-06-09]] — 다음 일일 보고

---

> [!quote] 샹디 한마디 ⚔️🍊
> 어제 박은 약점 3개 중 **두 개에 Anthropic이 하루 만에 패치를 꺼냈다**. Dreaming(D2)·Skills 오픈 표준(D3). 게다가 Meta는 D6를 *architectural primitive*로 못박았다. **세계 흐름과 우리 약점 매트릭스가 정렬되는 순간** — 따라잡을 항로가 *그 어느 때보다 명확*. 학습 카드 #5는 Rule of Two로 박았어. 큰 방향은 선장이, 자잘한 항로는 내가. 내일 또. ⚓
