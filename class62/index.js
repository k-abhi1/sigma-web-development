/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
let adjectives = ["Crazy", "Amazing", "Fire"]
let shopNames = ["Engine", "Foods", "Garments"]
let anotherWords = ["Bros", "Limited", "Hub"]

let businessName = adjectives[Math.floor(Math.random() * adjectives.length)] + shopNames[Math.floor(Math.random() * shopNames.length)] + anotherWords[Math.floor(Math.random() * anotherWords.length)]
console.log(businessName)

/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/