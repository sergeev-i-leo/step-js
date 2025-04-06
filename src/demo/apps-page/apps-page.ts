import {
  Utils,
  Router,
  DIV,
  A,
  P,
  H3
} from "@step-js-core/index";
import {
  YScrollablePanel
} from "@step-js-widgets/index";
import App1 from "../../apps/app-1/app-1";
import ScrollablePanel2 from "../../apps/scrollable-panel-2/scrollable-panel-2";
import {Carousel1} from "../../apps/carousel-1/carousel-1";
import {Carousel9DIV} from "../../apps/carousel-9/carousel-9";
import {Breadcrumb} from "@step-js-bootstrap-widgets/index";

class AppsPage extends DIV {

  constructor() {
    super("h-100 bg-body");
  }

  mount() {
    const parsedUrl = new Utils.ParsedURL(window.location);
    if (parsedUrl.pathname.indexOf("/apps/app-1") === 0) {

      // app-1

      let div0 = new DIV("h-100 d-flex flex-column align-items-stretch", this);
      let div1 = new DIV("p-2 flex-grow-0", div0);
      const breadcrumb = new Breadcrumb(div1);
      let item = new Breadcrumb.Item(breadcrumb);
      const a = new A("/apps", "Приложения", item);
      a.onClick = (event: any) => Router.navigateTo(event, "/apps");

      item = new Breadcrumb.Item(breadcrumb);
      item.setActive();
      item.setInnerText("Простое приложение");

      div1 = new DIV("flex-grow-1", div0);
      div1.append(new App1("/"));

      return;
    } else if (parsedUrl.pathname.indexOf("/apps/scrollable-panel-2") === 0) {

      // scrollable-panel-2

      let div0 = new DIV("h-100 d-flex flex-column align-items-stretch", this);
      let div1 = new DIV("p-2 flex-grow-0", div0);
      const breadcrumb = new Breadcrumb(div1);
      let item = new Breadcrumb.Item(breadcrumb);
      const a = new A("/apps", "Приложения", item);
      a.onClick = (event: any) => Router.navigateTo(event, "/apps");

      item = new Breadcrumb.Item(breadcrumb);
      item.setActive();
      item.setInnerText("Скроллируемая панель");

      div1 = new DIV("flex-grow-1", div0);
      div1.append(new ScrollablePanel2());
      return;
    } else if (parsedUrl.pathname.indexOf("/apps/carousel-1") === 0) {

      // carousel-1

      let div0 = new DIV("h-100 d-flex flex-column align-items-stretch", this);
      let div1 = new DIV("p-2 flex-grow-0", div0);
      const breadcrumb = new Breadcrumb(div1);
      let item = new Breadcrumb.Item(breadcrumb);
      const a = new A("/apps", "Приложения", item);
      a.onClick = (event: any) => Router.navigateTo(event, "/apps");

      item = new Breadcrumb.Item(breadcrumb);
      item.setActive();
      item.setInnerText("Карусель Bootstrap");

      div1 = new DIV("flex-grow-1", div0);
      div1.append(new Carousel1());
      return;
    } else if (parsedUrl.pathname.indexOf("/apps/carousel-9") === 0) {

      // carousel-9

      let div0 = new DIV("h-100 d-flex flex-column align-items-stretch", this);
      let div1 = new DIV("p-2 flex-grow-0", div0);
      const breadcrumb = new Breadcrumb(div1);
      let item = new Breadcrumb.Item(breadcrumb);
      const a = new A("/apps", "Приложения", item);
      a.onClick = (event: any) => Router.navigateTo(event, "/apps");

      item = new Breadcrumb.Item(breadcrumb);
      item.setActive();
      item.setInnerText("Карусель с анимацией");

      div1 = new DIV("flex-grow-1", div0);
      const scrollablePanel = new YScrollablePanel("h-100", div1);
      scrollablePanel.append(new Carousel9DIV());
      return;
    }

    let scrollablePanel = new YScrollablePanel("h-100");
    this.append(scrollablePanel);

    let div = new DIV(scrollablePanel).setStyle({
      width: "320px",
      margin: "1rem auto"
    });
    div.append(new H3("Простое приложение", "py-3 pt-5 px-1"));
    div.append(new P("Четырёхстраничное приложение на компонентах Bootstrap со стандарным навигационным баром", "px-1"));
    let a = new A("/apps/app-1", "/apps/app-1", div);
    a.onClick = (event: any) => Router.navigateTo(event, "/apps/app-1");

    div = new DIV(scrollablePanel).setStyle({
      width: "320px",
      margin: "1rem auto"
    });
    div.append(new H3("Скроллируемая панель", "py-3 pt-5 px-1"));
    div.append(new P("Скроллируемая панель с анимацией", "px-1"));
    a = new A("/scrollable-panel-1", "/scrollable-panel-1", div);
    a.onClick = (event: any) => Router.navigateTo(event, "/apps/scrollable-panel-2");

    div = new DIV(scrollablePanel).setStyle({
      width: "320px",
      margin: "1rem auto"
    });
    div.append(new H3("Карусель", "py-3 pt-5 px-1"));
    div.append(new P("Карусель Bootstrap", "px-1"));
    a = new A("/carousel-1", "/carousel-1", div);
    a.onClick = (event: any) => Router.navigateTo(event, "/apps/carousel-1");
    div.append(new P("Карусель с анимацией", "pt-3 px-1"));
    a = new A("/carousel-2", "/carousel-2", div);
    a.onClick = (event: any) => Router.navigateTo(event, "/apps/carousel-9");
  }
}

export default AppsPage;
