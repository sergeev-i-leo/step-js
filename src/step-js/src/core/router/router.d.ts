import Widget from "../device/widget";
declare class Router extends Widget {
    static instance: Router;
    constructor(...params: any);
    static navigateTo(event: any, href: string): void;
    handleWindowLocationChange(): void;
    handleResizeEvent(event: any): void;
}
declare namespace Router {
    class Link extends Widget {
        constructor(href: string | undefined, ...params: any);
        setHREF(href: string): void;
        onClick: (event: any) => void;
    }
}
export default Router;
