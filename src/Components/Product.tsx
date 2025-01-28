import React from "react";
import decrement from "../assets/svg/Frame 1000001561.svg";
import increment from "../assets/svg/Frame 1000001561 (1).svg";
import strelka from "../assets/svg/стрелка (1).svg";

interface ItemProps {
  item: {
    name: string;
    price: number;
    weight: number;
    img: string;
  };
}

const Peoduct: React.FC<ItemProps> = ({item}) => {
  return (
    <div
      className="flex mb-[30px] h-[420px] flex-col gap-[16px] rounded-[24px] p-[16px] bg-[white]"
    >
      <img
        className="rounded-[12px]  bg-cover w-full h-[184px]"
        src={item.img}
        alt=""
      />

      <div className="flex flex-col gap-3">
        <h1
          style={{ fontFamily: 'Nunito", "sans-serif' }}
          className="font-[600] text-[16px]"
        >
          {item.name}
        </h1>
        <p className="text-[12px] font-[400] text-[#797979]">
          Вес : {item.weight} кг
        </p>
        <div className="flex items-center justify-between ">
          <h1
            style={{ fontFamily: 'Nunito", "sans-serif' }}
            className="font-[700] text-[20px]"
          >
            {item.price} c
          </h1>
          <div className="flex items-center gap-[5px] rounded-full  p-[4px] border border-[#EEEEEE]">
            <div className="rounded-full flex items-center cursor-pointer justify-center text-[#797979] w-[24px] h-[24px] bg-[#ECECEC]">
              <img src={increment} alt="" />
            </div>
            <p className=" text-[#797979] mx-2">1</p>
            <div className="rounded-full flex items-center justify-center cursor-pointer text-[#797979] w-[24px] h-[24px] bg-[#ECECEC]">
              <img src={decrement} alt="" />
            </div>
          </div>
        </div>
        <button className="bg-white w-full border  border-[#F0F0F0]  pl-[16px]  h-[48px] cursor-pointer pr-1 rounded-full text-[14px] font-[500] justify-between flex items-center gap-[12px]">
          В корзину
          <img src={strelka} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Peoduct;
