import {
  VirtualElement,
  DIV
} from "@step-js-core/index";
import ScrollablePanelViewportVirtualElement from "./scrollable-panel-viewport-virtual-element";
import "./scrollable-panel.scss";

class ScrollablePanel extends DIV {
  type: "x-scrollbar" | "y-scrollbar" | "xy-scrollbars";
  scrollBarsVisibilityPolicy: "when-necessary" | "always" | "never" = "when-necessary";
  scrollablePanelViewportVirtualElement?: ScrollablePanelViewportVirtualElement;

  constructor(type: "x-scrollbar" | "y-scrollbar" | "xy-scrollbars", ...params: any) {
    super(...params);
    this.addClassNames(`step-js-scrollable-panel -${type}`);
    this.type = type;
  }

  setScrollBarsVisibilityPolicy(visibilityPolicy: "when-necessary" | "always" | "never") {
    this.scrollBarsVisibilityPolicy = visibilityPolicy;
  }

  setScrollBarSize(scrollBarSize: string) {
    this.setStyleRule("--step-js-scrollable-panel-scrollbar-size", scrollBarSize);
  }

  addVirtualElementsTo(parentVirtualElement: VirtualElement) {
    this.scrollablePanelViewportVirtualElement = new ScrollablePanelViewportVirtualElement(this, this.type);
    parentVirtualElement.append(this.scrollablePanelViewportVirtualElement);
    this.getChildren().forEach((child: any) => {
      if (this.scrollablePanelViewportVirtualElement) {
        if (this.scrollablePanelViewportVirtualElement.contentWrapperVirtualElement) {
          this.addVirtualElement(this.scrollablePanelViewportVirtualElement.contentWrapperVirtualElement, child);
        }
      }
    });
    if (this.scrollablePanelViewportVirtualElement) {
      this.scrollablePanelViewportVirtualElement.appendScrollTracksToScrollablePanel();
    }
  }

  adjustLayout() {
    if (this.scrollablePanelViewportVirtualElement) {
      this.scrollablePanelViewportVirtualElement.adjustScrollbars();
    }
  }

  handleScroll(event: any) {
    if (this.scrollablePanelViewportVirtualElement) {
      this.scrollablePanelViewportVirtualElement.updateXScrollBar();
      this.scrollablePanelViewportVirtualElement.updateYScrollBar();
    }
  }
}

// XScrollablePanel

class XScrollablePanel extends ScrollablePanel {

  constructor(...params: any) {
    super("x-scrollbar", ...params);
  }
}

// YScrollablePanel

class YScrollablePanel extends ScrollablePanel {

  constructor(...params: any) {
    super("y-scrollbar", ...params);
  }
}

// XYScrollablePanel

class XYScrollablePanel extends ScrollablePanel {

  constructor(...params: any) {
    super("xy-scrollbars", ...params);
  }
}

export {
  ScrollablePanel,
  XScrollablePanel,
  YScrollablePanel,
  XYScrollablePanel,
};
