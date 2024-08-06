import styles from "../styles/Home.module.css";

function Section1() {
  return (
    <div class=" flex mt-48 justify-center items-center">
      <div class="w-6/12   justify-center h-3/4 flex flex-col  pl-10  ">
        <h3 class=" text-7xl mb-8">Unleash your creativity </h3>
        <p class=" py-10 text-2xl w-4/6 mb-0 ">
          Open source Eurorack modules designed to reach organics and unique
          sound-scapes. <br></br>
          <br></br>Inspired by a whole generation of composers and free-minded
          producers.
          <a class=" text-xl cursor-pointer flex items-center my-8 underline">
            Learn more <img src="./more.png" class=" mt-1 w-4 h-4 ml-3"></img>
          </a>
        </p>

        <div class=" cursor-pointer text-x border-solid border-2 border-black rounded-md w-fit px-4 py-2 flex items-center justify-center shadow-lg">
          BROWSE PRODUCTS{" "}
          <img src="./down-chevron.png" class="w-4 h-4 ml-3"></img>
        </div>
      </div>

      <div class="flex flex-col justify-center items-center relative w-4/12 h-3/4 mr-10  ">
        {" "}
        <img
          src="./cover 1.png"
          class=" z-0 rounded-md mb-10 shadow-lg  "
        ></img>
        <img
          src="./cover2.png"
          class=" z-0 rounded-md mb-10 shadow-lg   "
        ></img>
        <img src="./cover3.png" class=" z-0 rounded-md mb-10 shadow-lg "></img>
      </div>
    </div>
  );
}

export default Section1;
