import {
  DIV,
  H3,
  IMG,
  SPAN
} from "@step-js-core/index";
import {
  YScrollablePanel
} from "@step-js-widgets/scrollable-panel/scrollable-panel";
import {
  ContainerFluid
} from "@step-js-bootstrap-widgets/index";
import ThemesSwitchTSX from "../../apps/theme-switches/themes-switch-tsx";
import {
  Carousel9DIV
} from "../../apps/carousel-9/carousel-9";

class HomePage extends YScrollablePanel {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 bg-body");
  }

  mount() {
    let containerFluid = new ContainerFluid(this);
    let div = new DIV("py-5", containerFluid);
    let img = new IMG(require("~images/step-js-2.svg"), div);
    img.setStyle({
      width: "50%",
      margin: "0 auto"
    });
    div = new DIV("py-3 text-center", containerFluid);
    let themesSwitchTSX = new ThemesSwitchTSX();
    div.append(themesSwitchTSX);
    containerFluid = new ContainerFluid("py-5 text-center", this);
    new SPAN("Current version: 1.0.1", containerFluid);
    new H3("Снижение стоимости веб-разработки за счёт", "pt-5", containerFluid);
    new H3("простоты фреймворка и низкого порога вхождения", containerFluid).setStyleRule("color", "var(--bs-orange)");
    this.append(new Carousel9DIV());
  }
}

export default HomePage;
