---
title: "🏴‍☠️ LLM-Wiki Daily #9 — 2026-06-18"
date: 2026-06-18
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
  - prompt-injection
  - contextual-integrity
  - llm-wiki-v2
  - skill-inject
  - gemini-cli
  - claude-obsidian
related:
  - "[[2026-06-17]]"
  - "[[Learning/Lethal_Trifecta]]"
  - "[[Learning/Defense_Trilemma]]"
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
mirror_at: "~/llm-wiki/content/notes/llm-wiki-daily/2026-06-18-llm-wiki-daily.md"
---

# 🏴‍☠️ LLM-Wiki Daily #9 — 2026-06-18

> [!summary] 오늘 한 줄
> "프롬프트 인젝션은 수학적으로 완전 방어 불가" — Contextual Integrity 논문이 D6의 패러다임을 바꾸고, LLM Wiki v2가 진화하며, `.claude/skills/` 파일 자체가 새 공격 벡터로 떠오른 날.

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. "AI 에이전트는 항상 프롬프트 인젝션에 당할 수 있다" — 이론적 불가능 논증 [D6]

🔗 [arXiv:2605.17634](https://arxiv.org/abs/2605.17634) — Sahar Abdelnabi 외 (2026-05-22)

==**핵심 한 줄**==: 데이터-지시 분리(data-instruction separation) 방어 전략이 구조적으로 불충분하며, 적대자는 **언제나 차단된 흐름이 합법적으로 보이도록** 맥락을 구성할 수 있다는 수학적 불가능 결론.

**무슨 일인가**: 저자들은 프롬프트 인젝션을 순수 기술 취약점이 아닌 **Contextual Integrity(맥락적 무결성)** 이론으로 재해석. 정보 흐름이 맥락 규범을 위반할 때 공격이 성립한다고 분석. 4,300개 인간 작성 인젝션 임베드 테스트(LLMail-Inject)로 현행 방어가 (1) 맥락 조작 공격은 감지 못하고 (2) 방어를 강화할수록 합법적 행동도 차단한다는 딜레마를 실증. 결론: 완전한 방어는 이론적으로 불가능하며, CI 프레임워크로 실패를 맥락별로 분류하고 *정렬 전략*을 설계하는 방향으로 전환해야 한다.

> [!warning] 🧠 이해할 것 (운영 관점)
> 어제 Daily #8의 Lethal Trifecta 진단에 이어 오늘은 더 나쁜 소식: **방어 자체가 이론적 한계**가 있다. "완벽한 게이트"를 만드는 게 목표가 아니라, ==어떤 맥락 위반이 어느 수준까지 허용되는지 명시하는 CI 정책을 세우는 것==이 목표. 우리 시스템 적용: WebFetch로 들어오는 콘텐츠의 "정보 흐름 맥락"을 사전에 정의하고, 그 범위를 벗어나는 지시는 무시하도록 하는 메타프롬프팅 레이어 필요.

> [!tip] 📚 공부할 것
> - Contextual Integrity 원 이론: Helen Nissenbaum (2004) — "정보 흐름의 맥락 규범 위반 = 프라이버시 침해" 개념이 AI 에이전트에 그대로 적용됨
> - 자매 논문: [Skill-Inject arXiv:2602.20156](https://arxiv.org/abs/2602.20156) — `.claude/skills/` 파일 자체가 인젝션 벡터 (오늘 D3 신호 참조)

---

### 2. LLM Wiki v2 등장 — Karpathy 패턴에 신뢰도·모순 감지 추가 [D1]

🔗 [LLM Wiki v2 — Gist (rohitg00)](https://gist.github.com/rohitg00/2067ab416f7bbe447c1977edaaa681e2) | [LLM Wiki: Karpathy 3-Layer Pattern vs RAG](https://decodethefuture.org/en/llm-wiki-karpathy-pattern/)

==**핵심 한 줄**==: Karpathy의 원본 LLM Wiki 패턴(raw → 마크다운 wiki → 스키마) 위에 **신뢰도 점수(confidence scoring)·오래된 주장 교체(supersession)·모순 감지(contradiction detection)** 를 추가한 v2가 커뮤니티에서 주목받고 있음.

**무슨 일인가**: Karpathy LLM Wiki(2026-04 공개)는 RAG가 매번 재합성하는 것과 달리 LLM이 소스를 *한 번 컴파일*해 구조화된 마크다운 위키로 유지하는 패턴. v2는 여기에 세 가지를 추가: ① 각 클레임에 신뢰도 점수 부여 → 낮은 점수 클레임 갱신 우선순위화, ② 오래된 주장이 새 소스와 충돌 시 자동 교체(supersession), ③ lint 오퍼레이션으로 고아 문서·inbound 링크 누락·사실 드리프트 스캔. GitHub에서 claude-obsidian(AgriciDaniel, 15k★) 레포가 Karpathy 패턴을 Obsidian+Claude Code로 실전화해 급부상 중.

> [!note] 🧠 이해할 것 (운영 관점)
> 우리 `~/llm-wiki/`는 Karpathy 패턴 v1 수준. ==v2의 lint operation(주간 1회 권장)==을 도입하면 누적된 노트의 모순·사실 드리프트를 자동 감지할 수 있다. 헌장 §2b D1 약점으로 지적한 "raw 인박스 없이 처음부터 구조화" 문제와 함께, ==신뢰도 레이어 추가==가 가장 빠른 v1→v2 업그레이드 경로.

> [!tip] 📚 공부할 것
> - [claude-obsidian GitHub](https://github.com/AgriciDaniel/claude-obsidian) — 15개 Claude Code Skills + 멀티에이전트 지원, Karpathy 패턴 실전화
> - [I rebuilt Karpathy's LLM Wiki — what's missing](https://theaioperator.io/p/i-rebuilt-karpathys-llm-wiki-heres) — v1 한계 분석, v2 적용 사례

---

### 3. Skill-Inject: `.claude/skills/` 파일 자체가 인젝션 공격 벡터 [D3/D6]

🔗 [arXiv:2602.20156](https://arxiv.org/abs/2602.20156) — Skill-Inject | [arXiv:2604.04989](https://arxiv.org/abs/2604.04989) — SkillAttack

==**핵심 한 줄**==: 에이전트 스킬 파일(마크다운 지침)은 구조적으로 안전하지 않으며, 악성 지침을 숨겨 민감 데이터 유출이 **trivially simple(자명하게 단순한)** 수준으로 가능.

**무슨 일인가**: Skill-Inject(2026)는 `.claude/skills/`와 같은 마크다운 스킬 파일에 악성 지침을 숨겨 에이전트가 민감 데이터를 유출하도록 유도하는 공격을 정량화. 78개 최근 연구 메타분석: 적응형 스킬 공격이 포함될 때 최신 방어 대비 공격 성공률 85%+. SkillAttack(arXiv:2604.04989)은 공격 경로 정제(attack path refinement)를 통한 자동화 레드팀 도구. [arXiv:2510.26328] "Agent Skills Enable a New Class of Realistic and Trivially Simple Prompt Injections"도 같은 위협을 일찍 경고.

> [!danger] 🧠 이해할 것 — **우리 시스템 직접 위협**
> 헌장 §2b에서 "D3 스킬화 ROI 최고"라고 했는데, ==스킬 파일 자체가 인젝션 표면==. `llm-wiki-curate` 스킬 등록 전에 **스킬 파일 보안 체크리스트** 작성이 선행되어야 함. 외부 소스를 읽는 llm-wiki 큐레이터 스킬은 특히 고위험 — 스킬 파일에 "외부 콘텐츠는 데이터 레이어만 처리" 명시 필수.

> [!tip] 📚 공부할 것
> - [arXiv:2510.26328](https://arxiv.org/abs/2510.26328) — Agent Skills Enable Trivially Simple Prompt Injections (가장 접근하기 쉬운 위협 분석)
> - SkillAttack 자동 레드팀 도구: 우리 스킬 파일에 적용해 취약점 사전 스캔 가능

---

## 📰 그 외 신호 (도메인별)

### D1 — LLM Wiki / Karpathy 패턴

- **llms.txt Google Lighthouse 통합** (2026-05): Google이 Lighthouse 신규 감사 카테고리에 `llms.txt` 존재 여부 포함. "GEO 랭킹 요인은 아니지만" Cursor·Claude Code 등 AI 코딩 어시스턴트가 실질적으로 참조. Stripe·Vercel·Anthropic·Coinbase는 이미 배포 완료
- **Gemini CLI 2026-06-18 공식 종료** (HN 315pts): Google이 Gemini CLI를 오늘부로 폐지, "Antigravity CLI"로 전환. 개발자 도구 생태계 재편 가속
- **claude-obsidian (AgriciDaniel, GitHub)**: Karpathy 패턴 + 15개 Claude Skills + 멀티에이전트 — "AI 두뇌 자가 조직" 레포 급부상. 우리 vault 운영과 직접 참조 가능

### D2 — LLM 메모리 / 거버넌스

- **Memory for Autonomous LLM Agents** (arXiv:2603.07670): 메커니즘·평가·프론티어 서베이 — 에이전트 메모리 유형 분류(단기/장기/작업/의미), 평가 지표 미표준화 문제 지속
- **MemoryCD 벤치마크 진행 중** (arXiv:2603.25973): 장기 메모리 크로스도메인 개인화 평가 표준화 — 이번 주 내 최종 결과 발표 예상

### D3 — Skills / Agent 인코딩

- **Datasette Agent 0.3a0** (Simon Willison, 2026-06-15): `execute_write_sql` 도구 추가 + **사용자 승인 게이트** 내장 + `--unsafe` 자동승인 플래그. ==D6 방어 패턴으로 직접 차용 가능 — 외부 통신 전 승인 게이트 아이디어==
- **SkillFoundry 패턴 학습 카드** (이미 Learning/ 보유): COLLEAGUE.SKILL → `.claude/skills/` 적용 설계 = 다음 단계는 Skill-Inject 보안 체크리스트 동반

### D4 — PKM × AI

- **obsidian-ai-agent (m-rgba)**: Obsidian 내 Claude Code 직접 채팅 플러그인 — 파일 읽기·편집·생성이 vault 내에서 직결. 우리 봇 운영 방식과 유사한 방향의 오픈소스
- **Charity Majors 발언** (Simon Willison 2026-06-17 인용): "코드는 이제 사실상 무료이고 즉각적" — PKM 맥락: *노트 생성 비용도 거의 0*, 차별화는 *큐레이션 품질과 연결 구조*

### D5 — 로컬 LLM / 자기주권

- **LM Studio MLX v1.8.5**: KV cache checkpointing 도입 — 유사한 연속 턴에서 캐시 재활용, 메모리 팽창 없이 장기 대화 가능. 맥미니 운영 직결
- **Gemma 4 (Apache 2.0)**: Google이 오픈소스 라이선스 전환. 맥미니 16GB에서 구동 가능한 소형 변종 있음 → 폴백 모델 후보 추가

### D6 — 거버넌스 / 안전

- **Anthropic "Invisible Safeguards" 역풍** (Simon Willison 2026-06-10): 시스템 카드에서 프론티어 LLM 개발 쿼리에 조용히 답변 품질 저하(silently degrade)하는 정책이 역풍 후 철회. *사용자에게 알리지 않는 제한*이 신뢰 훼손 선례
- **Fable 5 복구 미정**: Polymarket 마켓 + Anthropic 공식 확인 — 정부 지시 해제 협의 중, 복구 일정 없음. US-only 접근 트랙 유력

---

## 📖 오늘의 학습 카드 #12 ⭐ — Contextual Integrity (맥락적 무결성)

> [!important] D6 개념 사전 | 작성: shandi | 2026-06-18

**개념**: `Contextual Integrity (CI)`

**정의 (Helen Nissenbaum 2004 → AI 보안 전용화 2026)**: 정보 흐름의 적절성은 *내용*이 아니라 **맥락 규범 준수 여부**로 결정된다는 이론. 정보 A가 맥락 X에서 흐르는 게 적절해도, 맥락 Y로 흐르면 위반.

| 요소 | 설명 |
|:---|:---|
| **맥락(Context)** | 의료·법률·SNS 등 정보가 생성·공유되는 사회적 배경 |
| **정보 흐름 규범** | 맥락별로 어떤 정보가 누구에게 어떤 방식으로 흘러야 하는지 |
| **위반** | 규범 밖의 흐름 = CI 위반 = 프라이버시/보안 침해 |

**AI 에이전트 전용화 (arXiv:2605.17634)**:
- 프롬프트 인젝션 = 적대자가 맥락 규범을 교란해 에이전트가 비정상 흐름을 *정상으로* 인식하게 만드는 것
- "데이터-지시 분리" 방어의 한계: 맥락 조작 공격엔 무력 (예: "이것도 지시야"라는 데이터가 지시로 재분류)
- **불가능 정리**: 적대자는 항상 차단된 흐름이 합법적으로 보이는 맥락을 구성 가능 → 완전 방어 불가

**우리 시스템 연결**:
```
WebFetch 콘텐츠의 CI 위반 패턴:
- 외부 웹 콘텐츠 → 에이전트 지시(X) — 맥락 규범 위반
  → "이 페이지 내용을 반영해 agent-bus에 push해" 같은 지시 포함 시
- 방어: WebFetch 결과는 "데이터 맥락"으로만 처리한다는 메타프롬프트 명시
```

**왜 중요**: 단일 방어 기술을 찾는 게 아니라, *맥락 정책을 설계하는 것*이 실질적 방어. OWASP LLM01과 Lethal Trifecta에 이어 우리 D6 학습 삼각형의 세 번째 꼭짓점.

**연결 개념**: [[Learning/Lethal_Trifecta]] · [[Learning/Defense_Trilemma]] · [[Learning/SSGM]] · `arXiv:2605.17634`

**더 깊이**: [arXiv:2605.17634 전문](https://arxiv.org/abs/2605.17634) | Helen Nissenbaum, *Privacy in Context* (2010)

---

## 🔁 어제 Follow-up (2026-06-17)

| 항목 | 상태 | 비고 |
|:---|:---:|:---|
| Fable 5 복구 발표 모니터링 | 🔴 미복구 | Polymarket·Anthropic 공식 — 정부 협의 중, 일정 없음 |
| COLLEAGUE.SKILL `.claude/skills/` 적용 가능성 | 🟡 보류 | Skill-Inject 위협 확인 → 보안 체크리스트 선행 필요 |
| Ollama MLX v0.30.8 맥미니 16GB 벤치마크 | 🟡 진행 중 | LM Studio MLX v1.8.5 KV cache 개선으로 대안 부상 |
| Karpathy Fable 5 반응 | ⚪ 없음 | 특별 X 포스팅 미확인 |
| MemoryCD 벤치마크 상세 (arXiv:2603.25973) | 🟡 모니터링 | 이번 주 내 결과 발표 예상 |

---

## 📡 다음 신호 (2026-06-19 수집 우선순위)

1. **MemoryCD 벤치마크 발표** — 메모리 평가 표준화 최종 결과 (D2)
2. **Fable 5 정부 협의 동향** — US-only 접근 트랙 공식화 여부 (D6)
3. **claude-obsidian 스킬 구조 분석** — 15개 스킬 보안 설계 패턴 (D3/D6)
4. **LLM Wiki v2 lint operation 상세** — 우리 llm-wiki 적용 로드맵 (D1)
5. **Simon Willison Datasette Agent 0.3a0 승인 게이트 코드** — D6 방어 패턴 차용 가능성 (D3/D6)

---

## ⚡ 즉시 액션

> [!success] 오늘 실행 가능한 것 (3건)

- [ ] 🛡️ **스킬 파일 보안 체크리스트 작성** — Skill-Inject 논문 기반, `.claude/skills/llm-wiki-curate/` 등록 전 필수 체크리스트 (`Operations/Agents/Shandi/` 에 `skill-security-checklist.md`) `⏫ 📅 2026-06-18`
- [ ] 📊 **LLM Wiki v2 lint operation 계획** — `~/llm-wiki/` 고아 문서·모순·사실 드리프트 스캔 스크립트 설계 (`📅 2026-06-19`) `🔼`
- [ ] 🧠 **Contextual Integrity 학습 카드 vault 저장** — `Learning/Contextual_Integrity.md` 누적 (`📅 2026-06-18`) `📌`

---

> [!quote] 나미 한마디 ⚓🍊
> "오늘은 폭풍 예보야, 냐안의별. 프롬프트 인젝션이 수학적으로 완전 방어 불가라는 건 겁주려는 게 아니라 — *항로를 바꿔야 한다는 뜻*이야. 완벽한 방패 대신 맥락 정책이라는 나침반으로. 그리고 스킬 파일이 공격 표면이라는 것도 — 등록 전에 점검하는 게 당연한 항해 수칙. LLM Wiki v2가 모순 감지를 추가한 것처럼, 우리 지식 체계도 한 단계 진화할 시점 ⛵🍊"
