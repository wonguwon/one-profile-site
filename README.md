# 최지원 강사 | 지식 전달자 — 개인 브랜딩 페이지

IT·AI·AX 교육 전문가 최지원 강사의 개인 소개 및 강의 의뢰 랜딩 페이지.

**라이브:** [one-profile.wonguwon25.workers.dev](https://one-profile.wonguwon25.workers.dev)

---

## 기술 스택

| 항목 | 내용 |
|---|---|
| Framework | [Astro](https://astro.build) 4.16 (SSG) |
| Styling | Tailwind CSS 3.4 |
| 배포 | Cloudflare Workers (Static Assets) |
| 이미지 최적화 | Astro `<Image />` → WebP 자동 변환 |

## 프로젝트 구조

```
one-profile/
├── app/                  # Astro 프로젝트 루트
│   ├── public/           # 정적 파일 (og-image 등)
│   ├── src/
│   │   ├── assets/       # 이미지 (빌드 시 최적화)
│   │   ├── layouts/      # Layout.astro (SEO/JSON-LD)
│   │   └── pages/        # index.astro (단일 페이지)
│   ├── astro.config.mjs
│   ├── tailwind.config.mjs
│   └── wrangler.toml     # Cloudflare Workers 설정
├── info/                 # 원본 자료 (이미지, 참고 문서)
└── Instructor_Page_PRD.md
```

## 로컬 개발

```bash
cd app
npm install
npm run dev       # http://localhost:4321
```

## 빌드

```bash
cd app
npm run build     # dist/ 폴더 생성
npm run preview   # 빌드 결과 로컬 확인
```

## 배포

`main` 브랜치에 push하면 Cloudflare Workers가 자동으로 빌드·배포합니다.

```
Build command : npm run build
Output dir    : dist
Root directory: app
```

## 주요 기능

- **SEO** — 시맨틱 HTML, 메타 태그, Open Graph, Canonical
- **AEO** — JSON-LD (Person · FAQPage 스키마), 질문형 h2 heading
- **이미지 최적화** — Astro Image 컴포넌트로 WebP 자동 변환
- **반응형** — 모바일·태블릿·데스크톱 대응
- **스크롤 네비게이션** — 커버 이미지 위 투명 → 스크롤 후 흰 배경 전환
