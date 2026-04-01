# 제품 요구사항 정의서 (PRD): 최지원 강사 소개 페이지 (Astro 기반)

## 1. 프로젝트 개요 (Overview)
* **프로젝트명:** 최지원 강사 개인 브랜딩 및 소개 웹페이지 구축
* **목적:** '지식 전달자' 최지원 강사의 전문성, 교육 철학, 경력을 효과적으로 알리고 강의 및 협업 문의를 유도하는 고성능 랜딩 페이지 마크업 및 배포.
* **타겟 오디언스:** 
  * IT 교육 커리큘럼 기획자 및 기업 교육 담당자 (현대중공업, 한솔그룹 등 기업 출강 레퍼런스 어필)
  * KDT 등 부트캠프 기관 강사 섭외 담당자
  * 코딩 및 AI 기반 업무 자동화(AX)에 관심 있는 비전공자 및 주니어 개발자

## 2. 기술 스택 (Tech Stack)
* **Framework:** **Astro** (정적 사이트 생성(SSG)을 통한 압도적인 로딩 속도 및 SEO 최적화 달성)
* **Styling:** Tailwind CSS (또는 Vanilla CSS)
* **SEO/AEO:** Astro SEO 컴포넌트, JSON-LD 스키마 마크업 기능 구현

## 3. SEO 및 AEO (Answer Engine Optimization) 전략
AI 검색 최적화(AEO)와 전통적 검색(SEO)을 모두 충족하기 위한 전략적 접근입니다.

### 3.1. SEO 최적화 전략
* **SSR/SSG 활용:** Astro의 내장 SSG를 사용하여 초기 페이지 로드 타임(LCP) 극대화 및 검색 엔진 봇의 크롤링 친화성 확보.
* **Semantic HTML:** `<header>`, `<main>`, `<section>`, `<article>` 등 시맨틱 태그 구조화.
* **Meta & OG Tags:** 동적/정적 메타데이터 적용 (`title`, `description`, `og:image`, `og:title` 등). 키워드: `최지원 강사`, `IT 교육`, `AI 강의`, `AX 교육`, `생성형 AI`, `기업 특강`, `개발자 멘토링`.

### 3.2. AEO (Answer Engine Optimization) 최적화 전략
ChatGPT, Perplexity 등 대화형 AI 검색 엔진의 답변으로 채택되기 위한 구조화.
* **질의응답(Q&A) 위주의 텍스트 배치:** "최지원 강사는 누구인가요?", "어떤 강의를 진행하나요?" 와 같은 자연어 질문 형태의 Heading(`<h2>`, `<h3>`) 도입.
* **명확한 리스트와 단락 구조:** AI가 데이터를 추출하기 쉽도록 bullet point 형태의 이력 및 철학 정리 유지.
* **JSON-LD 구조화 데이터 삽입:**
  * `Person` 스키마: 강사 이름, 직업(Educator/Developer), 연락처, 소셜 링크(Github, Youtube).
  * `Course` / `EducationEvent` 스키마: 주요 강의 분야 및 개설 가능한 커리큘럼 데이터 마크업.
  * `FAQPage` 스키마: 강사 섭외 및 강의 스타일에 대한 FAQ 구현.

## 4. 핵심 페이지 구조 및 기능 요구사항 (Page Structure)

### 4.1. 배너 및 히어로 (Hero Section)
* **타이틀:** "복잡한 코딩과 낯선 AI를 일상의 다정한 대화로 풀어내는 사람."
* **서브 타이틀:** 최지원 강사 | 지식 전달자
* **기능:** 
  * 프로필 이미지 배치 (`KakaoTalk_20260317_111817929.jpg`, `Gemini_Generated_Image...png` 최적화 렌더링 - Astro의 `<Image/>` 컴포넌트 활용).
  * 강의 의뢰 및 문의하기 CTA 버튼 (mailto:one@oneground.ai.kr)
  * Github 및 Youtube 링크 아이콘.

### 4.2. 내 소개 및 철학 (About & Philosophy)
* **AEO Heading 제안:** "지식 전달자 최지원의 교육 철학은 무엇인가요?"
* **내용:**
  * 스타트업 '첫 번째 개발자'에서 시작한 스토리. 설명과 공유의 가치를 깨달은 배경.
  * 평점 4.8 이상의 검증된 교강사로서의 자부심.
* **핵심 철학 (3단계 강조):**
  1. 어려운 것은 쉽게 (초보자 눈높이)
  2. 쉬운 것은 재미있게 (생생한 예시)
  3. 재미있는 것은 깊이 있게 (실무 응용 실력)

### 4.3. 핵심 강의 분야 (Teaching Areas)
* **AEO Heading 제안:** "최지원 강사의 주요 강의 분야는 어떻게 되나요?"
* **내용 (3개의 Pillar로 시각화):**
  * **개발 (Development):** 웹/백엔드 (Java, Python), DB 설계 및 SQL.
  * **인공지능 (AI):** AI/머신러닝 기본~실전, 생성형 AI 및 LLM API 활용.
  * **업무 혁신 & AX:** 워크플로우 자동화, 기업 AX 역량 강화 교육.
* **강의 특징:** 기술 융합, 최신 트렌드 특강, 기업 맞춤형 커리큘럼.

### 4.4. 이력 및 경력 (Career)
* **AEO Heading 제안:** "최지원 강사의 실무 개발 및 교육 경력"
* **개발 경력 (Development):**
  * 스타트업 0 to 1 빌딩 및 50인 규모 성장 주도.
  * React, Spring 기반 CRM 및 AI 에이전트 무인 공간 솔루션 구현.
  * 다수의 공공/민간 프로젝트 PM 및 Tech Lead 경험.
* **교육 경력 (Education):**
  * KDT 및 국기과정 120명 이상 배출.
  * 현대중공업, 포스코DX, 한솔그룹 등 주요 기업 출강.
  * 정보통신연합회 멘토 및 프로그래머스, 해커스 강사 활동 이력.

### 4.5. 학력 및 전문 자격 (Education & Certifications)
* 정보통신학 공학사
* 직업훈련교사 (정보기술개발 3급, 전략계획 3급)
* AICE Associate, 정보처리기사, SQLD

### 4.6. 푸터 및 연락처 (Footer & Contact)
* "강의 및 협업 문의 환영" 메시지 재강조.
* **Contact Info:** 전화(010-2447-6990), 이메일(one@oneground.ai.kr).

## 5. 비기능적 요구사항 (Non-Functional Requirements)
* **웹 성능 (Performance):** Google Lighthouse 기준 Performance, Accessibility, Best Practices, SEO 모두 95점 이상 달성 (`astro/image` 최적화 필수).
* **반응형 웹 (Responsive Design):** 모바일, 태블릿, 데스크톱 등 디바이스 해상도에 구애받지 않는 가독성 레이아웃 설계.
* **접근성 (Accessibility):** 모든 이미지에 적절한 `alt` 속성 부여 (AEO 관점에서도 필수적), 시각적 대비 확보.

---
**[향후 진행 단계]**
1. Astro 프로젝트 초기화 (`npm create astro@latest`)
2. 컴포넌트별 뷰 구성 및 Tailwind 스타일링 적용
3. SEO Meta 및 JSON-LD 모듈 구현
4. Github Pages 혹은 Vercel, Netlify 등을 통한 정적 웹호스팅 배포
