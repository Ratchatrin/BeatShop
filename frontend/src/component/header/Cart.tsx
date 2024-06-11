import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
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
function Cart() {
  const [cart, setCart] = useState<headphone[]>([]);
  const userData = useSelector((state: state) => state.productData.userData);
  //  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const updateWindowWidth = () => {
  //   setWindowWidth(window.innerWidth);
  // };
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
                <div className="flex mb-5 bg-red-500 p-2 rounded-lg">
                  <img
                    src={product.picture[product.color][0]}
                    alt=""
                    className="rounded-lg w-4/12 mr-2"
                  />
                  <div className="flex flex-col justify-center  w-8/12 text-white">
                    <p>{product.name}</p>
                    <p>Color : {product.color}</p>
                    <p>Quantity : {product.quantity}</p>
                    <p>Total : ${product.total}</p>
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
              Total Price : <span>$ {finalTotal}</span>
            </p>
            <div>
              <button className="btn bg-green-400 mt-5 text-xl w-full h-full">
                Check Out
              </button>
              <Link to="/">
                <button className="btn btn-active bg-red-500 text-white mt-5 text-xl w-full h-full p-1">
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
