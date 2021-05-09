const {Blockchain, Transactions} = require('./blockchain');

let cagaCoin = new Blockchain()

cagaCoin.createTransactions(new Transactions('address1', 'address2', 100))
cagaCoin.createTransactions(new Transactions('address2', 'address1', 50))

console.log('\n Starting the miner... ');
cagaCoin.minePendingTransactions('cagatay-address')


console.log('\n Balance of cagatay is', cagaCoin.getBalanceOfAddress('cagatay-address'));

console.log('\n Starting the miner again... ');
cagaCoin.minePendingTransactions('cagatay-address')

console.log('\n Balance of cagatay is', cagaCoin.getBalanceOfAddress('cagatay-address'));

