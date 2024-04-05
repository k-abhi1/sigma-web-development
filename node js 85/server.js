// https://nodejs.org/en/learn/getting-started/introduction-to-nodejs
console.log("hello wold");


var slugify = require('slugify')

slugify('some string') // some-string

// if you prefer something other than '-' as separator
slugify('some string', '_')  // some_string