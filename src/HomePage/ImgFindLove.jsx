import React from "react";
import HeaderHomePage from "./HeaderHomePage";
import FooterHomePage from "./FooterHomePage";

function ImgFindLove() {
  return (
    <div className="">
      <HeaderHomePage />
      <div className="flex justify-center items-center">
        <img src="Img_HomePage.jpg" className="w-full h-[30rem] object-cover md:w-[30rem] md:h-[37rem] md:object-cover" alt="img-profile" />
      </div>
      <FooterHomePage />
    </div>
  );
}

export default ImgFindLove;
