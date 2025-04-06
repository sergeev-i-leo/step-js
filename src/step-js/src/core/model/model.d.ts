import Component from "../device/component";
declare class Model {
    readonly key: string;
    protected state: any;
    modelObserverDescriptors: ModelObserverDescriptor[];
    constructor();
    startObservingKeys(component: Component, keys: string[]): Component;
    stopObservingKey(component: Component, key: string): void;
    removeObserver(component: Component): void;
    getState(): any;
    cloneState(): any;
    updateKeys(affectedKeys: string[]): void;
    setState(state: any, affectedKeys?: string[]): void;
    forceUpdate(): void;
}
declare class ModelObserverDescriptor {
    component: Component | null;
    key: string;
    needsUpdate: boolean;
    constructor(component: Component, key: string);
}
declare class Models {
    static registeredModels: Model[];
    static registerModel(model: Model): void;
}
export { Model, ModelObserverDescriptor, Models };
