import { r as registerInstance, h, e as Host } from './index-a43a2740.js';

const textSectionCss = "@import url(\"https://fonts.googleapis.com/css2?family=Montserrat&display=swap\");:root{--light-black:#212121;--pure-black:#000000;--white:#ffffff;--dirty-white:#fafafa;--shadow:rgba(0, 0, 0, 0.15);--black-tint:rgba(33, 33, 33, 0.85);--red:#ff0022}:root{--main:\"Open Sans\", sans-serif;--accent:\"Montserrat\", sans-serif}body{margin:0px;padding:0px;font-family:var(--main), -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"}h1,h2,h3,h4{font-family:var(--accent);margin:0}h3{font-size:18px;line-height:1.58}header{color:var(--white)}p{margin:0 0 18px 0;line-height:1.58;font-size:18px}:host{display:block;padding:20vh 20px;font-size:21px;background:var(--light-black);color:var(--white)}@media screen and (min-width: 426px){:host{padding:20vh calc(15% + 4px)}}::slotted(h2){max-width:700px;margin:0 auto;padding:20px 0;font-family:var(--accent)}::slotted(p){color:var(--dirty-white);max-width:700px;font-family:var(--main);line-height:1.58;font-size:18px}";

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
