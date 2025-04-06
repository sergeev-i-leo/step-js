import {
  Browser,
  DIV,
  BUTTON,
  H5
} from "@step-js-core/index";
import {
  BtnSecondary
} from "../components/btns";
import "./modal.scss";

// Modal

class Modal extends DIV {
  parentHTMLElement: HTMLElement | null | undefined = null;
  rootHTMLElement: HTMLElement | null | undefined = null;

  constructor(...params: any) {
    super(...params);
    this.addClassNames("modal");
    this.setAttribute("tabindex", "-1");
  }

  createVirtualElement() {
    this.virtualElement = super.createVirtualElement();
    this.virtualElement.props.onClick = (event: any) => {
      const htmlElement = this.getHTMLElement();
      if (htmlElement) {
        if (event.target === htmlElement) {
          if (this.hasClassName("show")) {
            this.hide();
          }
        }
      }
    };
    return this.virtualElement;
  }

  show() {
    if (this.hasClassName("show")) {
      return;
    }
    const htmlElement = this.getHTMLElement();
    this.parentHTMLElement = this.virtualElement?.parent?.getHTMLElement();
    this.rootHTMLElement = this.getRootHTMLElement();
    if ((htmlElement) && (this.parentHTMLElement) && (this.rootHTMLElement)) {
      this.parentHTMLElement.removeChild(htmlElement);
      this.rootHTMLElement.appendChild(htmlElement);
    } else {
      this.parentHTMLElement = null;
      this.rootHTMLElement = null;
    }
    this.addClassNames("show");
    this.setStyleRule("display", "block");
  }

  getRootHTMLElement() {
    return document.body;
  }

  hide() {
    if (!this.hasClassName("show")) {
      return;
    }
    this.removeClassName("show");
    this.setStyleRule("display", "none");
    if (this.parentHTMLElement) {
      if (this.rootHTMLElement) {
        const htmlElement = this.getHTMLElement();
        if (htmlElement) {
          this.rootHTMLElement.removeChild(htmlElement);
          this.parentHTMLElement.appendChild(htmlElement)
        }
      }
    }
    this.parentHTMLElement = null;
    this.rootHTMLElement = null;
  }
}

namespace Modal {

  // Modal.Dialog

  export class Dialog extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-dialog");
    }
  }

  // Modal.Content

  export class Content extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-content");
    }
  }

  // Modal.Header

  export class Header extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-header");
    }
  }

  // Modal.Title

  export class Title extends H5 {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-title");
    }
  }

  // Modal.BtnClose

  export class BtnClose extends BUTTON {

    constructor(...params: any) {
      super(undefined, ...params);
      this.addClassNames("btn-close");
    }

    onClick = () => {
      let virtualElement = this.virtualElement;
      while (virtualElement) {
        if (virtualElement.constructedBy instanceof Modal) {
          virtualElement.constructedBy.hide();
          break;
        }
        virtualElement = virtualElement.parent;
      }
    }
  }

  // Modal.Body

  export class Body extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-body");
    }
  }

  // Modal.Footer

  export class Footer extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("modal-footer");
    }
  }

  // Modal.BtnDismiss

  export class BtnDismiss extends BtnSecondary {

    onClick = (event?: any) => {
      event.stopPropagation();
      event.preventDefault();
      let virtualElement = this.virtualElement;
      while (virtualElement) {
        if (virtualElement.constructedBy instanceof Modal) {
          virtualElement.constructedBy.hide();
          break;
        }
        virtualElement = virtualElement.parent;
      }
    }
  }
}

export default Modal;
