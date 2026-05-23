---
title: 지피터스 22기 실습세션 — 안티그래비티 설치
date: 2026-05-17
type: log
status: active
source: talk
tags: ["22기", "실습세션", "안티그래비티", "환경설정"]
related: ["[[index/22기]]", "[[index/환경설정]]"]
---

# 지피터스 22기 실습세션 — 안티그래비티 설치

- **일시**: 2026-05-17 (일) 19:52 ~ 22:20
- **진행**: 물결 | 끌림영상 (강사), 지피터스 스터디장 10
- **주제**: Antigravity (구글 신규 AI 코딩 도구) + Node.js + Python 설치
- **소스**: 줌 채팅 로그 (zoom export)

## 핵심 요약

1주차 본강의(05-20) 들어가기 전 사전 환경 세팅 실습 세션.
Windows/Mac 양 OS에서 안티그래비티 → Node.js → Python → live server 확장까지 세팅.

## 주요 명령어

```bash
# 설치 확인
node -v          # Node.js 버전 확인
npm -v           # npm 버전 확인
py --version     # Python 버전 확인 (Windows)
python3 --version  # Python 버전 확인 (Mac)
```

```
Ctrl + `  # 안티그래비티 안에서 터미널 열기
```

## 다운로드 링크

- 안티그래비티: https://antigravity.google/download
- Node.js (LTS): https://nodejs.org/ko/download
- Python: https://www.python.org/downloads/

## 자주 발생한 이슈 & 해결

### 1) `node : 'node' 용어가 cmdlet으로 인식되지 않습니다` (Windows)
- **원인**: Node 설치 후 안티그래비티 터미널이 PATH를 못 잡음
- **해결**: **안티그래비티를 완전히 종료 후 재실행** → `node -v` 다시 실행
- 다수 참가자가 같은 증상 → 같은 방법으로 해결됨

### 2) Mac에서 `py --version` 안 됨
- **원인**: Mac은 `py` 명령 없음
- **해결**: `python3 --version` 사용

### 3) `'node.exe' 프로그램을 실행하지 못했습니다. 액세스가 거부되었습니다`
- **원인 추정**: 보안 프로그램, 권한 이슈
- **해결**: 재부팅 + 안티그래비티 재시작 (일부 사례)

### 4) Python 설치 시 "Add Python to PATH" 옵션
- 설치 시작 화면에서 **체크 필수**. 안 그러면 `py` 명령 인식 안 됨

### 5) 긴 경로 지원 (Windows)
- 설치 중 `Windows is not configured to allow paths longer than 260 characters` 프롬프트
- **권장**: `y` 입력 (관리자 권한 + 재부팅 필요)

## 주요 결정/안내 사항

- **Node.js**: LTS 버전 권장 (안정성 — 프로덕션용)
- **Python**: 3.11 이상이면 OK (3.10, 3.12, 3.13, 3.14 등 다양하게 깔려도 됨)
- **안티그래비티 vs VS Code / Cursor**: 강의는 안티그래비티 기준이지만 VS Code, Cursor로 대체 가능
- **Terminal Command Auto Execution → ALWAYS**: 워닝 뜨지만 강의 진행상 ALWAYS로 설정 (보안 트레이드오프 인지)
- **램 16GB**: 충분히 사용 가능 (참가자 사례 확인)

## 청강/녹화

- 늦게 들어온 참가자 → 다음 날 녹화본 공개 예정 안내

## 참가자 주요 질문 정리

| 질문 | 답변 |
|------|------|
| 안티그래비티는 주로 무엇을 활용하는가? | 바이브코딩 (VS Code, Cursor로 대체 가능) |
| Gmail을 AI 작업용/개인용 분리? | 개인 판단 (강사 의견 없음) |
| Google PRO → Ultra 필요? | (명확한 답변 없음, 자유 선택) |
| 기존 Python 버전이 있으면 다시 설치? | 버전 확인 후 낮으면 업그레이드 |
| 청강생 오프라인 참석 가능? | 가능 (팁스타운) |

## 학습 메모 (수강자 후기 발췌)

- "어딘가에서 이미 설치되어 있었다" — 환경 변수/이전 설치 흔적이 자주 충돌
- "오류 메시지를 오른쪽 안티그래비티 에이전트에 그대로 붙이니 해결됐다" — AI 에이전트 활용 사례
- "해커가 된 기분", "내 컴퓨터가 서버라니" — 터미널/로컬 서버 첫 경험에 대한 반응

## 다음 단계 연결

- **1주차 본강의 (05-20 수)**: 이 환경 위에서 `mkdir my-vault` → `claude` 실행 → Vault 구축
- 실습세션은 도구 설치, 본강의는 Vault 구축 — 흐름상 명확히 분리됨
