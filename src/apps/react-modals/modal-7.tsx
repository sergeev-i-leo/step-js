import {
  React
} from "@step-js-core/index";
import {
  PrimaryButton,
  SecondaryButton
} from "./components/buttons";
import CloseRoundButton from "./components/close-round-button";

class Modal7 extends React.Component {
  title: string;
  blueDescription: string;
  blackDescription: string;
  grayDescription: string;
  smallDescription: string;
  cancelButtonText: string;
  okButtonText: string;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.blueDescription = props.blueDescription;
    this.blackDescription = props.blackDescription;
    this.grayDescription = props.grayDescription;
    this.smallDescription = props.smallDescription;
    this.cancelButtonText = props.cancelButtonText;
    this.okButtonText = props.okButtonText;
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
                }
              }}
            />
          </div>
          <div
            className="modal-header"
            style={{
              borderBottom: "none"
            }}
          >
            <div
              className="modal-title w-100 px-2"
            >
              <h5
                className="text-left"
              >
                {this.title}
              </h5>
            </div>
          </div>
          <div
            className="modal-body px-4"
          >
            <p
              className="text-left text-primary"
            >
              {this.blueDescription}
            </p>
            <p
              className="text-left"
            >
              {this.blackDescription}
            </p>
            <p
              className="text-left text-muted"
            >
              {this.grayDescription}
            </p>
            <p
              className="text-left text-muted small"
            >
              {this.smallDescription}
            </p>
          </div>
          <div
            className="modal-footer pb-4 px-4 flex flex-row justify-between"
            style={{
              borderTop: "none"
            }}
          >
            <SecondaryButton
              style={{
                flex: "1 1 0px"
              }}
              text={this.cancelButtonText}
              onClick={() => {
                if (this.props.onCancel) {
                  this.props.onCancel();
                }
              }}
            />
            <PrimaryButton
              style={{
                flex: "1 1 0px"
              }}
              text={this.okButtonText}
              onClick={() => {
                if (this.props.onOK) {
                  this.props.onOK();
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Modal7;
