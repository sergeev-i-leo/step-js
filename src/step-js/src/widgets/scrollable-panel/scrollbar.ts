import {
  VirtualElement,
} from "@step-js-core/index";

class Scrollbar {
  trackVirtualElement: VirtualElement | null = null;
  thumbVirtualElement: VirtualElement | null = null;
  scrollXY = 0.0;
  viewportSize = 0.0;
  contentWrapperSize = 0.0;
  trackSize = 0.0;
  thumbSize = 0.0;
  thumbXY = 0.0;

  thumbHTMLElement: HTMLElement | null = null;
  clientXY = 0.0;
  pointedThumbXY = 0.0;
  pointerId: any;
}

export default Scrollbar;
