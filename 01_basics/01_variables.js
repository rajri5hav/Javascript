const accountId = 12345
let accountEmail = "rishav@gmail.com"
var accountPassword = 1234678
accountCity = "Mumbai"

//accountId = 2 // not allowed


accountEmail = "rishav@ris.com"
accountPassword = 87654321
accountCity = "Benguluru"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of use in block scope and functional scope.
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])