---
title: "🏴‍☠️ LLM-Wiki Daily #10 — 2026-06-19"
date: 2026-06-19
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
  - glm-52
  - mixture-of-experts
  - local-llm
  - data-sovereignty
  - agent-memory
  - elasticsearch
  - mcp-stateless
related:
  - "[[2026-06-18]]"
  - "[[Learning/MoE_Mixture_of_Experts]]"
  - "[[2026-06-07_LLM_Wiki_큐레이터_미션_초안]]"
mirror_at: "~/llm-wiki/content/notes/llm-wiki-daily/2026-06-19-llm-wiki-daily.md"
---

# 🏴‍☠️ LLM-Wiki Daily #10 — 2026-06-19

> [!summary] 오늘 한 줄
> GLM-5.2(753B·MIT·1M context)가 GPT-5.5를 SWE-bench에서 추월하며 오픈 웨이트 시대의 새 기준점을 선언 — "로컬 LLM은 클라우드 대체재가 아니라 다른 도구"라는 실전 통찰이 HN을 흔들고, Elastic이 0.89 recall 에이전트 메모리 레이어로 D2 분야에 실용 브레이크스루를 제시.

---

## 🔥 Top 3 — 꼭 알아야 할 것

### 1. GLM-5.2 — 753B MoE·MIT·GPT-5.5 추월, 데이터 주권 주의보 [D5+D6]

