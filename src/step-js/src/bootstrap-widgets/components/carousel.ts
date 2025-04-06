import {
  Browser,
  BUTTON,
  DIV,
  SPAN,
  VirtualElement
} from "@step-js-core/index";

class Carousel extends DIV {
  shownTime = new Date().getTime();
  performingSliding = false;
  interval: any = null;

  constructor(...props: any) {
    super(...props);
    this.addClassNames("carousel slide");
    this.setAttribute("id", this.key);
    this.setAttribute("data-bs-wrap", "true");
    this.setAttribute("data-bs-ride", "carousel");
  }

  createVirtualElement() {
    this.virtualElement = super.createVirtualElement();
    if (this.virtualElement) {
      this.virtualElement.props.onClick = (event: any) => {
        const htmlElement = event.target;
        const key = htmlElement.getAttribute("data-key");
        if (!key) {
          return;
        }
        let targetVirtualElement = Browser.findVirtualElementByKey(key);
        while (targetVirtualElement) {
          if (targetVirtualElement === this.virtualElement) {
            this.shownTime = new Date().getTime();
            this.handleInterval(this.shownTime);
            return;
          }
          const widget = targetVirtualElement?.constructedBy;
          if (widget instanceof Carousel.ControlPrev) {
            this.slideToItem("prev");
            return;
          } else if (widget instanceof Carousel.ControlNext) {
            this.slideToItem("next");
            return;
          }
          targetVirtualElement = targetVirtualElement.parent;
        }
      }
    }
    return this.virtualElement;
  }

  addVirtualElementsTo(parentVirtualElement: VirtualElement) {
    this.getChildren().forEach((child) => {
      if (child instanceof Carousel.ControlPrev) {
        child.setAttribute("data-bs-target", this.key);
      } else if (child instanceof Carousel.ControlNext) {
        child.setAttribute("data-bs-target", this.key);
      }
    });
    super.addVirtualElementsTo(parentVirtualElement);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.handleInterval(new Date().getTime());
    }, 1000);
  }

  handleInterval(shownTime: number) {
    if (shownTime > this.shownTime + 5000) {
      this.slideToItem("next");
    }
  }

  slideToItem(slide: any) {
    if (slide === "prev") {
      let itemVirtualElements = this.getItemVirtualElements();
      let i0 = itemVirtualElements.length - 1;
      while (i0 >= 0) {
        if (itemVirtualElements[i0].getHTMLElement()?.classList.contains("active")) {
          break;
        }
        i0--;
      }
      if (i0 >= 0) {
        let i1 = i0 - 1;
        if (i1 < 0) {
          i1 = itemVirtualElements.length - 1;
        }
        this.performSliding(itemVirtualElements, i0, i1, "right");
      }
      return;
    }
    if (slide === "next") {
      let itemVirtualElements = this.getItemVirtualElements();
      let i0 = itemVirtualElements.length - 1;
      while (i0 >= 0) {
        if (itemVirtualElements[i0].getHTMLElement()?.classList.contains("active")) {
          break;
        }
        i0--;
      }
      if (i0 >= 0) {
        const i1 = (i0 + 1) % itemVirtualElements.length;
        this.performSliding(itemVirtualElements, i0, i1, "left");
      }
      return;
    }
    // TODO
  }

  getItemVirtualElements() {
    const itemVirtualElements: VirtualElement[] = [];
    if (this.virtualElement) {
      let innerVerticalElement: VirtualElement | undefined;
      this.virtualElement.getChildren().forEach((child: VirtualElement) => {
        if (child.constructedBy instanceof Carousel.Inner) {
          innerVerticalElement = child;
        }
      });
      if (innerVerticalElement) {
        innerVerticalElement.getChildren().forEach((child: VirtualElement) => {
          if (child.constructedBy instanceof Carousel.Item) {
            itemVirtualElements.push(child);
          }
        });
      }
    }
    return itemVirtualElements;
  }

  performSliding(itemVirtualElements: VirtualElement[], activeItemIndex: number, targetItemIndex: number, direction: "left" | "right") {
    if (this.performingSliding) {
      return;
    }
    try {
      const activeHTMLElement = itemVirtualElements[activeItemIndex].getHTMLElement();
      const targetHTMLElement = itemVirtualElements[targetItemIndex].getHTMLElement();
      if (!activeHTMLElement) {
        return;
      }
      if (!targetHTMLElement) {
        return;
      }
      targetHTMLElement.classList.add("active");
      const offsetWidth = activeHTMLElement.offsetWidth;
      this.performingSliding = true;
      const time0 = new Date().getTime();
      const performAnimation = () => {
        const time1 = new Date().getTime();
        if (time1 >= time0 + 500) {
          targetHTMLElement.style.left = "0px";
          activeHTMLElement.classList.remove("active");
          const indicatorsVirtualElements = this.getIndicatorsVirtualElements();
          for (let i = 0; i < indicatorsVirtualElements.length; i++) {
            if (i != targetItemIndex) {
              indicatorsVirtualElements[i].getHTMLElement()?.classList.remove("active");
            } else {
              indicatorsVirtualElements[i].getHTMLElement()?.classList.add("active");
            }
          }
          this.performingSliding = false;
          this.shownTime = new Date().getTime();
          this.handleInterval(this.shownTime);
          return;
        }
        let animatedWidth = offsetWidth * (time1 - time0) / 500;
        if (direction == "left") {
          activeHTMLElement.style.left = `${-animatedWidth}px`;
          targetHTMLElement.style.left = `${offsetWidth - animatedWidth}px`;
        } else {
          activeHTMLElement.style.left = `${animatedWidth}px`;
          targetHTMLElement.style.left = `${animatedWidth - offsetWidth}px`;
        }
        requestAnimationFrame(performAnimation);
      };
      requestAnimationFrame(performAnimation);
    } catch (error) {
      console.error(error);
    }
  }

  getIndicatorsVirtualElements() {
    const indicatorsVirtualElements: VirtualElement[] = [];
    if (this.virtualElement) {
      let indicatorVerticalElement: VirtualElement | undefined;
      this.virtualElement.getChildren().forEach((child: VirtualElement) => {
        if (child.constructedBy instanceof Carousel.Indicators) {
          indicatorVerticalElement = child;
        }
      });
      if (indicatorVerticalElement) {
        indicatorVerticalElement.getChildren().forEach((child: VirtualElement) => {
          indicatorsVirtualElements.push(child);
        });
      }
    }
    return indicatorsVirtualElements;
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
  }
}

