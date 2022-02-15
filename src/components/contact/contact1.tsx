import CustomText from "../text/customText";
import urlFor from "@web/helpers/imageUrlGenerator";

const Contact1 = ({ content }) => {
  const ImageBg = content?.background?.backgroundImage?.asset?._ref;
  const imageAsset = ImageBg && urlFor(ImageBg).url();

  const bgStyle = {
    backgroundImage: `url(${imageAsset})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative mb-10">
      <div style={bgStyle} className={`px-8 py-20 w-full h-96`}>
        &nbsp;
      </div>
      <div className="-mt-24 lg:w-3/5 sm:w-4/5 mx-auto mb-8 bg-white p-10 shadow-lg flex justify-between flex-wrap">
        <div className="flex flex-col justify-evenly w-1/2 sm:w-full">
          <div className="text-black font-normal mb-10">
            <h3>{content?.caption?.Text.toUpperCase()}</h3>
          </div>
          <div className="text-black font-thin lg:text-3xl mb-10 sm:text-xl">
            <p>
              You have a new land you want to lease? Or you want to say hello...
            </p>
          </div>

          <div className="text-black font-thin lg:text-5xl mb-10 text-zinc-500 sm:text-2xl">
            <p>{content?.email}</p>
          </div>
        </div>

        <div className="flex flex-col sm:w-1/2">
          <div className="text-black font-semibold mb-10">
            <h3>Offices</h3>
          </div>
          <div>
            <p>{content?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
