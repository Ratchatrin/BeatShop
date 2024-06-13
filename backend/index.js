import express, { json } from "express";
import mongoose from "mongoose";
import cors from "cors";
import HeadPhone from "./model/headphone.model.js";
import Earbuds from "./model/earbuds.model.js";
import User from "./model/user.model.js";
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
    res.json(headphone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/signIn", async (req, res) => {
  try {
    const checkUser = await User.findOne({ email: req.body.email });
    if (checkUser) {
      res.status(208).json("Email is Exist");
    } else {
      const user = await User.create(req.body);
      res.status(201).json(user);
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (user) {
      if (user.password === password) {
        res.status(200).json(user);
      } else {
        res.status(200).json({ message: "Incorrect password" });
      }
    } else {
      res.status(200).json({ message: "User not found" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});
app.put("/cart/add/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userFilter = await User.findById(userId);
    const indexProduct = userFilter.cart.findIndex((product) => {
      return (
        product.id === req.body.id &&
        product.name === req.body.name &&
        product.color[0] === req.body.color[0]
      );
    });

    if (indexProduct == -1) {
      const userUpdate = await User.findByIdAndUpdate(userId, {
        $push: { cart: req.body },
      });
    } else {
      const userUpdateQuantity = await User.findByIdAndUpdate(userId, {
        $set: {
          [`cart.${indexProduct}.quantity`]:
            userFilter.cart[indexProduct].quantity + req.body.quantity,
        },
      });
      const userUpdateTotal = await User.findByIdAndUpdate(userId, {
        $set: {
          [`cart.${indexProduct}.total`]:
            userFilter.cart[indexProduct].price *
            (userFilter.cart[indexProduct].quantity + req.body.quantity),
        },
      });
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
app.put("/cart/add/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userFilter = await User.findById(userId);
    const indexProduct = userFilter.cart.findIndex((product) => {
      return (
        product.id === req.body.id &&
        product.name === req.body.name &&
        product.color[0] === req.body.color[0]
      );
    });

    if (indexProduct == -1) {
      const userUpdate = await User.findByIdAndUpdate(userId, {
        $push: { cart: req.body },
      });
    } else {
      const userUpdateQuantity = await User.findByIdAndUpdate(userId, {
        $set: {
          [`cart.${indexProduct}.quantity`]:
            userFilter.cart[indexProduct].quantity + req.body.quantity,
        },
      });
      const userUpdateTotal = await User.findByIdAndUpdate(userId, {
        $set: {
          [`cart.${indexProduct}.total`]:
            userFilter.cart[indexProduct].price *
            (userFilter.cart[indexProduct].quantity + req.body.quantity),
        },
      });
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
app.put("/addByOne/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userFilter = await User.findById(userId);
    const indexProduct = userFilter.cart.findIndex((product) => {
      return (
        product.id === req.body.id &&
        product.name === req.body.name &&
        product.color[0] === req.body.color[0]
      );
    });

    if (indexProduct == -1) {
      const userUpdate = await User.findByIdAndUpdate(userId, {
        $push: { cart: req.body },
      });
    } else {
      const userUpdateQuantity = await User.findByIdAndUpdate(userId, {
        $set: {
          [`cart.${indexProduct}.quantity`]: (userFilter.cart[
            indexProduct
          ].quantity += 1),
        },
      });
      const userUpdateTotal = await User.findByIdAndUpdate(userId, {
        $set: {
          [`cart.${indexProduct}.total`]:
            userFilter.cart[indexProduct].price *
            (userFilter.cart[indexProduct].quantity + req.body.quantity),
        },
      });
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
app.put("/deleteByOne/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    const userFilter = await User.findById(userId);
    const indexProduct = userFilter.cart.findIndex((product) => {
      return (
        product.id === req.body.id &&
        product.name === req.body.name &&
        product.color[0] === req.body.color[0]
      );
    });

    if (indexProduct == -1) {
      const userUpdate = await User.findByIdAndUpdate(userId, {
        $push: { cart: req.body },
      });
    } else {
      const userUpdateQuantity = await User.findByIdAndUpdate(userId, {
        $set: {
          [`cart.${indexProduct}.quantity`]: (userFilter.cart[
            indexProduct
          ].quantity -= 1),
        },
      });
      const userUpdateTotal = await User.findByIdAndUpdate(userId, {
        $set: {
          [`cart.${indexProduct}.total`]:
            userFilter.cart[indexProduct].price *
            (userFilter.cart[indexProduct].quantity + req.body.quantity),
        },
      });
    }
  } catch (error) {
    console.error("Error adding item to cart:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});
app.put("/resetpassword", async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    const checkUser = await User.findOne({ email: email });
    if (checkUser) {
      const newUser = await User.findByIdAndUpdate(checkUser._id, {
        $set: { password: newPassword },
      });
      res.status(200).json(newUser);
    } else {
      res.status(404).json({ message: "User not found" });
    }
    console.log(checkUser);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});
