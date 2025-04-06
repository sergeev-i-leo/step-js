import "bootstrap/dist/css/bootstrap.min.css";
import {
  Browser,
} from "@step-js-core/index";
import Modals from "./modals";

const runExample = async () => {

  Browser.mount(new Modals(8), document.getElementById("app"));
};

document.addEventListener("DOMContentLoaded", () => runExample());
