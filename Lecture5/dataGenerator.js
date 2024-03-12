const fs = require('node:fs/promises');

const names = [
    "Noah"
    , "Amelia"
    , "George"
    , "Isla"
    , "Arthur"
    , "Ava"
    , "Muhammad"
    , "Ivy"
    , "Leo"
    , "Freya"
    , "Harry"
    , "Lily"
    , "Oscar"
    , "Florence"
    , "Archie"
    , "Mia"
    , "Henry"
    , "Willow"
    , "Theodore"
    , "Rosie"
    , "Freddie"
    , "Sophia"
    , "Jack"
    , "Isabella"
    , "Charlie"
];

const surname = [
    "Adams"
    , "Wilson"
    , "Burton"
    , "Harris"
    , "Stevens"
    , "Robinson"
    , "Lewis"
    , "Walker"
    , "Payne"
    , "Baker"
    , "Owen"
    , "Holmes"
    , "Chapman"
    , "Webb"
    , "Allen"
    , "Jones"
    , "Davidson"
    , "Foster"
    , "Matthews"
    , "White"
    , "Black"
];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomItem(lst) {
    return lst[getRandomInt(lst.length)];
}

function generateName() {
    return `${getRandomItem(names)} ${getRandomItem(surname)}`;
}

function getDob() {
    //format YYYY-MM-DD
    //age 19-25
    const year = getRandomInt(25 - 19) + (2024 - 19);
    const month = getRandomInt(12) + 1;
    const day = getRandomInt(20) + 1;
    return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
}

const subjects = [
    {
        id: 1,
        name: "Math"
    },
    {
        id: 2,
        name: "Computer Science"
    },
    {
        id: 3,
        name: "English"
    }
];

const classes = [
    {
        id: 1,
        name: "Ampere"
    },
    {
        id: 2,
        name: "Ohm"
    },
    {
        id: 3,
        name: "Bohr"
    },
    {
        id: 4,
        name: "Angstrom"
    }
];

const personCount = 50;
const persons = [];
let idClass = 1;

for (let i = 0; i < personCount; i++) {
    persons.push({
        id: i + 1,
        name: generateName(),
        dob: getDob(),
        class: idClass
    });
    idClass++;
    if (idClass === classes.length) idClass = 1;
}

const grades = [];
//each student has 10 marks during semester for each Subject
persons.forEach((person) => {
        const marksCount = 5;
        subjects.forEach((subject) => {
                for (let i = 0; i < marksCount; i++) {
                    //1 to 5
                    const mark = getRandomInt(5) + 1;
                    //autumn semester of 2023
                    const month = getRandomInt(3) + 9;
                    const day = getRandomInt(20) + 1;
                    grades.push({
                        idStudent: person.id,
                        idSubject: subject.id,
                        date: `2023-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`,
                        mark: mark
                    });
                }
            }
        )
    }
)

function printList(lst){
    console.log(JSON.stringify(lst, null, " "));
    console.log("=====================");
}

async function saveFile(lst, name) {
    await fs.writeFile(name + ".json", JSON.stringify(lst));
}

//printList(classes);
//printList(subjects);
//printList(persons);
//printList(grades);

saveFile(classes, "classes");
saveFile(subjects, "subjects");
saveFile(persons, "persons");
saveFile(grades, "grades");


