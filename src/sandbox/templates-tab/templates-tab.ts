import {
  DIV
} from "@step-js-core/index";

class TemplatesTab extends DIV {

  constructor() {
    super("h-100");
  }

  mount() {
    this.setInnerHTML("templates-tab");
  }
}

export default TemplatesTab;
