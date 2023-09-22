import React from "react";
import MedtimeLogo from "../img/footerlogo.png";
import map from "../img/map.svg";
import phone from "../img/phone.svg";
import time from "../img/time.svg";

const navigation = {
  solutions: [
    { name: "เครื่องมือแพทย์", href: "#" },
    { name: "บริการหลังการขาย", href: "#" },
  ],
  support: [
    { name: "แผนที่", href: "#" },
    { name: "ติดต่อเรา", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
  social: [
    {
      name: "Line",
      href: "#",
      icon: (props) => (
        <svg
          fill="#003190"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="M13.78 9.46a.38.38 0 0 0-.38.38v1.67L12 9.65a.4.4 0 0 0-.33-.19.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38.38.38 0 0 0 .38-.38V11l1.39 1.91a.27.27 0 0 0 .15.11.32.32 0 0 0 .14 0A.33.33 0 0 0 14 13l.1-.07a.39.39 0 0 0 .11-.27V9.84a.38.38 0 0 0-.43-.38ZM9.2 12.27H8.14V9.84a.38.38 0 0 0-.38-.38.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38H9.2a.39.39 0 0 0 .39-.38.39.39 0 0 0-.39-.41Zm1.11-2.81a.39.39 0 0 0-.39.38v2.84a.39.39 0 0 0 .39.38.38.38 0 0 0 .38-.38V9.84a.38.38 0 0 0-.38-.38ZM17.91 2H6.09A4.1 4.1 0 0 0 2 6.09v11.82A4.1 4.1 0 0 0 6.09 22h11.82A4.1 4.1 0 0 0 22 17.91V6.09A4.1 4.1 0 0 0 17.91 2Zm.31 12.28a1.55 1.55 0 0 1-.13.17 5.5 5.5 0 0 1-.8.8c-2 1.87-5.36 4.11-5.81 3.76s.64-1.76-.53-2a1 1 0 0 1-.25 0c-3.44-.48-6-2.89-6-5.78 0-3.25 3.29-5.88 7.34-5.88s7.34 2.63 7.34 5.88a5 5 0 0 1-1.16 3.05Zm-1.71-4.81H15a.38.38 0 0 0-.38.38v2.84a.38.38 0 0 0 .38.38h1.48a.38.38 0 0 0 .38-.38.38.38 0 0 0-.38-.38h-1.03v-.6h1.06a.39.39 0 0 0 .38-.39.38.38 0 0 0-.38-.38h-1.06v-.61h1.06a.38.38 0 0 0 .38-.38.38.38 0 0 0-.38-.48Z" />
        </svg>
      ),
    },
    {
      name: "Call",
      href: "#",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M19.44 13c-.22 0-.45-.07-.67-.12a9.443 9.443 0 0 1-1.31-.39 2 2 0 0 0-2.48 1l-.22.45a12.184 12.184 0 0 1-2.66-2 12.18 12.18 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48 10.32 10.32 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41 19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76 3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9Zm.5 6a1 1 0 0 1-.723.962c-.141.043-.29.056-.437.038A17 17 0 0 1 4.07 5.22a1.09 1.09 0 0 1 .25-.82 1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79 11.301 11.301 0 0 0 .61 2.36l-1.4.65a1 1 0 0 0-.49 1.33 14.49 14.49 0 0 0 7 7 1 1 0 0 0 .76 0 1.002 1.002 0 0 0 .57-.52l.62-1.4a13.79 13.79 0 0 0 1.58.46c.267.06.537.11.81.15a1 1 0 0 1 .79 1l.02 3.12Z"
            fill="#003190"
          />
        </svg>
      ),
    },
    {
      name: "Mail",
      href: "#",
      icon: (props) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
        >
          <path
            d="M24.542 5.167H6.458A3.875 3.875 0 0 0 2.583 9.04v12.917a3.875 3.875 0 0 0 3.875 3.875h18.084a3.875 3.875 0 0 0 3.875-3.875V9.042a3.875 3.875 0 0 0-3.875-3.875Zm-.53 2.583-7.595 7.595a1.292 1.292 0 0 1-1.834 0L6.988 7.75h17.024Zm1.821 14.208a1.291 1.291 0 0 1-1.291 1.292H6.458a1.291 1.291 0 0 1-1.291-1.292V9.571l7.595 7.595a3.875 3.875 0 0 0 5.476 0l7.595-7.595v12.387Z"
            fill="#003190"
          />
        </svg>
      ),
    },
  ],
};

const perks = [
  {
    name: "สถานที่ : ",
    imageSrc: map,
    description:
      "Meditime Company Limited 999/99 Rama9 road, Suanluang, Bangkok 10250",
  },
  {
    name: "โทร :",
    imageSrc: phone,
    description: "+66(0) 2718-3582-3",
  },
  {
    name: "เวลาทำการ :",
    imageSrc: time,
    description: " จ-ศ 08.00-17.00 น.",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="bg-[#F2F7FF] main-footer">
        <div className="mx-auto  max-w-7xl px-6 pb-8 pt-16 sm:pt-24 sm:pb-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <img className="w-[249px]" src={MedtimeLogo} alt="Company name" />
              <p className="text-sm leading-6 text-gray-600">
                We are a family centered practice that incorporates compassion
                and dedication to promote your well being.
              </p>
              <button className="w-[180px] h-[54px] text-white bg-[#003190] rounded-[10px] font-bold">
              ติดต่อเรา
              </button>
              <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-[#2a3d53] text-sm leading-5 font-bold"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-xl font-bold leading-9 text-[#2a3d53]">
                    บริการ
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.solutions.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-[#2a3d53] text-sm leading-5 font-bold"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-xl font-bold leading-9 text-[#2a3d53]">
                    เกี่ยวกับเรา
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.support.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className="text-[#2a3d53] text-sm leading-5 font-bold"
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-1 md:gap-8">
                <div>
                  {/* <h3 className="text-sm font-semibold leading-6 text-gray-900">
                    Company
                  </h3> */}
                  <div className="bg-[#FFFFFF] rounded-2xl px-5 py-5">
                    <h2 class="text-[20px] text-[#2a3d53] leading-7 font-bold">
                      ติดต่อเรา
                    </h2>

                    <div className="mx-auto max-w-7xl py-6 sm:px-2 sm:py-6 lg:px-0">
                      <div className="mx-auto grid gap-y-4 lg:max-w-none lg:grid-cols-1 lg:gap-y-4">
                        {perks.map((perk) => (
                          <div key={perk.name} className="sm:flex">
                            <div className="sm:flex-shrink-0">
                              <div className="flow-root">
                                <img
                                  className=" w-5"
                                  src={perk.imageSrc}
                                  alt=""
                                />
                              </div>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                              <h3 className="text-sm font-bold text-[#2a3d53]">
                                {perk.name}
                              </h3>
                              <p className="mt-2 text-sm text-[#2a3d53]">
                                {perk.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="sm:flex sm:px-32 bg-white justify-between py-5 px-5">
          <div className="flex justify-between items-center sm:w-[30%]">
            <p className="text-xs text-[#003190] font-normal ">© 2022 - Meditime</p>
            <p className="text-xs text-[#003190] font-normal ">All rights reserved.</p>
          </div>
          <div className="sm:w-[70%] sm:flex justify-end gap-x-14">
          <p className="text-xs text-[#003190] font-normal ">Sitemap</p>
          <p className="text-xs text-[#003190] font-normal ">Terms and Conditions</p>
            <p className="text-xs text-[#003190] font-normal ">Privacy Policy</p>
            <p className="text-xs text-[#003190] font-normal ">Manage Cookies</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
