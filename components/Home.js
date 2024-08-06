import styles from "../styles/Home.module.css";
import Header from "./Header";
import Section1 from "./Section1";
import Shop from "./Shop";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <main class=" flex flex-col bg-zinc-100">
        <Header></Header>
        <Section1></Section1>
        <Shop></Shop>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default Home;
