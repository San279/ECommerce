const mongoose = require("mongoose");
const {boolean} = require("webidl-conversions");


const ProductSchema = new mongoose.Schema({
    title: {type:String, required:true, unique: true},
    desc: {type:String, required:true, default: ""},
    categories: {type:Array},
    type:{type:Array},
    dimensions: {type:String, default: ""},
    image: {type:String, default: ""},
    album: {type:Array},
    origin: {type:String, default: ""},
    price: {type:Number, required:true, default: 0},
    inStock: {type:Boolean, default: true},
}, {timestamps: true}
);


module.exports = mongoose.model("Product",ProductSchema);