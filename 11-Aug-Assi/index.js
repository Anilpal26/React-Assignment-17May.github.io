console.log("Its Working");

const users = [
     {
        name : 'Alex',
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: false,
        points: 30
    },
     {
        name : 'Asab',
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
     {
        name : 'Brook',
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
     {
        name : 'Daniel',
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
     {
        name : 'John',
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
     {
        name : 'Thomas',
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
     {
        name : 'Paul',
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
]

let skills = ['Mongo', 'Express', 'React', 'Node']
let score = 40;

let MernStudent = [];
let passedStudent = [];

const MernOutPut = document.getElementById('mernOutput');
const OutPut = document.getElementById('output');

function mernStudent(){
    console.log("Mern Student");
    for(let i = 0; i < users.length; i++){
       for(let j = 0; j < skills.length; j++){
           users.skills == skills[i];
           console.log(skills[i]);
           MernStudent.push(skills[i]);
           MernOutPut.innerHTML = MernStudent;
        }
    }
}

function changeValue() {
    for(let i = 0; i < users.length; i++){
        if(users[i].points > score){
            passedStudent.push(users[i].name);
            console.log(passedStudent);
            OutPut.innerHTML = passedStudent;
        }
    }
}










