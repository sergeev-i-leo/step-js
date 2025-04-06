import VirtualElement from "./virtual-element";
import { Model } from "../model/model";
declare class Component {
    readonly key: string;
    props: any;
    protected attributes?: Object;
    protected dataAttributes?: Object;
    state: any;
    observedKeys: ObservedKey[];
    refs: any;
    context: any;
    virtualElement: VirtualElement | null;
    constructor(props?: any);
    getKeyPrefix(): string;
    callComponentWillMount(): void;
    componentWillMount(): void;
    destroy(): void;
    setAttribute(name: string, value?: string): void;
    getAttributeValue(name: string): any;
    setDataAttribute(name: string, value: string): void;
    getDataAttributeValue(name: string): any;
    getState(): any;
    cloneState(): any;
    setState(state: any): void;
    createVirtualElement(): VirtualElement | null;
    attachToDOM(): void;
    render(): any;
    callComponentDidMount(): void;
    mountObservedShelves(): void;
    componentDidMount(): void;
    getHTMLElement(): HTMLElement | undefined;
    onObservedModelPathChanged(path: string): void;
    forceUpdate(): void;
    static smudgeVirtualElement: Function;
    callComponentWillUnmount(): void;
    unmountObservedShelves(): void;
    componentWillUnmount(): void;
    detachFromDOM(): void;
}
declare class ObservedKey {
    model: Model;
    key: string;
    constructor(model: Model, key: string);
}
export default Component;
