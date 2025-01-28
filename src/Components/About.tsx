import React from "react";
import Container from "../shared/helpers/Container";
import image from "../assets/img/DSC08511 3.png"

const About: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col gap-[47px] my-[100px]">
        <h1 style={{ fontFamily: '"Montserrat Alternates", sans-serif' }} className="text-[48px] text-[#2E2E2E] font-[700]">Мы помогаем местным кондитерам и шеф-поварам претворять в жизнь свои самые смелые кулинарные задумки</h1>
       <div className="flex  items-center gap-[13px] h-[503px] w-full">
        <div className="w-[456%] bg-[#93A27C] p-[30px] rounded-[15px] h-full flex-col flex items-center justify-end">
            <p className="text-[#FFFFFF] font-[400] text-[16px]"> - Мы предлагаем вам не  росто сырье, а экспертность и индивидуальный подход: всегда готовы помочь найти альтернативу, закрыть срочную потребность или предложить уникальное решение.</p>
        </div>
        <img className="w-full h-full bg-cover rounded-[15px]" src={image} alt="" />
        </div> 
      </div>
    </Container>
  );
};

export default About;
