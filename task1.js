drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "cola", price: 35 },
    { name: "orange juice", price: 25 },
    { name: "water", price: 5 },
    { name: "mango smoothie", price: 60 }
]
function sortedByPrice(drinks) {
    let sorted = drinks.sort((a, b) => a.price - b.price);
    return sorted;
}
console.log(sortedByPrice(drinks));