import {
  DIV,
  SPAN,
} from "@step-js-core/index";
import {
  BtnPrimary,
} from "@step-js-bootstrap-widgets/index";
import {
  Modal1,
  viewModal1
} from "./modal-1";

class Modal1Wrapper extends DIV {

  constructor() {
    super("h-100 d-flex flex-column align-items-stretch");
  }

  mount() {
    // modal view

    let div = new DIV("flex-grow-1 modal d-block position-relative", this);
    div.setStyleRule("background-color", "transparent");
    div.append(viewModal1());

    let modal1 = new Modal1();
    this.append(modal1);

    // footer

    div = new DIV("flex-grow-0 d-flex flex-row justify-content-between align-items-center p-2", this);
    div.setStyle({
      backgroundColor: "var(--bs-orange)",
    });
    let btnPrimary = new BtnPrimary("Run It !", div);
    btnPrimary.onClick = () => {
      modal1.show();
    };
    div.append(new SPAN("Step JS : Modal 1", "text-white"));
  };
}

export default Modal1Wrapper;
