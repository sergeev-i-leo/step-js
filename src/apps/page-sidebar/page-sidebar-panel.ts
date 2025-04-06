import {
  DIV,
  H5,
  I,
  SPAN,
  StyleRuleAnimations
} from "@step-js-core/index";
import {
  Sidebar
} from "@step-js-widgets/sidebars/sidebars";
import {
  YScrollablePanel
} from "@step-js-widgets/scrollable-panel/scrollable-panel";

class PageSidebarPanel extends Sidebar.Panel {

  constructor(sidebar: Sidebar, sidebarContent: Sidebar.Content, ...params) {
    super(sidebar, sidebarContent, ...params);
    this.addClassNames("page-sidebar-panel step-js-select-none bg-secondary");
    this.setStyleRule("--bs-bg-opacity", "0.75");
  }

  mountTitle(title: string) {
    let div = new DIV("flex-grow-0 position-relative", this);
    div.setStyle({
      height: "4rem",
    });
    div = new DIV("d-flex align-items-center border-bottom overflow-hidden", div);
    div.setStyle({
      position: "absolute",
      right: 0,
      top: 0,
      width: "var(--step-js-sidebar-panel-width)",
      paddingLeft: "1rem",
      bottom: 0,
    });
    div.append(new H5(title, "mb-0").setStyleRule("font-weight", "700"));

    div = new DIV("d-flex justify-content-center align-items-center", div);
    div.setStyle({
      position: "absolute",
      cursor: "pointer",
      right: 0,
      top: 0,
      width: "3rem",
      height: "4rem",
    });

    new I("fa fa-bars", div);

    div.onClick = () => {
      this.sidebar.togglePanel();
    };
  }

  mountLink(number: string, text: string, route: string, scrollablePanel: YScrollablePanel) {

    let div = new DIV("page-sidebar-link", scrollablePanel);
    // set cursor to pointer
    div.setAttribute("role", "button");
    div.onClick = () => {
      this.sidebar.closeIfNecessary();
      const state = this.sidebarContent.cloneState();
      if (state.route === route) {
        return;
      }
      if ((this.sidebarContent as any).appDIV) {
        const htmlElement = (this.sidebarContent as any).appDIV.getHTMLElement();
        if (htmlElement) {
          StyleRuleAnimations.fire(htmlElement!, {
            styleRule: "opacity",
            from: 1,
            to: 0,
            duration: 0.5,
            onComplete: () => {
              state.route = route;
              this.sidebarContent.setState(state);
            }
          });
        }
      }
    };

    new DIV("i", div).setInnerHTML(number);
    new SPAN(text, "ms-2", div);
  }
}

export default PageSidebarPanel;
