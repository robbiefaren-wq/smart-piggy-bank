
const piggyBank = {
  owner: "Viktor",
  balance: 0,
  goal: 100,
  deposit(amount) {
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
  },
  checkGoal() {
    if(this.balance >= this.goal) {
      return `🎉 Target amount reached ${this.balance} 🎉!`
    } else {
      return `⛔ Amount remaining: ${this.goal - this.balance} ⛔`;
    }
  }
}