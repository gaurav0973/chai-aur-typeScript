// union
const subscribers : number | string = '1M'
// console.log(subscribers)


const apiRequestStatus : 'loading' | 'success' | 'error' = 'loading'
// console.log(apiRequestStatus)

// any
const orders = ["12", "26", "34"]
let currentOrder: any
for(let order of orders) {
    if(order === "26") {
        currentOrder = order
        break
    }
}
console.log(typeof currentOrder)

