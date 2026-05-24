---
title: "벤치마킹 — 말로 하는 코딩(Voice-driven Coding) 도구·구조 정리"
aliases: ["음성 코딩 벤치마킹", "Voice Coding Benchmark", "말로 하는 코딩"]
date: 2026-05-24
type: note
status: active
source: web
tags: ["22기", "리서치", "음성", "stt", "whisper", "claude-code", "벤치마킹"]
related: ["[[index]]", "[[web-terminal]]", "[[remote-work]]"]
---

# 말로 하는 코딩 벤치마킹

> 주요 유튜브·커뮤니티·도구·논문에서 "말로 하는 코딩(voice-driven coding)"이 **어떤 식으로 구현돼 있는지** 조사하고, 내가 만든 `/mic`(Whisper + Claude Code)가 그 지형에서 어디에 위치하는지 정리한 리서치 노트.

---

## 1. 두 갈래의 패러다임

말로 코딩한다는 건 실제로는 성격이 다른 두 가지를 가리킨다. 이걸 섞으면 도구 비교가 꼬인다.

| 구분 | ① 음성 받아쓰기 (Dictation) | ② 음성 명령 / 에이전트 (Command / Agent) |
|---|---|---|
| 하는 일 | 말 → **텍스트**로 변환해 입력칸에 꽂음 (키보드 대체) | 말 → **의도 파악** → 코드 편집·명령 **실행** |
| 똑똑함 위치 | 받아쓰는 쪽은 멍청, 두뇌는 그걸 받는 앱(에디터/LLM) | STT 뒤의 LLM·규칙엔진이 두뇌 |
| 대표 | Wispr Flow, Aqua Voice, Apple/Google 받아쓰기 | Serenade, Talon, Claude Code 음성, 내 `/mic` |
| 비유 | 더 좋은 **입(口)** | 입 + **손(실행)** |

내 `/mic` 는 ②에 속한다 — Whisper가 입, Claude Code(셸·파일 도구)가 손·두뇌.

---

## 2. 공통 파이프라인 구조

대부분의 음성 코딩 도구는 이 모듈 파이프라인을 공유한다:

```
마이크 → [STT] → 텍스트 → [LLM / 규칙엔진] → 동작(코드·명령) → (선택)[TTS] → 음성 응답
```

- **STT(받아쓰기)**: OpenAI Whisper가 사실상 표준. 68만 시간 다국어 학습, 잡음·억양에 강함. 로컬(whisper.cpp/MLX) 또는 API.
- **LLM(두뇌)**: GPT-4o·Claude·로컬 Llama 3 등. 의도 해석·코드 생성.
- **TTS(선택)**: ElevenLabs, OpenAI TTS, 로컬 엔진. 손 없는 환경에서 응답 읽어주기.
- **지연(latency)** 참고치: STT ~200ms + LLM 첫 토큰 ~120ms + TTS 버퍼 ~400ms ≈ 첫 음성까지 약 500ms대. 받아쓰기만이면 TTS 빼고 훨씬 빠름.

프라이버시 우선 흐름은 STT·LLM을 **전부 로컬**(whisper + llama.cpp)로 돌려 음성·코드가 기기 밖으로 안 나가게 한다 — 내 구성은 STT만 OpenAI API, 두뇌는 Claude Code.

---

## 3. 도구별 정리

### Wispr Flow
- AI 받아쓰기. **$81M 투자**, OpenAI Codex의 기본 음성 엔진으로 채택됨.
- 벤치마크 정확도 97.2%(Apple 받아쓰기 85~90%, Google 문서 음성입력 89~92% 대비).
- 단점: **클라우드 전용(오프라인 없음)**, 맥락 파악용으로 활성 창 스크린샷을 클라우드로 전송 → 프라이버시 고려 필요. 요금 ~$15/mo.

### Aqua Voice
- **프로그래밍 특화** 받아쓰기. YC 지원 스타트업, 자체 STT 모델 **Avalon**(2025.8) — 프롬프트체 말투·코드·이메일에 특화 학습.
- 코딩·AI 용어 정확도에서 Wispr 파이프라인보다 우위, 스트리밍 표시가 ~450ms 빠름. 요금 ~$8/mo.

### Serenade
- **음성→코드 구조적 제어**의 원조(2019, 반복사용손상(RSI) 진단 계기로 시작). 오픈소스 기원.
- "insert for loop", "rename variable" 같은 **명령어 문법**으로 코드 구조를 이해하고 편집. 받아쓰기가 아니라 구조 조작.

