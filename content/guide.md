# llm-wiki 사용 설명서

지피터스 22기 강의로 만든 **vault + 홈페이지 + 맥미니 원격 시스템**의 일상 운영 가이드.

---

## 1. 시스템 한눈에

```
[ 핸드폰 / 태블릿 / 윈도우 PC ]
              │
              ▼ Tailscale VPN (100.x.x.x)
       [ 맥미니 2 (24GB) - 24/7 ]
              ├─ ~/llm-wiki/         ← vault (단일 소스)
              ├─ Claude Code (CLI)
              └─ (예정) 텔레그램 봇, API, MCP

[ 인터넷 ]
       ▼
GitHub Pages ◀── git push (자동 빌드: Quartz)
https://starofself.github.io/llm-wiki/
```

**모든 콘텐츠의 단일 소스 = `~/llm-wiki/content/`** (맥미니 2 안).
- 윈도우 PC는 외출 시 SSH 클라이언트만.
- GitHub은 백업 + 공개 홈페이지 발행처.

---

## 2. 자주 쓰는 명령

### 2-1. 맥미니에 접속 (어디서나)

**윈도우 PC에서**:
```bash
ssh mac-user@100.x.x.x
```

**핸드폰에서** (Termius / Blink Shell / Prompt 3 등 SSH 앱):
- Host: `100.x.x.x`
- User: `mac-user`
- Auth: SSH key (윈도우 키를 핸드폰으로 옮기거나, 핸드폰 키를 따로 등록)

**접속 후 첫 명령**:
```bash
cd ~/llm-wiki
ls content/
```

### 2-2. 새 노트 만들기

```bash
cd ~/llm-wiki/content/notes
claude
# → "오늘 회의록 노트 하나 만들어줘" 식으로 자연어 지시
# → CLAUDE.md 컨벤션대로 프론트매터 붙여서 생성됨
```

또는 직접:
```bash
cat > content/notes/$(date +%Y-%m-%d)-주제.md <<'EOF'
---
title: 주제
date: 2026-05-23
type: note
status: active
source: own
tags: ["22기"]
related: ["[[index/22기]]"]
---

# 주제

본문...
EOF
```

### 2-3. 홈페이지 업데이트 (= git push)

```bash
cd ~/llm-wiki
git add .
git commit -m "노트 추가: 주제"
git push
```

→ GitHub Actions가 자동으로 Quartz 빌드 → GitHub Pages에 배포 (약 1-2분).

확인: <https://starofself.github.io/llm-wiki/>

### 2-4. 로컬 홈페이지 미리보기

```bash
cd ~/llm-wiki
npx quartz build --serve
# → http://localhost:8080 접속
```

push 전에 디자인/링크 확인할 때 사용.

---

## 3. 프론트매터 8필드 (강의 컨벤션)

| 필드 | 필수 | 설명 | 예시 |
|------|------|------|------|
| `title` | ✓ | 노트 제목 | `회의록 0520` |
| `date` | ✓ | 작성일 | `2026-05-20` |
| `tags` | ✓ | 분류 태그 (리스트) | `["회의", "22기"]` |
| `related` | ✓ | 관련 인덱스/노트 | `["[[index/22기]]"]` |
| `type` | 권장 | 유형 | `log` / `note` / `idea` / `spec` / `howto` |
| `status` | 권장 | 상태 | `draft` / `active` / `archived` |
| `source` | 권장 | 출처 | `own` / `book` / `web` / `talk` |
| `aliases` | 권장 | 별칭들 | `["주간미팅", "0520회의"]` |

⚠️ YAML 함정: `[[...]]` 위키링크, 한글/숫자로 시작하는 토큰(`22기`)은 **반드시 따옴표**.

---

## 4. 인덱스 위키 운영

- `content/index/index-{키워드}.md` 형태로 키워드별 목차 노트 생성
- 일반 노트의 `related: ["[[index/22기]]"]` 식으로 연결
- 홈페이지에서 백링크 그래프로 시각화됨

---

## 5. 원격 작업 패턴

### 5-1. 외출 중 핸드폰으로 메모 (예정 - 2주차 텔레그램 봇 이후)

