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
- [X post](https://x.com/gauravkmaurya09/status/1996994861914866688?s=20)
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