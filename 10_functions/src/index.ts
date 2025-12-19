// 1. 
function makeChai(type:string, cups:number){
    console.log(`Making a ${type} chai with ${cups} cups of water.`);
}
// makeChai("Masala", 2);


// 2. 
function getChaiPrice(type:string, cups:number):number{
    let pricePerCup:number;
    if(type === "Masala"){
        pricePerCup = 10;
    } else if(type === "Ginger"){
        pricePerCup = 12;
    } else {
        pricePerCup = 8;
    }
    return pricePerCup * cups;
}
let totalPrice = getChaiPrice("Ginger", 3);
// console.log(`Total price for chai: ₹${totalPrice}`);



// 3. 
function orderChai(order : {
    type: string,
    cups: number,
    size: "small" | "medium" | "large"
}): number{
    let basePrice = getChaiPrice(order.type, order.cups);
    let sizeMultiplier:number;
    if(order.size === "small"){
        sizeMultiplier = 1;
    } else if(order.size === "medium"){
        sizeMultiplier = 1.5;
    } else {
        sizeMultiplier = 2;
    }
    return basePrice * sizeMultiplier;
}