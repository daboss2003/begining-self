from bank_account import *

Dave = BankAccount(1000, "Dave")
sarah = BankAccount(2000, "sarah")

Dave.getBalance()
sarah.getBalance()

sarah.deposit(500)

Dave.withDraw(100)

Dave.transfer(10000,sarah)
Dave.transfer(100,sarah)


jim = intresetRewardAcct(1000,"jim")

jim.getBalance()

jim.deposit(100)

jim.transfer(100,Dave)


Blaze = SavingsAcct(1000,"Blaze")

Blaze.getBalance()
Blaze.deposit(100)
Blaze.transfer(100000,Dave)
Blaze.transfer(100,Dave)
