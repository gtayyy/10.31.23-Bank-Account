// Business Logic
const BankAccount = {
  createAccount: function (name, initialDeposit) {
    return {
      name: name,
      balance: initialDeposit,
      deposit: function (amount) {
        if (amount > 0) {
          this.balance += amount;
        } else {
          console.log('Deposit amount must be greater than 0.');
        }
      },
    };
  },
};

const account = BankAccount.createAccount('John Doe', 1000);

