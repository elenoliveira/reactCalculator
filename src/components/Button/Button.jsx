import "./button.css";

const Button = ({ Click, children, isAction }) => {
  return (
    <button
      className={isAction ? "operator-btn" : ""}
      onClick={() => Click(children)}
    >
      {children}
    </button>
  );
};

export default Button;
