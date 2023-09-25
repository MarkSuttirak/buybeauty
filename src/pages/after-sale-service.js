import React from "react";
import AfterSaleServiceImg from "../img/AfterSaleService.png";
import barcode from "../img/barcode.png";

function AfterSaleService() {
  return (
    <main>
      <section>
        <img src={AfterSaleServiceImg} className="w-full" alt="" />
      </section>

      <section className="max-w-[700px] mx-auto my-24 px-6">
        <h2 className="text-[#132573] text-[21px] sm:text-[43px] xl:text-[48px] font-bold ">
          ฝ่ายบริการลูกค้าและการให้บริการ
        </h2>
        <p className="text-[#2a3d53] text-2xl font-bold mb-[1.5em] mt-8">
          การให้บริการ
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-[#2a3d53] text-[17px] sm:text-2xl">
            การดูแลและบำรุงรักษาเครื่องมือแพทย์ Preventive maintenance
          </li>
          <li className="text-[#2a3d53] text-[17px] sm:text-2xl">ตรวจสภาพเครื่องมือแพทย์</li>
          <li className="text-[#2a3d53] text-[17px] sm:text-2xl">
            อบรมให้ความรู้การดูแลและซ่อมแซมเบื้องต้นกับเจ้าหน้าที่ผู้เกี่ยวข้อง
          </li>
        </ul>
        <p className="text-[#2a3d53] text-2xl font-bold mb-[1.5em] mt-8">
          การซ่อมสินค้า
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-[#2a3d53] text-[17px] sm:text-2xl">ซ่อมในประเทศ</li>
          <li className="text-[#2a3d53] text-[17px] sm:text-2xl">การติดต่อ</li>
        </ul>
        <p className="text-[#2a3d53] text-2xl font-bold mb-[1.5em] mt-8">
          การซ่อมสินค้า
        </p>
        <div>
          <p className="text-[#2a3d53] text-[17px] sm:text-2xl">
            โปรดติดต่อพร้อมข้อมูลต่อไปนี้
          </p>
          <form action="" className="meditime-form">
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <div className="mt-1">
                  <input
                    type="text"
                    name="hospital"
                    id="hospital"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="ชื่อโรงพยาบาล/แผนก"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <div className="mt-1">
                  <input
                    type="text"
                    name="name-of-informant"
                    id="name-of-informant"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="ชื่อผู้แจ้งเรื่อง"
                  />
                </div>
              </div>

              <div className="sm:col-span-6 w-full">
                <div className="mt-1">
                  <input
                    name="product-name"
                    type="text"
                    autoComplete="product-name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    placeholder="ชื่อสินค้า"
                  />
                </div>
              </div>

              <div className="sm:col-span-6">
                <div className="mt-1">
                  <textarea
                    id="Problems-symptoms"
                    name="Problems-symptoms"
                    rows={7}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    defaultValue={""}
                    placeholder="ปัญหาอาการที่พบ"
                  />
                </div>
              </div>

              <div className=" sm:col-span-6">
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
          <div className="mt-14">
                <h2 className="text-[#132573] text-[21px] sm:text-[43px] xl:text-[48px] font-bold ">
                  ช่องทางการติดต่อฝ่ายบริการลูกค้า
                </h2>
                <ul className="list-disc list-inside space-y-2 mt-8">
                  <li className="text-[#2a3d53] text-[17px] sm:text-2xl">
                    ผู้แทนขายประจำพื้นที่ของท่าน
                  </li>
                  <li className="text-[#2a3d53] text-[17px] sm:text-2xl">โทร 02-718-3582-3</li>
                  <li className="text-[#2a3d53] text-[17px] sm:text-2xl">
                    Email : Center@meditime.co.th
                  </li>
                  <li className="text-[#2a3d53] text-[17px] sm:text-2xl">
                    Line OA : Meditime service
                  </li>
                </ul>
                <img src={barcode} className="ml-5" alt="" />
              </div>
        </div>
      </section>
    </main>
  );
}

export default AfterSaleService;
