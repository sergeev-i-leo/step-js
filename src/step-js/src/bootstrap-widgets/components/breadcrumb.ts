import {
  LI,
  OL, VirtualElement
} from "@step-js-core/index";

class Breadcrumb extends OL {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("breadcrumb");
  }

  createVirtualElement() {
    const virtualElement = super.createVirtualElement();
    this.virtualElement = new VirtualElement(null, "nav");
    this.virtualElement.props["aria-label"] = "breadcrumb";
    this.virtualElement.append(virtualElement);
    return this.virtualElement;
  }

}

namespace Breadcrumb {

  export class Item extends LI {

    constructor(...params: any) {
      super(...params);
      this.addClassNames("breadcrumb-item");
    }

    setActive() {
      this.addClassNames("active");
    }
  }
}

export default Breadcrumb;
