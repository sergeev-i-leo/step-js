import {
  YScrollablePanel
} from "@step-js-widgets/index";
import {
  Carousel9DIV
} from "./carousel-9";

class Carousel9Wrapper extends YScrollablePanel {

  constructor() {
    super("h-100");
  }

  mount() {
    this.append(new Carousel9DIV());
  }
}

export default Carousel9Wrapper;
