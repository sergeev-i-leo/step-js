// https://www.youtube.com/watch?v=KEEGIRGDMLg

import {
  Browser,
  VirtualElement
} from "@step-js-core/index";
import {
  ScrollablePanel
} from "./scrollable-panel";
import Scrollbar from "./scrollbar";

const MIN_SCROLLBAR_SIZE = 16;

class ScrollablePanelViewportVirtualElement extends VirtualElement {
  scrollablePanel: ScrollablePanel;
  type: "x-scrollbar" | "y-scrollbar" | "xy-scrollbars";
  contentWrapperVirtualElement: VirtualElement | null = null;
  xScrollbar?: Scrollbar;
  yScrollbar?: Scrollbar;
  resizeObserver: ResizeObserver | null = null;

  constructor(scrollablePanel: ScrollablePanel, type: "x-scrollbar" | "y-scrollbar" | "xy-scrollbars") {
    super(null, "div", {
      className: "step-js-scrollable-panel-viewport"
    });
    this.scrollablePanel = scrollablePanel;
    this.type = type;
    this.props.style = {};
    if (this.type === "y-scrollbar") {
      this.props.style.overflowY = "scroll";
      this.props.style.overflowX = "hidden";
    } else if (type === "x-scrollbar") {
      this.props.style.overflowY = "hidden";
      this.props.style.overflowX = "scroll";
    } else if (this.type === "xy-scrollbars") {
      this.props.style.overflow = "scroll";
    }

    this.contentWrapperVirtualElement = new VirtualElement(undefined, "div", {
      className: "step-js-scrollable-panel-content-wrapper",
    });
    this.append(this.contentWrapperVirtualElement);
  }

  appendScrollTracksToScrollablePanel() {
    this.xScrollbar = undefined;
    this.yScrollbar = undefined;

    if (!this.scrollablePanel.virtualElement) {
      return;
    }

    if ((this.type === "x-scrollbar") || (this.type === "xy-scrollbars")) {
      this.xScrollbar = new Scrollbar();
      this.xScrollbar.trackVirtualElement = new VirtualElement(undefined, "div", {
        className: "step-js-scrollbar-track",
      });
      this.scrollablePanel.virtualElement.append(this.xScrollbar.trackVirtualElement);
      this.xScrollbar.trackVirtualElement.props.onPointerDown = (event: any) => {
        this.handleXScrollBarPointerDown(event);
      };
      this.xScrollbar.trackVirtualElement.props.onPointerUp = (event: any) => {
        this.handleXScrollBarPointerUp(event);
      };
      this.xScrollbar.thumbVirtualElement = new VirtualElement(undefined, "div", {
        className: "step-js-scrollbar-thumb",
        style: {
          display: "none",
          top: 0,
          bottom: 0,
        }
      });
      this.xScrollbar.trackVirtualElement.append(this.xScrollbar.thumbVirtualElement);
      this.xScrollbar.thumbVirtualElement.props.onPointerMove = (event: any) => {
        this.handleXScrollBarPointerMove(event);
      };
    }
    if ((this.type === "y-scrollbar") || (this.type === "xy-scrollbars")) {
      this.yScrollbar = new Scrollbar();
      this.yScrollbar.trackVirtualElement = new VirtualElement(undefined, "div", {
        className: "step-js-scrollbar-track",
      });
      this.scrollablePanel.virtualElement.append(this.yScrollbar.trackVirtualElement);
      this.yScrollbar.trackVirtualElement.props.onPointerDown = (event: any) => {
        this.handleYScrollBarPointerDown(event);
      };
      this.yScrollbar.trackVirtualElement.props.onPointerUp = (event: any) => {
        this.handleYScrollBarPointerUp(event);
      };
      this.yScrollbar.thumbVirtualElement = new VirtualElement(undefined, "div", {
        className: "step-js-scrollbar-thumb",
        style: {
          display: "none",
          left: 0,
          right: 0,
        }
      });
      this.yScrollbar.trackVirtualElement.append(this.yScrollbar.thumbVirtualElement);
      this.yScrollbar.thumbVirtualElement.props.onPointerMove = (event: any) => {
        this.handleYScrollBarPointerMove(event);
      };
    }
  }

  attachToDOM() {
    let htmlElement = this.getHTMLElement();
    if (htmlElement) {
      htmlElement.addEventListener("scroll", handleScroll);
    }
    htmlElement = this.contentWrapperVirtualElement?.getHTMLElement();
    if (htmlElement) {
      this.resizeObserver = new ResizeObserver(() => {
        this.adjustScrollbars();
      });
      this.resizeObserver.observe(htmlElement);
    }
  }

