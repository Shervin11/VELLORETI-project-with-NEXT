import Image from "next/image";
import React from "react";
import img1 from "@/images/Footer_social.png";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="bg-[#3D3D3D] text-sm py-[40px] px-[20px] gap-[20px] md:px-[200px] flex flex-col md:flex-row items-center justify-between">
        <p className="md:w-[540px] text-center md:text-left">
          Ready to take the Electric Ivy or Ace for a spin? Electric test rides
          are now available in Amsterdam, Amstelveen, Abcoude, Bussum, Den Haag,
          Nijmegen, Weesp, Wormerveer, Berlin, Hamburg and Munich. Schedule your
          test ride now and we'll see you there.
        </p>
        <button className="bg-white text-black w-[200px] h-[50px] text-xl rounded-full font-medium hover:bg-gray-200">
          BOOK NOW
        </button>
      </div>

      <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Explorer</h4>
          <ul className="space-y-1">
            <li>Electric bikes</li>
            <li>City bikes</li>
            <li>Kids' bikes</li>
            <li>Accessories</li>
            <li>Outlet</li>
            <li>Business</li>
            <li>Insurance Electric</li>
            <li>Size guide</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-1">
            <li>About us</li>
            <li>Journal</li>
            <li>Reviews</li>
            <li>Press</li>
            <li>Jobs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Help</h4>
          <ul className="space-y-1">
            <li>Contact</li>
            <li>FAQ</li>
            <li>Delivery</li>
            <li>Assembly & manuals</li>
            <li>Payment options</li>
            <li>Privacy policy</li>
            <li>Terms & conditions</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-semibold mb-2">Join the ride.</h4>
          <p className="mb-4">Sign up for our newsletter.</p>
          <div className="flex mb-2 rounded-full overflow-hidden border border-gray-500">
            <input
              type="email"
              placeholder="Enter your email address here"
              className="flex-1 px-4 py-2 text-white outline-none"
            />
            <button className="bg-white text-black px-4 font-medium hover:bg-gray-200">
              Subscribe
            </button>
          </div>
          <label className="flex items-center text-xs mt-2">
            <input type="checkbox" className="mr-2" />
            By signing up, I agree to the{" "}
            <a href="#" className="underline ml-1">
              privacy policy
            </a>{" "}
            of Veloretti.
          </label>
          <Image src={img1} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;