import styles from "../styles/Home.module.css";

function Section1({ scrollToWorks }) {
  return (
    <div className="flex mt-48 justify-center items-center">
      <div className="w-6/12 justify-center h-3/4 flex flex-col pl-10">
        <h3 className="text-7xl mb-8 font-normal">
          Unleash <span className={styles.youy}>y</span>
          <span className={styles.youro}>o</span>
          <span className={styles.youru}>u</span>
          <span className={styles.yourr}>r</span>
          <span className={styles.c}> </span>
          <span className={styles.c}>c</span>
          <span className={styles.r}>r</span>
          <span className={styles.e}>e</span>
          <span className={styles.a}>a</span>
          <span className={styles.t}>t</span>
          <span className={styles.i}>i</span>
          <span className={styles.v}>v</span>
          <span className={styles.ii}>i</span>
          <span className={styles.tt}>t</span>
          <span className={styles.y}>y.</span>
        </h3>
        <p className="py-10 text-2xl w-4/6 mb-0">
          Open source Eurorack modules designed to reach organics and unique
          soundscapes. <br />
          <br />
          Inspired by an entire generation of composers and free-minded
          producers.
          <a
            href="https://pichenettes.github.io/mutable-instruments-documentation/"
            className="text-xl cursor-pointer flex items-center my-8 underline"
          >
            Learn more <img src="./more.png" className="mt-1 w-4 h-4 ml-3" />
          </a>
        </p>

        <div
          onClick={scrollToWorks}
          className="cursor-pointer text-x border-solid border-2 border-black rounded-md w-fit px-4 py-2 flex items-center justify-center shadow-lg"
        >
          BROWSE PRODUCTS
          <img src="./down-chevron.png" className="w-4 h-4 ml-3" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  w-4/12 h-3/4 mr-10">
        <img src="./cover 1.png" className={styles.img1} />

        <img src="./cover2.png" className={styles.img2}></img>
        <img src="./cover3.png" className={styles.img3} />
      </div>
    </div>
  );
}

export default Section1;
