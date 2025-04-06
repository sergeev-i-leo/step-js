import Widget from "../device/widget";
import TD from "./td";
declare class TR extends Widget {
    constructor(...params: any);
    appendTD(): TD;
}
export default TR;
