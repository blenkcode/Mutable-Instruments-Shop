import React, { useRef, useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import Section1 from "./Section1";
import Shop from "./Shop";
import Footer from "./Footer";
import { useRouter } from "next/router";

function Home() {
  const acceuilRef = useRef(null);
  const shopRef = useRef(null);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (router.query.scrollTo === "shop" && shopRef.current) {
      shopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.query]);

  useEffect(() => {
    const images = document.querySelectorAll("img");
    let imagesLoaded = 0;

    images.forEach((img) => {
      if (img.complete) {
        imagesLoaded++;
      } else {
        img.addEventListener("load", () => {
          imagesLoaded++;
          if (imagesLoaded === images.length) {
            setIsLoading(false);
          }
        });
      }
    });

    if (imagesLoaded === images.length) {
      setIsLoading(false);
    }
  }, []);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <main className="w-full flex flex-col bg-zinc-100  ">
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
  );
}

export default Home;
