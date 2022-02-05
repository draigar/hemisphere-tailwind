import React from "react";
import Image from "next/image";

function TextImageGrid() {
  return (
    <div className="flex justify-between bg-red-500">
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus
          suspendisse faucibus interdum posuere lorem ipsum dolor. Dignissim
          cras tincidunt lobortis feugiat vivamus. Congue eu consequat ac felis
          donec. Bibendum neque egestas congue quisque egestas diam in arcu. Ac
          turpis egestas maecenas pharetra convallis. Velit aliquet sagittis id
          consectetur purus ut faucibus pulvinar elementum. Quisque id diam vel
          quam elementum pulvinar etiam. Enim nunc faucibus a pellentesque. Nunc
          mattis enim ut tellus elementum sagittis vitae et leo. Est ullamcorper
          eget nulla facilisi etiam dignissim diam. Sapien pellentesque habitant
          morbi tristique. Sapien et ligula ullamcorper malesuada. Vel fringilla
          est ullamcorper eget. Montes nascetur ridiculus mus mauris vitae
          ultricies leo integer. Vel fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pharetra sit amet aliquam id diam
          maecenas ultricies mi eget. Odio ut sem nulla pharetra diam sit amet.
          Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat.
        </p>
      </section>
      <section>
        <Image
          src="https://www.geo.tv/assets/uploads/updates/2022-02-05/397252_9866192_updates.jpg"
          alt="Picture of the author"
          width={500}
          height={500}
          // blurDataURL="data:..." automatically provided
          // placeholder="blur" // Optional blur-up while loading
        />
      </section>
    </div>
  );
}

export default TextImageGrid;
