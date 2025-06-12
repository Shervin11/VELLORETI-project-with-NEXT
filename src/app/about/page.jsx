import React from "react";
import secHero from "@/images/Text-media-static_background (3).png";
import thirdHero from "@/images/kidsBike.png";
import hero2 from "@/images/Background-Image.png";
import Image from "next/image";
import "@/app/products/styles/page.css";

const About = () => {
  return (
    <>
      <section className="md:h-[700px] h-[400px] bg-cover bg-center flex justify-center flex-col px-10 vdl">
        <p className="md:text-2xl text-white">VELORETTI</p>
        <h2 className="md:text-9xl text-2xl text-white">About Us</h2>
        <p className="md:text-2xl text-white">Forever Forward .</p>
      </section>

      <section className="my-10 md:flex-row flex-col flex items-center px-10 justify-evenly gap-10">
        <Image src={secHero} alt="" />
        <aside>
          <h3 className="md:text-5xl mb-[20px] text-2xl">Forever forward</h3>
          <p className="text-[#141615E5]">
            Our bikes are made to stand the test of time, both aesthetically and{" "}
            <br />
            practically. Whether you’re after a state-of-the-art electric bike,
            a <br />
            classic city bike, or a kids bike for the school run, we want to
            help <br />
            make your commute the best part of your day. 
          </p>
        </aside>
      </section>

      <section className="my-10 md:flex-row-reverse flex-col flex items-center px-10 justify-evenly gap-10">
        <Image src={hero2} alt="" />
        <aside>
          <h3 className="md:text-5xl mb-[20px] text-2xl">Part of Pon.Bike</h3>
          <p className="text-[#141615E5]">
            Veloretti was founded in Amsterdam in 2012 with a mission to make{" "}
            <br />
            clean, timeless bikes that are great quality and delivered to your{" "}
            <br />
            door at a fair price. We are proud to now be part of Pon.Bike, the{" "}
            <br />
            world-leading family of bike brands. With this support, we can{" "}
            <br />
            continue to evolve our designs, take care of our riders, and help{" "}
            <br />
            keep their bikes on the road.
          </p>
        </aside>
      </section>

      <h2 className="text-center md:text-8xl text-5xl my-10">
        Designed in <br />
        Amsterdam, <br />
        handmade <br />
        in Europe, <br />
        personal in <br />
        all cities.
      </h2>

      <section className="md:h-[700px] h-[400px] bg-cover bg-center flex justify-end px-10 items-center my-10 vdl">
        <div className="">
          <h2 className="md:text-5xl mb-[20px] text-2xl text-white">Made for you</h2>
          <p className="text-white">
            Elevate your ride with a bicycle that mirrors <br />
            your unique style and personality. From an <br />
            Ace Two electric bike with the latest <br />
            technology packed into a minimalist design, <br />
            or a bright yellow Berlin for those who like to <br />
            ride light and have a craving for nostalgia. <br />
            Our diverse range of models and colours <br />
            cater to riders of all kinds.
          </p>
        </div>
      </section>

      <section className="md:max-w-[1800px] w-[90%] m-auto my-10">
        <h2 className="text-2xl my-5">Explore our bikes</h2>
        <div className="flex justify-between md:flex-row flex-col md:gap-0 gap-4">
          <div className="bg-[#EBEDEE] md:h-[480px] md:w-[500px] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl">City Bikes</h3>
              <p className="text-[#141615] text-xl">From €399</p>
            </div>
            <div className="flex gap-3">
              <h2 className="underline my-2">Women</h2>
              <h2 className="my-2 text-[#C4C4C4]">Men</h2>
            </div>
            <Image src={thirdHero} alt="" className="my-5" />
            <div className="mt-7 flex items-center gap-3">
              <button className="bg-white py-2 px-5 rounded-[100px] cursor-pointer">
                Buy Now
              </button>
              <button className="underline cursor-pointer">Learn more</button>
            </div>
          </div>
          <div className="bg-[#EBEDEE] md:h-[480px] md:w-[500px] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl">City Bikes</h3>
              <p className="text-[#141615] text-xl">From €399</p>
            </div>
            <div className="flex gap-3">
              <h2 className="underline my-2">Women</h2>
              <h2 className="my-2 text-[#C4C4C4]">Men</h2>
            </div>
            <Image src={thirdHero} alt="" className="my-5" />
            <div className="mt-7 flex items-center gap-3">
              <button className="bg-white py-2 px-5 rounded-[100px] cursor-pointer">
                Buy Now
              </button>
              <button className="underline cursor-pointer">Learn more</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
