import {
  VirtualElement,
  Widget,
  Router,
  BUTTON,
  A,
  HR,
  SPAN
} from "@step-js-core/index";
import "./dropdowns.scss";

class DropdownWidget extends Widget {
  dropdownToggleVirtualElement?: VirtualElement;
  dropdownMenuWrapperVirtualElement?: VirtualElement;
  dropdownMenuVirtualElement?: VirtualElement;

  dropdownMenuWrapperHTMLElement: HTMLElement | null | undefined = null;
  dropdownMenuWrapperParentHTMLElement: HTMLElement | null | undefined = null;
  rootHTMLElement: HTMLElement | null | undefined = null;

  constructor(tagName: string, ...params: any) {
    super(tagName, ...params);
  }

  addVirtualElementsTo(parentVirtualElement: VirtualElement) {
    this.getChildren().forEach((child: any) => {
      if (child.hasClassName("dropdown-toggle")) {
        this.addVirtualElement(parentVirtualElement, child);
        this.dropdownToggleVirtualElement = child.virtualElement;
        if (this.dropdownToggleVirtualElement) {
          this.dropdownToggleVirtualElement.props.onClick = () => {
            this.showMenu();
          }
        }
      } else if (child.hasClassName("dropdown-menu")) {
        this.dropdownMenuWrapperVirtualElement = new VirtualElement(null, "div", {
          className: "step-js-dropdown-menu-wrapper -step-js-select-none",
        });
        parentVirtualElement.append(this.dropdownMenuWrapperVirtualElement);
        this.dropdownMenuWrapperVirtualElement.props.onClick = (event: any) => {
          this.hideMenu();
        };
        this.addVirtualElement(this.dropdownMenuWrapperVirtualElement, child);
        this.dropdownMenuVirtualElement = child.virtualElement;
      } else {
        this.addVirtualElement(parentVirtualElement, child);
      }
    });
  }

  showMenu() {
    let htmlElement0 = this.dropdownMenuVirtualElement?.getHTMLElement();
    if (!htmlElement0) {
      return;
    }
    if (htmlElement0.classList.contains("show")) {
      return;
    }
    let dropdownMenuWrapperHTMLElement = this.dropdownMenuWrapperVirtualElement?.getHTMLElement();
    let dropdownMenuWrapperParentHTMLElement = dropdownMenuWrapperHTMLElement?.parentElement;
    let rootHTMLElement = this.getRootHTMLElement();

    if (!dropdownMenuWrapperHTMLElement) {
      return;
    }
    if (!dropdownMenuWrapperParentHTMLElement) {
      return;
    }
    if (!rootHTMLElement) {
      return;
    }

    this.dropdownMenuWrapperHTMLElement = dropdownMenuWrapperHTMLElement;
    this.dropdownMenuWrapperParentHTMLElement = dropdownMenuWrapperParentHTMLElement;
    this.rootHTMLElement = rootHTMLElement;
    this.dropdownMenuWrapperParentHTMLElement.removeChild(this.dropdownMenuWrapperHTMLElement);
    this.rootHTMLElement.appendChild(this.dropdownMenuWrapperHTMLElement);
    this.dropdownMenuWrapperHTMLElement.style.display = "block";

    htmlElement0.classList.add("show");

    let htmlElement1 = this.dropdownToggleVirtualElement?.getHTMLElement();
    if (!htmlElement1) {
      htmlElement1 = this.getHTMLElement();
    }
    let toggleRect;
    if (htmlElement1) {
      toggleRect = htmlElement1.getBoundingClientRect();
    } else {
      toggleRect = this.rootHTMLElement.getBoundingClientRect()
    }
    const rootRect = this.rootHTMLElement.getBoundingClientRect();
    const menuRect = htmlElement0.getBoundingClientRect();
    let left = toggleRect.left - 8;
    let top = toggleRect.bottom + 8;
    if (left + menuRect.width > rootRect.right - 8) {
      left = rootRect.right - 8 - menuRect.width;
    }
    if (top + menuRect.height > rootRect.bottom - 8) {
      top = toggleRect.top - menuRect.height - 8;
    }
    htmlElement0.style.left = `${left- rootRect.left}px`;
    htmlElement0.style.top = `${top - rootRect.top}px`;
  }

  getRootHTMLElement() {
    return document.body;
  }

