import { c as create_ssr_component } from "./index.js";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><nav class="${"h-14 p-5 flex justify-evenly text-center"}"><a href="${"/"}" class="${"text-light font-cookie pt-6 text-5xl"}">Jamie</a>
		<ul class="${"flex justify-evenly w-80 pt-10"}"><li class="${"text-light font-sans text-xl hover:animate-bounce"}"><a href="${"/about"}">about</a></li>
			<li class="${"text-light font-sans text-xl hover:animate-bounce"}"><a href="${"/projects"}">projects</a></li>
			<li class="${"text-light font-sans text-xl hover:animate-bounce"}"><a href="${"/contact"}">contact</a></li></ul></nav></main>`;
});
export {
  Nav as N
};
