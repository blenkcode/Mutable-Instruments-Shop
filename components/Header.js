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
    <div className="bg-zinc-300 fixed w-full h-20 flex justify-between items-center z-20">
      <div className="h-full flex items-center">
        <img
          src="./logo.jpeg"
          onClick={() => handleRouterh()}
          className="h-20 px-2 py-2 rounded-md cursor-pointer"
        />
        <div className=" text-3xl font-medium mr-2 ">Mutable </div>
        <div className="text-3xl">Instruments</div>
      </div>
      <ul className="flex h-full items-center justify-center text-lg">
        <li
          className="px-8 mx-8 cursor-pointer"
          onClick={() => handleRouterh()}
        >
          Home
          <FontAwesomeIcon className="ml-3" icon={faHouse} />
        </li>
        <li className="px-8 mx-8 cursor-pointer" onClick={handleShopClick}>
          Shop
          <FontAwesomeIcon className="ml-3" icon={faBagShopping} />
        </li>
        <li
          onClick={() => handleRouterf()}
          className="px-8 mx-8 cursor-pointer"
        >
          Favorites <FontAwesomeIcon className="ml-3" icon={faHeartSolid} />
        </li>
        <li className="px-8 mx-8 cursor-pointer" onClick={() => handleRouter()}>
          Cart
          <FontAwesomeIcon className="ml-3" icon={faCartShopping} />
        </li>
      </ul>
    </div>
  );
}

export default Header;
