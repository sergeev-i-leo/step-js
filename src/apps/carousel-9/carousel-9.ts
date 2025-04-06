import {
  BUTTON,
  DIV,
  H4,
  IMG,
  P,
  VirtualElement
} from "@step-js-core/index";
import {
  Carousel,
  ContainerFluid
} from "@step-js-bootstrap-widgets/index";
import "./carousel-9.scss";

const carousel9Model = [
  {
    dataPosition: "2",
    title: "Упрощённая вёрстка",
    paragraphs: [
      "Подходит как для опытных, так и для неопытных разаботчиков.",
      "Можно использовать jsx, можно собирать компоненты ui 'пошагово': так, как это делается в JavaFX, Swing, Ink и т.п.",
      "Это снижает 'уровень вхождения' и упрощает условную вёрстку."
    ]
  },
  {
    dataPosition: "3",
    title: "Архитектура Flux",
    paragraphs: [
      "Приложение поддерживает не одно, а много глобальных состояний.",
      "Пользовательский интерфейс можно 'нарезать' на самостоятельные 'куски', разрабатывать и тестировать их независимо друг от друга.",
      "Над приложением могут работать несколько разработчиков в собственных кодовых базах."
    ]
  },
  {
    dataPosition: "4",
    title: "Компоненты Bootstrap",
    paragraphs: [
      "Компоненты Bootstrap включены и работают 'из коробки'.",
      "Это позволяет быстро получать работающее приложение, и затем стилизовать его по корпоративным стандартам."
    ]
  },
  {
    dataPosition: "1",
    title: "Корпоративные библиотеки",
    paragraphs: [
      "На основе html-компонент можно разработать кастомизированную библиотеку в стандартах Компании.",
      "Такая библиотека даёт возможность разрабатывать приложения в едином корпоративных стиле с минимальными трудозатратами."
    ]
  },
  {
    dataPosition: "0",
    title: "Экономика Step JS",
    paragraphs: [
      "Снижение себестоимости веб-разработки за счёт упрощения и оптимизации процесса разработки, а  так же снижения требования к hard skills разработчиков.",
    ]
  }
];

class Carousel9DIV extends DIV {

  constructor() {
    super("bg-body");
    this.setAttribute("data-bs-theme", "dark");
  }

  mount() {
    const containerFluid = new ContainerFluid("carousel-9-div py-5 d-flex justify-content-center align-items-center step-js-select-none", this);
    let div = new DIV(containerFluid).setStyle({
      flexBasis: `{320 * carousel9Model.length}px`,
      flexShrink: 0,
    });
    const carousel9 = new Carousel9();
    div.append(carousel9);
  }
}

class Carousel9 extends Carousel {

  mount() {
    const inner = new Carousel.Inner(this);

    for (let i0 = 0; i0 < carousel9Model.length; i0++) {
      let item = new Carousel.Item(i0 === 0 ? "active" : "", inner);
      item.setAttribute("data-position", carousel9Model[i0].dataPosition);

      let div0 = new DIV(item).setStyle({
        height: "30rem",
      });

      div0 = new DIV("h-100 d-flex flex-column justify-content-start align-items-start", div0).setStyle({
        margin: "0 4px",
        padding: "0 1rem",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        borderRadius: "1rem"
      });

      let div1 = new DIV("my-3 w-100 d-flex justify-content-center align-items-center", div0);
      div1 = new DIV("d-flex justify-content-center align-items-center", div1).setStyle({
        width: "2rem",
        height: "2rem",
      });
      div1.append(new IMG(require("~images/check-mark.svg")).setStyleRule("width", "100%"));

      new H4(carousel9Model[i0].title, "py-3", div0);

      for (let i1 = 0; i1 < carousel9Model[i0].paragraphs.length; i1++) {
        new P(carousel9Model[i0].paragraphs[i1], div0);
      }
    }
    this.append(new Carousel.ControlPrev());
    this.append(new Carousel.ControlNext());

    const indicators = new Carousel.Indicators(this);
    for (let i0 = 0; i0 < carousel9Model.length; i0++) {
      new BUTTON(undefined, i0 === 0 ? "active" : "", indicators);
    }
  }

  performSliding(itemVirtualElements: VirtualElement[], activeItemIndex: number, targetItemIndex: number, direction: "left" | "right") {
    if (this.performingSliding) {
      return;
    }
    try {
      const activeHTMLElement = itemVirtualElements[activeItemIndex].getHTMLElement();
      const targetHTMLElement = itemVirtualElements[targetItemIndex].getHTMLElement();
      if (!activeHTMLElement) {
        return;
      }
      if (!targetHTMLElement) {
        return;
      }
      let activeDataPosition = activeHTMLElement.getAttribute("data-position");
      let targetDataPosition = targetHTMLElement.getAttribute("data-position");
      activeHTMLElement.setAttribute("data-position", targetDataPosition ? targetDataPosition : "0");
      targetHTMLElement.setAttribute("data-position", activeDataPosition ? activeDataPosition : "0");
      activeHTMLElement.classList.remove("active");
      targetHTMLElement.classList.add("active");
    } catch (error) {
      console.error(error);
    }
    this.shownTime = new Date().getTime();
    this.handleInterval(this.shownTime);
  }
}

const carousel9Source = `
`;

export {
  Carousel9DIV,
  carousel9Source
}
