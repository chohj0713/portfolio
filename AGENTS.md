## Project Overview

- Type: Single-page static portfolio site
- Purpose: Show PM/PO, 서비스 기획 역량과 실제 산출물을 한 페이지에서 전달
- Target audience:
  - 채용 담당자, 현업 리더
- Primary language: Korean (필요 시 핵심 문단의 영어 버전 추가 가능)

## Tech & Constraints

- Static site only: no backend, no framework
- Stack: Vanilla HTML, CSS, JavaScript
- No build tools (Webpack, Vite, Svelte 등 사용 금지)
- 외부 라이브러리는 필요한 경우에만 CDN 링크로 최소 사용
- 페이지 수:
  - 기본: `index.html` 단일 페이지
  - 확장이 필요하면 `projects.html`, `about.html`을 추가할 수 있으나, 기본은 원페이지 기준으로 설계

## Directory Structure
- Root
  - `index.html`           # 메인 포트폴리오 페이지
  - `AGENTS.md`            # 작업 규칙 문서 (이 파일)
  - `history.md`           # 작업 내역 기록(선택)
  - `css/`
    - `reset.css`
    - `base.css`
    - `layout.css`
    - `components.css`
  - `js/`
    - `main.js`
    - `animations.js`      # 필요 시
  - `images/`
    - `images/조홍준 포트폴리오 - 1) 기획 (고객반응 분석 및 리서치).png`
    - `images/조홍준 포트폴리오 - 2) 기획 (기획안)..png`
    - `images/조홍준 포트폴리오 - 3) 기획 (유저 시나리오).png`
    - ... (총 10장)

## Coding Conventions

### HTML
- 시맨틱 태그 사용: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- 섹션별로 `id`를 명확히 부여:
  - `id="hero"`, `id="experience"`, `id="projects"`, `id="skills"`, `id="contact"`
- 접근성:
  - 주요 제목에는 `<h1>` ~ `<h3>` 계층 사용
  - 버튼/링크에는 명확한 라벨 텍스트 제공

### CSS
- 파일:
  - `css/base.css`: 폰트, 색상 변수, 타이포그래피, 기본 요소 스타일
  - `css/layout.css`: 그리드/레이아웃, 섹션 간 간격
  - `css/components.css`: 카드, 버튼, 태그, 모달 등 컴포넌트
- 네이밍:
  - BEM 유사 규칙 권장: `.card`, `.card--highlight`, `.card__title`
- 반응형:
  - 기준: 모바일(≤ 768px), 데스크톱(> 768px)
  - 최소한 Hero, Project 카드가 모바일에서도 한 줄에 1개씩 보이도록.

### JavaScript
- 파일: `js/main.js`
- DOM 조작:
  - `data-*` 속성을 적극 사용 (`data-section="projects"`)
- 기능 예시:
  - 내비게이션 클릭 시 스무스 스크롤
  - 프로젝트 카드 ‘자세히 보기’ 토글/모달
- 전역 변수 최소화, 즉시 실행 함수/모듈 패턴 사용