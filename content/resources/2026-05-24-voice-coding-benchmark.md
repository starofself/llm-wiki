---
title: "벤치마킹 — 음성 입력을 'PowerShell 밖 어디서나' 쓰는 실전 도구들"
aliases: ["음성 코딩 벤치마킹", "voice everywhere", "음성 입력 환경무관", "말로 하는 코딩"]
date: 2026-05-24
type: note
status: active
source: web
tags: ["22기", "리서치", "음성", "stt", "whisper", "claude-code", "wsl", "벤치마킹"]
related: ["[[index]]", "[[web-terminal]]", "[[remote-work]]"]
---

# 음성 입력을 PowerShell 밖 어디서나 — 실전 도구 벤치마킹

> 자작 `/mic`(Whisper+Claude Code)은 **윈도우 PowerShell에서만** 동작한다. 정작 쓰고 싶은 곳은 **WSL의 Claude, ttyd/SSH로 띄운 맥미니의 Claude** 등 다른 환경. "마이크 잡는 곳(윈도우)"과 "명령 받는 곳(WSL/맥/브라우저)"을 잇는 **실제 GitHub 프로젝트·스킬과 유저 활용 패턴**을 조사한 노트.

---

## 1. 문제 재정의

마이크·STT는 OS 네이티브라 캡처는 한 곳(윈도우)에서만 일어난다. 소비자(Claude Code)는 WSL·맥미니·브라우저 터미널 등 여러 곳. 커뮤니티는 이 간극을 **두 갈래**로 푼다.

## 2. 두 아키텍처 갈래

### A. 키스트로크 주입형 — 포커스된 창에 타이핑 (환경 무관)
마이크 가진 머신에서 핫키 누르고 말하면 변환 텍스트를 **지금 포커스된 창에 그대로 타이핑**한다. WSL 터미널 창·ttyd 브라우저 탭·IDE 무엇이든 **앱을 안 가린다.** 별도 연동 0. → 유저 대다수가 이 방식.

### B. MCP / 툴콜형 — Claude가 `listen()` 도구 호출
Claude Code가 직접 음성 도구를 호출하면 서버가 녹음·변환해 돌려준다. 더 에이전트답고 TTS 양방향도 되지만, **녹음은 마이크 있는 곳**에서 일어나야 해 WSL 오디오 배선이 숙제로 남는다.

## 3. 실제 GitHub 프로젝트

| 프로젝트 | 유형 | 동작 방식 | 도달 범위 | 적합도 |
|---|---|---|---|---|
| [savbell/whisper-writer](https://github.com/savbell/whisper-writer) (~1.1k★) | A | 핫키→**VAD 무음정지**→Whisper(로컬/ API)→**포커스 창 타이핑**. 4모드(연속·VAD·토글·홀드) | 윈도우 **모든 창**(WSL터미널·ttyd탭 포함) | ★★★ |
| [ebycoco/WhisperFlow](https://github.com/ebycoco/WhisperFlow) | A | 트레이앱, 홀드→어떤 앱에든 타이핑 (Wispr OSS 클론) | 윈도우 전역 | ★★ |
| [aaddrick/claude-ptt](https://github.com/aaddrick/claude-ptt) | A/B | Claude Code PTT, OpenAI API+로컬 whisper.cpp 듀얼, Win/mac/Linux | Claude 프롬프트 | ★★★ |
| [mbailey/voicemode](https://github.com/mbailey/voicemode) | B | MCP, `listen()`/`speak()`, 무음감지, 로컬 Whisper+Kokoro, Windows(WSL) | MCP 붙은 Claude | ★★ |
| [shreyaskarnik/voice-mcp](https://github.com/shreyaskarnik/voice-mcp) | B | 양방향 MCP, **Apple Silicon mlx-audio** 로컬 | 맥미니2(M4) 자체 | ★★ |
| [Ashton-Sidhu/claude-whisper](https://github.com/Ashton-Sidhu/claude-whisper) | B | ESC 홀드→웨이크워드+명령→Agent SDK 백그라운드 | Claude Code | ★ |
| [enesbasbug/voice-to-claude](https://github.com/enesbasbug/voice-to-claude) · [gmoqa/listen-claude-code](https://github.com/gmoqa/listen-claude-code) | B | Claude 플러그인, 로컬 whisper.cpp(Metal)/listen CLI | 맥 중심 | ★ |
| Claude Code 내장 `/voice` (2026-03) | — | 스페이스바 PTT, 설정0 | Claude Code. **WSL 오디오 미해결([#32497](https://github.com/anthropics/claude-code/issues/32497))** | △ |

## 4. 유저 활용 패턴

- **압도적으로 "A. 포커스 창 타이핑"** — IDE·터미널·Slack·브라우저 안 가리고 됨. "개발자 받아쓰기는 한 IDE가 아니라 모든 앱에서 돼야 한다"가 정설.
- **VAD 무음정지 + 홀드/토글 핫키**가 표준 UX. 고정 N초 녹음은 거의 안 씀(자작 `listen.py`의 약점).
- STT는 **로컬 whisper.cpp/faster-whisper**(무과금·프라이버시) vs **OpenAI API**(정확·간편) 선택형.
- WSL 유저: ① 윈도우측 A형 도구로 **WSL 터미널 창에 타이핑**(쉬움) 또는 ② [WSLg PulseAudio 배선](https://voice-mode.readthedocs.io/en/stable/troubleshooting/wsl2-microphone-access/)(`~/.asoundrc`→`/mnt/wslg/PulseServer`)으로 WSL 내부 직접 마이크(잔버그 많음).

## 5. 내 셋업 권장안

1. **즉답:** 윈도우에 **whisper-writer**(또는 claude-ptt) → 핫키 하나로 **WSL Claude·ttyd 탭 어디든 포커스만 하면** 음성 타이핑. 기존 OpenAI 키 재사용 + VAD 자동정지. "PowerShell에서만" 문제 종결.
2. **맥에서도:** 맥미니2(M4)엔 voice-mcp(Apple Silicon 로컬)로 음성+TTS.
3. 자작 `/mic`은 "이 세션 한 방 실행"용으로 남기고 범용은 위 도구에 위임(바퀴 재발명 X).
