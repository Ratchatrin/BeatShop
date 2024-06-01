import { useState } from "react";
import Footer from "../footer/Footer";
import Nav from "../header/Nav";
import "./home.css";
import { Link } from "react-router-dom";
function Home() {
  const [slide, setSlide] = useState(0);
  return (
    <>
      <Nav></Nav>
      <section className="flex flex-col justify-center items-center bg-red-500">
        <section className="flex justify-center items-center max-w-lg">
          <div className=" bg-white mt-5 rounded-lg w-11/12">
            <div className="text-center">
              <p className="font-bold underline text-2xl ">New Arrival</p>
            </div>
            {slide === 0 ? (
              <>
                <section className="slide max-w-lg">
                  <article className="card  bg-base-100 shadow-lg flex-row rounded-lg justify-center p-3 items-center">
                    <button
                      className="btn btn-error text-white  btn-sm "
                      onClick={() => {
                        if (slide > 0) {
                          setSlide(() => {
                            return slide - 1;
                          });
                        } else {
                          setSlide(3);
                        }
                      }}
                    >
                      &lt;
                    </button>
                    <div>
                      <figure>
                        <img
                          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097"
                          alt="Image 1"
                          className="w-7/12"
                        />
                      </figure>
                      <div className="card-body p-3 ">
                        <h2 className="card-title  text-lg flex flex-col-reverse justify-end">
                          Beats Studio Pro
                          <div className="badge bg-green-400 p-3">NEW</div>
                        </h2>
                      </div>
                    </div>
                    <button
                      className="btn btn-error text-white   btn-sm "
                      onClick={() => {
                        if (slide < 3) {
                          setSlide(() => {
                            return slide + 1;
                          });
                        } else {
                          setSlide(0);
                        }
                      }}
                    >
                      &gt;
                    </button>
                  </article>
                </section>
              </>
            ) : (
              <></>
            )}
            {slide === 1 ? (
              <>
                <section className="slide">
                  <article className="card  bg-base-100 shadow-lg flex-row rounded-lg justify-center p-3 items-center">
                    <button
                      className="btn btn-error text-white  btn-sm "
                      onClick={() => {
                        if (slide > 0) {
                          setSlide(() => {
                            return slide - 1;
                          });
                        } else {
                          setSlide(3);
                        }
                      }}
                    >
                      &lt;
                    </button>
                    <div>
                      <figure>
                        <img
                          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1682361480584"
                          alt="Image 1"
                          className="w-7/12"
                        />
                      </figure>
                      <div className="card-body p-3 ">
                        <h2 className="card-title  text-lg flex flex-col-reverse justify-end">
                          Beats Solo 4
                          <div className="badge bg-green-400 p-3">NEW</div>
                        </h2>
                      </div>
                    </div>
                    <button
                      className="btn btn-error text-white   btn-sm "
                      onClick={() => {
                        if (slide < 3) {
                          setSlide(() => {
                            return slide + 1;
                          });
                        } else {
                          setSlide(0);
                        }
                      }}
                    >
                      &gt;
                    </button>
                  </article>
                </section>
              </>
            ) : (
              <></>
            )}
            {slide === 2 ? (
              <>
                <section className="slide">
                  <article className="card  bg-base-100 shadow-lg flex-row rounded-lg justify-center p-3 items-center">
                    <button
                      className="btn btn-error text-white  btn-sm "
                      onClick={() => {
                        if (slide > 0) {
                          setSlide(() => {
                            return slide - 1;
                          });
                        } else {
                          setSlide(3);
                        }
                      }}
                    >
                      &lt;
                    </button>
                    <div>
                      <figure>
                        <img
                          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2J3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1634663503000"
                          alt="Image 1"
                          className="w-7/12"
                        />
                      </figure>
                      <div className="card-body p-3">
                        <h2 className="card-title  text-lg flex flex-col-reverse justify-end">
                          Beats Studio Buds + <br />
                          <div className="badge bg-green-400 p-3">NEW</div>
                        </h2>
                      </div>
                    </div>
                    <button
                      className="btn btn-error text-white   btn-sm "
                      onClick={() => {
                        if (slide < 3) {
                          setSlide(() => {
                            return slide + 1;
                          });
                        } else {
                          setSlide(0);
                        }
                      }}
                    >
                      &gt;
                    </button>
                  </article>
                </section>
              </>
            ) : (
              <></>
            )}
            {slide === 3 ? (
              <>
                <section className="slide">
                  <article className="card  bg-base-100 shadow-lg flex-row rounded-lg justify-center p-3 items-center">
                    <button
                      className="btn btn-error text-white  btn-sm "
                      onClick={() => {
                        if (slide > 0) {
                          setSlide(() => {
                            return slide - 1;
                          });
                        } else {
                          setSlide(3);
                        }
                      }}
                    >
                      &lt;
                    </button>
                    <div>
                      <figure>
                        <img
                          src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MY582?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1604515400000"
                          alt="Image 1"
                          className="w-7/12"
                        />
                      </figure>
                      <div className="card-body p-3">
                        <h2 className="card-title  text-lg flex flex-col-reverse justify-end">
                          Beats Studio Buds
                          <div className="badge bg-green-400 p-3">NEW</div>
                        </h2>
                      </div>
                    </div>
                    <button
                      className="btn btn-error text-white   btn-sm "
                      onClick={() => {
                        if (slide < 3) {
                          setSlide(() => {
                            return slide + 1;
                          });
                        } else {
                          setSlide(0);
                        }
                      }}
                    >
                      &gt;
                    </button>
                  </article>
                </section>
              </>
            ) : (
              <></>
            )}
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-white w-11/12 max-w-md mt-5 font-bold shadow-2xl rounded-lg">
          <p className="mt-2 text-2xl">Category</p>
          <div className="flex justify-center items-center mt-5 mb-2">
            <Link to="/headphone">
              <div className="flex flex-col justify-center items-center  w-11/12 m-2 rounded-lg">
                <img
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=890&hei=890&fmt=jpeg&qlt=90&.v=1687660671097"
                  alt="headphone"
                  className="w-10/12 max-w-2xl m-2 "
                />
                <p>Headphone</p>
              </div>
            </Link>
            <Link to="/earbuds">
              <div className=" flex flex-col justify-center items-center  w-11/12 m-2 rounded-lg">
                <img
                  src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503?wid=890&hei=890&fmt=jpeg&qlt=95&.v=1621538312000"
                  alt="headphone"
                  className="w-10/12 max-w-2xl m-2 "
                />
                <p>Earbuds</p>
              </div>
            </Link>
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
      </section>
      <Footer></Footer>
    </>
  );
}

export default Home;
