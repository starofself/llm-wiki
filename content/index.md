---
title: llm-wiki — 냐안의 별
date: 2026-05-23
type: note
status: active
source: own
tags: ["22기", "vault"]
---

# llm-wiki

지피터스 22기 "내 자동화에 '인터페이스'를 입히는 4주" 강의 학습 vault.

> 카파시 *"I want to write notes that LLMs can read."* 비전을 따라가는 첫 조각.

---

## 🖥 빠른 접근 (Tailnet 내부만)

- **[브라우저 터미널 → Claude Code](http://100.x.x.x:7681/)** — 새 탭에서 즉시 `cd ~/llm-wiki && claude` 가능

## 📖 시작하기

- [[guide]] — **시스템 사용 설명서** (SSH, git push, 프론트매터 등)
- [[remote-work]] — **노트북/핸드폰에서 맥미니 부리는 법** (Tailscale + SSH + Claude Code)
- [[web-terminal]] — **브라우저 안 터미널** (ttyd 사용법)
- [[curation/index|LLM-WIKI 반영 후보 큐]] — 웹/영상/HTML 자료를 많이 참고하되, 본문에 반영할 것만 선별하는 트리

## 📝 작성한 글

- [[2026-05-30-week2-review]] — **[2주차] 인터페이스개발 수강 후기** ([원문](https://www.gpters.org/nocode/post/2juca-inteopeiseugaebal---2juca-sugang-hugi-telregeuraem-bos-windou-iRX9ptY4UdOrKDm)) · _텔레그램 봇 + 윈도우 노트북에서 SSH·ttyd로 맥미니 부리기 + 헤르메스/클로드/코덱스 병렬_
- [[2026-05-22-week1-review]] — [OT과제] 1주차 수강 후기 ([원문](https://www.gpters.org/nocode/post/interface-development-week-1-NCK9Vqj4khZxQGm)) · _오프라인 모임 후기 추가 (5/23)_
- [[2026-05-19-pre-course-case-study]] — 수강 전 사례글 ([원문](https://www.gpters.org/nocode/post/taking-course-want-make-ixRjUq0FvAytqMX))

## 🗞 AI 데일리 다이제스트

> 매일 밤 10시 — AI·도구·논문·PKM 새 소식 + "Claude가 배울 것 / 내가 알 것"

- [[2026-06-05-ai-digest]] — Claude v2.1.163 버전가드레일·WebFetch권한픽스·6/15과금분리 D-10 · Project Glasswing 150조직/15개국·Claude Security 2100패치 · Gemini CLI 6/18종료 D-13 · GPT-Rosalind·ChatGPT Sites·GPT-4.5 6/27은퇴 D-22 · SSGM 메모리거버넌스·선택적망각 · PKM 캡처파이프라인병목 · Hermes Desktop v0.15.2 · OpenClaw 6.2 Skill Workshop
- [[2026-06-04-ai-digest]] — Claude v2.1.161/162 병렬툴호출·OTel·6/15과금분리 D-11 · Antigravity CLI 이관 D-14 · GPT-5.6 6월루머·GPT-4.5 6/27은퇴 · AgeMem 메모리=툴액션 · PKM 3-아키텍처 수렴 · Hermes Desktop 6/2 네이티브GUI · OpenClaw 스킬보안(SkillSpector·HF데이터셋)
- [[2026-06-03-ai-digest]] — Claude 6/2 대규모장애(서브에이전트 무한증식)→복구·IPO신청·Opus 4.8·Glasswing 15개국 · Gemini CLI 6/18종료 D-15 · GPT-5.5 Instant 기본·canvas폐지·GPT-4.5 6/27은퇴 · Admission Control 메모리 쓰기게이팅 · LLM Wiki 플러그인 · Hermes v0.15.2(6월無) · OpenClaw 6.1 알파/베타
- [[2026-06-02-ai-digest]] — Claude v2.1.160 셸/빌드설정 쓰기가드·6/15 과금분리 · Gemini CLI 6/18종료 · GPT-4.5 6/27은퇴·5.4 mini · 기억주권(LTM보안) · LLM Wiki 유지비0 · Hermes v0.15.2·Brainworm방어 · OpenClaw 6.1 알파/베타
- [[2026-06-01-ai-digest]] — Claude v2.1.159 인프라패스·OPUS_4_6_FAST_MODE_OVERRIDE 6/1제거·도쿄 6/5-6 · Antigravity CLI 전체공개 D-17 · GPT-4.5 D-26 · MemCog associative graph · Starter Kit v4 · Hermes v0.15.1 hotfix · OpenClaw 5.28 stable 정정
- [[2026-05-31-ai-digest]] — Claude v2.1.158 Dynamic Workflows 공식·보안플러그인 30%↓ · GPT-5.5 Instant 채팅인라인블록·Canvas폐지·o3 8/26종료 · R²-Mem 2층메모리 · Why Obsidian Won · **Hermes v0.15 -76%·MCP Catalog·OpenHands·ntfy**
- [[2026-05-30-ai-digest]] — Claude Auto mode Bedrock/Vertex · .claude/skills 자동로드 · Codex Windows 컴퓨터사용·메모리 versioned · GEM 4-operator 논문 · kepano 공식 Obsidian 스킬 · OpenClaw 5.29-alpha
- [[2026-05-29-ai-digest]] — Opus 4.8·Dynamic Workflows·Fast Mode 3×저렴 · Antigravity 한도 9× · Codex 0.135 Goal Mode · R²-Mem 외부경험저장소 · Karpathy LLM Wiki 무브먼트 · OpenClaw 5.27 보안
- [[2026-05-28-ai-digest]] — Claude 보안플러그인·SpaceX Colossus · Antigravity 2.0 UI패치·Gemini 9× · Codex 자가개선 세무에이전트 · 메모리 어드미션컨트롤 · LLM Wiki SaaS ROI · Hermes x_search·MS Teams · OpenClaw /models 4100×
- [[2026-05-27-ai-digest]] — Claude v2.1.152·disallowed-tools·광고없음 · Antigravity CLI 6/18종료 · Codex 온프렘(Dell) · AgeMem 입수제어 · Obsidian 공식스킬 · Hermes PyPI·로컬프록시 · OpenClaw 5.26
- [[2026-05-26-ai-digest]] — Anthropic 컴플라이언스 28종·Compliance API · Antigravity 2.0 UI정정 · GPT-5.5/Codex 온프렘 · Obsidian 공식 Claude 스킬 · Hermes v0.14 로컬프록시
- [[2026-05-25-ai-digest]] — Claude 에이전트 미터링(6/15) · Google AI Ultra $100 · ChatGPT 재무 · A-MAC 입수게이트 논문 · OpenClaw 탭백승인
- [[2026-05-24-ai-digest]] — Claude 커넥터·새헌법 · Antigravity 한도 9배 · ChatGPT 메모리소스 · qmd 로컬검색 · OpenClaw 5.24-beta
- [[2026-05-23-ai-digest]] — Claude 원격제어 · Gemini 3.5 Flash · Karpathy LLM Wiki · 메모리 논문 · Hermes v0.14 · OpenClaw

## 🔎 리서치/산업 해석

- [[2026-05-27-hashed-ai-agent-economy-deep-research]] — 해시드 김서준 인터뷰 기반 AI 에이전트 경제·VC 재정의·Web3 신원/결제 인프라 딥리서치

## 🗒 작업 일지

- [[2026-05-23-worklog]] — SSH 원격접속 + llm-wiki 구축 + 텔레그램 봇 연결 + 봇 점검

## 📚 강의 자료

- [1주차 슬라이드 (HTML)](resources/week1-slides.html)
- [[2026-05-20-week1-lecture-chat]] — 1주차 본강의 채팅 로그
- [OT 슬라이드 (HTML)](resources/ot-slides-v2.html)
- [[2026-05-17-practice-session-antigravity]] — 실습세션 (안티그래비티 설치)
- [[2026-05-25-html-vs-markdown-llm-signals]] — HTML 태그가 Markdown보다 LLM에게 더 명확한 시그널을 주는 이유와 Obsidian의 역할 재정의

## 🗓 진행 현황

- [x] **1주차** — Vault 구축 ✅
  - [x] 폴더 + CLAUDE.md
  - [x] 강의 자료 보관
  - [x] Git + GitHub repo
  - [x] Quartz + 자체 호스팅 (24/7)
  - [x] SSH + Tailscale 원격 접근
  - [x] 인덱스 키워드 10개
  - [x] 브라우저 터미널 (ttyd)
  - [ ] 슬래시 커맨드 3개
- [x] **2주차** — 사용자 UI (텔레그램 봇) ✅
  - [x] BotFather 봇 생성 + 토큰
  - [x] 텔레그램 ↔ Claude Code 브리지 (launchd 24/7)
  - [x] 사진/파일 자동 저장 (`~/gpters-photos`, 22개 누적)
  - [x] 멀티에이전트 디스패처 (`~/ai-agents/dispatch.sh`, `parallel.sh`)
  - [x] 윈도우 노트북 → 맥미니 SSH/ttyd 워크플로 확립
  - [x] 후기 발행 ([[2026-05-30-week2-review]])
- [ ] **3주차** — 시스템 UI (API + Tailscale)
- [ ] **4주차** — 표준 UI (MCP)

## 🏷 인덱스 키워드

- [[obsidian]] · [[claude]] · [[codex]] · [[ssh]] · [[github]]
- [[phone]] · [[remote]] · [[openclaw]] · [[hermes]] · [[gpters-22]] · [[html]]

## 🔗 외부 링크

- 🐙 [GitHub repo](https://github.com/starofself/llm-wiki) — 소스/이슈 (private)
- 🏠 [기존 Hugo 사이트](https://github.com/starofself/starofself)
- 📊 [OpenClaw Intelligence Hub](https://github.com/starofself/openclaw-intelligence-hub) — Next.js 브리핑 대시보드
