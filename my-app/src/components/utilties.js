
export const addComma = (price)=>{
    if(price === undefined)
        return
    let strPrice = price.toString();
    let commaPrice = "";
    let count = 0;
    for(let i = strPrice.length - 1; i > 0; i--){
        count++;
        commaPrice += strPrice[i];
        if(count === 3){
            commaPrice += ","
            count = 0;
        }      
    }
    let result = strPrice[0];
    for(let i = commaPrice.length - 1; i >= 0; i--){
      result += commaPrice[i];
    }
    return result;
};
