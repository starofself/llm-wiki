---
title: LLM-WIKI 반영 후보 큐
aliases: ["curation queue", "반영 후보", "소스 선별 트리"]
date: 2026-05-25
type: index
status: active
source: own
tags: ["curation", "llm-wiki", "workflow", "html", "source"]
related: ["[[index]]", "[[html]]", "[[claude]]", "[[guide]]"]
---

# LLM-WIKI 반영 후보 큐

> 목적: 웹사이트·영상·문서·HTML 리포트는 많이 참고하되, `llm-wiki` 본문에 **정말 반영할 것만 선별**한다. 너무 많아져서 vault가 어지러워지는 것을 막는 완충지대.

## 기본 원칙

1. **수집과 반영을 분리한다.**
   - 수집: 링크, 스크린샷, HTML, 이미지, transcript를 임시 저장한다.
   - 반영: 핵심 개념/인덱스/장기 노트에 들어갈 것만 골라 옮긴다.

2. **모든 참고자료를 본문 지식으로 승격하지 않는다.**
   - 좋은 자료라도 현재 프로젝트/강의/시스템과 연결되지 않으면 보류한다.

3. **HTML + 이미지 산출물은 별도 폴더로 묶는다.**
   - `.md`는 메타데이터/요약/판정.
   - `.html`은 사람이 읽는 리포트/인터페이스.
   - `images/`는 캡처/도표/썸네일.

4. **큐가 커지면 버린다.**
   - `inbox`가 20개를 넘으면 새 자료를 넣기 전에 정리한다.
   - 30일 이상 보류된 항목은 `archive` 또는 `reject`로 보낸다.

## 폴더 구조

```text
content/resources/curation/
  index.md              # 이 문서
  inbox/                # 방금 수집한 자료, 아직 판단 전
  shortlist/            # LLM-WIKI에 반영할 가능성이 높은 후보
  promoted/             # 실제 본문/인덱스에 반영 완료한 자료
  archive/              # 보관은 하지만 당장 반영하지 않을 자료
  reject/               # 반영하지 않기로 한 자료
```

## 상태 정의

### inbox

아직 판단하지 않은 자료. URL, 영상, 글, 스레드, HTML 리포트, 이미지 묶음이 들어간다.

조건:
- 흥미롭지만 아직 요약/판정 전
- 출처만 저장한 상태
- LLM-WIKI 반영 여부 미정

### shortlist

반영 후보. 다음 중 하나 이상이면 승격한다.

- 현재 [[gpters-22]] 작업과 직접 연결됨
- [[claude]], [[html]], [[obsidian]], [[hermes]] 등 기존 인덱스와 연결됨
- 반복해서 나올 가능성이 큰 개념
- 앞으로 자동화/봇/웹클리퍼 설계에 영향을 줄 내용

### promoted

실제로 다음 중 하나를 완료한 자료.

- 새 노트 생성
- 기존 인덱스 업데이트
- HTML 리포트 생성
- 이미지/다이어그램 저장
- 관련 노트에 wikilink 연결

### archive

좋은 자료지만 지금 반영하지 않는 것.

### reject

지금 vault에는 넣지 않는 자료. 이유를 한 줄로 남긴다.

## 반영 기준

자료를 LLM-WIKI 본문으로 승격하려면 최소 2개 이상 만족해야 한다.

- 내 자동화/인터페이스 구축에 직접 도움
- Claude Code / LLM agent workflow에 적용 가능
- HTML/이미지 기반 저장 방식에 대한 실험 가치
- 지피터스 22기 과제나 글감으로 재사용 가능
- 기존 노트 2개 이상과 연결 가능
- 나중에 다시 찾을 가능성이 높음

## 후보 카드 템플릿

새 자료는 `inbox/YYYY-MM-DD-slug.md`로 만든다.

```md
---
title: 자료 제목
date: YYYY-MM-DD
type: curation
status: inbox
source: web
tags: ["curation"]
related: ["[[curation]]"]
source_url: "https://..."
score: 0
verdict: undecided
---

# 자료 제목

## 원문

- URL:

## 왜 저장했나

-

## 핵심 요약

-

## LLM-WIKI 반영 후보

- [ ] 새 개념 노트
- [ ] 기존 인덱스 업데이트
- [ ] HTML 리포트 생성
- [ ] 이미지/다이어그램 저장
- [ ] 보류/폐기

## 판정

- 상태: inbox / shortlist / promoted / archive / reject
- 이유:

## 관련 링크

-
```

## 주간 정리 루틴

1. `inbox`를 훑는다.
2. 각 항목에 `score`를 0~3으로 매긴다.
   - 0: 버림
   - 1: 보관만
   - 2: shortlist
   - 3: 즉시 promoted
3. `score >= 2`만 실제 LLM-WIKI에 반영한다.
4. 반영 후 원본 후보 카드는 `promoted/`로 이동한다.
5. 메인 노트에는 선별된 결과만 남긴다.

## 현재 운영 결론

앞으로 웹사이트/영상/글을 참고할 때 기본 흐름은 다음과 같다.

```text
참고자료 발견
→ curation/inbox에 후보 카드 생성
→ 필요하면 HTML + images 저장
→ shortlist에서 선별
→ 핵심만 llm-wiki 본문/index에 반영
→ 나머지는 archive/reject
```

이렇게 하면 LLM-WIKI가 “모든 자료를 쌓는 창고”가 아니라, **선별된 지식만 들어오는 작업 기억/출판 지식베이스**로 유지된다.
