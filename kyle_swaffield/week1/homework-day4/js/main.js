// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank is an object, which contains an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
const bank = {
  accounts: ["Kyle","Zara","Luke"],
  balances: [200,300,400]
};

bank.totalSum = function(){
  let sumTotal = 0;
  for(let i = 0; i <= this.balances.length-1;i++){
    sumTotal = sumTotal + this.balances[i];
  }
  this.bankBalance = sumTotal;
}
bank.totalSum();
console.log(bank.bankBalance);

bank.addAccount = function(str){
  this.accounts.push(str);
  this.balances.push(0);
}

bank.addAccount("Tony");

bank.accountQuery = function(str){
  const index = this.accounts.indexOf(str);
  return  this.balances[index];
}

bank.deposit = function(str,amount){
  const index = this.accounts.indexOf(str);
  this.balances[index] = this.balances[index] + amount;
}

console.log(bank.accountQuery("Kyle"));
bank.deposit("Kyle",150);
console.log(bank.accountQuery("Kyle"));

bank.withdraw = function(str,amount){
  const index = this.accounts.indexOf(str);
  const withAmount = this.balances[index] - amount;
  if(withAmount < 0 ){
    return "Insuffiecent Funds";
  }else{
    this.balances[index] = withAmount;
    return "Your account total: $" + this.balances[index];
  }
}

//bank.withdraw("Kyle",400);


//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
