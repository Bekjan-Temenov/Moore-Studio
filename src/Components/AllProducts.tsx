import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Container from "../shared/helpers/Container";
import img1 from "../assets/img/Снимок экрана 2024-09-25 в 19.01.47 1 (1).png";
import img2 from "../assets/img/Снимок экрана 2024-09-25 в 19.01.47 1 (2).png";
import img3 from "../assets/img/Снимок экрана 2024-09-25 в 19.01.47 1.png";
import img4 from "../assets/img/DSC08511 3.png";
import next from "../assets/svg/Frame 2147224137.svg";
import prev from "../assets/svg/Frame 2147224135.svg";
import Product from "./Product";

const AllProducts: React.FC = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const products = [
    {
      id: 1,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 550,
      weight: 150,
      img: img1,
    },
    {
      id: 2,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 750,
      weight: 150,
      img: img2,
    },
    {
      id: 3,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 250,
      weight: 150,
      img: img3,
    },
    {
      id: 4,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 950,
      weight: 150,
      img: img4,
    },
    {
      id: 4,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 950,
      weight: 150,
      img: img4,
    },
    {
      id: 3,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 250,
      weight: 150,
      img: img3,
    },
    {
      id: 2,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 750,
      weight: 150,
      img: img2,
    },
    {
      id: 1,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 550,
      weight: 150,
      img: img1,
    },
    {
      id: 1,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 550,
      weight: 150,
      img: img1,
    },
    {
      id: 2,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 750,
      weight: 150,
      img: img2,
    },
    {
      id: 3,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 250,
      weight: 150,
      img: img3,
    },
    {
      id: 4,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 950,
      weight: 150,
      img: img4,
    },
    {
      id: 4,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 950,
      weight: 150,
      img: img4,
    },
    {
      id: 3,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 250,
      weight: 150,
      img: img3,
    },
    {
      id: 2,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 750,
      weight: 150,
      img: img2,
    },
    {
      id: 1,
      name: "Шпатель кондитерский пластиковый 254мм 50 SG250B",
      price: 550,
      weight: 150,
      img: img1,
    },
  ];

  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected);
  };

  return (
    <div className="bg-[#F4F4F4] flex flex-col items-start gap-4 py-[70px]">
      <Container>
        <p
          style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
          className="text-[18px] text-[#93A27C] font-[500]"
        >
          Вам могут понравится
        </p>
        <h1
          style={{ fontFamily: '"Montserrat Alternates", sans-serif' }}
          className="font-[700] mb-7 text-[#2E2E2E] text-[56px] w-[600px]"
        >
          Рекомендуемые товары
        </h1>
        <div className="grid grid-cols-4 gap-[40px] ">
          {currentItems.map((item, index) => (
            <Product key={index} item={item} />
          ))}
        </div>
          <ReactPaginate
            previousLabel={<img src={next} alt="icon"/>}
            nextLabel={<img src={prev} alt="icon"/>}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={"flex justify-center items-center   mt-4 gap-2"}
            pageClassName={"px-3 py-1 border border-gray-300   rounded-full"}
            previousClassName={""}
            nextClassName={""}
            activeClassName={"bg-[#93A27C]  text-white"}
            />
      </Container>
    </div>
  );
};

export default AllProducts;
