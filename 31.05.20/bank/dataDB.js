// imitation for DB
class client{
    firstName ;
    lastName;
    id;
}
class Transaction{
    id;
    type;
    amount;
}

class  Account {
    id;//int
    clientId; //client
    balance;

}

let bamkDb= {
    clients : [],
    Accounts : [],
    Transactions : [],
};

(function cliens(){
    for(let c = 3 ; c<8;c++){
        let client = new client();
        client.id = c*9484;
        client.firstName ="mester " + c;
        client.lastName = "isrel " + c;
        bamkDb.clients.push(client);

    }
} );
