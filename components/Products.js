import styles from "../styles/Home.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Products() {
  const name = useSelector((state) => state.user.value.name);
  const fonction = useSelector((state) => state.user.value.fonction);
  const features = useSelector((state) => state.user.value.feature);
  const prix = useSelector((state) => state.user.value.prix);
  const spec = useSelector((state) => state.user.value.spec);
  const imgp = useSelector((state) => state.user.value.imgp);
  return (
    <div class="mt-36 flex w-full">
      <div class="w-1/2 flex flex-col justify-center ">
        <div class="w-full flex flex-col items-center justify-center">
          {" "}
          <div class="flex">
            {" "}
            <h4 class="text-4xl mb-10 mr-5">{name}</h4>
            <h4 class="text-4xl mb-10">{fonction}</h4>
          </div>
          <img src={imgp} class="w-3/5 rounded-md shadow-2xl"></img>
        </div>
      </div>
      <div class="w-1/2 pr-36 mt-24 relative">
        <h4 class=" text-2xl mb-5">Features</h4>

        <div class="mb-10">{features}</div>

        <div>
          <h4 class=" text-2xl mb-5">Specifications</h4>
          <div>{spec}</div>
          <div class="absolute bottom-0 ">
            <div class=" mb-7">Price:{prix}</div>
            <div className="text-base cursor-pointer border-solid border-2 border-black rounded-md py-2 flex items-center bg-zinc-100 justify-center  w-48  ">
              ADD TO CART
              <FontAwesomeIcon className="w-5 ml-2" icon={faCartShopping} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
