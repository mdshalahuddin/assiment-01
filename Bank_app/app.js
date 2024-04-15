class BankAccount {
    constructor(accountNumber, ownerName, balance = 0) {
      this.accountNumber = accountNumber;
      this.ownerName = ownerName;
      this.balance = balance;
    }

    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
      } else {
        console.log('Invalid deposit amount.');
      }
    }

    withdraw(amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
      } else {
        console.log('Insufficient funds or invalid amount.');
      }
    }

    checkBalance() {
      console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
    }
  }

  // Example use
  const account1 = new BankAccount(1001, 'John Doe');
  account1.deposit(1000);
  account1.withdraw(500);
  account1.checkBalance();

  const account2 = new BankAccount(1012, 'sadek', 1500);
  account2.deposit(500);
  account2.withdraw(300);
  account2.checkBalance();
