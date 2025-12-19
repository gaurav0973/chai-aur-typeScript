// 1. Arrays


const chaiFlavors: string[] = ["Masala", "Ginger", "Cardamom", "Tulsi"]
const chaiPrices: Array<number> = [4.5, 4.0, 4.8, 3.9]
type Chai = {
    name: string,
    price: number
}
const chaiMenu: Chai[] = [
    {name: "masala", price: 4.5},
    {name: "ginger", price: 4.0},
]
const cities: readonly string[] = ["Delhi", "Mumbai", "Bangalore"]





// 2. tuples = order of declared types matters


let chaiTuple: [string, number, boolean?] // type declaration
chaiTuple = ["Masala", 3] // valid
// chaiTuple = [3, "Masala"] // invalid

const location: readonly [number, number] = [28.6139, 77.2090]

const chaiItems: [name: string, price: number][] = [
    ["Masala", 4.5],
    ["Ginger", 4.0],
]



// 3. enum
enum ChaiSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large"
}

function orderChai(order : ChaiSize): string{
    return `You have ordered a ${order} chai.`
}
console.log(orderChai(ChaiSize.MEDIUM))
