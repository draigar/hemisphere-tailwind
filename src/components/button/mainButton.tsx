import React from "react";
import dynamic from "next/dynamic";

const Button1 = dynamic(
  () => import('./button1'),
  { ssr: false }
)

const Button2 = dynamic(
  () => import('./button2'),
  { ssr: false }
)

const Button3 = dynamic(
  () => import('./button3'),
  { ssr: false }
)

const Button4 = dynamic(
  () => import('./button4'),
  { ssr: false }
)

const Button5 = dynamic(
  () => import('./button5'),
  { ssr: false }
)

interface BtnProps {
  content: any;
}


function CustomButton({ content }: BtnProps) {
  let buttonType = content?.type;
  console.log(content);
  return (
    <>
      {buttonType === "outlined" ? (
        <Button2 content={content} />
      ) : buttonType === "decorative" ? (
        <Button3 content={content} />
      ) : buttonType === "hyperlink" ? (
        <Button4 content={content} />
      ) : buttonType === "ghost" ? (
        <Button5 content={content} />
      ) : (
        <Button1 content={content} />
      )}
    </>
  );
}

export default CustomButton;
