import {
  React
} from "@step-js-core/index";
import {
  RoundButton
} from "./buttons";

class CloseRoundButton extends RoundButton {

  constructor(props) {
    super(props);
    this.style.padding = "0.5rem";
    this.size = "2.5rem";
    this.props.borderColor = "transparent";
    this.props.backgroundColor = "#85888F";
    this.svg = closeSVG("#85888F");
  }
}

// closeSVG

const closeSVG = (stroke) => {
  return (
    <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M233.333 233.335L566.667 566.67M233.333 566.67L566.667 233.335" stroke={stroke} strokeWidth="83.3333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

export default CloseRoundButton;
