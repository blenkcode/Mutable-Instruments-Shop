import styles from "../styles/Home.module.css";
import Header from "./Header";
import Section1 from "./Section1";
import Shop from "./Shop";
import Footer from "./Footer";
import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";

function Home() {
  const acceuilRef = useRef(null);
  const shopRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (router.query.scrollTo === "shop" && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.query]);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="scrollbar-hide">
      <main className="flex flex-col bg-zinc-100 ">
        <Header
          scrollToAcceuil={() => scrollToSection(acceuilRef)}
          scrollToWorks={() => scrollToSection(shopRef)}
        />
        <Section1
          scrollToWorks={() => scrollToSection(shopRef)}
          ref={acceuilRef}
        />
        <Shop ref={shopRef} />
        <Footer />
      </main>
    </div>
  );
}

export default Home;
