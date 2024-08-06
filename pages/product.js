import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Products from "../components/Products";

function product() {
  return (
    <div>
      <main class=" flex flex-col bg-zinc-100 w-full h-lvh">
        <Header></Header>
        <Products></Products>
      </main>
    </div>
  );
}

export default product;
