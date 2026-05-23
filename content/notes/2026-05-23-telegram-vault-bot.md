---
title: 텔레그램 Vault 봇 — 폰에서 노트 던지기
date: 2026-05-23
tags: [telegram, bot, week2, howto, interface]
related: ["[[index]]", "[[phone]]", "[[remote]]"]
type: howto
status: active
source: own
aliases: ["vault 봇", "텔레그램 노트봇"]
---

# 텔레그램 Vault 봇

지피터스 22기 **2주차 — 사용자 UI(텔레그램 봇)** 산출물. 폰에서 봇에 메시지를 보내면 맥미니의 `~/llm-wiki` vault에 노트로 쌓이고, 원할 때 홈페이지로 발행된다.

> hermes의 `@hermes_star_2_bot`(운영 에이전트)과는 **완전히 분리**된 별도 봇이다. 토큰·프로세스·폴더가 모두 다르다.

## 구조

```
폰 (텔레그램)
  └─ 메시지 → [vault 봇] → ~/llm-wiki/content/notes/inbox/날짜-슬러그.md (draft)
                              └─ /publish → git push → 사이트 반영
```

- 봇 코드: `~/telegram-vault-bot/bot.py` (파이썬 표준 라이브러리만, 외부 의존성 0)
- 설정: `~/telegram-vault-bot/.env` (토큰·허용유저, 권한 600)
- 자동 실행: launchd `com.starofself.vaultbot` (맥미니 부팅 시 자동 시작, 죽으면 재시작)
- 저장 위치: `content/notes/inbox/` — 첫 줄이 제목, `status: draft`로 저장

## 사용법 (폰에서)

| 보내는 것 | 동작 |
|-----------|------|
| 아무 텍스트 | inbox에 노트로 저장 (첫 줄 = 제목) |
| `/publish` | inbox 노트들을 git push → 홈페이지 발행 |
| `/whoami` | 내 텔레그램 ID 확인 |
| `/start`, `/help` | 도움말 |

**기본은 "저장만"** 한다 (public 사이트라 즉시공개 방지). 검토 후 `/publish`로 공개.
즉시 발행을 원하면 `.env`에서 `AUTO_PUSH=true`로 바꾸고 봇 재시작.

## 봇 만들기 / 켜기 (최초 1회)

1. **BotFather에서 봇 생성** → 토큰 받기 ([[2026-05-20-botfather-guide]] 참고)
2. 토큰 저장: 맥미니에서 `python3 ~/telegram-vault-bot/set-token.py`
3. 봇 시작: `launchctl load ~/Library/LaunchAgents/com.starofself.vaultbot.plist`
4. 폰에서 봇에게 `/whoami` → 내 ID 확인
5. 그 ID를 `.env`의 `TELEGRAM_ALLOWED_USERS=`에 넣고 봇 재시작
6. 텍스트 하나 보내보고 → `/publish` 테스트

## 운영 명령 (맥미니)

```bash
# 상태 확인
launchctl list | grep vaultbot
# 로그 보기
tail -f ~/telegram-vault-bot/bot.err.log
# 재시작 (설정 바꾼 뒤)
launchctl unload ~/Library/LaunchAgents/com.starofself.vaultbot.plist
launchctl load   ~/Library/LaunchAgents/com.starofself.vaultbot.plist
```

## 보안 메모

- `.env`는 권한 600, repo 밖(`~/telegram-vault-bot`)에 있어 깃에 안 올라감.
- `TELEGRAM_ALLOWED_USERS`가 비면 봇은 누구의 노트도 저장하지 않음 (ID만 알려줌).
- 토큰 유출 시 BotFather `/revoke` → 새 토큰 → `set-token.py` 재실행.
