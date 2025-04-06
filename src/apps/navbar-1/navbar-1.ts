import {
  DIV,
  IMG,
  LI
} from "@step-js-core/index";
import {
  Navbar,
  NavbarMD,
  ContainerFluid,
  Dropdown,
  Nav
} from "@step-js-bootstrap-widgets/index";

class Navbar1 extends NavbarMD {
  callback: Function;

  constructor(callback: Function, ...params: any) {
    super(...params);
    this.addClassNames("flex-grow-0 navbar-dark bg-dark border-bottom");
    this.callback = callback;
  }

  mount() {
    let containerFluid = new ContainerFluid(this);

    // Navbar.Brand

    let navbarBrand = new Navbar.Brand("#", undefined, "d-flex align-items-center", containerFluid);

    let div = new DIV("d-inline-block rounded-circle", navbarBrand);
    div.setStyle({
      width: "4rem",
      height: "4rem",
      backgroundColor: "var(--bs-border-color)"
    });
    div = new DIV("d-flex justify-content-center align-items-center w-100 h-100", div);
    new IMG(require("~images/bird.png"), div).setStyleRule("height", "100%");

    navbarBrand.onClick = () => {
      this.callback("/home");
    };

    // Navbar.Toggler

    let navbarToggler = new Navbar.Toggler(containerFluid);

    // Navbar.Collapse

    let navbarCollapse = new Navbar.Collapse(containerFluid);

    // Navbar.Nav

    let navbarNav = new Navbar.Nav("me-auto mb-2 mb-sm-0", navbarCollapse);

    // Nav.Item 1

    let navItem = new Nav.Item(navbarNav);
    let navLink = new Nav.Link("/home", "Home", "active", navItem);
    navLink.onClick = () => {
      this.callback("/home");
    };

    // Nav.Item 2

    navItem = new Nav.Item(navbarNav);
    navLink = new Nav.Link("/link", "Link", navItem);
    navLink.onClick = () => {
      this.callback("/link");
    };

    // Nav.Item 3

    navItem = new Nav.Item(navbarNav);
    navLink = new Nav.Link("/disabled", "Disabled", "disabled", navItem);
    navLink.onClick = () => {
      this.callback("/disabled");
    };

    // Nav.Dropdown

    let navDropdown = new Nav.Dropdown(navbarNav);
    let navDropdownToggle = new Nav.DropdownToggle(navDropdown);
    // beautify
    navDropdownToggle.setInnerHTML("Dropdown Toggle&nbsp;&nbsp;");
    let dropdownMenu = new Dropdown.Menu(navDropdown);
    let li = new LI(dropdownMenu);
    let dropdownItem = new Dropdown.Item("/home", "Home", li);
    dropdownItem.onClick = () => {
      navDropdown.hideMenu();
      this.callback("/home");
    };

    li = new LI(dropdownMenu);
    dropdownItem = new Dropdown.Item("/link", "Link", li);
    dropdownItem.onClick = () => {
      navDropdown.hideMenu();
      this.callback("/link");
    };

    li = new LI(dropdownMenu);
    new Dropdown.Divider(li);
    li = new LI(dropdownMenu);
    dropdownItem = new Dropdown.Item("/something-else-here", "Something else here", li);
    dropdownItem.onClick = () => {
      navDropdown.hideMenu();
      this.callback("/something-else-here");
    };
  }
}

const navbar1Source = `
import {
  DIV,
  IMG,
  LI
} from "@step-js-core/index";
import {
  Navbar,
  NavbarMD,
  ContainerFluid,
  Dropdown,
  Nav
} from "@step-js-bootstrap-widgets/index";

class Navbar1 extends NavbarMD {
  callback: Function;

  constructor(callback: Function, ...params: any) {
    super(...params);
    this.addClassNames("flex-grow-0 navbar-dark bg-dark border-bottom");
    this.callback = callback;
  }

  mount() {
    let containerFluid = new ContainerFluid(this);

    // Navbar.Brand

    let navbarBrand = new Navbar.Brand("#", undefined, "d-flex align-items-center", containerFluid);

    let div = new DIV("d-inline-block rounded-circle", navbarBrand);
    div.setStyle({
      width: "4rem",
      height: "4rem",
      backgroundColor: "var(--bs-border-color)"
    });
    div = new DIV("d-flex justify-content-center align-items-center w-100 h-100", div);
    new IMG(require("./assets/logo.svg"), div).setStyleRule("height", "100%");

    navbarBrand.onClick = () => {
      this.callback("/home");
    };

    // Navbar.Toggler

    let navbarToggler = new Navbar.Toggler(containerFluid);

    // Navbar.Collapse

    let navbarCollapse = new Navbar.Collapse(containerFluid);

    // Navbar.Nav

    let navbarNav = new Navbar.Nav("me-auto mb-2 mb-sm-0", navbarCollapse);

    // Nav.Item 1

    let navItem = new Nav.Item(navbarNav);
    let navLink = new Nav.Link("/home", "Home", "active", navItem);
    navLink.onClick = () => {
      this.callback("/home");
    };

    // Nav.Item 2

    navItem = new Nav.Item(navbarNav);
    navLink = new Nav.Link("/link", "Link", navItem);
    navLink.onClick = () => {
      this.callback("/link");
    };

    // Nav.Item 3

    navItem = new Nav.Item(navbarNav);
    navLink = new Nav.Link("/disabled", "Disabled", "disabled", navItem);
    navLink.onClick = () => {
      this.callback("/disabled");
    };

    // Nav.Dropdown

    let navDropdown = new Nav.Dropdown(navbarNav);
    let navDropdownToggle = new Nav.DropdownToggle(navDropdown);
    // beautify
    navDropdownToggle.setInnerHTML("Dropdown Toggle&nbsp;&nbsp;");
    let dropdownMenu = new Dropdown.Menu(navDropdown);
    let li = new LI(dropdownMenu);
    let dropdownItem = new Dropdown.Item("/home", "Home", li);
    dropdownItem.onClick = () => {
      dropdownMenu.hide();
      this.callback("/home");
    };

    li = new LI(dropdownMenu);
    dropdownItem = new Dropdown.Item("/link", "Link", li);
    dropdownItem.onClick = () => {
      dropdownMenu.hide();
      this.callback("/link");
    };

    li = new LI(dropdownMenu);
    new Dropdown.Divider(li);
    li = new LI(dropdownMenu);
    dropdownItem = new Dropdown.Item("/something-else-here", "Something else here", li);
    dropdownItem.onClick = () => {
      dropdownMenu.hide();
      this.callback("/something-else-here");
    };
  }
}
`;
export {
  Navbar1,
  navbar1Source
};
