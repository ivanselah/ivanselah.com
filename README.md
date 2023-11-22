## [ivanselah.com](https://ivanselah.com)

<sub><sup>Written by <a href="https://github.com/ivanselah">@Ivanselah</a></sup></sub><small>✌</small>

---

### ✋ 프로젝트의 목적

- 프론트엔드 기술 블로그

---

#### ⚙️ Tech

- Next.js
- TypeScript
- Tailwind CSS

---

#### 🎯 Next.js 를 사용한 이유 (현 프로젝트 14 버전)

- 폴더기반 자동라우팅
- 클라이언트 컴포넌트, 서버 컴포넌트
- 새로 디자인한 서버 API 기능
- 직관적인 Rendering 전략 선택 가능
- 캐싱 전략
- 이미지와 폰트 최적화
- 직관적인 SEO 최적화

등 다양한 기능을 제공

Next.js 13버전이 베타에서 공식 문서에 릴리즈되면서 Vercel에서는 무엇을 해결하려고 하였는지, 어떠한 점이 개선되었는지 Next.js에 대한 이해를 넓히는 데 많은 도움이 되었습니다.
또한, 목적에 맞게 SSG, ISR, CSR, SSR를 하이브리드로 사용함으로써 성능 최적화와 SEO 보완 등 사용자 경험을 향상시키는 데 많은 이점을 얻을 수 있었습니다.

#### 🎯 Tailwind 를 사용한 이유

대부분의 CSS-in-JS 라이브러리들이 쓰는 방식은 Runtime CSS-in-JS 또는 Runtime stylesheets 라고 합니다. 스타일을 정의하는 코드가 클라이언트 런타임 때 실행되는 JS 번들에 포함되는 방식인데 브라우저는 스타일 코드를 해석하지 못하므로 라이브러리의 코드도 JS 번들에 포함되어야 합니다. 해석된 스타일 코드는 document의 head 태그에 style 태그를 추가하거나 CSSStyleSheet API로 직접 CSSOM에 적용시켜서 사용합니다.

이러한 방식으로 인해 단점이 두 가지 존재합니다.

- JS 번들 용량 증가: 스타일 코드와 라이브러리 런타임 코드가 클라이언트로 전달되어야 합니다.
- 페이지 렌더링 시간 증가: JS에 작성된 CSS 코드를 구문 분석하고 동적으로 추가하면서 Scripting 시간이 증가합니다.

Next.js SSR에서 CSS-in-JS 라이브러리를 그대로 사용하면 hydrate 이전 서버에서 받아오는 HTML 에 스타일이 전혀 적용되지 않아 잠깐 날 것의 HTML이 나타나는 문제가 있습니다.
그렇기 때문에 보통 SSR 과정에서 정적으로 생성되는 요소의 CSS만 추출해서 HTML에 적용하도록 설정합니다.

Tailwind CSS는 Utility CSS로 class name을 컴포넌트가 아니라 기능에 붙임으로써 CSS의 문제를 해결하려 했습니다.
Tailwind는 utility CSS이므로 필요에 따라 확장성있게 CSS를 작성할 수 있고, 빌드 시에 사용하지 않는 클래스는 제거되어 번들 크기에 주는 영향도 줄일 수 있습니다.
또한 atomic한 특성으로 인해 프로젝트의 크기가 거대해져도 스타일시트의 크기가 비례해서 늘어나지 않는 이점도 있습니다.

> 프론트엔드 기술은 정말 빨리 변화하고 있습니다.
> 불과 1년 전만 해도 React와 Vue가 프론트엔드 기술 시장의 점유율을 가지고 있었는데 지금은 React가 우세하고 Next.js가 대세로 자리 잡고 있는 것 같습니다.
> 현재 웹 개발에서 Next.js 와 Tailwind CSS는 매우 인기 있는 기술이며, Next.js 공식 문서에서 tailwind css 사용을 권장하고 있기 때문에 사용하였습니다.

---

#### 배포 인프라

![스크린샷 2023-11-22 오후 4 16 55](https://github.com/ivanselah/ivanselah/assets/78192018/b65b1a4e-e216-4d0c-b14d-ffefdb98cb17)

- AWS EC2(Ubuntu)
- AWS Route 53
- Reverse proxy(Nginx)
- TLS/SSL적용
- PM2 무중단 서비스
- Github
- Github Actions CI/CD
  - AWS S3
  - AWS CodeDeploy

![diagram](https://github.com/ivanselah/ivanselah.com/assets/78192018/3d2e3f00-c125-4336-85f0-05bd727141ed)
