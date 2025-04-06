import {
  P
} from "@step-js-core/index";
import {
  BtnSecondary,
  Modal
} from "@step-js-bootstrap-widgets/index";

class Modal1 extends Modal {

  mount() {
    const dialog = new Modal.Dialog(this);
    const content = new Modal.Content(dialog);
    const header = new Modal.Header(content);
    new Modal.Title("Modal Title", header);
    new Modal.BtnClose(header);
    const body = new Modal.Body(content);
    new P("Modal body text goes here", body);
    const footer = new Modal.Footer(content);
    const closeBtn = new BtnSecondary("Close", footer);
    closeBtn.onClick = () => {
      this.hide();
    }
  }
}

const viewModal1 = () => {
  const dialog = new Modal.Dialog();
  const content = new Modal.Content(dialog);
  const header = new Modal.Header(content);
  new Modal.Title("Modal Title", header);
  new Modal.BtnClose(header);
  const body = new Modal.Body(content);
  new P("Modal body text goes here", body);
  const footer = new Modal.Footer(content);
  new BtnSecondary("Close", footer);
  return dialog;
};

const modal1Source = `
import {
  P
} from "@step-js-core/index";
import {
  BtnSecondary,
  Modal
} from "@step-js-bootstrap-widgets/index";

class Modal1 extends Modal {

  constructor(...params: any) {
    super(params);
    this.addClassNames("inline-block m-8");
  }

  mount() {
    const dialog = new Modal.Dialog(this);
    const content = new Modal.Content(dialog);
    const header = new Modal.Header(content);
    new Modal.Title("Modal Title", header);
    new Modal.BtnClose(header);
    const body = new Modal.Body(content);
    new P("Modal body text goes here", body);
    const footer = new Modal.Footer(content);
    const closeBtn = new BtnSecondary("Close", footer);
    closeBtn.onClick = () => {
      this.hide();
    }
  }
}
`;

export {
  Modal1,
  viewModal1,
  modal1Source
}
