import React from "react";
import Image from "next/image";

function Partners() {
  return (
    <div className="md:p-11 px-4 py-11">
      <p>Our Partners</p>
      <p>Meet all our partners</p>
      <div className="flex flex-wrap justify-between">
        <Image
          src="https://www.geo.tv/assets/uploads/updates/2022-02-05/397252_9866192_updates.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-1/5"
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <Image
          src="https://www.geo.tv/assets/uploads/updates/2022-02-05/397252_9866192_updates.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <Image
          src="https://www.geo.tv/assets/uploads/updates/2022-02-05/397252_9866192_updates.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
        <Image
          src="https://www.geo.tv/assets/uploads/updates/2022-02-05/397252_9866192_updates.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </div>
    </div>
  );
}

export default Partners;
