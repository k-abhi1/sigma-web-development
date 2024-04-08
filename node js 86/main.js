// import {a, b, d} from "./mymodule.js"
// console.log(a, b, d)


// import harry from "./mymodule.js"
// console.log(harry)

// (function(exports, require, module, __filename, __dirname) {

//     // Module code actually lives here
  
//   });

// const a = require("./mymodule2.js")

// console.log(a, __dirname, __filename)

console.log("This is index.js");

// For example, in an Express app, you can use this to set different error handlers per environment:

if (process.env.NODE_ENV === 'development') {
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  }
  
  if (process.env.NODE_ENV === 'production') {
    app.use(express.errorHandler());
  }

//   Once you have a WebAssembly module, you can use the Node.js WebAssembly object to instantiate it.
  // Assume add.wasm file exists that contains a single function adding 2 provided arguments
const fs = require('node:fs');
const wasmBuffer = fs.readFileSync('/path/to/add.wasm');
WebAssembly.instantiate(wasmBuffer).then(wasmModule => {
  // Exported function live under instance.exports
  const { add } = wasmModule.instance.exports;
  const sum = add(5, 6);
  console.log(sum); // Outputs: 11
});


  