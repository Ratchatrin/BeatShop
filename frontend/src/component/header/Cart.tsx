import { useSelector } from "react-redux";
import Footer from "../footer/Footer";
import Nav from "./Nav";
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
  const cart = useSelector((state: state) => state.productData.userData.cart);
  return (
    <>
      <Nav></Nav>
      <section className="flex flex-col justify-start items-center bg-red-500 w-full ">
        <div className="bg-white w-11/12 max-w-lg mt-3 rounded-lg flex flex-col mb-5 p-3 justify-center items-center">
          <p className="font-bold text-2xl mb-5">Cart</p>
          {cart.map((product) => {
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
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Cart;
