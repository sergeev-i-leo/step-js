import {
  VirtualElement,
  Widget
} from "@step-js-core/index";
import "./dropdown.scss";

class Dropdown extends Widget {
  toggleVirtualElement?: VirtualElement;
  wrapperVirtualElement?: VirtualElement;
  menuVirtualElement?: VirtualElement;

  wrapperHTMLElement: HTMLElement | null | undefined = null;
  parentHTMLElement: HTMLElement | null | undefined = null;

  constructor(...params: any) {
    super("div", ...params);
    this.addClassNames("step-js-dropdown -step-js-select-none");
  }

  addVirtualElementsTo(parentVirtualElement: VirtualElement) {
    this.getChildren().forEach((child: any) => {
      if (child.hasClassName("step-js-dropdown-menu")) {
        this.wrapperVirtualElement = new VirtualElement(null, "div", {
          className: "step-js-dropdown-menu-wrapper",
        });
        parentVirtualElement.append(this.wrapperVirtualElement);
        this.wrapperVirtualElement.props.onClick = (event: any) => {
          if (event.target === this.wrapperHTMLElement) {
            this.close();
          }
        };
        this.addVirtualElement(this.wrapperVirtualElement, child);
        this.menuVirtualElement = child.virtualElement;
      } else {
        this.addVirtualElement(parentVirtualElement, child);
      }
    });
  }

  open() {
    let htmlElement0 = this.menuVirtualElement?.getHTMLElement();
    if (!htmlElement0) {
      return;
    }
    if (htmlElement0.classList.contains("--open")) {
      return;
    }
    let wrapperHTMLElement = this.wrapperVirtualElement?.getHTMLElement();
    let parentHTMLElement = wrapperHTMLElement?.parentElement;

    if (!wrapperHTMLElement) {
      return;
    }
    if (!parentHTMLElement) {
      return;
    }

    this.wrapperHTMLElement = wrapperHTMLElement;
    this.parentHTMLElement = parentHTMLElement;
    this.parentHTMLElement.removeChild(this.wrapperHTMLElement);
    document.body.appendChild(this.wrapperHTMLElement);
    this.wrapperHTMLElement.classList.add("--open");

    let htmlElement1 = this.toggleVirtualElement?.getHTMLElement();
    if (!htmlElement1) {
      htmlElement1 = this.getHTMLElement();
    }
    let toggleRect;
    if (htmlElement1) {
      toggleRect = htmlElement1.getBoundingClientRect();
    } else {
      toggleRect = document.body.getBoundingClientRect()
    }
    const bodyRect = document.body.getBoundingClientRect();
    const menuRect = htmlElement0.getBoundingClientRect();
    let left = toggleRect.left - 8;
    let top = toggleRect.bottom + 8;
    if (left + menuRect.width > bodyRect.right - 8) {
      left = bodyRect.right - 8 - menuRect.width;
    }
    if (top + menuRect.height > bodyRect.bottom - 8) {
      top = toggleRect.top - menuRect.height - 8;
    }
    htmlElement0.style.left = `${left- bodyRect.left}px`;
    htmlElement0.style.top = `${top - bodyRect.top}px`;
  }

  getRootHTMLElement() {
    return document.body;
  }

  close() {
    let htmlElement = this.wrapperHTMLElement;
    if (!htmlElement) {
      return;
    }
    if (!htmlElement.classList.contains("--open")) {
      return;
    }
    htmlElement.classList.remove("--open");
    if (this.parentHTMLElement) {
      document.body.removeChild(htmlElement);
      this.parentHTMLElement.appendChild(htmlElement);
    }
    this.wrapperHTMLElement = null;
    this.parentHTMLElement = null;
  }
}

namespace Dropdown {

  // Dropdown.Toggle

  export class Toggle extends Widget {

    constructor(type: string, ...params: any) {
      super(type, ...params);
      this.addClassNames("step-js dropdown-toggle -step-js-select-none");
    }
  }

  // Dropdown.Menu

  export class Menu extends Widget {

    constructor(...params: any) {
      super("div", ...params);
      this.addClassNames("step-js-dropdown-menu -step-js-select-none");
    }
  }

  // Dropdown.MenuItem

  export class MenuItem extends Widget {

    constructor(...params: any) {
      super("div", ...params);
      this.addClassNames("step-js-dropdown-menu-item");
    }
  }
}

export default Dropdown;
