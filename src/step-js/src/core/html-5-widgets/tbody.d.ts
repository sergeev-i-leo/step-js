import Widget from "../device/widget";
import TR from "./tr";
declare class TBODY extends Widget {
    constructor(...params: any);
    appendTR(): TR;
}
export default TBODY;