  adjustScrollbars() {
    if ((this.xScrollbar) || (this.yScrollbar)) {
      if (this.xScrollbar) {
        this.updateXScrollBar();
      }
      if (this.yScrollbar) {
        this.updateYScrollBar();
      }
    }
  }

  updateXScrollBar() {
    if (!this.xScrollbar) {
      return;
    }
    let htmlElement = this.xScrollbar.trackVirtualElement?.getHTMLElement();
    if (!htmlElement) {
      return;
    }
    if (this.scrollablePanel.scrollBarsVisibilityPolicy == "never") {
      htmlElement.style.display = "none";
      return;
    }

    this.calculateGeometry();

    if (this.xScrollbar.thumbSize < MIN_SCROLLBAR_SIZE - 0.5) {
      const htmlElement = this.xScrollbar.trackVirtualElement?.getHTMLElement();
      if (htmlElement) {
        switch (this.scrollablePanel.scrollBarsVisibilityPolicy) {
          case "always":
            htmlElement.style.display = "block";
            break;
          case "when-necessary":
            htmlElement.style.display = "none";
            break;
        }
      }
      if (this.xScrollbar.thumbVirtualElement) {
        const htmlElement = this.xScrollbar.thumbVirtualElement.getHTMLElement();
        if (htmlElement) {
          htmlElement.style.display = "none";
        }
      }
      return;
    }
    if (this.xScrollbar.trackVirtualElement) {
      htmlElement = this.xScrollbar.trackVirtualElement.getHTMLElement();
      if (htmlElement) {
        htmlElement.style.display = "block";
      }
    }
    this.xScrollbar.thumbXY = 0.0;
    this.xScrollbar.thumbXY = this.xScrollbar.scrollXY * (this.xScrollbar.trackSize - this.xScrollbar.thumbSize) / (this.xScrollbar.contentWrapperSize - this.xScrollbar.viewportSize);

    if (this.xScrollbar.thumbVirtualElement) {
      htmlElement = this.xScrollbar.thumbVirtualElement.getHTMLElement();
      if (htmlElement) {
        htmlElement.style.display = "block";
        htmlElement.style.left = `${this.xScrollbar.thumbXY}px`;
        htmlElement.style.width = `${this.xScrollbar.thumbSize}px`;
      }
    }
  }

  updateYScrollBar() {
    if (!this.yScrollbar) {
      return;
    }
    let htmlElement = this.yScrollbar.trackVirtualElement?.getHTMLElement();
    if (!htmlElement) {
      return;
    }
    if (this.scrollablePanel.scrollBarsVisibilityPolicy == "never") {
      htmlElement.style.display = "none";
      return;
    }

    this.calculateGeometry();

    if (this.yScrollbar.thumbSize < MIN_SCROLLBAR_SIZE - 0.5) {
      const htmlElement = this.yScrollbar.trackVirtualElement?.getHTMLElement();
      if (htmlElement) {
        switch (this.scrollablePanel.scrollBarsVisibilityPolicy) {
          case "always":
            htmlElement.style.display = "block";
            break;
          case "when-necessary":
            htmlElement.style.display = "none";
            break;
        }
      }
      if (this.yScrollbar.thumbVirtualElement) {
        const htmlElement = this.yScrollbar.thumbVirtualElement.getHTMLElement();
        if (htmlElement) {
          htmlElement.style.display = "none";
        }
      }
      return;
    }
    if (this.yScrollbar.trackVirtualElement) {
      htmlElement = this.yScrollbar.trackVirtualElement.getHTMLElement();
      if (htmlElement) {
        htmlElement.style.display = "block";
      }
    }
    this.yScrollbar.thumbXY = 0.0;
    this.yScrollbar.thumbXY = this.yScrollbar.scrollXY * (this.yScrollbar.trackSize - this.yScrollbar.thumbSize) / (this.yScrollbar.contentWrapperSize - this.yScrollbar.viewportSize);

    if (this.yScrollbar.thumbVirtualElement) {
      htmlElement = this.yScrollbar.thumbVirtualElement.getHTMLElement();
      if (htmlElement) {
        htmlElement.style.display = "block";
        htmlElement.style.top = `${this.yScrollbar.thumbXY}px`;
        htmlElement.style.height = `${this.yScrollbar.thumbSize}px`;
      }
    }
  }

