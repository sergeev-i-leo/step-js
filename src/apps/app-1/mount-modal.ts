import {
  DIV
} from "@step-js-core/index";
import {
  BtnPrimary,
  Modal
} from "@step-js-bootstrap-widgets/index";

const mountModal = (buttonText: string, parentDIV: DIV) => {
  let btnPrimary = new BtnPrimary(buttonText, parentDIV);
  let modal = new Modal(parentDIV);
  modal.setStyleRule("font-family", "Andika, sans-serif");
  let dialog = new Modal.Dialog(modal);
  let content = new Modal.Content(dialog);

  let header = new Modal.Header(content);
  new Modal.Title("Social Media Marketing", header);
  new Modal.BtnClose(header);

  let body = new Modal.Body(content);
  let div = new DIV(body);
  div.setInnerHTML("Created using <span style='color:var(--bs-orange);font-weight:700;'>BOOTSTRAP</span> elements");

  let footer = new Modal.Footer(content);
  new Modal.BtnDismiss("Close", footer);

  btnPrimary.onClick = () => {
    modal.show();
  };
};

export default mountModal;
