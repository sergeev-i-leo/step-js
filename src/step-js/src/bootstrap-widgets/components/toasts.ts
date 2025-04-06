import {
  Browser,
  Utils,
  DIV
} from "@step-js-core/index";

// ToastContainer

class ToastContainer extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("toast-container -step-js-select-none");
  }

  show() {
    /*Browser.mount(this);
    Utils.wait(3000).then(() => {
      this.hide();
    });*/
  }

  hide() {
    //Browser.unmount(this);
  }
}

// Toast

class Toast extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("toast show");
  }
}

namespace Toast {

// ToastHeader

  export class ToastHeader extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("toast-header");
    }
  }

  // ToastBody

  export class ToastBody extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("toast-body");
    }
  }
}

export {
  ToastContainer,
  Toast,
}
