// Business Logic
const BankAccount = {
  createAccount: function (name, initialDeposit) {
    return {
      name: fullName,
      balance: initialDeposit,
      deposit: function (amount) {
        if (amount > 0) {
          this.balance += amount;
        } else {
          console.log('Deposit amount must be greater than 0.');
        }
      },
      withdraw: function (amount) {
        if (amount > 0 && amount <= this.balance) {
          this.balance -= amount;
        } else {
          console.log('Withdrawal amount must be greater than 0 and not exceed the account balance.');
        }
      },
    };
  },
};

const account = BankAccount.createAccount('John Doe', 1000);

