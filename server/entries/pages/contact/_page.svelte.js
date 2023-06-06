import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
/* empty css                   */import { N as Nav } from "../../../chunks/Nav.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
	<p class="${"text-light text-sans text-5xl text-left pl-40 pt-20"}">Contact</p></main>`;
});
export {
  Page as default
};
