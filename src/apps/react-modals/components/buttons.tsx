import {
  React
} from "@step-js-core/index";
import ActiveComponent from "./active-component";
import "./controls.css";

// Button

class Button extends React.Component {
  className: string;
  style: any;
  activeOffset: string;
  activeBorderRadius: string;
  activeBackgroundColor: string;
  activeBackgroundOpacity0: number;
  activeBackgroundOpacity1: number;
  text: string;

  constructor(props) {
    super(props);
    this.className = props.className;
    this.style = this.props.style || {};
    if (this.style.position === "relative") {
    } else if (this.style.position === "absolute") {
    } else if (this.style.position === "fixed") {
    } else {
      this.style.position = "relative";
    }
    this.style.borderRadius = "4px";
    this.activeOffset = props.activeOffset;
    this.activeBorderRadius = props.activeBorderRadius;
    this.activeBackgroundColor = props.activeBackgroundColor;
    this.activeBackgroundOpacity0 = props.activeBackgroundOpacity0;
    this.activeBackgroundOpacity1 = props.activeBackgroundOpacity1;
    this.text = props.text;
  }

  render() {
    return (
      <button
        className={this.className ? this.className + " custom-button" : "custom-button"}
        style={this.style}
      >
        {this.text}
        <ActiveComponent
          activeOffset={this.activeOffset}
          activeBorderRadius={this.activeBorderRadius}
          activeBackgroundColor={this.activeBackgroundColor}
          backgroundColor={this.props.backgroundColor}
          activeBackgroundOpacity0={this.activeBackgroundOpacity0}
          activeBackgroundOpacity1={this.activeBackgroundOpacity1}
          onAnimationComplete={this.props.onClick}
        />
      </button>
    )
  }
}

// PrimaryButton

class PrimaryButton extends Button {

  constructor(props) {
    super(props);
    this.activeBorderRadius = "4px";
    this.activeBackgroundColor = "rgba(0, 0, 0, 0.5)";
    this.style.backgroundColor = "#2B4BF2";
    this.style.color = "white";
    this.style.fontWeight = 700;
  }
}

// SecondaryButton

class SecondaryButton extends Button {

  constructor(props) {
    super(props);
    this.activeBorderRadius = "4px";
    this.style.backgroundColor = "#CCD2E0";
    this.style.color = "#212325";
    this.style.fontWeight = 700;
  }
}

// RoundButton

class RoundButton extends React.Component {
  className;
  style;
  size;
  activeOffset;
  activeBorderRadius;
  activeBackgroundColor;
  activeBackgroundOpacity0;
  activeBackgroundOpacity1;
  svg;
  text;
  onClick;

  constructor(props) {
    super(props);
    this.className = props.className;
    this.style = props.style || {};
    if (this.style.position === "relative") {
    } else if (this.style.position === "absolute") {
    } else if (this.style.position === "fixed") {
    } else {
      this.style.position = "relative";
    }
    this.size = props.size;
    this.activeOffset = props.activeOffset;
    this.activeBorderRadius = "50%";
    this.activeBackgroundColor = props.activeBackgroundColor;
    this.activeBackgroundOpacity0 = props.activeBackgroundOpacity0;
    this.activeBackgroundOpacity1 = props.activeBackgroundOpacity1;
    this.svg = props.svg;
    this.text = props.text;
  }

  render() {
    const style = Object.assign({}, this.style);
    style.cursor = "pointer";
    style.display = "flex";
    style.justifyContent = "center";
    style.alignItems = "center";
    style.width = this.size ? this.size : "3rem";
    style.height = this.size ? this.size : "3rem";

    if (this.svg) {
      return (
        <div
          className={this.className ? this.className : ""}
          style={style}
        >
          {this.svg}
          <ActiveComponent
            activeOffset={this.activeOffset}
            activeBorderRadius={this.activeBorderRadius}
            activeBackgroundColor={this.activeBackgroundColor}
            backgroundColor={this.props.backgroundColor}
            activeBackgroundOpacity0={this.activeBackgroundOpacity0}
            activeBackgroundOpacity1={this.activeBackgroundOpacity1}
            onAnimationComplete={this.onClick}
          />
        </div>
      );
    }
    return (
      <div
        style={style}
      >
        {this.text}
        <ActiveComponent
          activeOffset={this.activeOffset}
          activeBorderRadius={this.activeBorderRadius}
          activeBackgroundColor={this.activeBackgroundColor}
          backgroundColor={this.props.backgroundColor}
          activeBackgroundOpacity0={this.activeBackgroundOpacity0}
          activeBackgroundOpacity1={this.activeBackgroundOpacity1}
          onAnimationComplete={this.onClick}
        />
      </div>
    );
  }
}

export {
  PrimaryButton,
  SecondaryButton,
  RoundButton
};
