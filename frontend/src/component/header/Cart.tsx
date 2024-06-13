import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userDelete, userAdd } from "../redux/slicer.ts";
import axios from "axios";
interface headphone {
  id: string;
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
const API = "https://beatshop.onrender.com";
function Cart() {
  const [cart, setCart] = useState<headphone[]>([]);
  const userData = useSelector((state: state) => state.productData.userData);
  const dispatch = useDispatch();
  const total = cart.map((product) => {
    return product.price * product.quantity;
  });
  const finalTotal = total.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const quantity = cart.map((product) => {
    return product.quantity;
  });
  const totalAmount = quantity.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const userCart = useSelector(
    (state: state) => state.productData.userData.cart
  );
  const deleteCart = async (product: headphone) => {
    try {
      await axios.put(`${API}/deleteByOne/:userId`, product);
    } catch (error) {
      console.log(error);
    }
  };
  const addCart = async (product: headphone) => {
    try {
      await axios.put(`${API}/addByOne/:userId`, product);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    setCart(userData.cart);
  }, [userData]);
  return (
    <>
      <Nav></Nav>
      <section className="flex flex-col justify-start items-center bg-red-500 w-full ">
        <div className="bg-white w-11/12 max-w-lg mt-3 rounded-lg flex flex-col mb-5 p-3 justify-center items-center">
          <p className="font-bold text-2xl mb-5">Cart</p>
          {userCart.map((product) => {
            return (
              <>
                <div className=" p-2 flex flex-col justify-center items-center mb-5 bg-red-500 rounded-lg">
                  <div className="flex justify-center items-center   p-2 ">
                    <img
                      src={product.picture[product.color][0]}
                      alt=""
                      className="rounded-lg w-5/12 h-full max-w-sm mr-2"
                    />
                    <div className="flex flex-col justify-center  w-10/12 text-white">
                      <p className="font-bold mb-2">{product.model}</p>
                      <p className="mb-2">Color : {product.color}</p>
                      <p className="font-bold text-xl underline">
                        Total : ${product.total.toFixed(2)}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center bg-white w-10/12 rounded-lg p-2">
                    <p>Quantity</p>
                    <div className="flex justify-center items-center gap-5">
                      <button
                        onClick={() => {
                          dispatch(userAdd(product));
                          addCart(product);
                        }}
                        className="btn btn-sm bg-green-500 border-none hover:bg-green-200"
                      >
                        +
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        onClick={() => {
                          dispatch(userDelete(product));
                          deleteCart(product);
                        }}
                        className="btn btn-sm bg-red-500 border-none hover:bg-red-200"
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
          <div className="flex flex-col justify-end items-center h-fit p-3 w-full">
            <div className="text-center border-b-2 w-full pb-2 border-b-slate-400">
              <p className="text-lg text-pretty font-bold">
                Order Items <p className=" text-2xl ">{totalAmount} Item</p>
              </p>
            </div>
            <p className="text-2xl mt-5 text-pretty font-bold  ">
              Total Price : <span>$ {finalTotal.toFixed(2)}</span>
            </p>
            <div>
              <button className="btn hover:bg-green-200 hover:border-2 hover:border-green-500 bg-green-400 mt-5 text-xl w-full h-full rounded-lg">
                Check Out
              </button>
              <Link to="/">
                <button className="btn hover:bg-red-200 hover:border-2 hover:border-red-500 btn-active bg-red-500  mt-5 rounded-lg text-xl w-full h-full p-1">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Cart;
