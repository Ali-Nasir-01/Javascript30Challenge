// ## Array Cardio Day 2

const people = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const year = new Date().getFullYear();
const olderOrEqualTo19 = (person) => year - person.year >= 19;

const olderThan19 = people.some(olderOrEqualTo19);
console.log(`is at least one person 19 or older? ${olderThan19}`);
// Array.prototype.every() // is everyone 19 or older?
const everyOlderThan19 = people.every(olderOrEqualTo19);
console.log(`is everyone 19 or older? ${everyOlderThan19}`);

// Array.prototype.find()
// find the comment with the ID of 823423
const comment = comments.find((comment) => comment.id === 823423);
console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex((comment) => comment.id === 823423);
comments.splice(commentIndex, 1);
console.log("comments:", comments);
