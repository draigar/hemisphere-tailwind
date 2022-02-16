// import Button1 from "./button1";
import Button2 from "./button2";
import Button3 from "./button3";
import Button4 from "./button4";
import React from "react";
import dynamic from "next/dynamic";

const Button1 = dynamic(
  () => import('./button1'),
  { ssr: false }
)

interface BtnProps {
  content: any;
}

function CustomButton({ content }: BtnProps) {
  let buttonType = content?.type;
  return (
    <>
      {buttonType === "outlined" ? (
        <Button2 content={content} />
      ) : buttonType === "decorative" ? (
        <Button3 content={content} />
      ) : buttonType === "hyperlink" ? (
        <Button4 content={content} />
      ) : (
        <Button1 content={content} />
      )}
    </>
  );
}

export default CustomButton;
