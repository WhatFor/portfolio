import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderSlot, d as renderComponent, e as renderHead, f as addAttribute } from '../astro.15c234ab.mjs';
import 'html-escaper';
/* empty css                           */import contentful from 'contentful';
import { jsx } from 'react/jsx-runtime';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const contentfulClient = contentful.createClient({
  space: ({}).CONTENTFUL_SPACE_ID,
  accessToken: ({}).CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
});

const $$Astro$2 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="outline">
  <div class="core-width header-contents lined outline">
    <div class="logo">
      <svg class="logosvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 255.74 93.41" fill="red">
        <g data-name="Layer 2">
            <g data-name="Layer 1" class="logosvg">
                <path d="M0,2H15.26A21.51,21.51,0,0,1,24.94,4.1,15.71,15.71,0,0,1,31.46,10a16.5,16.5,0,0,1,2.33,8.84,16.47,16.47,0,0,1-2.33,8.83,15.57,15.57,0,0,1-6.52,5.88,21.51,21.51,0,0,1-9.68,2.09H0ZM14.88,29.23a11.26,11.26,0,0,0,8-2.81,9.9,9.9,0,0,0,3-7.6,9.92,9.92,0,0,0-3-7.61,11.3,11.3,0,0,0-8-2.81H7.78V29.23Z"></path>
                <path d="M58.75,12.26C60.89,14.17,62,17,62,20.88V35.62H55V32.4Q52.85,36,47.09,36a12.21,12.21,0,0,1-5.16-1,7.7,7.7,0,0,1-3.34-2.78,7.22,7.22,0,0,1-1.15-4,6.74,6.74,0,0,1,2.71-5.67q2.72-2.06,8.38-2.06h5.95A4.79,4.79,0,0,0,53,16.68a6.55,6.55,0,0,0-4.46-1.32,13.11,13.11,0,0,0-4.06.65,10.48,10.48,0,0,0-3.38,1.75L38.4,12.53a16.49,16.49,0,0,1,5.06-2.31,22.91,22.91,0,0,1,6.08-.81Q55.54,9.41,58.75,12.26ZM52.37,30.07a4.87,4.87,0,0,0,2.11-2.61V24.82H49.34c-3.07,0-4.6,1-4.6,3a2.69,2.69,0,0,0,1.12,2.28A5.11,5.11,0,0,0,49,31,6.45,6.45,0,0,0,52.37,30.07Z"></path>
                <path d="M92.18,12.29q3,2.88,2.95,8.54V35.62H87.65V22A6.72,6.72,0,0,0,86.3,17.4a4.9,4.9,0,0,0-3.88-1.51,6,6,0,0,0-4.52,1.75,7.25,7.25,0,0,0-1.68,5.21V35.62H68.74V9.79h7.15v3a9.86,9.86,0,0,1,3.69-2.52,12.92,12.92,0,0,1,4.85-.89A10.63,10.63,0,0,1,92.18,12.29Z"></path>
                <path d="M103.34,3.91a1.83,1.83,0,0,1-.57-1.37,1.95,1.95,0,0,1,2-2,2,2,0,0,1,1.4.55,1.83,1.83,0,0,1,.57,1.37,1.95,1.95,0,0,1-2,2A1.94,1.94,0,0,1,103.34,3.91Zm.19,6.65h2.4V35.62h-2.4Z"></path>
                <path d="M137.23,23.66H115.68a10.4,10.4,0,0,0,1.49,5.21,9.47,9.47,0,0,0,3.76,3.53,12.05,12.05,0,0,0,9.89.36,8.78,8.78,0,0,0,3.48-2.62l1.39,1.59a10.58,10.58,0,0,1-4.1,3,13.38,13.38,0,0,1-5.35,1.06,13.53,13.53,0,0,1-6.67-1.63A11.87,11.87,0,0,1,115,29.66a13,13,0,0,1-1.65-6.57,13.6,13.6,0,0,1,1.56-6.55A11.52,11.52,0,0,1,119.18,12a12.43,12.43,0,0,1,12.27,0,11.45,11.45,0,0,1,4.27,4.48A13.5,13.5,0,0,1,137.28,23Zm-16.66-10A8.94,8.94,0,0,0,117.19,17a10.64,10.64,0,0,0-1.46,4.82h19.2a10.15,10.15,0,0,0-1.44-4.8,9.33,9.33,0,0,0-8.16-4.51A9.58,9.58,0,0,0,120.57,13.66Z"></path>
                <path d="M144.72,0h2.4V35.62h-2.4Z"></path>
                <path d="M157.05,3.91a1.83,1.83,0,0,1-.57-1.37,1.95,1.95,0,0,1,2-2,2,2,0,0,1,1.4.55,1.83,1.83,0,0,1,.57,1.37,1.95,1.95,0,0,1-2,2A1.94,1.94,0,0,1,157.05,3.91Zm.19,6.65h2.4V35.62h-2.4Z"></path>
                <path d="M191.71,10.56V35.62H189.4V30.24a9.24,9.24,0,0,1-3.69,4.1A11,11,0,0,1,180,35.81a10.44,10.44,0,0,1-7.68-2.74q-2.79-2.73-2.79-7.87V10.56h2.4V25c0,2.81.72,5,2.16,6.43a8.16,8.16,0,0,0,6.1,2.21,8.74,8.74,0,0,0,6.7-2.64,10,10,0,0,0,2.47-7.11V10.56Z"></path>
                <path d="M202.46,34.9a11.91,11.91,0,0,1-4.27-2.31l1.1-1.92a12.59,12.59,0,0,0,4,2.16,14.93,14.93,0,0,0,5.07.87,10,10,0,0,0,5.59-1.25,4,4,0,0,0,1.8-3.46,3.21,3.21,0,0,0-1-2.49,6,6,0,0,0-2.42-1.35c-1-.29-2.29-.59-4-.91a33.44,33.44,0,0,1-4.8-1.15,7.5,7.5,0,0,1-3.12-2,5.4,5.4,0,0,1-1.3-3.84,6,6,0,0,1,2.47-4.92q2.48-1.94,7-1.94a17.21,17.21,0,0,1,4.76.67,12,12,0,0,1,3.84,1.78l-1.11,1.92a11.24,11.24,0,0,0-3.5-1.68,14.08,14.08,0,0,0-4-.58,8.86,8.86,0,0,0-5.28,1.3,4,4,0,0,0-1.78,3.4,3.4,3.4,0,0,0,1,2.62A6.29,6.29,0,0,0,205,21.19c1,.31,2.34.63,4.1,1a34.79,34.79,0,0,1,4.73,1.12,7.25,7.25,0,0,1,3.05,1.95,5.22,5.22,0,0,1,1.25,3.69,5.88,5.88,0,0,1-2.59,5c-1.73,1.24-4.16,1.87-7.3,1.87A18.28,18.28,0,0,1,202.46,34.9Z"></path>
                <path d="M30.58,93.22l0-20.16L20.64,89.67h-3.5L7.3,73.49V93.22H0V59.62H6.43L19,80.5,31.39,59.62h6.39l.09,33.6Z"></path>
                <path d="M62.54,70.34q2.5,2.39,2.5,7V93.22h-2.3V88.75a8.36,8.36,0,0,1-3.51,3.43,11.57,11.57,0,0,1-5.52,1.23,10.2,10.2,0,0,1-6.6-2,6.81,6.81,0,0,1-.19-10.25c1.49-1.29,3.86-1.94,7.13-1.94h8.59v-2a7.05,7.05,0,0,0-1.9-5.33,7.71,7.71,0,0,0-5.54-1.82,13.53,13.53,0,0,0-4.78.86,12.09,12.09,0,0,0-3.86,2.31l-1.2-1.73a13.46,13.46,0,0,1,4.51-2.62A16.49,16.49,0,0,1,55.39,68Q60.06,68,62.54,70.34ZM59.35,90a8.74,8.74,0,0,0,3.29-4.18v-4.7H54.1c-2.47,0-4.25.45-5.36,1.34a4.52,4.52,0,0,0-1.65,3.7A4.6,4.6,0,0,0,48.91,90a8.18,8.18,0,0,0,5.14,1.42A9.42,9.42,0,0,0,59.35,90Z"></path>
                <path d="M75.5,92.5a11.91,11.91,0,0,1-4.27-2.31l1.1-1.92a12.59,12.59,0,0,0,4,2.16,14.93,14.93,0,0,0,5.07.87A9.94,9.94,0,0,0,87,90.05a4,4,0,0,0,1.8-3.46,3.25,3.25,0,0,0-1-2.49,6.13,6.13,0,0,0-2.43-1.35c-1-.29-2.29-.59-4-.91a33.44,33.44,0,0,1-4.8-1.15,7.5,7.5,0,0,1-3.12-2,5.38,5.38,0,0,1-1.3-3.84,6,6,0,0,1,2.47-4.92q2.48-1.93,7-1.94a17.14,17.14,0,0,1,4.75.67,11.81,11.81,0,0,1,3.84,1.78l-1.11,1.92a11.24,11.24,0,0,0-3.5-1.68,14.08,14.08,0,0,0-4-.58,8.86,8.86,0,0,0-5.28,1.3,4,4,0,0,0-1.78,3.4,3.39,3.39,0,0,0,1,2.62A6.36,6.36,0,0,0,78,78.79c1,.31,2.35.63,4.11,1a35,35,0,0,1,4.72,1.12,7.16,7.16,0,0,1,3.05,1.95,5.23,5.23,0,0,1,1.25,3.69,5.86,5.86,0,0,1-2.59,5c-1.73,1.24-4.16,1.87-7.3,1.87A18.38,18.38,0,0,1,75.5,92.5Z"></path>
                <path d="M106.8,79.82l-6.53,6v7.44h-2.4V57.6h2.4V82.8l16-14.64h3.08l-10.8,10.13,11.85,14.93h-3Z"></path>
                <path d="M128.47,91.78A11.8,11.8,0,0,1,124,87.24a14,14,0,0,1,0-13.1,11.8,11.8,0,0,1,4.49-4.54,13.42,13.42,0,0,1,12.82,0,11.71,11.71,0,0,1,4.48,4.54,13.9,13.9,0,0,1,0,13.1,11.71,11.71,0,0,1-4.48,4.54,13.42,13.42,0,0,1-12.82,0ZM140,89.9a9.6,9.6,0,0,0,3.6-3.74,12,12,0,0,0,0-10.94,9.69,9.69,0,0,0-3.6-3.75,10.6,10.6,0,0,0-10.32,0,9.69,9.69,0,0,0-3.6,3.75,12,12,0,0,0,0,10.94,9.6,9.6,0,0,0,3.6,3.74,10.54,10.54,0,0,0,10.32,0Z"></path>
                <path d="M154.85,57.6h2.4V93.22h-2.4Z"></path>
                <path d="M183,70.34q2.5,2.39,2.5,7V93.22h-2.3V88.75a8.3,8.3,0,0,1-3.51,3.43,11.54,11.54,0,0,1-5.52,1.23,10.2,10.2,0,0,1-6.6-2,6.81,6.81,0,0,1-.19-10.25c1.49-1.29,3.86-1.94,7.13-1.94h8.59v-2a7.05,7.05,0,0,0-1.9-5.33,7.71,7.71,0,0,0-5.54-1.82,13.53,13.53,0,0,0-4.78.86A12.09,12.09,0,0,0,167,73.25l-1.2-1.73a13.46,13.46,0,0,1,4.51-2.62,16.49,16.49,0,0,1,5.52-.93Q180.49,68,183,70.34ZM179.78,90a8.74,8.74,0,0,0,3.29-4.18v-4.7h-8.54c-2.47,0-4.25.45-5.36,1.34a4.52,4.52,0,0,0-1.65,3.7A4.63,4.63,0,0,0,169.34,90a8.18,8.18,0,0,0,5.14,1.42A9.39,9.39,0,0,0,179.78,90Z"></path>
                <path d="M195.17,61.51a1.78,1.78,0,0,1-.58-1.37,2,2,0,0,1,2-2,1.92,1.92,0,0,1,1.39.55,1.83,1.83,0,0,1,.58,1.37,1.93,1.93,0,0,1-.58,1.39,2,2,0,0,1-2.78,0Zm.19,6.65h2.4V93.22h-2.4Z"></path>
                <path d="M220.32,91.63A6,6,0,0,1,218,93a8.83,8.83,0,0,1-2.86.46,6.75,6.75,0,0,1-5-1.8,6.85,6.85,0,0,1-1.78-5V70.22h-4.6V68.16h4.6V62.69h2.4v5.47h8v2.06h-8V86.35a5.32,5.32,0,0,0,1.18,3.72,4.49,4.49,0,0,0,3.48,1.27A5.57,5.57,0,0,0,219.31,90Z"></path>
                <path d="M226.8,61.51a1.78,1.78,0,0,1-.58-1.37,2,2,0,0,1,2-2,1.92,1.92,0,0,1,1.39.55,1.83,1.83,0,0,1,.58,1.37,1.93,1.93,0,0,1-.58,1.39,2,2,0,0,1-2.78,0Zm.19,6.65h2.4V93.22H227Z"></path>
                <path d="M240.09,92.5a11.91,11.91,0,0,1-4.27-2.31l1.1-1.92a12.59,12.59,0,0,0,4,2.16,14.93,14.93,0,0,0,5.07.87,9.94,9.94,0,0,0,5.59-1.25,4,4,0,0,0,1.8-3.46,3.25,3.25,0,0,0-1-2.49,6.13,6.13,0,0,0-2.43-1.35c-1-.29-2.29-.59-4-.91a33.44,33.44,0,0,1-4.8-1.15,7.5,7.5,0,0,1-3.12-2,5.38,5.38,0,0,1-1.3-3.84,6,6,0,0,1,2.47-4.92q2.48-1.93,7-1.94a17.14,17.14,0,0,1,4.75.67,11.81,11.81,0,0,1,3.84,1.78l-1.11,1.92a11.24,11.24,0,0,0-3.5-1.68,14.08,14.08,0,0,0-4-.58,8.86,8.86,0,0,0-5.28,1.3,4,4,0,0,0-1.78,3.4,3.39,3.39,0,0,0,1,2.62,6.36,6.36,0,0,0,2.47,1.39c1,.31,2.35.63,4.11,1a35,35,0,0,1,4.72,1.12,7.16,7.16,0,0,1,3.05,1.95,5.23,5.23,0,0,1,1.25,3.69,5.86,5.86,0,0,1-2.59,5c-1.73,1.24-4.16,1.87-7.3,1.87A18.38,18.38,0,0,1,240.09,92.5Z"></path>
            </g>
        </g>
    </svg>
    </div>

    <nav class="desktop nav-links ">
      <a class="outline nav-item mono" href="/">projects</a>
      <a class="outline nav-item mono" href="/about">about me</a>
      <a class="outline mono nav-cta" href="url">
        <div class="cta">get in touch</div>
      </a>
    </nav>
    <nav class="mobile nav-links">
      <a class=" outline mono" href="url">
        <div class="cta">menu</div>
      </a>
    </nav>
  </div>


