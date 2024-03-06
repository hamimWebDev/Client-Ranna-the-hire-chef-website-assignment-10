import React from "react";

const ImageSlider = () => {
  return (
    <div className="hidden md:block">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/friied-eggs-with-vegetables_2829-10927.jpg?t=st=1709665687~exp=1709669287~hmac=a93fe2ccd97976b32f366368ac8e079f9218a483e11520e28f6e09996bc84902&w=1380"
            className="w-full h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg?t=st=1709666638~exp=1709670238~hmac=8745b738e7238d728df375bb28cc10db0f43231ad51c7d64bb2f5f3b6ceb80ad&w=1380"
            className="w-full h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?t=st=1709666910~exp=1709670510~hmac=b19e4e466ba320348e4439fcff81002009c6568e6a90bc7f9b0992bfd02c6031&w=996"
            className="w-full h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://img.freepik.com/free-photo/boiling-cauldron-simmers-hearty-vegetable-soup-recipe-generated-by-ai_188544-10271.jpg?t=st=1709667033~exp=1709670633~hmac=95aca92a1c7ced79929959a76d96ebe8bec499e8a19874540e6f993aaf7b18c5&w=1060"
            className="w-full h-[650px]"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
