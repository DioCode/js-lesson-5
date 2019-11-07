// let a = 0;
// let b = '';
// let c = false;
// let d = true;
// let e = [];
// let f = null;
// let g; // undefined

// if (g) {
//   console.log('yes')
// }


// returns

// let nums = [1, 2, 3, -1, 4, 5, 6];

// function allPositives(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(allPositives(nums));

///////

// function includesA(str) {
//   if (str.includes('A')) {
//     return true;
//   }
//   return false;
// }

// function includesA(str) {
//   return str.includes('A');
// }

////////

// console.log(a);
// var a = 2;

// hoisting

////////

// const MAX_AGE = 3; // нельзя переопределить константу и пишеться большими буквами

// const A = 15;

// if (A) {
//   let b = 13;
//   var c = 26;
// }

// {
//   var p = 13; // block
// }

// console.log(p);

////////

// function foo() {
//   var bar = 3;
// }

// console.log(bar);

////////
// objects

// let person = {
//   name: 'Steve',
//   age: 30,
//   country: 'USA',
//   languages: ['English', 'Ukrainian'],
//   school: {
//     name: 'Best School',
//     country: 'USA',
//     studentsNumber: 1300
//   }
// }

// console.log(person.school.name)

// console.log(person.languages[1])
// console.log(person['languages[1]']);

// function getValue(obj, key) {
//   return obj.key;
// }

// console.log(getValue(person, 'name'))

// person.car = 'BMW';

// console.log(person)

// function addToFriendList(person, friend) {
//   person.friends.push(friend);
//   return person;
// }

// let person1 = {
//   name: 'Steve',
//   age: 30,
//   country: 'USA',
//   friend: []
// };
// let person2 = {
//   name: 'John',
//   age: 41,
//   country: 'UK'
// };


// console.log(addToFriendList(person1, person2))


/////////

// let people = [
//   {
//     name: 'Steve',
//     country: 'USA'
//   },
//   {
//     name: 'Jack',
//     country: 'Poland'
//   },
//   {
//     name: 'Jane',
//     country: 'Germany'
//   },
//   {
//     name: 'Noah',
//     country: 'UK'
//   }
// ];



// for (let i = 0; i < people.length; i++) {
//   console.log(people[i].name)
// }

/////////

// function createPerson(name, age, city) {
//   return {
//     name: name,
//     age: age,
//     city: city
//   }
// }

// console.log(createPerson('Vasia', 11, 'Kyiv'))

// createPerson('Vasia', 11, 'Kyiv) -> {
//  name: 'Vasia',
//  age: 11,
//  city: 'Kyiv'

let people = [
  {
    name: 'Steve',
    languages: ['German']
  },
  {
    name: 'Jake',
    languages: ['English', 'Ukrainian']
  },
  {
    name: 'Kate',
    languages: ['Spanish', 'English']
  },
  {
    name: 'Dave',
    languages: ['Ukrainian']
  },
];

function onlyEnglish(people) {
  let newPeople = [];

  for (let i = 0; i < people.length; i++) {
    if (!people[i].languages.includes('English')) {
      people[i].languages.push('English');
    } else {
      newPeople.push(people[i]);
    }
  }
  let np = [newPeople, people];
  // or return [newPeople, people];
  return np;
}

console.log(onlyEnglish(people))
