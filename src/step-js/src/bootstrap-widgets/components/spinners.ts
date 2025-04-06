import {
  Widget,
  SPAN,
} from "@step-js-core/index";

class SpinnerBorder extends Widget {

  constructor(...params: any) {
    super("div", ...params);
    this.addClassNames("spinner-border -step-js-select-none");
  }

  mount() {
    new SPAN(this, "Loading...", "visually-hidden");
  }
}

export {
  SpinnerBorder
};
