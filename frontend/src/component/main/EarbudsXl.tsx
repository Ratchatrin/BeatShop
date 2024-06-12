import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCart,
  selectCategory,
  selectProductFormNav,
} from "../redux/slicer.ts";
const API = "https://beatshop.onrender.com";
interface earbuds {
  _id: string;
  brand: string;
  name: string;
  model: string;
  color: string[] | string;
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

function EarbudsXl() {
  const dispatch = useDispatch();
  const productData = useSelector(
    (state: state) => state.productData.productData
  );
  const userData = useSelector((state: state) => {
    return state.productData.userData;
  });
  const [earbuds, setEarbuds] = useState([]);
  const [headphone, setHeadphone] = useState([]);
  const [pickColorPro, setPickColorPro] = useState("black");
  const [colorCode, setColorCode] = useState("00000");
  const [selectProduct, setSelectProduct] = useState(
    productData || "Beats Studio Buds +"
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [indexPicture, setIndexPicture] = useState(Number);
  const [addComplete, setAddComplete] = useState(false);
  const navigator = useNavigate();
  const getData = async () => {
    try {
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
      <section className="flex flex-col justify-start items-center bg-red-500 w-full ">
        {earbuds.length !== 0 ? (
          <>
            <div className="bg-white w-11/12 max-w-2xl mt-3 rounded-lg flex flex-col mb-5 p-3 justify-center items-center">
              <p className="text-2xl font-bold mb-5 text-center">
                Wireless HeadPhones
              </p>
              <div className="flex justify-center items-center gap-5">
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
                        className={`font-bold text-sm text-center cursor-pointer h-7 duration-75 ${
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
                        <div className="flex flex-col justify-center items-center text-center mb-5">
                          <div className="flex">
                            {Object.keys(product.picture).map((keysPicture) => {
                              return (
                                <>
                                  {keysPicture === pickColorPro ? (
                                    <>
                                      <div className="flex justify-center items-center w-full">
                                        <div className="flex flex-col w-2/12 justify-center items-center  ">
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
                                                    className={`w-full max-w-16 mt-5  ${
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
                                      </div>
                                    </>
                                  ) : (
                                    <></>
                                  )}
                                </>
                              );
                            })}
                            <div className="flex flex-col justify-center items-center w-4/12">
                              <div className="w-full flex-col flex text-wrap justify-start items-start mt-6">
                                <p className="text-xl font-bold">
                                  {product.model} <br /> —
                                  <span className="uppercase">
                                    {" "}
                                    {pickColorPro}
                                  </span>
                                </p>
                                <p className="font-bold mt-3">
                                  ${product.price}
                                </p>
                              </div>
                              <div className="flex justify-center items-center gap-5 mt-1 h-16">
                                {product.colorCode.map((code, index) => {
                                  return (
                                    <>
                                      <div
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
                                      {/* <div className="bg-[#28282B]"></div>
                                        <div className="bg-[#26263D]"></div>
                                        <div className="bg-[#F5D1C8]"></div>
                                        <div className="bg-[#DCD5CF]"></div>
                                        <div className="bg-[#3E4852]"></div>
                                        <div className="bg-[#4B403E]"></div>
                                        <div className="bg-[#1C1C1C]"></div> */}
                                      {/* fix bug */}
                                    </>
                                  );
                                })}
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
                                      className="hover:text-black hover:bg-green-200  hover:border-green-500 btn bg-green-500 rounded-xl w-28 text-white"
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
                                      className="hover:text-black hover:bg-green-200  hover:border-green-500 btn bg-green-500 rounded-xl w-28 text-white"
                                    >
                                      Add to cart
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="collapse bg-red-500 text-white">
                          <input type="checkbox" />
                          <div className="collapse-title text-xl font-medium">
                            Product Information
                          </div>
                          <div className="collapse-content">
                            <div className="flex flex-col justify-start items-start bg-white text-black p-5 rounded-xl">
                              <div className="flex gap-3 justify-center items-start mb-5">
                                <p className="font-bold uppercase text-wrap w-24 ">
                                  highlights
                                </p>
                                <div className="border-l-2 pl-5">
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
                              <div className="flex gap-3 justify-center items-start mb-5">
                                <p className="font-bold uppercase text-wrap w-24">
                                  What’s in the Box
                                </p>
                                <div className="border-l-2 pl-5">
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
                              <div className="flex gap-3 justify-center items-start">
                                <p className="font-bold uppercase text-wrap w-24">
                                  Tech Specs
                                </p>
                                <div className="border-l-2 pl-5">
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
                            </div>
                          </div>
                        </div>
                        <p className="text-xl m-6 uppercase font-bold">
                          You may also like
                        </p>
                        <div className="bg-red-500 p-2 rounded-lg gap-2 flex justify-center items-start font-bold  text-center">
                          {headphone.map((product: earbuds) => {
                            return (
                              <>
                                <Link to="/earbuds">
                                  <div
                                    onClick={() => {
                                      dispatch(selectCategory("Headphone"));
                                      dispatch(
                                        selectProductFormNav(product.name)
                                      );
                                    }}
                                    className="flex flex-col justify-center text-white text-pretty items-center "
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
            <div className="bg-white w-11/12 max-w-md mt-3 rounded-lg mb-5 flex justify-center h-full items-center ">
              <span className="loading loading-spinner text-error w-20"></span>
            </div>
          </>
        )}
      </section>
    </>
  );
}

export default EarbudsXl;