</header>`;
}, "C:/Users/sinne/Documents/GitHub/portfolio/src/components/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" class="astro-SCKKX6R4">\n    <head>\n        <link rel="stylesheet" href="/styles/global.css">\n        <link rel="stylesheet" href="/styles/type.css">\n        <link rel="stylesheet" href="/styles/colours.css">\n        <link rel="stylesheet" href="/styles/bento.css">\n      \n        <link rel="preconnect" href="https://fonts.googleapis.com">\n        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">\n      \n        <script src="https://code.jquery.com/jquery-3.6.0.min.js" defer><\/script>\n        <script src="/filter.js" defer><\/script>\n        <meta charset="utf-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        \n      ', '</head>\n  <body class="astro-SCKKX6R4">\n    ', '\n\n\n\n\n\n    <h1 class="h1 astro-SCKKX6R4">', '</h1>\n    <article class="astro-SCKKX6R4">\n      ', " <!-- your content is injected here -->\n    </article>\n  \n</body></html>"])), renderHead(), renderComponent($$result, "Header", $$Header, { "class": "astro-SCKKX6R4" }), title, renderSlot($$result, $$slots["default"]));
}, "C:/Users/sinne/Documents/GitHub/portfolio/src/layouts/Layout.astro", void 0);

const BlogContent = ({ body }) => {
  return /* @__PURE__ */ jsx("article", { className: "px-1 py-0 lg:px-8 lg:py-5", id: "blog-post-content", children: documentToReactComponents(body) });
};

const $$Astro = createAstro();
async function getStaticPaths() {
  const { items } = await contentfulClient.getEntries({
    content_type: "post"
  });
  if (!items) {
    return {
      paths: [],
      fallback: false
    };
  }
  const pages = items.map((item) => ({
    params: { slug: item.fields.slug },
    props: {
      title: item.fields.title,
      content: item.fields.content,
      tags: item.metadata.tags?.map((x) => x.sys.id) ?? []
    }
  }));
  return pages;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { title, tags, content, imageUrl } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div class="outline">
    ${imageUrl && renderTemplate`<img${addAttribute(imageUrl, "src")} alt="{title}" class="post-image">`}
    <h1 class="h2 padded mono core-width outline">${title}</h1>
  </div>
  <div class="outline">
    <div class="core-width outline padded">
     
      ${renderComponent($$result2, "BlogContent", BlogContent, { "body": content })}
    ${tags.length > 0 && renderTemplate`<div class="bento-tags">
        ${tags.map((tag) => renderTemplate`<span class="tag mono">${tag}</span>`)}
      </div>`}
    </div>
    
  </div>
      



` })}`;
}, "C:/Users/sinne/Documents/GitHub/portfolio/src/pages/posts/[slug].astro", void 0);

const $$file = "C:/Users/sinne/Documents/GitHub/portfolio/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Header as $, _slug_ as _, $$Layout as a, contentfulClient as c };
