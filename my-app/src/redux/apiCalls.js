import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { setCartId, userCart, setUserId } from "./cartRedux";

export const login = async (dispatch,user)=>{
    dispatch(loginStart());
    try{
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure());
    }
};

export const loginGoogle = async (dispatch, user)=>{
    dispatch(loginStart());
    try{
        dispatch(loginSuccess(user));
    }catch(err){
        dispatch(loginFailure());
    }
};

export const getUserCart = async (dispatch,userId)=>{
    try{  
        const cart = await publicRequest.get("/cart/find/" + userId); //get user cart's data if have
        dispatch(userCart(cart.data));  //get all user's cart
        dispatch(setCartId(cart.data._id))  //set cart database id
        dispatch(setUserId(userId)) //set user id in cart
    }catch(err){
        dispatch(setUserId(userId)) //if cart id is not found (for new user) just set user id
    }
};

export const updateCart = async (cart)=>{
    try{  
        const usercart = await publicRequest.put("/cart/" + cart._id, cart); //get user cart's data if have
    }catch(err){}
};

export const createCart = async (cart)=>{
    try{ 
        var newCart = {
            "userId": cart.userId,
            "products": cart.products,
            "quantity": cart.quantity,
            "total": cart.total
        }
        const res = await publicRequest.post("/cart", newCart);
    }catch(err){}
};


