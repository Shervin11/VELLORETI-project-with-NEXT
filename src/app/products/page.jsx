import React from "react";
import "@/app/products/styles/page.css";
import hero1 from "@/images/Text-media-static.png";
import hero2 from "@/images/Background-Image.png";
import hero4 from "@/images/Bike-Wrapper.png";
import hero5 from "@/images/Wrapper.png";
import kidsBike from "@/images/kidsBike.png";
import cityBike from "@/images/cityBike.png";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <>
      <section className="vell">
        <div className="text-[white]">
          <p>VELORETTI ELECTRIC</p>
          <h2 className="text-[70px] font-semibold">This is Two.</h2>
          <p>Introducing the all-new Ivy and Ace</p>
        </div>
      </section>

      <section className="flex md:flex-row items-center my-[50px] flex-col gap-[50px] justify-around">
        <div className="w-[80%] md:w-[550px] rounded-[5px] bg-[#EBEDEE] p-[20px]">
          <div>
            <p className="text-[25px]">Electric Ace Two</p>
            <p>Rider height: 173-200cm</p>
          </div>
          <Link href={`${1}`}>
            <Image src={hero4} className="m-auto" alt="" />
          </Link>
          <div className="flex md:flex-row flex-col gap-[10px] items-center justify-between">
            <div className="flex items-center gap-[20px]">
              <button className="w-[100px] h-[45px] rounded-[45px] bg-[white]">
                Buy Now
              </button>
              <button className="font-semibold border-b">Learn more</button>
            </div>
            <Image src={hero5} alt="" />
          </div>
        </div>

        <div className="w-[80%] md:w-[550px] rounded-[5px] bg-[#EBEDEE] p-[20px]">
          <div>
            <p className="text-[25px]">Electric Ace Two</p>
            <p>Rider height: 173-200cm</p>
          </div>
          <Link href={`${1}`}>
            <Image src={hero4} className="m-auto" alt="" />
          </Link>
          <div className="flex md:flex-row flex-col gap-[10px] items-center justify-between">
            <div className="flex items-center gap-[20px]">
              <button className="w-[100px] h-[45px] rounded-[45px] bg-[white]">
                Buy Now
              </button>
              <button className="font-semibold border-b">Learn more</button>
            </div>
            <Image src={hero5} alt="" />
          </div>
        </div>
      </section>

      <section className="w-[90%] my-[50px] md:max-w-[1300px] m-auto">
        <p className="mb-[10px]">Explore our bikes</p>

        <div className="flex items-center my-[30px] md:flex-row flex-col gap-[20px] justify-between">
          <div className="bg-[#EBEDEE] md:h-[480px] md:w-[500px] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl">City Bikes</h3>
              <p className="text-[#141615] text-xl">From €399</p>
            </div>
            <div className="flex gap-3">
              <h2 className="underline my-2">Women</h2>
              <h2 className="my-2 text-[#C4C4C4]">Men</h2>
            </div>
            <Image src={cityBike} alt="third" className="my-5" />
            <div className="mt-7 flex items-center gap-3">
              <button className="bg-white py-2 px-5 rounded-[100px] cursor-pointer">
                Buy Now
              </button>
              <button className="underline cursor-pointer">Learn more</button>
            </div>
          </div>

          <div className="bg-[#EBEDEE] md:h-[480px] md:w-[500px] rounded-xl p-5">
            <div className="flex justify-between items-center">
              <h3 className="text-3xl">Kids' Bikes</h3>
              <p className="text-[#141615] text-xl">From €399</p>
            </div>
            <div className="flex gap-3">
              <h2 className="underline my-2">Women</h2>
              <h2 className="my-2 text-[#C4C4C4]">Men</h2>
            </div>
            <Image src={kidsBike} alt="third" className="my-5" />
            <div className="mt-7 flex items-center gap-3">
              <button className="bg-white py-2 px-5 rounded-[100px] cursor-pointer">
                Buy Now
              </button>
              <button className="underline cursor-pointer">Learn more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] md:max-w-[1200px] my-[50px] m-auto">
        <h3 className="text-[40px] md:text-[70px] font-medium mb-[100px]">
          Make your commute <br className="md:block hidden" />
          the best part of your day.
        </h3>
        <p>
          Clean and timeless designs that make every ride a thrill.{" "}
          <br className="md:block hidden" /> Wherever you're heading, our bikes
          are made to make your daily <br className="md:block hidden" /> commute
          a joy.
        </p>
      </section>

      <section className="dis text-[white]">
        <div>
          <h3 className="text-[50px] font-medium w-[347px]">
            Discover your local Veloretti partner store
          </h3>
          <p className="w-[310px] my-[20px]">
            Our partner stores across the Netherlands are there for you. Whether
            you're looking to pick up a newly ordered bike, need a fix, or want
            to take a test ride on our Ivy or Ace Two, your ideal biking
            experience is closer than you think.
          </p>
          <button className="w-[250px] h-[50px] bg-[white] rounded-[80px] text-[#141615]">
            Find a partner store near you
          </button>
        </div>
      </section>

      <section className="md:flex w-[90%] m-autoc mt-[50px] mb-[50px] items-center justify-around">
        <Image
          className="w-[80%] m-auto md:w-[40%] md:m-0"
          src={hero2}
          alt=""
        />
        <div className="w-[80%] m-auto md:w-[40%] md:m-0 text-center md:text-start ">
          <p className="text-[40px]">Leasing</p>
          <br />
          <p>
            Want to provide your organisation with mobility in a unique and
            creative way? Our Electric and City bikes are the perfect solution
            for healthier employees. So whether it's customised employee
            bicycles or standout promotional rides, both small and big
            organisations share the love of our Veloretti designs. Depending on
            the number of bikes, we will give you a customised quote.
          </p>
          <br />
          <p>Learn more</p>
        </div>
      </section>

      <section className="red text-[white] my-[90px]">
        <div>
          <h3 className="text-[50px] font-medium">Red Dot Award</h3>
          <p className="w-[310px]">
            Good design is what drives us, and we're proud to share that
            Veloretti Electric Two has already won the prestigious Red Dot
            Design Award 2023, as judged by the world's best product designers.
          </p>
        </div>
      </section>

      <section className="flex md:flex-row flex-col gap-[20px] w-[90%] md:max-w-[1200px] m-auto mt-[50px] mb-[50px] items-center justify-around">
        <div className="w-[80%] md:w-[40%]">
          <p className="text-[40px]">
            Bike plans for <br />
            employees.
          </p>
          <br />
          <p>
            Veloretti Electrics benefit both the environment and the health of{" "}
            your employees. Oh, and they look good too. Cost-free for the
            employer and outside of the WKR.
          </p>
          <br />
          <p>Discover more</p>
        </div>
        <Image src={hero1} alt="" />
      </section>
    </>
  );
};

export default Products;