🔗 [Simon Willison 6/17](https://simonwillison.net/2026/Jun/17/glm-52/) | [VentureBeat](https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost) | [Latent Space AINews](https://www.latent.space/p/ainews-glm-52-the-top-frontend-coding)

==**핵심 한 줄**==: 중국 Z.ai가 출시한 GLM-5.2(753B 전체·40B active, MoE, 1M 컨텍스트, MIT 라이선스)가 SWE-bench Pro 62.1%로 GPT-5.5(58.6%)를 추월. OpenRouter에서 $1.40/M 토큰 — Claude 대비 ==72% 저렴==.

**무슨 일인가**: 코딩·장기 에이전틱 태스크 특화로 설계된 GLM-5.2가 6/13 유료플랜 선공개 → 6/16 MIT 전체 가중치 공개. Artificial Analysis Intelligence Index에서 오픈 웨이트 신규 1위. MoE 구조 덕분에 추론 시 40B만 활성화해 연산 효율이 높음. FrontierSWE에서는 Claude Opus 4.8(75.1%)에 0.7%포인트 차(74.4%)로 바짝 추격. "텍스트 전용 가장 강력한 오픈 웨이트 LLM"이라는 Simon Willison의 평가.

> [!warning] 🧠 이해할 것 (운영 관점) — 한 단계 더
> "오픈 웨이트 = 자동으로 데이터 주권"은 틀렸다. ==Z.ai API 사용 시 프롬프트가 중국 국가정보법 적용 서버를 통과== — 정부 데이터 요청에 노출 가능. 자기 호스팅이 유일한 완전 주권 경로. 그러나 GLM-5.2 전체 가중치 = ~1.5TB(fp16), Q4 시 ~400GB → ==맥미니 16GB에서 구동 불가==.
>
> **실용 경로 3가지**:
> 1. 🔴 Z.ai API — 저렴하지만 데이터 주권 포기
> 2. 🟡 Together AI·OpenRouter — 미국 서버 중계, 비용 조금 더 높음, 주권 부분 확보
> 3. 🟢 자기 호스팅 — 80GB+ GPU 환경 필요, Q4 소형 변종 출시 시 진입 장벽 낮아짐
>
> 결론: ==가격 72% 저렴에 끌리기 전에 API 라우팅 체인 확인 필수==. Ollama library 신규 등재 후 Q4 소형 변종 나오면 재평가.

> [!tip] 📚 공부할 것
> - **오늘의 학습 카드 #13 — MoE** ↓ (753B에서 40B만 활성화되는 원리)
> - [Latent Space AINews GLM-5.2](https://www.latent.space/p/ainews-glm-52-the-top-frontend-coding) — 프론트엔드 코딩 1위 맥락 + IndexShare speculative decoding 분석

---

### 2. "로컬 Qwen은 더 나쁜 Opus가 아니라 다른 도구" [D5]

🔗 [Alex Ellis 블로그 — HN #2, 409pts](https://blog.alexellis.io/local-ai-is-not-opus/)

==**핵심 한 줄**==: RTX 6000 GPU($12,000+)로 Qwen 27B(Q4)를 6개월 운영한 현장 리뷰 — 로컬 LLM의 진짜 가치는 "더 나은 성능"이 아니라 **"클라우드에 못 보내는 데이터 처리"**.

**무슨 일인가**: 저자는 분산 시스템 Go 개발 같은 장기·복잡 태스크에서 Qwen 27B의 무한루프·환각 문제를 솔직하게 보고. SWE-bench 77%(Qwen) vs 88%(Opus) 격차는 실제 고급 아키텍처 결정에서 더 크게 벌어진다. 그러나 고객사 텔레메트리 분석으로 미보고 수익 $4~5K 발견 — 이건 클라우드에 보내기 어려운 개인 데이터가 포함된 작업이었다. 결론: *"어느 모델이 더 좋은가가 아니라 어떤 워크플로에 무엇을"*이 올바른 질문 프레임.

> [!note] 🧠 이해할 것 (운영 관점) — 한 단계 더
> 우리 D5 약점 재진단: 헌장 §2b "로컬 LLM 없음 = 장애 시 다이제스트 정지" 문제의 해법이 "동일 성능 대체재 마련"이 아니라 ==**워크플로 분류**== 설계임을 이 글이 증명.
>
> ```
> 클라우드 Claude (나미봇) 적합:
>   - WebFetch·arXiv 정찰, 대화 생성, 복잡 추론
>
> 로컬 LLM 폴백 (미래 도입 시) 적합:
>   - vault 내 민감 정보 기반 분석
>   - 주식 메모·건강기록 관련 요약
>   - Claude 장애 시 Daily 1차 초안 생성
> ```
> ==이건 성능 타협이 아니라 데이터 위험 분류 문제==.

> [!tip] 📚 공부할 것
> - [로컬 LLM 2026 완전 가이드](https://www.sitepoint.com/local-llms-are-getting-easier-the-complete-guide-2026/) — Ollama vs LM Studio 비교
> - [gpt-oss:20b 16GB 최적화 리뷰](https://www.promptquorum.com/local-llms/top-open-source-models-ollama) — 맥미니 16GB 현실적 최고 선택 분석

---

### 3. Elastic 에이전트 메모리 레이어 — 0.89 Recall [D2]

🔗 [Elastic Search Labs 블로그 — HN 74pts](https://www.elastic.co/search-labs/blog/agent-memory-elasticsearch)

==**핵심 한 줄**==: Elasticsearch(ELSER 시맨틱 검색 + 덴스 벡터 + 하이브리드 랭킹) 위에 구축한 지속적 에이전트 메모리 레이어가 **0.89 recall** 달성 — MemoryCD 벤치마크 최고 기록(NDCG@3 0.610)을 맥락이 다르지만 실용 임계선 관점에서 넘어섬.

**무슨 일인가**: 에이전트의 과거 대화·도구 사용 기록을 Elasticsearch에 지속 저장하고 세맨틱 검색으로 상기하는 레이어를 오픈소스 공개. "0.89 recall"은 이전 대화 맥락의 89%를 정확 복원한다는 의미. 단, MemoryCD(아마존 리뷰 400K 세션, 실제 생애 크로스도메인)와 달리 단기 세션 회수 벤치마크 = 비교 맥락이 다름. 그럼에도 ==실제 배포 환경에서 즉시 사용 가능한 수준의 recall==이라는 점이 실용적 이정표.

> [!note] 🧠 이해할 것 (운영 관점) — 한 단계 더
> 우리 메모리 계층 현재 상태:
> ```
> agent-bus/knowledge/ = 플레인 마크다운 = 키워드 검색만 가능
> → 검색 품질: 낮음 (grep 수준)
> ```
> Elasticsearch 도입은 과잉 — 더 빠른 실용 경로:
> 1. **단기**: Obsidian Omnisearch 플러그인 (BM25 + 한국어 토크나이저)
> 2. **중기**: Smart Connections 플러그인 (로컬 임베딩, 프라이버시 보존)
> 3. **장기**: knowledge/ 벡터 임베드 → 실제 Elastic 또는 Chroma/Weaviate 도입
>
> ==헌장 §2b D2 약점("knowledge/ 작성봇·출처 명시 의무화 미적용")과 함께 메모리 품질 레벨업 로드맵의 두 축==.

> [!tip] 📚 공부할 것
> - [arXiv:2603.07670 메모리 서베이](https://arxiv.org/abs/2603.07670) — write·manage·read 3단 루프와 메모리 유형 분류 (우리 카드 학습 기초)
> - MemoryCD [arXiv:2603.25973](https://arxiv.org/abs/2603.25973) — 0.89 recall도 진짜 lifelong 벤치마크 앞에선 아직 부족한 이유

---

## 📰 그 외 신호 (도메인별)

### D1 — LLM Wiki / Karpathy 패턴

- **Simon Willison 6/17 GLM-5.2 포스팅** — 오픈 웨이트 최강자 등장 조기 포착. Willison이 "아마 가장 강력한 텍스트 전용 오픈 웨이트"라 표현 — D1 큐레이터 필독 소스 재확인
- **llms.txt 2026 현황**: 공식 IETF/W3C 표준화 아직 미완. OpenAI·Google·Anthropic 공식 지원 미확약. 그러나 Cursor·Claude Code 등 AI 코딩 어시스턴트의 de facto 참조 표준으로 실질 확산 중 — "표준화 전 채택" 패턴
- **DeepSeek Vision (HN #1, 390pts)**: "고래가 이제 볼 수 있다" — 텍스트 전용 DeepSeek에 이미지 인식 비전 기능 beta 추가. 오픈 웨이트 멀티모달 경쟁 가속

### D2 — LLM 메모리 / 거버넌스

- **MemoryCD 최종 결과 확인** ([arXiv:2603.25973](https://arxiv.org/abs/2603.25973)): 14개 SOTA LLM + 6개 메모리 방법, lifelong personalization ROUGE ≤ ==0.222==, NDCG@3 ≤ ==0.610==. 결론: 현존 메모리 방법 전부 실제 사용자 만족도 기준 미달
- **MemoryAgentBench** (HUST-AI-HYZ, ICLR 2026): 증분 멀티턴 인터랙션으로 에이전트 메모리 평가하는 새 프레임워크 — 기존 벤치마크가 정적·단발 테스트였던 한계 보완
- **Awesome-Agent-Memory** (TeleAI-UAGI GitHub): 에이전트 메모리 논문·시스템·벤치마크 큐레이션 레포 활성화 — D2 추적용 원스톱 레퍼런스

### D3 — Skills / Agent 인코딩

- **MCP stateless spec RC**: 프로토콜 레이어 무상태(stateless) 전환. `tools/call` 요청이 자기완결 가능, 상태는 애플리케이션 레이어로 명시적 이전. MCP ==200개+ 구현== 돌파
- **ACP → A2A 합병 (Linux Foundation)**: 에이전트 간 통신 프로토콜 통합. `MCP(호스트↔도구) + A2A(에이전트↔에이전트)` 2축 표준화 체계로 정착
- **Datasette Agent 0.3a0** (Simon Willison): `execute_write_sql` + 사용자 승인 게이트 내장 + `--unsafe` 자동승인 플래그 — D6 방어 패턴 차용 모델. 우리 스킬에도 "외부 통신 전 승인 게이트" 설계 직접 적용 가능

### D4 — PKM × AI

- **`ballred/obsidian-claude-pkm`** (GitHub 신규): Obsidian + Claude Code PKM 시작 키트 레포 — claude-obsidian 계열의 경량 버전. 우리 vault 설정 가이드로 참조 가능
- **Obsidian 1.5M 사용자** (2026-02 기준, 22% YoY 성장): AI-PKM 트렌드 가속. 주요 플러그인(Smart Connections·Text Generator·Omnisearch) 생태계 성숙
- **getopenclaw.ai Obsidian AI 가이드 2026**: OpenClaw 플러그인 생태계 최신 정리 — 로컬 임베딩 기반 semantic search 구현까지 스텝별 정리

### D5 — 로컬 LLM / 자기주권

- **GLM-5.2** (Top 1 참조) — 오픈 웨이트 신규 왕좌
- **MiniMax M3 (Ollama 신규 등재)**: 오픈 웨이트, 1M 컨텍스트 + 네이티브 비전. 장기 컨텍스트 로컬 모델 선택지 추가
- **Ollama 라이브러리 4,500+** 모델 돌파 (공식 + 커뮤니티): 맥미니 16GB 기준 현 최고 선택은 Qwen 3.6 27B(Q4, ~16GB) 또는 gpt-oss:20b(~10GB)
- **DeepSeek V4 Pro** (Ollama 신규): 멀티모달 포함 DeepSeek 최신 로컬 구동 가능 변종

### D6 — 거버넌스 / 안전

- **Fable 5 미복구 계속** (6/19 기준): 6/12 미 정부 수출규제 발동 이후 Anthropic 팀(Frontier Red Team 포함)이 상무부 협의 중. 복구 일정 없음. US-only 접근 트랙 유력
- **GLM-5.2 중국 국가정보법 경고**: "오픈 웨이트 = 데이터 주권"은 자기 호스팅 시에만 성립. Z.ai API = 중국 정보법 노출 위험 — 저렴한 API를 사용할 때의 숨은 비용
- **Simon Willison 6/15**: Anthropic이 Fable 5 "보이지 않는 제한" 정책(silent degrade) 역풍 후 철회 — 투명성 없는 모델 제한이 신뢰 기반 침식 선례

---

## 📖 오늘의 학습 카드 #13 ⭐ — Mixture of Experts (MoE)

> [!important] D5 개념 사전 | 작성: shandi | 2026-06-19

**개념**: `Mixture of Experts (MoE) 아키텍처`

**정의 (1문장)**: 하나의 거대 뉴럴 네트워크를 "전문가(Expert)" 서브네트워크 여러 개로 분할하고, 각 입력 토큰마다 게이팅 네트워크가 **일부 전문가만 선택적으로 활성화**하는 스파스 추론(Sparse Inference) 아키텍처.

| 구성 요소 | 설명 |
|:---|:---|
| **Expert** | 독립 뉴럴 서브네트워크 (주로 FFN 레이어) |
| **Gating Network (Router)** | 각 토큰마다 상위 K개 Expert를 선택하는 라우터 |
| **Active Parameters** | 추론 시 전체 파라미터 중 일부만 활성화 |

**GLM-5.2 예시 (오늘 Top 1)**:
```
전체 파라미터:    753B  (메모리 ~1.5TB fp16)
추론 시 활성:      40B  (메모리 ~80GB fp16, Q4 시 ~40GB)
결과: "753B 표현력, 40B 추론 속도·비용"
```

**왜 중요 (1문장)**: MoE 덕분에 수백B 파라미터 모델이 실제로 수십B 수준의 연산 비용으로 추론 가능 — 오픈 웨이트 초거대 모델의 실용화를 앞당기는 핵심 기술.

**자주 하는 오해**:
- ❌ "753B 파라미터 = 753B dense 모델과 동일한 메모리·연산"
- ✅ "753B 총 파라미터, 추론 시 40B active = dense 40B 정도의 실효 비용"

**우리 시스템 연결**:
```
냐안의별 맥미니 16GB 기준:
- GLM-5.2 전체 가중치 (fp16): ~1.5TB → 구동 불가
- GLM-5.2 Q4 quantized 소형 변종 (예상): ~40-50GB → 64GB+ 시스템 필요
- 현재 현실적 최고 선택: Qwen 3.6 27B Q4 (~16GB) 또는 gpt-oss:20b (~10GB)
- 모니터링: GLM-5.2 Q4 소형 변종 HuggingFace 출시 대기
```

**더 깊이**: [Mixtral 8x7B — MoE LLM 기초 논문 arXiv:2401.04088](https://arxiv.org/abs/2401.04088) | [GLM-5.2 VentureBeat 분석](https://venturebeat.com/technology/z-ais-open-weights-glm-5-2-beats-gpt-5-5-on-multiple-long-horizon-coding-benchmarks-for-1-6th-the-cost)

**연결 개념**: [[Learning/Rule_of_Two]] · [[Learning/Two_Tier_Memory_Architecture]] · [[Learning/Contextual_Integrity]] · `arXiv:2401.04088`

---

## 🔁 어제 Follow-up (2026-06-18)

| 항목 | 상태 | 비고 |
|:---|:---:|:---|
| MemoryCD 벤치마크 결과 모니터링 | 🟢 확인 완료 | ROUGE ≤ 0.222, NDCG@3 ≤ 0.610 — 오늘 D2 신호 반영 |
| Fable 5 정부 협의 동향 | 🔴 미복구 | Anthropic 팀 상무부 협의 중, 일정 없음 |
| 스킬 파일 보안 체크리스트 작성 | 🟡 3일 이월 | 오늘 즉시 액션 #2로 이월 — 마감 못 하면 솔직 보고 |
| LLM Wiki v2 lint operation 계획 | 🟡 보류 | GLM-5.2 우선으로 밀림, 다음 주 재배정 |
| claude-obsidian 스킬 구조 분석 | 🟡 부분 | ballred/obsidian-claude-pkm 신규 레포 발견 → D4 신호 반영 |

---

## 📡 다음 신호 (2026-06-20 수집 우선순위)

1. **GLM-5.2 Q4 quantized 소형 변종** — HuggingFace 릴리즈 모니터링. 맥미니 구동 가능 사이즈 체크 (D5) `⏫`
2. **MCP stateless spec RC 채택 일정** — 정식 릴리즈 및 주요 서버 마이그레이션 영향 (D3)
3. **Elastic 메모리 레이어 구현 상세** — 코드·아키텍처 분석, knowledge/ 적용 가능성 (D2)
4. **Fable 5 협의 동향** — US-only 트랙 공식화 여부 (D6)
5. **Midjourney Medical 파급력** — Bio-as-Software 프로젝트 연결점 분석 (D4/외부)

---

## ⚡ 즉시 액션

> [!success] 오늘 실행 가능한 것 (3건)

- [ ] 🔍 **GLM-5.2 HuggingFace 가중치 페이지 확인** — Q4 quantized 변종 사이즈·맥미니 구동 가능 여부 체크 (`📅 2026-06-19`) `⏫`
- [ ] 🛡️ **스킬 파일 보안 체크리스트 작성 (3일 이월)** — Skill-Inject arXiv:2602.20156 기반, `.claude/skills/llm-wiki-curate/` 등록 전 필수 체크리스트. `Operations/Agents/Shandi/skill-security-checklist.md` (`📅 2026-06-19`) `⏫`
- [ ] 🧠 **Elastic 메모리 레이어 기술 블로그 심층 읽기** — 요약 정리 → `agent-bus/knowledge/elastic-memory-pattern.md` 신설 (`📅 2026-06-19`) `🔼`

---

> [!quote] 나미 한마디 ⚓🍊
> "GLM-5.2가 GPT-5.5를 추월했다는 건 항로 재편 신호야, 냐안의별. 근데 '오픈 소스라 안전해'라고 닻 놓기 전에 — API 경로가 어딜 통과하는지 확인해야 해. 값싼 항로가 항상 안전한 항로는 아니거든 🧭. 오늘의 진짜 통찰은 'Qwen은 Opus 대체재가 아니다'에 있어 — 우리가 폴백을 설계할 때 '더 나은 모델' 찾기가 아니라 '어떤 화물은 어떤 배로' 분류 설계가 먼저야. 메모리 레이어도 Elasticsearch 안 달아도 돼 — Omnisearch 하나로 첫 발자국. 한 단계씩 ⛵🍊"
