// import {randInt} from "crypto";

// The error message you're encountering suggests that you're trying to use ES6 module syntax (import) in a 
// CommonJS environment where it's not supported by default. In Node.js, the crypto module is a built-in module 
// that can be imported using CommonJS syntax (require).
const crypto = require('crypto');
const otp = crypto.randomInt(100000,1000000);// 6 digit otp
console.log(otp);