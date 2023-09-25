import React, { useState, useEffect } from "react";
import ContactUsBannerImg from "../img/ContactUsBannerImg.png";
import phoneWhite from "../img/phoneWhite.svg";
import mapWhite from "../img/mapWhite.svg";
import Shapes from "../img/Shapes.png";

const ContactUs = () => {
   // Define your desired page title
   const pageTitle = "Contact Us ";

   // Set the page title using useEffect
   useEffect(() => {
     document.title = pageTitle + " - " + " meditimethailand";
   }, []);
  return (
    <>
      <main>
        <section
          className="min-h-[50vh] relative flex items-center coverCenter"
          style={{ background: `url('${ContactUsBannerImg}')` }}
        >
          <div className="background-overlay"></div>
          <div className="container mx-auto max-w-[1200px] px-6">
            <h1 className="text-white text-[64px] font-normal dDinFont tracking-[-3px] relative">
              Contact us
            </h1>
            <a
              href="tel:%20+66(0)%202718-3582-3"
              className="bg-[#006B3D] relative text-white w-[154px] h-[54px] flex justify-center items-center font-bold py-2 px-4 rounded-lg mt-5"
            >
              <span className="relative">ติดต่อเรา</span>
            </a>
            <p className="text-[18px] relative text-white mt-6  tracking-[-1px]">
              Get in touch or create a route to the studio over here:
            </p>
          </div>
        </section>

        <section className="min-h-[450px] xl:min-h-[auto] xl:h-[450px] w-full flex flex-wrap xl:flex-nowrap">
          <div
            className="relative h-0 overflow-hidden w-full xl:w-[60%]"
            style={{ paddingBottom: "56.25%" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.618032037246!2d100.62500877490648!3d13.741560297530912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d61d782ebffff%3A0x6cf441793064ef5f!2sMeditime%20Company%20Limited!5e0!3m2!1sen!2s!4v1695198242204!5m2!1sen!2s"
              width="600"
              height="450"
              className="w-full"
              style={{ border: "0" }}
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="w-full sm:w-[50%] xl:w-[20%] bg-[#003190] py-[50px] px-[40px]">
            <div className="w-[38px] border-2 border-white rounded-[50px] p-2">
              <img src={phoneWhite} className="w-[28px]" alt="" />
            </div>
            <h3 className="text-white text-2xl font-bold mt-5">ติดต่อเรา</h3>
            <p className="text-white text-[19px] leading-[36px] font-medium">
              โทร : <span className="text-white">02-718-3582-3</span> <br />
              โทรสาร : <span className="text-white">02-718-3584</span>
              <br />
              เวลาทำการ : วันจันทร์ – วันศุกร์
              <br />( 8 am to 5 pm )
            </p>
          </div>

          <div className="w-full sm:w-[50%] xl:w-[20%] bg-[#006B3D] py-[50px] px-[40px]">
            <div className="w-[38px] border-2 border-white rounded-[50px] p-2">
              <img src={mapWhite} className="w-[28px]" alt="" />
            </div>
            <h3 className="text-white text-2xl font-bold mt-5">ที่อยู่</h3>
            <p className="text-white text-[19px] leading-[36px] font-medium">
              Meditime Company Limited
              <br />
              999/99 ถนนพระรามที่ 9 <br />
              แขวงสวนหลวง เขตสวนหลวง <br />
              กรุงเทพมหานคร 10250
            </p>
          </div>
        </section>

        <section className="relative my-[130px] px-7 ">
          <div className="max-w-[1382px] flex mx-auto flex-wrap xl:flex-nowrap">
            <div className="w-full  xl:w-1/2 xl:ml-[200px] gap-y-4 flex flex-col">
              <img src={Shapes} className="w-[38px]" alt="" />
              <p className="text-[#0D1317] text-[64px] leading-[68px] tracking-[-3px] dDinFont">
                Get in touch
                <br /> with us
              </p>
              <p className="text-[#0d1317] text-[20px] leading-[30px]">
                Meditime Company Limited
                <br />
                999/99 Rama9 road, <br />
                Suanluang, Bangkok 10250
              </p>
              <p className="text-[#0d1317] text-[20px] leading-[30px]">
                <strong>Tel</strong> : 02-718-3582-3 <br />
                <strong>Fax</strong> : 02-718-3584
              </p>
            </div>
            <div className="w-full xl:w-1/2">
              <h2 className="text-[24px] font-medium text-[#003190]">
                We will get back to you soon as possible.
              </h2>
              <form action="" className="meditime-form">
                <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="ชื่อ"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="สกุล"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6 w-full">
                    <div className="mt-1">
                      <input
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="อีเมล"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        autoComplete="company"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        placeholder="โรงพยาบาล/บริษัท"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-6">
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={7}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        defaultValue={""}
                        placeholder="เนื้อหาข้อความ"
                      />
                    </div>
                  </div>

                  <div className="flex items-end sm:col-span-6 justify-end">
                    <div className="mt-1 ">
                      <button
                        type="submit"
                        class=" bg-[#003190] h-[38px] w-[130px] rounded-[5px] text-[18px] leading-[27px] font-bold text-white"
                      >
                        ส่ง
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactUs;
