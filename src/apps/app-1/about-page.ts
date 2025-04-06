import {
  DIV,
  P,
  I,
  H2
} from "@step-js-core/index";
import {
  YScrollablePanel,
} from "@step-js-widgets/index";
import {
  ContainerFluid,
  Row,
} from "@step-js-bootstrap-widgets/index";
import mountModal from "./mount-modal";

class AboutPage extends YScrollablePanel {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 position-relative");
  }

  mount() {
    let containerFluid = new ContainerFluid("pt-5", this);
    let row = new Row("text-center", containerFluid);

    let div = new DIV("col-lg-3 col-sm-6", row);
    new I("fa fa-user fa-3x", div);
    new H2("17.500", "pt-3 display-6", div);
    new P("Active Users", "text-muted", div);

    div = new DIV("col-lg-3 col-sm-6", row);
    new I("fa fa-brands fa-windows fa-3x", div);
    new H2("1.000", "pt-3 display-6", div);
    new P("Total Companies", "text-muted", div);

    div = new DIV("col-lg-3 col-sm-6", row);
    new I("fa fa-brands fa-wordpress fa-3x", div);
    new H2("3.500", "pt-3 display-6", div);
    new P("Campaign Posted", "text-muted", div);

    div = new DIV("col-lg-3 col-sm-6", row);
    new I("fa fa-brands fa-github fa-3x", div);
    new H2("13.000", "pt-3 display-6", div);
    new P("Downloads Number", "text-muted", div);

    containerFluid = new ContainerFluid("pt-5", this);
    row = new Row("text-center", containerFluid);
    div = new DIV("col-lg-12 col-md-12 text-center", row);
    new P("2022 SMM Market Leader", div);
    new H2("Take a Website Tour to Next Level", div);
    div = new DIV("mt-5", div);
    mountModal("Take a Tour", div);
  }
}

export default AboutPage;
