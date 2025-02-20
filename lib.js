// lang

export const GETWORK = f => url => fetch(url).then(res => res.ok?res.text():res.error()).then(f).catch(err => console.error(err));
export const DIV = document.createElement('div');
export const searchParams = new URLSearchParams(location.search);
export const WFDI = Object.freeze({set: v => document.head.innerText = `<wfdi src = "${v}" />`, get: (doc) => doc.head.children[0].attribute.src, loader: doc => {DIV.innerHTML = doc; return DIV;}, load: res => this.get(this.loader(res))});

// --- fw ---

export class WebFVaribable {}

// --- - ---

export const compile
GETWORK(src => WFDI.set(URL.createObjectURL(new Blob([`import \{f\} from "https://FarAway6834.github.io/webf/lib.js"; ${src.replace(/\b((webfs?|argv|param):.*?)\b/gim, "f('$1')")}`).replace(/×/gm, '*').replace(/÷/gm, '/')], {type : 'text/javascript'});)));

export class WebF extends HTMLElement { constructor() { super(); } connectedCallback() { GETWORK(this.attribute.href); } }
export deferapp = () => customElements.define('webf', WebF);

export const callWebfc = GETWORK(doc => WFDI.load(doc));
export const callWebfer = src => ...x => callWebfc(x.map(x=>`${x}`).join('') /"(.*?)"/gim, src.replace(/^webf(s?):\/{0,2}(.*?)$/gim, "http$1://$2"));
export const getter = src => searchParams(/argv:\/{0,2}(.*?)/gim.matchAll(src.replace(/param:\/{0,2}(.*?)/gim, "argv:$1")).pop());
export const f = src => new WebFVaribable(src.slice(0, 4) === "webf"?callWebfer(src):getter(src));
