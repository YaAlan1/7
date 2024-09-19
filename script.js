let attempts = 3

let a

do {
    if (attempts === 3) {
        a = +prompt("Какой у тебя пароль?");
    } else {
        a = +prompt(`Неправильный пароль. Осталось попыток: ${attempts}. Введи пароль снова:`);
    }

    attempts--;

} while (a !== 3333);

if (a === 3333) {
    alert("Пароль верный!");    
} else {
    alert("Попыток больше нету!");
}


let users = [
    {
        id: 1,
        name: "Samir", 
        tax: 12,
        budget: 400,
        expenses: [100, 120, 170]
    },
    {
        id: 2,
        name: "Safina", 
        tax: 9,
        budget: 1700,
        expenses: [300, 200, 600]
    },
    {
        id: 3,
        name: "Leyla", 
        tax: 9,
        budget: 1500,
        expenses: [180, 240, 500]
    },
    {
        id: 4,
        name: "Azim", 
        tax: 12,
        budget: 180,
        expenses: [40,30,10]
    },
]


let alot = []
let few = []

let successfull = []
let unsuccessfull = []


for(let user of users) {
    let totalExpenses = 0
    let taxSum =user.tax * user.budget / 100

    totalExpenses += taxSum

    for(let expense of user.expenses) {
        totalExpenses += expense
    }

    console.log("total expenses: " + totalExpenses);

    if(totalExpenses > user.budget) {
        unsuccessfull.push(user.name)
    } else {
        successfull.push(user.name)
    }


    
    if(totalExpenses > user.expenses) {
        alot.push(user.name)
    } else {
        few.push(user.name)
    }

}

console.log(successfull);
console.log(unsuccessfull);

console.log(alot);
console.log(few);