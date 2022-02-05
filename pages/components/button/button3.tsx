import React from "react";
import { bgColorCombo } from "../../helpers/backgroundColorFn";

interface BtnProps {
  content: any;
}

function Button3({ content }: BtnProps) {
  return (
    <button
      style={{ backgroundColor: bgColorCombo(content?.backgroundColor) }}
      className="p-4 rounded-sm"
    >
      {content?.buttontext}
    </button>
  );
}

export default Button3;
