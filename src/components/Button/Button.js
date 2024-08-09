import React from "react";

function Button({action, actionText}) {
  return <button onClick = {action}>
    {actionText}
  </button>;
}

export default Button;
