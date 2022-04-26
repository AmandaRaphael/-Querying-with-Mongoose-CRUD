import mongoose from "mongoose";

const { Schema, model } = mongoose;

const gradeSchema = new Schema({
  date: Date,
  grade: String,
  score: Number,
});

const restaurantSchema = new Schema({
  address: {
    building: { type: String },
    coord: [Number],
    street: { type: String },
    zipcode: { type: String },
  },
  borough: { type: String },
  cuisine: { type: String },
  grades: [gradeSchema],
  name: { type: String },
  restaurant_id: { type: String },
});

const Restaurant = model("restaurants", restaurantSchema);

export default Restaurant;