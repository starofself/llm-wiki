# Vault Convention

## 노트 명명
- 일반: `{date}-{slug}.md` (예: `2026-05-20-week1-vault.md`)
- 인덱스: `index-{키워드}.md` (예: `index-22기.md`)

## 폴더
- `notes/` : 일반 노트
- `index/` : 인덱스(키워드 목차) 노트
- `resources/` : 강의자료, 외부 자료

## 프론트매터 표준
필수: `title`, `date`, `tags`, `related`
권장: `type`, `status`, `source`, `aliases`

```yaml
---
title: 회의록 0520
aliases: ["주간미팅", "0520회의"]
date: 2026-05-20
type: log              # log / note / idea / spec / howto
status: active         # draft / active / archived
source: own            # own / book / web / talk
tags: ["회의", "22기"]
related: ["[[인덱스/22기]]"]
---
```

## 작성 규칙
- YAML 값에 `[[ ]]`나 한글/숫자로 시작하는 토큰은 **따옴표 필수** (파싱 안전)
- 한 노트에 `#`(H1)은 1번만, 흐름은 `##`로
- 외부 링크 `[text](url)`, 내부 링크 `[[노트이름]]`
