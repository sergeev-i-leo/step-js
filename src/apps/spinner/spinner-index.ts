import "bootstrap/dist/css/bootstrap.min.css";
import {
  Browser,
  DIV,
} from "@step-js-core/index";
import Spinner from "./spinner";

class Example extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex justify-content-center align-items-center");
  }

  mount() {
    let spinner = Spinner({
      size: "6rem"
    });
    this.append(spinner);
  }
}

const runExample = () => {
  Browser.mount(new Example(), document.getElementById("app"));
};

document.addEventListener("DOMContentLoaded", () => runExample());
