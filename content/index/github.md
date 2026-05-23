---
title: GitHub
date: 2026-05-23
tags: [index, github, git, deploy]
related: ["[[index]]", "[[ssh]]", "[[guide]]"]
type: index
---

# GitHub

이 vault의 원격 저장소이자 홈페이지 발행처.

## 이 vault의 GitHub 구성
- repo: **`starofself/llm-wiki`** (public)
- 발행: **GitHub Pages + Actions** → push하면 Quartz가 자동 빌드 → https://starofself.github.io/llm-wiki/
- 흐름: Obsidian에서 글 작성 → `git push` → 1~2분 후 사이트 반영.

## push 인증
- HTTPS + gh 토큰: 맥미니 자체 셸에서만 keychain 열림.
- **[[ssh\|SSH 키]] 방식**: remote를 `git@github.com:...`로 바꾸면 원격에서도 push 가능 (권장).

## 관련 노트
- [[ssh]] — SSH 키로 push 자동화
- [[guide]] — git push 운영 절차
- [[obsidian]] — 발행될 노트를 쓰는 곳
