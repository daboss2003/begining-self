class BalanceException(Exception):
    pass

class BankAccount:
    def __init__(self, initialAmount, accName):
        self.balance = initialAmount
        self.name = accName
        print(f"\nAccount '{self.name}' created.\nBalance = ${self.balance:.2f}")
        
        
    def getBalance(self):
        print(f"\nAccount '{self.name} balance = ${self.balance:.2f}")
        
    def deposit(self,amount):
        self.balance  = self.balance + amount
        print("\nDeposit Complete.")
        self.getBalance()
        
        
    def viableTransaction(self,amount):
        if self.balance >= amount:
            return
        else:
            raise BalanceException(
                f"\n Sorry, account '{self.name}' only has a balance of ${self.balance:.2f}"
            )
            
    def withDraw(self,amount):
        try:
            self.viableTransaction(amount)
            self.balance = self.balance - amount
            print("\n Withdraw Complete.")
            self.getBalance()
        except BalanceException as error:
            print(f"\nWithdraw interrupted: {error}")
            
            
    def transfer(self,amount,account):
        try:
            print("\n********************\n\nBegining TRansfer.....🚀🚀🚀")
            self.viableTransaction(amount)
            self.withDraw(amount)
            account.deposit(amount)
            print("\nTransfer Complete!✅\n\n*************")
        except BalanceException as error:
            print(f"\n Transfer Interupted. ❌ {error}")
            
class intresetRewardAcct(BankAccount):
    def deposit(self, amount):
        self.balance = self.balance + (amount * 1.05)
        print("\nDeposit Complete")
        self.getBalance()
        
        
class SavingsAcct(intresetRewardAcct):
    def __init__(self, initialAmount,accName):
        super().__init__(initialAmount,accName)
        self.fee = 5
    def withDraw(self, amount):
       try:
           self.viableTransaction(amount + self.fee)
           self.balance = self.balance - (amount + self.fee)
           print("\n Withdraw Completed.")
           self.getBalance()
       except BalanceException as error:
           print(f"\nWithdraw Interupted:{error}")
           
           
        
        
            
        
                
        
        
        
        
        
        