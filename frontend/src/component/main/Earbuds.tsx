import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../header/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductFormNav,
  selectCategory,
  addCart,
} from "../redux/slicer.ts";
import EarbudsXl from "./EarbudsXl.tsx";
const API = "https://beatshop.onrender.com";
interface earbuds {
  _id: string;
  brand: string;
  name: string;
  model: string;
  color: string;
  productInformation: {
    highlights: string[];
    box: string[];
    techSpecs: {
      height: string;
      length: string;
      width: string;
      weight: string;
      connections: string;
      battery: string;
      batteryLife: string;
    };
  };
  picture: {
    [color: string]: string[];
  };
  colorCode: string[];
  price: number;
  total: number;
  quantity: number;
}
interface state {
  productData: {
    productData: string;
    category: string;
    cart: object[];
    error: boolean;
    loading: boolean;
    userData: {
      _id: string;
      email: string;
      username: string;
      password: string;
      cart: string[];
    };
  };
}

function Earbuds() {
  const dispatch = useDispatch();
  const productData = useSelector(
    (state: state) => state.productData.productData
  );
  const userData = useSelector((state: state) => {
    return state.productData.userData;
  });
  const category = useSelector((state: state) => state.productData.category);
  const [earbuds, setEarbuds] = useState([]);
  const [headphone, setHeadphone] = useState([]);
  const [pickColorPro, setPickColorPro] = useState("black");
  const [selectProduct, setSelectProduct] = useState(
    productData || "Beats Studio Buds +"
  );
  const [colorCode, setColorCode] = useState("00000");
  const [quantity, setQuantity] = useState<number>(1);
  const [indexPicture, setIndexPicture] = useState(Number);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [addComplete, setAddComplete] = useState(false);
  const navigator = useNavigate();
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWindowWidth);
  const getData = async () => {
    try {
      setSelectProduct("");
      const earbudsData = (await axios.get(`${API}/earbuds`)).data;
      const headphoneData = (await axios.get(`${API}/headphone`)).data;
      setEarbuds(earbudsData);
      setHeadphone(headphoneData);
    } catch (error) {
      console.log(error);
    }
  };
  const addToCart = async (detail: earbuds) => {
    try {
      if (userData.email === null) {
        navigator("/login");
      } else {
        const product = {
          id: detail._id,
          brand: detail.brand,
          name: detail.name,
          color: pickColorPro,
          productInformation: detail.productInformation,
          picture: detail.picture,
          model: detail.model,
          price: detail.price,
          quantity: quantity,
          total: detail.price * quantity,
          colorCode: colorCode,
        };
        setAddComplete(true);
        setTimeout(() => {
          setAddComplete(false);
        }, 2000);
        dispatch(addCart(product));
        const add = await axios.put(`${API}/cart/add/${userData._id}`, product);
        console.log(add);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setSelectProduct(productData);
  }, [productData]);
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (productData !== null) {
      setSelectProduct(productData);
    } else {
      setSelectProduct("Beats Studio Buds +");
    }
  }, [productData]);
  return (
    <>
      <Nav></Nav>
      <section className="flex flex-col justify-start items-center bg-red-500 w-full ">
        <div className="flex justify-center items-center gap-4 mt-2">
          <Link to="/headphone">
            <div
              className={`flex flex-col justify-center items-center w-28 ${
                category === "Headphone"
                  ? "text-black bg-white p-1 rounded-lg duration-150"
                  : "text-white p-1 duration-150"
              } `}
              onClick={() => {
                dispatch(selectProductFormNav(null));
                dispatch(selectCategory("Headphone"));
              }}
            >
              <svg
                width={`${windowWidth >= 1024 ? "90" : "60"}`}
                height={`${windowWidth >= 1024 ? "90" : "60"}`}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="512"
                  height="512"
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
                  width="256px"
                  height="256px"
                  viewBox="0 0 1200 1200"
                  fill="#000000"
                  x="128"
                  y="128"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="black">
                    <path
                      fill="currentColor"
                      d="M1050 937.5v-300c0-248.513-201.487-450-450-450s-450 201.487-450 450v300c-11.048 106.906-147.598 78.946-150 0v-300c0-331.388 268.65-600 600-600s600 268.612 600 600v300c-11.048 106.906-147.598 78.946-150 0zm-787.5-225h75c20.7 0 37.5 16.763 37.5 37.5v375c0 20.737-16.8 37.5-37.5 37.5h-75c-20.7 0-37.5-16.763-37.5-37.5V750c0-20.737 16.8-37.5 37.5-37.5zm600 0h75c20.737 0 37.5 16.763 37.5 37.5v375c0 20.737-16.763 37.5-37.5 37.5h-75c-20.737 0-37.5-16.763-37.5-37.5V750c0-20.737 16.763-37.5 37.5-37.5z"
                    />
                  </g>
                </svg>
              </svg>
              <p className="font-bold text-sm ">Headphones</p>
            </div>
          </Link>
          <Link to="/earbuds">
            <div
              className={`flex flex-col justify-center items-center w-28 ${
                category === "Earbuds"
                  ? "text-black bg-white p-1 rounded-lg duration-150"
                  : "text-white p-1 duration-150"
              } ${windowWidth >= 1024 ? "w-32 h-32" : "w-28"}`}
              onClick={() => {
                dispatch(selectProductFormNav(null));
                dispatch(selectCategory("Earbuds"));
              }}
            >
              <svg
                width={`${windowWidth >= 1024 ? "90" : "60"}`}
                height={`${windowWidth >= 1024 ? "90" : "60"}`}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="512"
                  height="512"
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
                  width="256px"
                  height="256px"
                  viewBox="0 0 24 24"
                  fill="#000000"
                  x="128"
                  y="128"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="black">
                    <path
                      fill="currentColor"
                      d="M10 8v12c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1v-6.73c-.68.45-1.39.73-2 .73c-2 0-3-2-3-3V6c0-1 1-3 3-3s5 3 5 5m6.5-5C13.46 3 11 5.46 11 8.5s2.46 5.5 5.5 5.5S22 11.54 22 8.5S19.54 3 16.5 3m-2 11.68V20c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5.32c-.63.21-1.3.32-2 .32s-1.37-.11-2-.32Z"
                    />
                  </g>
                </svg>
              </svg>
              <p className="font-bold text-sm">Earbuds</p>
            </div>
          </Link>
        </div>
        {earbuds.length !== 0 ? (
          <>
            {windowWidth < 1024 ? (
              <>
                <div className="bg-white  w-11/12 max-w-lg mt-3 rounded-lg flex flex-col mb-5 p-3 justify-center items-center">
                  <p className="text-2xl font-bold mb-5 text-center">Earbuds</p>
                  <div className="flex justify-center items-center gap-5 h-20">
                    {earbuds.map((product: earbuds) => {
                      return (
                        <>
                          <p
                            onClick={() => {
                              setSelectProduct(product.name);
                              setPickColorPro("black");
                              setIndexPicture(0);
                              setQuantity(1);
                            }}
                            className={`font-bold h-fit text-sm text-center cursor-pointer  duration-75 ${
                              product.name === selectProduct
                                ? "border-b-2 border-black"
                                : ""
                            }`}
                          >
                            {product.name}
                          </p>
                        </>
                      );
                    })}
                  </div>
                  {earbuds.map((product: earbuds) => {
                    return (
                      <>
                        {selectProduct === product.name ? (
                          <>
                            <div className="flex flex-col justify-center items-center text-center">
                              {Object.keys(product.picture).map(
                                (keysPicture) => {
                                  return (
                                    <>
                                      {keysPicture === pickColorPro ? (
                                        <>
                                          <div className="slide">
                                            <img
                                              src={
                                                product.picture[pickColorPro][
                                                  indexPicture
                                                ]
                                              }
                                              alt="product"
                                              className="max-w-md w-full"
                                            />
                                          </div>
                                          <div className="flex w-11/12 justify-center items-center  ">
                                            {product.picture[pickColorPro].map(
                                              (picture, index) => {
                                                return (
                                                  <>
                                                    <img
                                                      src={picture}
                                                      alt="product"
                                                      onClick={() => {
                                                        setIndexPicture(index);
                                                      }}
                                                      className={`w-2/12 max-w-16 mt-5  ${
                                                        index === indexPicture
                                                          ? "border-red-500 border-b-4 "
                                                          : ""
                                                      }`}
                                                    />
                                                  </>
                                                );
                                              }
                                            )}
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  );
                                }
                              )}
                              <div className="flex w-full">
                                <div className="w-full flex-col flex justify-start items-start mt-6">
                                  <p className="text-xl font-bold w-full text-left">
                                    {product.name}
                                  </p>
                                  <p className="font-bold mt-3">
                                    ${product.price}
                                  </p>
                                  <p className="mt-3 text-md font-semibold uppercase">
                                    Color : {pickColorPro}
                                  </p>
                                </div>
                                <div className="flex flex-col justify-center items-center mt-6 gap-2">
                                  {/* <div className="flex justify-center items-center ">
                                    <button
                                      onClick={() => {
                                        if (quantity < 10) {
                                          setQuantity(() => {
                                            return quantity + 1;
                                          });
                                        }
                                      }}
                                      className="btn bg-green-500 rounded-xl  text-white"
                                    >
                                      +
                                    </button>
                                    <p className="ml-2 mr-2 w-5 text-md font-bold">
                                      {quantity}
                                    </p>
                                    <button
                                      onClick={() => {
                                        if (quantity > 1) {
                                          setQuantity(() => {
                                            return quantity - 1;
                                          });
                                        }
                                      }}
                                      className="btn bg-error rounded-xl  text-white"
                                    >
                                      -
                                    </button>
                                  </div> */}
                                  {addComplete ? (
                                    <>
                                      <button
                                        onClick={() => {
                                          addToCart(product);
                                        }}
                                        className="btn bg-transparent rounded-xl w-28 border-2 border-green-500"
                                      >
                                        Add Complete
                                      </button>
                                    </>
                                  ) : (
                                    <>
                                      <button
                                        onClick={() => {
                                          addToCart(product);
                                        }}
                                        className="btn bg-green-500 rounded-xl w-28 text-white"
                                      >
                                        Add to cart
                                      </button>
                                    </>
                                  )}
                                </div>
                              </div>
                              <div className="flex justify-center items-center gap-5 m-2 h-16">
                                {product.colorCode.map((code, index) => {
                                  return (
                                    <>
                                      <div
                                        key={index}
                                        className={`bg-[#${code}] rounded-full border-2 duration-150${
                                          product.color[index] === pickColorPro
                                            ? " w-8 h-8  border-slate-700"
                                            : " w-6 h-6 border-slate-400/50"
                                        }`}
                                        onClick={() => {
                                          setPickColorPro(product.color[index]);
                                          setColorCode(code);
                                        }}
                                      ></div>

                                      {/* <div className="bg-[#000000]"></div>
                                      <div className="bg-[#C0C0C0]"></div>
                                      <div className="bg-[#F2EDE7]"></div>

                                      <div className="bg-[#000000]"></div>
                                      <div className="bg-[#FFFFFF]"></div>
                                      <div className="bg-[#ed1c24]"></div>

                                      <div className="bg-[#000000]"></div>
                                      <div className="bg-[#FFFFFF]"></div>
                                      <div className="bg-[#625589]"></div>
                                      <div className="bg-[#6C6C6D]"></div>

                                      <div className="bg-[#000000]"></div>
                                      <div className="bg-[#374754]"></div>
                                      <div className="bg-[#F7EDE2]"></div> */}

                                      {/* fix bug */}
                                    </>
                                  );
                                })}
                              </div>
                              <div className="collapse bg-red-500 text-white  rounded-xl text-left justify-items-center">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-bold uppercase ">
                                  <p className="mt-1"> highlights</p>
                                </div>
                                <div className="collapse-content text-sm font-medium rounded-lg mb-3 text-pretty bg-white text-black w-11/12 ">
                                  <p className="mt-2">
                                    {product.productInformation.highlights.map(
                                      (info) => {
                                        return (
                                          <>
                                            <li>{info}</li>
                                          </>
                                        );
                                      }
                                    )}
                                  </p>
                                </div>
                              </div>
                              <div className="collapse bg-red-500 mt-5 text-white rounded-xl text-left justify-items-center">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-bold uppercase ">
                                  <p className="mt-1">What’s in the Box</p>
                                </div>
                                <div className="collapse-content text-sm font-medium rounded-lg mb-3 text-pretty bg-white text-black w-11/12 ">
                                  <p className="mt-2">
                                    {product.productInformation.box.map(
                                      (items) => {
                                        return (
                                          <>
                                            <li>{items}</li>
                                          </>
                                        );
                                      }
                                    )}
                                  </p>
                                </div>
                              </div>
                              <div className="collapse bg-red-500 mt-5 text-white rounded-xl  text-left justify-items-center">
                                <input type="checkbox" />
                                <div className="collapse-title text-lg font-bold uppercase ">
                                  <p className="mt-1">Tech Specs</p>
                                </div>
                                <div className="collapse-content text-sm font-medium rounded-lg mb-3 text-balance bg-white text-black w-11/12 ">
                                  <p className=" mt-2 mb-1">
                                    Height :{" "}
                                    {
                                      product.productInformation.techSpecs
                                        .height
                                    }
                                  </p>
                                  <p className="mb-1">
                                    Length :{" "}
                                    {
                                      product.productInformation.techSpecs
                                        .length
                                    }
                                  </p>
                                  <p className="mb-1">
                                    Width :{" "}
                                    {product.productInformation.techSpecs.width}
                                  </p>
                                  <p className="mb-1">
                                    Weight :{" "}
                                    {
                                      product.productInformation.techSpecs
                                        .weight
                                    }
                                  </p>
                                  <p className="mb-1">
                                    Connections :{" "}
                                    {
                                      product.productInformation.techSpecs
                                        .connections
                                    }
                                  </p>
                                  <p className="mb-1">
                                    Battery :{" "}
                                    {
                                      product.productInformation.techSpecs
                                        .battery
                                    }
                                  </p>
                                  <p className="mb-1">
                                    Battery Life :{" "}
                                    {
                                      product.productInformation.techSpecs
                                        .batteryLife
                                    }
                                  </p>
                                </div>
                              </div>
                              <p className="text-xl m-6 uppercase font-bold">
                                You may also like
                              </p>
                              <div className="bg-red-500 p-2 rounded-lg gap-2 flex justify-center items-start font-bold  text-center">
                                {headphone.map((product: earbuds) => {
                                  return (
                                    <>
                                      <Link to="/headphone">
                                        <div
                                          onClick={() => {
                                            dispatch(
                                              selectCategory("Headphone")
                                            );
                                            dispatch(
                                              selectProductFormNav(product.name)
                                            );
                                          }}
                                          className="flex flex-col justify-center text-white text-pretty items-center text-sm "
                                        >
                                          <img
                                            src={product.picture.black[0]}
                                            alt=""
                                            className="rounded-lg w-6/12 max-w-md"
                                          />
                                          <p>{product.name}</p>
                                          <p>${product.price}</p>
                                        </div>
                                      </Link>
                                    </>
                                  );
                                })}
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <EarbudsXl></EarbudsXl>
              </>
            )}
          </>
        ) : (
          <>
            <div className="bg-white w-11/12 max-w-md mt-3 rounded-lg mb-5 flex justify-center h-full items-center ">
              <span className="loading loading-spinner text-error w-20"></span>
            </div>
          </>
        )}
      </section>
      <Footer></Footer>
    </>
  );
}

export default Earbuds;
