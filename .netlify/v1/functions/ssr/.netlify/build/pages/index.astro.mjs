/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderComponent, d as renderHead, e as renderSlot, f as createAstro } from '../chunks/astro/server_DXZ8-t3R.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_DJx_kLS_.mjs';
export { renderers } from '../renderers.mjs';

const $$CopyIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" width="24" height="24"> <g id="SVGRepo_bgCarrier" stroke-width="0"></g> <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z" stroke="#2e1065" stroke-width="1.5"></path> <path d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5" stroke="#2e1065" stroke-width="1.5"></path> </g> </svg>`;
}, "C:/Users/akeem/Documents/Coding Related/Projects/Astro Projects/caesar-cipher-converter/src/components/CopyIcon.astro", void 0);

const $$CaesarForm = createComponent(($$result, $$props, $$slots) => {
  const encrypt = {
    title: "Encrypt",
    label: "Text to Encrypt:",
    shift: "Shift Value:",
    placeholder: {
      text: "Enter the text you wish to encrypt",
      shift: "Enter any number from 1 - 26"
    }
  };
  const decrypt = {
    title: "Decrypt",
    label: "Text to Decrypt:",
    shift: "Shift Value (optional):",
    placeholder: {
      text: "Enter the text you wish to decrypt",
      shift: "Enter any number from 1 - 26"
    }
  };
  const outputPlaceholder = "Result will appear here";
  const iconLabel = "Copy to Clipboard";
  return renderTemplate`${maybeRenderHead()}<div class="container mx-auto p-4"> <!-- Tabs --> <div class="tabs border border-transparent rounded-lg flex mb-6 *:py-2"> <button id="encrypt-tab" class="tab-button active outline-none rounded-l-lg w-full bg-white dark:bg-gray-300 text-violet-800 border border-white dark:border-gray-300 dark:text-violet-950"> ${encrypt.title} </button> <button id="decrypt-tab" class="tab-button outline-none rounded-r-lg w-full bg-transparent text-white dark:text-gray-300 border border-white dark:border-gray-300"> ${decrypt.title} </button> </div> <!-- Encrypt Tab Content --> <div id="encrypt-tab-content"> <label for="encrypt-input" class="block font-medium text-white dark:text-gray-300 mb-2"> ${encrypt.label} </label> <textarea id="encrypt-input" rows="4" spellcheck="false" class="outline-none resize-none select-text w-full text-white dark:text-gray-300 border border-white dark:border-gray-300 rounded-md bg-violet-900/10 placeholder:text-gray-300 caret-violet-200 p-4 mb-4"${addAttribute(encrypt.placeholder.text, "placeholder")}></textarea> <label for="shift-input-encrypt" class="block font-medium text-white dark:text-gray-300 mb-2"> ${encrypt.shift} </label> <input id="shift-input-encrypt" type="number" min="0" max="25" class="outline-none w-full border border-white dark:border-gray-300 rounded-md bg-violet-900/10 placeholder:text-gray-300 text-white dark:text-gray-300 p-4 mb-4"${addAttribute(encrypt.placeholder.shift, "placeholder")}> <button id="encrypt-button" class="outline-none px-4 py-2 bg-white dark:bg-gray-300 border border-transparent text-violet-800 dark:text-violet-950 rounded-md hover:bg-violet-500 dark:hover:bg-violet-900 hover:text-white hover:dark:text-gray-300 hover:border-white active:bg-violet-800 dark:active:bg-transparent"> ${encrypt.title} </button> </div> <!-- Decrypt Tab Content --> <div id="decrypt-tab-content" class="hidden"> <label for="decrypt-input" class="block font-medium text-white dark:text-gray-300 mb-2"> ${decrypt.label} </label> <textarea id="decrypt-input" rows="4" spellcheck="false" class="outline-none resize-none w-full border border-white dark:border-gray-300 rounded-md text-white dark:text-gray-300 bg-violet-900/10 placeholder:text-gray-300 caret-violet-200 p-4 mb-4"${addAttribute(decrypt.placeholder.text, "placeholder")}></textarea> <label for="shift-input-decrypt" class="block font-medium text-white dark:text-gray-300 mb-2"> ${decrypt.shift} </label> <input id="shift-input-decrypt" type="number" min="0" max="25" class="outline-none w-full border border-white dark:border-gray-300 rounded-md bg-violet-900/10 placeholder:text-gray-300 text-white dark:text-gray-300 p-4 mb-4"${addAttribute(decrypt.placeholder.shift, "placeholder")}> <button id="decrypt-button" class="outline-none px-4 py-2 bg-white dark:bg-gray-300 border border-transparent text-violet-800 dark:text-violet-950 rounded-md hover:bg-violet-500 dark:hover:bg-violet-900 hover:text-white hover:dark:text-gray-300 hover:border-white active:bg-violet-800 dark:active:bg-transparent"> ${decrypt.title} </button> </div> <!-- Output Section --> <div class="flex items-center gap-4 mt-4"> <output id="result-output" class="foutline-none rounded-md border border-transparent dark:border-gray-300 flex-grow block bg-violet-950 dark:bg-violet-900/10 text-gray-100 p-4"> ${outputPlaceholder} </output> <button id="copy-button" class="outline-none border-2 dark:border border-transparent rounded-md w-fit bg-gray-100 transition-transform p-2 hover:scale-125 focus-visible:scale-125 active:bg-transparent active:border-violet-950 dark:active:border-gray-300 dark:active:bg-violet-300"> <span class="sr-only">${iconLabel}</span> ${renderComponent($$result, "CopyIcon", $$CopyIcon, {})} </button> </div> </div> `;
}, "C:/Users/akeem/Documents/Coding Related/Projects/Astro Projects/caesar-cipher-converter/src/components/CaesarForm.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-transparent text-gray-200/70 dark:text-gray-200/30 py-4"> <div class="container mx-auto px-4 text-center"> <p class="text-xs">
© ${(/* @__PURE__ */ new Date()).getFullYear()} Maintained by
<a${addAttribute(author.url, "href")} rel="noopener" target="_blank"> <span translate="no">${author.name}</span> </a> </p> </div> </footer>`;
}, "C:/Users/akeem/Documents/Coding Related/Projects/Astro Projects/caesar-cipher-converter/src/components/Footer.astro", void 0);

const LogoImg = new Proxy({"src":"/_astro/logo.DdB-dHnG.webp","width":500,"height":500,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/akeem/Documents/Coding Related/Projects/Astro Projects/caesar-cipher-converter/src/assets/logo.webp";
							}
							
							return target[name];
						}
					});

const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle" class="p-2 text-white w-12 transition-transform duration-300 bg-transparent rounded-full dark:bg-transparent border dark:text-black hover:scale-95 active:scale-110 active:text-white sticky z-30 bottom-4 right-4"> <span id="mode-status" class="w-12"></span> </button> `;
}, "C:/Users/akeem/Documents/Coding Related/Projects/Astro Projects/caesar-cipher-converter/src/components/ThemeToggle.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const headerContent = "Caesar Says";
  return renderTemplate`${maybeRenderHead()}<header class="bg-transparent w-full text-white dark:text-gray-300 py-4"> <nav class="container mx-auto flex justify-between text-center"> <span class="w-fit flex justify-evenly"> <a class="flex justify-evenly items-center" href="/"> <div class="aspect-square w-12"> ${renderComponent($$result, "Image", $$Image, { "alt": "Caesar Says logo", "src": LogoImg, "loading": "eager" })} </div> <div class="flex items-center h-12"> <h1 class="text-2xl font-bold tracking-wide">${headerContent}</h1> </div> </a> </span> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </nav> </header>`;
}, "C:/Users/akeem/Documents/Coding Related/Projects/Astro Projects/caesar-cipher-converter/src/components/Header.astro", void 0);

