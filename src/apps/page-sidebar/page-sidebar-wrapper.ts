import {
  DIV,
  H4,
  SPAN
} from "@step-js-core/index";
import {
  Sidebar,
  YScrollablePanel
} from "@step-js-widgets/index";
import PageSidebarPanel from "./page-sidebar-panel";
import PageSidebar from "./page-sidebar";

class PageSidebarWrapper extends DIV {

  constructor() {
    super("h-100");
  }

  mount() {
    new PageSidebar(PageSidebarWrapperPanel, PageSidebarWrapperContent, this);
  }
}

class PageSidebarWrapperPanel extends PageSidebarPanel {

  mount() {

    this.mountTitle("/apps");

    const scrollablePanel = new YScrollablePanel("flex-grow-1", this);
    scrollablePanel.setScrollBarsVisibilityPolicy("never");

    this.mountApp1(scrollablePanel);
  }

  mountApp1(scrollablePanel: YScrollablePanel) {

    let h4 = new H4(undefined, "page-sidebar-header", scrollablePanel);
    new SPAN("App 1", h4);

    // home

    this.mountLink("01", "Home", "/app-1/home", scrollablePanel);

    // about

    this.mountLink("02", "About", "/app-1/about", scrollablePanel);

    // services

    this.mountLink("03", "Services", "/app-1/services", scrollablePanel);

    // faq

    this.mountLink("04", "FAQ", "/app-1/faq", scrollablePanel);
  }
}

class PageSidebarWrapperContent extends Sidebar.Content {

  constructor() {
    super("h-100");
    this.setState({
      route: "/default"
    });
  }

  mount() {
    const div = new DIV("text-center", this);
    new SPAN(this.getState().route, div);
  }
}

export default PageSidebarWrapper;
