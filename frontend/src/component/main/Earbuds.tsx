import { Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Nav from "../header/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductFormNav, selectCategory } from "../redux/slicer.ts";
const API = "http://localhost:3003";
interface headphone {
  brand: string;
  name: string;
  model: string;
  color: string[];
  productInformation: {
    highlights: string;
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
  picture: { [picture: string]: string };
  colorCode: string[];
  price: string;
}
interface state {
  productData: {
    productData: string;
    category: string;
    error: boolean;
    loading: boolean;
  };
}
function Earbuds() {
  const dispatch = useDispatch();
  const productData = useSelector(
    (state: state) => state.productData.productData
  );
  const category = useSelector((state: state) => state.productData.category);
  const [earbuds, setEarbuds] = useState([]);
  const [pickColorPro, setPickColorPro] = useState("black");
  const [selectProduct, setSelectProduct] = useState(
    productData || "Beats Studio Buds +"
  );
  const getData = async () => {
    try {
      setSelectProduct("");
      const data = (await axios.get(`${API}/earbuds`)).data;
      setEarbuds(data);
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
      <section className="flex flex-col justify-start items-center bg-red-500 ">
        <div className="flex justify-center items-center gap-4 mt-2">
          <Link to="/headphone">
            <div
              className={`flex flex-col justify-center w-28 items-center text-white `}
              onClick={() => {
                dispatch(selectProductFormNav(null));
                dispatch(selectCategory("Headphone"));
              }}
            >
              <svg
                width="60"
                height="60"
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
              <p className="font-bold text-sm">Headphones</p>
            </div>
          </Link>
          <Link to="/earbuds">
            <div
              className={`flex flex-col justify-center items-center  w-28 ${
                category === "Earbuds"
                  ? "text-black bg-white p-1 rounded-lg duration-150"
                  : "text-white p-1 duration-150"
              } `}
              onClick={() => {
                dispatch(selectProductFormNav(null));
                dispatch(selectCategory("Earbuds"));
              }}
            >
              <svg
                width="60"
                height="60"
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
            <div className="bg-white w-11/12 max-w-md mt-3 rounded-lg mb-5 flex flex-col p-3 justify-center items-center">
              <p className="text-2xl font-bold mb-5">Earbuds</p>
              <div className="grid grid-cols-2 gap-4">
                {earbuds.map((product: headphone) => {
                  return (
                    <>
                      <p
                        onClick={() => {
                          setSelectProduct(product.name);
                          setPickColorPro("black");
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
              {earbuds.map((product: headphone) => {
                return (
                  <>
                    {selectProduct === product.name ? (
                      <>
                        <div className="flex flex-col justify-center items-center text-center">
                          {pickColorPro === "" ? (
                            <>
                              <div className="slide">
                                <img
                                  src={product.picture.black}
                                  alt="product"
                                />
                              </div>
                            </>
                          ) : (
                            <>
                              {Object.keys(product.picture).map(
                                (keysPicture) => {
                                  return (
                                    <>
                                      {keysPicture === pickColorPro ? (
                                        <>
                                          <div className="slide">
                                            <img
                                              src={
                                                product.picture[pickColorPro][0]
                                              }
                                              alt="product"
                                            />
                                          </div>
                                        </>
                                      ) : (
                                        <></>
                                      )}
                                    </>
                                  );
                                }
                              )}
                            </>
                          )}
                          <p className="text-xl w-10/12 font-bold">
                            {product.name}
                          </p>
                          <p className="font-bold">${product.price}</p>
                          <p className="mt-3 text-md font-semibold uppercase">
                            {pickColorPro}
                          </p>
                          <div className="flex justify-center items-center gap-5 m-3 h-16 ">
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
                                    onClick={() =>
                                      setPickColorPro(product.color[index])
                                    }
                                  ></div>
                                  {/* fix bug */}
                                  {/* <div className="bg-[#C0C0C]"></div>
                                <div className="bg-[#000000]"></div>
                                <div className="bg-[#F2EDE7]"></div>
                                <div className="bg-[#C0C0C0]"></div>
                                <div className="bg-[#000000]"></div>
                                <div className="bg-[#ed1c24]"></div>
                                <div className="bg-[#000000]"></div>
                                <div className="bg-[#FFFFFF]"></div>
                                <div className="bg-[#625589]"></div>
                                <div className="bg-[#6C6C6D]"></div>
                                <div className="bg-[#F7EDE2]"></div>
                                <div className="bg-[#374754]"></div>
                                <div className="bg-[#000000]"></div> */}
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
                              <p className="mt-2 ">
                                {product.productInformation.highlights}
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
                                {product.productInformation.box.map((items) => {
                                  return (
                                    <>
                                      <li>{items}</li>
                                    </>
                                  );
                                })}
                              </p>
                            </div>
                          </div>
                          <div className="collapse bg-red-500 mt-5 text-white rounded-xl  text-left justify-items-center">
                            <input type="checkbox" />
                            <div className="collapse-title text-lg font-bold uppercase ">
                              <p className="mt-1">Tech Specs</p>
                            </div>
                            <div className="collapse-content text-sm font-medium rounded-lg mb-3 text-pretty bg-white text-black w-11/12 ">
                              <p className=" mt-2 mb-1">
                                Height :{" "}
                                {product.productInformation.techSpecs.height}
                              </p>
                              <p className="mb-1">
                                Length :{" "}
                                {product.productInformation.techSpecs.length}
                              </p>
                              <p className="mb-1">
                                Width :{" "}
                                {product.productInformation.techSpecs.width}
                              </p>
                              <p className="mb-1">
                                Weight :{" "}
                                {product.productInformation.techSpecs.weight}
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
                                {product.productInformation.techSpecs.battery}
                              </p>
                            </div>
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
            <div className="bg-white w-11/12 max-w-md mt-3 rounded-lg mb-5 flex justify-center items-center h-full">
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
