import "./style-rule-animations.css";
interface StyleRuleAnimation {
    styleRule: string;
    from: any;
    to: any;
    duration: number;
    onComplete?: Function;
}
declare class StyleRuleAnimations {
    static animationDescriptors: AnimationDescriptor[];
    static fire(htmlElement: HTMLElement, styleRuleAnimation: StyleRuleAnimation): void;
}
declare class AnimationDescriptor {
    htmlElement: HTMLElement;
    styleRule: string;
    from: any;
    to: any;
    $value: any;
    duration: number;
    onComplete?: Function;
    startedTime: number;
    constructor(htmlElement: HTMLElement, styleRule: string, from: any, to: any, duration: number, onComplete?: Function);
    setCurrentStyleRuleValue(currentTime: number): boolean | undefined;
    setStyleRuleValue(): void;
}
export default StyleRuleAnimations;
