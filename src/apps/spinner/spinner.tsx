import {
  React
} from "@step-js-core/index";
import "./spinner.css";

const Spinner = ({
  size
}) => {
  return (
    <div
      className="jsx-spinner-wrapper"
      style={{
        width: size,
        height: size
      }}
    >
      <div
        className="jsx-spinner"
        style={{
          width: size,
          height: size
        }}
      >
        <div
          className="jsx-spinner-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="jsx-spinner-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="jsx-spinner-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="jsx-spinner-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="jsx-spinner-dot"
          style={{
            width: size,
            height: size
          }}
        />
        <div
          className="jsx-spinner-dot"
          style={{
            width: size,
            height: size
          }}
        />
      </div>
    </div>
  );
};

export default Spinner;