  calculateGeometry() {
    let viewportSize = [0.0, 0.0];
    let contentWrapperSize = [0.0, 0.0];
    let htmlElement = this.getHTMLElement();
    if (htmlElement) {
      if (this.xScrollbar) {
        this.xScrollbar.scrollXY = htmlElement.scrollLeft;
      }
      if (this.yScrollbar) {
        this.yScrollbar.scrollXY = htmlElement.scrollTop;
      }
      viewportSize[0] = htmlElement.offsetWidth;
      viewportSize[1] = htmlElement.offsetHeight;
      contentWrapperSize[0] = htmlElement.scrollWidth;
      contentWrapperSize[1] = htmlElement.scrollHeight;
    }
    if (this.xScrollbar) {
      this.xScrollbar.viewportSize = viewportSize[0];
      this.xScrollbar.contentWrapperSize = contentWrapperSize[0];
      this.xScrollbar.trackSize = this.xScrollbar.viewportSize;
      this.xScrollbar.thumbSize = 0.0;

      if (this.xScrollbar.viewportSize < this.xScrollbar.contentWrapperSize) {
        this.xScrollbar.thumbSize = Math.max(this.xScrollbar.viewportSize * this.xScrollbar.trackSize / this.xScrollbar.contentWrapperSize, MIN_SCROLLBAR_SIZE);
      }
    }
    if (this.yScrollbar) {
      this.yScrollbar.viewportSize = viewportSize[1];
      this.yScrollbar.contentWrapperSize = contentWrapperSize[1];
      this.yScrollbar.trackSize = this.yScrollbar.viewportSize;
      this.yScrollbar.thumbSize = 0.0;

      if (this.yScrollbar.viewportSize < this.yScrollbar.contentWrapperSize) {
        this.yScrollbar.thumbSize = Math.max(this.yScrollbar.viewportSize * this.yScrollbar.trackSize / this.yScrollbar.contentWrapperSize, MIN_SCROLLBAR_SIZE);
      }
    }
  }

  //  x scroll bar

  handleXScrollBarPointerDown = (event: any) => {
    if (!this.xScrollbar) {
      return;
    }
    const {trackHTMLElement, thumbHTMLElement} = this.getPointedHTMLElements(this.xScrollbar, event);
    if (trackHTMLElement) {
      const rect0 = trackHTMLElement.getBoundingClientRect();
      const {clientY} = event;
      event.preventDefault();
      event.stopPropagation();
      // TODO
      return;
    }
    if (!thumbHTMLElement) {
      return;
    }
    if (!this.getHTMLElement()) {
      return;
    }
    this.xScrollbar.pointedThumbXY = this.xScrollbar.thumbXY;
    event.preventDefault();
    event.stopPropagation();
    this.xScrollbar.thumbHTMLElement = thumbHTMLElement;
    this.xScrollbar.clientXY = event.clientX;
    this.xScrollbar.pointerId = event.pointerId;
    this.xScrollbar.thumbHTMLElement.setPointerCapture(this.xScrollbar.pointerId);
  };

  handleXScrollBarPointerMove = (event: any) => {
    if (!this.xScrollbar) {
      return;
    }
    if (!this.xScrollbar.pointerId) {
      return;
    }
    const htmlElement = this.getHTMLElement();
    if (!htmlElement) {
      return;
    }
    // reverse math to updateScrollBar()
    this.calculateGeometry();
    let scrollLeft = (event.clientX - this.xScrollbar.clientXY);
    scrollLeft += this.xScrollbar.pointedThumbXY;
    scrollLeft = scrollLeft * (this.xScrollbar.contentWrapperSize - this.xScrollbar.viewportSize) / (this.xScrollbar.trackSize - this.xScrollbar.thumbSize);
    scrollLeft = Math.max(scrollLeft, 0);
    scrollLeft = Math.min( this.xScrollbar.contentWrapperSize -  this.xScrollbar.viewportSize, scrollLeft);
    htmlElement.scrollLeft = scrollLeft;
    this.scrollablePanel.handleScroll(event);
  };

  handleXScrollBarPointerUp = (event: any) => {
    if (!this.xScrollbar) {
      return;
    }
    if (!this.xScrollbar.thumbHTMLElement) {
      return;
    }
    if (!this.xScrollbar.pointerId) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.xScrollbar.thumbHTMLElement.releasePointerCapture(this.xScrollbar.pointerId);
    this.xScrollbar.thumbHTMLElement = null;
    this.xScrollbar.pointerId = null;
  };

  // y scroll bar