  hideMenu() {
    let htmlElement = this.dropdownMenuVirtualElement?.getHTMLElement();
    if (!htmlElement) {
      return;
    }
    if (!htmlElement.classList.contains("show")) {
      return;
    }
    htmlElement.classList.remove("show");
    if (this.dropdownMenuWrapperHTMLElement) {
      if (this.dropdownMenuWrapperParentHTMLElement) {
        if (this.rootHTMLElement) {
          this.dropdownMenuWrapperHTMLElement.style.display = "none";
          this.rootHTMLElement.removeChild(this.dropdownMenuWrapperHTMLElement);
          this.dropdownMenuWrapperParentHTMLElement.appendChild(this.dropdownMenuWrapperHTMLElement);
        }
      }
    }
    this.dropdownMenuWrapperHTMLElement = null;
    this.dropdownMenuWrapperParentHTMLElement = null;
    this.rootHTMLElement = null;
  }
}

class DropdownMenuWidget extends Widget {

  constructor(tagName: string, ...params: any) {
    super(tagName, ...params);
    this.addClassNames("dropdown-menu -step-js-select-none");
  }
}

class Dropdown extends DropdownWidget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassNames("dropdown -step-js-select-none");
  }
}

namespace Dropdown {

  // Dropdown.Toggle

  export class Toggle extends Widget {
    collapsed = false;

    constructor(type: string, ...params: any) {
      super(type, ...params);
      this.addClassNames("dropdown-toggle -step-js-select-none");
    }

    hasTextParam() {
      return true;
    }

    setCollapsed(collapsed: boolean) {
      this.collapsed = collapsed;
      if (this.collapsed) {
        this.addClassNames("collapsed");
      } else {
        this.removeClassName("collapsed");
      }
      let htmlElement = this.getHTMLElement();
      if (htmlElement) {
        htmlElement.setAttribute("aria-expanded", (!this.collapsed).toString());
      }
    }

    createVirtualElement() {
      if (this.collapsed) {
        this.props["aria-expanded"] = "false";
      } else {
        this.props["aria-expanded"] = "true";
      }
      this.props["data-toggle"] = "collapse";
      return super.createVirtualElement();
    }
  }

  // Dropdown.TogglePrimary

  export class TogglePrimary extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("button", text, ...params);
      this.props.type = "button";
      this.addClassNames("dropdown-toggle btn btn-primary -step-js-select-none");
    }
  }

  // Dropdown.ToggleSecondary

  export class ToggleSecondary extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("button", text, ...params);
      this.props.type = "button";
      this.addClassNames("dropdown-toggle btn btn-secondary -step-js-select-none");
    }
  }

  // Dropdown.ToggleSuccess

  export class ToggleSuccess extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("button", text, ...params);
      this.props.type = "button";
      this.addClassNames("dropdown-toggle btn btn-success -step-js-select-none");
    }
  }

  // Dropdown.ToggleDanger

  export class ToggleDanger extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("button", text, ...params);
      this.props.type = "button";
      this.addClassNames("dropdown-toggle btn btn-danger -step-js-select-none");
    }
  }

  // Dropdown.ToggleWarning

  export class ToggleWarning extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("button", text, ...params);
      this.props.type = "button";
      this.addClassNames("dropdown-toggle btn btn-warning -step-js-select-none");
    }
  }

  // Dropdown.ToggleInfo

  export class ToggleInfo extends Toggle {

    constructor(text: string | undefined, ...params: any) {
      super("button", text, ...params);
      this.props.type = "button";
      this.addClassNames("dropdown-toggle btn btn-info -step-js-select-none");
    }
  }

  // Dropdown.Menu

  export class Menu extends DropdownMenuWidget {

    constructor(...params: any) {
      super("ul", ...params);
      this.addClassNames("dropdown-menu -step-js-select-none");
    }
  }

  // Dropdown.Item

  export class Item extends A {

    constructor(href: string | undefined, ...params: any) {
      super(href, ...params);
      this.addClassNames("dropdown-item -step-js-select-none");
    }

    onClick = (event: any) => {
      Router.navigateTo(event, this.props.href);
    }
  }

  // Dropdown.Button

  export class Button extends BUTTON {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("dropdown-item -step-js-select-none");
    }
  }

  // Dropdown.Text

  export class Text extends SPAN {

    constructor(text: string, ...params: any) {
      super(text, ...params);
      this.addClassNames("dropdown-item-text -step-js-select-none");
    }
  }

  // Dropdown.Divider

  export class Divider extends HR {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("dropdown-divider -step-js-select-none");
    }
  }
}

export {
  DropdownWidget,
  Dropdown
};
