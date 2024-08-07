import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { removeFromCart } from "../reducer/user";
import { useDispatch } from "react-redux";

function Panier() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);
  console.log(cart);

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += parseFloat(cart[i].prix);
  }
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  return (
    <div class="w-full h-full  flex flex-col items-center justify-center">
      <div class="w-2/3 h-2/3  flex-col flex items- justify-center relative">
        <div class=" text-5xl"> Cart</div>
        <div class=" rounded-md  w-full h-full mt-10 overflow-y-scroll  bg-zinc-100">
          {cart.map((item, index) => (
            <ul key={index} className="p-5">
              <li className="flex items-center justify-around rounded-md bg-zinc-300 py-5">
                <img
                  src={item.img}
                  className="w-auto max-h-28 h-auto ml-5 shadow-xl"
                  alt={item.name}
                ></img>
                <div className="text-2xl ">{item.name}</div>
                <div>Price: {item.prix}$</div>
                <div>Quantity: 1</div>
                <div>See Product</div>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleRemoveFromCart(item)}
                  class="cursor-pointer w-5 "
                />
              </li>
            </ul>
          ))}
        </div>
        <div class="w-full flex justify-end items-center pt-10">
          {" "}
          <div class="text-2xl ">Subtotal : {totalPrice}$</div>
          <div className=" ml-10 text-base cursor-pointer border-solid border-2 border-black rounded-md py-2 flex items-center z-10 bg-zinc-100 justify-center  w-40 hover:bg-customBlue hover:text-white hover:transition hover:border-white ">
            CHECKOUT
            <FontAwesomeIcon className=" w-5 ml-2" icon={faCartShopping} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panier;
