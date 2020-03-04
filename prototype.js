// method 1 with out new keyword 

// create a normal user 

function userCreator(name,score){
    const user = Object.create(userFunctionStore);
    user.name = name;
    user.score = score;
    return user;
}

const userFunctionStore ={
    incrementScore : function(){
        this.score++;
    }
} 

const createUser = userCreator("Jeo",5);
console.log("name "+createUser.name);
console.log("intial score "+createUser.score);
createUser.incrementScore();
console.log("increment score "+createUser.score);

//extend user and create a super user have functionality  to add account balance.
function superUser(user,score,accountBalance){
    const superAdmin = userCreator(user,score)
    Object.setPrototypeOf(superAdmin,superUserFunctions);
    superAdmin.accountBalance = accountBalance;
    return superAdmin;
}


const superUserFunctions ={
    incrementAccountBalance : function(){
        this.accountBalance++
    }
}

Object.setPrototypeOf(superUserFunctions,userFunctionStore)


const users = superUser("superUser",5,7);
console.log("user name "+users.name);
users.incrementAccountBalance();
users.incrementScore();
console.log("increment balance "+users.accountBalance);
console.log("increment score "+users.score);
