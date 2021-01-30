const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;


const subSchema = new mongoose.Schema(
{
  name: {
    type: String,
    //trims off blank spaces in query
    trim: true,
    required: "Name is required",
    minlength: [3, "Too short"],
    maxLength: [32, "Too long"],
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    index: true,
  },
  parent: {
      type: ObjectId,
      ref: "Category",
      required: true,
  }
},
{timestamps: true}
);

module.exports = mongoose.model('Sub', subSchema);
