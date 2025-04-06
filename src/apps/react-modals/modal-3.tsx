import {
  React
} from "@step-js-core/index";
import CloseRoundButton from "./components/close-round-button";
import {
  PrimaryButton,
  SecondaryButton
} from "./components/buttons";

class Modal3 extends React.Component {
  title: string;
  grayDescription: string;
  cancelButtonText: string;
  okButtonText: string;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.grayDescription = props.grayDescription;
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
          </div>
          <div
            className="modal-footer pb-4 px-4 flex flex-column align-items-stretch"
            style={{
              borderTop: "none"
            }}
          >
            <PrimaryButton
              text={this.okButtonText}
              onClick={() => {
                if (this.props.onOK) {
                  this.props.onOK();
                }
              }}
            />
            <SecondaryButton
              className="mt-3"
              text={this.cancelButtonText}
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
}

export default Modal3;
