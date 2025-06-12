import React from "react";
import hero1 from "../../images/Container.png";
import color from "../../images/Product-view_color-Swatches.png";
import product from "../../images/7838d2af982259a96f988a19c294dad5d4ce1148.png";
import hero2 from "../../images/Text-media-static_background__qGDyA.png";
import hero3 from "../../images/Text-media-static_background__qGDyA (1).png";
import hero4 from "../../images/Text-media-static_background 2.png";
import hero5 from "../../images/span2.png";
import hero6 from "../../images/Text-media-static_background (1  ).png";
import hero7 from "../../images/Text-media-static_background (2).png";
import hero8 from "../../images/Text-media-static_background (3   ).png";
import hero9 from "../../images/Bike-highlights_background.png";
import "@/app/products/styles/page.css";
import Image from "next/image";

const AboutById = () => {
  return (
    <>
      <section className="flex max-w-[1900px] m-auto md:flex-row flex-col">
        <Image src={hero1} alt="image" />
        <div className="p-10 md:w-[50%]">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl">Electric Ivy</h1>
            <p className="text-3xl">€ 3.299</p>
          </div>
          <div className="flex my-5 gap-5">
            <div>
              <Image
                className="w-[150px] rounded-[20px]"
                src={product}
                alt="hello"
              />
              <p>Electric Ace</p>
            </div>
            <div>
              <Image
                className="w-[150px] rounded-[20px] border-[3px] border-black"
                src={product}
                alt="hello"
              />
              <p>Electric Ivy</p>
            </div>
          </div>
          <hr className="border-[#F0F0F0]" />
          <div className="my-10">
            <p>Ivy Two Matte Black</p>
            <Image src={color} alt="color" />
          </div>
          <hr className="border-[#F0F0F0]" />
          <p className="underline my-5">
            3 interest-free payments with
          </p>
          <p className="text-[12px] text-[#14161599]">
            The Ivy Two is a step-through frame electric bike combining design,
            advanced technology, and safety features. Rider height: between 164
            and 184cm.
          </p>
          <p className="text-[13px] bg-[#F0F0F0] w-[190px] h-[34px] flex items-center justify-center rounded-3xl my-5">
            Scroll to Specifications
          </p>
          <br />
          <button className="text-white bg-black h-[50px] rounded-3xl my-3 w-full">
            Customise now
          </button>
          <hr className="border-[#F0F0F0]" />
          <p className="mt-5">
            Shipping to the Netherlands, Belgium & Germany only.
          </p>
          <p>Delivery time: 5-15 business days</p>
        </div>
      </section>

      <section className="md:h-[900px] h-[400px] bg-cover bg-center flex justify-center flex-col md:px-20 px-10 vd">
        <h2 className="md:text-5xl text-2xl text-white">
          Removable long- <br />
          range battery
        </h2>
        <p className="mt-[20px] text-white">
          Recharge anytime, anywhere. Our in-house developed battery is{" "}
          <br className="md:block hidden" />
          built to go the distance. With a powerful 540 Wh and an impressive{" "}
          <br className="md:block hidden" />
          range of up to 120km, you'll have the freedom to explore without{" "}
          <br className="md:block hidden" />
          worrying about running out of power. And if you do need to{" "}
          <br className="md:block hidden" />
          recharge, our removable and smart battery pack can be easily{" "}
          <br className="md:block hidden" />
          detached and charged with any electrical outlet.
        </p>
      </section>

      <section className="flex md:w-[100%] w-[90%] m-auto my-[30px] gap-[20px] justify-between md:flex-row flex-col">
        <div className="md:w-[50%] flex justify-center items-center">
          <div>
            <h2 className="text-5xl">Ivy Two</h2>
            <p className="mt-[20px] text-[#14161566]">
              Introducing the Ivy Two, the electric bike that takes your <br />
              daily commute to the next level. With an accessible <br />
              lower frame, the latest technology, and safety features, <br />
              the Ivy delivers instant power, convenience, and peace <br />
              of mind at every turn, making it the go-to bike for any <br />
              commute. Equipped with a bright LED brake light for <br />
              enhanced visibility and safety tracking for added <br />
              security, the Ivy Two is the perfect combination of <br />
              design, technology, and safety.
            </p>
          </div>
        </div>
        <Image className="md:w-[50%]" src={hero2} alt="hello" />
      </section>

      <section className="flex md:w-[100%] w-[90%] m-auto gap-[20px] justify-between md:flex-row-reverse flex-col">
        <div className="md:w-[50%] flex justify-center items-center">
          <div>
            <h2 className="text-5xl">
              Silent and <br />
              powerful mid- <br />
              motor
            </h2>
            <p className="mt-[30px] text-[#14161566]">
              Natural and powerful. The 65Nm torque mid-engine <br />
              gives you all the power you need. Because the engine is <br />
              directly connected to your pedals, it automatically <br />
              adjusts its power to your torque instead of speed. This <br />
              gives you the most natural electric biking experience <br />
              there is.
            </p>
          </div>
        </div>
        <Image className="md:w-[50%]" src={hero3} alt="hello" />
      </section>

      <section className="md:h-[900px] h-[400px] my-[30px] bg-center bg-cover flex justify-center flex-col md:px-20 px-10 buil">
        <h2 className="md:text-5xl text-2xl text-white">Built-in display</h2>
        <p className="mt-[20px] text-white">
          Discover a new level of convenience and <br />
          control with our elegantly designed <br />
          integrated display. Everything you need to <br />
          manage your ride is right at your fingertips, <br />
          from customizing your bike's settings to <br />
          navigating unfamiliar parts of the city. And <br />
          with seamless integration to our app, you can <br />
          access all your data and ride information with <br />
          ease.
        </p>
      </section>

      <section className="flex md:w-[100%] w-[90%] m-auto gap-[20px] justify-between md:flex-row flex-col">
        <div className="md:w-[50%] flex justify-center items-center">
          <div>
            <h2 className="text-5xl">
              Enviolo® <br />
              automated <br />
              gears
            </h2>
            <p className="mt-[20px] text-[#14161566]">
              Introducing the Ivy Two, the electric bike that takes your <br />
              daily commute to the next level. With an accessible <br />
              lower frame, the latest technology, and safety features, <br />
              the Ivy delivers instant power, convenience, and peace <br />
              of mind at every turn, making it the go-to bike for any <br />
              commute. Equipped with a bright LED brake light for <br />
              enhanced visibility and safety tracking for added <br />
              security, the Ivy Two is the perfect combination of <br />
              design, technology, and safety.
            </p>
          </div>
        </div>
        <Image className="md:w-[50%]" src={hero4} alt="hello" />
      </section>

      <section className="flex md:w-[100%] w-[90%] m-auto my-[30px] gap-[20px] justify-between md:flex-row-reverse flex-col">
        <div className="md:w-[50%] flex justify-center items-center">
          <div>
            <h2 className="text-5xl">
              Gates® <br />
              belt drive
            </h2>
            <p className="mt-[20px] text-[#14161566]">
              Introducing the Ivy Two, the electric bike that takes your <br />
              daily commute to the next level. With an accessible <br />
              lower frame, the latest technology, and safety features, <br />
              the Ivy delivers instant power, convenience, and peace <br />
              of mind at every turn, making it the go-to bike for any <br />
              commute. Equipped with a bright LED brake light for <br />
              enhanced visibility and safety tracking for added <br />
              security, the Ivy Two is the perfect combination of <br />
              design, technology, and safety.
            </p>
          </div>
        </div>
        <Image className="md:w-[50%]" src={hero5} alt="hello" />
      </section>

      <section className="flex md:w-[100%] w-[90%] m-auto gap-[20px] justify-between md:flex-row flex-col">
        <div className="md:w-[50%] flex justify-center items-center">
          <div>
            <h2 className="text-5xl">LED brake light</h2>
            <p className="mt-[20px] text-[#14161566]">
              Introducing the Ivy Two, the electric bike that takes your <br />
              daily commute to the next level. With an accessible <br />
              lower frame, the latest technology, and safety features, <br />
              the Ivy delivers instant power, convenience, and peace <br />
              of mind at every turn, making it the go-to bike for any <br />
              commute. Equipped with a bright LED brake light for <br />
              enhanced visibility and safety tracking for added <br />
              security, the Ivy Two is the perfect combination of <br />
              design, technology, and safety.
            </p>
          </div>
        </div>
        <Image className="md:w-[50%]" src={hero6} alt="hello" />
      </section>

      <section className="md:h-[900px] h-[400px] my-[30px] bg-cover bg-center flex justify-center flex-col md:px-20 px-10 osram">
        <h2 className="md:text-7xl text-2xl text-white">
          Osram® <br />
          precision light
        </h2>
        <p className="mt-[20px] text-white">
          Safety is fundamental when it comes to <br />
          biking. We've designed the precision front <br />
          light with precision and clarity in mind. From <br />
          dark roads to challenging city terrain, the <br />
          precision front light, with its strong beam, is <br />
          designed to help you navigate with ease and <br />
          safety. No matter the environment, we make <br />
          sure we provide you with the visibility you <br />
          need.
        </p>
      </section>

      <section className="my-20 md:flex-row flex-col flex items-center px-10 justify-evenly gap-10">
        <Image src={hero7} alt="second image" />
        <div>
          <h3 className="md:text-5xl text-2xl">Safety tracking</h3>
          <p className="mt-[20px] text-[#141615E5]">
            The Electric Two comes with safety tracking. In case you find <br />
            yourself in an uncertain situation, simply press the button on your{" "}
            <br />
            handlebar to alert your loved ones of your live location and feel{" "}
            <br />
            more secure.
          </p>
          <br />
          <p className="text-[#141615E5]">
            Whether you're commuting in the city or exploring the countryside,{" "}
            <br />
            you can have peace of mind knowing that notifying is just a button{" "}
            <br />
            press away. Moreover, the tracking feature automatically <br />
            deactivates after an hour, allowing you to enjoy your rides with{" "}
            <br />
            complete privacy and security.
          </p>
        </div>
      </section>

      <section className="my-20 md:flex-row-reverse flex-col flex items-center px-10 justify-evenly gap-10">
        <Image src={hero8} alt="second image" />
        <div>
          <h3 className="md:text-5xl text-2xl">
            Shimano® <br />
            hydraulic <br />
            discbrakes
          </h3>
          <p className="mt-[20px] text-[#141615E5]">
            The Shimano® discbrakes are premium hydraulic disc brakes <br />
            designed to deliver lightning-fast stopping power, so you can ride{" "}
            <br />
            with complete confidence and control. Rest assured, you'll feel the{" "}
            <br />
            difference in the moments you need it most.
          </p>
        </div>
      </section>

      <section className="my-10 flex justify-center items-center">
        <Image src={hero9} alt="bike" />
      </section>

      <section className="md:max-w-[1700px] w-[90%] m-auto my-10">
        <h1 className="text-4xl">All in the details.</h1>
        <div className="my-5 flex justify-between md:flex-row flex-col md:gap-0 gap-5">
          <article className="md:w-[31%]">
            <h1 className="text-3xl my-5">Frame</h1>
            <h3 className="text-xl mt-5">Frame</h3>
            <p className="text-[#14161599]">
              Coated aluminium with integrated battery case
            </p>
            <h3 className="text-xl mt-5">Paint</h3>
            <p className="text-[#14161599]">PPG Powder Coating 2K</p>
            <h3 className="text-xl mt-5">Weight</h3>
            <p className="text-[#14161599]">
              Frame 26 kg <br />
              Battery 3 kg
            </p>
            <h3 className="text-xl mt-5">Rider Height</h3>
            <p className="text-[#14161599]">164-184cm</p>
          </article>
          {/* //////////// second */}
          <article className="md:w-[31%]">
            <h1 className="text-3xl my-5">Components</h1>
            <h3 className="text-xl mt-5">Motor</h3>
            <p className="text-[#14161599]">
              Bafang® 36v 250W / Torq + Rotation Sensor w/ a <br />
              maximum torque of 65 Nm
            </p>
            <h3 className="text-xl mt-5">Battery</h3>
            <p className="text-[#14161599]">
              Removable Smart Battery / 36Vdc, 540 WH <br />
              60-120 km range
            </p>
            <h3 className="text-xl mt-5">Gears</h3>
            <p className="text-[#14161599]">
              Enviolo® TR / Pro 44T Stepless Automatic Shifting / <br />
              Ratio 310%
            </p>
            <h3 className="text-xl mt-5">Display</h3>
            <p className="text-[#14161599]">
              Veloretti built-in display
            </p>
            <h3 className="text-xl mt-5">Brakes</h3>
            <p className="text-[#14161599]">
              Shimano® MT200 hydraulic disc brakes
            </p>
            <h3 className="text-xl mt-5">Tires</h3>
            <p className="text-[#14161599]">
              Performance Plus tire / 50-622 / Anti Puncture level 2
            </p>
            <h3 className="text-xl mt-5">Belt</h3>
            <p className="text-[#14161599]">
              Osram® Precision front light LED, StVZO approved
            </p>
            <h3 className="text-xl mt-5">Light front</h3>
            <p className="text-[#14161599]">
              Gates® Carbon Beltdrive / 122T CDX
            </p>
            <h3 className="text-xl mt-5">Light rear</h3>
            <p className="text-[#14161599]">COB Hyperbolic LED</p>
          </article>
          {/* ////////// third */}
          <article className="md:w-[31%]">
            <h1 className="text-3xl my-5">Accessories</h1>
            <h3 className="text-xl mt-5">Abus plug</h3>
            <p className="text-[#14161599]">In-chain lock 140 cm</p>
            <h3 className="text-xl mt-5">Front carrier</h3>
            <p className="text-[#14161599]">
              AVS front carrier 480g <br />
              Carrying Capacity: 10 kg (22 lb)
            </p>
            <h3 className="text-xl mt-5">Rear carrier</h3>
            <p className="text-[#14161599]">TBA</p>
            <h3 className="text-xl mt-5">Basket</h3>
            <p className="text-[#14161599]">
              AVS basket 1.33kg <br />
              Carrying Capacity: 10 kg (22 lb)
            </p>
            <h3 className="text-xl mt-5">Cargo basket</h3>
            <p className="text-[#14161599]">
              AVS cargo basket 1.7kg <br />
              Carrying Capacity: 10 kg (22 lb)
            </p>
          </article>
        </div>
      </section>
    </>
  );
};

export default AboutById;
