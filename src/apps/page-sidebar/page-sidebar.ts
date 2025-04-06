import {
  LeftSidebarSM,
} from "@step-js-widgets/index";
import "../app.scss";
import "./page-sidebar.scss";

class PageSidebar extends LeftSidebarSM {

  constructor(SidebarPanel: any, SidebarContent: any, ...params: any) {
    super(SidebarPanel, SidebarContent, ...params);
    this.addClassNames("h-100");
  }
}

export default PageSidebar;
