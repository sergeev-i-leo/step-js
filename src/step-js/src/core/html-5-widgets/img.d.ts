import Widget from "../device/widget";
declare class IMG extends Widget {
    constructor(src: string, ...params: any);
    setSrc(src: string): void;
    setAlt(alt: string): void;
}
export default IMG;
