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
    <div className="relative min-h-full">
      <div style={bgStyle} className={`px-8 py-20 w-full`}>
        <div className="absolute left-1/4 w-3/5 mx-auto bg-white p-10 shadow-md flex justify-between">
          <div className="flex flex-col justify-evenly w-1/2">
            <div className="text-black font-normal mb-10">
              <h3>{content?.caption?.Text.toUpperCase()}</h3>
            </div>
            <div className="text-black font-thin text-3xl mb-10">
              <p>
                You have a new land you want to lease?<br></br> Or want to say
                hello...
              </p>
            </div>

            <div className="text-black font-thin text-6xl mb-10 text-zinc-500">
              <p>{content?.email}</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-black font-semibold mb-10">
              <h3>Offices</h3>
            </div>
            <div>
              <p>{content?.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;
