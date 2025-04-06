import "bootstrap/dist/css/bootstrap.min.css";
import {
  Browser,
  DIV,
} from "@step-js-core/index";
import {
  XYScrollablePanel,
} from "@step-js-widgets/index";
import {
  BtnPrimary,
} from "@step-js-bootstrap-widgets/index";
import "../app.scss";

class ScrollablePanel1Wrapper extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex flex-column align-items-stretch");
  }

  mount() {
    let div = new DIV("flex-grow-0", this);
    const panel = new XYScrollablePanel("flex-grow-1", this);
    panel.setScrollBarsVisibilityPolicy("when-necessary");
    //panel.setScrollBarsVisibilityPolicy("always");
    //panel.setScrollBarsVisibilityPolicy("never");
    panel.setScrollBarSize(32);

    for (let i0 = 0; i0 < 256; i0++) {
      let div = new DIV(panel);
      let innerHTML = "";
      let j = Math.floor(Math.random() * 50);
      while (j >= 0) {
        innerHTML += `&nbsp;${j}`;
        j--;
      }
      div.setStyle({
        height: "40px",
        lineHeight: "40px",
      });
      div.setInnerHTML(innerHTML);
      if (i0 == 255) {
        div = new DIV(panel);
        div.setInnerHTML("LAST BUT NOT THE LEAST");
      }
    }
    const btn = new BtnPrimary("REMOUNT", div);
    btn.onClick = () => {
      if (panel.virtualElement) {
        Browser.smudgeVirtualElement(panel.virtualElement);
      }
    }
  }
}

export default ScrollablePanel1Wrapper;
