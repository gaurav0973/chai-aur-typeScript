## Letcure-1 : Intro
- [X post](https://x.com/gauravkmaurya09/status/1996232373269323896?s=20)
# Summary
- Why typescript?
  - Javascript + types
  - Early error detection
  - Better tooling and autocompletion
  - Improved code readability and maintainability

## Lecture-2 : Internals
- [X post](https://x.com/gauravkmaurya09/status/1996616498430046672?s=20)
# Summary
-  TS Code
- Lexer → Breaks code into tokens
    - Tokens = the smallest meaningful pieces like let, name, =, 123

-  Parser → Builds the AST (code structure)
    - AST = Abstract Syntax Tree

-  Binder → Links variables, scopes & symbols
    - The binder connects variables, functions, and types to their scopes.
    - It creates a symbol table for accurate type analysis.

-  Checker → Validates types & catches errors
    - The type checker ensures your code respects TypeScript’s rules:
    - This is where TS catches errors before runtime.

-  Emitter → Outputs JS, .d.ts & source maps
Finally, TS emits:
    - 📄 .js → JavaScript output
    - 🧩 .d.ts → Type definitions
    - 🗺️ .map → Source maps for debugging


# Lecture-3 : Setup
- [X post](https://x.com/gauravkmaurya09/status/1997349011788059002?s=20)
# Summary
- Initialize a new project with npm init -y 
- Install TypeScript as a development dependency
```
npm install typescript --save-dev
```

- with typescript I can also install types for node/react/express etc
- Initialize TypeScript configuration
```
npx tsc --init
```
- Update tsconfig.json to set rootDir and outDir
- Create src directory for TypeScript files and dist directory for compiled JavaScript files


## Lecture-4 : Type Annotations and Inference in TypeScript
- [X post](https://x.com/gauravkmaurya09/status/1997351378793218293?s=20)
# Summary
- Type Annotations
  - mai bataunga ki variable/function/parameter ka type kya hoga
  - Example: 
    ```typescript
    let age: number = 25;
    function greet(name: string): string {
      return `Hello, ${name}!`;
    }
    ```
- Type Inference
  - mai apne aap hi samjh jaunga ki variable/function/parameter ka type kya hoga
  - Example:
    ```typescript
    let age = 25; // TypeScript infers age as number
    function greet(name) {
      return `Hello, ${name}!`; // TypeScript infers name as string
    }
    ```

## Lecture-5 : Union and Any 
- [X post](https://x.com/gauravkmaurya09/status/1997951693523485013?s=20)
# Summary
- Union Types
  - A variable can hold multiple types
  - Example:
    ```typescript
    let value: string | number;
    value = "Hello"; // valid
    value = 42;      // valid
    ```
- Any Type
  - A variable can hold any type, disabling type checking
  - Example:
    ```typescript
    let data: any;
    data = "Hello"; // valid
    data = 42;      // valid
    data = true;    // valid
    ```

## Lecture-6 : Type Narrowing and Type Guards
- [X post](https://x.com/gauravkmaurya09/status/2001650052612395068?s=20)
# Summary
- Type Narrowing
  - The process of refining a variable's type based on runtime checks
  - Example:
    ```typescript
    function process(value: string | number) {
      if (typeof value === "string") {
        // Here, TypeScript knows value is a string
        console.log(value.toUpperCase());
      } else {
        // Here, TypeScript knows value is a number
        console.log(value.toFixed(2));
      }
    }
    ```
- Type Guards
  - Functions or expressions that perform runtime checks to narrow types
  - Example:
    ```typescript
    function isString(value: any): value is string {
      return typeof value === "string";
    }

    function process(value: string | number) {
      if (isString(value)) {
        // Here, TypeScript knows value is a string
        console.log(value.toUpperCase());
      } else {
        // Here, TypeScript knows value is a number
        console.log(value.toFixed(2));
      }
    }
    ```

## Lecture-7 : Type Assertions/ any vs unknown/try-catch/never
- [X post](https://x.com/gauravkmaurya09/status/2002264862634867712?s=20)
# Summary
- Type Assertions
  - Telling the compiler to treat a variable as a specific type
  - Example:
    ```typescript
    let someValue: any = "Hello, TypeScript!";
    let strLength: number = (someValue as string).length;
    ```
- Any vs Unknown
  - Any: Disables type checking, can be assigned to any type
  - Unknown: Safer alternative to any, requires type checking before use

- Try-Catch
  - Example:
    ```typescript
    try {
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    ```
- Never Type
  - Represents values that never occur, such as functions that always throw errors or infinite loops
  - Example:
    ```typescript
    type Role = "admin" | "user";
    function redirectToRole(role: Role): never {
      if (role === "admin") {
        console.log("Redirect to admin dashboard");
        return;
      }
      if (role === "user") {
        console.log("Redirect to user dashboard");
        return;
      }
      throw new Error("Invalid role");
    }
    ```

## Lecture-8 : Types and Interfaces
- [X post](https://x.com/gauravkmaurya09/status/2002879614864862724?s=20)
# Summary
- Types
- Interfaces
- Differences between Types and Interfaces
   - Types can represent primitive types, union types, and tuples, while interfaces are primarily used for defining object shapes.
    - Interfaces support declaration merging, allowing multiple declarations with the same name to be combined, while types do not support this feature.
    - Types can use advanced features like mapped types and conditional types, which are not available with interfaces.
- When to use Types vs Interfaces
    - Use interfaces when defining the shape of objects, especially when you expect to extend or implement them.
    - Use types for more complex type definitions, such as unions, intersections, and tuples.
- & and optional properties
   - Example:
    ```typescript
    interface Person {
      name: string;
      age?: number; // optional property
    }

    type Employee = Person & {
      employeeId: number;
    };
    ```

## Lecture-9 : Objects in TypeScript
- [X post](https://x.com/gauravkmaurya09/status/2003494372089734912?s=20)
# Summary
- Defining Object Types
  - Using interfaces and type aliases to define the shape of objects
  - Example:
    ```typescript
    interface Person {
      name: string;
      age: number;
    }

    const john: Person = {
      name: "John",
      age: 30,
    };
    ```
- Satisft the bare minimum requirement
  - Example:
    ```typescript
    interface Person {
      name: string;
      age: number;
    }

    const jane: Person = {
      name: "Jane",
      age: 25,
      address: "123 Main St", // Extra property is allowed
    };
    ```
-  Partial/ Required /Pick/ Omit
  - Example:
    ```typescript
    interface Person {
      name: string;
      age: number;
      address: string;
    }

    const partialPerson: Partial<Person> = {
      name: "Alice",
    };

    const requiredPerson: Required<Person> = {
      name: "Bob",
      age: 40,
      address: "456 Elm St",
    };

    const pickedPerson: Pick<Person, "name" | "age"> = {
      name: "Charlie",
      age: 35,
    };

    const omittedPerson: Omit<Person, "address"> = {
      name: "David",
      age: 28,
    };
    ```

## Lecture-10 : Functions in TypeScript
- [X post](https://x.com/gauravkmaurya09/status/2004109126627987456?s=20)
# Summary
- Function Types
  - Defining parameter and return types for functions
  - Example:
    ```typescript
    function add(a: number, b: number): number {
      return a + b;
    }
    ```
- Optional and Default Parameters
  - Example:
    ```typescript
    function greet(name: string, greeting: string = "Hello"): string {
      return `${greeting}, ${name}!`;
    }
    ```
- Rest Parameters
  - Example:
    ```typescript
    function sum(...numbers: number[]): number {
      return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    ```
- Function Overloading
  - Example:
    ```typescript
    function combine(a: string, b: string): string;
    function combine(a: number, b: number): number;
    function combine(a: any, b: any): any {
      return a + b;
    }
    ```

## Lecture-11 : Arrays, Tuples, Enums in TypeScript
- [X post](https://x.com/gauravkmaurya09/status/2004723882167122176?s=20)
# Summary
- Arrays
  - Defining arrays with specific element types
  - Example:
    ```typescript
    let numbers: number[] = [1, 2, 3];
    let strings: Array<string> = ["a", "b", "c"];
    ```
- Tuples
  - Fixed-length arrays with specific types for each element
  - Example:
    ```typescript
    let person: [string, number] = ["Alice", 30];
    ```
- Enums
  - Defining a set of named constants
  - Example:
    ```typescript
    enum Color {
      Red,
      Green,
      Blue,
    }

    let favoriteColor: Color = Color.Green;
    ```
