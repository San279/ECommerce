import {createSlice} from "@reduxjs/toolkit";
import { publicRequest,userRequest } from "../requestMethods";
import { updateCart, createCart } from "./apiCalls";
import { SettingsApplicationsSharp } from "@material-ui/icons";

const cartMap = new Map();
const cartDeleteMap = new Set();

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        userId: null,
        _id:null,
        products:[],
        quantity:0,
        total:0,
    },

    reducers:{
        addProduct:(state,action)=>{
            if(state.products !== []){
                for(let i = 0; i < state.products.length; i++){
                    cartMap.set(state.products[i].title, i)
                }

                if(cartMap.has(action.payload.title)){
                    const getIndex = cartMap.get(action.payload.title);
                    state.products[getIndex].quantity += action.payload.quantity;
                    state.quantity += action.payload.quantity;
                    state.total += action.payload.price * action.payload.quantity;
                }
                else{
                    state.quantity += action.payload.quantity;
                    state.products.push(action.payload);
                    state.total += action.payload.price * action.payload.quantity;
                }

            }
            else{
                state.quantity += action.payload.quantity;
                state.products.push(action.payload);
                state.total += action.payload.price * action.payload.quantity;
            }

        },
        addProductfromCart:(state,action)=>{
            for(let i = 0; i < state.products.length; i++){
                if(state.products[i].title === action.payload.title){
                    state.products[i].quantity += 1;
                    state.quantity += 1;
                    state.total += action.payload.price;
                }
            }        
        },
        
        deleteProduct:(state,action)=>{
            for(let i = 0; i < state.products.length; i++){
                if(state.products[i].title === action.payload.title){
                    state.products[i].quantity -= 1;
                    if(state.products[i].quantity === 0){
                        state.products.splice(i, 1);
                    }
                    state.quantity -= 1;
                    state.total -= action.payload.price;
                }
            }
            if(state.total < 0)
                state.total = 0;
            if(state.quantity < 0)
                state.quantity = 0;
                
        },
        deleteProductAfterOrder:(state,action)=>{
            for(let i = 0; i < action.payload.length; i++){
                cartDeleteMap.add(action.payload[i].title);
                }
            
            for(let i = 0; i < state.products.length; i++){
                if(cartDeleteMap.has(state.products[i].title)){
                    state.products.splice(i, 1);
                }
            }
        },
        clearCart:(state)=>{
            state.products = [];
            state.quantity=0;
            state.total = 0;
        },

        logoutCart:(state)=>{
            if(state._id != null){
                updateCart(state);
            }else if(state._id == null && state.products !== []){
                createCart(state)
            }
            state.products = [];
            state.quantity=0;
            state.total = 0;
            state._id = null;
            state.userId = null;
        },

        userCart:(state, action)=>{
                for(let i = 0; i < action.payload.products.length; i++){
                    state.products.push(action.payload.products[i])
                }
                state.quantity = action.payload.quantity;
                state.total = action.payload.total;
        },
        setCartId:(state,action) =>{
            state._id = action.payload
        },
        setUserId:(state,action) =>{
            state.userId = action.payload
        },

    },
});

export const {addProduct,logoutCart, setCartId, 
userCart, setUserId, deleteProduct, addProductfromCart, 
deleteProductAfterOrder, clearCart} = cartSlice.actions;
export default cartSlice.reducer;

