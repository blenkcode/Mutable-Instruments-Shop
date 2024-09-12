import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { product, addToCart } from "../reducer/user";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Products() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const name = useSelector((state) => state.user.value.name);
  const fonction = useSelector((state) => state.user.value.fonction);
  const features = useSelector((state) => state.user.value.feature);
  const prix = useSelector((state) => state.user.value.prix);
  const spec = useSelector((state) => state.user.value.spec);
  const img = useSelector((state) => state.user.value.img);
  const imgp = useSelector((state) => state.user.value.imgp);
  const item = { name: name, prix: prix, img: img };
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setIsModalVisible(true);
    setProduct(item.name);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 5000);
  };
  return (
    <div class="lg:mt-48 mt-20 flex w-full lg:flex-row flex-col">
      <div class="lg:w-1/2 flex flex-col justify-center ">
        <div class="w-full flex flex-col items-center justify-center">
          {" "}
          <img src={imgp} class="lg:w-3/5 rounded-md shadow-2xl"></img>
        </div>
      </div>
      <div class="lg:w-1/2 lg:pr-36 mt-0 px-5 lg:px-0 relative flex flex-col justify-start">
        <div class="flex lg:flex-row flex-col justifitems-center">
          <h4 class="text-4xl mb-10 lg:mt-0 mt-10 mr-5">{name}</h4>
          <h4 class="text-4xl mb-10">{fonction}</h4>
        </div>
        <h4 class=" text-2xl mb-5">Features</h4>

        <div class="mb-10">{features}</div>

        <div>
          <h4 class=" text-2xl mb-5">Specifications</h4>
          <div>{spec}</div>
          <div class="lg:absolute bottom-0 mb-10 lg:mb-0 ">
            <div class=" mb-7">Price: {prix}$</div>
            <div
              onClick={() => handleAddToCart(item)}
              className="text-base cursor-pointer border-solid border-2 border-black rounded-md py-2 flex items-center z-10 bg-zinc-100 justify-center  w-40 hover:bg-customBlue hover:text-white hover:transition hover:border-white "
            >
              ADD TO CART
              <FontAwesomeIcon className="w-5 ml-2" icon={faCartShopping} />
            </div>
          </div>
        </div>
      </div>
      {isModalVisible && (
        <div className="fixed bottom-20 right-20 z-20">
          <div className="bg-customBlue text-white p-5 rounded shadow-lg">
            <p>
              {product} added to cart successfully!{" "}
              <FontAwesomeIcon className="w-5 ml-2" icon={faCartShopping} />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
