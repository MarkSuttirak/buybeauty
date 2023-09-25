import React from "react";
import aboutUsBanner from "../img/aboutUsBanner.png";
import aboutUs from "../img/aboutUs.png";
import gmImage from "../img/gmImage.png";
import aboutusBottom from "../img/aboutusBottom.png";

function AboutUs() {
  return (
    <main>
      <section>
        <img src={aboutUsBanner} className="w-full" alt="" />
      </section>
      <section className="flex flex-wrap  flex-col sm:flex-row sm:flex-nowrap">
        <div className="w-full  sm:w-[20%]  xl:w-[38%]"></div>
        <div className="w-full sm:w-[80%] xl:w-[62%] flex py-[30px] bg-[#E6F0EC] -mt-[125px]">
          <div className="w-[30%] sm:w-[38%]">
            <h2 className="text-[#006b3d] text-[31px] sm:text-[52px] xl:text-[64px] dDinFont text-center">
              We are
            </h2>
          </div>
          <div className="w-[70%] sm:w-[62%] sm:pr-[8%]">
            <p className="text-[#006b3d] text-[16px] sm:text-[21px] xl:text-[26px] leading-[34px] xl:leading-[36px] font-medium">
              Empower medical product provider, to deliver particular outcome
              for patients, Explore what we can do together.
              <br />
              ผู้ให้บริการผลิตภัณฑ์ทางการแพทย์
              เพื่อส่งมอบผลลัพธ์ที่ดีที่สุดสำหรับผู้ป่วย ค้นหาสิ่งที่คุณต้องการ
            </p>
          </div>
        </div>
      </section>

      <section className="mt-[125px] max-w-[1270px] mx-auto ">
        <div className="mx-7 xl:mx-0">
        <h2 className="text-[#132573] text-[48px] font-bold text-center">
          การดูแลอย่างใกล้ชิด
        </h2>
        <img src={aboutUs} className="text-center mx-auto" alt="" />
        <p className="text-[#2a3d53] text-2xl leading-[36px] text-center mt-[30px]">
          บริษัทเมดิไทม์จำกัดดำเนินกิจการมาตั้งแต่ปี 2551
          โดยให้บริการเครื่องมือแพทย์ในประเทศไทย เราคือผู้เชี่ยวชาญสินค้าทางด้าน
          ออร์โธปิดิกส์ด้วยนวัตกรรมที่ดีที่สุด
          และการให้บริการที่ดีที่สุดเพื่อส่งต่อผลลัพธ์ที่ดีที่สุดแก่ผู้ป่วย
        </p>
        </div>
        
      </section>

      <section className="mt-[50px] mb-[200px] mx-7">
        <h2 className="text-[#132573] text-[26px] sm:text-[48px] font-bold text-center">
          เกี่ยวกับเมดิไทม์ <br />
          ผู้บริหาร
        </h2>
        <div className="max-w-[1270px] mx-auto flex flex-wrap flex-col sm:flex-row items-center mt-[80px]">
          <div className="w-full sm:w-[50%]">
            <img src={gmImage} alt="" />
          </div>
          <div className="w-full sm:w-[50%] mt-6 sm:mt-0">
            <h2 className="text-[#132573] text-[24px] leading-[36px] font-bold text-right">
              ธวัชชัย ประกอบ (General Manager)
            </h2>
            <h2 className="text-[#132573] text-[24px] leading-[36px] font-bold text-right mt-[20px]">
              “สิ่งที่บอกคุณค่า <br />
              คือการทำหน้าที่ได้อย่างสมบรูณ์”{" "}
            </h2>
          </div>
        </div>
        <div className="max-w-[1270px] mx-auto mt-[30px]">
          <p className="text-[#2a3d53] text-2xl leading-[36px] text-center mt-[50px]">
            “ผมและทีมงานบริษัทเมดิไทม์ตั้งใจทำหน้าที่ให้สมบูรณ์อย่างถึงที่สุดในบทบาทของเราเพื่อแสดงถึงคุณค่าในการนำนวัตกรรม
            เครื่องมือแพทย์ด้านออร์โธปิดิกส์
            และบริการที่ดีที่สุดมอบให้ลูกค้าในทุกๆโรงพยาบาลที่เราดูแลด้วยความตระหนักว่าเราคือส่วนหนึ่ง
            ของการรักษาเพื่อให้มั่นใจได้ว่าผลลัพธ์ของการรักษาจะดีที่สุด
            เพื่อคุณภาพชีวิตที่ดีขึ้นของคนไทย”
          </p>
          <img src={aboutusBottom} alt="" className="mt-[80px]" />
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
