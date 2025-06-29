const accountId = 144553
let accountEmail = "suhani@google.com"
var accountPassword = "1234"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed

accountEmail = "sm@ssc.com"
accountPassword = "12"
accountCity = "Ddun"

console.log(accountId);

/*
prefer not to use var , as issue of block scape and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);