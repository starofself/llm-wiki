---
title: HTML 태그가 마크다운보다 LLM에게 더 명확한 시그널을 주는가
date: 2026-05-25
type: resource
status: active
source: web
tags: ["llm", "claude", "html", "markdown", "obsidian", "prompting", "interface"]
related: ["[[claude]]", "[[obsidian]]", "[[html]]", "[[guide]]"]
aliases: ["HTML vs Markdown for LLMs", "The unreasonable effectiveness of HTML", "Markdown is dying"]
source_url: "https://youtu.be/-iSLQe_imrE?si=BlzF2RLLI8plj2Sr"
---

# HTML 태그가 마크다운보다 LLM에게 더 명확한 시그널을 주는가

> 사용자 메모: `#인증` — “왜 HTML 태그가 마크다운보다 LLM에게 더 명확한 시그널을 주는가? 옵시디언 이제 필요없을까요…?ㅎ”

## 한 줄 결론

HTML은 LLM에게 **문서의 의미·구조·시각적 배치·상호작용 의도**를 더 명시적으로 전달할 수 있다. 하지만 이것이 곧 [[obsidian|Obsidian]]이나 Markdown이 필요 없다는 뜻은 아니다. **Markdown/Obsidian은 지식의 원장(source of truth)**, HTML은 **읽고 판단하고 공유하기 위한 인터페이스/렌더링 레이어**로 나누는 것이 현재 이 vault에는 가장 적합하다.

## 영상 핵심 요약

영상은 Claude Code 팀의 Derek이 제기한 “Markdown은 에이전트에게 넘기는 spec, plan, PR write-up의 최적 포맷이 아닐 수 있다”는 주장을 소개한다. 핵심은 HTML이 Markdown보다 훨씬 높은 표현력을 가지며, Claude Code 같은 에이전트가 실제로 읽고 조작할 수 있는 정보의 폭을 넓힌다는 것이다.

Markdown은 제목, 굵게, 목록, 간단한 표 정도를 안정적으로 표현한다. 반면 HTML은 한 파일 안에 표, CSS 기반 레이아웃, SVG 다이어그램, 이미지, 스크립트, 인터랙션, 공간 배치, 시각적 주석을 담을 수 있다. 그래서 Markdown에서는 ASCII 다이어그램이나 유니코드 문자로 흉내 내던 차트도 HTML에서는 실제 SVG 차트로 표현할 수 있다.

영상은 특히 HTML 문서가 “실제로 읽히는 문서”가 될 가능성이 높다고 주장한다. Markdown plan은 벽 같은 텍스트가 되어 사람이 읽지 않고 Claude에게 결정을 떠넘기기 쉽지만, HTML plan은 클릭하고 비교하고 수정 의견을 내기 쉬워 사람이 다시 루프 안으로 들어오게 한다.

## 왜 HTML이 LLM에게 더 강한 시그널인가

### 1. 태그가 역할을 직접 말한다

Markdown의 `#`, `-`, `**`는 간결하지만 의미가 제한적이다. HTML은 `<section>`, `<article>`, `<aside>`, `<figure>`, `<table>`, `<details>`, `<button>`, `<nav>`처럼 블록의 역할을 직접 드러낸다.

LLM 입장에서는 다음 차이가 생긴다.

- Markdown: “이건 목록/문단/제목처럼 보인다.”
- HTML: “이건 탐색 영역이고, 이건 부가 설명이고, 이건 표이며, 이건 접을 수 있는 상세 정보다.”

즉 HTML 태그는 LLM에게 **구조적 라벨**로 작동한다.

### 2. 중첩 구조가 명확하다

Markdown은 중첩 목록, 인용, 코드블록이 길어질수록 경계가 애매해질 수 있다. HTML은 여는 태그와 닫는 태그가 있어 영역의 시작과 끝이 분명하다.

예를 들어 spec 문서에서 다음을 한 덩어리로 묶기 쉽다.

- 요구사항
- 근거
- 대안
- 리스크
- 미결정 질문
- 담당자/우선순위

HTML에서는 이 단위들을 `<section data-status="open">`, `<div class="risk high">`처럼 명시할 수 있어, LLM이 “무엇이 무엇에 속하는지”를 덜 추론해도 된다.

### 3. 시각 정보와 의미 정보를 같이 담는다

Markdown은 시각 표현을 주로 렌더러에 맡긴다. HTML은 CSS/SVG와 결합해 레이아웃·색·위치·강조를 문서 안에 담을 수 있다.

영상의 예시는 막대그래프다. Markdown에서는 파이프와 대시로 차트를 흉내 내지만, 폰트가 바뀌면 정렬이 깨진다. HTML/SVG는 실제 차트로 표현되며 축, 색상, 레이블, 좌표가 명시된다.

LLM에게도 이 차이는 중요하다. ASCII 차트는 “그림처럼 보이는 텍스트”지만, SVG는 `rect`, `x`, `y`, `height`, `fill` 같은 명시적 속성을 가진 구조화 데이터다.

### 4. 작업 인터페이스 자체가 된다

HTML은 결과 문서일 뿐 아니라 임시 UI가 될 수 있다. 영상은 Claude Code가 다음과 같은 throwaway editor를 만들 수 있다고 말한다.

- Linear 티켓을 now / next / later / cut으로 드래그
- feature dependency warning 편집
- 시스템 프롬프트를 조정하면서 샘플 입력 3개를 실시간 렌더링
- 마지막에 Markdown, diff, 다음 prompt로 복사

이 지점에서 HTML은 단순 저장 포맷이 아니라 **agentic workflow의 조작면**이 된다.

## 영상에서 제시한 주요 활용처

