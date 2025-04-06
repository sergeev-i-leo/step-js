import {
  DIV,
  IMG,
  SPAN,
  VirtualElement
} from "@step-js-core/index";
import {
  TabbedPanel
} from "@step-js-widgets/index";
import "./components-page-tabbed-panel.scss";

class ComponentsPageTabbedPanel extends TabbedPanel {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("components-page-tabbed-panel");
  }

  createTabsVirtualElement() {
    return new VirtualElement(undefined, "div", {
      className: "step-js-tabbed-panel-tabs step-js-select-none p-3 border-bottom"
    });
  }

  createTabWidget(title: string) {
    const div = new DIV("step-js-tabbed-panel-tab-title d-flex align-items-center");
    const img = new IMG(require("~images/check-mark.svg")).setStyleRule("height", "1rem");
    div.append(img);
    div.append(new SPAN(title, "ps-3"));
    return div;
  }
}

export default ComponentsPageTabbedPanel;
