var products = [
    ['BMW', 280],
    ['Bens', 320],
    ['Audi', 250],
    ['Lexus', 210]
];

var sum = 0;
var tax_sum = 0;
for(i = 0; i < products.length; i++){
    sum += products[i][1];
    tax_sum += products[i][1] * 1.05;
}

console.log('車輛總價 = ' + sum);
console.log('車輛含稅總價 = ' + tax_sum);
