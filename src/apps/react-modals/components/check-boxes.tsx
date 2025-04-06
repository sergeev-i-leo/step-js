import {
  React
} from "@step-js-core/index";
import ActiveComponent from "./active-component";
import "./controls.css";

// CheckBoxes

class CheckBoxes extends React.Component {
  className: string;
  checkBoxes: any;

  constructor(props) {
    super(props);
    this.className = props.className;
    this.checkBoxes = props.checkBoxes;
    if (!this.checkBoxes) {
      this.checkBoxes = [];
    }
  }

  render() {
    return (
      <div
        className={this.className ? this.className : ""}
      >
        {this.checkBoxes.map((checkBox, i) => {
          return (
            <CheckBox
              key={i}
              checkBox={checkBox}
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

// CheckBox

class CheckBox extends React.Component {
  checkBox;
  onClick;

  constructor(props) {
    super(props);
    this.checkBox = props.checkBox;
  }

  render() {
    return (
      <div
        className="custom-check-box"
      >
        <div
          style={{
            width: "24px",
            height: "24px",
          }}
        >
          {this.checkBox.checked &&
            <CheckedBox />
          }
          {!this.checkBox.checked &&
            <UncheckedBox />
          }
        </div>
        <span
          className="custom-check-box-text"
        >
          {this.checkBox.text}
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

const CheckedBox = () => {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3.5" width="17" height="17" rx="2.5" stroke="#2B4BF2" strokeWidth="3"/>
      <rect x="7.5" y="7" width="10" height="10" fill="#2B4BF2"/>
    </svg>
  )
};

const UncheckedBox = () => {
  return (
    <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="3.5" width="17" height="17" rx="2.5" stroke="#566789" strokeOpacity="0.26" strokeWidth="3"/>
    </svg>
  )
};

export default CheckBoxes;
