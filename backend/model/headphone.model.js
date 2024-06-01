import { Schema, model } from "mongoose";

const HeadPhoneSchema = Schema({
  brand: String,
  name: String,
  color: Array,
  productInformation: Object,
  picture: Object,
});

const HeadPhone = model("HeadPhone", HeadPhoneSchema, "headphone");
export default HeadPhone;
