---
title: 원격 작업 가이드 — 노트북·핸드폰에서 맥미니 부리기
aliases: ["원격작업", "remote work", "원격"]
date: 2026-05-23
type: howto
status: active
source: own
tags: ["원격", "ssh", "tailscale", "맥미니", "운영"]
related: ["[[guide]]", "[[index]]"]
---

# 원격 작업 가이드 — 노트북·핸드폰에서 맥미니 부리기

> 맥미니 2(24/7 켜진 메인 서버)에 외부 디바이스로 접속해서 작업하는 방법. Tailscale + SSH + Claude Code 조합.

---

## 핵심 아이디어

```
[ 외부 디바이스 ]                    [ 맥미니 2 ]
 - 윈도우 노트북       Tailscale       - vault (~/llm-wiki/)
 - 아이폰/아이패드  ──────────────►   - Claude Code (CLI)
 - Z Fold                 SSH          - 24/7 켜져 있음
 - 친구 PC, 등                         - 100.123.66.77
```

- **두뇌**: 맥미니에 있는 Claude Code
- **입출력 채널**: 어디든 키보드만 있으면 됨
- **네트워크**: Tailscale VPN (공인 IP 노출 없음, 어디서나 100.x.x.x로 접근)

---

## 시나리오 1 — 윈도우 노트북에서

### 한 번만 셋업
1. 윈도우에 Tailscale 설치 + 같은 계정 로그인
2. SSH 키 생성: PowerShell에서 `ssh-keygen -t ed25519`
3. 공개키(`~/.ssh/id_ed25519.pub`)를 맥미니 `~/.ssh/authorized_keys`에 추가

### 매일 사용
```powershell
ssh starofselfhigmail.com@100.123.66.77
cd ~/llm-wiki
claude
```

### 세션 유지 (자리 비울 때)
```bash
tmux new -s work     # 처음 시작
# ... Claude Code로 작업 ...
# Ctrl+B → D 누르면 세션 유지한 채 나가기
tmux attach -t work  # 다시 들어올 때
```

> 노트북 닫고 다른 곳에서 폰으로 들어와도 같은 세션 그대로 이어짐.

---

## 시나리오 2 — 아이폰/아이패드에서

### 추천 SSH 앱

| 앱 | 가격 | 장점 |
|----|------|------|
| **Blink Shell** | 유료 (~$20) | 정식 터미널, mosh 지원 (네트워크 끊겨도 세션 유지), 키보드 단축키 풍부 |
| **Termius** | 무료/유료 | UI 가장 쉬움, 키 관리 깔끔, 동기화 기능 |
| **a-Shell** | 무료 | iSH 기반 정식 Linux 셸 |

### 셋업 (Termius 예시)
1. App Store에서 Termius 설치
2. Tailscale 앱 설치 + 로그인 (반드시 켜져 있어야 함)
3. Termius에서 New Host:
   - Hostname: `100.123.66.77`
   - Port: `22`
   - Username: `starofselfhigmail.com`
4. Keys 탭에서 새 SSH key 생성 → 공개키를 맥미니에 등록 필요
   - 가장 쉬운 방법: 공개키를 메일/메모로 본인에게 보낸 뒤 맥미니에서 `echo '...' >> ~/.ssh/authorized_keys`
5. Connect

### 매일 사용
```bash
cd ~/llm-wiki
claude
# 자연어로 지시
# 예) "오늘 회의록 노트 만들어줘. 주제는 22기 1주차 회고"
```

세로 화면에서도 잘 보이게 폰트 크기 조절 (Termius: 설정 → Appearance).

---

## 시나리오 3 — 안드로이드 (Z Fold)

### 추천 앱
- **Termux** (무료, F-Droid 추천) — 정식 Linux 환경
- **JuiceSSH** (무료/유료) — UI 쉬움

### 셋업 (Termux)
```bash
pkg update && pkg install openssh
ssh-keygen -t ed25519
# 공개키 ~/.ssh/id_ed25519.pub를 맥미니에 등록
ssh starofselfhigmail.com@100.123.66.77
```

