# Getting Started with React Components & React Hooks

Site can be found at - https://kitbudgetapp.netlify.app

This is a very simple Budget App, that tracks deposits and expenses, allows transfer to savings, and setting target savings goals, showing the percentage of that goal saved.

## How to Use

1. Enter a transactions amount. Descrption and Date are optional, but you must choose Expense or Deposite type from the drop-down menu.

2. The balance gets started, showing how much you have. Expenses will withdraw from that balance. The balance is allowed to go into negative, but you can't transfer to savings if there's nothing to transfer.

3. Hit Reset on the Savings to reset the goal to zero, and to transfer the Savings amount back to the balance.

## About

1. The savings and balance are kept separate, as in a real-world checkings and savings scenario, where seeing a total balance of what's in all accounts when withdrawing for expenses would not be helpful.

2. However, it is possible to put the savings back to the current balance by resetting the savings and target goal. The target can be modified this way at anytime.

3. Description and Date fields are there for future implementation of listing transactions, and the edit and delete options that would come with that.