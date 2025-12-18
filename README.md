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