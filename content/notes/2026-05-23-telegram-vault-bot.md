---
title: 텔레그램 ↔ Claude Code 브리지 (폰에서 맥미니 터미널처럼)
date: 2026-05-23
tags: [telegram, bot, claude-code, week2, howto, interface]
related: ["[[index]]", "[[phone]]", "[[remote]]", "[[2026-05-23-worklog]]", "[[2026-05-20-botfather-guide]]"]
type: howto
status: active
source: own
aliases: ["claude 브리지", "텔레그램 봇", "폰 터미널"]
---

# 텔레그램 ↔ Claude Code 브리지

지피터스 22기 **2주차 — 사용자 UI(텔레그램 봇)** 산출물.
폰에서 텔레그램 봇에 메시지를 보내면 → 맥미니에서 `claude -p`가 실행되고 → 작업 과정·결과를 다시 텔레그램으로 돌려준다. **즉, 폰을 맥미니 Claude Code 터미널처럼 쓰는 인터페이스.**

> hermes 봇(운영 에이전트)과는 **완전히 분리**된 별도 봇이다. 토큰·프로세스·폴더가 모두 다르다.

## 구조

```
폰 (텔레그램)
  │  ① 텍스트 메시지
  └──────────────▶ [bot.py · long-polling]
                      │  claude -p "<메시지>" --output-format stream-json
                      │       --permission-mode bypassPermissions --resume <세션>
                      │  ②  실행 (파일수정·명령·MCP… 묻지 않고 바로)
                      ◀── ③ 진행 내용(생각/도구)·결과를 한 줄씩 스트리밍 ──
  │  ④ 사진/파일 전송
  └──────────────▶ [bot.py · handle_media] → ~/gpters-photos 에 저장
```

- 봇 코드: `~/telegram-vault-bot/bot.py` (파이썬 표준 라이브러리만, 외부 의존성 0)
- 설정: `~/telegram-vault-bot/.env` (권한 600, repo 밖이라 git에 안 올라감)
- 자동 실행: launchd `com.starofself.vaultbot` (부팅 시 시작 + 죽으면 재시작)
- 대화 맥락: `state.json`에 `session_id` 저장 → 메시지끼리 맥락 이어짐 (`/new`로 초기화)

## 핵심 동작 3가지

### 1) 메시지 = Claude Code 실행 (스트리밍)
아무 텍스트나 보내면 그대로 `claude -p`에 전달된다. `--output-format stream-json`으로 돌려서,
작업 중 **생각·도구 실행을 실시간으로 중계**한다 (헤르메스풍).

- 💬 설명/판단 → 그때그때 도착
- 🔧 `git push` / 📄 `Edit: bot.py` / 🔍 `Grep: ...` / 🔌 `(MCP 도구)` 처럼 지금 뭘 하는지 한 줄씩

### 2) 사진/파일 = 폴더에 자동 저장
사진이나 파일을 보내면 `claude`로 안 넘기고 **`MEDIA_DIR`(기본 `~/gpters-photos`)에 저장**하고
`📥 저장 완료` 로 답한다. (이 봇으로 받은 모임 사진을 gpters 글에 넣는 데 사용)

### 3) 권한 = 자동 (bypassPermissions)
`--permission-mode bypassPermissions`로 실행 → 파일 수정·명령 실행 등 **승인 팝업 없이 바로 수행**.
영구 설정이라 재시작해도 유지된다.

## 명령어 (폰에서)

| 명령 | 동작 |
|------|------|
| (아무 텍스트) | Claude Code 실행 + 결과 스트리밍 |
| (사진/파일) | `~/gpters-photos`에 저장 |
| `/new` | 새 대화 시작 (맥락 초기화) |
| `/pwd` | 현재 작업 폴더 |
| `/cd <경로>` | 작업 폴더 변경 (대화도 초기화) |
| `/model <이름>` | 모델 변경 (비우면 기본) |
| `/status` | 현재 폴더·모델·권한·세션 상태 |
| `/whoami` | 내 텔레그램 ID |
| `/start`, `/help` | 도움말 |

## .env 설정

```ini
TELEGRAM_BOT_TOKEN=...             # BotFather 토큰
TELEGRAM_ALLOWED_USERS=123456789   # 허용 텔레그램 user id (쉼표로 여러 명)
CLAUDE_BIN=/Users/starofselfhigmail.com/.local/bin/claude
WORK_DIR=/Users/starofselfhigmail.com    # claude 기본 작업 폴더 (/cd 로 변경)
PERMISSION_MODE=bypassPermissions        # default/acceptEdits/plan/bypassPermissions
CLAUDE_MODEL=                             # 비우면 기본 모델
CLAUDE_TIMEOUT=600                        # 한 작업 최대 초
MEDIA_DIR=                                # 사진 저장 폴더 (비우면 ~/gpters-photos)
```

> `TELEGRAM_ALLOWED_USERS`가 비면 아무 작업도 안 하고 ID만 알려준다 (무단 사용 차단).

## 만들기 / 켜기 (최초 1회)

1. **BotFather에서 봇 생성** → 토큰 받기 ([[2026-05-20-botfather-guide]])
2. 토큰 저장: `python3 ~/telegram-vault-bot/set-token.py`
3. 봇 시작: `launchctl load ~/Library/LaunchAgents/com.starofself.vaultbot.plist`
4. 폰에서 봇에게 `/whoami` → 내 ID 확인
5. 그 ID를 `.env`의 `TELEGRAM_ALLOWED_USERS=`에 넣고 재시작
6. 텍스트 하나 보내서 응답 확인 → 사진도 한 장 보내 저장 테스트

## 운영 명령 (맥미니)

```bash
# 상태
launchctl list | grep vaultbot
# 로그
tail -f ~/telegram-vault-bot/bot.out.log ~/telegram-vault-bot/bot.err.log
# 재시작 (코드/설정 바꾼 뒤) — 최신 방식
launchctl kickstart -k gui/$(id -u)/com.starofself.vaultbot
# (구식) unload/load
launchctl unload ~/Library/LaunchAgents/com.starofself.vaultbot.plist
launchctl load   ~/Library/LaunchAgents/com.starofself.vaultbot.plist
```

> ⚠️ **재시작 타이밍 주의:** 폰에서 작업을 시킨 직후엔 봇이 그 `claude` 자식 프로세스를 물고 있다. 작업 중 재시작하면 응답이 끊기므로, 작업이 끝난 뒤(또는 `(sleep N; launchctl kickstart …) &`로 지연) 재시작한다.

## launchd plist (`~/Library/LaunchAgents/com.starofself.vaultbot.plist`)

- `ProgramArguments`: `/usr/bin/python3 ~/telegram-vault-bot/bot.py`
- `RunAtLoad: true`, `KeepAlive: true` (부팅 시작 + 죽으면 자동 재시작)
- `EnvironmentVariables`: `PATH`(+`~/.local/bin`), `HOME`
- 로그: `bot.out.log`, `bot.err.log`

## 보안 메모

- `.env`는 권한 600, repo 밖이라 git 미포함.
- 토큰 유출 시 BotFather `/revoke` → 새 토큰 → `set-token.py` 재실행.
- `bypassPermissions`라 폰에서 보낸 명령이 **실제로 파일·시스템을 바꾼다.** 허용 유저 관리가 필수.
