import {
  DIV
} from "@step-js-core/index";
import ThemesSwitchTS from "./themes-switch-ts";
import ThemesSwitchTSX from "./themes-switch-tsx";

class ThemeSwitches extends DIV {

  constructor() {
    super("h-100 d-flex flex-column");
  }

  mount() {
    let div = new DIV("flex-grow-1 d-flex justify-content-center align-items-center", this);
    let themesSwitchTSX = new ThemesSwitchTSX();
    div.append(themesSwitchTSX);

    div = new DIV("flex-grow-1 d-flex justify-content-center align-items-center", this);
    new ThemesSwitchTS(div);
  }

}

export default ThemeSwitches;
