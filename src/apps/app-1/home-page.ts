import {
  DIV,
  H1,
  P,
  IMG,
  H2,
  HR
} from "@step-js-core/index";
import {
  YScrollablePanel,
} from "@step-js-widgets/index";
import {
  Container,
  Row,
} from "@step-js-bootstrap-widgets/index";
import mountModal from "./mount-modal";

class HomePage extends YScrollablePanel {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("flex-grow-1 position-relative");
  }

  mount() {
    let container = new Container("pt-5 position-relative", this);

    let div0 = new DIV("d-lg-flex justify-content-center align-items-center", container);
    // add responsiveness
    div0.addClassNames("text-center text-lg-start");

    let div1 = new DIV(div0);
    const h1 = new H1("", div1);
    h1.setInnerHTML("Social <span class='text-primary'>Media Marketing</span>");
    div1.append(new HR());
    let p = new P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    p.addClassNames("lead py-4");
    div1.append(p);
    mountModal("Get Started Now", div1);

    let socialMediaImage = require("~images/social-media.png");
    let img = new IMG(socialMediaImage, "img-fluid", div0);
    // add responsiveness
    img.addClassNames("p-5 p-lg-0 mx-auto d-none d-lg-block");

    container = new Container(this);
    let row = new Row("mt-5 px-2", container);
    let col = new DIV("col-lg-6 col-sm-12", row);
    let marketingImage = require("~images/marketing.png");
    img = new IMG(marketingImage, "img-fluid", col);
    // add responsiveness
    img.addClassNames("p-5 p-lg-0");

    col = new DIV("col-lg-6 col-sm-12", row);
    col.addClassNames("text-center text-lg-start");
    let h2 = new H2("", col);
    h2.setInnerHTML("Manage all your <span class='text-secondary'>Social Networks</span> in one place");
    new HR(col);
    p = new P("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
    col.append(p);
    p.addClassNames("lead pt-4");

    mountModal("Read More", col);
  }
}

export default HomePage;
