---
title: SSH
date: 2026-05-23
tags: [index, ssh, remote, security]
related: ["[[index]]", "[[remote]]", "[[github]]", "[[remote-work]]"]
type: index
---

# SSH

원격 셸 접속 프로토콜. 외부 기기에서 맥미니에 안전하게 들어와 명령을 실행한다.

## 이 환경의 SSH 구성
- 맥미니 **원격 로그인 ON** (시스템 설정 → 공유).
- [[remote|Tailscale]] IP `100.x.x.x` 포트 22로 접속.
- 접속: `ssh mac-user@100.x.x.x`
- **키 인증** 등록 → 비밀번호 없이 자동 접속.

## 키 인증 (비번 없는 접속)
- 공개키를 맥미니 `~/.ssh/authorized_keys`에 등록 → 윈도우/노트북에서 자동 로그인.
- [[github|GitHub]] push도 SSH 키로 전환하면 keychain 문제 없이 어디서든 가능.

## 주의
- 비대화형 SSH 세션은 macOS keychain을 못 열어, gh HTTPS 인증이 막힐 수 있음 → SSH 키 방식으로 우회.

## 관련 노트
- [[remote]] · [[remote-work]] · [[phone]]
- [[github]] — SSH로 push 자동화
