import {
  VirtualElement,
  Widget,
  DIV
} from "@step-js-core/index";
import "./tabbed-panel.scss";

class TabbedPanel extends DIV {
  tabTitles: string[] = [];
  selectedTabsIndex = 0;
  tabsVirtualElement?: VirtualElement;
  contentsVirtualElement?: VirtualElement;

  constructor(...params: any) {
    super(...params);
    this.addClassNames("step-js-tabbed-panel");
    this.setStyle({
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch"
    });
  }

  appendTabbedContent(title: string, widget: Widget) {
    this.tabTitles.push(title);
    this.append(widget);
  }

  addVirtualElementsTo(parentVirtualElement: VirtualElement) {
    this.addVirtualTitleElementsTo(parentVirtualElement);
    this.contentsVirtualElement = new VirtualElement(undefined, "div", {
      className: "step-js-tabbed-panel-tabs-contents -step-js-select-none"
    });
    parentVirtualElement.append(this.contentsVirtualElement);
    const children = this.getChildren();
    for (let i = 0; i < children.length; i++) {
      const virtualElement0 = new VirtualElement(undefined, "div", {
        className: "step-js-tabbed-panel-tabs-content",
        style: {
          visibility: "hidden"
        }
      });
      this.contentsVirtualElement.append(virtualElement0);
      const virtualElement1 = children[i].createVirtualElement();
      if (virtualElement1 != null) {
        virtualElement0.append(virtualElement1);
      }
    }
  }

  addVirtualTitleElementsTo(parentVirtualElement: VirtualElement) {
    if (!this.tabTitles.length) {
      return;
    }
    this.tabsVirtualElement = this.createTabsVirtualElement();
    parentVirtualElement.append(this.tabsVirtualElement);
    for (let i = 0; i < this.tabTitles.length; i++) {
      const widget = this.createTabWidget(this.tabTitles[i]);
      this.tabsVirtualElement.append(widget.createVirtualElement());
      widget.onClick = () => {
        this.selectTab(i);
      }
    }
  }

  createTabWidget(title: string) {
    const div = new DIV("step-js-tabbed-panel-tab-title");
    div.setInnerText(title);
    return div;
  }

  createTabsVirtualElement() {
    return new VirtualElement(undefined, "div", {
      className: "step-js-tabbed-panel-tabs -step-js-select-none"
    });
  }

  callComponentDidMount() {
    this.selectTab(this.selectedTabsIndex);
    super.callComponentDidMount();
  }

  selectTab(tabsIndex: number) {
    this.selectedTabsIndex = tabsIndex;
    if (this.tabsVirtualElement) {
      if (this.tabsVirtualElement.children) {
        for (let i = 0; i < this.tabsVirtualElement.children.length; i++) {
          const htmlElement = this.tabsVirtualElement.children[i].getHTMLElement();
          if (htmlElement) {
            if (i === this.selectedTabsIndex) {
              htmlElement.style.display = "block";
              htmlElement.classList.add("--selected");
            } else {
              htmlElement.classList.remove("--selected");
            }
          }
        }
      }
    }
    if (this.contentsVirtualElement) {
      if (this.contentsVirtualElement.children) {
        for (let i = 0; i < this.contentsVirtualElement.children.length; i++) {
          const htmlElement = this.contentsVirtualElement.children[i].getHTMLElement();
          if (htmlElement) {
            if (i === this.selectedTabsIndex) {
              htmlElement.classList.add("--selected");
              htmlElement.style.visibility = "visible";
            } else {
              htmlElement.classList.remove("--selected");
              htmlElement.style.visibility = "hidden";
            }
          }
        }
      }
    }
  }

  setTabVisible(tabsIndex: number, visible: boolean) {
    if (this.tabsVirtualElement) {
      if (this.tabsVirtualElement.children) {
        for (let i = 0; i < this.tabsVirtualElement.children.length; i++) {
          if (i === tabsIndex) {
            const htmlElement = this.tabsVirtualElement.children[i].getHTMLElement();
            if (htmlElement) {
              htmlElement.style.display = visible ? "block" : "none";
            }
          }
        }
      }
    }
    if (this.contentsVirtualElement) {
      if (this.contentsVirtualElement.children) {
        for (let i = 0; i < this.contentsVirtualElement.children.length; i++) {
          if (i === tabsIndex) {
            const htmlElement = this.contentsVirtualElement.children[i].getHTMLElement();
            if (htmlElement) {
              htmlElement.style.visibility = visible ? "visible" : "hidden";
            }
          }
        }
      }
    }
  }
}

export default TabbedPanel;
