import React from "react";
import { Link } from "react-router-dom";

const ProductsCard = (props) => {
  const { title, image, price, rating, id } = props.data;

  return (
    <>
      <Link to={`/product-details/${id}`}>
        <div className="bg-white w-[200px] rounded-lg p-4 shadow m-4">
          <div className="product--img mb-2 flex flex-col items-between">
            <img src={image} alt="images" className="w-full h-[170px]" />
          </div>
          <div className="product-info p-2">
            <h2 className="title text-xl font-semibold overflow-hidden">
              {title}
            </h2>

            <div className="product--price--rating flex justify-between mt-3">
              <span className="product--price font-semibold text-teal-500">
                {price}
              </span>
              <span className="product--rating font-semibold text-red-700">
                {rating && `ratings - ${rating.rate}`}
              </span>
            </div>

            <button className="w-full bg-blue-700 rounded mt-2 text-white py-2 hover:bg-blue-900">
              Read More
            </button>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductsCard;
