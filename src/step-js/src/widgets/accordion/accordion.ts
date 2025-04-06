import {
  DIV
} from "@step-js-core/index";
import "./accordion.scss";

class Accordion extends DIV {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("step-js-accordion");
  }

}

namespace Accordion {

  export class Item extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("step-js-accordion-item");
    }

  }

  export class ItemTitle extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("step-js-accordion-item-title");
    }
  }

  export class ItemContents extends DIV {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("step-js-accordion-item-contents");
    }
  }
}

export default Accordion;