  handleYScrollBarPointerDown = (event: any) => {
    if (!this.yScrollbar) {
      return;
    }
    const {trackHTMLElement, thumbHTMLElement} = this.getPointedHTMLElements(this.yScrollbar, event);
    if (trackHTMLElement) {
      const rect0 = trackHTMLElement.getBoundingClientRect();
      const {clientY} = event;
      event.preventDefault();
      event.stopPropagation();
      // TODO
      return;
    }
    if (!thumbHTMLElement) {
      return;
    }
    if (!this.getHTMLElement()) {
      return;
    }
    this.yScrollbar.pointedThumbXY = this.yScrollbar.thumbXY;
    event.preventDefault();
    event.stopPropagation();
    this.yScrollbar.thumbHTMLElement = thumbHTMLElement;
    this.yScrollbar.clientXY = event.clientY;
    this.yScrollbar.pointerId = event.pointerId;
    this.yScrollbar.thumbHTMLElement.setPointerCapture(this.yScrollbar.pointerId);
  };

  handleYScrollBarPointerMove = (event: any) => {
    if (!this.yScrollbar) {
      return;
    }
    if (!this.yScrollbar.pointerId) {
      return;
    }
    const htmlElement = this.getHTMLElement();
    if (!htmlElement) {
      return;
    }
    // reverse math to updateScrollBar()
    this.calculateGeometry();
    let scrollTop = (event.clientY - this.yScrollbar.clientXY);
    scrollTop += this.yScrollbar.pointedThumbXY;
    scrollTop = scrollTop * (this.yScrollbar.contentWrapperSize - this.yScrollbar.viewportSize) / (this.yScrollbar.trackSize - this.yScrollbar.thumbSize);
    scrollTop = Math.max(scrollTop, 0);
    scrollTop = Math.min(this.yScrollbar.contentWrapperSize - this.yScrollbar.viewportSize, scrollTop);
    htmlElement.scrollTop = scrollTop;
    this.scrollablePanel.handleScroll(event);
  };

  handleYScrollBarPointerUp = (event: any) => {
    if (!this.yScrollbar) {
      return;
    }
    if (!this.yScrollbar.thumbHTMLElement) {
      return;
    }
    if (!this.yScrollbar.pointerId) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    this.yScrollbar.thumbHTMLElement.releasePointerCapture(this.yScrollbar.pointerId);
    this.yScrollbar.thumbHTMLElement = null;
    this.yScrollbar.pointerId = null;
  };

  getPointedHTMLElements(scrollBar: Scrollbar, event: any) {
    if (scrollBar.thumbSize < MIN_SCROLLBAR_SIZE - 0.5) {
      // no thumb
      return {
        trackHTMLElement: undefined,
        thumbHTMLElement: undefined
      };
    }
    if (!scrollBar.trackVirtualElement) {
      return {
        trackHTMLElement: undefined,
        thumbHTMLElement: undefined
      };
    }
    let trackHTMLElement = scrollBar.trackVirtualElement.getHTMLElement();
    if (!trackHTMLElement) {
      return {
        trackHTMLElement: undefined,
        thumbHTMLElement: undefined
      };
    }
    if (event) {
      if (event.target === trackHTMLElement) {
        return {
          trackHTMLElement: trackHTMLElement,
          thumbHTMLElement: undefined
        };
      }
    }
    if (!scrollBar.thumbVirtualElement) {
      return {
        trackHTMLElement: undefined,
        thumbHTMLElement: undefined
      };
    }
    let thumbHTMLElement = scrollBar.thumbVirtualElement.getHTMLElement();
    if (!thumbHTMLElement) {
      return {
        trackHTMLElement: undefined,
        thumbHTMLElement: undefined
      };
    }
    if (event.target !== thumbHTMLElement) {
      return {
        trackHTMLElement: undefined,
        thumbHTMLElement: undefined
      };
    }
    return {
      trackHTMLElement: undefined,
      thumbHTMLElement: thumbHTMLElement
    }
  }

  detachFromDOM() {
    let htmlElement = this.getHTMLElement();
    if (htmlElement) {
      htmlElement.removeEventListener("scroll", handleScroll);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
}

const handleScroll = (event: any) => {
  let key = event.target.getAttribute("data-key");
  if (!key) {
    return;
  }
  let virtualElement = Browser.findVirtualElementByKey(key);
  if (!virtualElement) {
    return;
  }
  while (virtualElement) {
    if (virtualElement.constructedBy) {
      if (virtualElement.constructedBy["handleScroll"]) {
        let result = virtualElement.constructedBy["handleScroll"](event);
        if (result !== false) {
          event.stopPropagation();
          event.preventDefault();
        }
      }
    }
    virtualElement = virtualElement.parent;
  }
};

export default ScrollablePanelViewportVirtualElement;
