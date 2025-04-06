import Widget from "../device/widget";
import TBODY from "./tbody";
declare class TABLE extends Widget {
    constructor(...params: any);
    appendTBODY(): TBODY;
}
export default TABLE;
