import { useRouter } from "next/router";

import { faBagShopping, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Header({ scrollToAcceuil, scrollToWorks }) {
  const router = useRouter();

  const handleRouter = () => {
    router.push("/panier");
  };

  const handleRouterh = () => {
    router.push("/");
  };
  const handleRouterf = () => {
    router.push("/favorites");
  };

  const handleShopClick = () => {
    if (router.pathname === "/") {
      if (typeof scrollToWorks === "function") {
        scrollToWorks();
      }
    } else {
      router
        .push({
          pathname: "/",
          query: { scrollTo: "shop" },
        })
        .then(() => {
          if (typeof scrollToWorks === "function") {
            setTimeout(scrollToWorks, 100); // Adjust timeout as needed
          }
        });
    }
  };

  return (
    <div className="bg-zinc-300 fixed w-full lg:h-20 h-14 flex justify-end items-center z-20">
      <div className="h-full flex items-center lg:w-fit w-0 absolute -top-full lg:-top-0 left-0">
        <img
          src="./logo.jpeg"
          onClick={() => handleRouterh()}
          className="h-20 px-2 py-2 rounded-md cursor-pointer"
        />
        <div className=" lg:text-xl text-sm font-medium mr-2 ">Mutable </div>
        <div className="lg:text-xl text-sm ">Instruments</div>
      </div>
      <ul className="flex h-full items-center justify-between w-full lg:px-0 px-5 lg:w-fit lg:text-base text-sm">
        <li
          className="lg:px-8 lg:mx-8 cursor-pointer"
          onClick={() => handleRouterh()}
        >
          Home
          <FontAwesomeIcon className="lg:ml-3 ml-1" icon={faHouse} />
        </li>
        <li
          className="lg:px-8 lg:mx-8 cursor-pointer"
          onClick={handleShopClick}
        >
          Shop
          <FontAwesomeIcon className="lg:ml-3 ml-1" icon={faBagShopping} />
        </li>
        <li
          onClick={() => handleRouterf()}
          className="lg:px-8 lg:mx-8 cursor-pointer"
        >
          Favorites{" "}
          <FontAwesomeIcon className="lg:ml-3 ml-1" icon={faHeartSolid} />
        </li>
        <li
          className="lg:px-8 lg:mx-8 cursor-pointer"
          onClick={() => handleRouter()}
        >
          Cart
          <FontAwesomeIcon className="lg:ml-3 ml-1" icon={faCartShopping} />
        </li>
      </ul>
    </div>
  );
}

export default Header;
