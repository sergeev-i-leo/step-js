import {
  React
} from "@step-js-core/index";
import ActiveComponent from "./active-component";
import "./controls.css";

// RadioButtons

class RadioButtons extends React.Component {
  className: string;
  radioButtons: any;

  constructor(props) {
    super(props);
    this.className = props.className;
    this.radioButtons = props.radioButtons;
    if (!this.radioButtons) {
      this.radioButtons = [];
    }
    let i0;
    for (let i1 = 0; i1 < this.radioButtons.length; i1++) {
      if (!this.radioButtons[i1].checked) {
        return;
      }
      if (i0 === undefined) {
        i0 = i1;
      } else {
        this.radioButtons[i1].checked = false;
      }
    }
  }

  render() {
    return (
      <div
        className={this.className ? this.className : ""}
      >
        {this.radioButtons.map((radioButton, i) => {
          return (
            <RadioButton
              key={i}
              radioButton={radioButton}
              onClick={() => {
                if (this.props.onClick) {
                  this.props.onClick(i);
                }
              }}
            />
          );
        })}
      </div>
    )
  }
}

// RadioButton

class RadioButton extends React.Component {
  radioButton;
  onClick;

  constructor(props) {
    super(props);
    this.radioButton = props.radioButton;
  }

  render() {
    return (
      <div
        className="custom-radio-button"
      >
        <div
          style={{
            width: "24px",
            height: "24px",
          }}
        >
          {this.radioButton.checked &&
            <CheckedButton />
          }
          {!this.radioButton.checked &&
            <UncheckedButton />
          }
        </div>
        <span
          className="custom-radio-button-text"
        >
          {this.radioButton.text}
        </span>
        <ActiveComponent
          activeOffset="-2px"
          borderColor="transparent"
          onAnimationComplete={this.onClick}
        />
      </div>
    )
  }
}

const CheckedButton = () => {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3.5" width="17" height="17" rx="8.5" stroke="#2B4BF2" strokeWidth="3"/>
      <circle cx="12.5" cy="12" r="4" fill="#2B4BF2"/>
    </svg>
  )
};

const UncheckedButton = () => {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3.5" width="17" height="17" rx="8.5" stroke="#566789" strokeOpacity="0.26" strokeWidth="3"/>
    </svg>
  )
};

export default RadioButtons;
