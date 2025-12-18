//1. Type Assertion
let responce:any = "43"

let numericLength:number = (responce as string).length

type Book = {
    name:string
}
let BookString = '{"name":"Learn TypeScript"}'
let bookObject = JSON.parse(BookString) as Book
console.log(bookObject.name)


// 2. any and unknown
let value:any
value = true
value = "Hello"
value = 42
value.toUpperCase() // No Error

let newValue:unknown
newValue = true
newValue = "Hello"
newValue = 42
// newValue.toUpperCase() // Error


// 3. try-catch Error Handling


try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error ", error)
}

// 4. type never
type Role = "admin" | "user"
function redirectToRole(role:Role){
    if(role === "admin"){
        console.log("Redirect to admin dashboard")
        return
    }
    if(role === "user"){
        console.log("Redirect to user dashboard")
        return
    }
    role // Type 'never'
}