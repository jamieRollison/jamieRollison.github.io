import { c as create_ssr_component } from "../../chunks/index.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="${"h-fit p-5 flex justify-evenly text-center"}"><a href="${"/"}" class="${"text-light font-cookie pt-6 text-5xl"}">Jamie</a>
	<ul class="${"flex justify-evenly w-80 pt-10"}"><li class="${"text-light font-sans text-xl hover:animate-bounce"}"><a href="${"/about"}">about</a></li>
		<li class="${"text-light font-sans text-xl hover:animate-bounce"}"><a href="${"/projects"}">projects</a></li>
		<li class="${"text-light font-sans text-xl hover:animate-bounce"}"><a href="${"/contact"}">contact</a></li></ul></nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
