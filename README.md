Describe: rollDice()

Test: It should randomly generate a number from 1 to 6.
Code: rollDice()
Expected Output: 1, 2, ... 6

Describe: isOne()

Test: It should check if the roll is equal to 1.
Code: rollDice()
Expected Output: 1 === true

Describe: rollResult()

Test: It should resturn the value of the number rolled
Code: rollResult(2)
Expected Output: 2

Test: It should return 0 is a one is rolled
Code: rollResult(1)
Expected Output: 0

Test: It should total the numbers rolled
Code: rollResult(4, 2, 4)
Expected Output: 10

Test: It should reset turn score counter to zero if a 1 is rolled
Code rollResult(4, 5, 1)
Expected Output: 0