const $$Astro = createAstro();
const author = {
  name: "Khamisi Lawrence",
  url: "https://github.com/khamisilawrence"
};
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="title" content="Caesar Says | Caesar Cipher Encryption Tool"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="author"${addAttribute(author.name, "content")}><link rel="author"${addAttribute(author.url, "href")}><meta name="robots" content="index, follow, nocache"><meta name="googlebot" content="index, nofollow, noimageindex, max-video-preview:-1, max-image-preview:large, max-snippet:-1"><meta name="category" content="Encryption, Caesar Cipher, Decryption Tools, Web Application"><meta name="theme-color" content="#2e1065"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><title>${title}</title><link rel="icon" href="/favicon.ico"><link rel="stylesheet" href="/src/styles/globals.css">${renderHead()}</head> <body class="min-h-screen w-full bg-gradient-to-r from-indigo-500 to-violet-500 dark:bg-gradient-to-r dark:from-slate-900 dark:to-slate-800 flex flex-col"> <!-- Header --> ${renderComponent($$result, "Header", $$Header, {})} <!-- Main Content --> <main class="flex-grow container mx-auto flex justify-center items-center px-4 py-6"> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer --> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/akeem/Documents/Coding Related/Projects/Astro Projects/caesar-cipher-converter/src/layouts/BaseLayout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const metadata = {
    title: "Caesar Says | Caesar Cipher Encryption Tool",
    desc: "Caesar Cipher Tool for encryption and decryption with support for multiple languages. Securely encrypt and decrypt text using the classic Caesar cipher technique."
  };
  const content = {
    heading: "Caesar Cipher Converter",
    subheading: "Encrypt or decrypt text using the Caesar cipher"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": metadata.title, "description": metadata.desc }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="flex flex-col w-full"> <section class="text-center flex flex-col gap-y-4"> <h2 class="text-4xl xl:text-6xl font-bold tracking-wide text-gray-100"> ${content.heading} </h2> <p class="xl:text-2xl text-gray-100"> ${content.subheading} </p> </section> <div class="container mx-auto p-4"> ${renderComponent($$result2, "CaesarForm", $$CaesarForm, {})} </div> </section> ` })}`;
}, "C:/Users/akeem/Documents/Coding Related/Projects/Astro Projects/caesar-cipher-converter/src/pages/index.astro", void 0);

const $$file = "C:/Users/akeem/Documents/Coding Related/Projects/Astro Projects/caesar-cipher-converter/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
