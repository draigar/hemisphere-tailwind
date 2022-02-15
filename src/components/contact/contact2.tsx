import CustomText from "../text/customText";
import urlFor from "@web/helpers/imageUrlGenerator";
import bgColorCombo from "@web/helpers/backgroundColorFn";

const Contact2 = ({ content }) => {
  console.log("From Contact 2", content);

  const bgColor = content?.background?.backgroundColor;
  const bgColorStyle = bgColorCombo(bgColor);
  return (
    <div className="relative min-h-full">
      <div className={`${bgColorStyle} px-8 py-20 w-full`}></div>
    </div>
  );
};

export default Contact2;
