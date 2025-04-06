import {
  React
} from "@step-js-core/index";
import StyleRuleAnimations from "./style-rule-animations";
import "./active-component.css";

class ActiveComponent extends React.Component {
  activeOffset: string;
  activeBorderRadius: string;
  activeBackgroundColor: string;
  activeBackgroundOpacity0: number;
  activeBackgroundOpacity1: number;
  onAnimationComplete: Function;
  ref: any;

  constructor(props) {
    super(props);
    this.activeOffset = props.activeOffset;
    this.activeBorderRadius = props.activeBorderRadius;
    this.activeBackgroundColor = props.activeBackgroundColor;
    this.activeBackgroundOpacity0 = props.activeBackgroundOpacity0;
    this.activeBackgroundOpacity1 = props.activeBackgroundOpacity1;
    this.onAnimationComplete = props.onAnimationComplete;
    this.ref = React.createRef();
  }

  render() {
    const activeOffset = this.activeOffset ? this.activeOffset : 0;
    const activeBorderRadius = this.activeBorderRadius ? this.activeBorderRadius : 0;
    const activeBackgroundColor = this.activeBackgroundColor ? this.activeBackgroundColor : "rgba(0, 0, 0, 0.15)";
    const activeBackgroundOpacity0 = this.activeBackgroundOpacity0 ? this.activeBackgroundOpacity0 : 0;

    return (
      <div
        style={{
          position: "absolute",
          left: activeOffset,
          top: activeOffset,
          right: activeOffset,
          bottom: activeOffset,
          borderRadius: activeBorderRadius,
          backgroundColor: activeBackgroundColor,
          opacity: activeBackgroundOpacity0
        }}
        ref={this.ref}
        onClick={() => this.onClick()}
      />
    )
  }

  onClick() {
    const activeBackgroundOpacity0 = this.activeBackgroundOpacity0 ? this.activeBackgroundOpacity0 : 0;
    const activeBackgroundOpacity1 = this.activeBackgroundOpacity1 ? this.activeBackgroundOpacity1 : 0.5;

    let htmlElement = this.ref.current;
    while (htmlElement) {
      if (htmlElement.classList.contains("active-component")) {
        break;
      }
      htmlElement = htmlElement.parent;
    }
    if (htmlElement) {
      const disabled = htmlElement.getAttribute("disabled");
      if (disabled) {
        return;
      }
    }
    StyleRuleAnimations.fire(this.ref.current, {
      styleRule: "opacity",
      from: activeBackgroundOpacity1,
      to: activeBackgroundOpacity0,
      duration: 0.5,
      onComplete: () => {
        if (this.onAnimationComplete) {
          this.onAnimationComplete();
        }
      }
    });
    this.ref.current.style.opacity = activeBackgroundOpacity1;
  }
}

export default ActiveComponent;
