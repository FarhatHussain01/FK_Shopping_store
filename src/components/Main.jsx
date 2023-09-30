import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Main = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        // console.log(data);
      });
  }, []);

  return (
    <div className="container mx-auto  mt-8 rounded flex flex-wrap justify-center gap-5">
      {data.map((data) => {
        return <ProductsCard data={data} key={data.id} />;
      })}
    </div>
  );
};

export default Main;
