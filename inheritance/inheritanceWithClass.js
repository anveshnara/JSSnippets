class UserCreator {
      
    constructor(name,score){
          this.name=name;
          this.score=score;
      }
      
      sayName (){
          console.log("Hi  "+this.name);
      }

      incrementScore(){
          this.score++
      }

}

class PaidUser extends UserCreator {

    constructor(paidName,paidScore,balance){
        super(paidName,paidScore);
        this.balance=balance;
    }

    incrementBalance(){
        this.balance++;
    }

}

const paidUser1 = new PaidUser("user",1,4);
paidUser1.sayName()
console.log("user score "+paidUser1.score); 