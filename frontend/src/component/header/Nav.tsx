import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <>
      <div className="w-full flex justify-center items-center ">
        <Link to="/">
          <img
            src="https://miro.medium.com/v2/resize:fit:990/0*VamjJKj0jkHLyNig.png"
            alt="logo"
            className="w-7/12 max-w-48"
          />
        </Link>
        <div className="drawer drawer-end w-fit z-[2]">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
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
              <li>
                <a>Login</a>
              </li>
              <li>
                <details>
                  <summary>Products</summary>
                  <ul className="menu p-1 w-52 min-h-full bg-inherit text-inherit">
                    <li>
                      <details>
                        <summary>EarBuds</summary>
                        <ul>
                          <li>
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQLH3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1682361480584"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Studio Buds +</a>
                            </div>
                          </li>
                          <li>
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MJ503?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1621538312000"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Studio Buds</a>
                            </div>
                          </li>
                          <li>
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MK2J3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1634663503000"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Fit Pro </a>
                            </div>
                          </li>
                          <li>
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MV702?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1602803373000"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>PowerBeats Pro</a>
                            </div>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Headphones</summary>
                        <ul>
                          <li>
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTR3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671097"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Studio Pro Wireless Headphones</a>
                            </div>
                          </li>
                          <li>
                            <div className="w-48 flex  justify-start items-start text-pretty">
                              <img
                                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MUW23?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1712255585028"
                                alt="headphone"
                                className="w-4/12 max-w-xs rounded-xl"
                              />
                              <a>Beats Solo 4 — On-Ear Wireless Headphones</a>
                            </div>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
