import { Link } from "react-router-dom";
import "./nav.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProductFormNav,
  selectCategory,
  logoutUser,
} from "../redux/slicer.ts";
import { useEffect, useState } from "react";
interface headphone {
  id: string;
  brand: string;
  name: string;
  model: string;
  color: string[];
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
  colorCode: string;
  price: number;
  total: number;
  quantity: number;
}
interface state {
  productData: {
    productData: headphone | null;
    category: string;
    userData: {
      email: null | string;
      username: null | string;
      cart: headphone[];
    };
    loading: boolean;
    error: boolean;
  };
}
function Nav() {
  const [quantityTotal, setQuantityTotal] = useState(Number);
  const dispatch = useDispatch();
  const userData = useSelector((state: state) => state.productData.userData);
  const cart = useSelector((state: state) => state.productData.userData.cart);
  useEffect(() => {
    if (cart) {
      const quantity = cart.map((product) => {
        return product.quantity;
      });
      const quantityTotal = quantity.reduce((acc, cur) => {
        return acc + cur;
      }, 0);
      setQuantityTotal(quantityTotal);
    }
  }, [cart]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWindowWidth);
  return (
    <>
      <header className="navigator">
        {windowWidth < 767 ? (
          <>
            <Link to="/">
              <div className="flex ml-8 justify-center  items-center">
                <img
                  src="https://miro.medium.com/v2/resize:fit:990/0*VamjJKj0jkHLyNig.png"
                  alt="logo"
                  className="w-6/12 max-w-52"
                  onClick={() => {
                    dispatch(selectProductFormNav(null));
                  }}
                />
              </div>
            </Link>
            <div className="drawer drawer-end w-full - z-[2]">
              <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
              />
              <div className="drawer-content ">
                <label
                  htmlFor="my-drawer-4"
                  className="drawer-button font-bold btn-outline btn-error"
                >
                  |||
                </label>
              </div>
              <div className="drawer-side ">
                <label
                  htmlFor="my-drawer-4"
                  aria-label="close sidebar"
                  className="drawer-overlay"
                ></label>
                <ul className="menu  pt-9 p-2 w-64 min-h-full bg-red-500  text-white font-semibold">
                  {userData.email !== null ? (
                    <>
                      <div className="flex justify-center items-center mb-5">
                        <div className="flex flex-col justify-center items-center bg-white p-2 rounded-lg">
                          <div className="w-16 rounded-xl flex justify-center items-center">
                            <div className="w-10 rounded-full">
                              <img
                                alt="Tailwind CSS Navbar component"
                                src="https://www.pngitem.com/pimgs/m/74-741993_customer-icon-png-customer-icon-transparent-png.png"
                              />
                            </div>
                          </div>
                          <p className="text-black">{userData.username}</p>
                        </div>
                        <Link to="/cart">
                          <li>
                            <div className="indicator">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                              <span className="badge badge-sm indicator-item">
                                {quantityTotal}
                              </span>
                            </div>
                          </li>
                        </Link>
                      </div>
                      <button
                        className="btn bg-white text-red-500 btn-sm"
                        onClick={() => {
                          dispatch(logoutUser(null));
                        }}
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <li>
                          <a>Login</a>
                        </li>
                      </Link>
                    </>
                  )}

                  <li className="mt-5">
                    <details>
                      <summary>Products</summary>
                      <ul className="menu p-1 w-52 min-h-full bg-inherit text-inherit">
                        <li>
                          <details>
                            <summary>EarBuds</summary>
                            <Link to="/earbuds">
                              <ul>
                                <li
                                  onClick={() => {
                                    dispatch(
                                      selectProductFormNav(
                                        "Beats Studio Buds +"
                                      )
                                    );
                                    dispatch(selectCategory("Earbuds"));
                                  }}
                                >
                                  <div className="w-48 flex  justify-start items-start text-pretty">
                                    <img
                                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1682361480584"
                                      alt="headphone"
                                      className="w-4/12 max-w-xs rounded-xl"
                                    />
                                    <a>Beats Studio Buds +</a>
                                  </div>
                                </li>
                                <li
                                  onClick={() => {
                                    dispatch(
                                      selectProductFormNav("Beats Studio Buds")
                                    );
                                    dispatch(selectCategory("Earbuds"));
                                  }}
                                >
                                  <div className="w-48 flex  justify-start items-start text-pretty">
                                    <img
                                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1621538312000"
                                      alt="headphone"
                                      className="w-4/12 max-w-xs rounded-xl"
                                    />
                                    <a>Beats Studio Buds</a>
                                  </div>
                                </li>
                                <li
                                  onClick={() => {
                                    dispatch(
                                      selectProductFormNav("Beats Fit Pro")
                                    );
                                    dispatch(selectCategory("Earbuds"));
                                  }}
                                >
                                  <div className="w-48 flex  justify-start items-start text-pretty">
                                    <img
                                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2J3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1634663503000"
                                      alt="headphone"
                                      className="w-4/12 max-w-xs rounded-xl"
                                    />
                                    <a>Beats Fit Pro</a>
                                  </div>
                                </li>
                                <li
                                  onClick={() => {
                                    dispatch(
                                      selectProductFormNav("Power Beats Pro")
                                    );
                                    dispatch(selectCategory("Earbuds"));
                                  }}
                                >
                                  <div className="w-48 flex  justify-start items-start text-pretty">
                                    <img
                                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV702?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1602803373000"
                                      alt="headphone"
                                      className="w-4/12 max-w-xs rounded-xl"
                                    />
                                    <a>Power Beats Pro</a>
                                  </div>
                                </li>
                              </ul>
                            </Link>
                          </details>
                        </li>
                        <li>
                          <details>
                            <summary>Headphones</summary>
                            <Link to="/headphone">
                              <ul>
                                <li
                                  onClick={() => {
                                    dispatch(
                                      selectProductFormNav("Beats Studio Pro")
                                    );
                                    dispatch(selectCategory("Headphone"));
                                  }}
                                >
                                  <div className="w-48 flex  justify-start items-start text-pretty">
                                    <img
                                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097"
                                      alt="headphone"
                                      className="w-4/12 max-w-xs rounded-xl"
                                    />
                                    <a>Beats Studio Pro</a>
                                  </div>
                                </li>
                                <li
                                  onClick={() => {
                                    dispatch(
                                      selectProductFormNav("Beats Solo 4")
                                    );
                                    dispatch(selectCategory("Headphone"));
                                  }}
                                >
                                  <div className="w-48 flex  justify-start items-start text-pretty">
                                    <img
                                      src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW23?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1712255585028"
                                      alt="headphone"
                                      className="w-4/12 max-w-xs rounded-xl"
                                    />
                                    <a>Beats Solo 4</a>
                                  </div>
                                </li>
                              </ul>
                            </Link>
                          </details>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to="/">
              <div className="flex justify-center items-center flex-none">
                <img
                  src="https://miro.medium.com/v2/resize:fit:990/0*VamjJKj0jkHLyNig.png"
                  alt="logo"
                  className="w-4/12 max-w-48"
                  onClick={() => {
                    dispatch(selectProductFormNav(null));
                  }}
                />
              </div>
            </Link>
            <div className="flex gap-4 justify-evenly items-center mr-5 font-bold text-xl w-5/12 max-w-md grow">
              <div className="dropdown dropdown-bottom dropdown-end">
                <p
                  tabIndex={0}
                  role="button"
                  className="hover:bg-red-500 hover:text-white p-3 rounded-lg duration-150 "
                >
                  Product
                </p>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit"
                >
                  <li>
                    <details>
                      <summary>EarBuds</summary>
                      <Link to="/earbuds">
                        <ul>
                          <li
                            onClick={() => {
                              dispatch(
                                selectProductFormNav("Beats Studio Buds +")
                              );
                              dispatch(selectCategory("Earbuds"));
                            }}
                          >
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1682361480584"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Studio Buds +</a>
                            </div>
                          </li>
                          <li
                            onClick={() => {
                              dispatch(
                                selectProductFormNav("Beats Studio Buds")
                              );
                              dispatch(selectCategory("Earbuds"));
                            }}
                          >
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1621538312000"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Studio Buds</a>
                            </div>
                          </li>
                          <li
                            onClick={() => {
                              dispatch(selectProductFormNav("Beats Fit Pro"));
                              dispatch(selectCategory("Earbuds"));
                            }}
                          >
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2J3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1634663503000"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Fit Pro</a>
                            </div>
                          </li>
                          <li
                            onClick={() => {
                              dispatch(selectProductFormNav("Power Beats Pro"));
                              dispatch(selectCategory("Earbuds"));
                            }}
                          >
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV702?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1602803373000"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Power Beats Pro</a>
                            </div>
                          </li>
                        </ul>
                      </Link>
                    </details>
                  </li>
                  <li>
                    <details>
                      <summary>Headphones</summary>
                      <Link to="/headphone">
                        <ul>
                          <li
                            onClick={() => {
                              dispatch(
                                selectProductFormNav("Beats Studio Pro")
                              );
                              dispatch(selectCategory("Headphone"));
                            }}
                          >
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Studio Pro</a>
                            </div>
                          </li>
                          <li
                            onClick={() => {
                              dispatch(selectProductFormNav("Beats Solo 4"));
                              dispatch(selectCategory("Headphone"));
                            }}
                          >
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW23?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1712255585028"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Solo 4</a>
                            </div>
                          </li>
                        </ul>
                      </Link>
                    </details>
                  </li>
                </ul>
              </div>
              {userData.email !== null ? (
                <>
                  <div className="flex justify-center items-center ">
                    <Link to="/cart">
                      <div className="indicator mr-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        <span className="badge badge-sm indicator-item bg-red-500 text-white">
                          {quantityTotal}
                        </span>
                      </div>
                    </Link>
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle"
                    >
                      <div className="w-10 rounded-full">
                        <img
                          alt="Tailwind CSS Navbar component"
                          src="https://www.pngitem.com/pimgs/m/74-741993_customer-icon-png-customer-icon-transparent-png.png"
                        />
                      </div>
                    </div>
                    <div className="text-center ">
                      <p>{userData.username}</p>
                      <button
                        className="btn btn-error text-white btn-sm"
                        onClick={() => {
                          dispatch(logoutUser(null));
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <p className="hover:bg-red-500 hover:text-white p-3 rounded-lg duration-150 cursor-pointer">
                      Login
                    </p>
                  </Link>
                </>
              )}
            </div>
          </>
        )}
      </header>
    </>
  );
}

export default Nav;
