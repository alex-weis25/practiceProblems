/*
Question 3: changePossibilities

  changePossibilities(amount,amount): Your quirky boss collects rare, old coins. They found out you're a programmer and asked you to solve something they've been wondering for a long time.

  Write a function that, given an amount of money and an array of coin denominations, computes the number of ways to make the amount of money with coins of the available denominations.

  Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4—the number of ways to make 4¢ with those denominations:
*/

/* changePossibilities uses dynammic programming to solve the problem.
  It assumes that there is 1 way to make change for a value of 0 and O ways to make change if no coins are provided.
  This function creates a new array (combinations) whose length corresponds to the value that needs to be converted into change. ChangePossibilities then uses a nested loop to check if each coin's
  value is less than or equal to the array's value at the current index. (i.e. you can't use $5 to make change for $1).
  If true, the function takes the combination at the index of the current value less the coin value and adds it the total possibilites.
  This process continues for each coin at each index value until the final value is calculated.
  */

const changePossibilities = (value, coins) => {
  if (typeof value !== 'number') return 0;
  const combinations = (new Array(value + 1)).fill(0);
  combinations[0] = 1;

  for (let coin of coins){
    for (let amount = 1; amount < value + 1; amount++){
      if (coin <= amount){
        combinations[amount] += combinations[amount - coin];
      }
    }
  }
  return combinations[value];
};

module.exports = changePossibilities;
