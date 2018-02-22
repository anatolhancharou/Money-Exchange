// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var coins = {};
    if (currency <= 0) return coins;
    if (currency > 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
        return coins;
    }
    coins.H = Math.floor(currency / 50);
    coins.Q = Math.floor((currency - coins.H * 50) / 25);
    coins.D = Math.floor((currency - coins.H * 50 - coins.Q * 25) / 10);
    coins.N = Math.floor((currency - coins.H * 50 - coins.Q * 25 - coins.D * 10) / 5);
    coins.P = currency - coins.H * 50 - coins.Q * 25 - coins.D * 10 - coins.N * 5;
    if (coins.H === 0) delete coins.H;
    if (coins.Q === 0) delete coins.Q;
    if (coins.D === 0) delete coins.D;
    if (coins.N === 0) delete coins.N;
    if (coins.P === 0) delete coins.P;
    return coins;
}
