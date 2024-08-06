import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
function Header() {
  const router = useRouter();
  const handleRouter = () => {
    router.push("/panier");
  };
  const handleRouterh = () => {
    router.push("/");
  };

  return (
    <div class="bg-zinc-300 fixed w-full h-20 flex justify-between items-center z-20">
      <div class="h-full flex items-center">
        <img
          src="./logo2.webp "
          onClick={() => handleRouterh()}
          class="h-20 px-2 py-2 rounded-md cursor-pointer"
        ></img>
      </div>
      <ul class="flex h-fullitems-center justify-center text-lg">
        <li class="px-8 mx-8 cursor-pointer " onClick={() => handleRouterh()}>
          Home
        </li>
        <li class="px-8 mx-8 cursor-pointer">Favoris</li>
        <li class="px-8 mx-8 cursor-pointer" onClick={() => handleRouter()}>
          Panier
        </li>
      </ul>
    </div>
  );
}

export default Header;
