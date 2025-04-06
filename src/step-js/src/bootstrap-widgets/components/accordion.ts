import {
  DIV,
  BUTTON,
  H2,
  VirtualElement, Browser
} from "@step-js-core/index";

// Accordion

class Accordion extends DIV {
  shownItemIndex = -1;

  constructor(...params: any) {
    super(...params);
    this.addClassNames("accordion");
  }

  createVirtualElement() {
    this.virtualElement = super.createVirtualElement();
    this.virtualElement.props.onClick = (event: any) => {
      const htmlElement = event.target;
      const key = htmlElement.getAttribute("data-key");
      if (!key) {
        return;
      }
      let itemVirtualElement = Browser.findVirtualElementByKey(key);
      while (itemVirtualElement) {
        if (itemVirtualElement === this.virtualElement) {
          return;
        }
        const widget = itemVirtualElement?.constructedBy;
        if (widget instanceof Accordion.Header) {
          itemVirtualElement = itemVirtualElement.parent;
          break;
        }
        itemVirtualElement = itemVirtualElement.parent;
      }
      if (itemVirtualElement) {
        if (itemVirtualElement.constructedBy instanceof Accordion.Item) {
          if (itemVirtualElement.constructedBy.itemIndex === this.shownItemIndex) {
            // close item
            this.showItem(-1);
          } else {
            // open item
            this.showItem(itemVirtualElement.constructedBy.itemIndex);
          }
        }
      }
    };
    return this.virtualElement;
  }

  addVirtualElementsTo(parentVirtualElement: VirtualElement) {
    super.addVirtualElementsTo(parentVirtualElement);
    const children = parentVirtualElement.getChildren();
    let itemIndex = 0;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      if (child.constructedBy instanceof Accordion.Item) {
        child.constructedBy.itemIndex = itemIndex;
        itemIndex++;
      }
    }
    this.showItem(this.shownItemIndex);
  }

  showItem(itemIndex: number) {
    this.shownItemIndex = itemIndex;
    const children = this.virtualElement?.getChildren() || [];
    children.forEach((child0) => {
      if (!(child0.constructedBy instanceof Accordion.Item)) {
        return;
      }
      const children = child0.getChildren();
      children.forEach((child1) => {
        if (child1.constructedBy instanceof Accordion.Header) {
          child1 = child1.getChildren()[0];
          if (child1.constructedBy instanceof Accordion.Button) {
            if (child0.constructedBy.itemIndex === this.shownItemIndex) {
              // shown child
              child1.constructedBy.removeClassName("collapsed");
              const htmlElement = child1.getHTMLElement();
              if (htmlElement) {
                htmlElement.classList.remove("collapsed");
              }
            } else {
              // hidden child
              child1.constructedBy.addClassNames("collapsed");
              const htmlElement = child1.getHTMLElement();
              if (htmlElement) {
                htmlElement.classList.add("collapsed");
              }
            }
          }
        }
        if (child1 instanceof AccordionCollapseVirtualElement) {
          if (child0.constructedBy.itemIndex === this.shownItemIndex) {
            // shown child
            child1.addClassName("show");
            const htmlElement = child1.getHTMLElement();
            if (htmlElement) {
              htmlElement.classList.add("show");
            }
          } else {
            // hidden child
            child1.removeClassName("show");
            const htmlElement = child1.getHTMLElement();
            if (htmlElement) {
              htmlElement.classList.remove("show");
            }
          }
        }
      });
    });
  }
}

namespace Accordion {

  export class Item extends DIV {
    itemIndex = -1;

    constructor(...params: any) {
      super(...params);
      this.addClassNames("accordion-item");
    }

    addVirtualElementsTo(parentVirtualElement: VirtualElement) {
      this.getChildren().forEach((child: any) => {
        if (child instanceof Accordion.Body) {
          let virtualElement = new AccordionCollapseVirtualElement();
          parentVirtualElement.append(virtualElement);
          virtualElement.append(child.createVirtualElement());
        } else {
          parentVirtualElement.append(child.createVirtualElement());
        }
      });
    }

    setShown(shown: boolean) {
      let show = "";
      for (let i0 = 0; i0 < this.getChildren().length; i0++) {
        let child0 = this.getChildren()[i0];
        if (!(child0 instanceof Accordion.Header)) {
          continue;
        }
        for (let i1 = 0; i1 < child0.getChildren().length; i1++) {
          let child1 = child0.getChildren()[i1];
          if (child1 instanceof Accordion.Button) {
            if (!child1.hasClassName("collapsed")) {
              show = " show";
            }
            break;
          }
        }
      }

    }
  }

  export class Header extends H2 {

    constructor(...params: any) {
      super(undefined, ...params);
      this.addClassNames("accordion-header");
    }
  }

  export class Button extends BUTTON {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("accordion-button collapsed");
    }
  }

  export class Body extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("accordion-body");
    }
  }
}

class AccordionCollapseVirtualElement extends VirtualElement {

  constructor() {
    super(undefined, "div", {
      className: "accordion-collapse collapse"
    });
  }
}

export default Accordion;
