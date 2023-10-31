// Business Logic
const BankAccount = {
  createAccount: function (name, initialDeposit) {
    return {
      name: name,
      balance: initialDeposit,
    };
  },
};

const account = BankAccount.createAccount('John Doe', 1000);

