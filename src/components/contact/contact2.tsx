import CustomText from "../text/customText";
import CustomButton from "../button/mainButton";
import urlFor from "@web/helpers/imageUrlGenerator";
import bgColorCombo from "@web/helpers/backgroundColorFn";

const Contact2 = ({ content }) => {
  console.log("From Contact 2", content);

  const bgColor = content?.background?.backgroundColor;
  const bgColorStyle = bgColorCombo(bgColor);
  const buttonDetails = content?.buttonType;

  return (
    <div className="relative min-h-full">
      <div
        className={`${bgColorStyle} lg:px-10 lg:py-20 w-full flex flex-col items-center justify-around md:px-10 md:py-20 sm:px-10 sm:py-10 sm:flex-col  md:flex-col lg:flex-row`}
      >
        <div className="basis-2/4 w-full">
          <div className="text-white font-light mb-10 text-4xl">
            <h3>{content?.caption?.Text}</h3>
          </div>
          <div className="text-white font-thin text-2xl mb-10">
            <p>Want to say hello? Send us a message</p>
          </div>

          <textarea
            placeholder="Send Us A Message"
            cols={30}
            rows={10}
            className="w-full p-5"
          ></textarea>

          {buttonDetails && <CustomButton content={buttonDetails} />}
        </div>

        <div className="sm:w-2/4 lg:w-fit justify-self-end sm:self-start md:self-center">
          <div className="text-white font-semibold mb-10">
            <h3>Location</h3>
          </div>
          <div className="text-white">
            <p>{content?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact2;