1. **Specs / planning / exploration**
   - 여러 접근안을 하나의 HTML에 나란히 배치
   - trade-off를 비교하고 하나를 선택
   - 선택안이 mockup과 code snippet이 포함된 plan으로 발전

2. **Code review**
   - PR diff에 margin annotation, severity color, jump link 추가
   - GitHub 기본 diff보다 맥락을 더 잘 설명하는 HTML explainer 생성

3. **Design / prototype**
   - Claude가 HTML로 먼저 스케치하고 React/Swift 등으로 번역
   - slider/knob로 animation parameter를 조정한 뒤 prompt나 코드로 재사용

4. **Reports / research / learning**
   - 코드베이스, git history, Slack, 인터넷을 읽고 하나의 explainer page 생성
   - flow diagram, annotated code snippets, gotcha section 포함

5. **Custom editing interfaces**
   - 텍스트 입력만으로 표현하기 어려운 데이터를 위해 1회용 편집 UI 생성

## 비용과 반론

영상은 HTML 생성이 Markdown보다 2~4배 오래 걸릴 수 있다고 인정한다. Markdown의 낮은 token 비용 자체가 가치라는 반론도 있다.

다만 Claude Opus 4.7의 1M context window 같은 큰 컨텍스트에서는, HTML의 추가 토큰 비용이 “사람이 실제로 읽고 피드백하는 문서”를 얻는 대가로 흡수 가능하다는 논지다.

정리하면:

- 빠른 메모 / 원장 / git diff 친화성: Markdown 유리
- 복잡한 판단 / 비교 / 보고 / 리뷰 / 시각화 / human-in-the-loop: HTML 유리

## “옵시디언 이제 필요없을까요?”에 대한 판단

아직은 **필요하다**. 다만 역할을 바꿔 생각하는 것이 좋다.

### Obsidian / Markdown의 역할

- 장기 보관용 원장
- git diff가 쉬운 텍스트 지식베이스
- `[[wikilink]]` 기반 연결
- Claude Code가 폴더 전체를 읽고 수정하기 쉬운 작업 substrate
- Quartz로 발행 가능한 소스 파일

### HTML의 역할

- 사람이 읽고 판단하기 좋은 산출물
- spec / plan / report / PR explainer / prototype
- 비교·시각화·인터랙션이 필요한 “표면”
- Claude가 만든 임시 편집기 또는 의사결정 UI

### 이 vault에 맞는 결론

이 vault는 Markdown을 버리는 게 아니라, **Markdown을 knowledge source로 두고 HTML을 interface layer로 추가**하는 방향이 맞다.

실무 규칙으로는 다음이 좋다.

- 노트·인덱스·일지: Markdown 유지
- 강의 슬라이드·보고서·비교표·워크플로 다이어그램: HTML 적극 사용
- Claude에게 계획을 받을 때: “Markdown 요약 + HTML explainer/prototype 같이 생성” 요청
- 중요한 HTML 산출물은 `content/resources/*.html`로 저장하고, 설명 노트는 `.md`로 남김

## 내 작업환경에 연결되는 메모

현재 `llm-wiki`는 이미 HTML 자원을 품고 있다.

- `resources/week1-slides.html`
- `resources/ot-slides-v2.html`

따라서 이 영상은 “Obsidian을 버리자”보다 “이미 하던 방향이 맞다 — Markdown vault 위에 HTML 인터페이스를 얹자”에 가깝다.

## 실전 프롬프트 패턴

Claude Code에 다음처럼 요청하면 좋다.

```text
이 기능 설계를 Markdown plan으로만 쓰지 말고,
1) 짧은 Markdown 요약
2) 의사결정용 HTML explainer
3) 대안 비교 카드 3개
4) 주요 플로우 SVG 다이어그램
을 content/resources/ 아래에 만들어줘.
```

```text
이 PR을 리뷰하고, GitHub diff 요약 대신 HTML code explainer를 만들어줘.
심각도 색상, 파일별 jump link, 핵심 코드 스니펫 주석을 포함해줘.
```

```text
이 노트 묶음을 읽고, 사람이 빠르게 훑을 수 있는 HTML briefing page를 만들어줘.
Markdown 원본은 유지하고 HTML은 읽기/공유용으로만 둬.
```

## 원문 자막 메모

- 영상 길이: 8:54
- 자막 언어: 자동 영어 자막
- 핵심 표현:
  - “The unreasonable effectiveness of HTML”
  - “Markdown is the wrong format for every spec, every plan, every PR write-up you hand to your agent.”
  - “The HTML versions, he reads them. He clicks around. He suggests changes. He is back in the loop.”

## 타임라인

- 0:00 — Markdown is dying / Claude Code 팀의 문제 제기
- 0:48 — HTML이 Markdown보다 담을 수 있는 정보: 표, CSS, SVG, JS, 이미지, 공간 배치
- 1:36 — Markdown의 한계: ASCII diagram, Unicode color swatch 같은 흉내
- 2:23 — HTML/SVG는 실제 차트와 구조화된 시각 정보를 제공
- 3:08 — HTML 생성 비용은 2~4배지만 1M context 시대에는 흡수 가능
- 4:24 — 다섯 가지 use case: planning, code review, prototype, report, custom editor
- 6:31 — Claude Code가 강한 이유: 파일시스템, MCP, 브라우저, git history까지 읽는 환경 맥락
- 7:25 — 핵심 이유: Markdown plan은 안 읽게 되고, HTML plan은 읽고 피드백하게 됨
- 8:24 — spec, PR write-up, status report, internal explainer로 확산 전망

## 관련

- [[claude]] — Claude Code가 파일시스템과 작업 맥락을 읽는 주력 에이전트
- [[obsidian]] — Markdown vault의 원장 역할
- [[html]] — LLM/사람 모두에게 더 풍부한 인터페이스 레이어
- [[guide]] — vault 작성 규칙
