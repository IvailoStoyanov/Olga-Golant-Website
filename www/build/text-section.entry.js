import { r as registerInstance, h, e as Host } from './index-5ded1fe5.js';

const textSectionCss = ":host{display:block;padding:20vh 20px;font-size:21px;background:var(--light-black);color:#fff}@media screen and (min-width: 426px){:host{padding:20vh 0}}::slotted(h2){max-width:700px;margin:0 auto;padding:20px 0;font-family:var(--accent)}@media screen and (min-width: 426px){::slotted(h2){margin:0 calc(15% + 4px)}}::slotted(p){margin:0 auto;color:var(--dirty-white);max-width:700px;font-family:var(--main);line-height:1.58;font-size:18px}@media screen and (min-width: 426px){::slotted(p){margin:0 calc(15% + 4px)}}";

const TextSection = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
  }
  render() {
    return (h(Host, null, h("slot", null)));
  }
};
TextSection.style = textSectionCss;

export { TextSection as text_section };