Z Fold라면 키보드 + 큰 화면 활용 → 거의 노트북 수준 작업 가능.

---

## 시나리오 4 — 친구 PC / 카페 / 호텔에서

1. 해당 PC에 Tailscale 설치 + 본인 계정 로그인 (Wi-Fi 무관, 인터넷만 있으면 됨)
2. SSH 클라이언트 (mac/linux는 기본 내장, 윈도우는 PowerShell의 ssh)
3. SSH 키 등록 안 했으면 비밀번호 로그인

> ⚠️ **공용 PC에서는 작업 후 Tailscale 로그아웃 + SSH 키 안 남겼는지 확인**.
> 잃어버린 디바이스가 있으면 즉시 [Tailscale Admin](https://login.tailscale.com/admin/machines)에서 해당 디바이스 제거.

---

## 시나리오 5 — 핸드폰에서 한 줄 메모 (예정)

> **2주차 강의 끝나면 가능**: 텔레그램 봇으로 `/new-note 회의록 0523` 한 줄 보내면 자동으로 vault에 노트 저장됨. SSH도 필요 없음.

---

## 일상 흐름 (예시)

| 시간 | 위치 | 작업 |
|------|------|------|
| 09:00 | 집 데스크탑 (윈도우) | SSH로 맥미니 접속 → 어제 일 정리 |
| 12:00 | 카페 (아이폰) | Blink Shell로 SSH → 아이디어 노트 추가 |
| 15:00 | 회의실 (아이패드) | Termius → vault 검색해서 자료 찾기 |
| 18:00 | 이동 중 (Z Fold) | Termux → git pull로 변경사항 확인 |
| 22:00 | 침대 (아이폰) | Blink Shell → 오늘 회고 노트 작성 |

**모든 작업이 같은 vault에 쌓임** → 다음 날 데스크탑에서 봐도 그대로.

---

## 자주 묻는 문제

### "Connection refused"
- 맥미니 켜져 있나? Tailscale 앱에서 디바이스 목록 확인 → 100.123.66.77 보이는지
- 맥미니 SSH 서비스: 맥미니에서 `sudo systemsetup -getremotelogin` → On 확인

### "Permission denied (publickey)"
- 외부 디바이스의 SSH 공개키가 맥미니 `~/.ssh/authorized_keys`에 있는지 확인
- 새 디바이스마다 한 번씩 등록 필요

### "맥미니가 잠들었음 (응답 없음)"
- 24/7 켜두려면 절전 모드 해제 필요:
  ```bash
  sudo pmset -a sleep 0 disksleep 0
  ```
- 시스템 설정 → 배터리 → "컴퓨터 절전" 끄기

### "Tailscale이 안 보임"
- Tailscale 앱 재시작
- `tailscale up` 명령 (CLI 설치 시)
- 다른 디바이스에서 Tailscale 같은 계정으로 로그인 됐는지

### "한국어가 깨짐"
- SSH 클라이언트 인코딩 UTF-8 설정
- 맥미니 `~/.zshrc`에 `export LANG=ko_KR.UTF-8` 추가

---

## 보안 체크리스트

- [ ] SSH 키는 **디바이스별로** 따로 생성 (분실 시 해당 키만 폐기)
- [ ] 맥미니 비밀번호는 강한 것으로 (SSH key auth가 막혀도 비밀번호 시도 가능)
- [ ] Tailscale은 **본인만 가입한** Tailnet 사용 (조직 공유 X)
- [ ] vault에 비밀번호/API 키/토큰 절대 적지 말 것 → `.env` + `.gitignore`
- [ ] 디바이스 잃어버리면 즉시:
  - Tailscale Admin → 해당 디바이스 제거
  - 맥미니에서 해당 SSH 키 라인 `~/.ssh/authorized_keys`에서 삭제

---

## 더 알아보기

- [[guide]] — 전체 시스템 가이드
- [Tailscale 공식 문서](https://tailscale.com/kb/)
- [Blink Shell 가이드](https://docs.blink.sh/)
- [tmux 치트시트](https://tmuxcheatsheet.com/)
