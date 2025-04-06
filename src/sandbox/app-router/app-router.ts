import {
  DIV,
  IMG,
  LI,
  Router,
  SPAN
} from "@step-js-core/index";
import {
  ContainerFluid, Dropdown, DropdownWidget, Nav,
  Navbar,
  NavbarMD
} from "@step-js-bootstrap-widgets/index";
import Utils from "@step-js-core/utils";
import ThemesSwitch from "./themes-switch";
import "./app-router.scss";

class AppRouter extends Router {

  appNavLink?: Nav.Link;
  modelsNavLink?: Nav.Link;
  templatesNavLink?: Nav.Link;

  constructor() {
    super("h-100 bg-body");
  }

  mount() {
    let div = new DIV("sandbox-navbar-wrapper", this);

    const navbar = new NavbarMD("flex-grow-0", div);

    let containerFluid = new ContainerFluid(navbar);

    // Navbar.Brand

    let brand = new Navbar.Brand("#", undefined, "d-flex align-items-center", containerFluid);

    div = new DIV("d-inline-block", brand).setStyle({
      position: "relative",
      width: "4rem",
      height: "4rem",
    });
    new IMG(require("~images/gear.svg"), div).setStyle({
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%"
    });
    div = new DIV("d-flex justify-content-center align-items-center", div).setStyle({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    });
    new IMG(require("~images/logo.svg"), div).setStyleRule("height", "50%");

    brand.onClick = (event: any) => {
      Router.navigateTo(event, "/");
    };

    // Navbar.Toggler

    containerFluid.append(this.mountToggler());

    // Navbar.Collapse

    let collapse = new Navbar.Collapse(containerFluid);

    // Navbar.Nav

    let nav = new Navbar.Nav("me-auto mb-2 mb-sm-0", collapse);

    // Nav.Item 1

    let item = new Nav.Item("disabled", nav);
    this.appNavLink = new Nav.Link("/", "App", item);
    this.appNavLink.onClick = (event: any) => {
      Router.navigateTo(event, "/");
    };

    // Nav.Item 2

    item = new Nav.Item(nav);
    this.modelsNavLink = new Nav.Link("/models", "Models", item);
    this.modelsNavLink.onClick = (event: any) => {
      Router.navigateTo(event, "/models");
    };

    // Nav.Item 2

    item = new Nav.Item(nav);
    this.templatesNavLink = new Nav.Link("/templates", "Templates", item);
    this.templatesNavLink.onClick = (event: any) => {
      Router.navigateTo(event, "/templates");
    };

    new ThemesSwitch(containerFluid);
  }

  mountToggler() {
    let dropdown = new DropdownWidget("button", "navbar-toggler");

    dropdown.append(new SPAN(undefined, "navbar-toggler-icon"));
    const menu = new Dropdown.Menu("app-router-dropdown-menu", dropdown);

    dropdown.onClick = () => {
      dropdown.showMenu();
    };

    let li = new LI(undefined, menu);
    let item = new Dropdown.Item("/", "App", li);
    item.onClick = (event: any) => {
      dropdown.hideMenu();
      Router.navigateTo(event, "/");
    };
    li = new LI(menu);
    item = new Dropdown.Item("/models", "Models", li);
    item.onClick = (event: any) => {
      dropdown.hideMenu();
      Router.navigateTo(event, "/models");
    };
    li = new LI(menu);
    item = new Dropdown.Item("/templates", "Templates", li);
    item.onClick = (event: any) => {
      dropdown.hideMenu();
      Router.navigateTo(event, "/templates");
    };
    return dropdown;
  }

  componentDidMount() {
    const htmlElement = document.getElementById("app-splash-screen");
    if (htmlElement) {
      htmlElement.style.display = "none";
    }
    this.forceUpdate();
  }

  forceUpdate() {
    if (this.appNavLink) {
      this.appNavLink.removeClassName("disabled");
    }
    if (this.modelsNavLink) {
      this.modelsNavLink.removeClassName("disabled");
    }
    if (this.templatesNavLink) {
      this.templatesNavLink.removeClassName("disabled");
    }

    let parsedUrl = new Utils.ParsedURL(window.location);
    let route = "/app";
    let tabHTMLElement: HTMLElement | null = null;
    switch (parsedUrl.pathname) {
      case "/models":
        route = "/models";
        tabHTMLElement = document.getElementById("models-tab");
        if (this.modelsNavLink) {
          this.modelsNavLink.addClassNames("disabled");
        }
        break;
      case "/templates":
        route = "/templates";
        tabHTMLElement = document.getElementById("templates-tab");
        if (this.templatesNavLink) {
          this.templatesNavLink.addClassNames("disabled");
        }
        break;
      default:
        tabHTMLElement = document.getElementById("app-tab");
        if (this.appNavLink) {
          this.appNavLink.addClassNames("disabled");
        }
        break;
    }

    const appHTMLElement = document.getElementById("app");
    if ((appHTMLElement) && (tabHTMLElement)) {
      // make tab last
      appHTMLElement.removeChild(tabHTMLElement);
      appHTMLElement.appendChild(tabHTMLElement);
    }

  }
}

export default AppRouter;
