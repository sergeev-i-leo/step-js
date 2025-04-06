declare class VirtualElement {
    constructedBy: any;
    tagName: string;
    key: string;
    props: any;
    innerHTML?: string;
    children?: VirtualElement[];
    parent: VirtualElement | null;
    dirty: boolean;
    constructor(constructedBy: any, tagName: string, props?: any);
    hasClassName(className: string): boolean;
    addClassName(className: string): void;
    removeClassName(className: string): void;
    getChildren(): VirtualElement[];
    append(child: VirtualElement): void;
    createHTMLString(): any;
    createStyleString(): string;
    createHTMLElement(): HTMLElement;
    attachToDOM(): void;
    getHTMLElement(): HTMLElement | undefined;
    detachFromDOM(): void;
}
export default VirtualElement;
