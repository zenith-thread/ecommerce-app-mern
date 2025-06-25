import React from "react";

// Components
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";

// assets
import { assets } from "../assets/frontend_assets/assets";

const { about_img } = assets;

const chooseUsFields = [
  {
    title: "Quality Assurance",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, accusantium.",
  },
  {
    title: "Convenience",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, accusantium.",
  },
  {
    title: "Exceptional Customer Service",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, accusantium.",
  },
];

const About = React.memo(() => {
  return (
    <div className="">
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={about_img}
          alt="About Us Image"
          className="w-full md:max-w-1/2"
        />
        <div className="flex flex-col justify-center gap-6 md:w-1/2 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repudiandae asperiores accusantium repellendus quas vel veniam
            quisquam fugiat ab aut alias!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo saepe
            deleniti in?
          </p>
          <b className="text-gray-800">Our Missioon</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo saepe
            deleniti in?
          </p>
        </div>
      </div>
      <div className="px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
        <div className="text-4xl mt-25 py-10 ">
          <Title text1="WHY" text2="CHOOSE US" />
        </div>

        <div className="flex flex-col md:flex-row text-sm mb-20">
          {chooseUsFields.map(({ title, paragraph }, idx) => (
            <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
              <b>{title}:</b>
              <p className="text-gray-600">{paragraph}</p>
            </div>
          ))}
        </div>
      </div>
      <NewsLetter />
    </div>
  );
});

export default About;
