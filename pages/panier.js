import Header from "../components/Header";
import Panier from "../components/Panier";

function panier() {
  return (
    <main class=" flex flex-col bg-zinc-200 w-full h-lvh">
      <Header></Header>
      <Panier></Panier>
    </main>
  );
}

export default panier;
