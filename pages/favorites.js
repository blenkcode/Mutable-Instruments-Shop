import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { removeFromCart, addToCart } from "../reducer/user";
import { useDispatch } from "react-redux";
import Header from "../components/Header";
import { useState } from "react";
function favorites() {
  const dispatch = useDispatch();
  const favoris = useSelector((state) => state.user.favoris);
  console.log(favoris);
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setIsModalVisible(true);
    setName(item.name);
    setTimeout(() => {
      setIsModalVisible(false);
    }, 4000);
  };
  const [name, setName] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="w-full h-lvh">
      <Header></Header>
      <div className="flex flex-col items-center justify-end pt-44">
        <div class=" text-5xl mb-20 flex justify-center items-center">
          {" "}
          <img src="./down-chevron.png" class="w-4 h-4 mr-5 mt-5"></img>
          Favorites{" "}
          <img src="./down-chevron.png" class="w-4 h-4 ml-5 mt-5"></img>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
          {favoris.map((item) => {
            return (
              <div
                key={item.id}
                className="rounded-md bg-zinc-300 w-64 h-auto px-4 pt-4 shadow-inner  relative m-10 "
              >
                <div>
                  <img
                    className="w-auto h-auto mx-auto shadow-2xl max-h-64 group-hover:blur-md transition duration-500 ease-in-out"
                    src={item.img}
                    alt={item.fonction}
                  />

                  <div className="flex flex-col items-center py-5">
                    <div className="text-lg group-hover:blur-md transition duration-500 ease-in-out">
                      {item.fonction}
                    </div>
                    <div className="text-lg mt-2 group-hover:blur-md transition duration-500 ease-in-out">
                      {item.prix}$
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center py-5 mb-0 mt-0 z-10">
                  <div
                    onClick={() => handleAddToCart(item)}
                    className="text-base cursor-pointer border-solid border-2 border-black rounded-md py-2 flex items-center z-10 bg-zinc-100 justify-center  w-40 hover:bg-customBlue hover:text-white hover:transition hover:border-white "
                  >
                    ADD TO CART
                    <FontAwesomeIcon
                      className="w-5 ml-2"
                      icon={faCartShopping}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {isModalVisible && (
        <div className="fixed bottom-20 right-20 z-20">
          <div className="bg-customBlue rounded-md text-white p-5  shadow-lg">
            <p>
              {name} is in your cart!{" "}
              <FontAwesomeIcon className="w-5 ml-2" icon={faCartShopping} />
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default favorites;
