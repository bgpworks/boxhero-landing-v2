# BoxHero Landing

Gatsby 기본 boilerplate 템플릿을 확장해서 개발함. 대부분은 [튜토리얼](https://www.gatsbyjs.com/tutorial/)을 따름.

## 🚀 Quick start

```shell
gatsby develop
```

`http://localhost:8000` 접속.


### Tools

- [EditorConfig](https://editorconfig.org/)
- [Prettier](https://prettier.io/)

## 🧐 메모

### Gatsby API 사용 현황.

**`gatsby-browser.js`**: [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/)

`gatsby-background-img`에서 쓰이는 `intersection-observer` 설치에 사용.

**`gatsby-node.js`**: [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/)

안 쓰고 있음.

**`gatsby-ssr.js`**: [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/)

spoqaHanSans 폰트 적용과 [css variable polyfil](https://github.com/nuxodin/ie11CustomProperties) 적용에 쓰고 있음. 이전 버전에서는 layout에서 react-helmet을 써서 적용했는데, page 내용과 관련이 없는 이런 외적인 요소는 이런 부분으로 빼는게 더 적절한 것 같음. google analytics 같은 것도 이쪽에 적용하는게 어울릴 듯.

[gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)도 있는 걸로 보면 SSR을 사용했을 때 단점이 있는건지 확인 필요.

### 이미지 처리

`png`는 기본 모듈인 [gatsby-image](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-image)를 최대한 활용함. webp, [tracedsvg](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-sharp#tracedsvg) 기능 활성화함.

`gatsby-image`가 브라우저 지원 여부를 판단해서 구형 브라우저는 `png`를 쓰기 때문에 `webp polyfill`은 적용 안함.

TODO: 이쁘게 보이기 위해 tracedsvg 옵션 튜닝이 필요하다. 옵션 값에 따라 결과 미리보기 할 수 있는 페이지 있으면 좋겠다.

이미지를 배경으로 써야할 때는 [gatsby-background-image](https://www.gatsbyjs.com/plugins/gatsby-background-image/)를 활용했다.

`svg`일 때는 소스에서 `import`해서 `img` 태그로 사용.

### CSS

styled-component는 취향이 아니어서 css module 사용.

변수 공유는 css custom variable 기능을 활용해서 `src/styles/global.css` 에 정의하고, 각종 모듈에서 참조해서 씀.

코드에서 참조해야할 일이 있으면 css module의 변수 기능을 쓸 수는 있는데, 기능이 약해서 쓰고 싶진 않음. (잘못된 참조를 해도 아무런 에러가 발생하지 않고, 참조할 때 뒤에 px 같은 단위를 붙일 수 없으며, 변수라는 걸 인식하기가 어려움.)

### TODO: Fade-in effect

[Triple](https://triple.guide/intro/) 처럼 화면에 진입했을 떄 `fade-in`으로 나타나는 효과를 주고 싶다.
[gatsby-plugin-scroll-reveal](https://www.gatsbyjs.com/plugins/gatsby-plugin-scroll-reveal/)를 적용해보면 될 듯.

[페이지간 전환 효과](https://www.gatsbyjs.com/docs/adding-page-transitions-with-plugin-transition-link/)도 있는 고려해보기.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

**[Vercel](https://vercel.com/)**:

한국에서 가끔 접속이 안되는 문제가 발생해서 버림.

** [AWS Amplify](https://aws.amazon.com/amplify) **

테스트로 여기 써보고 있음. 실수로 한국 리젼에 만듬. 관리 편의를 위해 N.virginia로 옮겨야함. global edge network 쓰는건지 확인 필요.

[가격](https://aws.amazon.com/amplify/pricing/?nc=sn&loc=3)

Bandwidth: $15 / 100GB served

Build: $0.01 / minutes
Hosting: $0.023 / GB / month

** [Netlify](https://www.netlify.com)** 

많이 쓰던데. [가격](https://www.netlify.com/pricing/)

Bandwith: 100GB/month 무료. 이후 $20/100GB
Build: 300 minutes/month 무료. 이후 $7 / 500 minutes

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bgpworks/boxhero-landing-v2)
