import {
  React
} from "@step-js-core/index";
import modal8Image from "./modal-8-image";
import {
  PrimaryButton
} from "./components/buttons";
import CloseRoundButton from "./components/close-round-button";

class Modal8 extends React.Component {
  img: any;
  title: string;
  grayDescription: string;
  okButtonText: string;

  constructor(props) {
    super(props);
    this.img = props.img;
    this.title = props.title;
    this.grayDescription = props.grayDescription;
    this.okButtonText = props.okButtonText;
  }

  render() {
    return (
      <div
        className="modal-dialog bg-dark-subtle rounded"
        style={{
          width: "300px",
        }}
      >
        <div
          className="modal-content position-relative overflow-hidden"
        >
          <img
            src={modal8Image}
            alt=""
            width="100%"
            height="auto"
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              right: 0
            }}
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

export default Modal8;
