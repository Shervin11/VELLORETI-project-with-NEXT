import React from "react";
import hero1 from "@/images/Text-media-static_background.png";
import hero2 from "@/images/Background-Image.png";
import hero3 from "@/images/div.video_wrapper__OHSYY.png";
import hero4 from "@/images/Bike-Wrapper.png";
import hero5 from "@/images/Wrapper.png";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="section1">
        <div>
          <p className="text-white text-[40px]">VELORETTI </p>
          <p className="text-[60px] text-white">
            Bike lease plan for employees.
          </p>
        </div>
      </section>

      <section className=" md:flex w-[90%] m-autoc mt-[50px] mb-[50px] items-center justify-around">
        <Image
          className="w-[80%] m-auto md:w-[40%] md:m-0"
          src={hero1}
          alt=""
        />
        <div className="w-[80%] m-auto md:w-[40%] md:m-0 text-center md:text-start ">
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
      </section>

      <section className="section2">
        <div>
          <p className="text-[60px] text-white">
            Service, <br />
            maintenance and <br />
            insurance
          </p>
          <p className="text-white text-[20px]">
            The lease includes an all-in service package. <br />
            Throughout the entire 36 months, you are <br />
            fully insured against damage, theft and <br />
            maintenance. In addition, you always have <br />
            access to roadside assistance.{" "}
          </p>
        </div>
      </section>

      <section className="md:flex w-[90%] m-autoc mt-[50px] mb-[50px] items-center justify-around">
        <Image
          className="w-[80%] m-auto md:w-[40%] md:m-0"
          src={hero2}
          alt=""
        />
        <div className="w-[80%] m-auto md:w-[40%] md:m-0 text-center md:text-start ">
          <p className="text-[40px]">Bike plans for employees.</p>
          <br />
          <p>
            Veloretti Electrics benefit both the environment and the health of{" "}
            your employees. Oh, and they look good too. Cost-free for the
            employer and outside of the WKR.
          </p>
          <br />
          <p>Discover more</p>
        </div>
      </section>

      <section className="md:flex w-[90%] m-autoc mt-[50px] mb-[50px] items-center justify-around">
        <div className="flex flex-col md:flex-row items-center gap-10 p-10">
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600">
              <li>
                <p className="text-black">Register your company </p> Fill in our
                registration form with your company details. After <br />
                your registration, our leasing partner will do a credit check.
                You <br />
                will hear whether your application has been approved within 24{" "}
                <br />
                hours.
              </li>
              <li>
                <p className="text-black">Register your company </p> Fill in our
                registration form with your company details. After <br />
                your registration, our leasing partner will do a credit check.
                You <br />
                will hear whether your application has been approved within 24{" "}
                <br />
                hours.
              </li>
              <li>
                <p className="text-black">Register your company </p> Fill in our
                registration form with your company details. After <br />
                your registration, our leasing partner will do a credit check.
                You <br />
                will hear whether your application has been approved within 24{" "}
                <br />
                hours.
              </li>
              <li>
                <p className="text-black">Register your company </p> Fill in our
                registration form with your company details. After <br />
                your registration, our leasing partner will do a credit check.
                You <br />
                will hear whether your application has been approved within 24{" "}
                <br />
                hours.!
              </li>
            </ul>
          </div>
        </div>
        <Image
          className="w-[80%] m-auto md:w-[40%] md:m-0"
          src={hero3}
          alt=""
        />
      </section>

      <section className="flex md:flex-row items-center flex-col gap-[50px] justify-around">
        <div className="w-[80%] md:w-[35%] bg-[#EBEDEE] h-[600px] p-[20px]">
          <div className="flex justify-between items-center">
            <p className="text-[25px]">Electric Ace Two</p>
            <p>€69,07 NET/MONTH</p>
          </div>
          <Link href={`/${1}`}>
            <Image src={hero4} alt="" />
            <Image className="m-auto" src={hero5} alt="" />
          </Link>
        </div>

        <div className="w-[80%] md:w-[35%] bg-[#EBEDEE] h-[600px] p-[20px]">
          <div className="flex justify-between items-center">
            <p className="text-[25px]">Electric Ace Two</p>
            <p>€69,07 NET/MONTH</p>
          </div>
          <Link href={`/${1}`}>
            <Image src={hero4} alt="" />
            <Image className="m-auto" src={hero5} alt="" />
          </Link>
        </div>
      </section>

      <section className="mt-[50px] mb-[50px]">
        <p className="text-center text-[50px]">Get in touch</p>
        <div className="w-[80%] flex flex-col gap-[30px] m-auto">
          <input
            type="text"
            placeholder="First Name"
            className="border-[#1416151A] border outline-none h-[40px] p-[20px] w-[100%] m-auto"
          />

          <input
            type="text"
            placeholder="First Name"
            className="border-[#1416151A] border outline-none h-[40px] p-[20px] w-[100%] m-auto"
          />

          <input
            type="text"
            placeholder="First Name"
            className="border-[#1416151A] border outline-none h-[40px] p-[20px] w-[100%] m-auto"
          />

          <input
            type="text"
            placeholder="First Name"
            className="border-[#1416151A] border outline-none h-[40px] p-[20px] w-[100%] m-auto"
          />
          <input
            type="text"
            placeholder="First Name"
            className="border-[#1416151A] border outline-none h-[40px] p-[20px] w-[100%] m-auto"
          />
          <input
            type="text"
            placeholder="First Name"
            className="border-[#1416151A] border outline-none h-[40px] p-[20px] w-[100%] m-auto"
          />

          <input
            type="text"
            placeholder=""
            className="border-[#1416151A] border outline-none h-[300px] p-[20px] w-[100%] m-auto"
          />

          <button className="w-[100%] rounded-3xl text-[white] text-[14px] h-[50px] bg-[#0000006c]">
            Send the request
          </button>
        </div>
      </section>

      <section className="md:my-20 md:max-w-[1550px] w-[90%] m-auto flex flex-col gap-4">
        <h3 className="text-5xl text-center">Any questions?</h3>
        <details className="py-2">
          <summary className="cursor-pointer text-xl font-bold">
            What about the paperwork?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
        <details className="py-2">
          <summary className="cursor-pointer text-xl font-bold">
            How does it work with an employee who retires early?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
        <details className="py-2">
          <summary className="cursor-pointer text-xl font-bold">
            What does a Veloretti Bike Plan cost for an employer?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
        <details className="py-2">
          <summary className="cursor-pointer text-xl font-bold">
            How is the insurance & maintenance arranged when leasing a Veloretti
            bike?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
        <details className="py-2">
          <summary className="cursor-pointer text-xl font-bold">
            What are the legal requirements for the Veloretti bicycle plan?
          </summary>
          <div className="mt-2">
            The bicycle plan is set up so that there will be no administrative
            work on your part as the employer. You can use a free online
            platform that has been created by our leasing partner. This provides
            you with a simple overview of your business and your employees,
            allowing you to arrange everything. It also simplifies all the
            paperwork. Everything is organised with just a few clicks.
          </div>
        </details>
      </section>
    </>
  );
};

export default Home;
