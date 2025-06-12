import React from "react";
import "@/app/products/styles/page.css";
import logoBike from "@/images/Text-media-new_custom-logo.png";
import womenBike from "@/images/Image-Wrapper.png";
import menBike from "@/images/Text-media-static_custom.png";
import Bike from "@/images/eTxt-media-static_custom-Media.png";
import medBike from "@/images/Text-media-static_custom-Media (1).png";
import bike from "@/images/span.png";
import Image from "next/image";

const City = () => {
  return (
    <>
      <section className="city">
        <div className="text-white">
          <p>VELORETTI</p>
          <h3 className="text-[70px] font-medium">City bikes</h3>
          <p>Forever Forward .</p>
        </div>
      </section>

      <div className="text-center my-[50px]">
        <h1 className="text-[40px] md:text-[120px] font-semibold">
          Forever Forward.
        </h1>
      </div>

      <section className="flex md:flex-row flex-col items-center gap-[40px] w-[90%] md:items-start md:max-w-[1200px] m-auto justify-between">
        <Image src={logoBike} alt="" className="md:mt-[50px]" />
        <div className="relative">
          <Image src={womenBike} alt="" />
          <div className="md:w-[395px] relative bg-white bottom-[60px] md:left-[-160px] border-[#1416151A] border text-[20px] md:text-[25px] rounded-[10px] p-[60px]">
            <p>
              Our women's bicycles are for everyone who likes to combine style
              with performance. In this range, available are the Café Racer and
              the Robyn, both frames with a lower tube, making it easy to step
              through.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#B6B6B6] flex items-center justify-between md:flex-row flex-col p-[20px] gap-[20px] md:p-[80px] max-w-[1550px] m-auto">
        <div className="md:w-[550px] text-[#FFFFFF80]">
          <Image src={bike} alt="" />
          <div className="flex justify-between">
            <p>Caféracer</p>
            <p>Women</p>
          </div>
        </div>
        <div className="md:w-[550px] text-[#FFFFFF80]">
          <Image src={bike} alt="" />
          <div className="flex justify-between">
            <p>Caféracer</p>
            <p>Women</p>
          </div>
        </div>
      </section>

      <section className="my-10 md:max-w-[1550px] w-[90%] md:gap-0 gap-5 m-auto md:h-[1100px] flex items-start relative md:flex-row flex-col">
        <Image src={menBike} alt="" />
        <div className="border-1 md:w-[500px] rounded-[10px] border-[#14161566] p-[50px]">
          <p className="text-xl text-[#14161566]">
            Whether you like it easy or fast, we got both. Our men's range of
            bicycles combine modern clean design with great quality, so they're
            perfect for your daily city commute. Our men citybikes are the
            Caféracer, Caféchaser and the Berlin, but feel free to opt for a
            women's bike for that easy hop-on- hop-off Amsterdam style.
          </p>
        </div>
        <Image
          className="absolute bottom-5 left-[350px] hidden md:block"
          src={medBike}
          alt=""
        />
        <Image src={Bike} alt="" />
      </section>

      <div>
        <h3 className="md:text-8xl font-medium text-7xl my-20 text-center">
          City bikes for <br />
          everyone.
        </h3>
      </div>
    </>
  );
};

export default City;
