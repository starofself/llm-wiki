---
title: 원격
date: 2026-05-23
tags: [index, remote, tailscale, interface]
related: ["[[index]]", "[[remote-work]]", "[[ssh]]", "[[phone]]"]
type: index
---

# 원격 (Remote)

집의 맥미니를 외부(노트북·핸드폰)에서 부리는 모든 방식의 묶음. "어디서든 내 서버를 쓴다."

## 원격 접근 스택
- **Tailscale** — 기기들을 같은 사설망(VPN)으로 묶음. 맥미니 IP `100.x.x.x`.
- **[[ssh|SSH]]** — 그 망 위에서 터미널/파일 전송.
- **Claude Code** — 원격 셸에서 에이전트 작업 수행.

## 왜 Tailscale인가
- 공유기 포트포워딩 없이 안전하게 연결.
- 어느 네트워크에 있든 같은 IP로 접근.
- 24/7 켜진 맥미니가 항상 응답.

## 관련 노트
- [[remote-work]] — 실제 접속 절차
- [[2026-05-20-interface-tailscale]] — Tailscale 설정 메모
- [[ssh]] · [[phone]]
