import {
  DIV,
  H2,
  P
} from "@step-js-core/index";
import {
  YScrollablePanel,
} from "@step-js-widgets/index";
import {
  Accordion,
  ContainerMD,
} from "@step-js-bootstrap-widgets/index";

class Accordion1Div extends YScrollablePanel {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 position-relative");
  }

  mount() {
    let containerMD = new ContainerMD("pt-5", this);
    let div = new DIV("d-flex justify-content-center text-center", containerMD);
    new H2("Frequently Asked Questions", "pb-3 display-6", div);
    let accordion = new Accordion(containerMD);
    accordion.append(this.mountAccordionItem(0));
    accordion.append(this.mountAccordionItem(1));
    accordion.append(this.mountAccordionItem(2));
    accordion.append(this.mountAccordionItem(3));
    accordion.append(this.mountAccordionItem(4));
    accordion.append(this.mountAccordionItem(5));
  }

  mountAccordionItem(index: number) {
    let item = new Accordion.Item();
    let header = new Accordion.Header(item);
    let button = new Accordion.Button(`Question ${index + 1}`, header);
    let body = new Accordion.Body(item);
    body.append(new P("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."));
    return item;
  }
}

const accordion1Source = `
import {
  DIV,
  H2,
  P
} from "@step-js-core/index";
import {
  YScrollablePanel,
} from "@step-js-widgets/index";
import {
  Accordion,
  ContainerMD,
} from "@step-js-bootstrap-widgets/index";

class Accordion1Div extends YScrollablePanel {

  constructor(...params: any) {
    super(...params);
    this.addClassNames("h-100 position-relative");
  }

  mount() {
    let containerMD = new ContainerMD("pt-5", this);
    let div = new DIV("d-flex justify-content-center text-center", containerMD);
    new H2("Frequently Asked Questions", "pb-3 display-6", div);
    let accordion = new Accordion(containerMD);
    accordion.append(this.mountAccordionItem(0));
    accordion.append(this.mountAccordionItem(1));
    accordion.append(this.mountAccordionItem(2));
    accordion.append(this.mountAccordionItem(3));
    accordion.append(this.mountAccordionItem(4));
    accordion.append(this.mountAccordionItem(5));
  }

  mountAccordionItem(index: number) {
    let item = new Accordion.Item();
    let header = new Accordion.Header(item);
    let button = new Accordion.Button('Question index + 1', header);
    let body = new Accordion.Body(item);
    body.append(new P("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."));
    return item;
  }
}
`;

export {
  Accordion1Div,
  accordion1Source
};
