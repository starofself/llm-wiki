---
title: 브라우저 터미널 (ttyd)
aliases: ["ttyd", "web terminal", "브라우저 터미널"]
date: 2026-05-23
type: howto
status: active
source: own
tags: ["ttyd", "터미널", "원격", "맥미니"]
related: ["[[guide]]", "[[remote-work]]", "[[ssh]]"]
---

# 브라우저 터미널 (ttyd)

> 브라우저 탭 하나로 맥미니 2의 셸 + Claude Code 즉시 사용. SSH 클라이언트 앱 설치 불필요.

---

## 접속

```
http://100.x.x.x:7681/
```

- **사전 조건**: Tailscale 켜져 있고 같은 계정 로그인
- **인증**: 비밀번호 필요 (Tailnet 내부 전용)
- **시작 디렉토리**: `~/llm-wiki/`

## 일상 흐름

브라우저 새 탭 → 위 URL 입력 → 터미널 뜨면:

```bash
claude
# 자연어로 지시. 예) "오늘 회의록 노트 만들어줘"
```

또는:
```bash
git pull              # 최신 변경 가져오기
ls content/notes/     # 노트 목록
nvim content/...      # 편집기
```

## 사이트 보기와 같이 쓰기

탭 1: <http://100.x.x.x:8080/> — 사이트 (Quartz)
탭 2: <http://100.x.x.x:7681/> — 터미널 (ttyd)

작업 → 사이트 새로고침 (60초 후 자동 빌드 반영)

## 모바일에서

핸드폰 브라우저에서도 같은 URL 접속 가능. 다만:
- 가로 화면 권장
- 외장 키보드 있으면 편함
- 일반 SSH 앱(Termius 등)이 모바일 UX는 더 좋음

## 보안 메모

- **외부 인터넷에서는 접근 불가** (Tailnet 내부 통신만)
- **비밀번호 인증 적용** → 무단 접근 차단. Tailnet 내부에서만 도달
- 강화하려면: `~/Library/LaunchAgents/com.starofself.ttyd.plist`에 `-c username:password` 옵션 추가 후 재로드

## 트러블슈팅

### 접속 안 됨
1. Tailscale 켜져 있나? `tailscale status`로 macmini-star2-macmini 활성 확인
2. 서버 상태: `ssh mac-user@100.x.x.x 'launchctl list | grep ttyd'`
3. 재시작: 맥미니에서 `launchctl kickstart -k gui/$(id -u)/com.starofself.ttyd`

### 한글 깨짐
이미 `LANG=ko_KR.UTF-8` 환경변수 설정됨. 그래도 깨지면 브라우저 폰트 설정 확인.

### 화면 작음
ttyd 기본 폰트 14pt. 크기 변경하려면 plist의 `fontSize` 값 조정 후 재로드.

## 24/7 자동 실행

`launchctl`로 등록되어 있어 맥미니 재부팅돼도 자동 시작.
- 서비스명: `com.starofself.ttyd`
- 포트: 7681
- 작업 디렉토리: `~/llm-wiki/`
