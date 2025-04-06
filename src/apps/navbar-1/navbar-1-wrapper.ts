import {
  DIV,
  SPAN
} from "@step-js-core/index";
import {Navbar1} from "./navbar-1";

class Navbar1Wrapper extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex flex-column position-relative");
    this.setState({
      route: "Home"
    });
  }

  mount() {
    new Navbar1((route: string) => this.callback(route), this);
    let div = new DIV("flex-grow-1 position-relative", this);
    div = new DIV("p-5 text-center", div);
    div.setStyle({
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
    });
    div.append(new SPAN(`this.getState().route = ${this.getState().route}`));
  }

  callback(route: string) {
    const state = this.cloneState();
    state.route = route;
    this.setState(state);
  }
}

export default Navbar1Wrapper;
