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
  const isAnimationEnabled = content?.isAnimationEnabled
  const animationDelay = content?.animation?.animationDelay
  const animationDuration = content?.animation?.animationDuration
  const animationName = content?.animation?.animationName
  const animationOffset = content?.animation?.animationOffset
  return (
    <div className={`${isAnimationEnabled && 'wow animate__animated'} ${animationName} `} data-wow-duration={`${animationDuration}s`}
                    data-wow-delay={`${animationDelay}s`} data-wow-offset={animationOffset}>
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
    </div>
  );
}

export default CustomButton;
