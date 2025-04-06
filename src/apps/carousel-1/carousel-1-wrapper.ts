import {
  YScrollablePanel
} from "@step-js-widgets/index";
import {
  Carousel1
} from "./carousel-1";

class Carousel1Wrapper extends YScrollablePanel {

  constructor() {
    super("h-100");
  }

  mount() {
    this.append(new Carousel1());
  }
}

export default Carousel1Wrapper;
