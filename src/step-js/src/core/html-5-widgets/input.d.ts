import Widget from "../device/widget";
declare class INPUT extends Widget {
    constructor(type: "text" | "password" | "checkbox" | "email", ...params: any);
    getValue(): any;
    setValue(value: string): void;
}
export default INPUT;