> 강의 2주차 끝나면 텔레그램으로 `/new-note 회의록 0523` 한 줄 보내면 vault에 자동 저장됨

### 5-2. 외출 중 핸드폰 SSH로 직접 작업 (지금 가능)

- SSH 앱으로 맥미니 접속
- `cd ~/llm-wiki && claude` → 자연어로 작업 지시
- `git push`로 홈페이지 반영

### 5-3. 윈도우 PC에서 작업

- `ssh mac-user@100.x.x.x`
- 그 안에서 `tmux` 또는 `screen` 띄워두면 세션 유지됨
- Claude Code도 SSH 안에서 그대로 실행

---

## 6. 4주 강의 진행 체크리스트

- [x] **1주차** — Vault 구축
  - [x] `~/llm-wiki/` 폴더 생성
  - [x] CLAUDE.md (vault 컨벤션)
  - [x] 강의 자료 4개 보관 (`content/resources/`)
  - [x] Git + GitHub repo
  - [x] Quartz 정적 사이트 셋업
  - [x] GitHub Pages 배포
  - [ ] 인덱스 키워드 10개 정하기
  - [ ] 첫 노트 1개 작성
  - [ ] 슬래시 커맨드 3개 (`/new-note`, `/index-add`, `/graph`)
- [ ] **2주차** — 사용자 UI (텔레그램 봇)
  - [ ] BotFather에서 봇 생성
  - [ ] 봇이 vault 슬래시 호출
- [ ] **3주차** — 시스템 UI (API + Tailscale)
  - [x] Tailscale 셋업 ✓ (이미 됨)
  - [ ] API 서버 (FastAPI)
- [ ] **4주차** — 표준 UI (MCP)
  - [ ] MCP 서버 구축

---

## 7. 문제 해결

### SSH 접속이 안 됨
1. 맥미니 켜져 있는지 (Tailscale 디바이스 목록에서 100.x.x.x 보이는지)
2. 윈도우 → 맥미니 핑: `tailscale ping macmini-star2-macmini`
3. 맥미니 SSH 서비스 상태: 맥미니에서 `sudo systemsetup -getremotelogin` → `On` 확인
4. SSH key 등록 상태: 맥미니에서 `cat ~/.ssh/authorized_keys` → 윈도우 키 보이는지

### git push가 401 에러
- SSH 비대화형 세션에서는 macOS Keychain 못 열어서 인증 실패
- 해결: 맥미니에서 직접 `git push` 실행 (Claude Code든 터미널이든 맥미니 GUI 세션에서)

### Quartz 빌드 실패
```bash
cd ~/llm-wiki
rm -rf node_modules .quartz-cache
npm install
npx quartz build
```

### 홈페이지에 노트가 안 보임
- 프론트매터에 `draft: true` 있으면 발행 안 됨
- `content/` 폴더 안에 있는지 확인
- GitHub Actions 빌드 로그 확인: `gh run list --limit 5`

---

## 8. 백업 정책

- **Git remote** (`origin/main`): GitHub에 push 시 자동 백업
- **맥미니 2 디스크**: vault 원본
- **맥미니 1**: 예비 (수동 동기화)
- **OneDrive**: 윈도우 PC의 초기 6개 시드 파일 (참고용)

---

## 9. 보안 메모

- ⚠️ vault에 API 키, 비밀번호 같은 민감 정보 적지 말 것 → `.env` 파일에 두고 `.gitignore` 처리
- ⚠️ 공개 repo (`starofself/llm-wiki`)라 push되는 모든 파일은 인터넷에 공개됨
- 비공개 노트는 프론트매터에 `draft: true` 또는 별도 private repo로

---

## 10. 참고 자료

- 강의 1주차 슬라이드: `content/resources/week1-slides.html`
- 1주차 강의 채팅 로그: `content/resources/2026-05-20-week1-lecture-chat.md`
- OT 슬라이드: `content/resources/ot-slides-v2.html`
- Quartz 공식 문서: <https://quartz.jzhao.xyz>
- Tailscale 문서: <https://tailscale.com/kb/>

---

*문서 작성일: 2026-05-23 · 마지막 수정: 시스템 상태 변경 시 업데이트*
