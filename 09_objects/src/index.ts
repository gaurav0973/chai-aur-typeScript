// 1. Declaring obbject types
let tea: {
    name : string,
    price: number,
    isHot: boolean
}
tea = {
    name: "Ginger Tea",
    price: 25,
    isHot: true
};

// 2. type aliases
type Tea = {
    name : string,
    price: number,
    ingredients: string[]
};
const masalaTea: Tea = {
    name: "Masala Tea",
    price: 30,
    ingredients: ["Tea Leaves", "Spices", "Milk", "Sugar"]
}

// 3. satisfy the bare minimum
type Cup = {
    size: string,
}
let smallCup: Cup = {
    size: "Small"
};
let bigCup = {
    size: "Big",
    isInsulated: true
};
smallCup = bigCup; // valid assignment

// 4. Partial/ Required /Pick/ Omit
type Chai = {
    name: string,
    price: number,
    isHot : boolean
}
const updateChai = (chai : Partial<Chai>) => {
    console.log("Updating chai...", chai);
}
// updateChai({ price: 35 });
updateChai({}); // valid call => this create some bugs too



