import {
  Router,
  StyleRuleAnimations,
  DIV,
  IMG,
  SPAN,
  LI,
} from "@step-js-core/index";
import ThemesSwitchTS from "../apps/theme-switches/themes-switch-ts";
import {Navbar, NavbarMD} from "@step-js-bootstrap-widgets/components/navbar";
import {ContainerFluid, Dropdown, DropdownWidget, Nav} from "@step-js-bootstrap-widgets/index";
import AppRouter from "./app-router";
import "./app.scss";

class App extends DIV {

  constructor() {
    super("d-flex flex-column bg-body");
    this.setStyle({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    });
  }

  mount() {
    const navbar = new NavbarMD("flex-grow-0", this);
    navbar.setStyleRule("background-color", "var(--bs-orange)");

    let containerFluid = new ContainerFluid(navbar);

    // Navbar.Brand

    let brand = new Navbar.Brand("#", undefined, "d-flex align-items-center", containerFluid);

    let div = new DIV("d-inline-block rounded-circle bg-white", brand).setStyle({
      width: "4rem",
      height: "4rem",
      backgroundColor: "var(--bs-border-color)"
    });
    div = new DIV("d-flex justify-content-center align-items-center w-100 h-100", div);
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

    let item = new Nav.Item(nav);
    let link = new Nav.Link("/", "Step JS", item);
    link.onClick = (event: any) => {
      Router.navigateTo(event, "/");
    };

    // Nav.Item 2

    item = new Nav.Item(nav);
    link = new Nav.Link("/apps", "Приложения", item);
    link.onClick = (event: any) => {
      Router.navigateTo(event, "/apps");
    };

    // Nav.Item 2

    item = new Nav.Item(nav);
    link = new Nav.Link("/components", "Компоненты", item);
    link.onClick = (event: any) => {
      Router.navigateTo(event, "/components");
    };

    // Nav.Item 2

    item = new Nav.Item(nav);
    link = new Nav.Link("/about", "О Программе", item);
    link.onClick = (event: any) => {
      Router.navigateTo(event, "/about");
    };

    const appRouter = new AppRouter();
    this.append(appRouter);

    containerFluid = new ContainerFluid("d-flex justify-content-end", this);
    containerFluid.setStyleRule("background-color", "var(--bs-orange)");
    containerFluid.append(new ThemesSwitchTS());

  }

  mountToggler() {
    let dropdown = new DropdownWidget("button", "navbar-toggler");
    dropdown.append(new SPAN(undefined, "navbar-toggler-icon"));
    const menu = new Dropdown.Menu(dropdown);

    dropdown.onClick = () => {
      dropdown.showMenu();
    };

    let li = new LI(undefined, menu);
    let item = new Dropdown.Item("/", "Step JS", li);
    item.onClick = (event: any) => {
      dropdown.hideMenu();
      Router.navigateTo(event, "/");
    };
    li = new LI(menu);
    item = new Dropdown.Item("/apps", "Приложения", li);
    item.onClick = (event: any) => {
      dropdown.hideMenu();
      Router.navigateTo(event, "/apps");
    };
    li = new LI(menu);
    item = new Dropdown.Item("/components", "Компоненты", li);
    item.onClick = (event: any) => {
      dropdown.hideMenu();
      Router.navigateTo(event, "/components");
    };
    li = new LI(menu);
    item = new Dropdown.Item("/about", "О Программе", li);
    item.onClick = (event: any) => {
      dropdown.hideMenu();
      Router.navigateTo(event, "/about");
    };
    return dropdown;
  }

  componentDidMount() {
    const htmlElement = document.getElementById("app");
    if (htmlElement) {
      StyleRuleAnimations.fire(htmlElement, {
        styleRule: "opacity",
        from: 0,
        to: 1,
        duration: 0.5
      });
    }
  }
}

export default App;
