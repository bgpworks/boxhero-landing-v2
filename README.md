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

폰트 적용과 [css variable polyfil](https://github.com/nuxodin/ie11CustomProperties) 적용에 쓰고 있음. 이전 버전에서는 layout에서 react-helmet을 써서 적용했는데, page 내용과 관련이 없는 이런 외적인 요소는 이런 부분으로 빼는게 더 적절한 것 같음.

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

> ATTENTION! IE는 polyfill로 동작하기 때문에, inline-style에서 css 변수 참조를 하면 안된다.

코드에서 참조해야할 일이 있으면 css module의 변수 기능을 쓸 수는 있는데, 기능이 약해서 쓰고 싶진 않음. (잘못된 참조를 해도 아무런 에러가 발생하지 않고, 참조할 때 뒤에 px 같은 단위를 붙일 수 없으며, 변수라는 걸 인식하기가 어려움.)

### TODO: Fade-in effect

[Triple](https://triple.guide/intro/) 처럼 화면에 진입했을 떄 `fade-in`으로 나타나는 효과를 주고 싶다.
[gatsby-plugin-scroll-reveal](https://www.gatsbyjs.com/plugins/gatsby-plugin-scroll-reveal/)를 적용해보면 될 듯.

> ATTENTION! gatsby-plugin-scroll-reveal 모듈은 responsive 모듈과 호환이 안된다.
> 화면을 키웠다 줄이면 DOM이 새로 그려지는데,
> interaction-observer에 등록이 안되는 듯 하다.

[페이지간 전환 효과](https://www.gatsbyjs.com/docs/adding-page-transitions-with-plugin-transition-link/)도 있는 고려해보기.

### smoothscroll

[smoothscroll polyfill](https://github.com/freddydumont/gatsby-plugin-smoothscroll) 적용 후 features 페이지에서만 씀. 아래 css로 전역으로 적용할 수도 있는데, cross page anchor 링크일 경우에는 사용자 경험이 더 안좋아서 삭제. (목표 페이지로 이동 후 해당 페이지의 처음부터 쭉 스크롤이 되면서 모든 이미지 로딩이 발생하면서 버벅임.)

```css
html {
  scroll-behavior: smooth;
}
```

### 외부 서비스 연동 (Google Tag Manager, Yadex AppMatrica, Helpscout Beacon)

최대한 gatsby 구조에 맞춰서 `gatsby-ssr.js` 에서 injection하고, `gatsby-browser.js`에서 초기화 했다.

예외로 helpscout은 언어별 분기가 필요하여 `src/components/helpscout.js` 파일에서 `useEffect` 훅을 써서 초기화 했다.

### 언어 분기

작업 속도를 부스트 하기 위해 gatsby-plugin-react-i18next 를 썼다.

1. 언어팩 변경 시 hot-reload. (page refresh는 수동)
2. 언어별 page 및 sitemap.xml 자동 생성.

server-side redirection 자동 생성 기능은 아직 지원 안하나, vercel의 routing 수동으로 설정해서 쓰고 있어서 문제 없음.

다국어 처리와 관려된 이슈들은 [이 블로그 글](https://itnext.io/techniques-approaches-for-multi-language-gatsby-apps-8ba13ff433c5)에 잘 정리되어 있으니 참조.


#### IE 테스트

IE에서는 polyfill 문제로 dev build가 안보인다. 아래 처럼 prod빌드로 확인해야 함.

**prod build:**

```
yarn build && yarn serve
```

IE에서 dev build를 동작하게 하려면 아래 코드를 생성해서 쓰면 된다. [issue](https://github.com/gatsbyjs/gatsby/issues/14502#issuecomment-498377468)

**gatsby-node.js**

```js
exports.onCreateWebpackConfig = function onCreateWebpackConfig({
  actions,
  stage,
  loaders,
}) {
  if (stage === "develop") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-hot-loader/,
            use: [loaders.js()],
          },
        ],
      },
    });
  }
};
```

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

** [AWS Amplify](https://aws.amazon.com/amplify) **

여기 써보고 있음. redirect에 lambda function을 넣기가 쉽진 않다.

(Aceept-language 헤더 기반으로 언어 분기를 위해서는 이게 필요하다.)

기본 기능으로는 없고, S3 / cloudflare를 커스텀으로 쓰도록 전환한 후에

cloudflare에 lambda@edge를 설정해야 하는데, 너무 복잡해짐.

[가격](https://aws.amazon.com/amplify/pricing/?nc=sn&loc=3)

Bandwidth: \$15 / 100GB served

Build: $0.01 / minutes
Hosting: $0.023 / GB / month

**[Vercel](https://vercel.com/)**:

속도, 편의성, 가격 모든 면에서 좋음.
다만 한국(?)에서 가끔 접속이 안되는 문제가 발생해서 버림.

**[Netlify](https://www.netlify.com)**

많이들 씀. 플러그인도 많고, 리다이렉션도 어느정도 자유롭다. [가격](https://www.netlify.com/pricing/)

Bandwith: 100GB/month 무료. 이후 $20/100GB
Build: 300 minutes/month 무료. 이후 $7 / 500 minutes

속도가 느려서 아웃. (index page 200~800ms 나옴.)
