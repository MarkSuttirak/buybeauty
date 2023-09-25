import React, { useState, useEffect } from "react";
import homeslider1 from "../img/homeslider1.png";
import homeslider2 from "../img/homeslider2.png";

const HomeSlider = () => {
  const images = [
    {
      bgImage: homeslider1,
      text: "Empower medical product provider, to deliver particular outcome for patients, Explore what we can do together.",
      desc1: 'ผู้ให้บริการผลิตภัณฑ์ทางการแพทย์ เพื่อส่งมอบผลลัพธ์ที่ดีที่สุด',
      desc2: 'สำหรับผู้ป่วย ค้นหาสิ่งที่คุณต้องการ',
      buttonText: "ติดต่อเรา",
      buttonlink: "#",
    },
    {
      bgImage: homeslider2,
      text: "Empower medical product provider, to deliver particular outcome for patients, Explore what we can do together.",
      desc1: 'ผู้ให้บริการผลิตภัณฑ์ทางการแพทย์ เพื่อส่งมอบผลลัพธ์ที่ดีที่สุด',
      desc2: 'สำหรับผู้ป่วย ค้นหาสิ่งที่คุณต้องการ',
      buttonText: "ติดตอเรา",
      buttonlink: "#",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="homeBackgroundOverlay"></div>
      <div className="w-full relative">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute text-2xl coverCenter text-white ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            } transition-opacity duration-2000 ease-in-out`}
            style={{
              background: `url(${image.bgImage})`,
            }}
          >
            <img
              src={image.bgImage}
              alt={`Image ${index + 1}`}
              className="w-[100vw] h-[80vh] sm:h-[512px] xl:h-[55vh] object-cover"
            />
            <div className="max-w-[1270px] mx-auto">

            
            <div className=" absolute top-1/2 transform -translate-y-1/2 px-[10%] pr-[15%] sm:pr-0 sm:px-[5%] xl:px-0 sm:w-full">
              <div className="text-left"> {/* Set text alignment to the left */}
                <p className="sm:max-w-[950px] text-[31px] xl:text-4xl font-normal dDinFont">
                  {image.text}
                </p>
                <p className="mt-[5px] text-[18px]">{image.desc1}</p>
                <p className="mt-[1px] text-[18px]">{image.desc2}</p>
                <a
                  href="#"
                  className="text-base font-medium flex items-center justify-center w-[115px] h-[45px] bg-white text-[#006b3d] text-uppercase rounded-[10px] mt-3"
                >
                  {image.buttonText}
                </a>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;
