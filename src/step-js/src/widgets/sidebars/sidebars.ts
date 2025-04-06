import {
  VirtualElement,
  DIV,
} from "@step-js-core/index";
import "./sidebars.scss";

class Sidebar extends DIV {
  SidebarPanel: any;
  SidebarContent: any;
  side: "left" | "right";
  breakpoint: "sm" | "md" | "lg";
  panelWrapperVirtualElement?: VirtualElement;
  contentWrapperVirtualElement?: VirtualElement;
  contentCoverVirtualElement?: VirtualElement;

  constructor(SidebarPanel: any, SidebarContent: any, side: "left" | "right", breakpoint: "sm" | "md" | "lg", ...params: any) {
    super(...params);
    this.addClassNames(`step-js-sidebar step-js-sidebar-${side}-${breakpoint}`);
    this.setPanelWidth("15rem");
    this.setClosedPanelWidth("3rem");
    this.SidebarPanel = SidebarPanel;
    this.SidebarContent = SidebarContent;
    this.side = side;
    this.breakpoint = breakpoint
  }

  setPanelWidth(width: string) {
    this.setStyleRule("--step-js-sidebar-panel-width", width);
  }

  setClosedPanelWidth(width: string) {
    this.setStyleRule("--step-js-sidebar-closed-panel-width", width);
  }

  mount() {
    let sidebarContent = new this.SidebarContent();
    let sidebarPanel = new this.SidebarPanel(this, sidebarContent);
    this.append(sidebarPanel);
    this.append(sidebarContent);
  }

  addVirtualElementsTo(parentVirtualElement: VirtualElement) {
    this.panelWrapperVirtualElement = new VirtualElement(null, "div", {
      className: "step-js-sidebar-panel-wrapper"
    });
    this.contentWrapperVirtualElement = new VirtualElement(null, "div", {
      className: "step-js-sidebar-content-wrapper"
    });
    this.contentCoverVirtualElement = new VirtualElement(null, "div", {
      className: "step-js-sidebar-content-cover"
    });
    if (this.side === "left") {
      parentVirtualElement.append(this.contentWrapperVirtualElement);
      if (this.getChildren().length > 1) {
        const virtualElement = this.getChildren()[1].createVirtualElement();
        if (virtualElement) {
          this.contentWrapperVirtualElement.append(virtualElement);
        }
      }
      this.contentWrapperVirtualElement.append(this.contentCoverVirtualElement);
      parentVirtualElement.append(this.panelWrapperVirtualElement);
      if (this.getChildren().length > 0) {
        const virtualElement = this.getChildren()[0].createVirtualElement();
        if (virtualElement) {
          this.panelWrapperVirtualElement.append(virtualElement);
        }
      }
    } else {
      parentVirtualElement.append(this.contentWrapperVirtualElement);
      if (this.getChildren().length > 0) {
        const virtualElement = this.getChildren()[0].createVirtualElement();
        if (virtualElement) {
          this.contentWrapperVirtualElement.append(virtualElement);
        }
      }
      this.contentWrapperVirtualElement.append(this.contentCoverVirtualElement);
      parentVirtualElement.append(this.panelWrapperVirtualElement);
      if (this.getChildren().length > 1) {
        const virtualElement = this.getChildren()[1].createVirtualElement();
        if (virtualElement) {
          this.panelWrapperVirtualElement.append(virtualElement);
        }
      }
    }
    this.contentCoverVirtualElement.props.onClick = () => {
      this.togglePanel();
    }
  }

  togglePanel() {
    // open / close panel
    this.toggleClassName("--panel-closed");
  }

  closeIfNecessary() {
    // close if overlaps
    if (this.hasClassName("--panel-closed")) {
      return;
    }
    this.togglePanel();
  }
}

namespace Sidebar {

  export class Panel extends DIV {
    sidebar: Sidebar;
    sidebarContent: Content;

    constructor(sidebar: Sidebar, sidebarContent: Content, ...params: any) {
      super(...params);
      this.addClassNames("step-js-sidebar-panel");
      this.sidebar = sidebar;
      this.sidebarContent = sidebarContent;
    }
  }

  export class Content extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("step-js-sidebar-content");
    }
  }
}

class LeftSidebarSM extends Sidebar {

  constructor(SidebarPanel: any, SidebarContent: any, ...params: any) {
    super(SidebarPanel, SidebarContent, "left", "sm", ...params);
  }
}

class LeftSidebarMD extends Sidebar {

  constructor(SidebarPanel: any, SidebarContent: any, ...params: any) {
    super(SidebarPanel, SidebarContent, "left", "md", ...params);
  }
}

class LeftSidebarLG extends Sidebar {

  constructor(SidebarPanel: any, SidebarContent: any, ...params: any) {
    super(SidebarPanel, SidebarContent, "left", "lg", ...params);
  }
}

class RightSidebarSM extends Sidebar {

  constructor(SidebarPanel: any, SidebarContent: any, ...params: any) {
    super(SidebarPanel, SidebarContent, "right", "sm", ...params);
  }
}

class RightSidebarMD extends Sidebar {

  constructor(SidebarPanel: any, SidebarContent: any, ...params: any) {
    super(SidebarPanel, SidebarContent, "right", "md", ...params);
  }
}

class RightSidebarLG extends Sidebar {

  constructor(SidebarPanel: any, SidebarContent: any, ...params: any) {
    super(SidebarPanel, SidebarContent, "right", "lg", ...params);
  }
}

export {
  Sidebar,
  LeftSidebarSM,
  LeftSidebarMD,
  LeftSidebarLG,
  RightSidebarSM,
  RightSidebarMD,
  RightSidebarLG
}
