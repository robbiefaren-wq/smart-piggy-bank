
const piggyBaank = {
  owner: "Viktor",
  balance: 0,
  deposite(amount) {
    if(amount > 0) {
      this.balance += amount;
      return this.balance;
    }
  },
  withdraw(amount) {
    if(amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      return this.balance;
    }
  }
}