console.log("hello wold");


var slugify = require('slugify')

slugify('some string') // some-string

// if you prefer something other than '-' as separator
slugify('some string', '_')  // some_string