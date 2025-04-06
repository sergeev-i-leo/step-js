// https://www.youtube.com/watch?v=R6AEjUewTNw

import {
  IMG,
  DIV,
} from "@step-js-core/index";
import {
  Container,
  Nav,
  Navbar
} from "@step-js-bootstrap-widgets/index";
import HomePage from "./home-page";
import AboutPage from "./about-page";
import ServicesPage from "./services-page";
import {
  Accordion1Div,
} from "../accordion-1/accordion-1-div";
import "../app.scss";

class App1 extends DIV {

  constructor(initialRoute: string, ...params: any) {
    super(...params);
    this.addClassNames("h-100 bg-body d-flex flex-column align-items-stretch");
    this.state = {
      route: initialRoute
    }
  }

  mount() {
    let navbar = new Navbar("flex-grow-0 navbar-expand-lg bg-primary-subtle py-3", this);

    let container = new Container(navbar);

    let brand = new Navbar.Brand("/app-1/home", container);
    let img = new IMG(require("~images/logo.png"));
    img.setStyleRule("height","3rem");
    brand.append(img);
    brand.onClick = () => {
      // stop linking
      this.setState({
        route: "/app-1/home"
      });
    };

    new Navbar.Toggler(container);

    // collapsible menu start

    let collapse = new Navbar.Collapse(container);
    let nav = new Navbar.Nav("ms-auto", collapse);

    let item = new Nav.Item(nav);
    let link = new Nav.Link("/app-1/home", "Home", item);
    link.onClick = () => {
      // stop linking
      this.setState({
        route: "/app-1/home"
      });
    };

    item = new Nav.Item(nav);
    link = new Nav.Link("/app-1/about", "About", item);
    link.onClick = () => {
      // stop linking
      this.setState({
        route: "/app-1/about"
      });
    };

    item = new Nav.Item(nav);
    link = new Nav.Link("/app-1/services", "Services", item);
    link.onClick = () => {
      // stop linking
      this.setState({
        route: "/app-1/services"
      });
    };

    item = new Nav.Item(nav);
    link = new Nav.Link("/app-1/faq", "FAQ", item);
    link.onClick = () => {
      // stop linking
      this.setState({
        route: "/app-1/faq"
      });
    };
    if (this.getState().route == "/app-1/about") {
      this.append(new AboutPage());
    } else if (this.getState().route == "/app-1/services") {
      this.append(new ServicesPage());
    } else if (this.getState().route == "/app-1/faq") {
      this.append(new Accordion1Div());
    } else {
      this.append(new HomePage());
    }
  }
}

export default App1;
