import styles from "../styles/Home.module.css";

function Section1({ scrollToWorks }) {
  return (
    <div className="flex lg:flex-row flex-col lg:mt-48 mt-32 justify-center items-center ">
      <div className="lg:w-6/12 w-full justify-center h-3/4 flex flex-col lg:pl-10 lg:px-0 px-5">
        <h3 className="lg:text-7xl text-5xl mb-8 font-normal">
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
        <p className="py-10 text-2xl lg:w-4/6 w-full mb-0">
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
          className="cursor-pointer text-x border-solid border-2 border-black rounded-md w-fit px-4 py-2 flex items-center justify-center shadow-lg lg:mb-0 mb-20"
        >
          BROWSE PRODUCTS
          <img src="./down-chevron.png" className="w-4 h-4 ml-3" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  lg:w-4/12 h-3/4 lg:mr-10 lg:px-0 px-5">
        <img
          src="https://res.cloudinary.com/dmijime4v/image/upload/v1725830008/monx43j4om8xweekykkq.png"
          className={styles.img1}
        />

        <img
          src="https://res.cloudinary.com/dmijime4v/image/upload/v1725830042/riwcc1qb6p56lkx6h42p.png"
          className={styles.img2}
        ></img>
        <img
          src="https://res.cloudinary.com/dmijime4v/image/upload/v1725830074/snmbtldmyrglebzfw6g4.png"
          className={styles.img3}
        />
      </div>
    </div>
  );
}

export default Section1;
