import React from "react";
import Container from "../shared/helpers/Container";
import strelka from "../assets/svg/стрелка (1).svg";
import img1 from "../assets/img/b4b0fc9a4b2cbe07d424902c0a89a9a5.jpeg";
import img2 from "../assets/img/image 347.png";
import img3 from "../assets/img/image 349.png";
import img4 from "../assets/img/image 350.png";

const Products: React.FC = () => {
  const products = [
    {
      name: "Декоративные изделия",
      image: img1,
    },
    {
      name: "Молочная продукция",
      image: img2,
    },
    {
      name: "Ингредиенты",
      image: img3,
    },
    {
      name: "Покрытия и наполнители",
      image: img4,
    },
  ];
  return (
    <div className="bg-[#FAF5F1] flex flex-col gap-[40px] py-[72px]">
      <Container>
        <h1
          style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
          className="text-[#493829] text-[56px] font-[700] w-[680px] mb-[40px]"
        >
          Просмотр товаров по <span className="text-[#B89776]">категориям</span>
        </h1>
        <div className="grid grid-cols-4 gap-[40px]">
          {products.map((item, index) => (
            <div
              key={index}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.7)),url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center top",
                backgroundRepeat: "no-repeat",
              }}
              className="flex flex-col p-[20px] bg-cover gap-[20px] rounded-[20px] h-[396px] items-start justify-end"
            >
              <h1 style={{ fontFamily: '"Montserrat Alternates", sans-serif' }} className="font-[700] text-white text-start text-[20px]">
                {item.name}
              </h1>
              <button className="bg-white w-full  pl-[16px]  h-[48px] cursor-pointer pr-1 rounded-full text-[14px] font-[500] justify-between flex items-center gap-[12px]">
                Подробнее
                <img src={strelka} alt="" />
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Products;
