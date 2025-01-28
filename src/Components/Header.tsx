import React from "react";
import Container from "../shared/helpers/Container";
import image from "../assets/img/image 292.png";
import icon from "../assets/svg/Frame 1171274970.svg";
import cart from "../assets/svg/Bag 2.svg";
import user from "../assets/svg/Bag 2 (1).svg";
import strelka from "../assets/svg/стрелка.svg";

const Header: React.FC = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className="w-full h-auto py-[30px] bg-cover bg-center"
    >
      <Container>
        <div className="flex flex-col gap-[240px]">
          <div className="flex items-center justify-between ">
            <div className="bg-white px-[16px] rounded-[10px] py-[7.4px] ">
              <img src={icon} alt="" />
            </div>
            <div className="py-[12px] bg-white text-[15px] font-[600] rounded-[16px] px-[32px] flex items-center gap-[48px]">
              <label className=" cursor-pointer  hover:underline text-[#93A27C]">
                Главная
              </label>
              <label className=" cursor-pointer  hover:underline text-[#2F2F2F]">
                О нас
              </label>
              <label className=" cursor-pointer hover:underline text-[#2F2F2F]">
                Новости
              </label>
              <label className=" cursor-pointer hover:underline text-[#2F2F2F]">
                Каталог
              </label>
            </div>
            <div className="flex items-center gap-[10px]">
              <div className="rounded-full  flex cursor-pointer items-centyer p-2 justify-center bg-white border border-[#ECECEC] w-[44px] h-[44px]">
                <img src={cart} alt="" />
              </div>
              <div className="rounded-full flex cursor-pointer items-centyer p-2 justify-center bg-white border border-[#ECECEC] w-[44px] h-[44px]">
                <img src={user} alt="" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[84px] mb-[314px]">
            <h1 style={{ fontFamily: '"Montserrat Alternates", sans-serif' }} className=" text-[52px]   font-bold  text-white w-[600px]">
              Ваш путеводитель в области сырья
            </h1>
            <div className="flex items-center gap-[34px]">
              <input
                className="bg-white w-[318px] font-[600] py-[14px] px-[18px] rounded-[16px]"
                type="text"
                placeholder="Найти..."
              />
              <button className="bg-white pl-[16px] h-[48px] cursor-pointer pr-1 rounded-[16px] text-[14px] font-[500] flex items-center gap-[12px]">
                Заказать звонок
                <img src={strelka} alt="" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
