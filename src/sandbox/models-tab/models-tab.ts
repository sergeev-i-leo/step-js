import {
  DIV
} from "@step-js-core/index";

class ModelsTab extends DIV {

  constructor() {
    super("h-100");
  }

  mount() {
    this.setInnerHTML("models-tab");
  }
}

export default ModelsTab;