### Talon
- 파워유저용 **완전 음성 IDE 제어**. 키보드를 통째로 대체 가능, 커스텀 명령 무한.
- 단점: 고유 명령 체계 학습에 수 주 소요 — 입문자는 받아쓰기로 익숙해진 뒤 넘어가는 걸 권장.

### Claude Code 내장 음성 모드 (`/voice`)
- Anthropic이 **2026-03-03** 출시. `/voice` → 스페이스바 홀드(푸시투토크) → 말하면 전사돼 프롬프트에 삽입, 떼면 실행.
- 장점: **설정 0**. 단점: 받아쓰기(①) 성격이라 한국어 정확도·명령 라우팅은 별도 STT만 못할 수 있음(그래서 내가 Whisper 자작).

### 커뮤니티 도구
- **VoiceMode (MCP 서버)**: Whisper STT + OpenAI TTS를 MCP로 물려 양방향 음성.
- **claude-whisper (GitHub, Ashton-Sidhu)**: 설정 키(기본 ESC) 홀드 → 웨이크워드+명령 → Claude Agent SDK로 전사·실행. 백그라운드 작업 음성 트리거.

---

## 4. 한눈 비교

| 도구 | 유형 | STT | 두뇌/실행 | 오프라인 | 강점 |
|---|---|---|---|---|---|
| Wispr Flow | 받아쓰기 | 자체 클라우드 | 받는 앱 | ✗ | 범용·고정확도 |
| Aqua Voice | 받아쓰기 | Avalon | 받는 앱 | ✗ | 코딩 용어·속도 |
| Serenade | 구조 명령 | 자체 | 자체 엔진 | 일부 | 코드 구조 조작 |
| Talon | 완전 제어 | 플러그형 | 자체 | ✓ | 키보드 완전 대체 |
| Claude `/voice` | 받아쓰기 | 내장 | Claude | ✗ | 설정 0 |
| **내 `/mic`** | **명령+에이전트** | **Whisper API(ko)** | **Claude Code** | STT만 클라우드 | **한국어·내 PC 제어** |

---

## 5. 시사점 (내 구성 기준)

- 시장 주류는 ①받아쓰기(영어 생산성)인데, 내 1순위는 **"한국어로 말해서 내 맥미니/PC를 부리는 것"** → ②에이전트형이라 방향 자체가 다르다. 베끼지 말고 이 차별점을 살릴 것.
- **STT는 Whisper로 충분**(업계 표준 재확인). 굳이 자체 모델 불필요.
- **두뇌를 따로 안 만든 게 정답**: Serenade/Talon은 명령 문법을 직접 설계해야 하지만, Claude Code가 셸·파일 도구로 의도 해석+실행을 다 한다 → 유지보수 부담 0.
- 개선 여지: ⓐ 무음 감지(VAD) 자동 종료(고정 N초 → 말 끝나면 자동 멈춤), ⓑ 푸시투토크 글로벌 핫키(터미널 밖에서도), ⓒ 응답 TTS(선택). → `/mic` 다음 작업 후보.

---

## 출처

- [Aqua Voice](https://aquavoice.com/) · [Aqua vs Wispr (getvoibe)](https://www.getvoibe.com/resources/aqua-voice-vs-wispr-flow/)
- [Wispr Flow — best dictation apps](https://wisprflow.ai/best-dictation-apps) · [Vibe coding with Wispr Flow](https://wisprflow.ai/post/vibe-coding-with-wispr-flow)
- [Voice-to-Code Tools 2025 (builtthisweek)](https://www.builtthisweek.com/blog/voice-to-code-tools-2025)
- [Claude Code Voice Mode 가이드 (buildmvpfast)](https://www.buildmvpfast.com/blog/claude-voice-mode-hands-free-programming) · [Voice Input × Claude Code (SmartScope)](https://smartscope.blog/en/ai-development/ai-automation/voice-input-programming-hands-on-implementation-2025/)
- [claude-whisper (GitHub)](https://github.com/Ashton-Sidhu/claude-whisper)
- [Building a Voice-Controlled AI Agent with Whisper + GPT-4o-mini (dev.to)](https://dev.to/gurrala_saihaneesh_eb299/building-a-voice-controlled-ai-agent-with-openai-whisper-gpt-4o-mini-and-nextjs-4mh7) · [Offline Voice AI Coding Assistant (dev.to)](https://dev.to/rohan_patil_29115/building-a-fully-offline-voice-ai-coding-assistant-ai-ide-with-whisper-llama-3-2ipk)
