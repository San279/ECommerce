
const Cart = require("../models/Cart");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin} = require("./verifyToken");
const router = require("express").Router();


//Create
router.post("/", async (req,res)=>{
    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);  //to send
    }catch(err){
        res.status(500).json(err)
    }
});


//update
router.put("/:id", async (req, res) =>{

    try{
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, 
        {new: true}
        );
        res.status(200).json(updatedCart);
    }catch (err) {
        res.status(500).json(err);
    }
});


//Delete
router.delete("/:id", verifyTokenAndAuthorization, async (req,res)=>{
    try{
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("The product has been deleted");

    }catch(err){
        res.status(500).json(err);
    }
});


//Get user's cart
router.get("/find/:userId", async (req,res)=>{
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart)

    }catch(err){
        res.status(500).json(err);
    }
});


//Get All Cart
router.get("/", verifyToken, async (req, res) => {
    try {
      const carts = await Cart.find();
      res.status(200).json(carts );
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;