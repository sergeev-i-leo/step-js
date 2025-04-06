import {
  DIV,
  IMG,
  H2,
  HR
} from "@step-js-core/index";
import {
  YScrollablePanel,
} from "@step-js-widgets/index";
import {
  BtnPrimary,
  Card,
  ContainerFluid,
  Row,
} from "@step-js-bootstrap-widgets/index";
import mountModal from "./mount-modal";

let socialMediaImage = require("~images/social-media.png");
let marketingImage = require("~images/marketing.png");
let rentImage = require("~images/rent.png");
let hiringImage = require("~images/hiring.png");

class ServicesPage extends YScrollablePanel {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 position-relative");
  }

  mount() {
    let containerFluid = new ContainerFluid("pt-5", this);
    let row = new Row("d-flex justify-content-center", containerFluid);
    let div = new DIV("d-flex justify-content-center", row);
    new H2("Our Services", "pb-3 display-6", div);
    row.append(this.mountCard(0));
    row.append(this.mountCard(1));
    row.append(this.mountCard(2));
    row.append(this.mountCard(3));
  }

  mountCard(index: number) {
    let col = new DIV("col-lg-4 col-sm-6 p-3");
    let card = new Card("text-center", col);
    let div = new DIV("pt-3 d-flex justify-content-center", card);
    switch (index) {
      case 0:
        new IMG(socialMediaImage, div).setStyle({
          height: "5rem"
        });
        break;
      case 1:
        new IMG(marketingImage, div).setStyle({
          height: "5rem"
        });
        break;
      case 2:
        new IMG(rentImage, div).setStyle({
          height: "5rem"
        });
        break;
      case 3:
        new IMG(hiringImage, div).setStyle({
          height: "5rem"
        });
        break;
    }
    new HR(card);
    let body = new Card.Body("text-center", card);
    new Card.Title(`Service ${index + 1}`, body);
    let text = new Card.Text("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
    body.append(text);
    new HR(card);
    div = new DIV("py-2 d-flex justify-content-center align-items-center", card);
    mountModal("Read More", div);
    return col;
  }
}

export default ServicesPage;
