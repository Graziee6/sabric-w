import React from "react";
// import { Link } from "react-router-dom";
import Heading from "./../components/heading";
import ImgCard from "../components/imgCard";
import TextCard from "../components/textCard";
import IconButton from "../components/iconButton";
import Customer from "../components/customer";
import Footer from "./../components/footer";
import { TbSteeringWheel } from "react-icons/tb";
import { LuFlagTriangleRight } from "react-icons/lu";
import { AiOutlinePieChart } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo from "../components/logo";

function home() {
  const inputPlaceholder = "name@email.com";
  const inputType = "email";
  const trialBtnText = "start 14 days free trial";
  const signUp = "/signup";
  const login = "/login";

  const ImgCardValues = [
    {
      id: 1,
      imgSrc: "./../assets/smartly.png",
      heading: "Manage Smartly",
      text: "Stay on top of your task lists and stay in touch with what's happening",
    },
    {
      id: 2,
      imgSrc: "./../assets/arrow.png",
      heading: "communicate fast",
      text: "Stay on top of your task lists and stay in touch with what's happening",
    },
    {
      id: 3,
      imgSrc: "./../assets/easily.png",
      heading: "Influence Easily",
      text: "Stay on top of your task lists and stay in touch with what's happening",
    },
  ];

  const textCardValues = [
    {
      id: 1,
      number: "01.",
      heading: "Real data access",
      text: "Create custom landing pages with Fastland that converts more visitors than any website. Easy & Fast.",
    },
    {
      id: 2,
      number: "02.",
      heading: "Daily email reports",
      text: "Create custom landing pages with Fastland that converts more visitors than any website. Easy & Fast.",
    },
  ];

  const iconButtons = [
    {
      id: 1,
      icon: TbSteeringWheel,
      text: "advertisement",
    },
    {
      id: 2,
      icon: LuFlagTriangleRight,
      text: "marketing",
    },
    {
      id: 3,
      icon: AiOutlinePieChart,
      text: "design",
    },
  ];

  const reviews = [
    {
      id: 1,
      imgSrc: "./assets/johnDoe.png",
      customerName: "John doe",
      jobTitle: "product designer",
    },
    {
      id: 2,
      imgSrc: "./assets/tiana.png",
      customerName: "Tiana Dokidis",
      jobTitle: "CMO, Dotcorn",
    },
    {
      id: 3,
      imgSrc: "./assets/talan.png",
      customerName: "Talan Bergson",
      jobTitle: "CEO, Greener",
    },
  ];
  return (
    <div className="w-full h-full bg-white overflow-x-hidden">
      {/* nav */}
      <div className="w-full flex justify-start mb-12">
        <div className="w-2/5 p-3">
          <Logo />
        </div>
        <div className="flex w-3/5 justify-around font-bold capitalize p-3">
          <Link to={login}>
            <p>Login</p>
          </Link>
          <Link to={signUp}>
            <p>sign up</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center">
        {/*  */}
        <div className="">
          <div className="w-full py-10 px-6">
            {/* img */}
            <div className="w-full m-auto flex flex-auto flex-row justify-center items-center">
              <img src="./assets/sabric-homepage-img.png" alt="homepage pic" />
            </div>

            <div className="w-full flex flex-col py-8">
              {/* animated heading */}
              {/* .container */}
              <div className="block text-4xl font-semibold relative w-full bottom-1/4">
                {/* same as make */}
                <h1 className="text-black">Stop waiting & grow your</h1>

                {/* same as #flip */}
                <div className="text-purple-700 h-14 overflow-hidden">
                  <div>
                    <div className="inline-block h-1/4 animate-show">
                      business.
                    </div>
                  </div>
                  <div>
                    <div className="inline-block h-1/4 animate-show">
                      startup.
                    </div>
                  </div>

                  <div>
                    <div className="inline-block h-1/4 animate-show">
                      agency.
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-medium">
                Create custom landing pages with Sabric that converts more
                visitors than any website.
              </p>
            </div>

            {/* inputs */}
            <div className="w-full flex flex-col gap-2 mb-4">
              <input
                type={inputType}
                placeholder={inputPlaceholder}
                className="p-5 text-black font-light rounded-lg border border-0.5 outline-none font-sans"
              />

              <div className="bg-orange-600 text-white rounded-md flex justify-center items-center capitalize p-3 font-normal text-normal mb-4 lg:text-md lg:mb-64 lg:font-semibold lg:text-medium cursor-pointer lg:hover:opacity-70">
                <p>{trialBtnText}</p>
              </div>
            </div>

            <div>
              <p className="text-gray-500 text-center">
                By clicking the button, you are agreeing with our{" "}
                <span className="text-orange-600">Terms & Conditions.</span>
              </p>
            </div>
          </div>
          {/* div 2 */}
          <div className="w-full flex flex-col justify-center text-center items-center px-6 py-10">
            <div className="lg:flex lg:flex-row gap-4 justify-between lg:text-left">
              <div className="lg:w-1/2">
                <Heading text="Your business needs a better shape today." />
              </div>
              <div className="lg:w-1/2 text-medium">
                <p>
                  Create custom landing pages with Fastland that converts more
                  visitors than any website. Easy & Fast.
                </p>
              </div>
            </div>

            <div>
              {ImgCardValues.map((imgCard) => (
                <ImgCard
                  imgSrc={imgCard.imgSrc}
                  heading={imgCard.heading}
                  text={imgCard.text}
                  key={imgCard.id}
                />
              ))}
            </div>
          </div>

          {/* div 3 */}
          <div className="w-full flex flex-col justify-center items-center text-center px-6 py-12 bg-violet-700">
            <h1 className="text-white text-4xl font-bold mb-3">
              Best features available for your social marketing.
            </h1>
            <p className="text-stone-300 text-medium">
              Create custom landing pages with Sabric that converts more
              visitors than any website. Easy & Fast.
            </p>

            <div>
              {iconButtons.map((iconBtn) => (
                <IconButton
                  icon={iconBtn.icon}
                  text={iconBtn.text}
                  key={iconBtn.id}
                />
              ))}
            </div>

            <div>
              {textCardValues.map((textCard) => (
                <TextCard
                  number={textCard.number}
                  heading={textCard.heading}
                  text={textCard.text}
                  key={textCard.id}
                />
              ))}
            </div>
          </div>

          {/* div 4 */}
          <div className="w-full px-8 py-10 text-center">
            <Heading text="Get instant growth result for business" />
            <p className="text-black text-medium">
              Create custom landing pages with Sabric that converts more
              visitors than any website. Easy & Fast.
            </p>
          </div>

          {/* div 5 */}
          <div className="w-full px-6 py-10 text-center bg-gray-100">
            <Heading text="Save your extra money by using our service" />
            <p className="text-black text-medium">
              Create custom landing pages with Sabric that converts more
              visitors than any website. Easy & Fast.
            </p>
          </div>

          {/* div 6 */}
          <div className="bg-white py-6 px-8 mb-4">
            {reviews.map((customer) => (
              <Customer
                imgSrc={customer.imgSrc}
                customerName={customer.customerName}
                jobTitle={customer.jobTitle}
                key={customer.id}
              />
            ))}
          </div>

          <div className="h-2 mb-4 px-8 border-b-gray-100"></div>

          <div className="w-full px-6 py-10 flex flex-row justify-center items-center">
            <div>
              <div className="flex flex-col gap-1 py-2">
                <h1 className="text-violet-700 text-3xl font-semibold">1.5M</h1>
                <p>New visitors every month</p>
              </div>
              <div className="flex flex-col gap-1 py-2">
                <h1 className="text-green-500 text-3xl font-semibold">$2M</h1>
                <p>New visitors every month</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-1 py-2">
                <h1 className="text-orange-500 text-3xl font-semibold">49%</h1>
                <p>New visitors every month</p>
              </div>
              <div className="flex flex-col gap-1 py-2">
                <h1 className="text-yellow-500 text-3xl font-semibold">93%</h1>
                <p>New visitors every month</p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default home;
