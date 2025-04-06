import "bootstrap/dist/css/bootstrap.min.css";
import {
  Browser,
  DIV,
  SPAN,
  P,
} from "@step-js-core/index";
import {
  YScrollablePanel
} from "@step-js-widgets/index";
import {
  BtnPrimary,
  BtnSecondary,
} from "@step-js-bootstrap-widgets/index";

class StateIndex1 extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex flex-column align-items-stretch");
    this.setState({
      counter: 0,
      texts: []
    });
  }

  mount() {
    let div = new DIV("flex-grow-0 p-5 d-flex justify-content-between", this);
    let button = new BtnPrimary("-1", div);
    button.onClick = () => {
      let state = this.cloneState();
      state.counter--;
      state.texts.push(`Button pressed, counter decreased to ${state.counter}`);
      this.setState(state);
    };
    div.append(new SPAN(`counter = ${this.getState().counter}`));
    button = new BtnSecondary("+1", "ms-2", div);
    button.onClick = () => {
      let state = this.cloneState();
      state.counter++;
      state.texts.push(`Button pressed, counter increased to ${state.counter}`);
      this.setState(state);
    };

    const scrollablePanel = new YScrollablePanel("flex-grow-1", this);
    this.getState().texts.forEach((text) => {
      new P(text, scrollablePanel);
    });
  }
}

const runExample = async () => {
  Browser.mount(new StateIndex1(), document.getElementById("app"));
};

document.addEventListener("DOMContentLoaded", () => runExample());
