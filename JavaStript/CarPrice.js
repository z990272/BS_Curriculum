var Cars = ['BMW', 'Bens', 'Audi', 'Lexus'];
var Prices = [280, 320, 250, 210];

var sum = 0;
for(i = 0; i < Prices.length; i++){
    sum += Prices[i];
}
console.log('車輛總價 = '+ sum);