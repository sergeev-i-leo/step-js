import {
  Model,
  Models
} from "@step-js-core/index";

class ThemeModel extends Model {
  theme: string;

  constructor() {
    super();
    this.theme = document.body.getAttribute("data-bs-theme") || "dark";
  }

  switchTheme() {
    if (this.theme === "light") {
      this.theme = "dark";
    } else {
      this.theme = "light";
    }
    document.body.setAttribute("data-bs-theme", this.theme);
    this.updateKeys([
      "theme"
    ]);
  }
}

const themeModel = new ThemeModel();

export {
  ThemeModel,
  themeModel
}
