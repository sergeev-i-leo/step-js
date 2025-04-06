import "bootstrap/dist/css/bootstrap.min.css";
import {
  Utils
} from "@step-js-core/index";
import {
  Browser
} from "@step-js-core/index";
import Modal1Wrapper from "../apps/modal-1/modal-1-wrapper";
import ScrollablePanel1Wrapper from "../apps/scrollable-panel-1/scrollable-panel-1-wrapper";
import ScrollablePanel2 from "../apps/scrollable-panel-2/scrollable-panel-2";
import App1 from "../apps/app-1/app-1";
import Sidebar1 from "../apps/sidebar-1/sidebar-1";
import PageSidebarWrapper from "../apps/page-sidebar/page-sidebar-wrapper";
import Navbar1Wrapper from "../apps/navbar-1/navbar-1-wrapper";
import ThemeSwitches from "../apps/theme-switches/theme-switches";
import AppRouter from "../sandbox/app-router/app-router";
import ModelsTab from "../sandbox/models-tab/models-tab";
import TemplatesTab from "../sandbox/templates-tab/templates-tab";
import TreeView1Wrapper from "../apps/tree-view-1/tree-view-1-wrapper";
import Carousel1Wrapper from "../apps/carousel-1/carousel-1-wrapper";
import Carousel9Wrapper from "../apps/carousel-9/carousel-9-wrapper";
import {Accordion1Div} from "../apps/accordion-1/accordion-1-div";

// fonts declared in public/index.html

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

const runSandbox = async () => {

  await loadFonts();

  let htmlElement = document.getElementById("app-tab");
  if (htmlElement) {
    //Browser.mount(new Modal1Wrapper(), htmlElement);
    //Browser.mount(new ScrollablePanel1Wrapper(), htmlElement);
    //Browser.mount(new ScrollablePanel2(), htmlElement);
    //Browser.mount(new Carousel9Wrapper(), htmlElement);
    //Browser.mount(new Carousel2Wrapper(), htmlElement);
    //Browser.mount(new Navbar1Wrapper(), htmlElement);
    //Browser.mount(new App1("/"), htmlElement);
    //Browser.mount(new Sidebar1(), htmlElement);
    //Browser.mount(new PageSidebarWrapper(), htmlElement);
    //Browser.mount(new ThemeSwitches(), htmlElement);
    //Browser.mount(new TreeView1Wrapper(), htmlElement);
    //Browser.mount(new LessonsApp(), htmlElement);
    Browser.mount(new Accordion1Div(), htmlElement);

  }

  htmlElement = document.getElementById("templates-tab");
  if (htmlElement) {
    Browser.mount(new TemplatesTab(), htmlElement);
  }

  htmlElement = document.getElementById("models-tab");
  if (htmlElement) {
    Browser.mount(new ModelsTab(), htmlElement);
  }

  htmlElement = document.getElementById("app-router");
  if (htmlElement) {
    Browser.mount(new AppRouter(), htmlElement);
  }
};

document.addEventListener("DOMContentLoaded", () => runSandbox());
