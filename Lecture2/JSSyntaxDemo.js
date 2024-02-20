//DESTRUCTURING
const obj = {field1: 100, field2: "test", field3: 999};
console.log(obj.field1);
console.log(obj.field2);

function destructuring({field1, field2}){
    console.log(field1);
    console.log(field2);
}

destructuring(obj);

const {field2, field3} = obj;
console.log(field2);
console.log(field3);

const myFruit = ["apple", "banana"];
const [someFruit1, someFruit2, someFruit3] = myFruit;
console.log("someFruit1=" + someFruit1);
console.log("someFruit2=" + someFruit2);
console.log("someFruit3=" + someFruit3);

//MAP
myFruit.map((fruit) => (
    console.log("I love " + fruit)
    )
);

const myFruit2 = myFruit.map((fruit) => (
        fruit + " (" + fruit.length + ")"
    )
);
console.log("myFruit=" + myFruit)
console.log("myFruit2=" + myFruit2)

//SPREAD
const myVegetables = ["potato", "carrot"];
//WRONG! contains two arrays
const myFood = [myFruit, myVegetables];
const myFoodCorrectly = [...myFruit, ...myVegetables];

console.log("myFoodCorrectly=" + myFoodCorrectly);

const obj1 = {prop1: 100, prop2: "bla"};
const obj2 = {prop3: 999, ...obj1};

console.log("obj1=" + obj1);
console.log("obj2=" + obj2);

