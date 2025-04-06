import Browser from "./device/browser";
import Component from "./device/component";
import Ref from "./device/ref";
declare const React: {
    createElement: typeof Browser.createVirtualElement;
    Component: typeof Component;
    createRef: () => Ref;
};
export default React;
