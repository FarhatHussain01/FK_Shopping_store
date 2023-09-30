import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { slug } = useParams();
  // const { history } = useHistory();
  const [product, setProduct] = React.useState(null);

  // Fetchind data from api
  // Fetch data from API when the component mounts
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${slug}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch product data");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className=" container m-auto flex flex-col md:flex-row mt-8 items-center p-8  gap-4 md:gap-10 ">
      {/* <button
        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full transition duration-300 hover:bg-gray-300"
        // onClick={() => history.goBack()}
      >
        Back
      </button> */}
      {/* <span className="font-bold text-xl text-orange-200">
        {product.category}
      </span> */}
      <div className="Product--pic flex1">
        <img src={product.image} alt="heloooo" className="max-w-md max-h-md" />
      </div>

      <div className="product--details flex flex-col gap-2 mt-4 justify-center flex1">
        <h1 className="md:text-3xl my-2 text-2xl font-bold  md:max-w-xl">
          {product.title}
        </h1>
        <p className="text-md max-w-xl text-gray-400 overflow-hidden">
          {product.description}
        </p>
        <span className="text-green-600 font-bold text-xl">
          ${product.price}
        </span>
        <span className="text-red-400 font-bold text-xl">
          ratings - {product.rating.rate}
        </span>
        <button className="bg-blue-600 rounded-full text-xl py-3 px-10">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
