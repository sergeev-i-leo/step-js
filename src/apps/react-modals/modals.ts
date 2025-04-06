import {
  DIV,
  SPAN
} from "@step-js-core/index";
import {
  BtnPrimary,
  Modal
} from "@step-js-bootstrap-widgets/index";
import {
  Modal1,
} from "./modal-1";
import {
  Modal2,
} from "./modal-2";
import Modal3 from "./modal-3";
import Modal4 from "./modal-4";
import Modal5 from "./modal-5";
import Modal6 from "./modal-6";
import Modal7 from "./modal-7";
import Modal8 from "./modal-8";

class Modals extends DIV {
  modalComponentId: number;

  constructor(modalComponentId: number, ...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex flex-column align-items-stretch");
    this.modalComponentId = modalComponentId;
  }

  mount() {
    let div = new DIV("flex-grow-1 modal d-block position-relative", this);
    div.append(this.mountModalComponent(this.modalComponentId));
    div.setStyleRule("font-family", 'Poppins, sans-serif');

    // footer
    div = new DIV("flex-grow-0 d-flex flex-row justify-content-between align-items-center p-2", this);
    div.setStyle({
      backgroundColor: "var(--bs-orange)"
    });
    let btnPrimary = new BtnPrimary("Run It !", div);
    btnPrimary.onClick = () => {
      let modal = new Modal();
      modal.setStyleRule("font-family", "Poppins, sans-serif");
      modal.append(this.mountModalComponent(this.modalComponentId));
      modal.show();
    };
    div.append(new SPAN("JSX React.Component", "text-white"));
  }

  mountModalComponent(modalComponentId: number) {
    switch (modalComponentId) {
      case 1:
        return new Modal1({
          title: "JSX Modal 1",
          grayDescription: "All team members will be able to read, write and share this file.",
          okButtonText: "OK",
          onCancel: () => {
            console.log("cancel");
          },
          onOK: () => {
            console.log("OK");
          }
        });
      case 2:
        return new Modal2({
          title: "JSX Modal 2",
          grayDescription: "The backups created with this functionality may contain some sensitive data.",
          cancelButtonText: "Cancel",
          onCancel: () => {},
          okButtonText: "Got It",
          onOK: () => {}
        });
      case 3:
        return new Modal3({
          title: "JSX Modal 3",
          grayDescription: "The archived files will be automatically deleted after 1 mounth. You will not be able to access to your file if they are deleted.",
          cancelButtonText: "Cancel",
          onCancel: () => {},
          okButtonText: "Archive",
          onOK: () => {}
        });
      case 4:
        return new Modal4({
          title: "JSX Modal 4",
          grayDescription: "The archived files will be automatically deleted after 1 mounth. You will not be able to access to your file if they are deleted.",
          cancelButtonText: "Cancel",
          onButtonText: "Archive",
          onCancel : () => {},
          onOK: () => {}
        });
      case 5:
        return new Modal5({
          title: "JSX Modal 5",
          blueDescription: "CURRENT PLAN: 100GB",
          grayDescription: "Add more space to your plan to securely store more files.",
          cancelButtonText: "Cancel",
          okButtonText: "Confirm",
          onCancel: () => {},
          onOK: () => {}
        });
      case 6:
        return new Modal6({
          title: "JSX Modal 6",
          blackDescription: "You have not the permission to read or modify this file.",
          grayDescription: "Ask the team owner for permissions.",
          cancelButtonText: "Cancel",
          onCancel: () => {},
          okButtonText: "Got It",
          onOK: () => {}
        });
      case 7:
        return new Modal7({
          title: "JSX Modal 7",
          blueDescription: "IMPORTANT",
          blackDescription: "The backups created with this functionality may contain some sensitive data.",
          grayDescription: "Keep in mind that people are able to view this data.",
          smallDescription: "We suggest to hide your data for your privacy.",
          cancelButtonText: "Cancel",
          okButtonText: "Got It",
          onCancel: () => {},
          onOK: () => {}
        });
      case 8:
        return new Modal8({
          title: "JSX Modal 8",
          grayDescription: "All team members will be able to read, write and share this file.",
          okButtonText: "Confirm",
          onOK: () => {
            console.log("OK");
          },
        });
    }
    return new DIV();
  }
}

export default Modals;
