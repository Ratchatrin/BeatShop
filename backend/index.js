import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import HeadPhone from "./model/headphone.model.js";
import Earbuds from "./model/earbuds.model.js";
const app = express();
const PORT = process.env.PORT || 5050;
app.use(json());
app.use(cors());
mongoose
  .connect(
    "mongodb+srv://ratchatrin12:QpACmHJUWMCJBLIl@cluster0.cayleoy.mongodb.net/beat?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connect to Database");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
  });

app.get("/headphone", async (req, res) => {
  try {
    const headphone = await HeadPhone.find({});
    res.status(200).json(headphone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/earbuds", async (req, res) => {
  try {
    const earbuds = await Earbuds.find({});
    res.status(200).json(earbuds);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.get("/headphone/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const headphone = await HeadPhone.findById(id);
    res.status(200).json(headphone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
