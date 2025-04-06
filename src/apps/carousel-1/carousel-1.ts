import {
  BUTTON,
  DIV,
  H5,
  IMG
} from "@step-js-core/index";
import {
  Carousel,
  ContainerFluid
} from "@step-js-bootstrap-widgets/index";

class Carousel1 extends DIV {

  mount() {
    const containerFluid = new ContainerFluid("py-5 d-flex justify-content-center align-items-center", this);
    let div = new DIV(containerFluid).setStyle({
      width: "320px",
      overflow: "hidden"
    });
    const carousel = new Carousel("bg-body", div);
    carousel.setAttribute("data-bs-theme", "dark");

    const inner = new Carousel.Inner(carousel);

    let item = new Carousel.Item("active", inner);
    let caption = new Carousel.Caption(item);
    caption.append(new H5("City 1"));

    div = new DIV("d-block w-100 d-flex justify-content-center align-items-center", item).setStyle({
      height: "400px",
      backgroundColor: "rgba(255, 255, 255, 0.25)"
    });
    div.append(new IMG(require("~images/city-1.png")).setStyleRule("width", "50%"));

    item = new Carousel.Item(inner);
    caption = new Carousel.Caption(item);
    caption.append(new H5("City 2"));
    div = new DIV("d-block w-100 d-flex justify-content-center align-items-center", item).setStyle({
      height: "400px",
      backgroundColor: "rgba(255, 255, 255, 0.25)"
    });
    div.append(new IMG(require("~images/city-2.png")).setStyleRule("width", "50%"));

    item = new Carousel.Item(inner);
    caption = new Carousel.Caption(item);
    caption.append(new H5("City 3"));
    div = new DIV("d-block w-100 d-flex justify-content-center align-items-center", item).setStyle({
      height: "400px",
      backgroundColor: "rgba(255, 255, 255, 0.25)"
    });
    div.append(new IMG(require("~images/city-3.png")).setStyleRule("width", "50%"));

    carousel.append(new Carousel.ControlPrev());
    carousel.append(new Carousel.ControlNext());
    const indicators = new Carousel.Indicators(carousel);
    new BUTTON(undefined, "active", indicators);
    new BUTTON(undefined, indicators);
    new BUTTON(undefined, indicators);
  }

}

const carousel1Source = `
`;

export {
  Carousel1,
  carousel1Source
}
