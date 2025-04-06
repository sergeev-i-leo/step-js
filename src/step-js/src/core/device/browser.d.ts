import VirtualElement from "./virtual-element";
declare class Browser {
    static mountedVirtualElements: VirtualElement[];
    static hasDirtyVirtualElements: boolean;
    static mount(object: any, parentHTMLElement: HTMLElement | null): void;
    static createVirtualElement(object: any, props?: any, ...children: any): any;
    static mountVirtualElement(parentHTMLElement: HTMLElement, virtualElement: VirtualElement): void;
    static passCalculateLayout(virtualElement: VirtualElement): void;
    static passAdjustLayout(virtualElement: VirtualElement): void;
    static passAttachVirtualElementToDOM(virtualElement: VirtualElement): void;
    static addEventListenersForVirtualElement(virtualElement: VirtualElement): void;
    static handleEvent(event: any): void;
    static handleTargetedEvent(event: any, handlerName: string): void;
    static setRef(virtualElement: VirtualElement | null): void;
    static passDidMount(virtualElement: VirtualElement): void;
    static smudgeVirtualElement(virtualElement: VirtualElement): void;
    static remountDirtyVirtualElements(): void;
    static unmountVirtualElement(virtualElement: VirtualElement, substitutionVirtualElement?: VirtualElement): void;
    static passWillUnmount(virtualElement: VirtualElement): void;
    static passDetachVirtualElementFromDOM(virtualElement: VirtualElement): void;
    static deleteHTMLElement(htmlElement: HTMLElement): void;
    static findVirtualElementByKey(key: string | null): VirtualElement | null;
}
export default Browser;
