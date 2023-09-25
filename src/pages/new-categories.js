import React from "react";
import NewCatHeroImage from "../img/NewCatHeroImage.png";
import ShoulderPain from "../img/shoulder-pain.png";
import knee from "../img/knee.png";
import Hip from "../img/Hip.png";
import Elbow from "../img/Elbow.png";
import FootAndAnkle from "../img/FootAndAnkle.png";
import HandAndWrist from "../img/HandAndWrist.png";
import ABLATION from "../img/ABLATION.png";
import IMAGINGVISUALIZATON from "../img/IMAGINGVISUALIZATON.png";
import HallPoweredInstruments from "../img/HallPoweredInstruments.png";
import rightIcon from "../img/rightIcon.svg";

function NewCategories() {
  const category = [
    {
      name: "SHOULDER",
      link: "https://www.conmed.com/en-us/specialties-and-techniques/specialties/orthopedics/shoulder-and-elbow",
      linkText: "View More",
      img: ShoulderPain,
    },
    {
      name: "KNEE",
      link: "https://www.conmed.com/en-us/specialties-and-techniques/specialties/orthopedics/knee",
      linkText: "View More",
      img: knee,
    },
    {
      name: "HIP",
      link: "https://www.conmed.com/en-us/specialties-and-techniques/specialties/orthopedics/hip",
      linkText: "View More",
      img: Hip,
    },
    {
      name: "Elbow",
      link: "https://www.conmed.com/en-us/specialties-and-techniques/specialties/orthopedics/shoulder-and-elbow",
      linkText: "View More",
      img: Elbow,
    },
    {
      name: "foot and  ankle",
      link: "https://www.conmed.com/en-us/specialties-and-techniques/specialties/orthopedics/shoulder-and-elbow",
      linkText: "View More",
      img: FootAndAnkle,
    },
    {
      name: "hand and wrist",
      link: "https://www.conmed.com/en-us/specialties-and-techniques/specialties/orthopedics/hand-and-wrist",
      linkText: "View More",
      img: HandAndWrist,
    },
    {
      name: "ABLATION , FLUID MANAGEMENT AND RESECTION ",
      link: "https://www.conmed.com/en-US/Products/Resection_Fluid_Management_and_Ablation",
      linkText: "View More",
      img: ABLATION,
    },
    {
      name: "IMAGING AND VISUALIZATON",
      link: "https://www.conmed.com/en-US/Landing-Pages/Looking-Glass",
      linkText: "View More",
      img: IMAGINGVISUALIZATON,
    },
    {
      name: "Hall Powered Instruments",
      link: "https://www.conmed.com/en-US/Products/Surgical-Power-Tools",
      linkText: "View More",
      img: HallPoweredInstruments,
    },
  ];
  return (
    <main>
      <section className="new-cat-banner py-36 px-7">
        <div className="max-w-[1382px]  mx-auto flex flex-col-reverse sm:flex-row items-center">
          <div className="w-full xl:w-[50%] xl:pl-[15%] sm:pr-5 xl:pr-0">
            <h2 className="text-[#0d1317] text-[45px] sm:text-[51px] xl:text-[64px] leading-[53px] xl:leading-[64px] mt-[30px] sm:mt-0  font-medium tracking-[-3px]">
              Explore what we <br /> can do together
            </h2>
            <p className="text-[#5b5b5b] text-2xl font-medium mt-3">
              ให้เราช่วยคุณค้นหาสิ่งที่คุณต้องการ
            </p>
          </div>
          <div className="w-full xl:w-[50%]">
            <img src={NewCatHeroImage} alt="" />
          </div>
        </div>
      </section>

      <section className="my-[120px]">
        <div className="max-w-[1350px] mx-auto">
          <h2 className="text-[#003190] text-4xl font-bold text-center">
            อุปกรณ์ทางการแพทย์
          </h2>
          <div className="flex gap-3 xl:gap-6 flex-col sm:flex-row flex-wrap sm:pl-3 xl:pl-7 mt-[50px] xl:mt-[80px] mx-5">
            {category.map((item) => (
              <div className="bg-[#E6F0EC] w-full sm:w-[31.33%] py-[50px] px-[36px] pb-[0px] rounded-[20px] min-h-[450px]">
                <h2 className="text-[#003190] text-[21px] xl:text-4xl font-semibold uppercase">
                  {item.name}
                </h2>
                <a
                  href={item.link}
                  className="flex items-center font-semibold text-[16px] text-[#003190] mt-3"
                >
                  <span className="mr-2 underline">{item.linkText}</span>

                  <svg
                    width="12"
                    height="auto"
                    viewBox="-5 0 25 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m3.454.57 10.848 10.424.09.08c.363.35.576.813.608 1.364l-.002.185c-.03.49-.243.954-.664 1.354l.005-.008L3.454 24.431a2.061 2.061 0 0 1-2.845 0 1.964 1.964 0 0 1 0-2.844l9.403-9.03L.609 3.413a1.964 1.964 0 0 1 0-2.844 2.061 2.061 0 0 1 2.845 0Z"
                      fill="#003190"
                    />
                  </svg>
                </a>
                <div className="text-center align-middle mt-[50px]">
                    <img src={item.img} className="mx-auto" alt="" />
                </div>
               
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default NewCategories;
