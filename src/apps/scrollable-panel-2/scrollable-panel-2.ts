// https://subu19.hashnode.dev/create-scroll-reveal-effect-on-websites-with-just-javascript
import {
  DIV,
  H2,
  H3,
  IMG,
  P,
  SPAN
} from "@step-js-core/index";
import {
  YScrollablePanel
} from "@step-js-widgets/index";
import {
  ContainerFluid
} from "@step-js-bootstrap-widgets/index";
import "../app.scss";
import "./scrollable-panel-2.scss";

class ScrollablePanel2 extends YScrollablePanel {

  constructor() {
    super("h-100 step-js-select-none");
  }

  mount() {

    let containerFluid = new ContainerFluid("text-center",  this);
    containerFluid.setStyle({
      marginTop: "3rem",
      marginBottom: "5rem"
    });
    new H2("Reveal elements on scroll", "scrollable-panel-2-title", containerFluid);

    // section

    containerFluid = new ContainerFluid("py-5 text-center",  this);
    let div = new DIV("d-flex justify-content-center", containerFluid);
    new SPAN("1", "d-flex justify-content-center align-items-center", div).setStyle({
      width: "2rem",
      height: "2rem",
      borderRadius: "50%",
      backgroundColor: "var(--bs-orange)"
    });

    containerFluid = new ContainerFluid("d-flex justify-content-center", this).setStyle({
      marginTop: "10rem",
      marginBottom: "5rem",
    });
    div = new DIV("position-relative", containerFluid).setStyle({
      maxWidth: "300px"
    });
    let textBoxDIV = new DIV("scrollable-panel-2-text-box", div).setStyle({
      visibility: "hidden"
    });
    new H3("Lorem Ipsum", textBoxDIV);
    new P(loremIpsum1, textBoxDIV);

    let image = new IMG(require("~images/city-1.png"), "scrollable-panel-2-fade-right", div);
    image.setStyle({
      position: "absolute",
      left: "-10rem",
      top: "-5rem",
      width: "100%"
    });
    textBoxDIV = new DIV("scrollable-panel-2-text-box scrollable-panel-2-fade-left", div).setStyle({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    });
    new H3("Lorem Ipsum", textBoxDIV);
    new P(loremIpsum1, textBoxDIV);

    // section

    containerFluid = new ContainerFluid("py-5 text-center",  this);
    div = new DIV("d-flex justify-content-center", containerFluid);
    new SPAN("2", "d-flex justify-content-center align-items-center", div).setStyle({
      width: "2rem",
      height: "2rem",
      borderRadius: "50%",
      backgroundColor: "var(--bs-orange)"
    });

    containerFluid = new ContainerFluid("d-flex justify-content-center", this).setStyle({
      marginTop: "10rem",
      marginBottom: "5rem",
    });
    div = new DIV("position-relative", containerFluid).setStyle({
      maxWidth: "300px"
    });
    textBoxDIV = new DIV("scrollable-panel-2-text-box", div).setStyle({
      visibility: "hidden"
    });
    new H3("Lorem Ipsum", textBoxDIV);
    new P(loremIpsum2, textBoxDIV);

    image = new IMG(require("~images/city-2.png"), "scrollable-panel-2-fade-left", div);
    image.setStyle({
      position: "absolute",
      right: "-10rem",
      top: "-5rem",
      width: "100%"
    });
    textBoxDIV = new DIV("scrollable-panel-2-text-box scrollable-panel-2-fade-right", div).setStyle({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    });
    new H3("Lorem Ipsum", textBoxDIV);
    new P(loremIpsum2, textBoxDIV);

    // section

    containerFluid = new ContainerFluid("py-5 text-center",  this);
    div = new DIV("d-flex justify-content-center", containerFluid);
    new SPAN("3", "d-flex justify-content-center align-items-center", div).setStyle({
      width: "2rem",
      height: "2rem",
      borderRadius: "50%",
      backgroundColor: "var(--bs-orange)"
    });

    containerFluid = new ContainerFluid("d-flex justify-content-center", this).setStyle({
      marginTop: "10rem",
      marginBottom: "5rem"
    });

    div = new DIV("position-relative", containerFluid).setStyle({
      maxWidth: "300px"
    });
    textBoxDIV = new DIV("scrollable-panel-2-text-box", div).setStyle({
      visibility: "hidden"
    });
    new H3("Lorem Ipsum", textBoxDIV);
    new P(loremIpsum3, textBoxDIV);

    image = new IMG(require("~images/city-3.png"), "scrollable-panel-2-fade-right", div);
    image.setStyle({
      position: "absolute",
      left: "-10rem",
      top: "-5rem",
      width: "100%"
    });
    textBoxDIV = new DIV("scrollable-panel-2-text-box scrollable-panel-2-fade-left", div).setStyle({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    });
    new H3("Lorem Ipsum", textBoxDIV);
    new P(loremIpsum3, textBoxDIV);
  }

  componentDidMount() {
    setTimeout(() => {
      this.handleFade();
    }, 0);
  }

  handleScroll(event: any) {
    super.handleScroll(event);
    this.handleFade();
  }

  handleFade() {
    const htmlElement = this.getHTMLElement();
    if (htmlElement) {
      let fadeElements = htmlElement.querySelectorAll(".scrollable-panel-2-fade-left");
      fadeElements.forEach((element) => {
        if (this.elementIsVisible(element)) {
          this.showFadeElement(element);
        } else {
          this.hideFadeElement(element);
        }
      });
      fadeElements = htmlElement.querySelectorAll(".scrollable-panel-2-fade-right");
      fadeElements.forEach((element) => {
        if (this.elementIsVisible(element)) {
          this.showFadeElement(element);
        } else {
          this.hideFadeElement(element);
        }
      });
    }
  }

  elementIsVisible(element) {
    const htmlElement = this.getHTMLElement();
    if (!htmlElement) {
      return true;
    }
    let rect0 = htmlElement.getBoundingClientRect();
    let rect1 = element.getBoundingClientRect();
    if (rect1.bottom < rect0.top) {
      return false;
    }
    return rect1.top <= rect0.bottom - 100;
  }

  showFadeElement(element) {
    element.classList.add("--visible");
  }

  hideFadeElement(element) {
    element.classList.remove("--visible");
  }
}

const loremIpsum1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
const loremIpsum2 = "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const loremIpsum3 = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

export default ScrollablePanel2;
