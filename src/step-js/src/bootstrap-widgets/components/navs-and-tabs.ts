import {
  Router,
  A,
  UL,
  LI
} from "@step-js-core/index";
import {
  DropdownWidget
} from "../components/dropdowns";

// Nav

class Nav extends UL {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("nav -step-js-select-none");
  }
}

namespace Nav {

  // Nav.Item

  export class Item extends LI {
    constructor(...params: any) {
      super(undefined, ...params);
      this.addClassNames("nav-item");
    }
  }

  // Nav.Link

  export class Link extends A {

    constructor(href: string | undefined, ...params: any) {
      super(href, ...params);
      this.addClassNames("nav-link -step-js-select-none");
    }

    onClick = (event: any) => {
      if (this.props.href) {
        Router.navigateTo(event, this.props.href);
      }
    }
  }

  // Nav.Dropdown

  export class Dropdown extends DropdownWidget {

    constructor(...params: any) {
      super("li", ...params);
      this.addClassNames("nav-item dropdown -step-js-select-none");
    }
  }

  // Nav.DropdownToggle

  export class DropdownToggle extends A {

    constructor(...params: any) {
      super(undefined, ...params);
      this.addClassNames("nav-link dropdown-toggle -step-js-select-none");
      this.props.role = "button";
    }
  }
}

export default Nav;
