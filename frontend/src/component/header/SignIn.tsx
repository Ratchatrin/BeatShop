import { useState } from "react";
import Footer from "../footer/Footer";
import Nav from "./Nav";
import axios from "axios";
import { useNavigate } from "react-router";
const API = "https://beatshop.onrender.com";
function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(String);
  const [username, setUsername] = useState(String);
  const [password, SetPassword] = useState(String);
  const [emptyInput, setEmptyInput] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const navigator = useNavigate();
  const signIn = async () => {
    try {
      if (email && username && password.length !== 0) {
        const user = {
          email,
          username,
          password,
        };
        const signIn = await axios.post(`${API}/signIn`, user);
        if (signIn.status === 208) {
          setEmailExist(true);
          setTimeout(() => {
            setEmailExist(false);
          }, 2000);
          setEmail("");
          SetPassword("");
          setUsername("");
        }
        navigator("/login");
      } else {
        setEmptyInput(true);
        setTimeout(() => {
          setEmptyInput(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Nav></Nav>
      <section className="flex flex-col justify-start items-center bg-red-500 w-full h-full ">
        <div className="bg-white w-11/12 max-w-xl  mt-10  p-5 flex flex-col justify-center items-center rounded-lg">
          <p className="w- full text-center font-bold text-3xl ">SignIn</p>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold">Email</span>
            </div>
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered input-error w-full max-w-xs focus:outline-none"
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              value={email}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold">Username</span>
            </div>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered input-error w-full max-w-xs focus:outline-none"
              onChange={(ev) => {
                setUsername(ev.target.value);
              }}
              value={username}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text font-bold">Password</span>
            </div>
            <div className="flex border-[1px] outline-2 border-red-500 pl-2 pr-2 rounded-sm ">
              <input
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                className="input  border-none outline-none focus:outline-none w-full max-w-xs pl-2"
                onChange={(ev) => {
                  SetPassword(ev.target.value);
                }}
                value={password}
              />
              <label className="swap">
                <input type="checkbox" />
                <div
                  className="swap-on"
                  onClick={() => {
                    setShowPassword(true);
                  }}
                >
                  Hide
                </div>
                <div
                  className="swap-off"
                  onClick={() => {
                    setShowPassword(false);
                  }}
                >
                  Show
                </div>
              </label>
            </div>
          </label>
          <button
            className="btn bg-red-500 mt-5 pl-5 pr-5 text-white rounded-xl"
            onClick={signIn}
          >
            SignIn
          </button>
          {emptyInput ? (
            <>
              <div role="alert" className="alert bg-red-500 mt-5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white">Please Fill in the Blank.</span>
              </div>
            </>
          ) : (
            <></>
          )}
          {emailExist ? (
            <>
              <div role="alert" className="alert bg-red-500 mt-5 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-white">Email already Exist.</span>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default SignIn;
