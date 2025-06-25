import React from "react";

// Components
import Title from "../components/Title";
import Button from "../components/Button";
import NewsLetter from "../components/NewsLetter";

// assets
import { assets } from "../assets/frontend_assets/assets";

const { contact_img } = assets;

const Contact = React.memo(() => {
  return (
    <div className="px-4 sm:px-[3vw] md:px[5vw] lg:px-[7vw]">
      <div className="text-center text-2xl pt-20 border-t border-gray-200">
        <Title text1="CONTACT" text2="US" />
      </div>

      <div className="my-20 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={contact_img}
          alt="Contact Us Image"
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0123 <br />
            Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <Button classname="btn btn-inverted">Explore jobs</Button>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
});

export default Contact;
