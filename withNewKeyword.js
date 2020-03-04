// with new keywork
function userCreator(name,score){
   this.name=name;
   this.score=score;
}

userCreator.prototype.incrementScore =  function(){
        this.score++;
}

const user = new userCreator("demo",5);

user.incrementScore();
console.log("user score "+user.score);
console.log("user name "+user.name);

// extend user and create paid user 

function paidUserCreator(paidName,paidScore,balance){
    userCreator.call(this,paidName,paidScore);
    this.balance=balance; 
}

paidUserCreator.prototype = Object.create(userCreator.prototype);

paidUserCreator.prototype.incrementBalance = function(){
    this.balance++
}

const users = new paidUserCreator("paidUser",7,10)
users.incrementScore();
users.incrementBalance();

console.log("user score "+users.score);
console.log("user balance "+users.balance);

