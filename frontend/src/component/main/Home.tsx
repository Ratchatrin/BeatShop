import { useState } from "react";
import Footer from "../footer/Footer";
import Nav from "../header/Nav";
import "./home.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectProductFormNav, selectCategory } from "../redux/slicer.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Home() {
  const dispatch = useDispatch();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWindowWidth);
  return (
    <>
      <Nav></Nav>
      <section className="flex flex-col justify-center items-center bg-red-500">
        {windowWidth < 1024 ? (
          <>
            <div className="h-screen w-full">
              <section
                className={`flex justify-center items-center bg-cover bg-center w-full h-full bg-[url('https://www.trustedreviews.com/wp-content/uploads/sites/54/2024/04/SHACARRI_0180_16x9.png')]`}
              >
                <div className=" w-9/12">
                  <div className="w-fit flex flex-col justify-center text-white p-4 rounded-lg bg-slate-800/40 h-fit font-bold  text-4xl">
                    <p>Beats Solo 4</p>
                    <p>Stands Out.</p>
                    <p>Stays On.</p>
                    <Link to="/headphone">
                      <button
                        onClick={() => {
                          dispatch(selectCategory("Headphone"));
                          dispatch(selectProductFormNav("Beats Solo 4"));
                        }}
                        className="btn text-white bg-red-500 border-none w-5/12 text-xl btn-md mt-3 "
                      >
                        Shop
                      </button>
                    </Link>
                  </div>
                </div>
              </section>
            </div>
            <section className="flex flex-col justify-center items-center w-11/12 mt-10 max-w-md bg-white rounded-lg">
              <p className="text-3xl mb-5 mt-5 p-3 rounded-lg font-bold">
                New Arrival
              </p>
              <Swiper
                pagination={{
                  dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper rounded-lg "
              >
                <SwiperSlide>
                  <div className="card card-compact bg-base-100 shadow-xl ">
                    <Link
                      to="/headphone"
                      onClick={() => {
                        dispatch(selectProductFormNav("Beats Studio Pro"));
                        dispatch(selectCategory("Headphone"));
                      }}
                    >
                      <figure>
                        <img
                          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097"
                          alt="Image 1"
                        />
                      </figure>
                      <div className="card-body">
                        <div className="card-body p-3 ">
                          <h2 className="card-title  text-2xl flex flex-col-reverse justify-end">
                            Beats Studio Pro
                            <div className="badge bg-green-400 p-3">NEW</div>
                          </h2>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/headphone">
                    <div className="card card-compact bg-base-100 shadow-xl">
                      <Link
                        to="/headphone"
                        onClick={() => {
                          dispatch(selectProductFormNav("Beats Solo 4"));
                          dispatch(selectCategory("Headphone"));
                        }}
                      >
                        <figure>
                          <img
                            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW23?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1712255585028"
                            alt="Image 1"
                            className="w-7/12"
                          />
                        </figure>
                        <div className="card-body">
                          <div className="card-body p-3 ">
                            <h2 className="card-title  text-2xl flex flex-col-reverse justify-end">
                              Beats Solo 4
                              <div className="badge bg-green-400 p-3">NEW</div>
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/earbuds">
                    <div className="card card-compact bg-base-100 shadow-xl">
                      <Link
                        to="/earbuds"
                        onClick={() => {
                          dispatch(selectProductFormNav("Beats Studio Buds +"));
                          dispatch(selectCategory("Earbuds"));
                        }}
                      >
                        <figure>
                          <img
                            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1682361480584"
                            alt="Image 1"
                            className="w-7/12"
                          />
                        </figure>
                        <div className="card-body">
                          <div className="card-body p-3 ">
                            <h2 className="card-title  text-2xl flex flex-col-reverse justify-end">
                              Beats Studio Buds +<br />
                              <div className="badge bg-green-400 p-3">NEW</div>
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link to="/earbuds">
                    <div className="card card-compact bg-base-100 shadow-xl">
                      <Link
                        to="/earbuds"
                        onClick={() => {
                          dispatch(selectProductFormNav("Beats Studio Buds"));
                          dispatch(selectCategory("Earbuds"));
                        }}
                      >
                        <figure>
                          <img
                            src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1621538312000"
                            alt="Image 1"
                            className="w-7/12"
                          />
                        </figure>
                        <div className="card-body">
                          <div className="card-body p-3 ">
                            <h2 className="card-title text-2xl flex flex-col-reverse justify-end">
                              Beats Studio Buds
                              <div className="badge bg-green-400 p-3">NEW</div>
                            </h2>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </section>
            <section className="flex justify-center items-center w-11/12 max-w-md h-[400px] mt-5 rounded-xl bg-cover bg-left bg-[url('https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/studio-buds-plus/pdp/studiobudsplus-pdp-p01.jpg.large.2x.jpg')]">
              <div className="w-11/12 flex  flex-col justify-end items-center font-bold text-xl text-white ">
                <div className="bg-slate-800/40 p-2 rounded-lg">
                  <p>Explore</p>
                  <p>Wireless Earbuds</p>
                  <Link to="/earbuds">
                    <button
                      onClick={() => {
                        dispatch(selectCategory("Earbuds"));
                      }}
                      className="btn text-white bg-red-500  border-none w-8/12 text-xl btn-md mt-3 "
                    >
                      Shop
                    </button>
                  </Link>
                </div>
              </div>
            </section>
            <section className="flex justify-center items-center w-11/12 max-w-md h-[400px] mt-5 rounded-xl bg-cover bg-center bg-[url('https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/pdp/studiopro-pdp-p01.jpg.large.2x.jpg')]">
              <div className="w-11/12 flex flex-col  justify-end items-center font-bold text-xl text-white ">
                <div className="bg-slate-800/40 p-2 rounded-lg">
                  <p>Explore</p>
                  <p>Wireless Headphones</p>
                  <Link to="/headphone">
                    <button
                      onClick={() => {
                        dispatch(selectCategory("Headphone"));
                      }}
                      className="btn text-white bg-red-500  border-none w-8/12 text-xl btn-md mt-3 "
                    >
                      Shop
                    </button>
                  </Link>
                </div>
              </div>
            </section>
            <section className="flex flex-col justify-center items-center bg-white w-11/12 max-w-md m-5 font-bold shadow-2xl rounded-lg">
              <p className="text-2xl mt-2 mb-5">Seamless Shopping</p>
              <div className="flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 128 128"
                >
                  <path d="M125,28.7l-33.8-12c-0.8-0.3-1.6-0.2-2.3,0.1C87.8,17.3,29,38.1,29,38.1c-1.5,0.5-2.5,1.9-2.5,3.5v14c0,1.3,0.8,2.4,2,2.8 l7.8,2.8c2,0.7,4-0.7,4-2.8V46.7c0-1.6,1-3,2.5-3.5l53.1-18.4l19.2,6.8L63,49.9c0,0,0,0,0,0c-1.1,0.4-2,1.5-2,2.8v60.8L7,94.4V33.6 l58-20.5c1.6-0.6,2.4-2.3,1.8-3.8c-0.6-1.6-2.3-2.4-3.8-1.8L3,28.7c-1.2,0.4-2,1.6-2,2.8v65c0,1.3,0.8,2.4,2,2.8l60,21.2 c0.3,0.1,0.7,0.2,1,0.2c0.2,0,0.3,0,0.5,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.4-0.1c0,0,0,0,0,0l60-21.2c1.2-0.4,2-1.6,2-2.8v-65 c0,0,0,0,0,0C127,30.2,126.2,29.1,125,28.7z"></path>
                </svg>
                <div className="w-9/12 text-center">
                  <p className="text-xl mb-2">Fast and Free Delivery</p>
                  <p className="font-medium">
                    Enjoy free two-day delivery on most in-stock items.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                >
                  <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                </svg>
                <div className="w-9/12 text-center">
                  <p className="text-xl mb-2">In-Store Pickup</p>
                  <p className="font-medium">
                    Pick up your online order at an Apple Store near you.
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center mb-2">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="100"
                    height="100"
                    x="0"
                    y="0"
                    rx="30"
                    fill="transparent"
                    stroke="transparent"
                    stroke-width="0"
                    stroke-opacity="100%"
                    paint-order="stroke"
                  ></rect>
                  <svg
                    width="320"
                    height="320"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    x="95"
                    y="128"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="currentColor">
                      <path
                        fill="currentColor"
                        d="M7.5 2h14v9.5h-2V4h-2v5.618l-3-1.5l-3 1.5V4h-2v5.5h-2V2Zm6 2v2.382l1-.5l1 .5V4h-2Zm-5.065 9.25a1.25 1.25 0 0 0-.885.364l-2.05 2.05V19.5h5.627l5.803-1.45l3.532-1.508a.555.555 0 0 0-.416-1.022l-.02.005L13.614 17H10v-2h3.125a.875.875 0 1 0 0-1.75h-4.69Zm7.552 1.152l3.552-.817a2.56 2.56 0 0 1 3.211 2.47a2.557 2.557 0 0 1-1.414 2.287l-.027.014l-3.74 1.595l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 2.3-.948h.002h-.002h4.687a2.875 2.875 0 0 1 2.862 3.152ZM3.5 16.25H2v3.25h1.5v-3.25Z"
                      />
                    </g>
                  </svg>
                </svg>
                <div className="w-9/12 text-center">
                  <p className="text-xl mb-2">Easy Returns</p>
                  <p className="font-medium">
                    Return eligible items to Apple within 14 days of receipt.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <div className="h-screen w-full">
              <section
                className={`flex justify-center items-center bg-cover bg-center w-full h-full bg-[url('https://www.trustedreviews.com/wp-content/uploads/sites/54/2024/04/SHACARRI_0180_16x9.png')]`}
              >
                <div className=" w-9/12">
                  <div className="w-fit flex flex-col justify-center text-white p-4 rounded-lg bg-slate-800/40 h-fit font-bold  text-4xl">
                    <p>Beats Solo 4</p>
                    <p>Stands Out.</p>
                    <p>Stays On.</p>
                    <div className="w-10/12 min-w-56">
                      <Link to="/headphone">
                        <button
                          onClick={() => {
                            dispatch(selectCategory("Headphone"));
                            dispatch(selectProductFormNav("Beats Solo 4"));
                          }}
                          className="btn text-white hover:bg-white hover:text-red-500 bg-red-500 border-none w-5/12 text-xl btn-md mt-3 "
                        >
                          Shop
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <section className="flex flex-col justify-center bg-white items-center w-9/12 mt-10 p-5  rounded-2xl">
              <p className="text-5xl mb-5 mt-5 p-3  font-bold">New Arrival</p>
              <div
                className={`grid ${
                  windowWidth < 1500 ? "grid-cols-2" : "grid-cols-4"
                } gap-5 p-5`}
              >
                <Link
                  to="/headphone"
                  onClick={() => {
                    dispatch(selectProductFormNav("Beats Studio Pro"));
                    dispatch(selectCategory("Headphone"));
                  }}
                >
                  <div className="p-5 hover:scale-105 hover:bg-red-500 hover:text-white duration-150 card card-compact bg-base-100 shadow-xl max-w-xl rounded-2xl ">
                    <figure>
                      <img
                        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097"
                        alt="Image 1"
                      />
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title text-xl flex flex-col-reverse justify-end">
                        Beats Studio Pro
                        <div className="badge bg-green-400 p-3">NEW</div>
                      </h2>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/headphone"
                  onClick={() => {
                    dispatch(selectProductFormNav("Beats Solo 4"));
                    dispatch(selectCategory("Headphone"));
                  }}
                >
                  <div className="p-5 hover:scale-105 hover:bg-red-500 hover:text-white duration-150 card card-compact bg-base-100 shadow-xl max-w-xl rounded-2xl ">
                    <figure>
                      <img
                        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW43?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1712255584961"
                        alt="Image 1"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title  text-xl flex flex-col-reverse justify-end">
                        Beats Solo 4
                        <div className="badge bg-green-400 p-3">NEW</div>
                      </h2>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/earbuds"
                  onClick={() => {
                    dispatch(selectProductFormNav("Beats Studio Buds +"));
                    dispatch(selectCategory("Earbuds"));
                  }}
                >
                  <div className="p-5 hover:scale-105 hover:bg-red-500 hover:text-white duration-150 card card-compact bg-base-100 shadow-xl max-w-xl rounded-2xl ">
                    <figure>
                      <img
                        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1621538312000"
                        alt="Image 1"
                      />
                    </figure>
                    <div className="card-body ">
                      <h2 className="card-title text-xl flex flex-col-reverse justify-end">
                        Beats Studio Buds
                        <div className="badge bg-green-400 p-3">NEW</div>
                      </h2>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/earbuds"
                  onClick={() => {
                    dispatch(selectProductFormNav("Beats Studio Buds"));
                    dispatch(selectCategory("Earbuds"));
                  }}
                >
                  <div className="p-5 hover:scale-105 hover:bg-red-500 hover:text-white duration-150 card card-compact bg-base-100 shadow-xl max-w-xl rounded-2xl ">
                    <figure>
                      <img
                        src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV722?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1602803246000"
                        alt="Image 1"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title text-xl flex flex-col-reverse justify-end">
                        Power Beats Pro
                        <div className="badge bg-green-400 p-3">NEW</div>
                      </h2>
                    </div>
                  </div>
                </Link>
              </div>
            </section>
            <section className="flex justify-center items-center w-9/12 h-[700px] mt-5 rounded-xl bg-cover bg-center bg-[url('https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/studio-buds-plus/pdp/studiobudsplus-pdp-p01.jpg.large.2x.jpg')]">
              <div className="w-11/12 flex justify-end flex-col items-end font-bold text-xl text-white ">
                <div className="bg-slate-800/40 p-2 rounded-lg">
                  <p>Explore</p>
                  <p>Wireless Earbuds</p>
                  <div className="w-8/12 min-w-44">
                    <Link to="/earbuds">
                      <button
                        onClick={() => {
                          dispatch(selectCategory("Earbuds"));
                        }}
                        className="btn hover:bg-white hover:text-red-500 text-white bg-red-500  border-none w-8/12 text-xl btn-md mt-3 "
                      >
                        Shop
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex justify-center items-center w-9/12 h-[700px] mt-5 rounded-xl bg-cover bg-center bg-[url('https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/pdp/studiopro-pdp-p01.jpg.large.2x.jpg')]">
              <div className="w-11/12 flex justify-end flex-col items-start font-bold text-xl text-white ">
                <div className="bg-slate-800/40 p-2 rounded-lg">
                  <p>Explore</p>
                  <p>Wireless Headphones</p>
                  <div className="w-8/12 min-w-44">
                    <Link to="/headphone">
                      <button
                        onClick={() => {
                          dispatch(selectCategory("Headphone"));
                        }}
                        className="btn hover:bg-white hover:text-red-500 text-white bg-red-500  border-none w-8/12 text-xl btn-md mt-3 "
                      >
                        Shop
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col justify-center items-center bg-white w-9/12 m-5 font-bold shadow-2xl rounded-2xl p-5">
              <p className="text-4xl mt-2 mb-5">Seamless Shopping</p>
              <div className="flex text-2xl justify-center items-start ">
                <div className="flex flex-col justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="150"
                    height="150"
                    viewBox="0 0 128 128"
                  >
                    <path d="M125,28.7l-33.8-12c-0.8-0.3-1.6-0.2-2.3,0.1C87.8,17.3,29,38.1,29,38.1c-1.5,0.5-2.5,1.9-2.5,3.5v14c0,1.3,0.8,2.4,2,2.8 l7.8,2.8c2,0.7,4-0.7,4-2.8V46.7c0-1.6,1-3,2.5-3.5l53.1-18.4l19.2,6.8L63,49.9c0,0,0,0,0,0c-1.1,0.4-2,1.5-2,2.8v60.8L7,94.4V33.6 l58-20.5c1.6-0.6,2.4-2.3,1.8-3.8c-0.6-1.6-2.3-2.4-3.8-1.8L3,28.7c-1.2,0.4-2,1.6-2,2.8v65c0,1.3,0.8,2.4,2,2.8l60,21.2 c0.3,0.1,0.7,0.2,1,0.2c0.2,0,0.3,0,0.5,0c0,0,0.1,0,0.1,0c0.1,0,0.2-0.1,0.4-0.1c0,0,0,0,0,0l60-21.2c1.2-0.4,2-1.6,2-2.8v-65 c0,0,0,0,0,0C127,30.2,126.2,29.1,125,28.7z"></path>
                  </svg>
                  <div className="w-11/12 text-center">
                    <p className="text-xl">Fast and Free Delivery</p>
                    <p className="font-medium mt-2">
                      Enjoy free two-day delivery on most in-stock items.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="150"
                    height="150"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                  </svg>
                  <div className="w-11/12 text-center">
                    <p className="text-xl ">In-Store Pickup</p>
                    <p className="font-medium mt-2">
                      Pick up your online order at an Apple Store near you.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-center">
                  <svg
                    width="170"
                    height="170"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="100"
                      height="100"
                      x="0"
                      y="0"
                      rx="30"
                      fill="transparent"
                      stroke="transparent"
                      stroke-width="0"
                      stroke-opacity="100%"
                      paint-order="stroke"
                    ></rect>
                    <svg
                      width="320"
                      height="320"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      x="95"
                      y="128"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="currentColor">
                        <path
                          fill="currentColor"
                          d="M7.5 2h14v9.5h-2V4h-2v5.618l-3-1.5l-3 1.5V4h-2v5.5h-2V2Zm6 2v2.382l1-.5l1 .5V4h-2Zm-5.065 9.25a1.25 1.25 0 0 0-.885.364l-2.05 2.05V19.5h5.627l5.803-1.45l3.532-1.508a.555.555 0 0 0-.416-1.022l-.02.005L13.614 17H10v-2h3.125a.875.875 0 1 0 0-1.75h-4.69Zm7.552 1.152l3.552-.817a2.56 2.56 0 0 1 3.211 2.47a2.557 2.557 0 0 1-1.414 2.287l-.027.014l-3.74 1.595l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 2.3-.948h.002h-.002h4.687a2.875 2.875 0 0 1 2.862 3.152ZM3.5 16.25H2v3.25h1.5v-3.25Z"
                        />
                      </g>
                    </svg>
                  </svg>
                  <div className="w-11/12 text-center">
                    <p className="text-xl mb-2">Easy Returns</p>
                    <p className="font-medium mt-2">
                      Return eligible items to Apple within 14 days of receipt.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;
