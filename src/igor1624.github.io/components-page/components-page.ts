import {
  A,
  DIV,
  H3,
  P,
  Router,
  Utils
} from "@step-js-core/index";
import {
  YScrollablePanel
} from "@step-js-widgets/index";
import {
  Breadcrumb,
  BtnPrimary
} from "@step-js-bootstrap-widgets/index";
import ComponentsPageTabbedPanel from "./components-page-tabbed-panel";
import {Modal1, modal1Source, viewModal1} from "../../apps/modal-1/modal-1";
import SourceCodePanel from "../../apps/source-code-panel/source-code-panel";
import {Navbar1, navbar1Source} from "../../apps/navbar-1/navbar-1";
import {Accordion1Div, accordion1Source} from "../../apps/accordion-1/accordion-1-div";

class ComponentsPage extends DIV {
  componentsPageTabbedPanel?: ComponentsPageTabbedPanel;

  constructor() {
    super("h-100 bg-body components-page position-relative");
  }

  mount() {
    const parsedUrl = new Utils.ParsedURL(window.location);
    if (parsedUrl.pathname.indexOf("/components/modal-1") === 0) {
      let div0 = new DIV("h-100 d-flex flex-column align-items-stretch", this);

      let div1 = new DIV("flex-grow-0 p-2", div0);
      const breadcrumb = new Breadcrumb(div1);
      let item = new Breadcrumb.Item(breadcrumb);
      const a = new A("/components", "Компоненты", item);
      a.onClick = (event: any) => Router.navigateTo(event, "/components");
      item = new Breadcrumb.Item(breadcrumb);
      item.setActive();
      item.setInnerText("Bootstrap Modal 1");

      div1 = new DIV("flex-grow-1", div0);
      this.componentsPageTabbedPanel = new ComponentsPageTabbedPanel("h-100", div1);

      this.mountModal1();

      return;
    } else if (parsedUrl.pathname.indexOf("/components/navbar-1") === 0) {
      let div0 = new DIV("h-100 d-flex flex-column align-items-stretch", this);

      let div1 = new DIV("flex-grow-0 p-2", div0);
      const breadcrumb = new Breadcrumb(div1);
      let item = new Breadcrumb.Item(breadcrumb);
      const a = new A("/components", "Компоненты", item);
      a.onClick = (event: any) => Router.navigateTo(event, "/components");
      item = new Breadcrumb.Item(breadcrumb);
      item.setActive();
      item.setInnerText("Bootstrap Navbar 1");

      div1 = new DIV("flex-grow-1", div0);
      this.componentsPageTabbedPanel = new ComponentsPageTabbedPanel("h-100", div1);

      this.mountNavbar1();

      return;
    } else if (parsedUrl.pathname.indexOf("/components/accordion-1") === 0) {
      let div0 = new DIV("h-100 d-flex flex-column align-items-stretch", this);
      let div1 = new DIV("flex-grow-0 p-2", div0);
      const breadcrumb = new Breadcrumb(div1);
      let item = new Breadcrumb.Item(breadcrumb);
      const a = new A("/components", "Компоненты", item);
      a.onClick = (event: any) => Router.navigateTo(event, "/components");
      item = new Breadcrumb.Item(breadcrumb);
      item.setActive();
      item.setInnerText("Bootstrap Accordion 1");

      div1 = new DIV("flex-grow-1", div0);
      this.componentsPageTabbedPanel = new ComponentsPageTabbedPanel("h-100", div1);

      this.mountAccordion1();

      return;
    }

    let scrollablePanel = new YScrollablePanel("h-100");
    this.append(scrollablePanel);

    let div = new DIV(scrollablePanel).setStyle({
      width: "320px",
      margin: "1rem auto"
    });
    div.append(new H3("Modals", "py-3 pt-5 px-1"));
    div.append(new P("Bootstrap Modal 1", "px-1"));
    let a = new A("/components/modal1-1", "/components/modal-1", div);
    a.onClick = (event: any) => Router.navigateTo(event, "/components/modal-1");

    div = new DIV(scrollablePanel).setStyle({
      width: "320px",
      margin: "1rem auto"
    });
    div.append(new H3("Navbars", "py-3 pt-5 px-1"));
    div.append(new P("Bootstrap Navbar 1", "px-1"));
    a = new A("/components/navbar-1", "/components/navbar-1", div);
    a.onClick = (event: any) => Router.navigateTo(event, "/components/navbar-1");

    div = new DIV(scrollablePanel).setStyle({
      width: "320px",
      margin: "1rem auto"
    });
    div.append(new H3("Accordions", "py-3 pt-5 px-1"));
    div.append(new P("Bootstrap Accordion 1", "px-1"));
    a = new A("/components/accordion-1", "/components/accordion-1", div);
    a.onClick = (event: any) => Router.navigateTo(event, "/components/accordion-1");
  }

  mountModal1() {
    const div0 = new DIV("h-100");
    const div1 = new DIV("modal d-block position-relative", div0);
    div1.setStyleRule("z-index", "inherit");
    div1.append(viewModal1());

    let modal1 = new Modal1();
    this.append(modal1);

    const div2 = new DIV("text-center", div1);
    let btnPrimary = new BtnPrimary("Run Me !", div2);
    btnPrimary.setStyle({
      backgroundColor: "#AF52DE",
      borderColor: "#AF52DE"
    });
    btnPrimary.onClick = () => {
      modal1.show();
    };
    this.componentsPageTabbedPanel!.appendTabbedContent("Bootstrap Modal 1", div0);
    this.componentsPageTabbedPanel!.appendTabbedContent("Source code", new SourceCodePanel(modal1Source));
  }

  mountNavbar1() {
    this.componentsPageTabbedPanel!.appendTabbedContent("Bootstrap Navbar 1", new Navbar1(() => {}));
    this.componentsPageTabbedPanel!.appendTabbedContent("Source code", new SourceCodePanel(navbar1Source));
  }

  mountAccordion1() {
    this.componentsPageTabbedPanel!.appendTabbedContent("Bootstrap Accordion 1", new Accordion1Div());
    this.componentsPageTabbedPanel!.appendTabbedContent("Source code", new SourceCodePanel(accordion1Source));
  }
}

export default ComponentsPage;
