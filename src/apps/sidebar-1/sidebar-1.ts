// https://colorlib.com/etc/bootstrap-sidebar/sidebar-01/

import {
  BtnPrimary,
  ContainerFluid,
  Dropdown,
  ListUnstyled,
  Modal,
  Nav,
} from "@step-js-bootstrap-widgets/index";
import {
  DIV,
  P,
  IMG,
  H3,
  LI,
  I,
  UL
} from "@step-js-core/index";
import {
  YScrollablePanel
} from "@step-js-widgets/index";
import ThemesSwitchTS from "./themes-switch";
import "../app.scss";
import "./sidebar-1.scss";

class Sidebar1 extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex flex-column align-items-stretch sidebar-1");
  }

  mount() {
    let div0 = new DIV("d-flex h-100 align-items-stretch", this);
    const nav = new Nav("position-relative", div0);
    nav.setStyle({
      minWidth: "300px",
      maxWidth: "300px",
      background: "#1D1919",
      color: "#FFF"
    });

    let div1 = new DIV("flex-grow-1 d-flex flex-column align-items-stretch bg-body", div0);
    div1.setDataAttribute("bs-theme", "dark");
    let containerFluid = new ContainerFluid("flex-grow-0", div1);
    let div2 = new DIV("flex-grow-0 d-flex align-items-center", containerFluid);
    let btnPrimary = new BtnPrimary(undefined, "d-inline-block", div2);
    btnPrimary.append(new I("fa fa-bars"));
    btnPrimary.onClick = () => {
      nav.toggleClassName("--hidden");
    };

    div2.append(new H3("Sidebar 1", "m-3 flex-grow-1 justify-content-start align-items-center text-body"));
    div2.append(new ThemesSwitchTS(div1));

    containerFluid.append(new DIV("my-3 border-bottom"));
    containerFluid.append(new P(loremIpsum, "lead text-body"));

    // nav

    div0 = new DIV("w-100 d-flex flex-column align-items-center", nav);
    div1 = new DIV("flex-grow-0 d-flex justify-content-center my-5", div0);
    div2 = new DIV("d-flex justify-content-center rounded-circle bg-white", div1);
    div2.setStyle({
      width: "120px",
      height: "120px"
    });
    const benderImage = require("~images/bender.png");
    new IMG(benderImage, div2).setStyleRule("width", "100px");
    div1 = new DIV("w-100 flex-grow-1 p-3 pt-0", div0);
    let scrollablePanel = new YScrollablePanel("h-100", div1);

    let ul0 = new UL(scrollablePanel);
    ul0.setStyleRule("padding-right", "16px");

    let li = new LI(ul0);
    let dropdownToggle = new Dropdown.Toggle("div", "Home", li);
    let ul1 = new ListUnstyled(li);
    li = new LI(ul1);
    li.append(new DIV("ms-2").setInnerText("Home 1"));
    li.append(new DIV("ms-2").setInnerText("Home 2"));
    li.append(new DIV("ms-2").setInnerText("Home 3"));

    li = new LI(ul0);
    li.append(new DIV().setInnerText("About"));

    li = new LI(ul0);
    dropdownToggle = new Dropdown.Toggle("div", "Pages", li);
    ul1 = new ListUnstyled(li);
    li = new LI(ul1);
    li.append(new DIV("ms-2").setInnerText("Page 1"));
    li.append(new DIV("ms-2").setInnerText("Page 2"));
    li.append(new DIV("ms-2").setInnerText("Page 3"));

    li = new LI(ul0);
    li.append(new DIV().setInnerText("Portfolio"));

    li = new LI(ul0);
    li.append(new DIV().setInnerText("Contact"));
  }
}

const loremIpsum = `
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
`;

export default Sidebar1;
