$(document).ready(function(){
    var firstParam  = 1;
    var secondParam = 2;
    var thirdParam  = 3;
    function addNumbers(){
        x = firstParam;
        y = secondParam;
        z = thirdParam;
        var result = x + y + z;
        console.log(result); 
        return result;
    }

    var btn = $('#clickme');
    btn.click( addNumbers );

    var myAccount = {
        accountNumber: "23456789",
        balance: 50
    }

    var yourAccount = {
        accountNumber: "8765309",
        balance: 500000
    }

    var accountsList = [myAccount, yourAccount];

    function withdrawal(accountNumber, amount, overdraftCallback){
        // find the account from the accountNumber param
        foundAccount = findAccountByAccountNumber(accountNumber);
        // subtract amount from account balance
        currentBalance = foundAccount.balance;
        newBalance = currentBalance - amount;
        foundAccount.balance = newBalance;
        overdraftCallback(foundAccount);
    }

    function findAccountByAccountNumber(accountNumberParam){
        for(var i = 0; i < accountsList.length; i++){
            currentlyListedAccount = accountsList[i];
            if(currentlyListedAccount.accountNumber === accountNumberParam){
                return currentlyListedAccount;
            }
        }
    }

    withdrawal("23456789", 5000, function(accountToCheck){
        if(accountToCheck.balance > 0){
            alert("you still $$$$!");
        } else {
            alert("please contact your local loan shark...i need yo money");
        }
        console.log("doing something else");
    });
    
});