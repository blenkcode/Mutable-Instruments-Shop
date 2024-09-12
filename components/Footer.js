function Footer() {
  return (
    <div class="bg-black w-full lg:h-80 h-fit text-white flex lg:flex-row flex-col">
      <div class="lg:w-1/3 px-10 py-10">
        <img src="./logo.jpeg" class="w-24 mb-5 cursor-pointer"></img>
        <div class="mb-3">
          Disclamer : This website is only for fun and tribute, anything can't
          be purchase.
        </div>

        <div>MUTABLE INSTRUMENTS. 2009 - 2022</div>
      </div>
      <div class="lg:w-1/5 px-10 py-10">
        <div class="text-xl mb-5">Compagny</div>
        <ul class="cursor-pointer">
          <li class="mb-3 ">About</li>
          <li class="mb-3">Mett the team</li>
          <li class="mb-3">BlaBlaBla</li>
        </ul>
      </div>
      <div class="lg:w-1/5 px-10 py-10">
        {" "}
        <div class="text-xl mb-5">Helpful Links</div>
        <ul class="cursor-pointer">
          <li class="mb-3">F.A.Q</li>
          <li class="mb-3">Portfolio</li>
          <li class="mb-3">LinkedIn</li>
          <li>GitHub</li>
        </ul>
      </div>
      <div class="lg:w-1/5 px-10 py-10">
        {" "}
        <div class="text-2xl mb-5">Legal</div>
        <ul class="cursor-pointer">
          <li class="mb-3">Accesibility</li>
          <li class="mb-3">Return Policy</li>
          <li class="mb-3">Refund Policy</li>
          <li class="mb-3">Hiring Statistics</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
