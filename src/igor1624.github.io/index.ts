import "bootstrap/dist/css/bootstrap.min.css";

import {
  Browser, DIV,
  Utils,
} from "@step-js-core/index";
import App from "./app";
import Spinner from "../apps/spinner/spinner";

// load fonts

const FontFaceObserver = require("fontfaceobserver");

const loadFonts = async () => {
  const andikaFontFaceObserver = new FontFaceObserver("Andika");
  const dmMonoFontFaceObserver = new FontFaceObserver("DM Mono");
  const shantellSansFontFaceObserver = new FontFaceObserver("Shantell Sans");

  await andikaFontFaceObserver.load();
  await dmMonoFontFaceObserver.load();
  await shantellSansFontFaceObserver.load();

  document.body.style["font-family"] = "Andika, serif";

  await Utils.wait(1000);
};

const runPage = async () => {
  let htmlElement = document.getElementById("main-loader-wrapper");
  if (htmlElement) {
    const div = new DIV("h-100 d-flex justify-content-center align-items-center");
    div.append(Spinner({
      size: "6rem"
    }));
    Browser.mount(div, htmlElement);
  }

  await loadFonts();

  Browser.mount(new App(), document.getElementById("app"));
};

document.addEventListener("DOMContentLoaded", () => runPage());
