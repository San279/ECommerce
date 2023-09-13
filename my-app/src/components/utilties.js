
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


export const extractDate = (dateTime)=>{
    var result = new Date(dateTime);
    result.setDate(result.getDate());
    const resStr = result.toDateString();
    return resStr;
}

export const extractTime = (dateTime)=>{
    const dateTimesplit = dateTime.split('T');
    const timeSplit = dateTimesplit[1].split('.');
    return timeSplit[0];
}

export const addDays = (dateTime, days) =>{
    var result = new Date(dateTime);
    result.setDate(result.getDate() + days);

    const resStr = result.toDateString();
    return resStr;

}