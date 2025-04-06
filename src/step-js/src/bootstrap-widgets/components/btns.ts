import {
  BUTTON
} from "@step-js-core/index";

class Btn extends BUTTON {

  constructor(type: "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link", ...params: any) {
    super(...params);
    this.addClassNames(`btn btn-${type} -step-js-select-none`);
  }
}

// BtnPrimary

class BtnPrimary extends Btn {

  constructor(...params: any) {
    super("primary", ...params);
  }
}

// BtnSecondary

class BtnSecondary extends Btn {

  constructor(...params: any) {
    super("secondary", ...params);
  }
}

// BtnSuccess

class BtnSuccess extends Btn {

  constructor(...params: any) {
    super("success", ...params);
  }
}

// BtnDanger

class BtnDanger extends Btn {

  constructor(...params: any) {
    super("danger", ...params);
  }
}

// BtnWarning

class BtnWarning extends Btn {

  constructor(...params: any) {
    super("warning", ...params);
  }
}

// BtnInfo

class BtnInfo extends Btn {

  constructor(...params: any) {
    super("info", ...params);
  }
}

// BtnLight

class BtnLight extends Btn {

  constructor(...params: any) {
    super("light", ...params);
  }
}

// BtnDark

class BtnDark extends Btn {

  constructor(text: string, ...params: any) {
    super("dark", text, ...params);
  }
}

// BtnLink

class BtnLink extends Btn {

  constructor(...params: any) {
    super("link", ...params);
  }
}

export {
  Btn,
  BtnPrimary,
  BtnSecondary,
  BtnSuccess,
  BtnDanger,
  BtnWarning,
  BtnInfo,
  BtnLight,
  BtnDark,
  BtnLink,
};
