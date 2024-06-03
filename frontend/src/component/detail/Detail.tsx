import axios from "axios";
import { useEffect } from "react";
import Footer from "../footer/Footer";
import Nav from "../header/Nav";
const API = "http://localhost:3003";
function Detail() {
  const getData = async () => {
    const data = await axios.get(`${API}/headphone/6657786299c1c7b38379466b`);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Nav></Nav>
      <Footer></Footer>
    </>
  );
}

export default Detail;
