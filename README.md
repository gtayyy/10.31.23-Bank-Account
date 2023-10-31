# Deposit + Withdrawal account 
### By Grant Abel

# Development Testing 

## Description: Create a web app that creates a new bank account for the user. User first/last name, phone number and initial deposit are taken to open the account. Deposits and withdrawals can be made to the account, with the balance updated after each transaction. If a withdrawal is to be greater than the available balance, an error message will be thrown.

### Test 1: Create a new bank account
Input: Name: "John Doe", Initial Deposit: 1000
Expected Output: A new bank account object with a balance of 1000.

### Test 2: Make a deposit
Input: Bank account with a balance of 1000, Deposit amount: 500
Expected Output: The balance of the account should be 1500.

### Test 3: Make a withdrawal
Input: Bank account with a balance of 1500, Withdrawal amount: 700
Expected Output: The balance of the account should be 800.

### Test 4: Attempt withdrawal with insufficient balance
Input: Bank account with a balance of 300, Withdrawal amount: 500
Expected Output: An error indicating insufficient funds, and the balance remains 300.

### Test 5: Check account balance
Input: Bank account with a balance of 800
Expected Output: The current balance should be 800.

### Test 6: Check account owner's name
Input: Bank account with the owner's name as "Alice"
Expected Output: The owner's name should be "Alice".