namespace Carousel {

  export class Indicators extends DIV {

    constructor(...props: any) {
      super(...props);
      this.addClassNames("carousel-indicators");
    }

    addVirtualElementsTo(parentVirtualElement: VirtualElement) {
      // data-bs-target changes style of Indicator
      super.addVirtualElementsTo(parentVirtualElement);
      const children = parentVirtualElement.getChildren();
      for (let i = 0; i < children.length; i++) {
        const child =  children[i];
        if (!child.props) {
          child.props = {
            "data-bs-target": this.key
          }
        } else if (!child.props["data-bs-target"]) {
          child.props["data-bs-target"] = this.key;
        }
        child.props["data-bs-slide-to"] = i.toString();
      }
    }
  }

  export class Inner extends DIV {

    constructor(...props: any) {
      super(...props);
      this.addClassNames("carousel-inner");
    }
  }

  export class Caption extends DIV {

    constructor(...props: any) {
      super(...props);
      this.addClassNames("carousel-caption");
    }
  }

  export class Item extends DIV {

    constructor(...props: any) {
      super(...props);
      this.addClassNames("carousel-item");
    }
  }

  export class ControlPrev extends BUTTON {

    constructor(...props: any) {
      super(undefined, ...props);
      this.addClassNames("carousel-control-prev");
      this.setAttribute("data-bs-slide", "prev");
    }

    mount() {
      const span = new SPAN(undefined, "carousel-control-prev-icon", this);
      span.setAttribute("aria-hidden", "true");
      new SPAN("Previous", "visually-hidden");
    }
  }

  export class ControlNext extends BUTTON {

    constructor(...props: any) {
      super(undefined, ...props);
      this.addClassNames("carousel-control-next");
      this.setAttribute("data-bs-slide", "next");
    }

    mount() {
      const span = new SPAN(undefined, "carousel-control-next-icon", this);
      span.setAttribute("aria-hidden", "true");
      new SPAN("Next", "visually-hidden");
    }
  }
}

export default Carousel;

