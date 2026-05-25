---
title: HTML
aliases: ["html", "HTML", "HyperText Markup Language"]
date: 2026-05-25
type: index
status: active
source: own
tags: ["index", "html", "interface", "llm"]
related: ["[[index]]", "[[claude]]", "[[obsidian]]", "[[guide]]"]
---

# HTML

HTML은 이 vault에서 **Markdown 원장을 사람이 읽고 판단하기 좋은 인터페이스로 바꾸는 표현 레이어**다. Claude Code 같은 에이전트에게는 태그·속성·중첩 구조·SVG/CSS/JS가 더 명확한 구조 신호가 될 수 있다.

## 핵심 관점

- Markdown: 장기 보관, git diff, `[[wikilink]]`, 원장에 강함.
- HTML: 시각화, 비교, 보고서, PR explainer, prototype, 임시 편집 UI에 강함.
- 결론: Markdown/Obsidian을 버리는 것이 아니라, HTML을 **의사결정용 표면**으로 얹는다.

## LLM에게 주는 시그널

- `<section>`, `<article>`, `<aside>`, `<figure>`, `<table>` 등 역할이 명시된다.
- 여는 태그/닫는 태그로 영역 경계가 Markdown보다 분명하다.
- SVG/CSS 속성은 ASCII diagram보다 구조화된 시각 정보를 제공한다.
- JS와 form 요소는 문서가 “읽을 것”을 넘어 “조작할 것”임을 표현한다.

## 관련 노트

- [[2026-05-25-html-vs-markdown-llm-signals]] — HTML이 Markdown보다 LLM/사람에게 더 강한 인터페이스가 되는 이유
- [[claude]] — Claude Code와 HTML 산출물 생성
- [[obsidian]] — Markdown vault의 원장 역할
- [[gpters-22]] — 강의 맥락에서 HTML 슬라이드/인터페이스 사용
