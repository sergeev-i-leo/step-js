import {
  React
} from "@step-js-core/index";
import {
  PrimaryButton,
  SecondaryButton
} from "./components/buttons";
import CloseRoundButton from "./components/close-round-button";
import CheckBoxes from "./components/check-boxes";

class Modal4 extends React.Component {
  title: string;
  grayDescription: string;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.grayDescription = props.grayDescription;
  }

  componentWillMount() {
    this.setState({
      checkBoxes: checkBoxes
    });
  }

  render() {
    return (
      <div
        className="modal-dialog bg-dark-subtle rounded"
        style={{
          width: "300px"
        }}
      >
        <div
          className="modal-content"
        >
          <div
            className="d-flex justify-content-end m-1"
          >
            <CloseRoundButton
              onClick={() => {
                if (this.props.onCancel) {
                  this.props.onCancel();
                }}
              }
            />
          </div>
          <div
            className="modal-header"
            style={{
              borderBottom: "none"
            }}
          >
            <div
              className="modal-title w-100 px-4"
            >
              <h5
                className="text-center"
              >
                {this.title}
              </h5>
            </div>
          </div>
          <div
            className="modal-body px-4"
          >
            <p
              className="text-center text-muted"
            >
              {this.grayDescription}
            </p>
            <CheckBoxes
              className="pt-2"
              checkBoxes={this.state.checkBoxes}
              onClick={(checkBoxIndex) => this.onClick(checkBoxIndex)}
            />
          </div>
          <div
            className="modal-footer pb-4 px-4 flex flex-column align-items-stretch"
            style={{
              borderTop: "none"
            }}
          >
            <PrimaryButton
              text="OK"
              onClick={() => {
                if (this.props.onOK) {
                  this.props.onOK();
                }
              }}
            />
            <SecondaryButton
              className="mt-3"
              text="Cancel"
              onClick={() => {
                if (this.props.onCancel) {
                  this.props.onCancel();
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  onClick(checkBoxIndex) {
    console.log("clicked", checkBoxIndex);
    const state = {...this.state};
    state.checkBoxes[checkBoxIndex].checked = !state.checkBoxes[checkBoxIndex].checked;
    this.setState(state);
  }
}

const checkBoxes = [
  {
    checked: true,
    text: "I read the documentation",
    disabled: false
  },
  {
    checked: false,
    text: "I read the documentation",
    disabled: false
  },
];

export default Modal4;
