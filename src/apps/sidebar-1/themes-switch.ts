import {
  DIV,
  LI,
  SPAN
} from "@step-js-core/index";
import {
  Dropdown
} from "@step-js-bootstrap-widgets/index";

class ThemesSwitch extends Dropdown {
  targetDIV: DIV;
  theme: string | null = null;
  autoDIV?: DIV;
  lightDIV?: DIV;
  darkDIV?: DIV;
  autoSPAN?: SPAN;
  lightSPAN?: SPAN;
  darkSPAN?: SPAN;

  constructor(targetDIV: DIV, ...params: any) {
    super(...params);
    this.targetDIV = targetDIV;
  }

  mount() {
    const dropdownToggle = new Dropdown.Toggle("button", undefined, "btn btn-primary d-flex align-items-center p-3 pe-4", this);
    this.autoDIV = new DIV("d-none", dropdownToggle);
    this.autoDIV.setStyle({
      height: "1em",
      width: "1em"
    });
    this.autoDIV.setInnerHTML(circleHalfSVG);

    this.lightDIV = new DIV("d-none", dropdownToggle);
    this.lightDIV.setStyle({
      height: "1em",
      width: "1em"
    });
    this.lightDIV.setInnerHTML(sunFillSVG);

    this.darkDIV = new DIV("d-none", dropdownToggle);
    this.darkDIV.setStyle({
      height: "1em",
      width: "1em"
    });
    this.darkDIV.setInnerHTML(moonStarsFillSVG);

    const dropdownMenu = new Dropdown.Menu("bg-body", this);
    dropdownMenu.setDataAttribute("bs-theme", "dark");

    // auto

    let li = new LI(dropdownMenu);
    let dropdownItem = new Dropdown.Item(undefined, undefined, "d-flex align-items-center", li);
    let span = new SPAN(undefined, "me-2", dropdownItem);
    span.setStyle({
      height: "1em",
      width: "1em"
    });
    span.setInnerHTML(circleHalfSVG);
    new SPAN("Auto", dropdownItem);
    this.autoSPAN = new SPAN(undefined, "ms-auto d-none", dropdownItem);
    this.autoSPAN.setStyle({
      height: "1em",
      width: "1em"
    });
    this.autoSPAN.setInnerHTML(checkSVG);

    dropdownItem.onClick = () => {
      this.hideMenu();
      this.setTheme("auto");
    };

    // light

    li = new LI(undefined, dropdownMenu);
    dropdownItem = new Dropdown.Item(undefined, undefined, "d-flex align-items-center", li);
    span = new SPAN(undefined, "me-2", dropdownItem);
    span.setStyle({
      height: "1em",
      width: "1em"
    });
    span.setInnerHTML(sunFillSVG);
    new SPAN("Light", dropdownItem);
    this.lightSPAN = new SPAN(undefined, "ms-auto d-none", dropdownItem);
    this.lightSPAN.setStyle({
      height: "1em",
      width: "1em"
    });
    this.lightSPAN.setInnerHTML(checkSVG);

    dropdownItem.onClick = () => {
      this.hideMenu();
      this.setTheme("light");
    };

    // dark

    li = new LI(undefined, dropdownMenu);
    dropdownItem = new Dropdown.Item(undefined, undefined, "d-flex align-items-center", li);
    span = new SPAN(undefined, "me-2", dropdownItem);
    span.setStyle({
      height: "1em",
      width: "1em"
    });
    span.setInnerHTML(moonStarsFillSVG);
    new SPAN("Dark", dropdownItem);
    this.darkSPAN = new SPAN(undefined, "ms-auto d-none", dropdownItem);
    this.darkSPAN.setStyle({
      height: "1em",
      width: "1em"
    });
    this.darkSPAN.setInnerHTML(checkSVG);

    dropdownItem.onClick = () => {
      this.hideMenu();
      this.setTheme("dark");
    };
  }

  componentDidMount() {
    this.theme = null;
    const htmlElement = this.targetDIV.getHTMLElement();
    if (htmlElement) {
      this.theme = htmlElement.getAttribute("data-bs-theme");
    }
    if (!this.theme) {
      this.theme = "auto";
    }
    this.updateByTheme()
  }

  setTheme(theme: string) {
    this.theme = theme;
    const htmlElement = this.targetDIV.getHTMLElement();
    if (htmlElement) {
      htmlElement.setAttribute("data-bs-theme", this.theme);
    }
    this.updateByTheme();
  }

  updateByTheme() {
    if (this.theme === "light") {
      this.autoDIV?.addClassNames("d-none");
      this.darkDIV?.addClassNames("d-none");
      this.lightDIV?.removeClassName("d-none");
      this.autoSPAN?.addClassNames("d-none");
      this.darkSPAN?.addClassNames("d-none");
      this.lightSPAN?.removeClassName("d-none");
    } else if (this.theme === "dark") {
      this.autoDIV?.addClassNames("d-none");
      this.lightDIV?.addClassNames("d-none");
      this.darkDIV?.removeClassName("d-none");
      this.autoSPAN?.addClassNames("d-none");
      this.lightSPAN?.addClassNames("d-none");
      this.darkSPAN?.removeClassName("d-none");
    } else {
      this.autoDIV?.removeClassName("d-none");
      this.lightDIV?.addClassNames("d-none");
      this.darkDIV?.addClassNames("d-none");
      this.autoSPAN?.removeClassName("d-none");
      this.lightSPAN?.addClassNames("d-none");
      this.darkSPAN?.addClassNames("d-none");
    }

  }
}

const circleHalfSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white">
    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
  </svg>
`;

const moonStarsFillSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white">
    <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
    <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
  </svg>
`;

const sunFillSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white">
    <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg>
`;

const checkSVG = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white" class="bi ms-auto">
    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
  </svg>
`;


export default ThemesSwitch;
