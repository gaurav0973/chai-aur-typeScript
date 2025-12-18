//1. types
type chaiOrder = {
    type : string,
    suger: number,
    strong: boolean
}
function createChai(order: chaiOrder){
    console.log(order)
}

//2. where types fails
// type CupSize = "small" | "large"
// class Chai implements CupSize{

// }

//3. interfaces
interface CupSize {
    size: "small" | "large"
}
class Chai implements CupSize{
    size: "small" | "large" = "small"
}

// 4. & /optional=?
type BaseChai = {
    teaLeaves : number
}
type Extra = {
    masala : boolean
}
type MasalaChai = BaseChai & Extra
let myChai : MasalaChai = {
    teaLeaves: 5,
    masala: true
}

