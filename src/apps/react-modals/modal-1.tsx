import {
  React
} from "@step-js-core/index";
import {
  PrimaryButton
} from "./components/buttons";
import CloseRoundButton from "./components/close-round-button";

class Modal1 extends React.Component {
  title;
  grayDescription;
  okButtonText;
  onOK;

  constructor(props) {
    super(props);
    this.title = props.title;
    this.grayDescription = props.grayDescription;
    this.okButtonText = props.okButtonText;
    this.onOK = props.onOK;
  }

  render() {
    return (
      <div
        className="modal-dialog"
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
              className="modal-title w-100"
            >
              <h5
                className="text-center"
              >
                {this.title}
              </h5>
            </div>
          </div>
          <div
            className="modal-body"
          >
            <p
              className="text-center text-muted"
            >
              {this.grayDescription}
            </p>
          </div>
          <div
            className="modal-footer pb-4 px-4"
            style={{
              borderTop: "none"
            }}
          >
            <PrimaryButton
              className="w-100"
              text={this.okButtonText}
              onClick={() => {
                if (this.onOK) {
                  this.onOK();
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

const modal1Source = `

`;

export {
  Modal1,
  modal1Source
};
