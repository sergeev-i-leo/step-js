import {
  YScrollablePanel
} from "@step-js-widgets/index";

class AboutPage extends YScrollablePanel {

  constructor() {
    super("h-100 bg-body");
  }

  adjustLayout() {
    if (this.scrollablePanelViewportVirtualElement?.contentWrapperVirtualElement) {
      const htmlElement0 = document.getElementById("about-page");
      const htmlElement1 = this.scrollablePanelViewportVirtualElement?.contentWrapperVirtualElement.getHTMLElement();
      if ((htmlElement0) && (htmlElement1)) {
        htmlElement1.innerHTML = "";
        const node: any = htmlElement0.cloneNode(true);
        node.removeAttribute("id");
        htmlElement1.appendChild(node);
      }
    }
    super.adjustLayout();
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
      const fadeElements = htmlElement.querySelectorAll(".about-page-fade");
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

export default AboutPage;
