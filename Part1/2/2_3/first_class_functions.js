const multiplier = new Function('a', 'b', 'return a*b')
console.log(multiplier(2, 3));
console.log(`multiplier is instance of ${typeof multiplier}`)
console.log(`- which has a length of ${multiplier.length}`);


const fruits = ['coconuts', 'apples', 'strawberry', 'berry'];
fruits.sort((a, b) => b.length - a.length)
console.log(fruits);