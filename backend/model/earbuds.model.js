import { Schema, model } from "mongoose";

const EarbudsSchema = Schema({
  brand: String,
  name: String,
  color: Array,
  productInformation: Object,
  picture: Object,
});

const Earbuds = model("Earbuds", EarbudsSchema, "earbuds");
export default Earbuds;
