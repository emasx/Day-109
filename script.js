const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];






// 157 - The find method

const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);
